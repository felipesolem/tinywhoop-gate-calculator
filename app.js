// ============================================
// 1. OBSTACLE DATA — Array of Objects
// ============================================

const obstacles = [
  {
    name: "Ladder 2 steps and Pylon",
    fullPieces: 7,
    floorPieces: 4,
    tConnections: 5,
    elbowConnections: 1,
    fiveHoleConnections: 0,
    cubeConnections: 0,
  },
  {
    name: "Ladder Full (3 steps)",
    fullPieces: 9,
    floorPieces: 4,
    tConnections: 6,
    elbowConnections: 2,
    fiveHoleConnections: 0,
    cubeConnections: 0,
  },
  {
    name: "Ladder 2 steps with side gate",
    fullPieces: 8,
    floorPieces: 6,
    tConnections: 5,
    elbowConnections: 3,
    fiveHoleConnections: 0,
    cubeConnections: 0,
  },
  {
    name: "Floor continuous gates 3",
    fullPieces: 7,
    floorPieces: 8,
    tConnections: 6,
    elbowConnections: 2,
    fiveHoleConnections: 0,
    cubeConnections: 0,
  },
  {
    name: "Floor continuous gates 2",
    fullPieces: 5,
    floorPieces: 6,
    tConnections: 4,
    elbowConnections: 2,
    fiveHoleConnections: 0,
    cubeConnections: 0,
  },
  {
    name: "Single Gate",
    fullPieces: 3,
    floorPieces: 4,
    tConnections: 2,
    elbowConnections: 2,
    fiveHoleConnections: 0,
    cubeConnections: 0,
  },
  {
    name: "Cube",
    fullPieces: 8,
    floorPieces: 0,
    tConnections: 0,
    elbowConnections: 0,
    fiveHoleConnections: 0,
    cubeConnections: 4,
  },
  {
    name: "Pylon",
    fullPieces: 1,
    floorPieces: 4,
    tConnections: 0,
    elbowConnections: 0,
    fiveHoleConnections: 1,
    cubeConnections: 0,
  },
];

// ============================================
// 2. FUNCTIONS
// ============================================

// Find an obstacle by name in the array
function getObstacle(name) {
  return obstacles.find(function (obstacle) {
    return obstacle.name === name;
  });
}

// Multiply each piece/connection count by quantity
function calculatePieces(obstacle, quantity) {
  return {
    fullPieces: obstacle.fullPieces * quantity,
    floorPieces: obstacle.floorPieces * quantity,
    tConnections: obstacle.tConnections * quantity,
    elbowConnections: obstacle.elbowConnections * quantity,
    fiveHoleConnections: obstacle.fiveHoleConnections * quantity,
    cubeConnections: obstacle.cubeConnections * quantity,
  };
}

// Sum an array of totals objects into one grand total
function sumAllPieces(listOfTotals) {
  var total = {
    fullPieces: 0,
    floorPieces: 0,
    tConnections: 0,
    elbowConnections: 0,
    fiveHoleConnections: 0,
    cubeConnections: 0,
  };

  for (var i = 0; i < listOfTotals.length; i++) {
    total.fullPieces += listOfTotals[i].fullPieces;
    total.floorPieces += listOfTotals[i].floorPieces;
    total.tConnections += listOfTotals[i].tConnections;
    total.elbowConnections += listOfTotals[i].elbowConnections;
    total.fiveHoleConnections += listOfTotals[i].fiveHoleConnections;
    total.cubeConnections += listOfTotals[i].cubeConnections;
  }

  return total;
}

// Convert piece counts to total length in inches
// Full piece = gateSize, Floor piece = gateSize / 2
function convertToLength(totalFullPieces, totalFloorPieces, gateSize) {
  var fullLength = totalFullPieces * gateSize;
  var floorLength = totalFloorPieces * (gateSize / 2);
  return fullLength + floorLength;
}

// Convert inches to feet
function inchesToFeet(inches) {
  return inches / 12;
}

// Convert inches to meters
function inchesToMeters(inches) {
  return inches * 0.0254;
}

// ============================================
// 3. DISPLAY RESULTS — reads form, calls functions, shows output
// ============================================

function displayResults() {
  // Read gate size from the form
  var gateSize = parseFloat(document.getElementById("gate-size").value);

  if (isNaN(gateSize) || gateSize <= 0) {
    alert("Please enter a valid gate size in inches.");
    return;
  }

  // Read quantities for each obstacle
  var allTotals = [];

  for (var i = 0; i < obstacles.length; i++) {
    var inputId = "qty-" + i;
    var qty = parseInt(document.getElementById(inputId).value) || 0;

    if (qty > 0) {
      var pieces = calculatePieces(obstacles[i], qty);
      allTotals.push(pieces);
    }
  }

  if (allTotals.length === 0) {
    alert("Please select at least one obstacle (set quantity > 0).");
    return;
  }

  // Sum all pieces
  var grandTotal = sumAllPieces(allTotals);

  // Convert to length
  var totalInches = convertToLength(
    grandTotal.fullPieces,
    grandTotal.floorPieces,
    gateSize
  );
  var totalFeet = inchesToFeet(totalInches);
  var totalMeters = inchesToMeters(totalInches);

  // Build results HTML
  var resultsHTML = "";

  resultsHTML += "<h2>Results</h2>";

  resultsHTML += "<div class='result-section'>";
  resultsHTML += "<h3>Tubes Needed</h3>";
  resultsHTML +=
    "<p><strong>Full-size tubes:</strong> " +
    grandTotal.fullPieces +
    " (each " +
    gateSize +
    '" long)</p>';
  resultsHTML +=
    "<p><strong>Floor tubes:</strong> " +
    grandTotal.floorPieces +
    " (each " +
    (gateSize / 2) +
    '" long)</p>';
  resultsHTML += "</div>";

  resultsHTML += "<div class='result-section'>";
  resultsHTML += "<h3>Connectors Needed</h3>";
  if (grandTotal.tConnections > 0) {
    resultsHTML +=
      "<p><strong>T-connectors (3 holes):</strong> " +
      grandTotal.tConnections +
      "</p>";
  }
  if (grandTotal.elbowConnections > 0) {
    resultsHTML +=
      "<p><strong>Elbow connectors (2 holes):</strong> " +
      grandTotal.elbowConnections +
      "</p>";
  }
  if (grandTotal.fiveHoleConnections > 0) {
    resultsHTML +=
      "<p><strong>5-hole connectors:</strong> " +
      grandTotal.fiveHoleConnections +
      "</p>";
  }
  if (grandTotal.cubeConnections > 0) {
    resultsHTML +=
      "<p><strong>Cube connectors:</strong> " +
      grandTotal.cubeConnections +
      "</p>";
  }
  resultsHTML += "</div>";

  resultsHTML += "<div class='result-section'>";
  resultsHTML += "<h3>Total PVC Tube Length</h3>";
  resultsHTML +=
    "<p><strong>Inches:</strong> " + totalInches.toFixed(1) + '"</p>';
  resultsHTML +=
    "<p><strong>Feet:</strong> " + totalFeet.toFixed(2) + " ft</p>";
  resultsHTML +=
    "<p><strong>Meters:</strong> " + totalMeters.toFixed(2) + " m</p>";
  resultsHTML += "</div>";

  document.getElementById("results").innerHTML = resultsHTML;
}

// ============================================
// 4. EVENT LISTENER — wire up the Calculate button
// ============================================

document.getElementById("calculate-btn").addEventListener("click", displayResults);w