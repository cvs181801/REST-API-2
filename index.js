        
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

    //const div = document.querySelector('div')

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item, index) => {
      const paragraph = document.createElement("p");
      paragraph.innerText = `${index + 1}. ${item.title}`;
      div.appendChild(paragraph)
    });
  });