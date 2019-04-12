function palindrome(str) {
  var arr = str.replace(/[^A-Za-z1-3]/g,'').toLowerCase().split('') 
  var revArr = [...arr].reverse();
  for (let i=0;i<arr.length/2+1;i++){
    if (arr[i]!==revArr[i]){      
      return false;
    }
  }
  return true;
}
