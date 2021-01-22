// https://github.com/kamrul-hasan-antor/assignmentThree

// The "kilometerToMeter" problem solving is given below.

function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "Error: Please insert a positive value. Distance cannot be negetive.";
  }
  var meter = kilometer * 1000;
  return meter;
}

// The "budgetCalculator" problem solving is given below.

function budgetCalculator(watch, phone, laptop) {
  if ((watch, phone, laptop < 0)) {
    return "Error: Please insert a positive value.";
  }
  var cost = watch * 50 + phone * 100 + laptop * 500;
  return cost;
}

// The "hotelCost" problem solving is given below.

function hotelCost(days) {
  var cost = 0;
  if (days < 0) {
    return "Error: Please insert a positive value. ";
  } else if (days <= 10) {
    cost = days * 100;
  } else if (days <= 20) {
    var firstTenDays = 10 * 100;
    var remainingDays = days - 10;
    var secondTenDaysCost = remainingDays * 80;
    cost = firstTenDays + secondTenDaysCost;
  } else if (days > 20) {
    var firstTenDays = 10 * 100;
    var secondTenDaysCost = 10 * 80;
    var remainingDays = days - 20;
    var moreThanTwentyDaysCost = remainingDays * 50;
    cost = firstTenDays + secondTenDaysCost + moreThanTwentyDaysCost;
  }
  return cost;
}

// The "megaFriend" problem solving given below.

function megaFriend(friend) {
  var longest = friend[0];

  for (var i = 0; i < friend.length; i++) {
    var element = friend[i];
    if (element.length > longest.length) {
      longest = element;
    } else if (friend == "") {
      return "Error: Please insert a name.";
    }
  }
  return longest;
}
