        
    fetch('https://jsonplaceholder.typicode.com/posts') 
    .then(res => res.json())
    .then(data => {
        let n = 0;
        data.forEach(post => {
            n++;
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `${n}. ${post.title}`;
            document.body.appendChild(newDiv);
        }) 
    })
    
