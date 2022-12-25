Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });

async function getData() {
    const response = await fetch('https://www.boredapi.com/api/activity/')
    const data = await response.json()
    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const h1 = document.createElement('h1')
    h1.textContent = `${data.type.capitalize()} activity`

    const p = document.createElement('p')
    p.textContent = `${data.activity}.`

    container.appendChild(card)
    card.appendChild(h1)
    card.appendChild(p)
}

const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

for (let i = 0; i < 5; i++) {
    getData()
}