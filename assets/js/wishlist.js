const miniNav = document.querySelector('.mini_nav');
const sidebarContainer = document.querySelector('.side_bar_container');
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