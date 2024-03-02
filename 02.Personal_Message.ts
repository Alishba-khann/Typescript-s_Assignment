let personName : string ='';

personName = prompt('What is your name?') || '';
/* hum ne 'if' use kr k ik condition apply ki hai 
 tke jb bh user apna name enter kre to uske pass  ye question nazar aaye "would you like to learn some python today?"*/
if(personName !== null && personName!== ''){
 alert(`Hello ${personName},would you like to learn some python today?`)
} 
/*or agar wo apna name enter nh krta to ye"You have to fill your name first!" show ho...*/ 
else{
    alert('You have to fill your name first!')
}