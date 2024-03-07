const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const p = document.querySelector('p');
async function getSuperhero(){
    const response = await fetch(url);
    const supers = await response.json();
    const power = supers.members[2].powers[1];
    console.log(power);
}
getSuperhero();