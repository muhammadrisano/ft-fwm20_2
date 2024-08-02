// STRING
// toLowerCase()
// mengubah tulisan / text /string sebelum huruf besar menjadi huruf kecil

const name = "RISANO AKBAR";
const result = name.toLowerCase();
// console.log(result);

// toUpperCase()
// mengubah string / text yang sbelum huruf kecil  menjdai huruf besar /capital

const text = "saya ingin menjadi programmer";
const resultText = text.toUpperCase();
// console.log(resultText);

// split()
// untuk memecah string / text menjadi array berdasarkan seperator / pemecahnya
const text2 = "saya ingin menjadi programmer";
const resultSplit = text2.split(" ");
// console.log(resultSplit);

// replace()

const text3 = "helo world";
// console.log(resultSplit);

const resultReplace = text3.replace("world", "bro");
// console.log(resultReplace);

// NUMBER
// toString()
// digunakan untuk mengubah number menjadi string

const age = 17;
const resultAge = age.toString();
// console.log(age);
// console.log(resultAge);

// toFixed()
// digunakan untuk menentukan nilai dibelakang koma
// 80.3547
const myValue = 80.3547;
const resultValue = myValue.toFixed(2);
// console.log(resultValue);

// array
// sort()
// digunakan untuk mesorting / mengurutkan sebuah nilai didalam array

// const nilaiSekolah = [6, 7, 5, 9, 3, 2, 40];
// const resultSort = nilaiSekolah.sort((a, b)=> b - a)
// console.log(resultSort);
// const hobi = ['ngoding', 'gaming', 'reading', 'swimming']
// const resultHobi = hobi.sort()
// console.log(resultHobi);

// map -> untuk melooping nilai didalm array
const hobies = ["ngoding", "gaming", "reading", "swimming"];

// hobies.map((hobi, index )=>{
//     console.log('hobi ke '+ (index+1) +' adalah ' + hobi);
// })
// hobies.forEach((hobi, index )=>{
//     console.log('hobi ke '+ (index+1) +' adalah ' + hobi);
// })

// const newHobies = hobies.forEach((hobi, index )=>{
//     return `${hobi}zz`
// })

// console.log(newHobies);

const products = [
  {
    name: "indomie ayam goreng",
    price: 3500,
    stock: 10,
  },
  {
    name: "sarimi ayam bakar",
    price: 3500,
    stock: 18,
  },
  {
    name: "mie gelas",
    price: 1500,
    stock: 100,
  },
  {
    name: "mie sedap goreng",
    price: 40000,
    stock: 3,
  },
];

// products.forEach((product)=>{
//     console.log(product.name);
// })

const nameProducts = products.forEach((product)=>{
    return product.name
})
// console.log(nameProducts);


// join()
// untuk menggabungkan nilai didalam array dan pemisahnya disisipkan seperator

const kumpulanHobi = ['ngoding', 'gaming', 'swimming', 'reading']

const resultJoin = kumpulanHobi.join(' ')
console.log(resultJoin);