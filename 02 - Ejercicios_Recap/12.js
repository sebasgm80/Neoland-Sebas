function fibonacci (n) {
    let fibArray = [1, 1];
    for (let i = 2; i < n; i++){
        fibArray.push(fibArray[i - 1] + fibArray[i -2]);
    }
    return fibArray.slice(0, n);
}
let n = 20;
let resultado = fibonacci(n);
console.log(resultado);

