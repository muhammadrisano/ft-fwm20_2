// number

const mtk = 90
const age = 17
const totalNilai = 80.5
const suhu = -20

// string

const nama = 'risano'
const kota = "padang"
const email = `risano@gmail.com`

const phoneNumber = "08123123123"
const nik = "13223423434"

const tahunLahir = 2005

const umurSaya = new Date().getFullYear() - tahunLahir
console.log(umurSaya);

// boolean -> true , false

const isMerried = false
const isLogin = true

const result = 10 < 5

console.log(result);


function sayHelo(){

}

const sayHii = function(){

}

const hobi = ['ngoding', 'joging', 'gaming', 'reading']


const hobiKeduaSaya = hobi[1]
console.log(hobiKeduaSaya);

const jumlahHobi = hobi.length
console.log(jumlahHobi);

const biodata = {
    nama: 'risano',
    email: 'risano@gmail.com',
    'helo-word': 'test saja'
}



console.log(biodata.nama);

// let products = null

let products = [
    {
        name: 'indomie ayam bakar',
        price: 2500,
        desciption: 'indomie bla bla',
        stock: 10
    },
    {
        name: 'sarimie kari ayam',
        price: 3000,
        description: 'sarimie bla bla',
        stock: 30
    }
]


let makananFavorit

console.log(biodata.kota);


const checkType = typeof products 

console.log(checkType);