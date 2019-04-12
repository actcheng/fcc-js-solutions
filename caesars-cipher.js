function rot13(str) {
  var arr = str.split('');
  var seq = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var newArr = arr.map(function(item){
    let ind = seq.indexOf(item)
    if (ind>-1){
      if (ind>=13){
        return seq[ind-13]
      } else {
        return seq[ind+13]
      }      
    } else{
      return item
    }
    
  })
  return newArr.join('');
}
