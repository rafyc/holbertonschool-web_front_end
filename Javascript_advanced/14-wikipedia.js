const createElement = (data) => {
  const p = document.createElement('p')
  p.innerHTML = data
  document.body.appendChild(p)
}

const queryWikipedia = (callback) => {

  const req = new XMLHttpRequest()

  url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'

  req.open("GET", url);

  req.addEventListener('load', () => {
    const response = JSON.parse(req.response)
    const extract = response.query.pages['21721040'].extract
    callback(extract)
  })

  req.addEventListener('error', (error) => {
    console.log(error);
  })

  req.send()

}

queryWikipedia(createElement)
