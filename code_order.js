let selectedCoffee = null;
let selectedCoffeeIndex = null;

const short_button = document.querySelector(".short_button");
const tall_button = document.querySelector(".tall_button");
const grande_button = document.querySelector(".grande_button");

const size_buttons = [short_button, tall_button, grande_button];

const sizeType = {
    short: "short",
    tall: "tall",
    grande: "grande"
}

const none_button = document.querySelector(".none_button")
const sugar_button = document.querySelector(".sugar_button")
const milk_button = document.querySelector(".milk_button")

const extra_buttons = [none_button, sugar_button, milk_button];

const extraType = {
    none: "none",
    sugar: "sugar",
    milk: "milk"
}

const oat_button = document.querySelector(".oat_button")
const soy_button = document.querySelector(".soy_button")
const almond_button = document.querySelector(".almond_button")

const milk_buttons = [oat_button, soy_button, almond_button]

const milkType = {
    oat: "oat",
    soy: "soy",
    almond: "almond"
}

const coffeeNameElement = document.querySelector(".c_name");
const coffeeDescElement = document.querySelector(".c_desc");
const priceElement = document.querySelector(".price span");
const coffeeImage = document.querySelector(".bottom_order img");

let current_size = sizeType.short;
let current_extra = extraType.none;
let current_milk = milkType.oat;

let quantity = 1;

const modifierPrices = {
    extra: {
        none: 0,
        sugar: 20,
        milk: 30
    },
    milk: {
        oat: 0,
        soy: 35,
        almond: 45
    }
}

function loadSelectedCoffee() {
    const coffeeData = localStorage.getItem('selectedCoffee');
    const indexData = localStorage.getItem('selectedCoffeeIndex');

    if (coffeeData) {
        selectedCoffee = JSON.parse(coffeeData);
        selectedCoffeeIndex = indexData ? parseInt(indexData) : 0;


        updateCoffeeUI();
    } else {
        selectedCoffee = {
            name: "Classic Cappuccino",
            description: "A perfect balance of espresso, steamed milk and a thick layer of milk foam",
            short: 89,
            tall: 119,
            grande: 139,
            type: "cappuccino"
        };
        updateCoffeeUI();
    }
}

function updateCoffeeUI() {
    if (selectedCoffee) {
        coffeeNameElement.textContent = selectedCoffee.name;
        coffeeDescElement.textContent = selectedCoffee.description;
        updatePrice();
    } else {
        console.error("selectedCoffee не определен");
    }
}

function updatePrice() {
    if (!selectedCoffee) {
        console.error("Не удалось обновить цену: selectedCoffee не определен");
        priceElement.textContent = "Р0";
        return;
    }

    let price = 0;
    switch (current_size) {
        case sizeType.short:
            price = selectedCoffee.short || 0;
            break;
        case sizeType.tall:
            price = selectedCoffee.tall || 0;
            break;
        case sizeType.grande:
            price = selectedCoffee.grande || 0;
            break;
    }

    if (current_extra !== extraType.none) {
        price += modifierPrices.extra[current_extra] || 0;
    }

    price += modifierPrices.milk[current_milk] || 0;

    price = price * quantity;

    priceElement.textContent = `Р${price}`;

}

function switchSizeButton(selectedSize) {
    size_buttons.forEach(button => {
        button.classList.remove('selected_coffee_button');
    });

    let selectedButton = null;
    switch (selectedSize) {
        case sizeType.short:
            selectedButton = short_button;
            break;
        case sizeType.tall:
            selectedButton = tall_button;
            break;
        case sizeType.grande:
            selectedButton = grande_button;
            break;
    }

    if (selectedButton) {
        selectedButton.classList.add('selected_coffee_button');
    }

    current_size = selectedSize;
    updatePrice();
}

short_button.addEventListener('click', () => {
    switchSizeButton(sizeType.short);
});

tall_button.addEventListener('click', () => {
    switchSizeButton(sizeType.tall);
});

grande_button.addEventListener('click', () => {
    switchSizeButton(sizeType.grande);
});

function switchExtraButton(selectedExtra) {
    extra_buttons.forEach(button => {
        button.classList.remove('selected_coffee_button');
    });

    let selectedButton = null;
    switch (selectedExtra) {
        case extraType.none:
            selectedButton = none_button;
            break;
        case extraType.sugar:
            selectedButton = sugar_button;
            break;
        case extraType.milk:
            selectedButton = milk_button;
            break;
    }

    if (selectedButton) {
        selectedButton.classList.add('selected_coffee_button');
    }

    current_extra = selectedExtra;
    updatePrice();
}

