const baseURL = "https://vbisso.github.io/wdd230/";
const linksURL = "https://vbisso.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const links = await response.json();
    displayLinks(links);

}

function displayLinks(weeks) {
    const weekList = document.querySelector('#weekList');
    for (let i = 0; i < weeks.weeks.length; i++) {
        
        const week = document.createElement('li');
        week.textContent = `${weeks.weeks[i].week} :`;
        weekList.appendChild(week);
        for (let j = 0; j < weeks.weeks[i].links.length; j++) {

            const link = document.createElement('a');
            link.href = `${weeks.weeks[i].links[j].url}`;
            link.textContent = `${weeks.weeks[i].links[j].title} |`;
            if (j === weeks.weeks[i].links.length - 1) {
                link.textContent = `${weeks.weeks[i].links[j].title}`;
            }
            week.appendChild(link);


        }
    }
    console.log(weekList);

}

getLinks();