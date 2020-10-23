const board = document.getElementById('board').rows;

const numberOfSingleShips = 4;
const numberOfDoubleShips = 3;
const numberOfTripleShips = 2;
const numberOfQuadrupleShips = 1;

let ships = [];
let busyCells = [];

let hits = 0;
let guesses = 0;

let i = 0;
while ( document.getElementsByTagName("TD")[i] ) {
    let currentElement = document.getElementsByTagName("TD")[i];
    
    currentElement.addEventListener( "click", function() {
        guesses++;
        document.getElementById('guesses').innerHTML = `Total Guesses: ${guesses}`;

        if ( !ships.includes(currentElement) ) {
            currentElement.style.backgroundColor = 'red';
        }
    } )
    i++;
}

const randromFrom1ToGivenNumber = (number) => {
    return Math.floor( Math.random() * number ) + 1;
}

const launchSingleShip = () => {
    let rowCoord = randromFrom1ToGivenNumber(10);
    let columnCoord = randromFrom1ToGivenNumber(10);

    let ship = board[ rowCoord ].cells[ columnCoord ];

    if ( !busyCells.includes(ship) ) {
        ships.push(ship);
        busyCells.push(ship);

        if ( rowCoord === 1 && columnCoord === 1 ) {
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];

            busyCells.push(right, downRight, down);

        } else if ( rowCoord === 1 && columnCoord === 10 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];

            busyCells.push(left, downLeft, down);

        } else if ( rowCoord === 10 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];

            busyCells.push(up, upRight, right);

        } else if ( rowCoord === 10 && columnCoord === 10 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];

            busyCells.push(up, upLeft, left);

        } else if ( rowCoord > 1 && rowCoord < 10 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];

            busyCells.push(up, upRight, right, downRight, down);

        } else if ( rowCoord > 1 && rowCoord < 10 && columnCoord === 10 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];

            busyCells.push(up, upLeft, left, downLeft, down);

        } else if ( rowCoord === 1 && columnCoord > 1 && columnCoord < 10 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];

            busyCells.push(left, downLeft, down, downRight, right);

        } else if ( rowCoord === 10 && columnCoord > 1 && columnCoord < 10 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];

            busyCells.push(left, upLeft, up, upRight, right);

        } else {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];

            busyCells.push(up, upRight, right, downRight, down, downLeft, left, upLeft);

        }

        ship.style.backgroundColor = 'yellow';
    } else {
        launchSingleShip();
    }
};

