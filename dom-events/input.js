
const formFields = [
  {tag: 'input', type: 'text', inner: 'type smth'},
  {tag: 'button', type: 'button', inner: 'Submit'}
];

const form = document.createElement('form');
form.name = 'form';

const createForm = (formFields) => {
    formFields.forEach(item => {
    form.appendChild(createElem(item));
  });
  form.appendChild(createErrorElement ('span'));
  document.body.appendChild(form);
};
createForm(formFields);

function createErrorElement (tagName) {
  const errMsg = document.createElement(tagName);
  errMsg.className = 'error-text';
  return errMsg;
}

function createElem (elm) {
  const element = document.createElement(elm.tag);
  element.setAttribute('type', elm.type);
  element.innerHTML = elm.inner;
  return element;
}

function getFocus() {
  document.querySelector("input").focus();
}
getFocus();

const validate = () => {
  const elem = document.querySelector('input');
  const errElm = document.querySelector('.error-text');
  if (elem.value.toString().length > 8 || elem.value === '') {
    errElm.innerHTML = 'Введите не более восьми символов';
    elem.classList.add('red');
  } else {
    errElm.innerHTML = '';
    elem.classList.remove('red');
  }
};

document.querySelector('button').addEventListener('click', validate);

