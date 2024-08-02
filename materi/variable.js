// var
// var namaLengkap = "risano akbar"
// global variable


{
    var namaLengkap = "risano akbar"
}
console.log(namaLengkap)


// let 
let tempatLahir = "bandung"
// const
// const email =  "risano@gmail.com"


// function scope -> tidak bisa digunakan diluar function scope
function sayHelo(){
    var nama = "risano"
    const kota = "padang"
    let isMerried = true
    console.log('function sayHelo dijalankan');
    console.log(nama);
}

sayHelo()


// block scope

if(10> 5){
    let email = "risano@gmail.com"
    console.log(email);
}


let hobi = "ngoding"

hobi = "gaming"


// console.log(lulusan);

let lulusan = "S1"


















// let lulusan = "SMA"



console.log(lulusan);