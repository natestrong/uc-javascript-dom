import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <ul id="list">
        <li>Oliver</li>
        <li>Maxwell</li>
        <li>Sophie</li>
        <li>Crosby</li>
    </ul>
`;

const listItem = document.querySelector('#list li');


// Any DOM nodes
console.log(listItem.nextSibling);

// Any Element Nodes
console.log(listItem.nextElementSibling);

// previous element sibling
console.log(listItem.previousElementSibling);
