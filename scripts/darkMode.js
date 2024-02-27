
//DARK MODE
const darModeElement = document.querySelector('#darkMode');


darModeElement.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark');
})
