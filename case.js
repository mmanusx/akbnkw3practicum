//jshint esversion:6


function oddishOrEvenish(num){
    let numDigitSum = 0;
    const numString = String(num);



    for(let i = 0; i < numString.length; i++){
        // console.log(numString[i]);
        // console.log(Number(numString[i]));

        numDigitSum += Number(numString[i]);
    }

    // console.log(numDigitSum);

    if(numDigitSum % 2 == 0){
        console.log("Even");
        return "Even";
    }else{
        console.log("Odd");
        return "Odd";
    }

}

oddishOrEvenish(2222);
