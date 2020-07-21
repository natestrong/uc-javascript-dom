import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
`;

// Using document.createElement
function createInputElement({label, type = 'text'}) {
    const labelEl = document.createElement('label');
    const inputEl = document.createElement('input');

    inputEl.type = type;
    labelEl.innerText = label;
    labelEl.append(inputEl);

    return labelEl;
}

const inputFromDOM = createInputElement({label: 'Name'});
console.log(inputFromDOM);
app.append(inputFromDOM);

// Using string templates
function createInputTemplate({label, type = 'text'}) {
    return `
    <label>
    ${label}
    <input type="${type}">
    </label>    
`;
}

const inputFromTemplate = createInputTemplate({label: 'email'});
app.innerHTML += inputFromTemplate;
