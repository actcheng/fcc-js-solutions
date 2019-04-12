function convertToRoman(num) {
    let dict={
        1:'I',
        5:'V',
        10:'X',
        50:'L',
        100:'C',
        500:'D',
        1000:'M'
    };
    let checklist=[1000,100,10,1];
    let remain = num;
    let romanArr = [];

    for (let i=0;i<checklist.length;i++){

        while (remain>=checklist[i]*0.4){           
            if (remain>=checklist[i]){
                while (remain>=checklist[i]){
                    remain -= checklist[i];
                    romanArr.push(dict[checklist[i]]);
                }
            } else if (remain >= checklist[i]*0.9) {
                remain -= checklist[i]*0.9;
                romanArr.push(dict[checklist[i]*0.1],dict[checklist[i]]);
            } else if (remain >= checklist[i]*0.5){
                remain -= checklist[i]*0.5;
                romanArr.push(dict[checklist[i]*0.5]);
            } else if (remain >= checklist[i]*0.4) {
                remain -= checklist[i]*0.4;
                romanArr.push(dict[checklist[i]*0.1],dict[checklist[i]*0.5]);  
            }
        }
    }
    return romanArr.join('')
 
}
