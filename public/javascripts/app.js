document.addEventListener('DOMContentLoaded', e => {
  let form = document.querySelector('form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    let data = new FormData(form);
    let json = {};
    let date = new Date();

    for (let prop of data) {
      json[prop[0]] = `${prop[1]} ${date}`;
    }

    fetch('/', { method: 'POST', headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(json) });

    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = json.text;
    ul.appendChild(li);
  })
})
