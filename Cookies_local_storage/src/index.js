
const setCookies = () => {
  inputName = document.getElementById('firstname').value
  inputEmail = document.getElementById('email').value
  const date = new Date()
  date.setDate(date.getDate() + 10)
  const expires = 'expires=' + date.toUTCString()
  const userName = `username=${inputName}`
  const userEmail = `email=${inputEmail}`
  document.cookie = `${userName}; path=/`
  document.cookie = `${userEmail}; path=/`
  document.cookie = `${expires}; path=/`
  showWelcomeMessageOrForm()
}

const showCookies = () => {
  const para = document.createElement("p");
  para.innerHTML = (`Email: ${getCookie('email')} - Firstname: ${getCookie('username')}`);
  document.body.appendChild(para);
}

const getCookie = (name) => {
  let cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0].trim())
      return decodeURIComponent(cookiePair[1])
  }
  return null
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
  document.cookie = `username=; path=/`
  document.cookie = `email=; path=/`
  document.cookie = `expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
  showForm()
}

const showWelcomeMessageOrForm = () => {
  cookieName = getCookie('username')
  cookieEmail = getCookie('email')

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
