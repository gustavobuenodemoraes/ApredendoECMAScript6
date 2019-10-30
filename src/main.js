const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ok')
    }, 2000);
});

// async  function executePromise() {
//     const reponse = await minhaPromise();

//     console.log(reponse);
//     console.log(reponse);
//     console.log(reponse);

// }

// const executePromise = async () => {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// }

// executePromise();