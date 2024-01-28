const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
function repeatCounter(param) {
    let obj = {};
    for (let i = 0; i < param.length; i++) {
        if (obj[param[i]]) {
            obj[param[i]]++;
        } else {
            obj[param[i]] = 1;
        }
        
    }
    return obj;
}
console.log(repeatCounter(counterWords));