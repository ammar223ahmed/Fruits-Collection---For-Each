// var list = document.getElementById("list");
// var fruits = [
//     {
//         name: "Mango",
//         title: "Phalon ka badshah",
//         types: ["Chounsa", "Sindhri", "Anwaratol", "Almaas"],
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         image:
//         "https://tse1.mm.bing.net/th?id=OIP.d5vXx9cnYJc8aHFMGLsuJgHaEo&pid=Api&P=0&h=220",
//     },
//     {
//         name: "Watermelon",
//         title: "Garmi ka dushman",
//         types: ["Red Melon", "Green Melon"],
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         image:
//           "https://tse1.mm.bing.net/th?id=OIP.xCZB_txYfgtetDlGG23aTwHaHa&pid=Api&P=0&h=220",
//       },
//       {
//         name: "Cherry",
//         title: "Khoon banane wali",
//         types: ["Black Cherry", "Red Cherry"],
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         image:
//         //   "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
//           "https://tse1.mm.bing.net/th?id=OIP.aiy6tseHJUHN5r6d174yZgHaEK&pid=Api&P=0&h=220",
//       }, 
//       {
//         name: "Banana",
//         title: "120 ka Darjan",
//         types: ["Banana", "Banana"],
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         image:
//         //   "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
//           "https://tse2.mm.bing.net/th?id=OIP.lEnaI38-1tjW1R8tyIoG5gHaFj&pid=Api&P=0&h=220",
//       }, 
//       {
//         name: "Chiku",
//         title: "Jaldi Aoo Jaldi Paoo ",
//         types: ["Chiku", "Chiku"],
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         image:
//         //   "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
//           "https://tse2.explicit.bing.net/th?id=OIP.PgPrxLKr_DGxm_bD1THNmgHaE8&pid=Api&P=0&h=220",
//       }, 
//       {
//         name: "Pineapple",
//         title: "Pineapple Lover",
//         types: ["Yellow Pineapple", "Green Pineapple"],
//         desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//         image:
//         //   "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
//           "https://images2.alphacoders.com/241/thumb-1920-241720.jpg",
//       }, 
// ];




// fruits.forEach(function(data,ind){
// var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4" id= "remove_parent">
// <div class="flex relative h-[270px] ammu" >
//   <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${data.image}">
//   <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//     <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
//       data.name
//     }</h2>
//     <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
//       data.title
//     }</h1>
//     <p class="leading-relaxed">${data.types.join(" , ")}</p>
//     <p class="leading-relaxed">${data.desc} </p>
//     <button onclick="updateDesc(this)" class="ubdate">update</button>
//     <button onclick="deletebox(this)" class="delete">Delete</button>
//   </div>
// </div>
// </div>`;
// list.innerHTML += ele;
// });

// function updateDesc(ele) {
//     console.log("ele=>", ele.previousElementSibling);
//     console.log("ele parentr=>", ele.parentElement);
//     var index = ele.parentElement.id;
//     fruits[index].desc = prompt("Desc");
//     console.log("fruits-->", fruits);
//     list.innerHTML = "";
//     fruits.forEach(function (data, ind) {
//       var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
//       <div class="flex relative h-[250px] ammu">
//         <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
//           data.image
//         }">
//         <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//           <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
//             data.name
//           }</h2>
//           <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
//             data.title
//           }</h1>
//           <p class="leading-relaxed">${data.types.join(" , ")}</p>
//           <p class="leading-relaxed">${data.desc} </p>
//            <button onclick="updateDesc(this)" class="ubdate">update</button>
//           <button onclick="deletebox(this)" class="delete">Delete</button>
          
//           </div>
//       </div>
//     </div>`;
//       list.innerHTML += ele;
//     });
//     //   var desc = prompt("Desc");
//     //   ele.previousElementSibling.innerText = desc;
//   } 
//   var remove_parent = document.getElementById("remove_parent"); 
//   function deletebox(ele) {
//     // console.log("ele=>", ele.previousElementSibling);
//     // console.log("ele parentr=>", ele.parentElement);
//     //  var removeperent = remove_parent.childNodes;
//     //  console.log(removeperent);   
//     //  removeperent.remove();
//      //  .remove();
//     var indexx = ele.parentElement.parentElement;
//     indexx.remove();
//     // console.log(indexx);
//     var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
//     <div class="flex relative h-[250px]">
//       <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
//         data.image
//       }">
//       <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
//         <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
//           data.name
//         }</h2>
//         <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
//           data.title
//         }</h1>
//         <p class="leading-relaxed">${data.types.join(" , ")}</p>
//         <p class="leading-relaxed">${data.desc} </p>
//         <button onclick="updateDesc(this)">update</button>
//       </div>
//     </div>
//   </div>`;
//     list.innerHTML += ele;
         
    
// }



