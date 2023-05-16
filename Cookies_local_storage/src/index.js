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
  document.cookie = ` ${expires}; path=/`
}

const showCookies = () => {
  const para = document.createElement("p");
  para.innerHTML = (`Cookies:${document.cookie}`);
  document.body.appendChild(para);
}
