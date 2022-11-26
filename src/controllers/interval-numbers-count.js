const { wrapAsyncAction } = require("../../lib/async-action")
const {Boom} = require('boom')
const get = async (req) => {
    try {
        const interval = []
        let {start,end}= req.query
        while (start <= end){
            if( _containingFive(start)){
                start ++
                continue
            }
            interval.push(start)
            start ++
        }
        return {count: interval.length}
    } catch (error) {
        console.log(error)
        throw Boom.internal('internal server error')
    }
}


const _containingFive= (number)=>{
    let rslt = (number+'').indexOf('5') > -1
     return rslt
}

module.exports = {
    getIntervalNumbersCount: wrapAsyncAction(get)
}
