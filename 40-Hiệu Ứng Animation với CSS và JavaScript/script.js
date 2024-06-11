document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');

    window.addEventListener('scroll', () => {
        if (isInViewport(box)) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });

    // Kiểm tra xem một phần tử có hiển thị trong viewport không
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
});
