//2.1 Inserta dinamicamente en un html un div vacio con javascript.

function insertDiv() {
    const div = document.createElement('div');
    document.body.appendChild(div);
}
insertDiv();

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

function insertP() {
    const p = document.createElement('p');
    document.body.appendChild(p);
}
insertP();

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
function insertDivWithParagraphs() {
    const div = document.createElement('div');
    for (let i = 1; i <= 6; i++) {
        const parrafo = document.createElement('p');
        parrafo.textContent = `Párrafo ${i}`;
        div.appendChild(parrafo);
    }
    document.body.appendChild(div);
}
insertDivWithParagraphs();

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

function insertDynamicP() {
    const p = document.createElement('p');
    p.textContent = 'Soy dinámico!';
    document.body.appendChild(p);
}
insertDynamicP();

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

function insertH2() {
    const h2 = document.querySelector('.fn-insert-here');
    h2.textContent = 'Wubba Lubba dub dub';
}
insertH2();

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

function createList() {
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
    const ul = document.createElement('ul');
    for (let i = 0; i < apps.length; i++) {
        const li = document.createElement('li');
        li.textContent = apps[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}
createList();

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

function removeNodes() {
    const nodes = document.querySelectorAll('.fn-remove-me');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].remove();
    }
}
removeNodes();

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

function insertPBetweenDivs() {
    const divs = document.querySelectorAll('div');
    const p = document.createElement('p');
    p.textContent = 'Voy en medio!';
    divs[0].insertBefore(p, divs[1]);
}
insertPBetweenDivs();


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
function insertPInsideDivs() {
    const divs = document.querySelectorAll('.fn-insert-here');
    for (let i = 0; i < divs.length; i++) {
        const p = document.createElement('p');
        p.textContent = 'Voy dentro!';
        divs[i].appendChild(p);
    }
}
insertPInsideDivs();