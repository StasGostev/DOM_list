const main_container = document.getElementById('main_container');

function createTree(container, data_obj) {
  const ul = document.createElement('ul');
  const isEmptyObj = Object.keys(data_obj).length === 0;

  for (let key in data_obj) {
    const li = document.createElement('li');
    li.innerHTML = key;
    ul.append(li);
    createTree(li, data_obj[key]);       
  }
  container.append(ul);
}

createTree(main_container, data);
