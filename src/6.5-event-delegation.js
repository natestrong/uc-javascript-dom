import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
      <button type="button">
        Add Item
      </button>
      <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
`;

const button = document.querySelector('button');
const list = document.querySelector('#list');
const items = list.getElementsByTagName('li');

// const items = [...list.querySelectorAll('li')];
// items.forEach(item => {
//     item.addEventListener('click', handleClick);
// });

function handleClick(event) {
    if (event.target.nodeName.toLowerCase() !== 'li') {
        return;
    }
    console.log(event.target.innerText);
}

list.addEventListener('click', handleClick);

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = `Item ${items.length + 1}`;
    list.append(li);
});
