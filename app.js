const { crearArchivo, listarTabla } = require('./multiplicar/mutiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors/safe');

// Toma el comando introducido
let comando = argv._[0];

// Dependiendo el comando ejecuta la acción
switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado en:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}