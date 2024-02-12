let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");

function handleClick(index) {
    if (!cells[index].textContent) {
        cells[index].textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            alert(cells[a].textContent + " wins!");
            resetBoard();
            return;
        }
    }

    if ([...cells].every(cell => cell.textContent)) {
        alert("It's a tie!");
        resetBoard();
    }
}

function resetBoard() {
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
}
