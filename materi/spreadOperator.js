// Memasukkan array ke dalam array lain
// const oldHobies = ['gaming', 'joging']

// const myHobies = [...oldHobies, 'ngoding', 'reading']
// console.log(myHobies);

// Menggabungkan 2 array

// const makanFavorit1 = ['bakso', 'martabak', 'jagung rebus']
// const makanFavorit2 = ['nasi padang', 'nasi kuning']

// const resultFavorit = [...makanFavorit1, ...makanFavorit2]
// console.log(resultFavorit);

// const oldBiodata = {
//     name: 'risano',
//     email: 'risano@gmail.com',
//     isMerried: false
// }

// const newBiodata = {
//     ...oldBiodata,
//     alamat: 'jl. jati gaung no 140 ',
//     kota: 'padang',
//     jender: 'laki',
//     isMerried: true
// }

// console.log(newBiodata);

// copy atau clone object

const biodata = {
  name: "risano",
  email: "risano@gmail.com",
  isMerried: false,
  kota: 'padang',
  jender: 'laki-laki'
};


const biodateBaru = {...biodata}

biodateBaru.name = "risano akbar"
biodateBaru.email = "risanoakbar@mgail.com"
biodateBaru.isMerried = true



console.log(biodata);
console.log(biodateBaru);


