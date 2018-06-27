const inputMessage = document.getElementById('input-message');
const outputMessage = document.getElementById('output-message');
const enter = document.getElementById('enter');
const clear = document.getElementById('clear');

enter.addEventListener('click' , (e)=>{
   e.preventDefault();
    const messageValue = inputMessage.value;
    outputMessage.innerHTML = messageValue;
});

clear.addEventListener('click' , (e)=>{
    e.preventDefault();
     outputMessage.innerHTML = " ";
     inputMessage.value = '';
 });
