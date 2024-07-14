let draggedItem = null;

function drag(event) {
  draggedItem = event.target;
  event.dataTransfer.setData('text', draggedItem.innerText);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  if (draggedItem) {
    const data = event.dataTransfer.getData('text');
    const dropTarget = event.target;
    if (dropTarget.classList.contains('list')) {
      const newItem = document.createElement('div');
      newItem.className = 'item';
      newItem.innerText = data;
      dropTarget.appendChild(newItem);
    }
    draggedItem = null;
  }
}