none_button.addEventListener('click', () => {
    switchExtraButton(extraType.none);
});

sugar_button.addEventListener('click', () => {
    switchExtraButton(extraType.sugar);
});

milk_button.addEventListener('click', () => {
    switchExtraButton(extraType.milk);
});

function switchMilkButton(selectedMilk) {
    milk_buttons.forEach(button => {
        button.classList.remove('selected_coffee_button');
    });

    let selectedButton = null;
    switch (selectedMilk) {
        case milkType.oat:
            selectedButton = oat_button;
            break;
        case milkType.soy:
            selectedButton = soy_button;
            break;
        case milkType.almond:
            selectedButton = almond_button;
            break;
    }

    if (selectedButton) {
        selectedButton.classList.add('selected_coffee_button');
    }

    current_milk = selectedMilk;
    updatePrice();
}

oat_button.addEventListener('click', () => {
    switchMilkButton(milkType.oat);
});

soy_button.addEventListener('click', () => {
    switchMilkButton(milkType.soy);
});

almond_button.addEventListener('click', () => {
    switchMilkButton(milkType.almond);
});

const decrementButton = document.querySelector(".amount button:first-child");
const incrementButton = document.querySelector(".amount button:last-child");
const quantitySpan = document.querySelector(".amount span");

function updateQuantityDisplay() {
    quantitySpan.textContent = quantity;
}

function decrementQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
        updatePrice();
    }
}

function incrementQuantity() {
    quantity++;
    updateQuantityDisplay();
    updatePrice();
}

decrementButton.addEventListener('click', decrementQuantity);
incrementButton.addEventListener('click', incrementQuantity);

const backDiv = document.querySelector(".back_div");

function goToIndexPage() {
    window.location.href = "index.html";
}

backDiv.addEventListener('click', goToIndexPage);

function getTotalPrice() {
    let price = 0;

    switch (current_size) {
        case sizeType.short:
            price = selectedCoffee.short || 0;
            break;
        case sizeType.tall:
            price = selectedCoffee.tall || 0;
            break;
        case sizeType.grande:
            price = selectedCoffee.grande || 0;
            break;
    }

    price += modifierPrices.extra[current_extra] || 0;
    price += modifierPrices.milk[current_milk] || 0;

    return price * quantity;
}

function getOrderDetails() {
    return {
        coffee: selectedCoffee.name,
        size: current_size,
        extra: current_extra,
        milk: current_milk,
        quantity: quantity,
        pricePerItem: getTotalPrice() / quantity,
        totalPrice: getTotalPrice(),
        basePrice: selectedCoffee[current_size] || 0,
        extraPrice: modifierPrices.extra[current_extra] || 0,
        milkPrice: modifierPrices.milk[current_milk] || 0
    };
}

document.addEventListener('DOMContentLoaded', function () {
    switchSizeButton(current_size);
    switchExtraButton(current_extra);
    switchMilkButton(current_milk);

    loadSelectedCoffee();

    updateQuantityDisplay();
});


const placeOrderButton = document.querySelector(".place_order");
const numberOrdersElement = document.querySelector(".number_orders");

function initializeOrderCounter() {
    let orders = getOrdersFromStorage();
    updateOrderCounter(orders.length);
}

function getOrdersFromStorage() {
    const ordersJSON = localStorage.getItem('coffeeOrders');
    return ordersJSON ? JSON.parse(ordersJSON) : [];
}

function saveOrdersToStorage(orders) {
    localStorage.setItem('coffeeOrders', JSON.stringify(orders));
}

function updateOrderCounter(count) {
    numberOrdersElement.textContent = count;
}

function addNewOrder() {
    const orderDetails = getOrderDetails();

    const newOrder = {
        id: Date.now(),
        ...orderDetails,
        date: new Date().toISOString(),
        status: "pending"
    };

    let orders = getOrdersFromStorage();

    orders.push(newOrder);

    saveOrdersToStorage(orders);

    updateOrderCounter(orders.length);

    showOrderConfirmation(newOrder);

    resetSelection();
}

function showOrderConfirmation(order) {
    alert(`Заказ успешно добавлен!\n\n${order.quantity}x ${order.coffee} (${order.size})\nСумма: Р${order.totalPrice}\n\nНомер заказа: #${order.id}`);
}

function resetSelection() {
    quantity = 1;
    updateQuantityDisplay();
    switchSizeButton(sizeType.short);
    switchExtraButton(extraType.none);
    switchMilkButton(milkType.oat);
    updatePrice();
}

placeOrderButton.addEventListener('click', addNewOrder);

document.addEventListener('DOMContentLoaded', function () {

    initializeOrderCounter();
});