const launchVerticalDoubleShip = () => {
    let rowCoord = randromFrom1ToGivenNumber(9);
    let columnCoord = randromFrom1ToGivenNumber(10);

    let ship1 = board[ rowCoord ].cells[ columnCoord ];
    let ship2 = board[ rowCoord + 1 ].cells[ columnCoord ];

    if ( !busyCells.includes(ship1) && !busyCells.includes(ship2) ) {
        ships.push(ship1, ship2);
        busyCells.push(ship1, ship2);
    
        if ( rowCoord === 1 && columnCoord === 1 ) {
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downDown = board[ rowCoord + 2 ].cells[ columnCoord ];
    
            busyCells.push(right, downRight, downDownRight, downDown);
    
        } else if ( rowCoord === 1 && columnCoord === 10 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downDown = board[ rowCoord + 2 ].cells[ columnCoord ];
    
            busyCells.push(left, downLeft, downDownLeft, downDown);
    
        } else if ( rowCoord === 9 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
    
            busyCells.push(up, upRight, right, downRight);
    
        } else if ( rowCoord === 9 && columnCoord === 10 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
    
            busyCells.push(up, upLeft, left, downLeft);
    
        } else if ( rowCoord === 1 && columnCoord > 1 && columnCoord < 10 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downDown = board[ rowCoord + 2 ].cells[ columnCoord ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            
            busyCells.push(left, downLeft, downDownLeft, downDown, downDownRight, downRight, right);
    
        } else if ( rowCoord === 9 && columnCoord > 1 && columnCoord < 10 ) {
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            
            busyCells.push(downLeft, left, upLeft, up, upRight, right, downRight);
    
        } else if ( rowCoord > 1 && rowCoord < 9 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downDown = board[ rowCoord + 2 ].cells[ columnCoord ];
            
            busyCells.push(up, upRight, right, downRight, downDownRight, downDown);
    
        } else if ( rowCoord > 1 && rowCoord < 9 && columnCoord === 10 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downDown = board[ rowCoord + 2 ].cells[ columnCoord ];
            
            busyCells.push(up, upLeft, left, downLeft, downDownLeft, downDown);
    
        } else {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downDown = board[ rowCoord + 2 ].cells[ columnCoord ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
    
            busyCells.push(up, upRight, right, downRight, downDownRight, downDown, downDownLeft, downLeft, left, upLeft);

        }

        ship1.style.backgroundColor = 'lawngreen';
        ship2.style.backgroundColor = 'lawngreen';
    } else {
        launchVerticalDoubleShip();
    }
};

const launchHorizontalDoubleShip = () => {
    let rowCoord = randromFrom1ToGivenNumber(10);
    let columnCoord = randromFrom1ToGivenNumber(9);

    let ship1 = board[ rowCoord ].cells[ columnCoord ];
    let ship2 = board[ rowCoord ].cells[ columnCoord + 1 ];

    if ( !busyCells.includes(ship1) && !busyCells.includes(ship2) ) {
        ships.push(ship1, ship2);
        busyCells.push(ship1, ship2);

        if ( rowCoord === 1 && columnCoord === 1 ) {
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const rightRight = board[ rowCoord ].cells[ columnCoord + 2 ];

            busyCells.push(down, downRight, downRightRight, rightRight);

        } else if ( rowCoord === 1 && columnCoord === 9 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];

            busyCells.push(left, downLeft, down, downRight);

        } else if ( rowCoord === 10 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const rightRight = board[ rowCoord ].cells[ columnCoord + 2 ];

            busyCells.push(up, upRight, upRightRight, rightRight);

        } else if ( rowCoord === 10 && columnCoord === 9 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];

            busyCells.push(left, upLeft, up, upRight);

        } else if ( rowCoord > 1 && rowCoord < 10 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const rightRight = board[ rowCoord ].cells[ columnCoord + 2 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];

            busyCells.push(up, upRight, upRightRight, rightRight, downRightRight, downRight, down);

        } else if ( rowCoord > 1 && rowCoord < 10 && columnCoord === 9 ) {
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];

            busyCells.push(upRight, up, upLeft, left, downLeft, down, downRight);

        } else if ( rowCoord === 1 && columnCoord > 1 && columnCoord < 9 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const rightRight = board[ rowCoord ].cells[ columnCoord + 2 ];

            busyCells.push(left, downLeft, down, downRight, downRightRight, rightRight);

        } else if ( rowCoord === 10 && columnCoord > 1 && columnCoord < 9 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const rightRight = board[ rowCoord ].cells[ columnCoord + 2 ];

            busyCells.push(left, upLeft, up, upRight, upRightRight, rightRight);

        } else {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const rightRight = board[ rowCoord ].cells[ columnCoord + 2 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];

            busyCells.push(up, upRight, upRightRight, rightRight, downRightRight, downRight, down, downLeft, left, upLeft);

        }

        ship1.style.backgroundColor = 'forestgreen';
        ship2.style.backgroundColor = 'forestgreen';
    } else {
        launchHorizontalDoubleShip();
    }
};

