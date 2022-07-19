function primeNumber(no){
    let isPrime = true;
    for(let lowest = 2; lowest<no; lowest++){
        if(no%lowest === 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
for(let x=1; x<=10; x++){
    console.log(primeNumber(x));
}