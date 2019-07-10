import fs from 'fs';

function filterSerialNumber(data: string): string {
    const lines = data.split(/\r\n|\n/).filter(v=>v.indexOf("Serial")===0);
    if(lines.length<=0)
        throw "Couldn't read the Serial number. Are you sure you're running this script on a Raspberry Pi?";
    const line = lines[0];
    const matches = line.match(/^Serial\s*:\s*([0-9a-f]+)$/i);
    if(!matches || matches.length<=0)
        throw "Serial has invalid format. Are you sure you're running this script on a Raspberry Pi?";
    return matches[1].replace(/^0+/, '');
}

async function getSerialNumber(): Promise<string> {
    return new Promise((resolve,reject) => {
        try {
            fs.readFile("/proc/cpuinfo","ascii",(err,data)=>{
                if(err)
                    reject(err);
                else
                    resolve(filterSerialNumber(data));
            })
        } catch (e) {
            reject(e);
        }
    });
}

function getSerialNumberSync(): string {
    return filterSerialNumber(fs.readFileSync("/proc/cpuinfo","ascii"));
}

export {getSerialNumber, getSerialNumberSync};