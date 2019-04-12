function telephoneCheck(str) {
  var digits = str.match(/\d/g);
  var strNine = str.replace(/\s/g,'');
  console.log(strNine)
  // Check number of digits
  if (digits.length === 11){

    // Check country code
    if (digits[0] == 1){
      console.log(digits[0])
      strNine = strNine.slice(1)
      console.log(strNine)
    } else {
      console.log('Wrong country code')
      return false
    }
  } else if (digits.length!==10){
    console.log('Wrong digit num')
    return false
  } 
  // Check brackets
  if (strNine[0]==='('){
    strNine = strNine.replace('(','');
    if (strNine[3]!==')'){
      console.log(strNine, 'Wrong Bracket')
      return false
    } else {
      strNine = strNine.replace(')','');
    }
  } 

  if (/\(|\)/g.test(strNine)===true){
    console.log(strNine, 'Wrong Bracket')
    return false
  }
  return true;
}
