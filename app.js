const menu=[
        {
            id:1,
            mealName:"Beverage",
            category:"Breakfast",
            image:"./images/beverage.jpg",
            price:'$20',
            description:"Lorem ipsum dolor sit amet."
        },
        {
            id:2,
            mealName:"French Toast",
            category:"Breakfast",
            image:"./images/french toast.jpg",
            price:'$65',
            description:"Lorem ipsum dolor sit amet."
        },
        {
            id:3,
            mealName:"Beef Curry",
            category:"Lunch",
            image:"./images/beef curry.jpg",
            price:'$15',
            description:"Lorem ipsum dolor sit amet."
        },
        {
            id:4,
            mealName:"Fried Rice",
            category:"Lunch",
            image:"./images/friedrice.jpg",
            price:'$25',
            description:"Lorem ipsum dolor sit amet."
        },
        {
            id:5,
            mealName:"Meat Ball",
            category:"Dinner",
            image:"./images/meatball.jpg",
            price:'$30',
            description:"Lorem ipsum dolor sit amet."
        },
        {
            id:6,
            mealName:"Salmon",
            category:"Dinner",
            image:"./images/salmon.jpg",
            price:'$40',
            description:"Lorem ipsum dolor sit amet."
        }
]
// select a button using selectors
const breakfastBtn=document.querySelector(".breakfast-btn");
const allbtn=document.querySelector(".all-btn");
const lunchBtn=document.querySelector(".lunch-btn");
const dinnerBtn=document.querySelector(".dinner-btn");
const menuContainer=document.querySelector(".menu-container")

// add an eventlistener
window.addEventListener('DOMContentLoaded',function(){
    let displayMenu=menu.map(function(item){
        return `<article class="meal1">
        <img src="${item.image}" alt="beverage" class="beverage" />
        <div>
          <div class="item-price">
              <h3>${item.mealName}</h3>
              <p class="price">${item.price}</p>
          </div>
          <p class="description">${item.description}</p>
        </div>
      </article>`; 
    })
    displayMenu=displayMenu.join("");
    menuContainer.innerHTML=displayMenu;
   console.log(displayMenu);
})
// function mapMenu(item){
//     let array=[]
//    return array[item]
// }

// console.log(mapMenu(menu));
