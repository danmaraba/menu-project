const menu=[
        {
            id:1,
            mealName:"Beverage",
            category:"breakfast",
            image:"./images/beverage.jpg",
            price:'$20',
            description:"Lorem ipsum dolor sit amet."
        },
        {
            id:2,
            mealName:"French Toast",
            category:"breakfast",
            image:"./images/french toast.jpg",
            price:'$65',
            description:"Lorem ipsum dolor sit amet."
        },
        {
            id:3,
            mealName:"Beef Curry",
            category:"lunch",
            image:"./images/beef curry.jpg",
            price:'$15',
            description:"Lorem ipsum dolor sit amet."
        },
        {
            id:4,
            mealName:"Fried Rice",
            category:"lunch",
            image:"./images/friedrice.jpg",
            price:'$25',
            description:"Lorem ipsum dolor sit amet."
        },
        {
            id:5,
            mealName:"Meat Ball",
            category:"dinner",
            image:"./images/meatball.jpg",
            price:'$30',
            description:"Lorem ipsum dolor sit amet."
        },
        {
            id:6,
            mealName:"Salmon",
            category:"dinner",
            image:"./images/salmon.jpg",
            price:'$40',
            description:"Lorem ipsum dolor sit amet."
        }
]
// select a button using selectors
const filterBtns=document.querySelectorAll(".filter-btns");
const menuContainer=document.querySelector(".menu-container")

// add an eventlistener
window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu)
})

function displayMenuItems(menuItems){
    let displayMenu=menuItems.map(function(item){
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

}

// filter btns
filterBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category=e.currentTarget.dataset.id;
        const menuCategory=menu.filter(function(menuItem){
            if(menuItem.category===category){
                return menuItem
            }
        })
        // console.log(menuCategory);
        if(category==='all'){
            displayMenuItems(menu)
        } else{
            displayMenuItems(menuCategory)
        }
    })
})
