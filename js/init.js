// 26-09-2021

const body = document.getElementsByTagName('body')[0];

// all goods
const blocks = document.querySelectorAll('.block');

// all buttons goods
const buttons = document.querySelectorAll('.button');
const length = buttons.length;

// view block
const orderDiv = document.querySelector('.CommentFormText textarea');

// clear 
const clear = document.querySelector('#order .clear');

// basket
const checkout = document.getElementById('checkout');

// goods in basket
const checkoutGoods = document.getElementById('checkout-goods');

for(let i = 0; i < length; i++ ){

    buttons[i].addEventListener('click', function() {

        if(localStorage.getItem('order') !== null){
            
            // if localStorage data if exists
            let dataLocalStorage = localStorage.getItem('order');
            dataLocalStorage += buttons[i].dataset.content + '\n';
            localStorage.setItem('order', dataLocalStorage);
        } else {

            // if localStorage data empty
            localStorage.order = buttons[i].dataset.content;
        }

        // lighting current
        const current = this.parentNode;

        for(let k = 0; k < length; k++){

            blocks[k].classList.add('active');
            current.classList.remove('active');
            body.classList.add('active');
        }

        // change button name
        this.innerHTML = 'Замовлено';

        // view checkout
        checkout.className = 'active';

        setTimeout(() => {
            
            // return defautl button name
            this.innerHTML = 'Замовити';

            for(let k = 0; k < length; k++){

                blocks[k].classList.remove('active');
                body.classList.remove('active');
            }
        }, 2500);

        // upgrade view checkout
        checkout && (checkoutGoods.innerHTML = localStorage.getItem('order').replace(/\n/g, "<hr>"));
    });
}

if(localStorage.getItem('order') !== null){

    // view checkout block
    checkout && (checkout.className = 'active');

    checkout && (checkoutGoods.innerHTML = localStorage.getItem('order').replace(/\n/g, "<hr>"));

    // view localStorage data in basket
    let dataLocalStorage = localStorage.order;
    // orderDiv && (orderDiv.innerHTML = dataLocalStorage);
    orderDiv && (orderDiv.value = dataLocalStorage);
}

clear && clear.addEventListener('click', function(){

    localStorage.clear();
    orderDiv.value = '';
});