const launchVerticalTripleShip = () => {
    let rowCoord = randromFrom1ToGivenNumber(8);
    let columnCoord = randromFrom1ToGivenNumber(10);

    let ship1 = board[ rowCoord ].cells[ columnCoord ];
    let ship2 = board[ rowCoord + 1 ].cells[ columnCoord ];
    let ship3 = board[ rowCoord + 2 ].cells[ columnCoord ];

    if ( !busyCells.includes(ship1) && !busyCells.includes(ship2) && !busyCells.includes(ship3) ) {
        ships.push(ship1, ship2, ship3);
        busyCells.push(ship1, ship2, ship3);

        if ( rowCoord === 1 && columnCoord === 1 ) {
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downDownDownRight = board[ rowCoord + 3 ].cells[ columnCoord + 1 ];
            const downDownDown = board[ rowCoord + 3 ].cells[ columnCoord ];
            
            busyCells.push( right, downRight, downDownRight, downDownDownRight, downDownDown );

        } else if ( rowCoord === 1 && columnCoord === 10 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downDownDownLeft = board[ rowCoord + 3 ].cells[ columnCoord - 1 ];
            const downDownDown = board[ rowCoord + 3 ].cells[ columnCoord ];

            busyCells.push(left, downLeft, downDownLeft, downDownDownLeft, downDownDown);

        } else if ( rowCoord === 8 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];

            busyCells.push(up, upRight, right, downRight, downDownRight);

        } else if ( rowCoord === 8 && columnCoord === 10 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];

            busyCells.push(up, upLeft, left, downLeft, downDownLeft);

        } else if ( rowCoord === 1 && columnCoord > 1 && columnCoord < 10 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downDownDownLeft = board[ rowCoord + 3 ].cells[ columnCoord - 1 ];
            const downDownDown = board[ rowCoord + 3 ].cells[ columnCoord ];
            const downDownDownRight = board[ rowCoord + 3 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];

            busyCells.push(left, downLeft, downDownLeft, downDownDownLeft, downDownDown, downDownDownRight, downDownRight, downRight, right);

        } else if ( rowCoord === 8 && columnCoord > 1 && columnCoord < 10 ) {
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];

            busyCells.push(downDownLeft, downLeft, left, upLeft, up, upRight, right, downRight, downDownRight);

        } else if ( rowCoord > 1 && rowCoord < 8 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downDownDownRight = board[ rowCoord + 3 ].cells[ columnCoord + 1 ];
            const downDownDown = board[ rowCoord + 3 ].cells[ columnCoord ];

            busyCells.push(up, upRight, right, downRight, downDownRight, downDownDownRight, downDownDown);

        } else if ( rowCoord > 1 && rowCoord < 8 && columnCoord === 10 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downDownDownLeft = board[ rowCoord + 3 ].cells[ columnCoord - 1 ];
            const downDownDown = board[ rowCoord + 3 ].cells[ columnCoord ];
            
            busyCells.push(up, upLeft, left, downLeft, downDownLeft, downDownDownLeft, downDownDown);

        } else {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downDownDownRight = board[ rowCoord + 3 ].cells[ columnCoord + 1 ];
            const downDownDown = board[ rowCoord + 3 ].cells[ columnCoord ];
            const downDownDownLeft = board[ rowCoord + 3 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];

            busyCells.push(up, upRight, right, downRight, downDownRight, downDownDownRight, downDownDown, downDownDownLeft, downDownLeft, downLeft, left, upLeft);

        }

        ship1.style.backgroundColor = 'indigo';
        ship2.style.backgroundColor = 'indigo';
        ship3.style.backgroundColor = 'indigo';
    } else {
        launchVerticalTripleShip();
    }
};

const launchHorizontalTripleShip = () => {
    let rowCoord = randromFrom1ToGivenNumber(10);
    let columnCoord = randromFrom1ToGivenNumber(8);

    let ship1 = board[ rowCoord ].cells[ columnCoord ];
    let ship2 = board[ rowCoord ].cells[ columnCoord + 1 ];
    let ship3 = board[ rowCoord ].cells[ columnCoord + 2 ];

    if ( !busyCells.includes(ship1) && !busyCells.includes(ship2) && !busyCells.includes(ship3) ) {
        ships.push(ship1, ship2, ship3);
        busyCells.push(ship1, ship2, ship3);

        if ( rowCoord === 1 && columnCoord === 1 ) {
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 3 ];
            const rightRightRight = board[ rowCoord ].cells[ columnCoord + 3 ];
    
            busyCells.push(down, downRight, downRightRight, downRightRightRight, rightRightRight);
    
        } else if ( rowCoord === 1 && columnCoord === 8 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
    
            busyCells.push(left, downLeft, down, downRight, downRightRight);
    
        } else if ( rowCoord === 10 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const upRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 3 ];
            const rightRightRight = board[ rowCoord ].cells[ columnCoord + 3 ];
    
            busyCells.push(up, upRight, upRightRight, upRightRightRight, rightRightRight);
    
        } else if ( rowCoord === 10 && columnCoord === 8 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
    
            busyCells.push(left, upLeft, up, upRight, upRightRight);
    
        } else if ( rowCoord > 1 && rowCoord < 10 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const upRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 3 ];
            const rightRightRight = board[ rowCoord ].cells[ columnCoord + 3 ];
            const downRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 3 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
    
            busyCells.push(up, upRight, upRightRight, upRightRightRight, rightRightRight, downRightRightRight, downRightRight, downRight, down);
    
        } else if ( rowCoord > 1 && rowCoord < 10 && columnCoord === 8 ) {
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
    
            busyCells.push(upRightRight, upRight, up, upLeft, left, downLeft, down, downRight, downRightRight);
    
        } else if ( rowCoord === 1 && columnCoord > 1 && columnCoord < 8 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 3 ];
            const rightRightRight = board[ rowCoord ].cells[ columnCoord + 3 ];
    
            busyCells.push(left, downLeft, down, downRight, downRightRight, downRightRightRight, rightRightRight);
    
        } else if ( rowCoord === 10 && columnCoord > 1 && columnCoord < 8 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const upRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 3 ];
            const rightRightRight = board[ rowCoord ].cells[ columnCoord + 3 ];
    
            busyCells.push(left, upLeft, up, upRight, upRightRight, upRightRightRight, rightRightRight);
    
        } else {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const upRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 3 ];
            const rightRightRight = board[ rowCoord ].cells[ columnCoord + 3 ];
            const downRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 3 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
    
            busyCells.push(up, upRight, upRightRight, upRightRightRight, rightRightRight, downRightRightRight, downRightRight, downRight, down, downLeft, left, upLeft);
    
        }

        ship1.style.backgroundColor = 'mediumpurple';
        ship2.style.backgroundColor = 'mediumpurple';
        ship3.style.backgroundColor = 'mediumpurple';
    } else {
        launchHorizontalTripleShip();
    }
};

