const displayLocalstorageCart = () => {
    const cart = getCart();
    for(const name in cart ){
        displayItem(name);
        
    }

}

const addItem = () => {
    const itemField = document.getElementById('item');
    const itemValue = itemField.value;
    const div = document.getElementById('error');
    // console.log(itemValue);
    if(!itemValue){
        div.innerText = 'plz give any item name';   
        return;
        
    }
   
    // display item on UI 
    displayItem(itemValue);

    // adding cart at localstorage 
    addProductToCart(itemValue);

    itemField.value = '';
    div.innerText = '';
}

const displayItem = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}
const addProductToCart = name => {
    const cart = getCart();
    if(cart[name]){
        cart[name] = cart[name] + 1;
    }
    else{
        cart[name] = 1;
    }
    
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}
const placeOrder = () =>{
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}
displayLocalstorageCart();