coffee_list = [
    {
    "name": "Latte",
    "short": 99,
    "tall": 139,
    "grande": 159
    },
        {
    "name": "Latte",
    "short": 99,
    "tall": 139,
    "grande": 159
    },
        {
    "name": "Latte",
    "short": 99,
    "tall": 139,
    "grande": 159
    },
        {
    "name": "Latte",
    "short": 99,
    "tall": 139,
    "grande": 159
    }
]

const coffee_cards = document.querySelector(".cards");

const get_coffee_item = (coffee, index) => {
    return `
    <div class="card_item">
        <img src="img/test_photo.png" alt="">
        <span class="coffee_name">Any coffee</span>
        <div class="coffee_price">
            <span class="price_text">${coffee.short}Р</span>
            <button class="plus_button"></button>
        </div>
    </div>
    `
}

const show_all_coffee_cards = () => {
    let coffeeHTML = '';
    coffee_list.forEach((item, index) => {
        const coffee_item = get_coffee_item(item, index)
        coffeeHTML += coffee_item;
    });
    coffee_cards.innerHTML = coffeeHTML;
    console.log("Hi");
}

show_all_coffee_cards()
console.log("Begin");