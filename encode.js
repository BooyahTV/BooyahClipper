const ffmpeg = require('fluent-ffmpeg');
const { data } = require('./data')

/** data.forEach((item) => {
  ffmpeg(`${item.input}`)
    .inputOption(`-sseof -20`)
    .videoCodec ("copy")
    .audioCodec ("copy")
    .save(`${item.output}`)
})
* Codigo viejo 
*/

//Clip de preview, 2 minutos
export function renderClip(from, duration) {
    ffmpeg(`${item.input}`)
    .inputOption(`-sseof -120`)
    .videoCodec ("copy")
    .audioCodec ("copy")
    .save(`${item.output}`)
}

//Este seria el clip final con -20 como variable
export function renderClipFinal(from, duration) {
    ffmpeg(`${item.input}`)
    .inputOption(`-sseof -20`)
    .videoCodec ("copy")
    .audioCodec ("copy")
    .save(`${item.output}`)
}

export default renderClip
