const baseURL="https://vbisso.github.io/wdd230/";
const linksURL="https://vbisso.github.io/wdd230/data/links.json";

async function getLinks(){
    const response = await fetch(linksURL);
    const links = await response.json();    
    console.log(links);

}
getLinks();