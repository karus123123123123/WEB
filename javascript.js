//slides
const slides = document.querySelectorAll(".slides img"); // lấy tất cả cã thẻ img nằm trong div có claas slide trả về mảng 
let slideIndex = 0;
let intervalId = null;
// initializeSlider()
document.addEventListener("DOMContentLoaded", initializeSlider) //html hiện lên rồi gọi hàm này 
function initializeSlider() {
    if (slides.length > 0) {
        // điều kiện luôn đúng nếu k có ảnh nào thì k làm 
        slides[slideIndex].classList.add("displaySlide"); // slide index là thẻ đầu ,thêm class là  ròi hiện ảnh
        intervalId = setInterval(nextSlide, 5000); //lặp lại sau 1 khoảng thoi gian 
        // console.log(intervalId);
    }
}

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1; //3 ra ảnh cuối cùng 
    }
    slides.forEach(slided => { //duyệt qua mảng slides ẩn cía ảnh đang hiện 
        slided.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide"); //trước đó đang hiên tấm ảnh đầu tiên rồi ,duyệt qua cái mảng  sau đó ẩn hết tấm ảnh rồi hiện tấm ảnh tiếp theo
}

function prevSlide() {
    clearInterval(intervalId); // k cho lặp lại hàm đó nữa 
    slideIndex--; //chỉ số ngược lại (-1)
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
            $('#backtop').fadeIn(); //hiện
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
    }, { threshold: 0.7 }); // Quan sát khi 10% của phần tử xuất hiện

    // Quan sát tất cả các sản phẩm
    products.forEach(product => {
        observer.observe(product);
    });
});