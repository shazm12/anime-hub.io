const app = document.getElementById('root')



const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title
      console.log(movie.title)
      const h2 =document.createElement('h2')
      h2.textContent =movie.director;

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 400)
      p.textContent = `${movie.description}...`
      
      const a = document.createElement('a');
      const h4 =document.createElement('h4');
      if(h1.textContent === 'Castle in the Sky') {
        a.href="https://animefrenzy.org/anime/laputa-castle-in-the-sky";

      } else {
        a.href="https://animefrenzy.org/anime/"+movie.title.toLowerCase().split(" ").join("-");
      }

      h4.textContent= 'Watch'
      console.log(a.href) 

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(h2)
      card.appendChild(p)
      card.appendChild(a)
      a.appendChild(h4)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
