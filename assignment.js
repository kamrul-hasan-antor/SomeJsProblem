// https://github.com/kamrul-hasan-antor/assignmentThree

// The kilometerToMeter problem solving is given below.

function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "Error: Please insert a positive value. Distance cannot be negetive.";
  }
  var meter = kilometer * 1000;
  return meter;
}

var result = kilometerToMeter(-5698);
console.log(result);
