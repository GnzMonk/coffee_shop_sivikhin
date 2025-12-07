const coffee_list = [
    // Cappuccino (6 объектов)
    {
        "name": "Classic Cappuccino",
        "type": "cappuccino",
        "description": "A perfect balance of espresso, steamed milk and a thick layer of milk foam",
        "short": 89,
        "tall": 119,
        "grande": 139
    },
    {
        "name": "Vanilla Cappuccino",
        "type": "cappuccino",
        "description": "Cappuccino with sweet vanilla syrup and creamy milk foam",
        "short": 99,
        "tall": 129,
        "grande": 149
    },
    {
        "name": "Caramel Cappuccino",
        "type": "cappuccino",
        "description": "Rich cappuccino with sweet caramel drizzle and velvety foam",
        "short": 99,
        "tall": 129,
        "grande": 149
    },
    {
        "name": "Hazelnut Cappuccino",
        "type": "cappuccino",
        "description": "Nutty flavored cappuccino with aromatic hazelnut syrup",
        "short": 99,
        "tall": 129,
        "grande": 149
    },
    {
        "name": "Cinnamon Cappuccino",
        "type": "cappuccino",
        "description": "Warm cappuccino with cinnamon spice and dusted cinnamon topping",
        "short": 94,
        "tall": 124,
        "grande": 144
    },
    {
        "name": "Double Shot Cappuccino",
        "type": "cappuccino",
        "description": "Extra strong cappuccino with double espresso shot for bold flavor",
        "short": 109,
        "tall": 139,
        "grande": 159
    },

    // Latte (6 объектов)
    {
        "name": "Classic Latte",
        "type": "latte",
        "description": "Smooth blend of espresso and steamed milk with light foam",
        "short": 99,
        "tall": 139,
        "grande": 159
    },
    {
        "name": "Vanilla Latte",
        "type": "latte",
        "description": "Creamy latte sweetened with vanilla syrup",
        "short": 109,
        "tall": 149,
        "grande": 169
    },
    {
        "name": "Caramel Latte",
        "type": "latte",
        "description": "Rich latte with caramel syrup and caramel drizzle",
        "short": 109,
        "tall": 149,
        "grande": 169
    },
    {
        "name": "Matcha Latte",
        "type": "latte",
        "description": "Japanese green tea powder blended with steamed milk",
        "short": 119,
        "tall": 159,
        "grande": 179
    },
    {
        "name": "Hazelnut Latte",
        "type": "latte",
        "description": "Smooth latte with the warm, nutty flavor of hazelnut",
        "short": 109,
        "tall": 149,
        "grande": 169
    },
    {
        "name": "Coconut Latte",
        "type": "latte",
        "description": "Tropical latte with coconut milk and coconut flavor",
        "short": 114,
        "tall": 154,
        "grande": 174
    },

    // Americano (6 объектов)
    {
        "name": "Classic Americano",
        "type": "americano",
        "description": "Espresso diluted with hot water for a smooth, rich coffee",
        "short": 79,
        "tall": 99,
        "grande": 119
    },
    {
        "name": "Iced Americano",
        "type": "americano",
        "description": "Chilled Americano served over ice for refreshing coffee experience",
        "short": 79,
        "tall": 99,
        "grande": 119
    },
    {
        "name": "Long Black Americano",
        "type": "americano",
        "description": "Australian-style Americano with preserved crema",
        "short": 84,
        "tall": 104,
        "grande": 124
    },
    {
        "name": "Americano Misto",
        "type": "americano",
        "description": "Americano with a splash of steamed milk for creaminess",
        "short": 89,
        "tall": 109,
        "grande": 129
    },
    {
        "name": "Double Americano",
        "type": "americano",
        "description": "Extra strong Americano with double shot of espresso",
        "short": 94,
        "tall": 114,
        "grande": 134
    },
    {
        "name": "Americano with Cream",
        "type": "americano",
        "description": "Americano topped with a layer of fresh cream",
        "short": 89,
        "tall": 109,
        "grande": 129
    },

    // Espresso (исправлен typo "expresso" на "espresso" согласно CoffeeType)
    {
        "name": "Single Espresso",
        "type": "expresso",
        "description": "A concentrated coffee brewed by forcing hot water through finely-ground coffee beans",
        "short": 69,
        "tall": 89,
        "grande": 109
    },
    {
        "name": "Double Espresso",
        "type": "expresso",
        "description": "Two shots of rich, bold espresso for extra caffeine kick",
        "short": 89,
        "tall": 109,
        "grande": 129
    },
    {
        "name": "Ristretto",
        "type": "expresso",
        "description": "Short shot of espresso with less water for more concentrated flavor",
        "short": 74,
        "tall": 94,
        "grande": 114
    },
    {
        "name": "Lungo",
        "type": "expresso",
        "description": "Long shot of espresso with more water for milder taste",
        "short": 74,
        "tall": 94,
        "grande": 114
    },
    {
        "name": "Espresso Macchiato",
        "type": "expresso",
        "description": "Espresso 'stained' with a small amount of foamed milk",
        "short": 79,
        "tall": 99,
        "grande": 119
    },
    {
        "name": "Espresso Con Panna",
        "type": "expresso",
        "description": "Espresso topped with whipped cream",
        "short": 84,
        "tall": 104,
        "grande": 124
    },

    // Flat White (6 объектов)
    {
        "name": "Classic Flat White",
        "type": "flatWhite",
        "description": "Australian coffee with velvety microfoam and double ristretto",
        "short": 94,
        "tall": 124,
        "grande": 144
    },
    {
        "name": "Double Ristretto Flat White",
        "type": "flatWhite",
        "description": "Extra strong flat white with double ristretto shots",
        "short": 104,
        "tall": 134,
        "grande": 154
    },
    {
        "name": "Vanilla Flat White",
        "type": "flatWhite",
        "description": "Smooth flat white enhanced with sweet vanilla flavor",
        "short": 104,
        "tall": 134,
        "grande": 154
    },
    {
        "name": "Caramel Flat White",
        "type": "flatWhite",
        "description": "Creamy flat white with rich caramel syrup",
        "short": 104,
        "tall": 134,
        "grande": 154
    },
    {
        "name": "Coconut Flat White",
        "type": "flatWhite",
        "description": "Flat white made with coconut milk for tropical twist",
        "short": 109,
        "tall": 139,
        "grande": 159
    },
    {
        "name": "Honey Flat White",
        "type": "flatWhite",
        "description": "Naturally sweetened flat white with honey syrup",
        "short": 99,
        "tall": 129,
        "grande": 149
    }
];

