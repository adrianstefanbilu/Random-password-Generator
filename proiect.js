const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",
")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const pass1= document.getElementById("password1")
const pass2 = document.getElementById("password2")
const butt= document.getElementById("generate") 

function generateNumber()
{
    return Math.floor(Math.random() * characters.length)
}

function generatePassword()
{
    let pass=""
    let i
    for(i=0; i<=14; i++)
    {
        pass += characters[generateNumber()]
    }
    return pass
}

function displayPassword()
{
    pass1.textContent=""
    pass2.textContent=""
    pass1.textContent=generatePassword()
    pass2.textContent=generatePassword()
}

butt.addEventListener('click',displayPassword)

function copy(element)
{
    navigator.clipboard.writeText(element.textContent);
}

pass1.addEventListener('click',()=>copy(pass1))
pass2.addEventListener('click',()=>copy(pass2))
