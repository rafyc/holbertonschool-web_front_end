const setCookies = () => {
  inputName = document.getElementById('firstname').value
  inputEmail = document.getElementById('email').value
  document.cookie = (`username=${inputName}; email=${inputEmail}`)
}

const showCookies = () => {
  const para = document.createElement("p");
  para.innerHTML = (`Cookies:${document.cookie}`);
  document.body.appendChild(para);
  console.log(document.cookie);
}
