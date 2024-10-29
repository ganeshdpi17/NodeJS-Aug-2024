process.on('message', (msg) => {
    console.log('child Thread received msg:: ', msg)
})
process.send({ age: 50 });

// throw new Error("Error in Child process ")