const CoffeeType = {
    cappuccino: "cappuccino",
    latte: "latte",
    americano: "americano",
    expresso: "expresso",
    flatWhite: "flatWhite"
}

const coffeeOrder = [
    CoffeeType.cappuccino,
    CoffeeType.latte,
    CoffeeType.americano,
    CoffeeType.expresso,
    CoffeeType.flatWhite
];

const coffee_cards = document.querySelector(".cards");

const search_button = document.querySelector(".search_button")

// элементы слайдера
const cappuchinno_slider = document.querySelector(".cappuch_slider")
const latte_slider = document.querySelector(".latte_slider")
const americano_slider = document.querySelector(".americ_slider")
const expresso_slider = document.querySelector(".expresso_slider")
const flatWhite_slider = document.querySelector(".flat_slider")

const coffeeSliders = [
    cappuchinno_slider,
    latte_slider,
    americano_slider,
    expresso_slider,
    flatWhite_slider
];

// кнопки слайдера
const up_slider_button = document.querySelector(".up_button");
const down_slider_button = document.querySelector(".down_button")

let currentCoffeeIndex = 0;

function nextCoffeeType() {
    currentCoffeeIndex = (currentCoffeeIndex + 1) % coffeeOrder.length;
    return coffeeOrder[currentCoffeeIndex];
}

function previousCoffeeType() {
    currentCoffeeIndex = (currentCoffeeIndex - 1 + coffeeOrder.length) % coffeeOrder.length;
    return coffeeOrder[currentCoffeeIndex];
}

const select_slider = () => {
    const slider = coffeeSliders[currentCoffeeIndex]
    slider.classList.add("selected")
}

const clear_sliders = () => {
    coffeeSliders.forEach(slider => {
        slider.classList.remove("selected");
    });
}

search_button.addEventListener("click", () => {
    show_all_coffee_cards()
})

up_slider_button.addEventListener("click", () => {
    previousCoffeeType()
    clear_sliders()
    select_slider()
    show_all_coffee_cards()
})

down_slider_button.addEventListener("click", () => {
    nextCoffeeType()
    clear_sliders()
    select_slider()
    show_all_coffee_cards()
})

const name_filter = (coffee) => {
    let searchTerm = document.querySelector(".search_bar").value
    let name = coffee.name
    if (!searchTerm) return true;

    const regex = new RegExp(searchTerm, 'i');
    return regex.test(name);
}

const type_filter = (coffee) => {
    if (coffee.type == coffeeOrder[currentCoffeeIndex]) return true
    return false
}


const get_coffee_item = (coffee, index) => {
    return `
    <div class="card_item">
        <img src="img/test_photo.png" alt="">
        <span class="coffee_name">${coffee.name}</span>
        <div class="coffee_price">
            <span class="price_text">${coffee.short}Р</span>
            <button class="plus_button" onclick="order_page_by_index(${index})"></button>
        </div>
    </div>
    `
}

const show_all_coffee_cards = () => {
    let coffeeHTML = '';
    coffee_list.forEach((item, index) => {
        if (!type_filter(item)) return
        if (!name_filter(item)) return
        const coffee_item = get_coffee_item(item, index)
        coffeeHTML += coffee_item;
    });
    coffee_cards.innerHTML = coffeeHTML;
}

const order_page_by_index = (index) => {
    console.log("Переход на страницу заказа");

    const selectedCoffee = coffee_list[index];

    localStorage.setItem('selectedCoffee', JSON.stringify(selectedCoffee));
    localStorage.setItem('selectedCoffeeIndex', index);

    console.log("Выбран кофе:", selectedCoffee.name);

    window.location.href = "order.html";
}

select_slider()
show_all_coffee_cards()