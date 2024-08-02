/*
nilai IPA saya = 80
nilai IPS saya = 90
rata-rata dari kedua nilai adalah 85
*/

// concate

// const nilaiIpa = 80
// const nilaiIps = 90

// const text = 'nilai IPA saya = ' + nilaiIpa +'\n' + 
// 'nilai IPS saya = '+ nilaiIps + '\n'+ 
// 'rata-rata dari kedua nilai adalah ' + (nilaiIpa + nilaiIps) / 2
// console.log(text);



// template literal

const nilaiIpa = 20
const nilaiIps = 90
const kkm = 75

const text2 = `nilai IPA saya = ${nilaiIpa}
nilai IPS saya = ${nilaiIps}
rata-rata dari kedua nilai adalah ${(nilaiIpa + nilaiIps) /2}
dan anda ${(nilaiIpa + nilaiIps) /2 > kkm ? 'lulus': 'tidak lulus'}
`

console.log(text2);