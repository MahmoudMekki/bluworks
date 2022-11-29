const { wrapAsyncAction } = require("../../lib/async-action")
const {number} = require("joi");
const Boom = require("boom");


const get = async (req) => {
    try {
        let {set: numbers}= req.body
        const count = [];
        numbers.forEach((number)=>{
            const steps = _getSteps(number)
            count.push(steps)
        })
        return {steps: count}
    } catch (error) {
        console.log(error)
        return Boom.badImplementation('internal server error')
    }
}
const _getNumberPair = (number)=>{
    let minX = number ;
    let count = 0
    for (let i =1; i*i <= number ;i++){
       if (number%i === 0){
           const x = i
           const y = number / x
           if (minX > Math.max(x,y)){
               minX = Math.max(x,y)
           }
       }
    }
    return minX
}

const _getSteps = (number)=>{
    let count = 0
    if (number === 0) {
        return count
    }
    while (number > 0){
        let x = _getNumberPair(number)
        if (x === number){
            number --
        }else {
            number = x
        }
        count ++
    }
    return count
}
module.exports = {
    getMinimumSteps: wrapAsyncAction(get)
}
