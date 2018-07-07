
const formFields = [
  {tag: 'input', type: 'text', inner: 'type smth'},
  {tag: 'button', type: 'submit', inner: 'Submit'}
];

const createForm = (formFields) => {
  const form = document.createElement('form');
  form.name = 'form';

  formFields.forEach(item => {
    form.appendChild(createElem(item));
  });

  document.body.appendChild(form);
};
createForm(formFields);

function createElem (elm) {
  const element = document.createElement(elm.tag);
  element.setAttribute('type', elm.type);
  element.innerHTML = elm.inner;
  return element;
}

const btn = document.querySelector('button');

function getFocus() {
  document.querySelector("input").focus();
}
getFocus();

const validate = () => {
  const elem = document.querySelector('input');
  const errorMsg = document.createElement('span');
  if (elem.value.toString().length > 8 || elem.value === '') {
    form.appendChild(errorMsg);
    errorMsg.innerHTML = 'Введите не более восьми символов';
    elem.style.cssText = 'border-color: red';
  } else {
    errorMsg.innerHTML = '';
    elem.style.cssText = '';
  }
};

btn.addEventListener('click', validate);

