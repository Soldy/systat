const fs = require('fs');

const cpuCalc = function(inp){
    return (100-(                            
         Math.floor(                         
              (parseInt(inp[4])*100)/(       
                  parseInt(inp[1])+          
                  parseInt(inp[2])+          
                  parseInt(inp[3])+          
                  parseInt(inp[4])+           
                  parseInt(inp[5])+           
                  parseInt(inp[6])+           
                  parseInt(inp[7])+           
                  parseInt(inp[8])+           
                  parseInt(inp[9])+           
                  parseInt(inp[10])           
             )                                
        )                                     
        ));
}
exports.stat={
    cpuTemp:function(){
        let cpuTemp = parseInt(fs.readFileSync('/sys/class/thermal/thermal_zone0/temp')),
            cpuTemp1=(cpuTemp/1000),
            cpuTemp2=(cpuTemp/100),
            cpuTempM=(cpuTemp2 % cpuTemp1);
         return parseInt(cpuTemp1).toString()+"."+parseInt(cpuTempM).toString()
    },
    cpuUsage:function(){
        let readStat = fs.readFileSync('/proc/stat'),
            out={};
        readStat = readStat.toString().split("\n");
        for(let i = 0 ; readStat.length > i ; i++){
            readStat[i] = readStat[i].split(" ");
            if(
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
                out[readStat[i][0]] = cpuCalc(readStat[i]);
            }
        }

        return out;
    }
}


