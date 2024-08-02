// if else

const nilaiAkhir = 65
let grade = ""

// if(nilaiAkhir > 75){
//     console.log('selamat anda lulus');
// }else{
//     console.log('maaf anda belum lulus dan silahkan mengikuti paket C');
// }

if(nilaiAkhir > 85){
    grade = "A"
}else if(nilaiAkhir > 75){
    grade = "B"
}else if(nilaiAkhir > 65){
    grade = "C"
}else if(nilaiAkhir > 45){
    grade = "D"
}else{
    grade = "E"
}

console.log(grade);

// switch case

const kodeHari = new Date('1-1-2025').getDay()
let hari = ""

switch(kodeHari){
    case 0:
        hari = "minggu"
        break;
    case 1: 
        hari = "senin"
        break;
    case 2:
        hari = "selasa"
        break;
    case 3:
        hari = "rabu"
        break;
    case 4:
        hari = "kamis"
        break;
    case 5:
        hari = "jumat"
        break;
    case 6:
        hari = "sabtu"
        break;
    default:
        hari = "maaf anda salah memasukan kode hari"
}

// console.log(hari);

// ternary operator
const keterangan = nilaiAkhir > 75 ? "selamat anda lulus": "maaf anda belum lulus"
console.log(keterangan);


// lagical and operator &&

const isMerried = false

const hasil = isMerried === true && 'anda telah berkeluarga'
console.log(hasil);



