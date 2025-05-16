//Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 


const btnAgregar = document.getElementById("btnAgregar")
const ul = document.getElementById("ul")
const formulario = document.getElementById("formulario")


btnAgregar.addEventListener("click", (event)=>{
    event.preventDefault()
    const input = document.getElementById("input").value
    if(input === ""){
        alert("No ingreso ninguna tarea")
        return
    }
    let li = document.createElement("li")
    li.classList.add("list-group-item", "d-flex", "align-items-center", "py-2", "justify-content-between", "px-3", "border",  "mb-3")
    li.textContent = input
    ul.appendChild(li)

    const icono = document.createElement("i")
    icono.classList.add("bi", "bi-trash3")

    const btnEliminar = document.createElement("button")
    btnEliminar.classList.add("btn", "btn-outline-danger", "ms-3")
    btnEliminar.appendChild(icono)
    li.appendChild(btnEliminar)
    formulario.reset()

    btnEliminar.addEventListener("click", ()=>{
        li.remove()
    })

})