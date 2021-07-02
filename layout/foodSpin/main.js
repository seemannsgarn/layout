/*function alphabetLetterNums(text) {
    let alphabet = 'abcdefghijkl1mnopqrstuvwxyz';
    let alphaNums = [];

    text = text.toLowerCase();

    for (i = 0; i < text.length; i++) {
        let index = alphabet.indexOf(text[i])

        if (index == -1){
            continue
        } else {
            alphaNums.push(index+1)
        }
    }
    return console.log(alphaNums.toString())
}

alphabetLetterNums('Spoongebob')*/
 

/*function openOrSenior(data){
    let result = []
    for (i=0; i < data.length; i++) {
        let miniArray = data[i]
        let years = miniArray[0]
        let handicap = miniArray[1]
        if (years >=55 && handicap > 7){
            result.push('Senior')
        } else {
            result.push('Open')
        }
    
}
return console.log(result)
}
openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]);*/

function digPow(n, p){
    let arr=n.toString().split('').map(Number).reduce((acc,cur,i,arr)=>acc+(Math.pow(arr[i],p+i)),0)/n
    return (''+arr).includes('.')?-1:arr
    }

console.log(digPow(90,2))

