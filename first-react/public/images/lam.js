let currentIndex = 0;
const images = document.querySelectorAll('.main-image-slider a img');
const mainSection = document.querySelector('.main-section');
const backgroundBlur = document.querySelector('.background-blur');
const prevSlideButton = document.querySelector('.prev-slide');
const nextSlideButton = document.querySelector('.next-slide');
// Lấy các phần tử từ DOM
const openCartBtn = document.querySelector('.open-cart-btn'); // Nút mở giỏ hàng
const cartOverlay = document.querySelector('.cart-overlay');  // Overlay giỏ hàng
const closeCartBtn = document.querySelector('.close-cart-btn'); // Nút đóng giỏ hàng
function showSlide(index) {
    images.forEach((img, i) => {
        img.parentElement.style.display = i === index ? 'block' : 'none';
    });
    mainSection.style.backgroundImage = `url(${images[index].src})`;
    backgroundBlur.style            .backgroundImage = `url(${images[index].src})`;
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

nextSlideButton.addEventListener('click', showNextSlide);
prevSlideButton.addEventListener('click', showPrevSlide);

setInterval(showNextSlide, 3000);
document.addEventListener('DOMContentLoaded', function () {
    const categoryLink = document.querySelector('.menu-icon.nav-link');
    const promotionLink = document.querySelector('.nav-link[href="#promotions"]');
    const categoriesSubmenu = document.getElementById('categories-submenu');
    const promotionsSubmenu = document.getElementById('promotions-submenu');

    categoryLink.addEventListener('click', function (e) {
        e.preventDefault();
        categoriesSubmenu.classList.toggle('visible');
        promotionsSubmenu.classList.remove('visible');
    });

    promotionLink.addEventListener('click', function (e) {
        e.preventDefault();
        promotionsSubmenu.classList.toggle('visible');
        categoriesSubmenu.classList.remove('visible');
    });

    document.addEventListener('click', function (e) {
        if (!categoryLink.contains(e.target) && !categoriesSubmenu.contains(e.target)) {
            categoriesSubmenu.classList.remove('visible');
        }
        if (!promotionLink.contains(e.target) && !promotionsSubmenu.contains(e.target)) {
            promotionsSubmenu.classList.remove('visible');
        }
    });
});


// Xử lý sự kiện mở giỏ hàng
openCartBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
    cartOverlay.classList.remove('hidden'); // Hiển thị overlay giỏ hàng
});

// Xử lý sự kiện đóng giỏ hàng
closeCartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('hidden'); // Ẩn overlay giỏ hàng
});

// Đóng giỏ hàng khi nhấn vào vùng overlay ngoài giỏ hàng
cartOverlay.addEventListener('click', (event) => {
    if (event.target === cartOverlay) {
        cartOverlay.classList.add('hidden'); // Ẩn overlay giỏ hàng
    }
});
