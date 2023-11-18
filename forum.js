const state = {
    averageRate: 50,
    freelancers: [
        {
            name: `Alice`,
            occupation: `Writer`,
            rate: 30,
        },
        {
            name: `Bob`,
            occupation: `Teacher`,
            rate: 50,
        },
        {
            name: `Carol`,
            occupation: `Programmer`,
            rate: 70,
        },
    ],
}

function updateAverageRate() {
    total = 0;
    
    for(let i = 0; i < state.freelancers.length; i++) {
        const currentFreelancer = state.freelancers[i];
        total += currentFreelancer.rate;
    }

    state.averageRate = Math.round(total / state.freelancers.length);
}

function addFreelancerRow(freelancer){
    state.freelancers.push(freelancer);
}

function createFreelancerRow(freelancer) {
    const tableRow = document.createElement(`tr`);

    const nameInfo = document.createElement(`td`);
    const occupationInfo = document.createElement(`td`);
    const rateInfo = document.createElement(`td`);

    nameInfo.textContent = freelancer.name;
    occupationInfo.textContent = freelancer.occupation;
    rateInfo.textContent = freelancer.rate;

    tableRow.append(nameInfo, occupationInfo, rateInfo);

    return tableRow;
}

function clearTable() {
    const table = document.getElementById(`freelancer-table`);

    while(table.childNodes.length) {
        table.removeChild(table.childNodes[0]);
    };
}


function render() {
    //  clears current table and starts a fresh table
    clearTable();

    const table = document.getElementById(`freelancer-table`);

    for(let i = 0; i < state.freelancers.length; i++) {
        const currentFreelancer = state.freelancers[i]; 
        const row = createFreelancerRow(currentFreelancer);
        table.appendChild(row);
    }

    // update the average rate after adding new freelancers
    updateAverageRate();

    const rateText = document.getElementById(`average-rate`);
    rateText.textContent = `The average starting rate is $${state.averageRate}.`;
}

render();

const freshNames = [`Mad Hatter`, `March Hare`, `Dormouse`, `White Rabbit`, `Cheshire Cat`, `Caterpillar`, `Tweedledee`, `Tweedledum`, `Dinah`];
const freshOccupations = [`Singer`, `Dancer`, `Photographer`, `Illustrator`, `Speaker`, `Carpenter`, `Electrician`, `Sitter`, `Bouncer`];
const freshRates = [50, 25, 90, 150, 200, 35, 40, 75, 80];

function createRandomFreelancer() {
    const randomName = freshNames[Math.floor(Math.random() * freshNames.length)];
    const randomOccupation = freshOccupations[Math.floor(Math.random() * freshOccupations.length)];
    const randomRate = freshRates[Math.floor(Math.random() * freshRates.length)];

    const freelancer = {
        name: randomName,
        occupation: randomOccupation,
        rate: randomRate,
    };

    return freelancer;
}

setInterval(function() {
    const newFreelancer = createRandomFreelancer();
    addFreelancerRow(newFreelancer);

    render();
}, 3000);