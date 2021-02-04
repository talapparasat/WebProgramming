const container = document.getElementsByClassName('grid-container')[0];

container.children.item(15).className += ' holidays';
container.children.item(16).style.backgroundColor = 'blue';
container.children.item(17).style.border = '3px solid violet';
console.log(container);