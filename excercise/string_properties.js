// Display only Key and value whose type is string

function showProperties(obj) {
    for(let key in obj)
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

let movie = {
    title: 'a',
    releaseYear: 2022,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);