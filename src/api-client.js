
const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=chile&api_key=66251a1d5b39420c34e4241bdadf32b2&format=json'


function getArtists(){

return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist =>{
     return {

          name: artist.name,
          image: artist.image[3]['#text'],
          likes:200,
          comment:140,
    }
    }))
    
}
export { getArtists }
