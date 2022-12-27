//https://www.youtube.com/watch?v=G7pAP1TvZSw


function sum(n){
    console.log(n)
    return function (a){
        return sum(a+n)

    }
}

sum(1)(1)(1)(1)
console.log('--------')
//sum(5)(4)(11)


// function f1(n){
//     console.log('f1=',n)
    
//     return function f2(a){
//         console.log('f2=',a)
        
//         return function f3(z){
//             console.log('f3=',z)
//             return f1(n+a+z)//sum(a+n)
    
//         }

//     }
// }

// f1(5)(6)(7)(4)(5)



console.log('--------')
//sum(5)(4)(11)
