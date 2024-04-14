$(document).ready(function() {
    // Load books from local storage when the page loads
    loadBooks();

    // Add book event
    $('#book-form').submit(function(e) {
        e.preventDefault();
        addBook();
    });

    // Function to add a book
    function addBook() {
        var title = $('#title').val();
        var author = $('#author').val();
        var isbn = $('#isbn').val();
        var publishedDate = $('#published-date').val();

        // Validate input
        if (title === '' || author === '' || isbn === '' || publishedDate === '') {
            alert('Please fill in all fields');
            return;
        }

        var book = {
            title: title,
            author: author,
            isbn: isbn,
            publishedDate: publishedDate
        };

        // Add book to local storage
        saveBook(book);

        // Clear form fields
        $('#title').val('');
        $('#author').val('');
        $('#isbn').val('');
        $('#published-date').val('');

        // Reload books
        loadBooks();
    }

    // Function to save book to local storage
    function saveBook(book) {
        var books = JSON.parse(localStorage.getItem('books')) || [];
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    // Function to load books from local storage
    function loadBooks() {
        var books = JSON.parse(localStorage.getItem('books')) || [];
        var bookList = $('#book-list');
        bookList.empty();
        books.forEach(function(book) {
            bookList.append('<div>Title: ' + book.title + ', Author: ' + book.author + ', ISBN: ' + book.isbn + ', Published Date: ' + book.publishedDate + '</div>');
        });
    }
});
