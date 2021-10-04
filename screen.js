let grid = [];
let x = 0;
let y = 0;

function setup(width, height) {
    x = width;
    y = height;
    const printChar = 'X';
    const screen = {};

    for (let i = 0; i < y; i++) {
        const row = [];
        for (let j = 0; j < x; j++) {
            row.push([' ']);
        }
        grid.push(row);
    }

    screen.set = (char) => {
        switch (char) {
            case 'n':
                grid[4][0] = printChar;
                grid[3][0] = printChar;
                grid[2][0] = printChar;
                grid[2][1] = printChar;
                grid[2][2] = printChar;
                grid[3][2] = printChar;
                grid[4][2] = printChar;
                break;
            case 'r':
                grid[4][0] = printChar;
                grid[3][0] = printChar;
                grid[2][0] = printChar;
                grid[2][1] = printChar;
                grid[2][2] = printChar;
                break;
            case '1':
                grid[0][1] = printChar;
                grid[1][1] = printChar;
                grid[2][1] = printChar;
                grid[3][1] = printChar;
                grid[4][1] = printChar;
                break;
            case '2':
                grid[0][0] = printChar;
                grid[0][1] = printChar;
                grid[0][2] = printChar;
                grid[1][2] = printChar;
                grid[2][2] = printChar;
                grid[2][1] = printChar;
                grid[2][0] = printChar;
                grid[3][0] = printChar;
                grid[4][0] = printChar;
                grid[4][1] = printChar;
                grid[4][2] = printChar;
                break;
            case '3':
                grid[0][0] = printChar;
                grid[0][1] = printChar;
                grid[0][2] = printChar;
                grid[1][2] = printChar;
                grid[2][2] = printChar;
                grid[2][1] = printChar;
                grid[2][0] = printChar;
                grid[3][2] = printChar;
                grid[4][0] = printChar;
                grid[4][1] = printChar;
                grid[4][2] = printChar;
                break;
            case '4':
                grid[0][0] = printChar;
                grid[0][2] = printChar;
                grid[1][0] = printChar;
                grid[1][2] = printChar;
                grid[2][2] = printChar;
                grid[2][1] = printChar;
                grid[2][0] = printChar;
                grid[3][2] = printChar;
                grid[4][2] = printChar;
                break;
            case '5':
                grid[0][0] = printChar;
                grid[0][1] = printChar;
                grid[0][2] = printChar;
                grid[1][0] = printChar;
                grid[2][0] = printChar;
                grid[2][1] = printChar;
                grid[2][2] = printChar;
                grid[3][2] = printChar;
                grid[4][0] = printChar;
                grid[4][1] = printChar;
                grid[4][2] = printChar;
                break;
            case '6':
                grid[0][0] = printChar;
                grid[1][0] = printChar;
                grid[2][0] = printChar;
                grid[2][1] = printChar;
                grid[2][2] = printChar;
                grid[3][0] = printChar;
                grid[3][2] = printChar;
                grid[4][0] = printChar;
                grid[4][1] = printChar;
                grid[4][2] = printChar;
                break;
            case '7':
                grid[0][0] = printChar;
                grid[0][1] = printChar;
                grid[0][2] = printChar;
                grid[1][2] = printChar;
                grid[2][2] = printChar;
                grid[3][2] = printChar;
                grid[4][2] = printChar;
                break;
            case '8':
                grid[0][0] = printChar;
                grid[0][1] = printChar;
                grid[0][2] = printChar;
                grid[1][0] = printChar;
                grid[1][2] = printChar;
                grid[2][0] = printChar;
                grid[2][1] = printChar;
                grid[2][2] = printChar;
                grid[3][0] = printChar;
                grid[3][2] = printChar;
                grid[4][0] = printChar;
                grid[4][1] = printChar;
                grid[4][2] = printChar;
                break;
            case '9':
                grid[0][0] = printChar;
                grid[0][1] = printChar;
                grid[0][2] = printChar;
                grid[1][0] = printChar;
                grid[1][2] = printChar;
                grid[2][0] = printChar;
                grid[2][1] = printChar;
                grid[2][2] = printChar;
                grid[3][2] = printChar;
                grid[4][2] = printChar;
                break;
            case '0':
                grid[0][0] = printChar;
                grid[0][1] = printChar;
                grid[0][2] = printChar;
                grid[1][0] = printChar;
                grid[1][2] = printChar;
                grid[2][0] = printChar;
                grid[2][2] = printChar;
                grid[3][0] = printChar;
                grid[3][2] = printChar;
                grid[4][0] = printChar;
                grid[4][1] = printChar;
                grid[4][2] = printChar;
                break;
            case 'all':
                grid[0][0] = printChar;
                grid[0][1] = printChar;
                grid[0][2] = printChar;
                grid[1][0] = printChar;
                grid[1][1] = printChar;
                grid[1][2] = printChar;
                grid[2][0] = printChar;
                grid[2][1] = printChar;
                grid[2][2] = printChar;
                grid[3][0] = printChar;
                grid[3][1] = printChar;
                grid[3][2] = printChar;
                grid[4][0] = printChar;
                grid[4][1] = printChar;
                grid[4][2] = printChar;
                break;

        }
        return screen;
    }

    screen.print = () => {
        console.log('-'.repeat(12))
        for (let i = 0; i < y; i++) {
            let row = '|';
            for (let j = 0; j < x; j++) {
                row += ` ${grid[i][j]} `;
            }
            console.log(row + ' |');
        }
        console.log('-'.repeat(12))
        return screen;
    }

    screen.clear = () => {
        for (let i = 0; i < y; i++) {
            for (let j = 0; j < x; j++) {
                grid[i][j] = ' ';
            }
        }
        // process.stdout.cursorTo(0);

        return screen;
    }

    return screen;
}

module.exports = {
    setup
};