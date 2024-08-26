function test() {
    if (true) {
        (function(){
            var name = 'sanjay';
        })();
    }
    console.log('function::', name);
}
test();