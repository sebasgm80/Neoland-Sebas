let num = [100, 2, 20, 35, 4, 44];
num.sort (function (a, b) {
    return a -b;
});
let filtrados = num.filter(Element => Element < 10);
console.log(num);
console.log(filtrados);