const { searchingWord } = require("./searching_word.js");

const verifyingWord = async text => {
    let kanji = [];
    let word = await searchingWord(text);
    if(word != true){
        console.log("entro por este if")
        let i = 0;
        while(word == false){
            kanji.push(text[i]);
            let word = await searchingWord(kanji.join(""));
            i++;
            if(word == false){
                kanji.pop()
                break;
            }
        }
        
    } else{
        console.log("entro por este else")
        let i = 0;
        let word = await searchingWord(text);
        console.log(word);
        while(word == true){
            kanji.push(text[i]);
            word = await searchingWord(kanji.join(""));
            i++;
            if(word == false){
                break;
            }
        }
        word = await searchingWord(kanji);
        if(word == false){
            kanji.pop();
            console.log(kanji);
        } else{
            console.log(kanji);
        }
    }
    return kanji.join("");
}

module.exports = {verifyingWord}