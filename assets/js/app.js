const miniNav = document.querySelector('.mini_nav');
const specialProductsRow = document.querySelector('.special_products_row');
const sidebarContainer = document.querySelector('.side_bar_container');

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
                    <div class="input-group d-flex justify-content-center">
                        <input type="search" class="search_box_mini" placeholder="جستجو..">
                        <button class="btn btn-light search_btn_mini">
                            <i class="bi bi-search text_gold"></i>
                        </button>
                    </div>
                </div>


                <!-- nav links -->
                <div class="">
                    <ul class="list-unstyled nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link text_gold fs-5" href="index.html">صفحه اصلی</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-color-brown fs-5" href="products.html">فرش ها</a>
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
    sidebarContainer.removeAttribute('style')
}

let specialCarpet = [carpets[0], carpets[1], carpets[3], carpets[4]];

showSpecialProducts();

function showSpecialProducts() {

    specialCarpet.forEach((carpet) => {
        const specialProduct = document.createElement('div');
        specialProduct.className = "col-6 col-xl-3";
        specialProduct.innerHTML = `
            <a href="product_detail.html?id=${carpet.id}&color=${carpet.colors[0].colorId}"
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
                        ${carpet.price.toLocaleString()}
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
