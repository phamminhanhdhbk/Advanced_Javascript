document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const message = document.getElementById('message');

    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;
    let moves = 0;

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWin = () => {
        for (let combo of winningCombos) {
            if (gameBoard[combo[0]] !== '' &&
                gameBoard[combo[0]] === gameBoard[combo[1]] &&
                gameBoard[combo[0]] === gameBoard[combo[2]]) {
                gameActive = false;
                highlightWinner(combo);
                message.textContent = `${currentPlayer} wins!`;
                return true;
            }
        }
        if (moves === 9) {
            gameActive = false;
            message.textContent = 'It\'s a draw!';
            return true;
        }
        return false;
    };

    const highlightWinner = (combo) => {
        for (let index of combo) {
            cells[index].classList.add('winner');
        }
    };

    const handleCellClick = (event) => {
        const index = parseInt(event.target.id);
        if (gameBoard[index] === '' && gameActive) {
            gameBoard[index] = currentPlayer;
            event.target.textContent = currentPlayer;
            moves++;
            if (!checkWin()) {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                message.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    };

    const handleRestart = () => {
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        moves = 0;
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('winner');
        });
        message.textContent = `Player ${currentPlayer}'s turn`;
    };

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    document.getElementById('restart').addEventListener('click', handleRestart);
});
