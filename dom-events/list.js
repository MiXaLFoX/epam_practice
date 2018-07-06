const createList = (id, items) => {
  const ulElem = document.createElement('ul');
  ulElem.id = id;
  for (let i = 0; i < items.length; i++) {
    const liElem = document.createElement('li');
    liElem.innerHTML = items[i];
    ulElem.appendChild(liElem);
  }
  return ulElem;
};

const listElement = createList('list', ['Item 1', 'Item 2', 'Item 3']);
const bodyElement = document.body;

const addList = (listElement, bodyElement) => {
  bodyElement.appendChild(listElement)
};
addList(listElement, bodyElement);