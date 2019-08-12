const fs = require('fs');
const spawnSync = require('child_process').spawnSync;

const calc = (inp)=>{
    if(inp[1] == '')
        inp.splice(1,1);
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
    gpuTemp:()=>{
        return parseFloat(
            spawnSync(
                '/opt/vc/bin/vcgencmd',
                ['measure_temp']
            ).stdout.toString().split("=")[1]
        );
    },
    cpuTemp:()=>{
        let cpuTemp = parseInt(fs.readFileSync('/sys/class/thermal/thermal_zone0/temp')),
            cpuTemp1=parseInt(cpuTemp/1000),
            cpuTemp2=parseInt(cpuTemp/100),
            cpuTempM=(cpuTemp2 % cpuTemp1);
         return parseInt(cpuTemp1).toString()+"."+parseInt(cpuTempM).toString()
    },
    cpuUsage:()=>{
        let readStat = fs.readFileSync('/proc/stat'),
            out={};
        readStat = readStat.toString().split("\n");
        for(let i = 0 ; readStat.length > i ; i++){
            readStat[i] = readStat[i].split(" ");
            if (readStat[i][0] === 'cpu'){
               out['all'] = calc(readStat[i]);
            }else if(readStat[i][0].substring(0,3) === 'cpu'){
                out[readStat[i][0]] = calc(readStat[i]);
            }
        }

        return out;
    }
}

