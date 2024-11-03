const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
console.log(ul)

button.addEventListener('click' , ()=>{
    if(input.value === ""){
        alert('please fill the form')
    }
    else{
        const value = input.value
        const array = JSON.parse(localStorage.getItem("Todo_item")) || [];
        array.push(value);
        localStorage.setItem("Todo_item" , JSON.stringify(array));
        creat_item_list(value);
        input.value = ""
    }
})

function creat_item_list(value){
    const li = document.createElement('li');
    li.innerHTML = value;
    li.innerHTML+= `<i class="fa-solid fa-trash"></i>`;
    ul.appendChild(li)
    
}

window.addEventListener('load' , ()=>{
    const array = JSON.parse(localStorage.getItem("Todo_item"));
    for( item of array){
        creat_item_list(item)
    }
})

ul.addEventListener('click' , (x)=>{
    if(x.target.nodeName==="LI"){
        const li =  x.target;
        li.classList.toggle('done');
    }

    if(x.target.nodeName === "I"){
        const li = x.target.parentElement;
        li.style = "display : none";
        const arraynum = li.textContent;
        const array = JSON.parse(localStorage.getItem('Todo_item'));
        const count_array = array.indexOf(arraynum);
        array.splice(count_array , 1);
        // console.log(array)
        localStorage.setItem("Todo_item" , JSON.stringify(array));

    }
})


