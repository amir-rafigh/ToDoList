const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click' , (x)=>{
    const value = input.value;
    const li = creatli(value)
    ul.appendChild(li);
    input.value = "";

    
})

function creatli(value){
    const li = document.createElement('li');
    li.innerHTML = value;
    li.innerHTML+= `<i class="fa-solid fa-trash"></i>`;
    return li;
}

ul.addEventListener('click' , (x)=>{
    if(x.target.nodeName === "I"){
        x.target.parentElement.style = "display:none";
      
    }
    if(x.target.nodeName === "LI"){
        const classs = x.target;
        classs.classList.toggle('done');

    }
})