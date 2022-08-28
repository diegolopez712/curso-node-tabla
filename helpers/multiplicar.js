const fs = require('fs')
const colors = require('colors');

/*
const crearArchivo = ( base = 5 ) => {

    return new Promise( (resolve, reject)  =>  {

    console.clear()
    console.log('*******************************************************')
    console.log('                Tabla de multiplicar del ', base)
    console.log('*******************************************************')

    let salida = ''
    //Imprimir la tabla de multiplicar del 1 al 50
    for(let i = 1; i < 10; i++){
        //console.log(`${i} * ${ base } = ${i*base}`)
        salida += `${i} * ${ base } = ${i*base}\n`
    }
    
    console.log(salida)
    
    fs.writeFileSync(`tabla-${ base }.txt`, salida)
    
    resolve(`tabla-${ base }.txt creado`);
})

}

module.exports = {
    crearArchivo
}
*/

const crearArchivo = async ( base = 5, listar = false, hasta = 10) => {

    try {
        console.clear()

        let salida = ''
        let consola = ''
        //Imprimir la tabla de multiplicar del 1 al 50
        for(let i = 1; i < hasta; i++){
            //console.log(`${i} * ${ base } = ${i*base}`)
            consola += `${i} ${'*'.green} ${ base } ${'='.green} ${i*base}\n`
            salida += `${i} * ${ base } = ${i*base}\n`

        }

        if(listar){
            console.log('*******************************************************'.yellow)
            console.log('                Tabla de multiplicar del '.red, colors.blue(base))
            console.log('*******************************************************'.yellow)  
            console.log(salida)
        }
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)
        
        return (`tabla-${ base }.txt creado`);
            
    } catch (err) {
        throw(err)
    }
   }

module.exports = {
    crearArchivo
}