const launchVerticalQuadrupleShip = () => {
    let rowCoord = randromFrom1ToGivenNumber(7);
    let columnCoord = randromFrom1ToGivenNumber(10);

    let ship1 = board[ rowCoord ].cells[ columnCoord ];
    let ship2 = board[ rowCoord + 1 ].cells[ columnCoord ];
    let ship3 = board[ rowCoord + 2 ].cells[ columnCoord ];
    let ship4 = board[ rowCoord + 3 ].cells[ columnCoord ];

    if ( !busyCells.includes(ship1) && !busyCells.includes(ship2) && !busyCells.includes(ship3) && !busyCells.includes(ship4) ) {
        ships.push(ship1, ship2, ship3, ship4);
        busyCells.push(ship1, ship2, ship3, ship4);

        if ( rowCoord === 1 && columnCoord === 1 ) {
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downDownDownRight = board[ rowCoord + 3 ].cells[ columnCoord + 1 ];
            const downDownDownDownRight = board[ rowCoord + 4 ].cells[ columnCoord + 1 ];
            const downDownDownDown = board[ rowCoord + 4 ].cells[ columnCoord ];

            busyCells.push(right, downRight, downDownRight, downDownDownRight, downDownDownDownRight, downDownDownDown);

        } else if ( rowCoord === 1 && columnCoord === 10 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downDownDownLeft = board[ rowCoord + 3 ].cells[ columnCoord - 1 ];
            const downDownDownDownLeft = board[ rowCoord + 4 ].cells[ columnCoord - 1 ];
            const downDownDownDown = board[ rowCoord + 4 ].cells[ columnCoord ];

            busyCells.push(left, downLeft, downDownLeft, downDownDownLeft, downDownDownDownLeft, downDownDownDown);

        } else if ( rowCoord === 7 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downDownDownRight = board[ rowCoord + 3 ].cells[ columnCoord + 1 ];

            busyCells.push(up, upRight, right, downRight, downDownRight, downDownDownRight);

        } else if ( rowCoord === 7 && columnCoord === 10 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downDownDownLeft = board[ rowCoord + 3 ].cells[ columnCoord - 1 ];

            busyCells.push(up, upLeft, left, downLeft, downDownLeft, downDownDownLeft);

        } else if ( rowCoord === 1 && columnCoord > 1 && columnCoord < 10 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downDownDownLeft = board[ rowCoord + 3 ].cells[ columnCoord - 1 ];
            const downDownDownDownLeft = board[ rowCoord + 4 ].cells[ columnCoord - 1 ];
            const downDownDownDown = board[ rowCoord + 4 ].cells[ columnCoord ];
            const downDownDownDownRight = board[ rowCoord + 4 ].cells[ columnCoord + 1 ];
            const downDownDownRight = board[ rowCoord + 3 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];

            busyCells.push(left, downLeft, downDownLeft, downDownDownLeft, downDownDownDownLeft, downDownDownDown, downDownDownDownRight, downDownDownRight, downDownRight, downRight, right);

        } else if ( rowCoord === 7 && columnCoord > 1 && columnCoord < 10 ) {
            const downDownDownLeft = board[ rowCoord + 3 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downDownDownRight = board[ rowCoord + 3 ].cells[ columnCoord + 1 ];

            busyCells.push(downDownDownLeft, downDownLeft, downLeft, left, upLeft, up, upRight, right, downRight, downDownRight, downDownDownRight);

        } else if ( rowCoord > 1 && rowCoord < 7 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downDownDownRight = board[ rowCoord + 3 ].cells[ columnCoord + 1 ];
            const downDownDownDownRight = board[ rowCoord + 4 ].cells[ columnCoord + 1 ];
            const downDownDownDown = board[ rowCoord + 4 ].cells[ columnCoord ];

            busyCells.push(up, upRight, right, downRight, downDownRight, downDownDownRight, downDownDownDownRight, downDownDownDown);

        } else if ( rowCoord > 1 && rowCoord < 7 && columnCoord === 10 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downDownDownLeft = board[ rowCoord + 3 ].cells[ columnCoord - 1 ];
            const downDownDownDownLeft = board[ rowCoord + 4 ].cells[ columnCoord - 1 ];
            const downDownDownDown = board[ rowCoord + 4 ].cells[ columnCoord ];

            busyCells.push(up, upLeft, left, downLeft, downDownLeft, downDownDownLeft, downDownDownDownLeft, downDownDownDown);

        } else {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const right = board[ rowCoord ].cells[ columnCoord + 1 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downDownRight = board[ rowCoord + 2 ].cells[ columnCoord + 1 ];
            const downDownDownRight = board[ rowCoord + 3 ].cells[ columnCoord + 1 ];
            const downDownDownDownRight = board[ rowCoord + 4 ].cells[ columnCoord + 1 ];
            const downDownDownDown = board[ rowCoord + 4 ].cells[ columnCoord ];
            const downDownDownDownLeft = board[ rowCoord + 4 ].cells[ columnCoord - 1 ];
            const downDownDownLeft = board[ rowCoord + 3 ].cells[ columnCoord - 1 ];
            const downDownLeft = board[ rowCoord + 2 ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];

            busyCells.push(up, upRight, right, downRight, downDownRight, downDownDownRight, downDownDownDownRight, downDownDownDown, downDownDownDownLeft, downDownDownLeft, downDownLeft, downLeft, left, upLeft);

        }

        ship1.style.backgroundColor = 'magenta';
        ship2.style.backgroundColor = 'magenta';
        ship3.style.backgroundColor = 'magenta';
        ship4.style.backgroundColor = 'magenta';
    } else {
        launchVerticalQuadrupleShip();
    }
};

const launchHorizontalQuadrupleShip = () => {
    let rowCoord = randromFrom1ToGivenNumber(10);
    let columnCoord = randromFrom1ToGivenNumber(7);

    let ship1 = board[ rowCoord ].cells[ columnCoord ];
    let ship2 = board[ rowCoord ].cells[ columnCoord + 1 ];
    let ship3 = board[ rowCoord ].cells[ columnCoord + 2 ];
    let ship4 = board[ rowCoord ].cells[ columnCoord + 3 ];

    if ( !busyCells.includes(ship1) && !busyCells.includes(ship2) && !busyCells.includes(ship3) && !busyCells.includes(ship4) ) {
        ships.push(ship1, ship2, ship3, ship4);
        busyCells.push(ship1, ship2, ship3, ship4);

        if ( rowCoord === 1 && columnCoord === 1 ) {
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 3 ];
            const downRightRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 4 ];
            const rightRightRightRight = board[ rowCoord ].cells[ columnCoord + 4 ];

            busyCells.push(down, downRight, downRightRight, downRightRightRight, downRightRightRightRight, rightRightRightRight);

        } else if ( rowCoord === 1 && columnCoord === 7 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 3 ];

            busyCells.push(left, downLeft, down, downRight, downRightRight, downRightRightRight);

        } else if ( rowCoord === 10 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const upLeftLeft = board[ rowCoord - 1 ].cells[ columnCoord - 2 ];
            const upLeftLeftLeft = board[ rowCoord - 1 ].cells[ columnCoord - 3 ];
            const upLeftLeftLeftLeft = board[ rowCoord - 1 ].cells[ columnCoord - 4 ];
            const leftLeftLeftLeft = board[ rowCoord ].cells[ columnCoord - 4 ];

            busyCells.push(up, upLeft, upLeftLeft, upLeftLeftLeft, upLeftLeftLeftLeft, leftLeftLeftLeft);

        } else if ( rowCoord === 10 && columnCoord === 7 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const upRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 3 ];

            busyCells.push(left, upLeft, up, upRight, upRightRight, upRightRightRight);

        } else if ( rowCoord === 1 && columnCoord > 1 && columnCoord < 7 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 3 ];
            const downRightRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 4 ];
            const rightRightRightRight = board[ rowCoord ].cells[ columnCoord + 4 ];

            busyCells.push(left, downLeft, down, downRight, downRightRight, downRightRightRight, downRightRightRightRight, rightRightRightRight);

        } else if ( rowCoord === 10 && columnCoord > 1 && columnCoord < 7 ) {
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const upRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 3 ];
            const upRightRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 4 ];
            const rightRightRightRight = board[ rowCoord ].cells[ columnCoord + 4 ];

            busyCells.push(left, upLeft, up, upRight, upRightRight, upRightRightRight, upRightRightRightRight, rightRightRightRight);

        } else if ( rowCoord > 1 && rowCoord < 10 && columnCoord === 1 ) {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const upRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 3 ];
            const upRightRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 4 ];
            const rightRightRightRight = board[ rowCoord ].cells[ columnCoord + 4 ];
            const downRightRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 4 ];
            const downRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 3 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];

            busyCells.push(up, upRight, upRightRight, upRightRightRight, upRightRightRightRight, rightRightRightRight, downRightRightRightRight, downRightRightRight, downRightRight, downRight, down);

        } else if ( rowCoord > 1 && rowCoord < 10 && columnCoord === 7 ) {
            const upRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 3 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 3 ];

            busyCells.push(upRightRightRight, upRightRight, upRight, up, upLeft, left, downLeft, down, downRight, downRightRight, downRightRightRight);

        } else {
            const up = board[ rowCoord - 1 ].cells[ columnCoord ];
            const upRight = board[ rowCoord - 1 ].cells[ columnCoord + 1 ];
            const upRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 2 ];
            const upRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 3 ];
            const upRightRightRightRight = board[ rowCoord - 1 ].cells[ columnCoord + 4 ];
            const rightRightRightRight = board[ rowCoord ].cells[ columnCoord + 4 ];
            const downRightRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 4 ];
            const downRightRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 3 ];
            const downRightRight = board[ rowCoord + 1 ].cells[ columnCoord + 2 ];
            const downRight = board[ rowCoord + 1 ].cells[ columnCoord + 1 ];
            const down = board[ rowCoord + 1 ].cells[ columnCoord ];
            const downLeft = board[ rowCoord + 1 ].cells[ columnCoord - 1 ];
            const left = board[ rowCoord ].cells[ columnCoord - 1 ];
            const upLeft = board[ rowCoord - 1 ].cells[ columnCoord - 1 ];
            
            busyCells.push(up, upRight, upRightRight, upRightRightRight, upRightRightRightRight, rightRightRightRight, downRightRightRightRight, downRightRightRight, downRightRight, downRight, down, downLeft, left, upLeft);

        }

        ship1.style.backgroundColor = 'pink';
        ship2.style.backgroundColor = 'pink';
        ship3.style.backgroundColor = 'pink';
        ship4.style.backgroundColor = 'pink';
    } else {
        launchVerticalQuadrupleShip();
    }
};

for ( let i = 0; i < numberOfQuadrupleShips; i++ ) {
    Math.round( Math.random() ) === 0 ? launchVerticalQuadrupleShip() : launchHorizontalQuadrupleShip();
}

for ( let i = 0; i < numberOfTripleShips; i++ ) {
    Math.round( Math.random() ) === 0 ? launchVerticalTripleShip() : launchHorizontalTripleShip();
}

for ( let i = 0; i < numberOfDoubleShips; i++ ) {
    Math.round( Math.random() ) === 0 ? launchVerticalDoubleShip() : launchHorizontalDoubleShip();
}

for ( let i = 0; i < numberOfSingleShips; i++ ) {
    launchSingleShip();
}

const hitMyShip = (array) => {
    for ( let i = 0; i < array.length; i++ ) {
        array[i].addEventListener( "click", function() {
            array[i].style.backgroundColor = 'darkblue';
            alert('You\'ve hit my ship!');
            hits++;
            document.getElementById('correct').innerHTML = `Correct Guesses: ${hits}`;

            if ( hits === ships.length ) {
                alert('You sunk all my ships!');
            }
        } ) 
    }
};

hitMyShip(ships);