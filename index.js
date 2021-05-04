fetch('https://jsonplaceholder.typicode.com/posts') 
 //   method: 'POST',
 //   body: json.stringify({
//        name: 'title',
 //   }),
//})  
    .then(response => response.json())
    .then(json => {
        json.forEach (post => {
            const div = document.createElement('div');
            div.innerHTML = title.json;
            document.body.appendChild('div');
        }) 
    })
        
        
    