var list = document.getElementById("list");
var fruits = [
    {
        name: "Mango",
        title: "Phalon ka badshah",
        types: ["Chounsa", "Sindhri", "Anwaratol", "Almaas"],
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image:
        "https://tse2.mm.bing.net/th?id=OIP.Mfv2AgNkFD_HvRZMlUmhygHaE7&pid=Api&P=0&h=220",
    },
    {
        name: "Watermelon",
        title: "Garmi ka dushman",
        types: ["Red Melon", "Green Melon"],
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image:
          "https://tse2.explicit.bing.net/th?id=OIP.Ia_dY0OyHV-A2Ne-BjdPHwHaE8&pid=Api&P=0&h=220",
      
        },
      {
        name: "Cherry",
        title: "Khoon banane wali",
        types: ["Black Cherry", "Red Cherry"],
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image:
        //   "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
          "https://tse1.mm.bing.net/th?id=OIP.sDh5FKnwHtcD_TzDrl9m_AHaE8&pid=Api&P=0&h=220",
      }, 
      {
        name: "Banana",
        title: "120 ka Darjan",
        types: ["Banana", "Banana"],
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image:
        //   "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
          "https://tse4.mm.bing.net/th?id=OIP.hie_UQGW8Jn8gFRfVw-qWwHaE8&pid=Api&P=0&h=220",
      }, 
      {
        name: "Chiku",
        title: "Jaldi Aoo Jaldi Paoo ",
        types: ["Chiku", "Chiku"],
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image:
        //   "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
          "https://tse4.explicit.bing.net/th?id=OIP.ljXMBpfWsmxdnVxFKMmblwHaEK&pid=Api&P=0&h=220",
      }, 
      {
        name: "Pineapple",
        title: "Pineapple Lover",
        types: ["Yellow Pineapple", "Green Pineapple"],
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image:
        //   "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
          "https://tse4.mm.bing.net/th?id=OIP.YB9tBJ4FRicBOI3VMbRQdwHaEK&pid=Api&P=0&h=220",
      }, 
      {
        name: "Apple",
        title: "Apple Lover",
        types: ["Apple Red", "Apple pice of bite"],
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image:
        //   "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
          "https://tse3.mm.bing.net/th?id=OIP.5bNHldR4iiiuTBF6vOdrKQHaE8&pid=Api&P=0&h=220",
      }, 
      {
        name: "Graps",
        title: "Graps Lover",
        types: ["Graps green", "Graps pice of water"],
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image:
        //   "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
          "https://www.foodrepublic.com/img/gallery/15-types-of-grapes-to-know-eat-and-drink/l-intro-1684769284.jpg",
      }, 
      {
        name: "Orange",
        title: "Orange Lover",
        types: ["Orange is butiful", "Orange pice of lover"],
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        image:
        //   "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
          "https://tse2.mm.bing.net/th?id=OIP.jltuFngRsBzn-FC_lV_31gHaGS&pid=Api&P=0&h=220",
      },
];



function renderData(){
list.innerHTML = "";
fruits.forEach(function(data,ind){
var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4" id= "remove_parent" >
<div class="flex relative h-[270px] ammu" id="ammu" style = "cursor: pointer;" >
  <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${data.image}">
  <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
      data.name
    }</h2>
    <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
      data.title
    }</h1>
    <p class="leading-relaxed">${data.types.join(" , ")}</p>
    <p class="leading-relaxed">${data.desc} </p>
    <button onclick="updateDesc(this)" class="ubdate">update</button>
    <button onclick="deletebox(this)" class="delete">Delete</button>
  </div>
</div>
</div>`;
list.innerHTML += ele;
});
}
renderData();
var ammu = document.getElementById("ammu");

function deletebox(ele) {
  
  fruits.splice(ele.parentElement.id , 1)
  console.log("fruits===>", fruits);
  renderData();
}







function updateDesc(ele) {
console.log("ele=>", ele.previousElementSibling);
console.log("ele parentr=>", ele.parentElement);
    var index = ele.parentElement.id;
    fruits[index].desc = prompt("Desc");
    console.log("fruits-->", fruits);
    list.innerHTML = "";
    fruits.forEach(function (data, ind) {
      var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
      <div class="flex relative h-[250px] ammu">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
          data.image
        }">
        <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
            data.name
          }</h2>
          <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
            data.title
          }</h1>
          <p class="leading-relaxed">${data.types.join(" , ")}</p>
          <p class="leading-relaxed">${data.desc} </p>
           <button onclick="updateDesc(this)" class="ubdate">update</button>
          <button onclick="deletebox(this)" id="${index}" class="delete">Delete</button>
          
          </div>
      </div>
    </div>`;
      list.innerHTML += ele;
    });

  } 


