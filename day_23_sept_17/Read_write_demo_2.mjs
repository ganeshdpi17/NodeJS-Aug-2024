import fs from 'node:fs/promises'; // ESM

try {
    let data1 = await fs.readFile('./file_1.txt', 'utf8'); // Async await
    let data2 = await fs.readFile('./file_2.txt', 'utf8');
    await fs.writeFile('./file_3.txt', `${data1} \n ${data2}`);
    console.log(`written successfully!!!`)
} catch (err) {
    console.log('something went wrong')
}
