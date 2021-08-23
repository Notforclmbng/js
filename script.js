const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (item) => {
    return `
    <div class="goods__item">
        <img class="goods__image" src="img/productImage.jpg" alt="product image">
        <div class="goods__cardContent">
            <h3 class="goods__name">${item.title}</h3>
            <p class="goods__price">${item.price}</p>
            <button class="button goods__btn">Купить</button>
        </div>
    </div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item)).join('');
    document.querySelector('.goods__list').innerHTML = goodsList;
}

renderGoodsList(goods);