const ordersModal = document.getElementById('ordersModal');
const ordersList = document.getElementById('ordersList');
const totalPriceElement = document.getElementById('totalPrice');
const closeModalButton = document.querySelector('.close-modal');
const checkoutButton = document.querySelector('.checkout-btn');

let isModalOpen = false;

function toggleOrdersModal() {
    isModalOpen = !isModalOpen;

    if (isModalOpen) {
        ordersModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        loadOrdersToModal();
    } else {
        ordersModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function loadOrdersToModal() {
    const orders = getOrdersFromStorage();
    ordersList.innerHTML = '';

    if (orders.length === 0) {
        ordersList.innerHTML = `
            <div class="empty-orders">
                <p>Your cart is empty</p>
                <p>Add some coffee to get started!</p>
            </div>
        `;
        checkoutButton.disabled = true;
        updateTotalPrice(0);
        return;
    }

    checkoutButton.disabled = false;

    let totalPrice = 0;

    orders.forEach(order => {
        totalPrice += order.totalPrice;

        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.dataset.id = order.id;

        orderItem.innerHTML = `
            <div class="order-item-header">
                <span class="order-item-name">${order.coffee}</span>
                <button class="order-item-remove" onclick="removeOrder(${order.id})">
                    Remove
                </button>
            </div>
            <div class="order-item-details">
                <div>Size: ${order.size}</div>
                <div>Extra: ${order.extra}</div>
                <div>Milk: ${order.milk}</div>
            </div>
            <div class="order-item-quantity">
                <button onclick="decreaseOrderQuantity(${order.id})">-</button>
                <span>${order.quantity}</span>
                <button onclick="increaseOrderQuantity(${order.id})">+</button>
            </div>
            <div class="order-item-price">
                Р${order.totalPrice}
            </div>
        `;

        ordersList.appendChild(orderItem);
    });

    updateTotalPrice(totalPrice);
}

function updateTotalPrice(total) {
    totalPriceElement.textContent = `Р${total}`;
}

function removeOrder(orderId) {
    let orders = getOrdersFromStorage();
    orders = orders.filter(order => order.id !== orderId);

    saveOrdersToStorage(orders);
    updateOrderCounter(orders.length);
    loadOrdersToModal();

    if (orders.length === 0 && isModalOpen) {
        setTimeout(() => {
            if (getOrdersFromStorage().length === 0) {
                ordersModal.classList.remove('active');
                document.body.style.overflow = '';
                isModalOpen = false;
            }
        }, 100);
    }
}


function increaseOrderQuantity(orderId) {
    let orders = getOrdersFromStorage();
    const orderIndex = orders.findIndex(order => order.id === orderId);

    if (orderIndex !== -1) {
        orders[orderIndex].quantity++;
        const pricePerItem = orders[orderIndex].basePrice +
            orders[orderIndex].extraPrice +
            orders[orderIndex].milkPrice;
        orders[orderIndex].totalPrice = pricePerItem * orders[orderIndex].quantity;

        saveOrdersToStorage(orders);
        loadOrdersToModal();
    }
}

function decreaseOrderQuantity(orderId) {
    let orders = getOrdersFromStorage();
    const orderIndex = orders.findIndex(order => order.id === orderId);

    if (orderIndex !== -1) {
        if (orders[orderIndex].quantity > 1) {
            orders[orderIndex].quantity--;
            const pricePerItem = orders[orderIndex].basePrice +
                orders[orderIndex].extraPrice +
                orders[orderIndex].milkPrice;
            orders[orderIndex].totalPrice = pricePerItem * orders[orderIndex].quantity;

            saveOrdersToStorage(orders);
            loadOrdersToModal();
        } else {
            if (confirm('Remove this item from cart?')) {
                removeOrder(orderId);
            }
        }
    }
}

function checkout() {
    const orders = getOrdersFromStorage();

    if (orders.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const totalPrice = orders.reduce((sum, order) => sum + order.totalPrice, 0);

    alert(`Checkout successful!\nTotal: Р${totalPrice}\nThank you for your order!`);

    toggleOrdersModal();
}


numberOrdersElement.parentElement.addEventListener('click', toggleOrdersModal);

closeModalButton.addEventListener('click', toggleOrdersModal);

ordersModal.querySelector('.modal-overlay').addEventListener('click', toggleOrdersModal);

checkoutButton.addEventListener('click', checkout);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isModalOpen) {
        toggleOrdersModal();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    switchSizeButton(current_size);
    switchExtraButton(current_extra);
    switchMilkButton(current_milk);

    loadSelectedCoffee();
    updateQuantityDisplay();
    initializeOrderCounter();
});