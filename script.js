function capitalize(str){
    let answer = "";
    let split = str.toLowerCase().split(" ");

    for(let i = 0; i < split.length; i++){
       answer += split[i][0].toUpperCase() + split[i].slice(1) + " "
    }
    return answer.trim()
}

capitalize("I'm a little tea pot UPPERCASE BoTh")


function lastLetter(string){
    return string.slice(-1)
};

lastLetter("bojan")