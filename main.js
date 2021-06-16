class ProductsList {
    constructor(container = ".products") {
        this.container = container;
        this.arrGoods = [];
        this.fetchItems();
        this.showItems(); // вывод товара на страницу
        setTimeout(() => this.itemSum(), 100); // добавила setTimeout без него почему-то пропадают карточки при вызове alert, хотя он стоит после отображения катрочек.

    }

    fetchItems() {
        this.arrGoods = [
            { id: 1, title: 'Laptop', price: 2000, img: "img/notebook.jpg" },
            { id: 2, title: 'Mouse', price: 20, img: "img/mouse.jpg" },
            { id: 3, title: 'Keyboard', price: 200, img: "img/keyboard.jpg" },
            { id: 4, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
            { id: 5, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
            { id: 6, title: 'Gamepad', price: 50, img: "img/gamepad.jpg", isHit: true },
            { id: 7, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" }
        ];
    }

    showItems() {
        let block = document.querySelector(this.container);
        for (let itemCard of this.arrGoods) {
            const item = new ProductItem(itemCard);
            block.insertAdjacentHTML("beforeend", item.render());

        }
    }

    itemSum() {
        let sum = 0;
        for (let itemCard of this.arrGoods)
            sum += itemCard.price;
        alert(`Общая сумма всех товаров составляет ${sum} `);

    }

}

class ProductItem {
    constructor(itemCard) {
        this.title = itemCard.title;
        this.id = itemCard.id;
        this.price = itemCard.price;
        this.img = itemCard.img;
        this.isHit = itemCard.isHit
    }

    render() {

        return `<div class="product-item">
                <img class="img-item" src="${this.img}" alt="item">
                ${this.isHit ? '<p class="mark-item">ХИТ ПРОДАЖ</p>' : ''}
                <h3 class="name-item">${this.title}</h3>
                <div class="item-text">
                <p class="cost-item">${this.price} ₽</p>
                <button class="buy-btn">Купить</button>
                </div>
            </div > `


    }
}

let list = new ProductsList();
list.render();
list.itemSum();


class backet {
    constructor(container = ".btn-cart") {

    }
    addToBacket(item) { } //добавляем продукцию в корзину
    show() { }//отобразить карзину 
    changeQwty() { } //меняем количество продукции
    removeItem() { } //убираем товар из корзины
    sumQwty() { } //подсчет суммы товара и кол-ва


}

class BusketElement {
    show() { }

}


/*

const products = [
    { id: 1, title: 'Laptop', price: 2000, img: "img/notebook.jpg" },
    { id: 2, title: 'Mouse', price: 20, img: "img/mouse.jpg" },
    { id: 3, title: 'Keyboard', price: 200, img: "img/keyboard.jpg" },
    { id: 4, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
    { id: 5, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
    { id: 6, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
    { id: 7, title: 'Gamepad', price: 50, img: "img/gamepad.jpg", isHit: true }
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (card) =>
    `<div class="product-item">
                <img class="img-item" src="${card.img}" alt="item">
                ${card.isHit ? '<p class="mark-item">ХИТ ПРОДАЖ</p>' : ''}
                <h3 class="name-item">${card.title}</h3>
                <div class="item-text">
                <p class="cost-item">${card.price} ₽</p>
                <button class="buy-btn">Купить</button>
                </div>
            </div > `
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join(" ");
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);

*/



