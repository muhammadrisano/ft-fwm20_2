// jawaban nomor 1
const namaLengkap = "risano akbar";
const email = "risano@gmail.com";
const phoneNumber = "0812312323";
const umur = 18;

const tempatTglLahir = "padang, 6 januari 2015";
const alamat = "jl. jati gaung no 140, kec. jati, kel. agung, padang";
const kota = "padang";
const provinsi = "sumatera barat";
const kodePos = "26000";
const programmingExperience = ["HTML", "CSS", "Javascript", "PHP"];

const riwayatPendidikan = [
  {
    nama: "SD permata budi",
    tingkat: "SD",
    tahunMulai: 2010,
    tahunBerakhir: 2016,
    jurusan: null,
    isRecomended: true,
    lokasi: "padang",
    pengajarFavorit: ["toni gunawan", "gugun akbar"],
    materiFavorit: [
      {
        nama: "MTK",
        date: 2012,
        pengajar: "toni gunawan",
        alasan: "karena bapaknya baik",
        apakahSulit: false,
      },
      {
        nama: "Kesenian",
        date: 2013,
        pengajar: "gugun akbar",
        alasan: "karena saya senang belajar menggambar",
        apakahSulit: false,
      },
    ],
  },
  {
    nama: "SMP permata budi",
    tingkat: "SMP",
    tahunMulai: 2016,
    tahunBerakhir: 2019,
    jurusan: null,
    isRecomended: true,
    lokasi: "pekanbaru",
    pengajarFavorit: ["ani permata sari", "budi permanto"],
    materiFavorit: [
      {
        nama: "MTK",
        date: 2017,
        pengajar: "ani permata sari",
        alasan: "karena ibuknya baik",
        apakahSulit: false,
      },
      {
        nama: "Kesenian",
        date: 2018,
        pengajar: "budi permanto",
        alasan: "karena saya senang belajar menggambar",
        apakahSulit: false,
      },
    ],
  },
  {
    nama: "SMA permata budi",
    tingkat: "SMA",
    tahunMulai: 2019,
    tahunBerakhir: 2022,
    jurusan: null,
    isRecomended: true,
    lokasi: "pekanbaru",
    pengajarFavorit: ["ani permata sari", "budi permanto"],
    materiFavorit: [
      {
        nama: "MTK",
        date: 2017,
        pengajar: "ani permata sari",
        alasan: "karena ibuknya baik",
        apakahSulit: false,
      },
      {
        nama: "Kesenian",
        date: 2018,
        pengajar: "budi permanto",
        alasan: "karena saya senang belajar menggambar",
        apakahSulit: false,
      },
    ],
  },
];
const golonganDarah = "o";

const hobi = ["ngoding", "joging", "gaming"];

const makananFavorit = [
  {
    nama: "rendang",
    asal: "padang",
  },
  {
    nama: "martabak",
    asal: "bandung",
  },
  {
    nama: "bakso",
    asal: "jawa tengah",
  },
];

// jawaban soal nomor 2
let biodata = {
  namaLengkap,
  email,
  phoneNumber,
  umur,
  tempatTglLahir,
  alamat,
  kota,
  provinsi,
  kodePos,
  programmingExperience,
  riwayatPendidikan,
  hobi,
  golonganDarah,
  makananFavorit,
};

// jawaban pertemuan 3
// soal no 1
// a
// const returnFirstName = (fullName) =>{
//     const firstName = fullName.split(' ')[0]
//     return firstName
// }

// const resultFirstName = returnFirstName('risano akbar')
// // console.log(resultFirstName);

// // b
// const returnDay = (clock) =>{
//     if(clock >= 5 && clock <= 12){
//         return "pagi"
//     }else if(clock >= 12 && clock <= 15){
//         return "siang"
//     }else if(clock >= 16 && clock <=18){
//         return "sore"
//     }else if((clock >= 19 && clock <= 24) || (clock >= 0 && clock <= 4)){
//         return "malam"
//     }else{
//         return "maaf jam yang diisi salah"
//     }
// }

// const resultDay = returnDay(30)
// console.log(resultDay);

// soal no 2

const printNama = (nama) => {
  console.log(nama);
};

// const printEmail = (email)=>{const
// }

const simpanData = (key, value) => {
  // logic 1
  biodata = {
    ...biodata,
    [key]: value,
  };

  // logic 2

  // storedObjects[key] = value
};

simpanData("printNama", printNama);
simpanData("printEmail", (email) => {
  console.log(email);
});
// simpanData('email', 'risano@mgail.com')
// console.log(storedObjects);

// console.log(biodata);
// biodata.printNama("risano");
// biodata.printEmail("risano@gmail.com");

// soal nomor 3

const returnFirstName = (fullName) => {
  const firstName = fullName.split(" ")[0];
  return firstName;
};
// console.log(resultFirstName);

// b
const returnDay = (clock) => {
  if (clock >= 5 && clock <= 12) {
    return "pagi";
  } else if (clock >= 12 && clock <= 15) {
    return "siang";
  } else if (clock >= 16 && clock <= 18) {
    return "sore";
  } else if ((clock >= 19 && clock <= 24) || (clock >= 0 && clock <= 4)) {
    return "malam";
  } else {
    return "maaf jam yang diisi salah";
  }
};

const greeting = (clock, returnDay, fullName, returnFirstName) => {
  // output: “Selamat X, Y!”

  const day = returnDay(clock);
  const firstName = returnFirstName(fullName);

  const text = `Selamat ${day}, ${firstName}!`;
  console.log(text);
};

// greeting(22, returnDay, "budi tanjung", returnFirstName);

// printTriangleWithNumber

// const printTriangleWithNumber = (num) => {
//   // logic

//   /*
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// */
//   if (typeof num !== "number") {
//     console.log("parameter harus number");
//     return
//   }

//   for (let i = num; i >= 1; i--) {
//     let print = "";
//     for (let j = 1; j <= i; j++) {
//       print = print + " " + j;
//     }
//     console.log(print);
//   }
// };

// printTriangleWithNumber('5');


const ubahKata = (hurufAwal, hurufGanti, kata) =>{
    // const result = kata.replaceAll(hurufAwal, hurufGanti)
    // console.log(result);
    let result = ''
    
    for(let i =0; i<kata.length; i++){
        if(kata.charAt(i) === hurufAwal){
            result = result + hurufGanti
        }else{
            result = result +  kata.charAt(i)
        }
    }
    console.log(result);
}
ubahKata('a', 'o', 'purwakata')