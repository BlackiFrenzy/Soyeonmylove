const meals = [
    {
      id: 1,
      title: "pizza margherita",
      category: "pizza",
      img: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emElMjBtYXJnaGVyaXRhfGVufDB8fDB8fHwy",
    },
    {
      id: 2,
      title: "pasta mushrooms",
      category: "pasta",
      img: "https://images.unsplash.com/photo-1600345968497-bb0c69de64f8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFzdGElMjBtdXNocm9vbXN8ZW58MHx8MHx8fDI%3D",
    },
    {
      id: 3,
      title: "pizza salami",
      category: "pizza",
      img: "https://images.unsplash.com/photo-1700760934249-93efbb574d23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emElMjBzYWxhbWl8ZW58MHx8MHx8fDI%3D",
    },
    {
      id: 4,
      title: "pasta basilico",
      category: "pasta",
      img: "https://images.unsplash.com/photo-1627286400579-027de47e9e73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhc3RhJTIwc3Vnb3xlbnwwfHwwfHx8Mg%3D%3D",
    },
    {
      id: 5,
      title: "crispy hamburger",
      category: "hamburger",
      img: "https://images.unsplash.com/photo-1648221410814-9d45c9ab144b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuaW5vJTIwaGFtYnVyZ2VyfGVufDB8fDB8fHwy",
    },
    {
      id: 6,
      title: "veggie hamburger",
      category: "hamburger",
      img: "https://images.unsplash.com/photo-1619683551667-4bc326abff44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZ2llJTIwaGFtYnVyZ2VyfGVufDB8fDB8fHwy",
    },
    {
      id: 7,
      title: "bison steak",
      category: "steak",
      img: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RlYWt8ZW58MHx8MHx8fDI%3D",
    },
    {
      id: 8,
      title: "turkey steak",
      category: "steak",
      img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHN0ZWFrfGVufDB8fDB8fHwy",
    },
    {
      id: 9,
      title: "berry cheesecake",
      category: "dessert",
      img: "https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlJTIwY2FrZXxlbnwwfHwwfHx8Mg%3D%3D",
    },
    {
      id: 1,
      title: "velvet cake",
      category: "dessert",
      img: "https://images.unsplash.com/photo-1685957652870-d56b0e5bea52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlbHZldCUyMGNha2V8ZW58MHx8MHx8fDI%3D",
    },
  ];
  
  const mainSection = document.querySelector(".main__content");
  const btnContainer = document.querySelector(".btn__container");
  
  window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(meals);
    displayMenuButtons();
  });
  
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      return `<div class="menu__item">
      <div class="item__photo">
        <img src=${item.img} alt=${item.title} />
      </div>
        
          <div class="item__info">
            <h4>${item.title}</h4>
            <p class="description">Airedale monterey jack cream cheese. </p>
          </div>
        </div>`;
    });
    displayMenu = displayMenu.join("");
    mainSection.innerHTML = displayMenu;
  }
  
  function displayMenuButtons() {
    const categories = meals.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter__btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter__btn");
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = meals.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          displayMenuItems(meals);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }
  