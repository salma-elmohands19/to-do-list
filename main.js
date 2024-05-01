
const inputbox=document.querySelector("#task");
const listcontainer=document.querySelector("#tasks");

function addtask(){
   if(inputbox.value===''){
      alert("You must write something!!");
   }
   else{
      let li=document.createElement("li");
      li.innerHTML=inputbox.value;
      listcontainer.appendChild(li);
      let span=document.createElement("span");
      span.innerHTML='<i class="fa-solid fa-xmark"></i>';
      li.appendChild(span);
   }
   inputbox.value="";
   savedata()
}

listcontainer.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
   e.target.classList.toggle("checked");
   savedata()
}
else if (e.target.tagName==="SPAN"){
   e.target.parentElement.remove();
   savedata()
}

},false);

function savedata(){
   localStorage.setItem("data",tasks.innerHTML);
}

function showtask(){
   tasks.innerHTML=localStorage.getItem("data");
}
showtask();





























