let args = process.argv.slice(2);
let num = args[0];

if(args.length){
    if (num % 2 == 0) {
        console.log(`${num} is Even`)
    } else {
        console.log(`${num} is Odd`)
    }
}else{
    console.log('please re-run this file with an argument')
}

