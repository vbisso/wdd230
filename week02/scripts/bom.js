//declaring variables
const userInput = document.querySelector('#favchap');
const button=document.querySelector('button');
const list=document.querySelector('#list');

//adding the event to add chapters
button.addEventListener('click',()=>{

    const value = userInput.value; //saving the value of the user input into a value variable
   
    if(value){ //makes sure value is empty. its a shortcut :)
        const li = document.createElement('li');
        li.textContent = value; //the new element li will take the userInput value inserted

        const deleteButton = document.createElement('button'); 
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click',()=>{
            list.removeChild(li);//deleting the li element from the list variable (that holds the ul html)
            userInput.focus();
        })
            

        li.appendChild(deleteButton); //appending the X button to my li element
        list.appendChild(li);//appending the li element that contains the value to the list variable (ul in html)
        
        userInput.value = ' ';//setting the value to nothing back again 


    } else{
        userInput.focus();
    }
});

