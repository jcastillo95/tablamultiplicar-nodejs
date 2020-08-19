//requireds

const filesystem = require('fs');

let listarTabla = (base, limite) => {
    for (let i = 0; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i} \n`);
    }
}
let crearArchivo = (tabla, lim) => {
    return new Promise((resolve, reject) => {
        if (!Number(tabla)) {
            reject(`El valor introducido ${taba} no es un número`);
            return;
        }
        let data = '';
        for (let i = 0; i <= lim; i++) {

            data += `${tabla} * ${i} = ${tabla*i} \n`;
        }
        filesystem.writeFile(`tabla${tabla}-al-${lim}.txt`, data, (error) => {
            if (error)
                reject(error)
            else
                resolve(`tabla${tabla}-al-${lim}.txt`)
        });

    });

}
module.exports = {
    crearArchivo,
    listarTabla
}