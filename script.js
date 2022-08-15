let input=document.getElementById('task');
let addbtn=document.getElementById('add');
let ol=document.getElementById('list');
let rem=document.getElementById('remove');
let cl=document.getElementById('clearlist');
let sv=document.getElementById('savelist');


rem.addEventListener('click',remove);
cl.addEventListener('click',clear);
sv.addEventListener('click',saveList);
addbtn.addEventListener('click',add);

function addNew(val,completed)
{

    let element=document.createElement('li');
    let text=document.createTextNode(val);

    if(completed)
    {
        element.addClassList('completed');
    }
    element.appendChild(text);
    ol.appendChild(element);
   

    

    element.addEventListener('dblclick',toggle);
}
function add()
{
    let val=input.value;
    let completed=false;
    if (val=="") {
        return null
    }
    addNew(val,completed);

}
function toggle()
{
    if(this.classList.contains('completed')){
        this.classList.remove('completed');
    }
    else
    {
       this.classList.add('completed');
    }

}

function remove()
{
    let cm=document.getElementsByClassName('completed');
    while(cm.length>0)
    {
        cm.item(0).remove();
    }
}

function clear()
{
    let c=ol.children;
    while(c.length>0)
    {
        c.item(0).remove();
    }

}

function load()
{
    let data=localStorage.getItem('arr');

    if(data!=null)
    {
        let local=JSON.parse(data);
        for(let i=0;i<local.length;i++)
        {
            let store=local[i];
            addNew(store.task,store.completed);

        }
    }
}
load();

function saveList()
{
    let arr=[];
    let elemt=ol.children;
    for(let i=0;i<elemt.length;i++)
    {
       let key=elemt.item(i);
       let obj={
           "task":key.innerText,
           "completed": key.classList.contains('completed')
       }
       arr.push(obj)
    }

    localStorage.setItem('arr',JSON.stringify(arr));
}




