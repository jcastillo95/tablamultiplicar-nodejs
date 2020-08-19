const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime la tabla', opciones)
    .command('crear', 'generaarchivo', opciones)
    .argv;

module.exports = {
    argv
}