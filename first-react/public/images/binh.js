// Lấy các phần tử HTML cần sử dụng
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('minute');
const secondElement = document.getElementById('second');

// Thiết lập thời gian ban đầu
let hours = 9;
let minutes = 0;
let seconds = 0;

// Hàm cập nhật đồng hồ
function updateClock() {
    // Cập nhật số giây
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    // Cập nhật số phút
    if (minutes < 0) {
        minutes = 59;
        hours--;
    }

    // Cập nhật số giờ
    if (hours < 0) {
        hours = 9;
    }

    // Hiển thị thời gian lên màn hình
    hourElement.textContent = hours.toString().padStart(2, '0');
    minuteElement.textContent = minutes.toString().padStart(2, '0');
    secondElement.textContent = seconds.toString().padStart(2, '0');
}

// Gọi hàm cập nhật đồng hồ mỗi giây
setInterval(updateClock, 1000);