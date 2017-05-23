export function Storage_setUserId(id) {
    sessionStorage.setItem('userId', id);
}

export function Storage_getUserId() {
    return sessionStorage.getItem('userId');
}

export function Storage_getCart() {
    if (localStorage.getItem('shoppingCart') === null) Storage_setCart([]);
    return JSON.parse(localStorage.getItem('shoppingCart'));
}

export function Storage_setCart(cart) {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

export function Storage_addToCart(ball) {
    let array = Storage_getCart();
    let item = {count: 1, content: ball};
    let added = false;

    for(let i = 0; i < array.length; i++) {
        let o = array[i].content;
        if(o.type === ball.type && o.id === ball.id){
            if(array[i].count<ball.amount) array[i].count += 1;
            added = true;
        }
    }

    if (added === false)
        array.push(item);

    Storage_setCart(array)
}

export function Storage_removeFromCart(ball, removeAll) {
    let array = Storage_getCart();
    let removed = false;

    for(let i = 0; i < array.length && !removed; i++) {
        let o = array[i].content;

        if(o.type === ball.type && o.id === ball.id) {
            array[i].count -= 1;
            if(array[i].count <= 0 || removeAll) array.splice(i, 1);
            removed = true;
        }
    }
    Storage_setCart(array);
}