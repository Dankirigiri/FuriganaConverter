const ordeningReadings = readings => {
    let orderedReadings = [];
    if(readings.length == 1){
        orderedReadings = readings;
        return orderedReadings;
    } else{
        for(i = 1; i<=readings.length-1; i++){
            for(j = 0; i <= readings.length-1; i++){
                if(readings[i] != readings[j]){
                    orderedReadings.push(readings[j]);
                    orderedReadings.push(readings[i]);
                } else if(readings[i] == readings[j]){
                    orderedReadings.push(readings[i]);
                } 
                
            }
        }
        return orderedReadings;
    }
}

module.exports = {ordeningReadings};