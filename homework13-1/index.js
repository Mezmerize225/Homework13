// async function getdata() { 

//     const element = await fetch("https://jsonplaceholder.typicode.com/todos")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//         return response.json(); // parse JSON response
//       })
//         .then(data => {
//             // const element = data;
//             const item = document.querySelector(".container");
//             data.forEach(e => {
//                 const newElement = addElement(e.title);
//                 item.appendChild(newElement);
//             });

//             function addElement(value) {
//                 const item = document.createElement("li");
//                 item.textContent = value;
//                 return item;
// }

//             // console.log("Data received:", data);
//         })
//         .catch(error => {
//             console.error("Error occurred:", error);
//     });
// }

// getdata();



// const newArray = [1, 2, 3, 4, 5];
// const element = newArray;

// const item1 = document.querySelector(".container");

// element.forEach(e => {
//     const newElement = addElement(e);
//     item1.appendChild(newElement);
// });

// function addElement(value) {
//         const item = document.createElement("li");
//         item.textContent = value;
//         return item;
// }


async function getdata() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');
        const items = await data.json();
        // console.log(items);
        pushdata(items);
        // items.pushdata(items.title);
        // item.forEach(e => {
        //     // const item = pushdata(e.title);
        //     ul.appendChild(item);
        //     console.log(item);
        // })
        
    }
    catch (error) {
        console.log('Error Message');
    }  
}

const item1 = document.querySelector(".container");
const myItems = getdata();
// myItems.forEach(e => {
//     const item = pushdata(e.title);
//     item1.appendChild(item);
//     console.log(item);
// });

function pushdata(value) {
    value.forEach ( e => {
        console.log(value);
        const element = document.createElement('li');
        element.textContent = e.title;
        if(e.completed) {
            element.classList.add('completed');
        }
        item1.appendChild(element);
        // return element;

    })
    
}

// myItems.forEach(e => {
//     const element = document.createElement('li');
//     element.textContent = e.title;
//     if(e.completed) {
//         element.classList.add('completed');
//     }
//     item1.appendChild(element);
//     console.log(element);
// });
