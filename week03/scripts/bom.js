//declaring variables
const userInput = document.querySelector('#favchap');
const button=document.querySelector('button');
const list=document.querySelector('#list');
let chaptersArray = getChapterList() || [];

//adding the event to add chapters
//enchance bom

chaptersArray.forEach(chapter => {
    displayList(chapter)
    
});

button.addEventListener('click',()=>{

    if(userInput.value != ''){
        displayList(userInput.value);
        chaptersArray.push(userInput.value);
        setChapterList();
        userInput.value = '';
        userInput.focus();
    }
    else{
        userInput.focus();
    }

});

function displayList(item){
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    //deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click',function(){
        list.removeChild(li);
        deleteChapter(li.textContent);
        userInput.focus();    
    });
 
}

function setChapterList(){
    localStorage.setItem('myFAVBOMList',JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFAVBOMList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}



