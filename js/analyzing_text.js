const { findingReadings } = require("./finding_readings");

const analyzingText = async text => {
    try{
        let newText = text;
        let readings = await findingReadings(text);
        if(readings.length == 0){
            let readingsDump = [];
            let index = 0;
            for(j = 1; j<=text.length; j++){
                readings = await findingReadings(text.slice(index, j));
                if(readings.length != 0){
                    readingsDump[0] = [readings[0][0], readings[0][1]];
                } else{
                    index = j;
                    
                } 
                newText = newText.replace(readingsDump[0][0], readingsDump[0][1]);
            }
        } else{
            newText = newText.replace(readings[0][0], readings[0][1]);
        }
        return newText;
    } catch(error){
        console.error(error);
    }
}

module.exports = {analyzingText}