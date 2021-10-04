let screen = require('./screen');
screen = screen.setup(3, 5);

async function init() {
    console.clear();
    screen.set('n').print().clear();
    await sleep(1000);
    console.clear();
    screen.set('r').print().clear();
    await sleep(1000);
    console.clear();
    screen.set('1').print().clear();
    await sleep(1000);
    console.clear();
    screen.set('2').print().clear();
    await sleep(1000);
    console.clear();
    screen.set('3').print().clear();
    await sleep(1000);
    console.clear();
    screen.set('4').print().clear();
    await sleep(1000);
    console.clear();
    screen.set('5').print().clear();
    await sleep(1000);
    console.clear();
    screen.set('6').print().clear();
    await sleep(1000);
    console.clear();
    screen.set('7').print().clear();
    await sleep(1000);
    console.clear();
    screen.set('8').print().clear();
    await sleep(1000);
    console.clear();
    screen.set('9').print().clear();
    await sleep(1000);
    console.clear();
    screen.set('all').print().clear();
    await sleep(1000);
    console.clear();
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
init();

// screen = screen.setup(3, 5);
/*
screen.set('n').print().clear();
screen.set('r').print().clear();
screen.set('1').print().clear();
screen.set('2').print().clear();
screen.set('3').print().clear();
screen.set('4').print().clear();
screen.set('5').print().clear();
screen.set('6').print().clear();
screen.set('7').print().clear();
screen.set('8').print().clear();
screen.set('9').print().clear();
screen.set('0').print().clear();
screen.set('all').print().clear();
*/