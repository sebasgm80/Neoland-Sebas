let myList = ["rojo", "azul", "verde", "amarillo", "naranja"];

let addItem = (item, list) => {
    let add = new Promise(function (resolve, reject) {
        if (!list){
            reject("no existe el elemento");
        }
        setTimeout(() => {
            list.push(item);
            resolve(list);
        }, 2000)
    })
    return add;
}
addItem("azul", myList)
    .then((list) => {
        console.log(list);
    })
