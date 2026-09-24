const miniNav = document.querySelector('.mini_nav');
const sidebarContainer = document.querySelector('.side_bar_container');
const productsContainer = document.querySelector('.products_container_row');
const filterSizeContainer = document.getElementById('filterBySize');
const filterColorContainer = document.getElementById('filterByColor');
const filterPriceBtn = document.getElementById('filterByPriceBtn');
const minPriceEl = document.getElementById('minPrice');
const maxPriceEl = document.getElementById('maxPrice');
const filterContainerSide = document.querySelector('.filterContainerSide');
const filterSizeContainerSide = document.getElementById('filterBySizeSide');
const filterColorContainerSide = document.getElementById('filterByColorSide');
const filterPriceBtnSide = document.getElementById('filterByPriceBtnSide');
const minPriceElSide = document.getElementById('minPriceSide');
const maxPriceElSide = document.getElementById('maxPriceSide');
const searchBtn = document.querySelector('.search_btn');
const searchBox = document.querySelector('.search_box');
const searchInput = document.querySelector('.search_input');
const searchBoxMini = document.querySelector('.search_box_mini');
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


// filter in tablet and mobile
function showFilter() {
    filterContainerSide.classList.add('show');

    setTimeout(() => {
        filterContainerSide.setAttribute('style', 'backdrop-filter: brightness(0.5) blur(2px);');
    }, 200);

}
function closeFilterSide() {
    filterContainerSide.classList.remove('show');
    filterContainerSide.removeAttribute('style');
}


showProducts();

function showProducts(filtered, selectedColors = []) {
    let products = [];
    if (filtered) {
        products = filtered;
    } else {
        products = carpets;
    }

    let haveColor = false;
    if (products.length > 0) {
        products.forEach((product) => {

            let colorsToShow = product.colors;

            if (selectedColors.length > 0) {

                colorsToShow = product.colors.filter((color) => {
                    return selectedColors.includes(color.colorEn)
                });
            }


            if (colorsToShow.length > 0) {
                haveColor = true;

                colorsToShow.forEach((color) => {
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
            }

        });
        if (!haveColor) {
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






// selected sizes by user 
let sizes = [];
let colors = [];
let prices = [];

// checks user have desktop or smaller device for show filter 
if (window.innerWidth < 992) {
    slectedFilterSide();
} else {
    slectedFilter();
}

function slectedFilter() {
    filterSizeContainer.addEventListener('change', (e) => {
        if (e.target.checked) {
            sizes.push(e.target.value);
        } else {
            let indexRemove = sizes.indexOf(e.target.value);
            if (indexRemove !== -1) {
                sizes.splice(indexRemove, 1);
            }

        }

        filterProduct(sizes, colors, prices);
    });


    // selected colors by user 
    filterColorContainer.addEventListener('change', (e) => {
        if (e.target.checked) {
            colors.push(e.target.value);
        } else {
            let indexRemove = colors.indexOf(e.target.value);
            if (indexRemove !== -1) {
                colors.splice(indexRemove, 1);
            }
        }

        filterProduct(sizes, colors, prices)
    })


    // slected price by user 
    filterPriceBtn.addEventListener('click', () => {
        prices[0] = Number(minPriceEl.value);
        prices[1] = Number(maxPriceEl.value);

        filterProduct(sizes, colors, prices);

    })
}

function slectedFilterSide() {
    filterSizeContainerSide.addEventListener('change', (e) => {
        if (e.target.checked) {
            sizes.push(e.target.value);
        } else {
            let indexRemove = sizes.indexOf(e.target.value);
            if (indexRemove !== -1) {
                sizes.splice(indexRemove, 1);
            }

        }

        filterProduct(sizes, colors, prices);
    });


    // selected colors by user 
    filterColorContainerSide.addEventListener('change', (e) => {
        if (e.target.checked) {
            colors.push(e.target.value);
        } else {
            let indexRemove = colors.indexOf(e.target.value);
            if (indexRemove !== -1) {
                colors.splice(indexRemove, 1);
            }
        }

        filterProduct(sizes, colors, prices)
    })


    // slected price by user 
    filterPriceBtnSide.addEventListener('click', () => {
        prices[0] = Number(minPriceElSide.value);
        prices[1] = Number(maxPriceElSide.value);

        filterProduct(sizes, colors, prices);

    })
}



// filter function 
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

        if ((prices.length > 0) && ((prices[0] !== 0 && prices[1] !== 0))) {

            priceFlag = false;

            if (carpet.price >= prices[0] && carpet.price <= prices[1]) {
                priceFlag = true;
            }
        } else if ((prices[0] === 0 && prices[1] !== 0)) {

            priceFlag = false;
            if (carpet.price <= prices[1]) {
                priceFlag = true;
            }

        } else if ((prices[0] !== 0 && prices[1] === 0)) {

            priceFlag = false;
            if (carpet.price >= prices[0]) {
                priceFlag = true;
            }
        }


        return sizeFlag && colorFlag && priceFlag;
    });
    productsContainer.innerHTML = '';
    showProducts(filtered, colors);

}

// remove filters 
function removeFilters() {
    sizes = [];
    colors = [];
    prices = [];

    document.querySelectorAll('.filterBySize input').forEach(input => {
        input.checked = false;

    });
    document.querySelectorAll('.filterByColor input').forEach(input => {
        input.checked = false;

    });
    filterProduct(sizes, colors, prices);

}


// search
searchBox.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchValue = searchInput.value.trim();
    search(searchValue);
    searchInputMini.value = searchValue;
});
searchBoxMini.addEventListener('submit', (e) => {
    e.preventDefault();
    let searchValue = searchInputMini.value.trim();
    search(searchValue);
    window.scrollTo({ top: 0, behavior: "smooth" });
    searchInput.value = searchValue;
});
// search value side bar 
function getSearchValue(e) {
    e.preventDefault();
    let searchValue = document.querySelector('.search_input_side').value.trim();
    search(searchValue);
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeSidebar();
}

searchIcon.addEventListener('click', () => {
    showSidebar();
    document.querySelector('.search_input_side').focus();
});
searchIconMini.addEventListener('click', () => {
    showSidebar();
    document.querySelector('.search_input_side').focus();
});

function search(searchValue) {
    let words = searchValue.trim().split(/\s+/).filter(word => (word.length > 1));

    let colors = [];
    let filtered = carpets.filter((product) => {
        let flag = false;
        words.forEach((word) => {
            if (product.title.includes(word)) {
                flag = true;
            }
        });

        return flag;
    });
    carpets.forEach((product) => {
        product.colors.forEach(color => {
            words.forEach(word => {
                if (color.color.includes(word)) {
                    colors.push(color.colorEn);
                }
            });
        });
    });

    if (filtered.length == 0 && colors.length > 0) {
        filtered = false;
    }


    productsContainer.innerHTML = '';
    showProducts(filtered, colors);
}

// search value comes form other pages 
let params = new URLSearchParams(window.location.search);
let searchValue = params.get('searchValue');
let paramSize = [];
if (params.get('size')) {
    paramSize.push(params.get('size'));
}

window.history.replaceState({}, '', 'products.html');
searchInput.value = searchValue;
if (searchValue) {
    search(searchValue);
}
if (paramSize.length > 0) {
    filterProduct(paramSize, colors, prices);
}

