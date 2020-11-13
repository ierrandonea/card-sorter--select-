// global classes vvv
let board = document.querySelector(".container-fluid");
let miniBoard = document.querySelector(".history-container")
let formControl = document.querySelector(".form-control");
let cardGroup = [];

// dealer vvv
let buttonEx = document.querySelector("#randomBtn");
buttonEx.addEventListener("click", () => {
    if (formControl.value !== '') {
        cardMaker(formControl.value);
    }
});

// sorter vvv
let buttonSort = document.querySelector("#sorterBtn");
buttonSort.addEventListener("click", () => {
    sortCard(cardGroup);
    cardGroup = [];
});

function sortCard(cardGroup) {
    let n = cardGroup.length;
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = 0; j < n; j++) {
            if (cardGroup[j] < cardGroup[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = cardGroup[i];
            cardGroup[i] = cardGroup[min];
            cardGroup[min] = tmp;
        }

        let cardDeck = document.createElement("div");
        cardGroup.forEach((item) => {
            let card2 = document.createElement("div");
            let numbers = document.createElement("h1");
            numbers.innerHTML = item.number;
            numbers.classList.add(item.suit);
            card2.appendChild(numbers);
            card2.classList.add("card");
            card2.classList.add("minimizer");
            cardDeck.appendChild(card2);
            cardDeck.classList.add("row");
            miniBoard.appendChild(cardDeck);
        });
    }
}

// maker vvv
const cardMaker = (e) => {
    console.log("card Maker");
    board.innerHTML = '';
    for (let i = 0; i < e; i++) {
        let card = document.createElement("div");
        let numbers = document.createElement("h1");
        let numberOfNumbers = Numbers();
        let suits = Shuffler();
        numbers.innerHTML = numberOfNumbers;
        numbers.classList.add(suits);
        card.appendChild(numbers);
        card.classList.add("card");
        board.appendChild(card);
        let savedCards = {
            number: numberOfNumbers,
            suit: suits
        }
        cardGroup.push(savedCards);
    }
};

// shuffler vvv
const Shuffler = () => {

    let symbols = ['the-number-heart', 'the-number-spades', 'the-number-diamonds', 'the-number-clubs'];

    let symbolsIndex = Math.floor(Math.random() * symbols.length);

    return symbols[symbolsIndex];
}

const Numbers = () => {

    let numbers = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

    let numbersIndex = Math.floor(Math.random() * numbers.length);

    return numbers[numbersIndex];
}
