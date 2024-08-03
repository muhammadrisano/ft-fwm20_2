// pertemuan 2
// no1
function looping(num) {
  // “Looping ke X”
  for (let i = 0; i < num; i++) {
    console.log(`Looping ke ${i + 1}`);
  }
}
// looping(4)

// no 2
const myHobi = ["ngoding", "joging", "gaming", "swimming"];

function printHobbies(listHobi) {
  // logic
  //output:  “Hobi ke X adalah Y”
  // cara 1 pakai for
  // for(let i = 0; i< listHobi.length; i++){
  //     console.log(`Hobi ke ${i+1} adalah ${listHobi[i]}`);
  // }

  // cara 2 pakai map
  listHobi.map((item, i) => {
    console.log(`Hobi ke ${i + 1} adalah ${item}`);
  });
}

// printHobbies(myHobi)

// no 3

// const checkPassingGrade = (grade)=>{
//     // if(grade >= 75){
//     //     return "Selamat, anda lolos!"
//     // }else{
//     //     return "Anda tidak lolos!"
//     // }
//     return grade >= 75 ? 'Selamat, anda lolos!': 'Anda tidak lolos!'
// }

// const checkPassingGrade = grade => grade >= 75 ? 'Selamat, anda lolos!': 'Anda tidak lolos!'

// const gradeCheckMessage = checkPassingGrade(75)
// console.log(gradeCheckMessage);

// soal no 4

// const printOddNumber = (num)=>{
//     for(let i=0; i<=num; i++){
//         if(i%2 != 0){
//             console.log(i);
//         }
//     }
// }

// printOddNumber(13)

// soal no 5

const printPijarCamp = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("pijar camp");
    } else if (i % 5 === 0) {
      console.log("camp");
    } else if (i % 3 === 0) {
      console.log("Pijar");
    } else {
      console.log(i);
    }
  }
};

// printPijarCamp(15);

// soal no 6

const combineArray = (arr1, arr2)=>{
    const result = [...arr1, ...arr2]
    return result
}

const hobi1 = ['ngoding', 'gaming']
const hobi2 = ['reading', 'swimming']

const combinedArray = combineArray(hobi1, hobi2)
// console.log(combinedArray);

const combineObjects = (obj1, obj2)=>{
    const result = {...obj1, ...obj2}
    return result
}

const oldBiodata = {
    nama: 'risano',
    email: 'risano@mgal.com',
    age: 19
}

const newBiodata = {
    fullName: 'risano akbar',
    age: 17,
    isMerried: false
}

const combinedObjects = combineObjects(oldBiodata, newBiodata )
// console.log(combinedObjects);

// soal no 7

let storedObjects = {

}

// const simpanData = (key, value)=>{
//     // logic 1
//     // storedObjects = {
//     //     ...storedObjects,
//     //     [key]: value
//     // }

//     // logic 2

//     storedObjects[key] = value
// }

// simpanData('name', 'risano')
// simpanData('age', 17)
// simpanData('email', 'risano@mgail.com')
// console.log(storedObjects);

// soal no 8

const printSquare = num =>{
    for(let i = 0; i<num; i++){
        let print = ''
        for(let j = 0; j<num; j++){
            print = print + '* '
        }
        console.log(print);
    }
}

printSquare(5)