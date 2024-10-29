const { fork } = require('child_process');


console.log('Main Thread / Parent Thread Starts here..........');

const childProcessObj = fork(`${__dirname}/fork_child_demo.js`);

childProcessObj.on('message', (msg) => {
    console.log('Parent Thread received msg:: ', msg)
})
childProcessObj.on('error', (err) => {
    console.log('something went wrong in child process')
});
childProcessObj.send({name:'sanjay samantra'});

console.log('Main Thread / Parent Thread Ends here..........');