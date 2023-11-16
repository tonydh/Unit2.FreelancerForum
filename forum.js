const availableFreelancers = [
    {
        name: `Alice`,
        job: `Writer`,
        rate: 125,
    },
    {
        name: `March Hare`,
        job: `Illustrator`,
        rate: 75,
    },
    {
        name: `Mad Hatter`,
        job: `Developer`,
        rate: 50,
    },
    {
        name: `Cheshire Cat`,
        job: `Sitter`,
        rate: 200,
    },
    {
        name: `Dormouse`,
        job: `Singer`,
        rate: 150,
    },
    {
        name: `Caterpillar`,
        job: `Speech Writer`,
        rate: 100,
    },
];

const freelancersContainer = document.querySelector("#freelancers-container");

function createFreelancer(name, job, rate) {
    const freelancers = document.createElement("div");
    freelancers.classList.add("freelancers");

    const freelancerName = document.createElement("span");
    freelancerName.textContent = name;
    const freelancerJob = document.createElement("span");
    freelancerJob.textContent = job;
    const freelancerRate = document.createElement("span");
    freelancerRate.textContent = rate;

    freelancers.append(freelancerName, freelancerJob, freelancerRate);

    return freelancers;

};

function addFreelancer(availableFreelancers) {
    let freelancer = [];

    for(let i = 0; i < availableFreelancers.length; i++) {
        const current = availableFreelancers[i];
        freelancer.push(createFreelancer(current.name, current.job, current.rate));
    }

    return freelancer;
}

freelancersContainer.append(...addFreelancer(availableFreelancers));