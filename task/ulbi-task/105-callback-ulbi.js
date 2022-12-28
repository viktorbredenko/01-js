//https://www.youtube.com/watch?v=G7pAP1TvZSw
//  { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }

const groupBy = (arr, callbackFunction) => {
    const result = {}

    arr.forEach(item => {
        let resCallback = callbackFunction(item)
        //console.log(result[resCallback])

        result[resCallback] //?
            ? result[resCallback].push(item)
            : result[resCallback] = [item]
    });
    //console.log(result)
}

groupBy([6.1, 4.2, 4.9, 6.3], Math.floor)


// let o = {}

// key = null;

// o[key] ? console.log(true) : console.log(true)


//console.log(o)


