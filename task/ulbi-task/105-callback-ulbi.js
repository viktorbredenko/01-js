//https://www.youtube.com/watch?v=G7pAP1TvZSw

const groupBy = (arr, callbackFunction) => {
    const result ={}
    arr.forEach(item => {
        let resCallback = callbackFunction(item)
        console.log(resCallback)
        
        result[resCallback]
            ? result[resCallback].push(item)
            : result[resCallback] = [item]        
    });
    //console.log(result)
}

groupBy( [6.1, 4.2, 6.3], Math.floor)