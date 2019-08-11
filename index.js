const fs = require('fs');

// 5583 0 6131 857838 1414 0 266 0 0 0
const calc = function(inp){
    return (100-(
        (inp[4]*100)/(inp[1]+inp[2]+inp[3]+inp[4]+inp[5]+inp[6]+inp[7]+inp[8]+inp[9]+inp[10])
        ));
}


exports.stat={
    cpu:function(){
        let readStat = fs.readFileSync('/proc/stat'),
            out={};
        readStat = readStat.toString().split("\n");
        for(let i = 0 ; readStat.length > i ; i++){
            readStat[i] = readStat[i].split(" ");
            if (readStat[i][0] === 'cpu'){
               out['all'] = calc(readStat[i]);
            }else if(
                (readStat[i][0] === 'cpu0')||
                (readStat[i][0] === 'cpu1')||
                (readStat[i][0] === 'cpu2')||
                (readStat[i][0] === 'cpu3')||
                (readStat[i][0] === 'cpu4')||
                (readStat[i][0] === 'cpu5')||
                (readStat[i][0] === 'cpu6')||
                (readStat[i][0] === 'cpu7')||
                (readStat[i][0] === 'cpu8')||
                (readStat[i][0] === 'cpu9')||
                (readStat[i][0] === 'cpu10')||
                (readStat[i][0] === 'cpu11')||
                (readStat[i][0] === 'cpu12')||
                (readStat[i][0] === 'cpu13')||
                (readStat[i][0] === 'cpu14')||
                (readStat[i][0] === 'cpu15')||
                (readStat[i][0] === 'cpu16')||
                (readStat[i][0] === 'cpu17')||
                (readStat[i][0] === 'cpu18')||
                (readStat[i][0] === 'cpu19')||
                (readStat[i][0] === 'cpu20')||
                (readStat[i][0] === 'cpu21')||
                (readStat[i][0] === 'cpu22')||
                (readStat[i][0] === 'cpu23')||
                (readStat[i][0] === 'cpu24')||
                (readStat[i][0] === 'cpu25')||
                (readStat[i][0] === 'cpu26')||
                (readStat[i][0] === 'cpu27')||
                (readStat[i][0] === 'cpu28')||
                (readStat[i][0] === 'cpu29')
            ){
                out[readStat[i][0]] = calc(readStat[i]);
            }
            console.log(readStat[i]);
        }
        return out;
    }
}


