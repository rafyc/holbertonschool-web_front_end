const welcomeMessage = (fullName) => () => {
  alert("welcome " + fullName)
}

let guillaume = welcomeMessage('Guillaume')
let alex = welcomeMessage('Alex')
let fred = welcomeMessage('Fred')
