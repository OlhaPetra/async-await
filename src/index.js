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
    try {
        console.time('makeSmoothie');
/*         const apple = await getFruit('apple');
        const kiwi = await getFruit('kiwi');
        const strawberry = await getFruit('strawberry'); */
        //console.log(apple)
        // console.log(kiwi)
        //console.log(strawberry)

        const apple = getFruit('apple');
        const kiwi = getFruit('kiwi');
        const strawberry = getFruit('strawberry');

         const fruit = await Promise.all([apple, kiwi, strawberry]);
        console.log(fruit);
        return fruit;

        console.timeEnd('makeSmoothie');

    } catch (error) {
      console.log(error)
    }
}

makeSmoothie().then(console.log);

function getSmoothie() {
  getFruit('apple').then(apple => {
    console.log(apple);
    getFruit('kiwi').then(kiwi => console.log(kiwi));
  });
}
