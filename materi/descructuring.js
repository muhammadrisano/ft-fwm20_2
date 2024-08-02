const biodata = {
    name: 'risano',
    email: 'risano@gmail.com',
    passwrod: "abcd1234",
    age: 18,
    address: {
        city: 'padang',
        province: 'sumatera barat',
        zipCode: '20293'
    }
}
const name = "budi purwanto"

// tanpa menggunakan descruturing
// const name = biodata.name
// const email = biodata.email
// const age = biodata.age
// const city = biodata.address.city
// const province = biodata.address.province
// console.log(province);

// console.log(age);




// menggunakan destructuring

// const {name: namaSaya, email, age} = biodata

// const {city,province } = biodata.address

// console.log(province);


const kodeWarna = [244, 20, 140]

// tanpa menggunakan destructuring
// const red = kodeWarna[0]
// const green = kodeWarna[1]
// const blue = kodeWarna[2]

// menggunakan destructuring

const [red, blue] = kodeWarna

console.log(blue);