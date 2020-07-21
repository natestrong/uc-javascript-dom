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

const list = document.querySelector('#list');

// querySelectorAll: NodeList
const queryChildren = list.querySelectorAll('li');
console.log(queryChildren.length);

// .children : HTMLCollection
// best way
console.log(list.children);

// .childNodes: NodeList
console.log(list.childNodes);

// first/last
console.log(list.firstChild, list.firstElementChild);
console.log(list.lastChild, list.lastElementChild);
