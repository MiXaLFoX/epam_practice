
const formFields = [
  {tag: 'input', type: 'text', inner: 'type smth'},
  {tag: 'button', type: 'submit', inner: 'Submit'}
];

const createForm = (formFields) => {
  const form = document.createElement('form');
  form.name = 'form';
  document.body.appendChild(form);

  for (let i = 0; i < formFields.length; i++) {
    const elm = formFields[i];

    switch (elm.tag) {
      case 'input':
        form.appendChild(createElem(elm));
        break;
      case 'button':
        form.appendChild(createElem(elm));
        break;
    }
  }
};
createForm(formFields);

function createElem (elm) {
  const element = document.createElement(elm.tag);
  element.setAttribute('type', elm.type);
  element.innerHTML = elm.inner;
  return element;
}

