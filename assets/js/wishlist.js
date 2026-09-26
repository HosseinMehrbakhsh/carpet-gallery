const miniNav = document.querySelector('.mini_nav');
const sidebarContainer = document.querySelector('.side_bar_container');
const productsContainer = document.querySelector('.products_container_row');


// get product from localStorage 
let wishProductsIds = [];
wishProductsIds = JSON.parse(localStorage.getItem('wishProduct'))


// mini nav 
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        miniNav.classList.add('show');
    }
    else {
        miniNav.classList.remove('show');
    }
});


// side bar 
function showSidebar() {
    sidebarContainer.innerHTML = `
        <div class="row h-100">
            <div class="side_bar col-10 col-sm-7 col-md-6 d-flex flex-column align-items-start position-relative ps-4">

                <!-- brand & logo -->
                <div class="py-2">
                    <div
                        class=" d-flex align-items-center justify-content-start justify-content-sm-center justify-content-xl-start">
                        <!-- logo -->
                        <div class="logo">
                            <img src="assets/imgs/logo.webp" width="60px" alt="">
                        </div>

                        <!-- band name -->
                        <div class="brand_name ps-1 ps-sm-2 d-flex flex-column align-items-center">
                            <h1 class="mb-sm-1">مهربخش</h1>
                            <span class="small fw-semibold">فرش دستباف ابریشم قم</span>
                        </div>
                    </div>
                </div>

                <!-- search box -->
                <div class=" py-3">
                    <form class="search_box_side input-group d-flex justify-content-center" onsubmit="getSearchValue(event)">
                        <input type="search" class="search_input_side" placeholder="جستجو..">
                        <button type="submit" class="btn btn-light search_btn_side">
                            <i class="bi bi-search text_gold"></i>
                        </button>
                    </form>
                </div>


                <!-- nav links -->
                <div class="">
                    <ul class="list-unstyled nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link text-color-brown fs-5" href="index.html">صفحه اصلی</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text_gold fs-5" href="products.html">فرش ها</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-color-brown fs-5" href="#about_us" onclick="closeSidebar()">درباره ما</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-color-brown fs-5" href="#contact_us" onclick="closeSidebar()">تماس با ما</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-color-brown fs-5" href="#" onclick="closeSidebar()">علاقه مندی ها</a>
                        </li>
                    </ul>
                </div>

                <button class="btn btn-close position-absolute top-0 end-0 m-3 p-3" onclick="closeSidebar()"></button>
            </div>
        </div>
    `;
    sidebarContainer.classList.add('show');
    setTimeout(() => {
        sidebarContainer.setAttribute('style', 'backdrop-filter: brightness(0.5) blur(2px);');
    }, 200)
}

function closeSidebar() {
    sidebarContainer.classList.remove('show');
    sidebarContainer.removeAttribute('style');
    sidebarContainer.innerHTML = '';
}

filterWishCarpet();
// filter wishlist products 
function filterWishCarpet() {
    if (wishProductsIds.length > 0) {
        let wishCarpets = carpets.filter(product => {
            let flag = false;
            wishProductsIds.forEach(wish => {
                if (product.id == wish.wishId) {
                    flag = true;
                }
            });
            return flag;
        });
        showProducts(wishCarpets);
    }
    else {
        showProducts();
    }
}


function showProducts(wishCarpets) {
    
    productsContainer.innerHTML = '';
    if (wishCarpets) {
        wishCarpets.forEach(product => {

            let selectedColors = product.colors.filter((color) => {
                let flag = false;
                wishProductsIds.forEach(wish => {
                    if ((wish.wishColorId == color.colorId)&&(wish.wishId==product.id)) {
                        flag = true;
                    }
                });
                return flag;
            });
            
            selectedColors.forEach(color => {
                let productEl = document.createElement('div');
                productEl.className = "col-12 col-sm-6 col-lg-4 col-xl-3 position-relative";

                productEl.innerHTML = `
                    <a href="product_detail.html?id=${product.id}&color=${color.colorId}"
                        class="product_card px-1 py-2 p-sm-0 shadow-sm d-flex flex-sm-column align-items-center justify-content-between justify-content-sm-center">
                        <div class="product_head col-4 col-sm-12">
                            <div class="product_img_container d-flex align-items-center justify-content-sm-center">
                                <img class="product_img" src="${color.images[0]}" alt="">
                            </div>
                        </div>

                        <div class="product_body col-8 col-sm-12 px-2 px-sm-0 py-3 py-md-4 py-xl-3 py-xxl-4">
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
                                ${product.price.toLocaleString()}
                                تومان
                            </span>
                        </div>
                    </a>
                    <!-- wishlist icon -->
                    <button class="wishlist_icon_container border-0" onclick="removeProduct(${product.id},${color.colorId})">
                        <i class="bi bi-trash text-color-brown fs-3 wishlist_icon icon_tooltip" data-tooltip="حذف علاقه‌مندی"></i>
                    </button>
                `;
                productsContainer.append(productEl);
            });
        });
    }
    else {
        let notFoundEl = document.createElement('div');
        notFoundEl.className = "col-12 mx-auto";
        notFoundEl.innerHTML = `
            <div class="not_found d-flex align-items-center justify-content-center">
                <span>محصولی یافت نشد!!</span>
            </div>
        `;
        productsContainer.append(notFoundEl);
    }
}

function removeProduct(id, color) {
    wishProductsIds = wishProductsIds.filter(wish => {
        return !(wish.wishId == id && wish.wishColorId == color);
    });

    localStorage.setItem('wishProduct', JSON.stringify(wishProductsIds));
    filterWishCarpet();
}
