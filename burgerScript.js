//приготовление бургера состоит из 3 опций -размер, начинка, добавки. Определяем их 
class Burger {
    constructor(size, filling, additions) {
        this.size = size;
        this.filling = filling;
        this.additions = [...additions];
        // this.sum();
    }

    calcSum() {
        let sum = 0;
        sum += this.size.price;
        sum += this.filling.price;

        for (let add of this.additions)
            sum += add.price;
        // alert(`Общая сумма всех товаров составляет ${sum} `);
        return sum;
    }

    caloriesSum() {
        let sumCalories = 0;
        sumCalories += this.size.cal;
        sumCalories += this.filling.cal;

        for (let add of this.additions)
            sumCalories += add.cal;
        //alert(`Общая сумма калорий составляет ${sumCalories} `);
        return sumCalories;
    }


}
// отпределяем все компонеты
class Burger_component {
    constructor(type, name, price, cal) {
        this.type = type;
        this.name = name;
        this.price = price;
        this.cal = cal;
        this.render();
    }

    render(name, selected) {
        return `
        <div class="form-check">
        <label class="form-check-label">
            <input class="form-check-input" onchange="mainCalc()" type="${this.type == "additions" ? "checkbox" : "radio"}" value="" name="${name}" ${selected ? 'checked' : ''}>
            ${this.name} (${this.price} рублей и +${this.cal} калорий)
        </label>
    </div>
`
    }
}

let sizes = [new Burger_component("size", "Маленький", 50, 20), new Burger_component("size", "Большой", 100, 40)];
let fillings = [new Burger_component("fillings", "С сыром", 10, 20), new Burger_component("fillings", "С салатом", 20, 5),
new Burger_component("fillings", "С картофелем", 15, 10)];
let additions = [new Burger_component("additions", "Посыпать приправой", 15, 0),
new Burger_component("additions", "Полить майонезом", 20, 5)];

// создаем настройки для ходового вариант бургера 
let default_size = 1;
let default_filling = 0;
let default_additions = [...additions];

//let burger = new Burger(sizes[default_size], fillings[default_filling], default_additions);
// burger.calcSum();
// burger.caloriesSum();


function showItems() {
    let block = document.querySelector(".size");
    for (let item of sizes) {
        block.insertAdjacentHTML("beforeend", item.render("SizeBox", item == sizes[default_size] ? true : false));

    }
    block = document.querySelector(".fillings");
    for (let item of fillings) {
        block.insertAdjacentHTML("beforeend", item.render("FillBox", item == fillings[default_filling] ? true : false));

    }

    block = document.querySelector(".addition");
    for (let item of additions) {
        block.insertAdjacentHTML("beforeend", item.render("AddBox", default_additions.includes(item) ? true : false));

    }

}

showItems();



function mainCalc() {
    // Собрать со страницы все что ввел пользователь
    let inputs = document.getElementsByName("SizeBox");
    let selectedSize;
    for (let i = 0; i < inputs.length; i++)
        if (inputs[i].checked)
            selectedSize = sizes[i];
    let inputs2 = document.getElementsByName("FillBox");
    let selectedfill;
    for (let i = 0; i < inputs2.length; i++)
        if (inputs2[i].checked)
            selectedfill = fillings[i];

    let inputs3 = document.getElementsByName("AddBox");
    let selectedAdd = [];
    for (let i = 0; i < inputs3.length; i++)
        if (inputs3[i].checked)
            selectedAdd.push(additions[i]);

    //console.log(selectedSize);
    // console.log(selectedfill);
    // console.log(selectedAdd);



    // присвоить эти значения нашему бургеру или создать новый (пока не решила)

    let burger = new Burger(selectedSize, selectedfill, selectedAdd);



    // запустить у бургера функции методы подсчета стоимости и калорий 

    let sum = burger.calcSum();
    let sumcal = burger.caloriesSum();
    // вывести все цифры в верстку

    document.querySelector(".sumRub").value = sum + " руб.";
    document.querySelector(".sumСalorie").value = sumcal + " кал.";


}

mainCalc();