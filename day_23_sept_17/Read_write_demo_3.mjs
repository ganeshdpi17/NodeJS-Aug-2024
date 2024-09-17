import fs from 'node:fs'; // ESM

fs.readFile('./file_1.txt', 'utf8', (err, data1) => { // Callback
    if (err) throw err;
    fs.readFile('./file_2.txt', 'utf8', (err, data2) => {
        if (err) throw err;
        fs.writeFile('./file_3.txt', `${data1} \n ${data2}`, (err, data) => {
            if (err) throw err;
            console.log('Write Operation is done!!!')
        })
    })
})