// declaration

// const namaTeman = "toni"

// default value di parameternya
// function sayHelo(teman, saya = 'john doe'){
//     console.log(`helo ${teman} apa kabar!, nama saya ${saya}`);
// }


// sayHelo(namaTeman, 'risano')

// function penjumlahan(va1 = 0, val2 = 0){
//     const result = va1 + val2
//     console.log(result);
// }

// penjumlahan(10)

// res paramter
// function sum(...val){

//     let total = 0

//     for(let i = 0; i< val.length; i++){
//         total = total + val[i]
//     }
//     console.log(total);
// }

// sum(10, 20, 15, 25, 100, 200)


function penjumlahan(va1, val2){
    const result = va1 + val2
    console.log('funtion penjumla dijalankan');
    return result
    
}

function perkalian(val1, val2){
    const result = val1 * val2
    return result

    console.log('funtion perkalian dijalankan');
}

const nilai1 = 10
const nilai2 = 20

const hasilPenjumlahan =  penjumlahan(nilai1, nilai2)
console.log(hasilPenjumlahan);

// const hasilPerkalian = perkalian(hasilPenjumlahan, 100)
// console.log(hasilPerkalian);



// expression
const pengurangan = function(val1, val2){
    const result = val1 - val2
    return result
}


const hasilPengurangan =  pengurangan(20, 15)
console.log(hasilPengurangan);



// arrow function

// const pembagian = (val1, val2)=>{
//     const result = val1 / val2
//     return result
// }

const pembagian = (val1, val2)=> val1 / val2
 


const hasilPembagian = pembagian(200, 20)
console.log(hasilPembagian);


// const sayHi = nama =>{
//     console.log(`helo bro... ${nama}`);
// }
// sayHi('risano')