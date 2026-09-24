const miniNav = document.querySelector('.mini_nav');
const sidebarContainer = document.querySelector('.side_bar_container');
const productContainer = document.getElementById('product_container');
const breadcrumbTitle = document.querySelector('.breadcrumb_title');
const productImg = document.querySelector('.product_img');
const productTitle = document.querySelector('.product_title');
const productSize = document.querySelector('.product_size');
const colorsContainer = document.querySelector('.colors_container');
const stock = document.querySelector('.stock');
const productPrice = document.querySelector('.product_price');
const searchBox = document.querySelector('.search_box');
const searchBoxMini = document.querySelector('.search_box_mini');
const searchInput = document.querySelector('.search_input');
const searchInputMini = document.querySelector('.search_input_mini');
const searchIcon = document.querySelector('.search_icon');
const searchIconMini = document.querySelector('.search_icon_mini');



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
                    <form class="search_box_side input-group d-flex justify-content-center">
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


const params = new URLSearchParams(window.location.search);

const id = params.get('id');
const colorId = Number(params.get('color'));

let selectedProduct = carpets.find((carpet) => (carpet.id == id))

document.title = `${selectedProduct.title}`;

showInfo();

function showInfo() {
    breadcrumbTitle.textContent = `${selectedProduct.title}`;
    productTitle.textContent = `${selectedProduct.title}`;
    productImg.src = selectedProduct.colors[colorId - 1].images[0];
    productSize.textContent = selectedProduct.size;
    stock.textContent = selectedProduct.stock;
    productPrice.textContent = selectedProduct.price.toLocaleString();



    selectedProduct.colors.forEach((color) => {
        const colorEl = document.createElement('a');
        colorEl.className = `color_option color_${color.colorId} py-1 px-2 d-flex align-items-center gap-2`;
        colorEl.innerHTML = `
            <div class=" p-2 rounded-circle" style="background-color: ${color.colorEn};"></div>
           <span class="color_option_name">${color.color}</span>
        `;
        colorEl.href = `product_detail.html?id=${id}&color=${color.colorId}`;

        if (colorEl.classList.contains(`color_${colorId}`)) {
            colorEl.classList.add('color_option_active');
        }

        colorsContainer.append(colorEl);
    });


    productImg.onload = () => {
        productContainer.classList.remove('is-loading');
    };
}


// search
searchBox.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchValue = searchInput.value.trim();
    window.location.href = `products.html?searchValue=${searchValue}`;

});
searchBoxMini.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchValue = searchInputMini.value.trim();
    window.location.href = `products.html?searchValue=${searchValue}`;

});

searchIcon.addEventListener('click', () => {
    showSidebar();
    let searchInputSide = document.querySelector('.search_input_side');
    searchInputSide.focus();
});
searchIconMini.addEventListener('click', () => {
    showSidebar();
    let searchInputSide = document.querySelector('.search_input_side');
    searchInputSide.focus();
});