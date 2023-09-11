const temIngresso = true
const censura = 18
const idade = 19
const comPais = true

// if (temIngresso) {
//     if (idade > censura || comPais) {
//         console.log(`entrada liberada`);
//     } else {
//         console.log(`entra barrada`);
//     }
// } else {
//     console.log(`barrado sem ingresso`);
// }

console.log(`
${temIngresso ?
        idade < censura && comPais ?
            'Entrada liberada com os PAIS' :
            idade > censura ?
                'Entrada liberada' :
                'Barrado por CENSURA!!' :
        'Entrada barra por falta de INGRESSO!!'}
    `);
