// ============================================
// 1. OBSTACLE DATA — Array of Objects
// ============================================

const obstacles = [
  { id: 1, name: "Ladder 2 steps and Pylon",    fullPieces: 7, floorPieces: 4, tConnections: 5, elbowConnections: 1, fiveHoleConnections: 0, cubeConnections: 0 },
  { id: 2, name: "Ladder Full (3 steps)",        fullPieces: 9, floorPieces: 4, tConnections: 6, elbowConnections: 2, fiveHoleConnections: 0, cubeConnections: 0 },
  { id: 3, name: "Ladder 2 steps with side gate",fullPieces: 8, floorPieces: 6, tConnections: 5, elbowConnections: 3, fiveHoleConnections: 0, cubeConnections: 0 },
  { id: 4, name: "Floor continuous gates 3",     fullPieces: 7, floorPieces: 8, tConnections: 6, elbowConnections: 2, fiveHoleConnections: 0, cubeConnections: 0 },
  { id: 5, name: "Floor continuous gates 2",     fullPieces: 5, floorPieces: 6, tConnections: 4, elbowConnections: 2, fiveHoleConnections: 0, cubeConnections: 0 },
  { id: 6, name: "Single Gate",                  fullPieces: 3, floorPieces: 4, tConnections: 2, elbowConnections: 2, fiveHoleConnections: 0, cubeConnections: 0 },
  { id: 7, name: "Cube",                         fullPieces: 8, floorPieces: 0, tConnections: 0, elbowConnections: 0, fiveHoleConnections: 0, cubeConnections: 4 },
  { id: 8, name: "Pylon",                        fullPieces: 1, floorPieces: 4, tConnections: 0, elbowConnections: 0, fiveHoleConnections: 1, cubeConnections: 0 },
];

// Keys we need to sum across obstacles
const PIECE_KEYS = ["fullPieces", "floorPieces", "tConnections", "elbowConnections", "fiveHoleConnections", "cubeConnections"];

// ============================================
// 2. FUNCTIONS
// ============================================

// Find an obstacle by name in the array
const getObstacle = (name) => obstacles.find((o) => o.name === name);

// Multiply each piece/connection count by quantity
const calculatePieces = (obstacle, quantity) => {
  const result = {};
  PIECE_KEYS.forEach((key) => {
    result[key] = obstacle[key] * quantity;
  });
  return result;
};

// Sum an array of totals objects into one grand total
const sumAllPieces = (listOfTotals) =>
  listOfTotals.reduce((total, current) => {
    PIECE_KEYS.forEach((key) => {
      total[key] = (total[key] || 0) + current[key];
    });
    return total;
  }, {});

// Convert piece counts to total length in inches
// Full piece = gateSize, Floor piece = gateSize / 2
const convertToLength = (totalFullPieces, totalFloorPieces, gateSize) => {
  const fullLength = totalFullPieces * gateSize;
  const floorLength = totalFloorPieces * (gateSize / 2);
  return fullLength + floorLength;
};

// Convert inches to feet
const inchesToFeet = (inches) => inches / 12;

// Convert inches to meters
const inchesToMeters = (inches) => inches * 0.0254;

// ============================================
// 3. DISPLAY RESULTS — reads form, calls functions, shows output
// ============================================

const displayResults = () => {
  const gateSize = parseFloat(document.getElementById("gate-size").value);

  if (isNaN(gateSize) || gateSize <= 0) {
    alert("Please enter a valid gate size in inches.");
    return;
  }

  // Collect totals for every obstacle with qty > 0
  const allTotals = obstacles
    .map((obstacle, i) => {
      const qty = parseInt(document.getElementById(`qty-${i}`).value) || 0;
      return qty > 0 ? calculatePieces(obstacle, qty) : null;
    })
    .filter((entry) => entry !== null);

  if (allTotals.length === 0) {
    alert("Please select at least one obstacle (set quantity > 0).");
    return;
  }

  const grandTotal = sumAllPieces(allTotals);

  const totalInches = convertToLength(grandTotal.fullPieces, grandTotal.floorPieces, gateSize);
  const totalFeet = inchesToFeet(totalInches);
  const totalMeters = inchesToMeters(totalInches);

  // Connector lines — only show if count > 0
  const connectors = [
    { label: "T-connectors (3 holes)",    value: grandTotal.tConnections },
    { label: "Elbow connectors (2 holes)", value: grandTotal.elbowConnections },
    { label: "5-hole connectors",          value: grandTotal.fiveHoleConnections },
    { label: "Cube connectors",            value: grandTotal.cubeConnections },
  ];

  const connectorsHTML = connectors
    .filter((c) => c.value > 0)
    .map((c) => `<p><strong>${c.label}:</strong> ${c.value}</p>`)
    .join("");

  document.getElementById("results").innerHTML = `
    <h2>Results</h2>

    <div class="result-section">
      <h3>Tubes Needed</h3>
      <p><strong>Full-size tubes:</strong> ${grandTotal.fullPieces} (each ${gateSize}" long)</p>
      <p><strong>Floor tubes:</strong> ${grandTotal.floorPieces} (each ${gateSize / 2}" long)</p>
    </div>

    <div class="result-section">
      <h3>Connectors Needed</h3>
      ${connectorsHTML}
    </div>

    <div class="result-section">
      <h3>Total PVC Tube Length</h3>
      <p><strong>Inches:</strong> ${totalInches.toFixed(1)}"</p>
      <p><strong>Feet:</strong> ${totalFeet.toFixed(2)} ft</p>
      <p><strong>Meters:</strong> ${totalMeters.toFixed(2)} m</p>
    </div>
  `;
};

// ============================================
// 4. EVENT LISTENER — wire up the Calculate button
// ============================================

document.getElementById("calculate-btn").addEventListener("click", displayResults);