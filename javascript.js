function getComputerChoice () {
    // generate random integer between 1 and 3
    random_number = Math.floor(Math.random() * 3) + 1;

    if (random_number === 1) {
        return 'Rock';
    } else if (random_number === 2) {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}