        
    //3 different solutions, same result
    
    // fetch('https://jsonplaceholder.typicode.com/posts') 
    // .then(res => res.json())
    // .then(data => {
    //     let n = 0;
    //     data.forEach(post => {
    //         n++;
    //         const newDiv = document.createElement('div');
    //         newDiv.innerHTML = `${n}. ${post.title}`;
    //         document.body.appendChild(newDiv);
    //     }) 
    // })
    
    
    // const list = document.querySelector("ol");

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     data.forEach(item => {
    //       const li = document.createElement("li");
    //       li.innerText = item.title;
    //       list.appendChild(li);
    //     });
    //   });

    //Grab the data from the Typicode URL and display it.

    const div = document.querySelector('div')

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item, index) => {
      const paragraph = document.createElement("p");
      paragraph.innerText = `${index + 1}. ${item.title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}.
      "${item.body}"`;
      div.appendChild(paragraph)
    });
  });


// async function getPosts() {
// const postsPromise = await fetch("https://jsonplaceholder.typicode.com/posts");
// const posts = await postsPromise.json();
//      let html = "";
//          posts.forEach(post => {
//              html += `
//              <div class='post'>
//              <h3>${item.title}</h3>
//              <p><em>${item.body}</em></p>
//              `;
//          })
//     }
        

//     getPosts()