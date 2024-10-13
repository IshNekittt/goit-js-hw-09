const formData = {
  email: '',
  message: '',
};
const dataName = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

window.addEventListener('load', () => {
  if (localStorage.getItem('feedback-form-state')) {
    const parsedData = JSON.parse(localStorage.getItem('feedback-form-state'));
    for (const element in parsedData) {
      form.elements[element].value = parsedData[element];
      formData[element] = parsedData[element];
    }
  }
});

form.addEventListener('input', e => {
  if (!(e.target.nodeName === 'INPUT' || e.target.nodeName === 'TEXTAREA')) {
    return;
  }
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(dataName, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem(dataName);
    formData.email = '';
    formData.message = '';
    form.elements.email.value = '';
    form.elements.message.value = '';
  } else {
    alert('Fill please all fields');
  }
});
