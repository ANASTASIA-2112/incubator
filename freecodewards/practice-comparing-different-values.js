// Setup
function compareEquality(a, b) {
  if (typeof a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");