function agregarTarea() {
  const tareaInput = document.getElementById('tareaInput');
  const tareaTexto = tareaInput.value.trim();

  if (tareaTexto !== '') {
      const listaTareas = document.getElementById('listaTareas');

      // Crear nuevos elementos HTML para la tarea
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center'; // se utiliza para establecer una nueva clase para el elemento de la lista. 
      listItem.innerHTML = `${tareaTexto} <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>`; //se utiliza para establecer un nuevo contenido HTML para el elemento de la lista

      // Agregar la tarea a la lista
      listaTareas.appendChild(listItem); //método utilizado para agregar un nuevo nodo como hijo a otro nodo existente en el árbol DOM

      // Limpiar despues de agregar una tarea
      tareaInput.value = '';
  }
}
//boton para eliminar tarea
function eliminarTarea(button) {
  const tarea = button.parentElement;
  tarea.remove();
}