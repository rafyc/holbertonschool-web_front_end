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
