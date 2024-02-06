const path = require("path");
const fs = require("fs");

const JMDictDir = path.join('JapaneseVocabulary/JMdict_spanish');
const JMDictFiles = fs.readdirSync(JMDictDir);

const findingReadings = (kanjiword) => {
    let readingWord = [];
    for(i = 0; i<=JMDictFiles.length-1; i++){
        fs.readFile(JMDictDir+"/"+JMDictFiles[i], "utf-8", async (err, data) => {
            if(err) throw err;
            try {
                const content = JSON.parse(data);
                for(i = 0; i <= content.length-1; i++){
                    if(content[i][0] == kanjiword){
                        readingWord.push(content[i][1]);
                    }
                }
            }
            catch (error) {
                console.error('Error al analizar el contenido del archivo JSON:', error);
            }
        });
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(readingWord);
        }, 1000);
    });
}

module.exports = { findingReadings }