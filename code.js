const coffee_list = [
    // Cappuccino (6 объектов)
    {
        "name": "Classic Cappuccino",
        "type": "cappuccino",
        "short": 89,
        "tall": 119,
        "grande": 139
    },
    {
        "name": "Vanilla Cappuccino",
        "type": "cappuccino",
        "short": 99,
        "tall": 129,
        "grande": 149
    },
    {
        "name": "Caramel Cappuccino",
        "type": "cappuccino",
        "short": 99,
        "tall": 129,
        "grande": 149
    },
    {
        "name": "Hazelnut Cappuccino",
        "type": "cappuccino",
        "short": 99,
        "tall": 129,
        "grande": 149
    },
    {
        "name": "Cinnamon Cappuccino",
        "type": "cappuccino",
        "short": 94,
        "tall": 124,
        "grande": 144
    },
    {
        "name": "Double Shot Cappuccino",
        "type": "cappuccino",
        "short": 109,
        "tall": 139,
        "grande": 159
    },

    // Latte (6 объектов)
    {
        "name": "Classic Latte",
        "type": "latte",
        "short": 99,
        "tall": 139,
        "grande": 159
    },
    {
        "name": "Vanilla Latte",
        "type": "latte",
        "short": 109,
        "tall": 149,
        "grande": 169
    },
    {
        "name": "Caramel Latte",
        "type": "latte",
        "short": 109,
        "tall": 149,
        "grande": 169
    },
    {
        "name": "Matcha Latte",
        "type": "latte",
        "short": 119,
        "tall": 159,
        "grande": 179
    },
    {
        "name": "Hazelnut Latte",
        "type": "latte",
        "short": 109,
        "tall": 149,
        "grande": 169
    },
    {
        "name": "Coconut Latte",
        "type": "latte",
        "short": 114,
        "tall": 154,
        "grande": 174
    },

    // Americano (6 объектов)
    {
        "name": "Classic Americano",
        "type": "americano",
        "short": 79,
        "tall": 99,
        "grande": 119
    },
    {
        "name": "Iced Americano",
        "type": "americano",
        "short": 79,
        "tall": 99,
        "grande": 119
    },
    {
        "name": "Long Black Americano",
        "type": "americano",
        "short": 84,
        "tall": 104,
        "grande": 124
    },
    {
        "name": "Americano Misto",
        "type": "americano",
        "short": 89,
        "tall": 109,
        "grande": 129
    },
    {
        "name": "Double Americano",
        "type": "americano",
        "short": 94,
        "tall": 114,
        "grande": 134
    },
    {
        "name": "Americano with Cream",
        "type": "americano",
        "short": 89,
        "tall": 109,
        "grande": 129
    },

    // Espresso (исправлен typo "expresso" на "espresso" согласно CoffeeType)
    {
        "name": "Single Espresso",
        "type": "expresso",
        "short": 69,
        "tall": 89,
        "grande": 109
    },
    {
        "name": "Double Espresso",
        "type": "expresso",
        "short": 89,
        "tall": 109,
        "grande": 129
    },
    {
        "name": "Ristretto",
        "type": "expresso",
        "short": 74,
        "tall": 94,
        "grande": 114
    },
    {
        "name": "Lungo",
        "type": "expresso",
        "short": 74,
        "tall": 94,
        "grande": 114
    },
    {
        "name": "Espresso Macchiato",
        "type": "expresso",
        "short": 79,
        "tall": 99,
        "grande": 119
    },
    {
        "name": "Espresso Con Panna",
        "type": "expresso",
        "short": 84,
        "tall": 104,
        "grande": 124
    },

    // Flat White (6 объектов)
    {
        "name": "Classic Flat White",
        "type": "flatWhite",
        "short": 94,
        "tall": 124,
        "grande": 144
    },
    {
        "name": "Double Ristretto Flat White",
        "type": "flatWhite",
        "short": 104,
        "tall": 134,
        "grande": 154
    },
    {
        "name": "Vanilla Flat White",
        "type": "flatWhite",
        "short": 104,
        "tall": 134,
        "grande": 154
    },
    {
        "name": "Caramel Flat White",
        "type": "flatWhite",
        "short": 104,
        "tall": 134,
        "grande": 154
    },
    {
        "name": "Coconut Flat White",
        "type": "flatWhite",
        "short": 109,
        "tall": 139,
        "grande": 159
    },
    {
        "name": "Honey Flat White",
        "type": "flatWhite",
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
            <button class="plus_button" onclick="order_page(${coffee}, ${index})"></button>
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

const order_page = (coffee, index) => {
    console.log("order_page");
 }

select_slider()
show_all_coffee_cards()