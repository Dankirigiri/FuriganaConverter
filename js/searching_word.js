const path = require("path");
const fs = require("fs");

const JMDictDir = path.join('JapaneseVocabulary/JMdict_spanish');
const JMDictFiles = fs.readdirSync(JMDictDir);

const searchingWord = word => {
    let isaWord = false;
    for(i = 0; i<=JMDictFiles.length-1; i++){
        fs.readFile(JMDictDir+"/"+JMDictFiles[i], "utf-8", async (err, data) => {
            if(err) throw err;
            try {
                const content = JSON.parse(data);
                for(i = 0; i <= content.length-1; i++){
                    if(content[i][0] == word || content[i][0].includes(word)){
                        isaWord = true;
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
            resolve(isaWord);
        }, 1100);
    })
}

module.exports = { searchingWord };



