fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'POST',
    body: json.stringify({
        name: 'title',
    }),
})
    .then(response => {
        const blogPost = document.createElement('div');
        div.innerHTML = title.json;
        document.body.appendChild('div');
    })
        
        
    