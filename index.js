// fetch('https://jsonplaceholder.typicode.com/posts') 
//     .then(response => response.json())
//     .then(json => {
//         json.forEach (post => {
//             const div = document.createElement('div');
//             div.innerHTML = title.json;
//             document.body.appendChild(div);
//         }) 
//     })
        
    fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(res => res.json())
    .then(data => {
        data.forEach(post => {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `- ${post.title}`;
            document.body.appendChild(newDiv);
        }) 
    })
    
