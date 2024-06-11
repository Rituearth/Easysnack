document.addEventListener("DOMContentLoaded", () => {
    const restaurants = [
        {
            name: "Table for Tous",
            image: "1.jpg",
            menuItems: [
                { name: "Korean Garlic Bun", price: 300 },
                { name: "Mapple syrup Waffle", price: 200 },
                { name: "Dark Choclate", price: 250 },
                { name: "Biscutt waffle", price: 250 },
                { name: "Cheese waffle", price: 250 }
            ],
            whatsappNumber: "9704839545"
        },
        {
            name: "GLEN'S Bakehouse",
            image: "2g.jpg",
            menuItems: [
                { name: "Mushroom Riosotte", price: 265 },
                { name: "Chicken Riosotte", price: 18.0 },
                { name: "Creamy Mushroom", price: 150 },
                { name: "Spinach & Corn", price: 150 },
                { name: "Mango cake ", price: 170 }
            ],
            whatsappNumber: "9704839545"
        },
        {
            name: "Thom's Bakery",
            image: "3.jpg",
            menuItems: [
                { name: "Crisp Paneer Burger", price: 180 },
                { name: "Mixed Veg-Burger", price: 185 },
                { name: "Classic Grilled-Burger", price: 190 },
                { name: "Crispy Chicken-Burger", price: 190 },
                { name: "Grilled VEG", price: 160 }
            ],
            whatsappNumber: "9704839545"
        },
        // Add more restaurants here
        {
            name: "MAGNOLIA BAKERY",
            image: "4.jpg",
            menuItems: [
                { name: "Expresso", price: 120 },
                { name: "Americano", price: 145 },
                { name: "Capuccino", price: 165 },
                { name: "Iced Mocha", price: 165 },
                { name: "Almond Milk", price: 100 }
            ],
            whatsappNumber: "9704839545"
        },
        {
            name: "AMMA'S PASTERIES",
            image: "5.jpg",
            menuItems: [
                { name: "Black Forest 1/2kg ", price: 265 },
                { name: "white Forest 1/2kg", price: 265 },
                { name: "Pineapple Pastry 1/2kg", price: 265},
                { name: "Chocalate Mars 1/2kg", price: 165 },
                { name: "Butterscotch 1/2kg", price: 365 }
            ],
            whatsappNumber: "9704839545"
        },
        {
            name: "BANGALORE BAKERS",
            image: "6.jpg",
            menuItems: [
                { name: "HONEY CAKE 1/2kg ", price: 300 },
                { name: "BUTTER CREAMCAKE 1/2kg", price: 300 },
                { name: "CHOCO CREAM 1/2kg", price: 380},
                { name: "CHOCOLATE PUNCH 1/2kg", price: 380 },
                { name: "WHITE FOREST 1/2kg", price: 470 }
            ],
            whatsappNumber: "9704839545"
        },
    ];

    const restaurantList = document.getElementById("restaurants");
    const menu = document.getElementById("menu");
    const menuItemsContainer = document.getElementById("menu-items");
    const hotelName = document.getElementById("hotel-name");
    const backButton = document.getElementById("back-button");
    const buyButton = document.getElementById("buy-button");

    restaurants.forEach((restaurant, index) => {
        const restaurantDiv = document.createElement("div");
        restaurantDiv.className = "restaurant";
        restaurantDiv.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div>
                <h3>${restaurant.name}</h3>
            </div>
        `;

        restaurantDiv.addEventListener("click", () => {
            showMenu(restaurant);
        });

        restaurantList.appendChild(restaurantDiv);
    });

    backButton.addEventListener("click", () => {
        menu.classList.add("hidden");
        document.querySelector(".container").classList.remove("hidden");
    });

    function showMenu(restaurant) {
        hotelName.innerText = restaurant.name;
        menuItemsContainer.innerHTML = "";
        const order = {};
        
        restaurant.menuItems.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "menu-item";
            order[item.name] = 0;
            itemDiv.innerHTML = `
                <span>${item.name} <span>$${item.price.toFixed(2)}</span></span>
                <button class="add-button" data-item="${item.name}">+ ADD</button>
            `;
            
            const addButton = itemDiv.querySelector(".add-button");
            addButton.addEventListener("click", () => {
                order[item.name]++;
            });

            menuItemsContainer.appendChild(itemDiv);
        });

        buyButton.href = `https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(
            Object.entries(order).filter(([key, value]) => value > 0).map(([key, value]) => `${key}: ${value}`).join("\n")
        )}`;

        buyButton.addEventListener("click", () => {
            buyButton.href = `https://wa.me/${restaurant.whatsappNumber}?text=${encodeURIComponent(
                Object.entries(order).filter(([key, value]) => value > 0).map(([key, value]) => `${key}: ${value}`).join("\n")
            )}`;
        });

        menu.classList.remove("hidden");
        document.querySelector(".container").classList.add("hidden");
    }
});
