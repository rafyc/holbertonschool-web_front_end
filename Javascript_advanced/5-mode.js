const changeMode = (size, weight, transform, background, color) => () => {
  document.body.style.fontSize = `${size}px`;
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.backgroundColor = background;
  document.body.style.color = color;
}

const main = () => {
  let spocky = ['9', 'bold', 'uppercase', 'pink', 'green']
  let darkMode = ['12', 'bold', 'capitalize', 'black', 'white']
  let screamMode = ['12', 'normal', 'lowercase', 'white', 'black']

  const paragraph = document.createElement("p")
  paragraph.innerHTML = "Welcome Holberton!"
  document.body.appendChild(paragraph)

  const button1 = document.createElement("button")
  button1.innerHTML = "Spooky"
  document.body.appendChild(button1)
  button1.addEventListener('click', changeMode(...spocky));

  const button2 = document.createElement("button")
  button2.innerHTML = "Dark mode"
  document.body.appendChild(button2)
  button2.addEventListener('click', changeMode(...darkMode));

  const button3 = document.createElement("button")
  button3.innerHTML = "Scream mode"
  document.body.appendChild(button3)
  button3.addEventListener('click', changeMode(...screamMode));
}

main()
