//Ejecuta streamlink para guardar el stream (./stream/streamlink.sh)

const exec = require('child_process').exec;
const streamlink = exec('sh ./stream/streamlink.sh');
streamlink.stdout.on('data', (data)=>{
    console.log(data); 
    
});
streamlink.stderr.on('data', (data)=>{
    console.error(data);
});