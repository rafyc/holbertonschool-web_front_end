
// const setCookies = () => {
//   inputName = document.getElementById('firstname').value
//   inputEmail = document.getElementById('email').value
//   const date = new Date()
//   date.setDate(date.getDate() + 10)
//   const expires = 'expires=' + date.toUTCString()
//   const userName = `username=${inputName}`
//   const userEmail = `email=${inputEmail}`
//   document.cookie = `${userName}; path=/`
//   document.cookie = `${userEmail}; path=/`
//   document.cookie = `${expires}; path=/`
//   showWelcomeMessageOrForm()
// }

const setCookiesAndShowWelcomeMessage = () => {
  inputName = document.getElementById('firstname').value
  inputEmail = document.getElementById('email').value
  Cookies.set('name', inputName, { expires: 10, path: '/', domain: '127.0.0.1' })
  Cookies.set('email', inputEmail, { expires: 10, path: '/', domain: '127.0.0.1' })
  showWelcomeMessageOrForm()
}

const showForm = () => {
  let welcomeMessage = document.getElementsByTagName('h1')[0];
  if (welcomeMessage.innerHTML.length != 0) {
    welcomeMessage.innerHTML = ''
  }
  document.getElementById("form").style.display = "block";
}

const hideForm = () => {
  document.getElementById("form").style.display = "none";
}

const deleteCookiesAndShowForm = () => {
  Cookies.remove('name', { path: '/', domain: '127.0.0.1' })
  Cookies.remove('email', { path: '/', domain: '127.0.0.1' })
  showForm()
}

const showWelcomeMessageOrForm = () => {
  cookieName = Cookies.get('name')
  cookieEmail = Cookies.get('email')

  firstname == '' && elmail == '' ? showForm() : hideForm()

  const welcomeMessage = document.createElement("h1")
  let a = document.createElement('a')
  let link = document.createTextNode('(logout)')
  a.appendChild(link)
  a.href = "javascript:deleteCookiesAndShowForm()";
  welcomeMessage.innerHTML = `Welcome ${cookieName}`
  welcomeMessage.appendChild(a)
  document.body.appendChild(welcomeMessage)

  a.style.cssText = " font-style: italic; margin-left: 10px; color: black; font-weight: normal; text-decoration: none;"
}
