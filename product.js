
const top_btn = document.querySelector('.product-add-form .top-btn')
const close_form = document.querySelector('.product-add-form .close')
const pro_card = document.querySelector('.product-add-form .card')
const add_form = document.querySelector('.add-form')
const plist = document.querySelector('.product .plist')




top_btn.addEventListener('click', () => {
    pro_card.style.display = 'block';
})
close_form.addEventListener('click', () => {
    pro_card.style.display = 'none';
})

add_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const pro_name = document.querySelector('.product-add-form #product-name').value;
    const pro_price = document.querySelector('.product-add-form #product-price').value;
    const pro_sale = document.querySelector('.product-add-form #sale-price').value;
    const pro_photo = document.querySelector('.product-add-form #product-photo').value;
    
    let pro_arr;
    
    if (dataget('product')) {
        pro_arr = dataget('product');
    } else {
        pro_arr = [];
    }

    pro_arr.push(
        {
            name    : pro_name,
            price   : pro_price,
            sale    : pro_sale,
            photo   : pro_photo
        }
    )

    dataset('product', pro_arr);
    allpro();

})

allpro();
function allpro() {
    let products = dataget('product');
    let pro_da = '';

    products.map(data => {
            pro_da += `
                <div class="col-md-3 my-1">
                    <div class="card shadow">
                        <div class="card-image-top text-center">
                            <img src="${data.photo}" alt="">
                        </div>
                        <div class="card-body">
                            <div class="card-title">
                                <h5>${data.name}</h5>
                            </div>
                            <p class="font-weight-bold"><span>${data.price}</span> - <span>${data.sale}</span></p>
                            <button class="btn btn-success btn-block">Add To Card</button>
                        </div>
                    </div>
                </div>
            `
            })

plist.innerHTML = pro_da;
}