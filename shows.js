const form = document.querySelector('#searchForm')
const result = document.querySelector('.results')
const moviesList = document.querySelector('#moviesList')
const motto = document.querySelector('.motto')


const makeShow = async (shows) => { 
         for (let tvshow of shows) {
        if (tvshow.show.image) {

            const movie = document.createElement("li");
            movie.classList.add('movie')

            const img = document.createElement('img')
            img.classList.add('image')
            img.src = tvshow.show.image.medium

            const name = document.createElement('h1')
             name.innerHTML = tvshow.show.name
             name.classList.add('title')

            const summary = document.createElement('p')
            summary.innerHTML = tvshow.show.summary
            summary.classList.add('summary')

            const genres = document.createElement('p');
            genres.innerHTML = tvshow.show.genres
           genres.classList.add('genres')

const showInfo = document.createElement('div')
showInfo.classList.add('ShowInfo')

const lableGen = document.createElement('p')
lableGen.innerHTML= (`genre:`)
lableGen.classList.add('lableName')
lableGen.append(genres)

showInfo.appendChild(name)
showInfo.appendChild(summary)
showInfo.appendChild(lableGen)
showInfo.appendChild(genres)



            movie.append(img)
            movie.append(showInfo)
            moviesList.appendChild(movie)

        

            result.style.visibility = 'visible'
    motto.style.visibility = 'visible'

       if(tvshow.show.summary === ''){
        summary.innerHTML = 'OH NO! WE DO NOT HAVE IT.'
        summary.classList.add('summary')

       }

       
       if(tvshow.show.genres.length === 0){
       genres.innerHTML = ('WE DO NOT KNOW.')
        genres.classList.add('genres')
genres.style.color ='#E900FF'
       }
      
       }
    } 
}





form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=`, config)
    moviesList.innerHTML = ''
    makeShow(res.data)
form.elements.query.value = ''    
})



