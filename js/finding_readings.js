const path = require("path");
const fs = require("fs");

const JMDictDir = path.join('JapaneseVocabulary/JMdict_spanish');
const JMDictFiles = fs.readdirSync(JMDictDir);

const findingReadings = async (kanjiword) => {
    let readingWord = [];
    for(i = 0; i<=JMDictFiles.length-1; i++){
        try {
            const content = await fs.promises.readFile(JMDictDir+"/"+JMDictFiles[i], 'utf-8');
            const data = JSON.parse(content);
            for (const kanji of data) {
                if(kanji[0] == kanjiword || kanji[0].includes(kanjiword)){
                    readingWord.push([kanji[0], kanji[1], kanji[6]]);
                } 
            }
          } catch (error) {
            console.error(error.message);
            return null;
          }
        }
    return readingWord;
}

module.exports = {findingReadings}