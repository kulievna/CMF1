const box = document.getElementById('box');
const cards=[
{id:1, image:"https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic4.webp", name:"BeSmartphone1", price:"$55.00-66.00"},
{id:2, image:"https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic4.webp", name:"BeSmartphone2", price:"$55.00-66.00"},
{id:3, image:"https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic4.webp", name:"BeSmartphone3", price:"$55.00-66.00"},
{id:4 ,image:"https://themes.muffingroup.com/betheme-store2/wp-content/uploads/2022/08/bethemestore2-products-pic4.webp", name:"BeSmartphone4", price:"$55.00-66.00" },

];


let result = "";

cards.forEach(function(item){

    result +=` <div id="box">
        
        <div class="header">
        <div class="box-img">
        <img src="${item.image}" alt="phone">
        <div class="box-content">
        <h4>${item.name}</h4>
        <p>${item.price}</p>
          </div>
         </div>
        </div>
    </div>`;
});

box.innerHTML = result;
