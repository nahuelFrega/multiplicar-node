// requires
const fs = require('fs');
const colors = require('colors');

// Funciones
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El dato enviado "${ base }" no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += (`${ base } * ${ i } = ${ i * base }\n`);

        }

        fs.writeFile(`archivos/tabla-${ base }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`archivos/tabla-${ base }.txt`);

        });

    });

}

let listarTabla = (base, limite) => {

    console.log('=================='.blue);
    console.log(`Tabla de ${ base }`.green);
    console.log('=================='.blue);

    for (let i = 1; i <= limite; i++) {

        console.log(`${ base } * ${ i } = ${ i * base }`);

    }

}


// Export
module.exports = {

    crearArchivo,
    listarTabla

}