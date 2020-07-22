import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
    <button type="button">
        Click Me!
    </button>
`;

const button = document.querySelector('button');

console.log(button.style)

//cssTest
button.style.cssText = 'padding: 25px; margin: 10px 0; font-size: 20px';

// direct property access
button.style.color = 'green';
