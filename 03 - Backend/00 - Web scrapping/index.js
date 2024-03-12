const puppeteer = require("puppeteer"); //Importamos puppeteer

const fs = require("fs"); // Importamos fs

const url = "https://www.marketscreener.com/quote/stock/INDITEX-16943135/finances/"; //Almacenamos la URL

const selector = "#valuationTable_wrapper"; //Almacenamos el selector de los productos que hemos descubierto insepeccionando la web

const scrapping = async () => {
  //Lanzamos puppeteer
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  //Con headless false se ve fisicamente el navegador cuando arranca el script

  //Abrimos una nueva página en el navegador
  const page = await browser.newPage();
  //Vamos a la URL que hemos definido al principio
  await page.goto(url);
  //Vamos a clickar 6 veces en el botón .show_more para que nos muestre hasta cierto limite x personajes de la plantilla principal
  //await page.click(".relative");
  //await page.click(".relative");
  

  //Recuperamos con $$eval todos los nodos y nos quedaremos mediante un mapeo con los elementos name e image de cada uno de los bloques que coincidan con el selector declarado inicialmente
  const data = await page.$$eval(selector, (nodes) => {
    return nodes.map((node) => ({
      
      value: node.querySelector(".dataTables_scrollBody").innerText,
      
      //price: node.querySelector(".value").innerText,
      //image: node.querySelector(".thumb").currentSrc,
    }));
  });

  //Con FS escribiremos un nuevo fichero .json con los productos
  fs.writeFile("./data.json", JSON.stringify(data), (err) =>
    err ? console.log(err) : null
  );

  //Cerramos el navegador
  await browser.close();
};

scrapping();