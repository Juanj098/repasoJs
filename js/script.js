const BtnToDo = document.querySelector('#BtnToDo')
const AddHwork = document.querySelector('#addNew')
const listTareas = document.querySelector('tbody')
const listas = document.querySelector('.listTareas')
const BtnContacts = document.querySelector('#BtnContact')
const BtnAddContact = document.querySelector('.cardAdd')
const listaContactos = document.querySelector('.listCards')
let listToDo = []
let listContactos = []
let contador = 0
events()

function events(){
    //ToDo
    BtnToDo.addEventListener('click',addDivToDo)
    AddHwork.addEventListener('click',Addwork)
    listas.addEventListener('click',delTarea)
    listas.addEventListener('change',check)
    //Contacts
    BtnContacts.addEventListener('click',addDivContac)
    BtnAddContact.addEventListener('click',AddContact)
}   
 
// -> ToDo

function addDivToDo(e){
    e.preventDefault()
    const gifRob = document.querySelector('.gifRobot')
    const ToDo = document.querySelector('#ToDo')
    const contact = document.querySelector('.contacts')
    let DisplayToDo = window.getComputedStyle(ToDo)
    DisplayToDo = DisplayToDo.getPropertyValue('display')
    if(DisplayToDo == 'none'){
        gifRob.style.display = 'none'
        ToDo.style.display = 'flex'
        ToDo.style.flexDirection = 'column'
        contact.style.display = 'none'
    } 
}

function Addwork(e){
    e.preventDefault()
    if(e.target.classList.contains('AddHwork')){

        let inputTxt = document.querySelector('#hWork')
        if(inputTxt.value != ''){
            const obj ={
                txt: document.querySelector('#hWork').value,
                id: listToDo.length+1,
                state: ''
            }
            inputTxt.value = ''
            listToDo = [...listToDo,obj]
            console.log(listToDo)
            ShowElmsToDo()
        } else{
            alert('ingrese tarea')
        }
    }
}

function ShowElmsToDo(){
    while(listTareas.firstChild){
        listTareas.removeChild(listTareas.firstChild)
    }
    listToDo.forEach(tarea =>{
        const {txt,id,state} = tarea
        const row = document.createElement('tr')
        row.innerHTML = `
            <td class = 'txtd' ><p class ='pd'>${txt}</p></td>
            <td><input type='checkbox' ${state} data-id =${id} name ='check' id='check' class ='checkList'></td>
            <td class = 'deleteHw' ><a class='BtnDelHw' data-id =${id} href ='#'><img class='xx' src ='img/PhXCircleFill.png'></a></td>
        `
        listTareas.appendChild(row)
    })
}

function delTarea(e){
    if(e.target.parentElement.classList.contains('BtnDelHw')){
        id = e.target.parentElement.getAttribute('data-id')
        listToDo = listToDo.filter(elm => elm.id != id)
        ShowElmsToDo()
        console.log(`${id}`)
    }
}

function check(e){
    if(e.target.classList.contains('checkList')){
        id = e.target.getAttribute('data-id')
        if(e.target.checked){
            console.log(`check -> ${id}`)
            listToDo.find(elm => {
                if(elm.id == id){
                    elm.state = 'checked'
                }
            })
        }else{
            console.log('uncheck')
            listToDo.find(elm =>{
                if(elm.id == id){
                    elm.state = ''
                }
            })
        }
        ShowElmsToDo()
    }
}

// -> contacts

function addDivContac(e){
    e.preventDefault()
    const gifRob = document.querySelector('.gifRobot')
    const contact = document.querySelector('.contacts')
    const ToDo = document.querySelector('#ToDo')
    let displayContact = window.getComputedStyle(contact)
    displayContact = displayContact.getPropertyValue('display')
    if(displayContact == 'none'){
        gifRob.style.display = 'none'
        contact.style.display = 'flex'
        ToDo.style.display = 'none'
    }
    console.log(e.target)
}

function AddContact(e){
    e.preventDefault()
    if(e.target.classList.contains('saveContact')){
        if(document.querySelector('#nameC').value == '' || document.querySelector('#phoneC').value == '' || document.querySelector('#BdC').value == '' || document.querySelector('#emailC').value == ''){
            alert('ingrese dato faltante')
        }else{
            obj ={
                name: document.querySelector('#nameC').value,
                phone: document.querySelector('#phoneC').value,
                Bd: document.querySelector('#BdC').value,
                email: document.querySelector('#emailC').value,
                id:listContactos.length+1
            }
            listContactos = [...listContactos,obj]
            document.querySelector('#nameC').value = ''
            document.querySelector('#phoneC').value = ''
            document.querySelector('#BdC').value = ''
            document.querySelector('#emailC').value = ''
            console.log(listContactos)
            showContactos()
        }
    }
}

function showContactos(){
    console.log(listaContactos)
    while(listaContactos.firstChild){
        listaContactos.removeChild(listaContactos.firstChild)
    }
    listContactos.forEach(contacto => {
        const {name,phone,Bd,email,id} = contacto
        const div = document.createElement('div')
        const div2 = document.createElement('div')
        const div3 = document.createElement('div')
        div.classList.add('cardCon')
        div2.classList.add('data')
        div3.classList.add('imgData')
        div2.innerHTML =`
            <h1>${name}</h1>
            <h2>${phone}</h2>
            <h2>${Bd}</h2>
            <h2>${email}</h2>
        `
        div.appendChild(div2)
        listaContactos.appendChild(div)
    })
}
