process.nextTick(() => {
    console.log('Next tick function got invoked')
}); // 1

setTimeout(() => {
    console.log('settimeout - 0  invoked')
}, 0); // 2

setImmediate(() => {
    console.log('setImmediate  invoked')
}); // 2

// when setImmediate and setTimeout-0 is used , the order is non-deterministic