function decoder(code){

// Instructor solution:
//     let brokenArray = [];
//     let eachString = "";

//     for(let i = 0; i < code.length; i++){
//        if (!isNaN(code[i])){
//             if (eachString !== ""){
//                 brokenArray.push(eachString);
//             }

//             eachString = code[i]
//        } else {
//             eachString += code[i]
//        }

//     }

//     if(eachString !== ""){
//         brokenArray.push(eachString);
//     }

//     let newArr = brokenArray.map((str) => {
//         let num = +str[0];
//         return str[num + 1];
//     })

//     return newArr.join("");
// }


// My solution:    
    let codeArray = code.split("");
    let decodedString = "";
    for(let i = 0; i < codeArray.length; i++){
        if (isNaN(codeArray[i])){
            decodedString += (codeArray[i]);
        } else {
            i += +codeArray[i]
        }
    }
    return decodedString;
}

console.log(decoder("0h2xce5ngbrdy"));

// James's solution
let decoder = (code) => {
    let decodedWord = '';
    for (let i = 0; i < code.length; i++) {
        letterIndex = i + 1 + +code[i];
        decodedWord += code[letterIndex];
        i = letterIndex++;
    }
    return decodedWord;
}