// 26-09-2021

const buttons = document.querySelectorAll('.button');
const length = buttons.length;

const orderDiv = document.getElementById('order');

const checkout = document.getElementById('checkout');

for(let i = 0; i < length; i++ ){

    buttons[i].addEventListener('click', function() {

        // change button name
        this.innerHTML = 'Замовлено';

        // view checkout
        checkout.className = 'active';

        // return defautl button name
        setTimeout(() => {

            this.innerHTML = 'Замовити';
        }, 1000);

        if(localStorage.getItem('order') !== null){
            
            // if localStorage data if exists
            let dataLocalStorage = localStorage.getItem('order');
            dataLocalStorage += buttons[i].dataset.content + '/n';
            localStorage.setItem('order', dataLocalStorage);
        } else {

            // if localStorage data empty
            localStorage.order = buttons[i].dataset.content;
        }

        // lighting current
        const current = this;

        for(let k = 0; k < length; k++){

            buttons[k].classList.add('active');
            current.classList.remove('active');
        }

    });
}

if(localStorage.getItem('order') !== null){

    // view checkout block
    checkout.className = 'active';

    // view localStorage data in basket
    let dataLocalStorage = localStorage.order;
    orderDiv && (orderDiv.innerHTML = dataLocalStorage);
}

