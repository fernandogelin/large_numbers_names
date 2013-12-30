var NumberToText = {
    ones: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    more: ['', '', '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion']
};

var NumberName = function(StringInput) {
  if (StringInput === "0") {
    return "zero";
  } else if (StringInput.length === 1) {
    StringNumber = "00" + StringInput;
  } else if (StringInput.length === 2) {
    StringNumber = "0" + StringInput;
  } else {
    StringNumber = StringInput;
  }
  number = parseInt(StringNumber);
  if (StringNumber[0] === "0") {
    if (StringNumber[1] === "0") {
          return NumberToText.ones[parseInt(StringNumber[2])];
    } else if (StringNumber[1] === "1") {
          return NumberToText.ones[parseInt(StringNumber[2])+10];
    } else {
          return NumberToText.tens[parseInt(StringNumber[1])] + " " + NumberToText.ones[parseInt(StringNumber[2])];
    }
  } else {
      if (StringNumber[1] === "0" && StringNumber[2] === "0") {
          return NumberToText.ones[parseInt(StringNumber[0])] + " " + "hundred";
    } else if (parseInt(StringNumber[1]+StringNumber[2]) < 20) {
          return NumberToText.ones[parseInt(StringNumber[0])] + " " + "hundred" + " " + NumberToText.ones[parseInt(StringNumber[1]+StringNumber[2])];
    } else { 
          return NumberToText.ones[parseInt(StringNumber[0])] + " " + "hundred" + " " + NumberToText.tens[parseInt(StringNumber[1])] + " " + NumberToText.ones[parseInt(StringNumber[2])];
    }
  }
};

var LargeNumbers = function(StringNumber) {
  ThreeMers = [];
  for (var i=StringNumber.length; i>0; i-=3) {
    ThreeMers.push(StringNumber.substring(i-3,i));
  }
  return ThreeMers.reverse();
};

var LargeNumbersNames = function(StringNumber) {
    NumberNamesArray = [];
    for (var j=0; j<LargeNumbers(StringNumber).length; j++) {
      if (LargeNumbers(StringNumber)[j] === "000") {
        NumberNamesArray.push("");
      } else {
        NumberNamesArray.push(NumberName(LargeNumbers(StringNumber)[j])+ " " + NumberToText.more[LargeNumbers(StringNumber).length-j+1]);
    }
  }  
  return NumberNamesArray.join(" ");
};
