// jawaban nomor 1
const namaLengkap = "risano akbar"
const email = "risano@gmail.com"
const phoneNumber = "0812312323"
const umur = 18

const tempatTglLahir = 'padang, 6 januari 2015'
const alamat = "jl. jati gaung no 140, kec. jati, kel. agung, padang"
const kota = "padang"
const provinsi = "sumatera barat"
const kodePos = "26000"
const programmingExperience = ['HTML', 'CSS', 'Javascript', 'PHP']

const riwayatPendidikan = [
    {
        nama: 'SD permata budi',
        tingkat: 'SD',
        tahunMulai: 2010,
        tahunBerakhir: 2016,
        jurusan: null,
        isRecomended: true,
        lokasi: 'padang',
        pengajarFavorit: ['toni gunawan', 'gugun akbar'],
        materiFavorit:[
            {
                nama: 'MTK',
                date: 2012,
                pengajar: 'toni gunawan',
                alasan: 'karena bapaknya baik',
                apakahSulit: false
            },
            {
                nama: 'Kesenian',
                date: 2013,
                pengajar: 'gugun akbar',
                alasan: 'karena saya senang belajar menggambar',
                apakahSulit: false
            }
        ]
    },
    {
        nama: 'SMP permata budi',
        tingkat: 'SMP',
        tahunMulai: 2016,
        tahunBerakhir: 2019,
        jurusan: null,
        isRecomended: true,
        lokasi: 'pekanbaru',
        pengajarFavorit: ['ani permata sari', 'budi permanto'],
        materiFavorit:[
            {
                nama: 'MTK',
                date: 2017,
                pengajar: 'ani permata sari',
                alasan: 'karena ibuknya baik',
                apakahSulit: false
            },
            {
                nama: 'Kesenian',
                date: 2018,
                pengajar: 'budi permanto',
                alasan: 'karena saya senang belajar menggambar',
                apakahSulit: false
            }
        ]
    },
    {
        nama: 'SMA permata budi',
        tingkat: 'SMA',
        tahunMulai: 2019,
        tahunBerakhir: 2022,
        jurusan: null,
        isRecomended: true,
        lokasi: 'pekanbaru',
        pengajarFavorit: ['ani permata sari', 'budi permanto'],
        materiFavorit:[
            {
                nama: 'MTK',
                date: 2017,
                pengajar: 'ani permata sari',
                alasan: 'karena ibuknya baik',
                apakahSulit: false
            },
            {
                nama: 'Kesenian',
                date: 2018,
                pengajar: 'budi permanto',
                alasan: 'karena saya senang belajar menggambar',
                apakahSulit: false
            }
        ]
    }
]
const golonganDarah = 'o'

const hobi = ['ngoding', 'joging', 'gaming']

const makananFavorit =[
    {
        nama: 'rendang',
        asal: 'padang'
    },
    {
        nama: 'martabak',
        asal: 'bandung'
    },
    {
        nama: 'bakso',
        asal: 'jawa tengah' 
    }
]

// jawaban soal nomor 2
const biodata = {
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
    makananFavorit
}

// jawaban soal nomor 3

console.log(`Nama Lengkap: ${biodata.namaLengkap}`);
console.log(`Phone Number : ${biodata.phoneNumber}`);
console.log(`Nama Makan : ${biodata.makananFavorit[0].nama} dan Asalanya : ${biodata.makananFavorit[0].asal}`);
console.log(`Hobi terakhir saya: ${biodata.hobi[biodata.hobi.length - 1]}`);

// jawaban soal nomor 4
// a
const printNama = (data)=>{
    console.log(data.namaLengkap);
}
printNama(biodata)

// b
const printRiwayatPendidikan =(data) =>{
    const jumalahRiwayat = data.riwayatPendidikan.length
    console.log(`Pernah menempuh pendidikan di ${jumalahRiwayat} tempat`);
}

printRiwayatPendidikan(biodata)