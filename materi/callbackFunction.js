// const sayHelo = (name, callback)=>{
//     const greeting = `helo... ${name} apakbar`
//     callback(greeting)
// }

// const printValue = (val)=>{
//     console.log(val);
// }

// sayHelo('risano', printValue)


// const sayHelo = ()=>{
//     console.log('helo world');
// }

// const myFunc = sayHelo

// myFunc()


const pembagian = (val1, val2, callback)=>{
    const result = val1 / val2
    callback(result)
}

const limitKoma = (val)=>{
    const hasilLimit = val.toFixed(2)
    console.log(hasilLimit);
}

pembagian(8, 3, limitKoma)