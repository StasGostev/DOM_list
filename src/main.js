const main_container = document.getElementById('main_container');

function createThree(container, data_obj) {

  const ul = document.createElement('ul');
  const isEmpty = JSON.stringify(data_obj) === "{}"; 
    
  if (isEmpty) {
    return;
  }

  for (let key in data_obj) {
    const li = document.createElement('li');
    li.innerHTML = key;
    ul.append(li);
        
    // if (!isEmpty) {
      createThree(li, data_obj[key]);
    // } 
     
  }
  container.append(ul)
}
createThree( main_container, data);
