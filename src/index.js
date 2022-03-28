const first = { name: "Moni" };
const second = { job: "fr" };

const combined = { ...first, ...second, location: "Pune" };
console.log(combined);
