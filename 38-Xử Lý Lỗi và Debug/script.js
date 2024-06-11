// Chương trình JavaScript chứa lỗi

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('click-me');
    button.addEventListener('click', () => {
        try {
            // Lỗi 1: Sử dụng hàm không tồn tại
            nonExistentFunction();
        } catch (error) {
            console.error('Error:', error.message);
        }
    });

    const array = [1, 2, 3, 4, 5];
    
    try {
        // Lỗi 2: Sử dụng chỉ số không hợp lệ
        console.log(array[10]);
    } catch (error) {
        console.error('Error:', error.message);
    }
    
    const object = { name: 'John', age: 30 };
    
    try {
        // Lỗi 3: Truy cập thuộc tính không tồn tại
        console.log(object.address);
    } catch (error) {
        console.error('Error:', error.message);
    }
});
