const input = document.getElementById("input-box");
const lista = document.getElementById("lista-container");
const mensaje = document.querySelector("lista-container");

    const crearTarea = () => {
        const valor = input.value;
                
        if (valor === "") {
            alert("No se puede agregar una tarea vacía");
            return;
        }
        else{
            let li = document.createElement("li");
            li.innerHTML=valor;
            lista.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = "&#9940"
            li.appendChild(span)
        }
        input.value = ""; 
        guardarData();
    }

    const limpiar =()=>{
        lista.innerHTML = "";
        localStorage.clear();
    }

    
    


    lista.addEventListener("click", (e) => {
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            guardarData();
            
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            guardarData();
            
        }
    }, false);


    
    const guardarData = () =>{
        localStorage.setItem("datos", lista.innerHTML)
    }

    const mostrarData = () =>{
        lista.innerHTML = localStorage.getItem("datos");
    }

    mostrarData();





    
    






/*



    mostrarStorage();

    function mostrarStorage () {
        document.addEventListener('DOMContentLoaded', () => {
        tareas = JSON.parse(localStorage.getItem('tareas')) || [];
        crearHtml();
    });

        lista.addEventListener('click', eliminarTarea); 
    }

    
    function eliminarTarea (e){
        if (e.target.tagName == 'SPAN') {
            const deleteId = parseInt(e.target.getAttribute('task-id'));
            tareas = tareas.filter(tarea => tarea.id !== deleteId);
            crearHtml();
        }
    }

    function eliminarTodo () {
        tareas = [];
        crearHtml();
    }

   


    const crearTarea = () => {
        const valor = input.value;
        const icono = false;
        
        
        
        if (valor === "") {
            alertaError("No se puede agregar una tarea vacía");
            return;
        }
        
        const listTareas = {
            
            id: Date.now(),
            check :checkComplet(),
            tarea: valor

            

        }
        tareas = [...tareas, listTareas ] //Clonamos el arreglo tareas y concatenamos con el objeto listTareas
        console.log(tareas);
        
        crearHtml();
    }
    

    const crearHtml = () =>{

        limpiarHtml();

        if (tareas.length>0) {
            tareas.forEach(tarea =>{

                const li = document.createElement("li"); //creo un elemeto "<li>", item de la lista
                li.classList.add("card"); /*agrego la clase que teniamos para el "li" y asi queda con el estilo del css 

                const taskContent = document.createElement ("div"); // creando un elemento "<div>"
                const titleTask = document.createElement("span"); // se crea el elemento span 
                titleTask.classList.add("task");    // se agrega la clase task del span (css) al elemento titleTask
                titleTask.innerHTML = `${tarea.tarea} `; // estamos cambiando el contenido del texto del elemento span por el valor del input

                taskContent.appendChild(checkComplet ()); // agregando el check al div.
                taskContent.appendChild(titleTask); // agregando el elemento span al div, agrega un nodo hijo dentro de un nodo padre 

                li.appendChild(taskContent) // agregando el div, dentro del Li

                const span = document.createElement('span');
                span.innerHTML = `<span  task-id="${tarea.id}" <i class="fas fa-trash-alt"></i> </span>`
                span.classList.add('fas-trash');
                span.addEventListener("click", eliminarTarea );


                lista.appendChild(li);/*permite agregar la tarea a la lista, el padre la lista y el hijo la tarea  
                li.appendChild(span);

              
            });
        }
        guardarStorage();
        
        
    }

    const guardarStorage = () =>{
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }


    const checkComplet = () =>{
        const i = document.createElement("i"); // se crea el elemento i 
        i.classList.add("far", "fa-check-circle","icon" );   // se agregan las clases que permiten modificar por el css
        i.addEventListener("click", tareaCompleta); // evento que ocurre al hacer click, se invoca la funcion "tareaCompleta"
       
        return i
        };          

    const tareaCompleta= (event) =>{
        const elemento = event.target;
       

        if (elemento === "far", "fa-check-circle") {
            elemento.classList.toggle("fas"); // agrega clase "add" - "toggle" si la clase existe la quita y si no existe la pone
            elemento.classList.toggle("completeIcon"); // agrega clase "add"
        } 
    };



    const alertaError = (error) =>{
        
        const mensajeError = document.createElement('p');
        mensajeError.textContent = error;
        mensajeError.classList.add('error');

        mensaje.appendChild(mensajeError);
        setTimeout(() => {
            mensajeError.remove();
        },2000);
    }


    const limpiarHtml = () =>{

        lista.innerHTML = '';
        input.value = ""; 
    }

*/

    


    
    
    





    

