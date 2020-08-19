//requireds

const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar.js');
let comando = argv._[0];
switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log('comando no reconocido');
        break;
}