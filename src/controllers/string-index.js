const { wrapAsyncAction } = require("../../lib/async-action")
const Boom = require('boom');
const _ = require('lodash')
const _charMap = {
    "A":1,"B":2,"C":3,"D":4,"E":5,"F":6,
    "G":7,"H":8,"I":9,"J":10,"K":11,"L":12,
    "M":13,"N":14,"O":15,"P":16,"Q":17,"R":18,
    "S":19,"T":20,"U":21,"V":22,"W":23,"X":24,
    "Y":25,"Z":26,
}
const get = async (req) => {
    try {
        let {input: word}= req.query
        word = word.toUpperCase()
        let index = 0, len = word.length, start = len-1
        while (start > -1) {
            const char = word[start]
            const value = _.get(_charMap, char)
            index += value * Math.pow(26, len - 1 - start);
            start --
        }
        return {index: index};
    } catch (error) {
        console.log(error)
        return Boom.badImplementation('internal server error')
    }
}

module.exports = {
    getStringIndex: wrapAsyncAction(get)
}
