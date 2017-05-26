/**
 * Stores information to session storage
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */

/**
 * Sets logged users user id to storage
 *
 * @param id id of the user logged in
 * @constructor
 */
export function Storage_setUserId(id) {
    sessionStorage.setItem('userId', id);
}
/**
 * Gets logged users id from storage
 *
 * @constructor
 */
export function Storage_getUserId() {
    return sessionStorage.getItem('userId');
}

/**
 * Gets logged users username from storage
 *
 * @constructor
 */
export function Storage_getUserName() {
    return sessionStorage.getItem('userName');
}

/**
 * Sets logged users username to storage
 *
 * @param userName
 * @constructor
 */
export function Storage_setUserName(userName) {
    sessionStorage.setItem('userName', userName);
}

/**
 * Gets shopping cart from storage
 *
 * @constructor
 */
export function Storage_getCart() {
    if (sessionStorage.getItem('shoppingCart') === null) Storage_setCart([]);
    return JSON.parse(sessionStorage.getItem('shoppingCart'));
}

/**
 * Updates shopping cart in storage
 *
 * @param cart new cart content
 * @constructor
 */
export function Storage_setCart(cart) {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
}

/**
 * Adds items to cart.
 *
 * If same item is already in cart, updates its quantity
 *
 * @param ball item to be added
 * @constructor
 */
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

/**
 * Removes or reduces quantity of item in cart
 *
 * @param ball item to be reduced or removed
 * @param removeAll true if all of that ball is  to be removed from cart
 * @constructor
 */
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