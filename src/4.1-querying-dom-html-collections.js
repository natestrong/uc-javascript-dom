import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <ul id="list"></ul>
</div>
`;

const cats = ['Maxwell', 'Sophie', 'Oliver'];

const fragment = document.createDocumentFragment();

cats.forEach(cat => {
    const li = document.createElement('li');
    li.className = 'list-item';
    li.innerText = cat;
    fragment.append(li);
});

// getElementById: HTMLElement
const ulFromId = document.getElementById('list');
ulFromId.append(fragment);

// getElementByClassName: HTMLCollection
const listItemsFromClassName = ulFromId.getElementsByClassName('list-item');
console.log(listItemsFromClassName);

// getElementsByTagName: HTMLCollection
const listItemsFromTagName = ulFromId.getElementsByTagName('li');
console.log(listItemsFromTagName);

// demonstrate live collection
const newListItem = document.createElement('li');
newListItem.className = 'list-item';
newListItem.innerText = 'Crosby';
ulFromId.append(newListItem);

console.log('After new li added')
console.log(listItemsFromClassName);
console.log(listItemsFromTagName);
