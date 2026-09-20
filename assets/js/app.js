const miniNav = document.querySelector('.mini_nav');
const specialProductsRow = document.querySelector('.special_products_row');

// mini nav 
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        miniNav.classList.add('show');
    }
    else {
        miniNav.classList.remove('show');
    }
});

let specialCarpet = [carpets[0], carpets[1], carpets[3], carpets[4]];

showSpecialProducts();

function showSpecialProducts() {

    specialCarpet.forEach((carpet) => {
        const specialProduct = document.createElement('div');
        specialProduct.className = "col-6 col-xl-3";
        specialProduct.innerHTML = `
            <a href="product_detail.html"
                class="product_card shadow-sm d-flex flex-column align-items-center justify-content-center">
                <div class="product_head w-100">
                    <div
                        class="product_img_container d-flex align-items-center justify-content-center">
                        <img class="product_img" src="${carpet.colors[0].images[0]}" alt="">
                    </div>
                </div>

                <div class="product_body px-2 px-sm-0 py-3 py-md-4 py-xl-3 py-xxl-4">
                    <span class="product_body_title d-block text-center fs-5">${carpet.title}</span>
                    <div
                        class="product_body_detail d-flex justify-content-between justify-content-sm-center gap-sm-5 py-2 small">
                        <div class=" text-center">
                            <span>سایز:</span>
                            <span class="ltr">${carpet.size}</span>
                        </div>
                        <div>
                            <span>رنگ: </span>
                            <span>${carpet.colors[0].color}</span>
                        </div>
                    </div>
                    <span
                        class="product_body_price d-block w-100 text-center fs-6 pt-2 text-danger fw-semibold">
                        ${carpet.price}
                        تومان
                    </span>
                </div>

                <!-- wishlist icon -->
                <button class="wishlist_icon_container border-0">
                    <i
                        class="bi bi-suit-heart-fill text-danger fs-3 wishlist_icon_selected d-none"></i>
                    <i class="bi bi-suit-heart text-dark fs-3 wishlist_icon"></i>
                </button>

            </a>
        `;
        specialProductsRow.append(specialProduct);
    });
}
