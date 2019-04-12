function checkCashRegister(price, cash, cid) {
  var change = [];
  var values = {
    "PENNY":    0.01,
    "NICKEL":   0.05,
    "DIME":     0.1,
    "QUARTER":  0.25,
    "ONE":      1,
    "FIVE":     5,
    "TEN":      10,
    "TWENTY":   20,
    "ONE HUNDRED": 100
  }

  var due = cash-price;
  var total = Math.round(cid.map(item => item[1]).reduce((total,amount)=>total+amount)*100)/100
  
  if (total<due){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (total==due){
    return {status: "CLOSED", change: [...cid]}
  } else {
    let dueRemain = due;
    for (let i=cid.length-1;i>=0;i--){
      if (dueRemain>values[cid[i][0]]){
        if (dueRemain>cid[i][1]){
          change.push([cid[i][0],cid[i][1]]);
          dueRemain -= cid[i][1];
        } else {
          let j = 0;
          while (Math.round(dueRemain*100)/100>=values[cid[i][0]]){
            dueRemain -= values[cid[i][0]];
            j++;
          }
          change.push([cid[i][0],Math.round(values[cid[i][0]]*j*100)/100]);                 
        }
         
      }       
    }

    if (Math.round(dueRemain*100) > 0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else {
      return {status: "OPEN", change: [...change]}
    }

  }
}
