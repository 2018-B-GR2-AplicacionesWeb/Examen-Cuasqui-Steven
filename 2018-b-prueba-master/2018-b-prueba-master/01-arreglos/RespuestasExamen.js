const fs = require('fs');
const rxjs = require('rxjs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
function main() {
    const lecturaBase$ = rxjs.from(leerBase());
    lecturaBase$
        .pipe(map((tipo) => {
        console.log('1) Busque los tipos de "gender" en el arreglo `people.json`\n');
        console.log('Tipo de gender', tipo.gender);
        return {
            data: tipo.gender
        };
    })).subscribe((ok) => {
        console.log('Correcto', ok);
    }, (error) => {
        console.log(error);
    }, () => {
        console.log('Completo');
    });
    lecturaBase$
        .pipe(map((tipo) => {
        console.log('2) Busque los tipos de "eye_color" en el arreglo `people.json`');
        console.log('Tipo de eye_color', tipo.eye_color);
        return {
            data: tipo.gender
        };
    })).subscribe((ok) => {
        console.log('Correcto', ok);
    }, (error) => {
        console.log(error);
    }, () => {
        console.log('Completo');
    });
    lecturaBase$
        .pipe(map((tipo) => {
        console.log('3) Busque los tipos de "skin_color" en el arreglo `people.json`');
        console.log('Tipo de skin_color', tipo.skin_color);
        return {
            data: tipo.gender
        };
    })).subscribe((ok) => {
        console.log('Correcto', ok);
    }, (error) => {
        console.log(error);
    }, () => {
        console.log('Completo');
    });
    lecturaBase$
        .pipe(map((tipo) => {
        console.log('4) Busque los tipos de "hair_color" en el arreglo `people.json`');
        console.log('Tipo de hair_color', tipo.gender);
        return {
            data: tipo.gender
        };
    })).subscribe((ok) => {
        console.log('Correcto', ok);
    }, (error) => {
        console.log(error);
    }, () => {
        console.log('Completo');
    });
}
main();
function leerBase() {
    return new Promise((resolve, reject) => {
        fs.readFile('people.json', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                reject({ mensaje: 'Error en la lectura de la BDD' });
            }
            else {
                resolve(JSON.parse(contenidoArchivo));
            }
        });
    });
}
//1) Busque los tipos de "gender" en el arreglo `people.json`
// function tiposGender(){
//     return new Promise(
//         (resolve,reject)=>{
//             fs.readFile(
//                 'people.json',
//                 'utf-8',
//                 (error, contenidoArchivo) => {
//                     if (error) {
//                         reject({mensaje: 'Error en la lectura de la BDD'})
//                     } else {
//
//                         const baseDatos=JSON.parse(contenidoArchivo)
//                         //var parametro='gender'
//
//
//                         var respuestaUno = ()=> {
//                             for (let gender in baseDatos)
//                             {
//                                 console.log(baseDatos[gender])
//                             }
//                         }
//                         // const respuestaUno=()=>{
//                         //     return baseDatos.filter(
//                         //         (baseDatos)=>{return baseDatos.gender}
//                         //     )
//                         // }
//
//                         resolve(respuestaUno())
//
//                     }
//                 }
//             )
//
//         }
//     )
function f() {
}
