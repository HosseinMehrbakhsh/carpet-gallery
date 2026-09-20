const miniNav = document.querySelector('.mini_nav');
const productContainer = document.getElementById('product_container');
const breadcrumbTitle = document.querySelector('.breadcrumb_title');
const productImg = document.querySelector('.product_img');
const productTitle = document.querySelector('.product_title');
const productSize = document.querySelector('.product_size');
const colorsContainer = document.querySelector('.colors_container');
const stock = document.querySelector('.stock');
const productPrice = document.querySelector('.product_price');


// mini nav 
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        miniNav.classList.add('show');
    }
    else {
        miniNav.classList.remove('show');
    }
});


const params = new URLSearchParams(window.location.search);

const id = params.get('id');
const colorId = Number(params.get('color'));

let selectedProduct = carpets.find((carpet) => (carpet.id == id))

document.title=`${selectedProduct.title}`;

showInfo();

function showInfo() {
    breadcrumbTitle.textContent = `${selectedProduct.title}`;
    productTitle.textContent = `${selectedProduct.title}`;
    productImg.src = selectedProduct.colors[colorId - 1].images[0];
    productSize.textContent = selectedProduct.size;
    stock.textContent= selectedProduct.stock;
    productPrice.textContent=selectedProduct.price.toLocaleString();



    selectedProduct.colors.forEach((color) => {
        const colorEl = document.createElement('a');
        colorEl.className = `color_option color_${color.colorId} py-1 px-2 d-flex align-items-center gap-2`;
        colorEl.innerHTML = `
            <div class=" p-2 rounded-circle" style="background-color: ${color.colorEn};"></div>
           <span class="color_option_name">${color.color}</span>
        `;
        colorEl.href=`product_detail.html?id=${id}&color=${color.colorId}`;
        
        if(colorEl.classList.contains(`color_${colorId}`)){
            colorEl.classList.add('color_option_active');
        }
        
        colorsContainer.append(colorEl);
    });
    

    productImg.onload = () => {
        productContainer.classList.remove('is-loading');
    };
}
