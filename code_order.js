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

let current_size = sizeType.short;
let current_extra = extraType.none;
let current_milk = milkType.oat;

function switchSizeButton(selectedSize) {
    size_buttons.forEach(button => {
        button.classList.remove('selected_coffee_button');
    });

    let selectedButton = null;
    switch(selectedSize) {
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

switchSizeButton(current_size);

function switchExtraButton(selectedExtra) {
    extra_buttons.forEach(button => {
        button.classList.remove('selected_coffee_button');
    });

    let selectedButton = null;
    switch(selectedExtra) {
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

switchExtraButton(current_extra);

function switchMilkButton(selectedMilk) {
    milk_buttons.forEach(button => {
        button.classList.remove('selected_coffee_button');
    });

    let selectedButton = null;
    switch(selectedMilk) {
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

switchMilkButton(current_milk);