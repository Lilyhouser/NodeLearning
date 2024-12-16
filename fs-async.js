const { readFile, writeFile } = require('fs');
const { resolve } = require('path');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-sync.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);

            }
        );
    });
});

/*
async function myFun() {
    const datas = await Promise.all([
        new Promise((resolve) => {
            readFile('./content/first.txt', 'utf8', (err, data) => {
                if(err){
                    console.log('error');
                    return;
                }
                const first = data;
                resolve(first);
            });
        }),new Promise((resolve) =>{
            readFile('./content/second.txt', 'utf8', (err, data) => {
                if(err){
                    console.log('error');
                    return;
                }
                const second = data;
                resolve(second);
            });
        })
    ]);    

    writeFile('./content/result-sync.txt', `use asyn-await: ${datas[0]}, ${datas[1]}`, (error) => {
        if(error) {
            console.log(error);
            
        }
    });
}

myFun();
*/


/*
Promise.all([
    new Promise((resolve) => {
        readFile('./content/first.txt', 'utf8', (err, data) => {
            if(err){
                console.log('error');
                return;
            }
            const first = data;
            resolve(first);
        });
    }),new Promise((resolve) =>{
        readFile('./content/second.txt', 'utf8', (err, data) => {
            if(err){
                console.log('error');
                return;
            }
            const second = data;
            resolve(second);
        });
    })
]).then((data) => {
    console.log(data[0], data[1]);
    writeFile('./content/result-sync.txt', `Hello: ${data}`, (error) => {
        if(error){
            console.log('erorr');
            return;
        }
        console.log('done');
    });
});
*/