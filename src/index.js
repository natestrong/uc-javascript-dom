import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
    <h1>JavaScript DOM</h1>
`;

const cats = ['Oliver', 'Maxwell', 'Sophie'];

// cats.forEach(name => {
//     const li = document.createElement('li');
//     li.innerText = name;
//     app.append(li);
// });

const fragment = document.createDocumentFragment();

cats.forEach(name => {
    const li = document.createElement('li');
    li.innerText = name;
    fragment.append(li);
});
app.append(fragment);
