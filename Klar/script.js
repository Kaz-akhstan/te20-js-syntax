const inputField1 = document.querySelector('#input-field-a');
const inputField2 = document.querySelector('#input-field-b');
const answerField = document.querySelector('#answer-field');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const a = inputField1.value;
    const b = inputField2.value;
    if(isNaN(a) || isNaN(b))
    {
        answerField.textContent = ("Not a Number");
    }
    else{
        let c = Math.sqrt(a*a + b*b);
        answerField.textContent = c;
    }
});