//get current date
let currentDateBanner = new Date();

//BANNER
const closeBtn = document.querySelector('.close-btn');
const banner = document.querySelector('#banner');
closeBtn.addEventListener('click', () => {
    banner.style.display = 'none';
})

let dayOfWeek = currentDateBanner.getDay(); // 0 (Sunday) to 6 (Saturday)

if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday, Tuesday, Wednesday
    banner.style.display = "block";
    banner.focus();

}