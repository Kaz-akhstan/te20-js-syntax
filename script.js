const inputField = document.querySelector('#input-field');
const button = document.querySelector('button');
const answer = document.querySelector('#answer-field');

button.addEventListener('click', () => {
    const name = inputField.value;
    console.log(name);
    reverseName(name);
});

function reverseName(name)
{
    let rName ='';
    for (let i = name.length -1; i >= 0; i--) {
        rName += name[i];
    }
    answer.textContent = rName;
}