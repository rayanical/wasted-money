const cost = document.getElementById('money');
const title = document.getElementById('title');
let dob = new Date('07/22/1962');
let count;
setInterval(add, 1000);

function add() {
    let now = Date.now() - dob.getTime();
    let smoke_length = now / 1000 - 819936000;
    count = smoke_length * 0.00015578703;
    cost.innerHTML = count.toLocaleString('en-US', { maximumFractionDigits: 2 });
    title.innerHTML = '$' + count.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

// compound cash
const investment = document.getElementById('investment');
setInterval(invest, 1000);

function invest() {
    let now1 = Date.now() - dob.getTime();
    let smoke_length1 = now1 / 1000 - 819936000;
    let years = smoke_length1 / 31536000;
    let final = 13.46 * 1.105 ** years + (4916.16 * (1.105 ** years - 1)) / 0.105;
    investment.innerHTML = final.toLocaleString('en-US', { maximumFractionDigits: 2 });
}
