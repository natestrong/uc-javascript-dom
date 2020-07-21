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
</div>
`;

const listItems = document.querySelectorAll('#list li');
console.log(listItems);

// Old school
for (let i = 0; i < listItems.length; i++) {
    console.log(listItems[i]);
}

console.log('----------------');

for (const item of listItems) {
    console.log(item);
}

console.log('----------------');

[...listItems].forEach(console.log);
