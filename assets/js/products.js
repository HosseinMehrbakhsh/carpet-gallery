const miniNav = document.querySelector('.mini_nav');
const sidebarContainer = document.querySelector('.side_bar_container');
const productsContainer = document.querySelector('.products_container_row');
const filterSizeContainer = document.getElementById('filterBySize');
const filterColorContainer = document.getElementById('filterByColor');
const filterPriceBtn = document.getElementById('filterByPriceBtn');
const minPriceEl = document.getElementById('minPrice');
const maxPriceEl = document.getElementById('maxPrice');




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
                            ${product.price.toLocaleString()}
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



let sizes = [];
let colors = [];
let prices = [];

// selected sizes by user 
filterSizeContainer.addEventListener('change', (e) => {
    if (e.target.checked) {
        sizes.push(e.target.value);
    } else {
        let indexRemove = sizes.indexOf(e.target.value);
        sizes.splice(indexRemove, 1);

    }

    console.log(sizes);

    filterProduct(sizes, colors ,prices);
});


// selected colors by user 
filterColorContainer.addEventListener('change', (e) => {
    if (e.target.checked) {
        colors.push(e.target.value);
    } else {
        let indexRemove = colors.indexOf(e.target.value);
        colors.splice(indexRemove, 1);
    }
    console.log(colors);
    filterProduct(sizes, colors,prices)
})


// slected price by user 
filterPriceBtn.addEventListener('click', () => {
    prices[0] = Number(minPriceEl.value);
    prices[1] = Number(maxPriceEl.value);

    console.log(prices);
    filterProduct(sizes, colors, prices);

})


function filterProduct(sizes, colors, prices) {
    let filtered = carpets.filter((carpet) => {
        let colorFlag = true;
        let sizeFlag = true;
        let priceFlag = true;

        if (sizes.length > 0) {

            sizeFlag = false;
            sizes.forEach((size) => {
                if (carpet.size === size) {
                    sizeFlag = true;
                }
            });
        }

        if (colors.length > 0) {

            colorFlag = false;
            colors.forEach((color) => {
                carpet.colors.forEach((colorData) => {
                    if (colorData.colorEn === color) {
                        colorFlag = true;
                    }
                })
            });
        }

        if (prices[0] !== 0 && prices[1] !==0) {
            priceFlag = false;
            console.log(priceFlag);
            
            if (carpet.price >= prices[0] && carpet.price <= prices[1]){
                priceFlag=true;
            }
        }


        return sizeFlag && colorFlag && priceFlag;
    })
    console.log(filtered);

}