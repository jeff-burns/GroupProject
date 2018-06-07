console.log("Hello World")

var URL = "http://localhost:3008/records"

fetch(URL)
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        console.log(response)
        response.forEach(function(record) {
            console.log(record)
            let main = document.querySelector('main')
                card = document.createElement('div')
                card.className = 'row'
            main.appendChild(card)    
            card.outerHTML = `
                <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                    <div class="card-header">${record.Artist}</div>
                        <div class="card-body">
                            <h5 class="card-title">${record.Album}</h5>
                            <p class="card-text">${record.Song}</p>
                            <img src=${record.ImageURL}>
                        </div>
                </div>
            `
        })
    })
    