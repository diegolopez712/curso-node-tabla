const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla a multiplicar'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'Es el límite superior de la tabla a multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra el resultado de la multiplicación por consola'
            })
            .check( (argv, options) => {
                if( isNaN( argv.b ) ){
                    throw 'La base tiene que ser un número';
                }
                return true;
            })
            .argv;

module.exports = argv;