
const createList = (id, items) => {
  const ulElem = document.createElement('ul');
  ulElem.id = id;
  items.forEach(item => {
    const liElem = document.createElement('li');
    liElem.innerHTML = item;
    liElem.setAttribute('data-tooltip', `This is a tooltip for ${item} element`);
    ulElem.appendChild(liElem);
  });
  return ulElem;
};

const listElement = createList('list', ['Item 1', 'Item 2', 'Item 3']);
const bodyElement = document.body;

const addList = (listElement, bodyElement) => {
  bodyElement.appendChild(listElement)
};
addList(listElement, bodyElement);