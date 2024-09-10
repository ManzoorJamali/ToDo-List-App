// let btn = document.getElementById('add_btn');
// btn.addEventListener('click', add);
// function add(e){
//    let currentbtn = e.currentTarget
//    let currentInput = currentbtn.previousElementSibling

//    if(currentInput.value == ""){
//      alert('please insert')   ``
//      end


//    }

 //  let newLi = document.createElement('li')

  //  newLi.classList.add('list-group-item')
  //  newLi.textContent = currentInput.value

  //  let newul = document.getElementById('newul')
  //  newul.appendChild(newLi)
  //  currentInput.value = ""


let inputs = document.getElementById('inp')
let text = document.querySelector('.text')

function add() {
  if(inputs.value == ""){
    alert("insert chapter");
    
 }
  else{
    let newel = document.createElement('ul')
    newel.innerHTML = `${inputs.value}<a href = "#"<li class="list-group-item" ></li><i class = "fa-solid fa-trash d-flex justify-content-end"></i></a>`;
    text.appendChild(newel);
    inputs.value = ""

    newel.querySelector('i').addEventListener('click', remove);
    function remove(){
      newel.remove();
    }


  }
}




 
   
 

