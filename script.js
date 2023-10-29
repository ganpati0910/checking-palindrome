const inputBox=document.querySelector(".input-box");
const checkbutton=document.querySelector(".check-palindrome");
 

function checkpalindrome(){
    let i=0;
    const givenstring=inputBox.value;
    let j=givenstring.length-1;
    let c=1;
    while(i<j){
        if(givenstring[i]!=givenstring[j]){
           
            c=0;
            break;
        }
        i++;
        j--;
    }
    if(c==0){
        alert('Its not a palindrome');
    }
    else alert('its a palindrome');
    inputBox.value="";
    return ;
}
checkbutton.addEventListener("click",checkpalindrome);

