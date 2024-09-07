//slides
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
// initializeSlider()
document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
        // console.log(intervalId);
    }

}

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slided => {
        slided.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);

}
//slides
//-----------------------------------------------------
//back-top
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();

        }
    });
    $('#backtop').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });
});
//backtop
function showMessage() {
    alert("Product added to cart successfully!");
}


document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product-item');

    // Tạo một IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // Quan sát khi 10% của phần tử xuất hiện

    // Quan sát tất cả các sản phẩm
    products.forEach(product => {
        observer.observe(product);
    });
});
// const Contacts = document.getElementById("Contacts");
// Contacts.addEventListener("click", () => {
//     // window.location.href = "https://haduckientechnology17092005.github.io/Page-contacts/";
//     window.open('https://haduckientechnology17092005.github.io/Page-contacts/', '_blank');
// });