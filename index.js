fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: json.stringify({
        name: 'title',
    }),
})
    .then(response => response.json())
    .then(json => {
        const blogPost = document.createElement('div');
        div.innerHTML = text;
        document.body.appendChild('div');
    })
        
        
    