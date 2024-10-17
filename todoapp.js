let todoList = [
   { item:'buy milk',
     dueDate:'12-03-2024'
   },
   { item:'buy df',
     dueDate:'12-03-2024'
   },
];
// console.log(todoList.length);
// console.log('dummy');
// displayitem();
function addTodo(){
  let inputvalue=document.querySelector('#todo-input');
  let inputdate=document.querySelector('#todo-date');
  
   let todoItem = inputvalue.value;
   let tododate=inputdate.value;
   todoList.push({item:todoItem,dueDate:tododate});

   inputvalue.value='';
   inputdate.value='';
   // console.log('add-todo');
   // console.log(todoList.length);
   displayitem();
} 

function displayitem(){
   let containerelement = document.querySelector('.todo-c');

   let newhtml='';
   
   for(let i=0;i<todoList.length;i++){ 
      let item=todoList[i].item;
      let duedate=todoList[i].dueDate;
      // let {item,duedate}= todoList[i];
      newhtml+=`
      
      <span>${item}</span>
      <span>${duedate}</span>
      <button class ="btn-delete" onclick="todoList.splice(${i},1); displayitem();">Delete</button>
      
      `;   
   }
   containerelement.innerHTML=newhtml;


   // containerelement.innerText=''; 
   // console.log('display-item');
   // console.log(todoList.length); 
   // for(let i=0;i<todoList.length;i++){
   //    containerelement.innerText=containerelement.innerText+ "\n" + todoList[i];
   //    console.log(containerelement.innerText);
   // }
  
  //  console.log(x.value);

}
