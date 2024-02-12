const fs = require('fs');

// Đường dẫn tệp cần thao tác
const filePath = 'example.txt';

// Đọc tệp
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// Ghi vào tệp
const contentToWrite = 'Hello, world!';
fs.writeFile(filePath, contentToWrite, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File written successfully!');
});

// Xóa tệp
fs.unlink(filePath, (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully!');
});

// Sửa đổi tệp (Thêm nội dung mới vào cuối tệp)
const newContent = '\nNew content appended to file!';
fs.appendFile(filePath, newContent, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Content appended to file successfully!');
});
