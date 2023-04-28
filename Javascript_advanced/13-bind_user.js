const user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Buillaume',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer',
}

const logWelcomeUser = (welcomeString) => {
  let str = `${welcomeString}, ${user.firstName}. Your occupation is: ${user.occupation}`
  console.log(str)
}

const bindLogWelcomeUser = logWelcomeUser.bind(user)

bindLogWelcomeUser('Welcome')
