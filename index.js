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
        let n = 0;
        data.forEach(post => {
            n++;
            for (let n=0; n < posts; n++) {
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `${n}. ${post.title}`;
            document.body.appendChild(newDiv);
            }
        }) 
    })
    
