const { findingReadings } = require("./finding_readings");
const { ordeningReadings } = require("./ordering_readings");
const { verifyingWord } = require("./verifying_word");

const analyzingText = async text => {
    try{
        let newText = [];
        let readings = await findingReadings(text);
        console.log(readings);
        if(readings.length == 0){
            let word = text.split("");
            let kanji = await verifyingWord(word);
            console.log(kanji);
            readings = await findingReadings(kanji);
            let orderedReadings = ordeningReadings(readings);
            let purgeConjugations = orderedReadings.map(reading => {
                let realWord = []
                for(let i=0; i<reading.length-1; i++){
                    if(!reading[i].includes('る')){
                     realWord.push(reading[i]);
                    }
                }
                return realWord.join("");
            });
            newText = text.replace(kanji, purgeConjugations[0]);
            
        } else{
            let orderedReadings = ordeningReadings(readings);
            newText = text.replace(text, orderedReadings[0]);
        }
        return newText;
    } catch(error){
        console.error(error);
    }
}

module.exports = { analyzingText }