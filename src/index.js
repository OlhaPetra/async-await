//синтаксис async/await

function getFruit(name) {
    const fruits = {
        strawberry: 'fresh berry',
        kiwi: 'green fruit',
        apple: 'red and big',
    };

    return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
}



async function makeSmoothie() {
    console.time('makeSmoothie')
    const apple = await getFruit('apple')
    console.log(apple)

    const kiwi = await getFruit('kiwi')
    console.log(kiwi)

    const strawberry = await getFruit('strawberry')
    console.log(strawberry)
    console.timeEnd('makeSmoothie')
}

makeSmoothie()

 function getSmoothie() {
    getFruit('apple').then(apple => {
        console.log(apple)
        getFruit('kiwi').then(kiwi => console.log(kiwi));
    })
}