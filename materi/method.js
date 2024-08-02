const biodata = {
    name: 'risano',
    email: 'risano@Mgail.com',
    pemjumlahan: (val1, val2) => {
        const result = val1 + val2
        return result 
    },
    perkalian(val1, val2){
        const result = val1 * val2
        return result
    },
    printNama:()=>{
        console.log(`nama saya adalah ${biodata.name}`);
    }
}
biodata.printNama()


// const hasilPenjumlahan =  biodata.pemjumlahan(10, 20)
// const hasilPerkalian = biodata.perkalian(5, 9)
// console.log(hasilPenjumlahan);


// class Siswa {
//     name = "budi"

//     printNama(){
//         console.log(`nama saya adalah ${this.name}`);
//     }
// }

// const risano = new Siswa()
// risano.printNama()