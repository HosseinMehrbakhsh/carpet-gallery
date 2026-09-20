const miniNav = document.querySelector('.mini_nav');
const productsContainer = document.querySelector('.products_container_row');



// mini nav 
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        miniNav.classList.add('show');
    }
    else {
        miniNav.classList.remove('show');
    }
});

showProducts();

function showProducts() {
    carpets.forEach((product) => {
        product.colors.forEach((color) => {
            let productEl = document.createElement('div');
            productEl.className = "col-12 col-sm-6 col-md-4 col-xl-3";
            
            productEl.innerHTML = `
                <a href="product_detail.html?id=${product.id}&color=${color.colorId}" class="product_card px-1 py-2 p-sm-0 shadow-sm d-flex flex-sm-column align-items-center justify-content-between justify-content-sm-center">
                    <div class="product_head col-4 col-sm-12">
                        <div
                            class="product_img_container d-flex align-items-center justify-content-sm-center">
                            <img class="product_img" src="${color.images[0]}" alt="">
                        </div>
                    </div>

                    <div
                        class="product_body col-8 col-sm-12 px-2 px-sm-0 py-3 py-md-4 py-xl-3 py-xxl-4">
                        <span class="product_body_title d-block text-center fs-5">${product.title}</span>
                        <div
                            class="product_body_detail d-flex justify-content-center gap-4 gap-sm-5 py-2 small">
                            <div class=" text-center">
                                <span>سایز:</span>
                                <span class="ltr">${product.size}</span>
                            </div>
                            <div>
                                <span>رنگ: </span>
                                <span>${color.color}</span>
                            </div>
                        </div>
                        <span
                            class="product_body_price d-block w-100 text-end text-sm-center fs-6 pt-4 pt-sm-2 fw-semibold">
                            ${product.price}
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
            productsContainer.append(productEl);
        });
    });

}