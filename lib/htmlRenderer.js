const fs = require('fs');
const path = require('path');

const genCards = path.resolve(__dirname, "../src");

const render = employees => {
    const makeHtml = [];

    makeHtml.push(employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => makeManager(manager))
    );
    makeHtml.push(employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => makeEngineer(engineer))
    );
    makeHtml.push(employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => makeIntern(intern))
    );

        return mainHtml(makeHtml.join(""));
};

// creating the placeholder so we can use them in our cards and main html
const placeHolders = (generate, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return generate.replace(pattern, value);
};

// place holders that are set for each employee
const makeManager = manager => {
    let generate = fs.readFileSync(path.resolve(genCards, "manager.html"), "utf-8");
    generate = placeHolders(generate, "name", manager.getName());
    generate = placeHolders(generate, "role", manager.getRole());
    generate = placeHolders(generate, "email", manager.getEmail());
    generate = placeHolders(generate, "id", manager.getId());
    generate = placeHolders(generate, "officeNumber", manager.getOfficeNumber());
    return generate;
};
// place holders that are set for each employee
const makeEngineer = engineer => {
    let generate = fs.readFileSync(path.resolve(genCards, "engineer.html"), "utf-8");
    generate = placeHolders(generate, "name", engineer.getName());
    generate = placeHolders(generate, "role", engineer.getRole());
    generate = placeHolders(generate, "email", engineer.getEmail());
    generate = placeHolders(generate, "id", engineer.getId());
    generate = placeHolders(generate, "github", engineer.getGithub());
    return generate;
};
// place holders that are set for each employee
const makeIntern = intern => {
    let generate = fs.readFileSync(path.resolve(genCards, "intern.html"), "utf-8");
    generate = placeHolders(generate, "name", intern.getName());
    generate = placeHolders(generate, "role", intern.getRole());
    generate = placeHolders(generate, "email", intern.getEmail());
    generate = placeHolders(generate, "id", intern.getId());
    generate = placeHolders(generate, "school", intern.getSchool());
    return generate;
};

const mainHtml = html => {
    const generate = fs.readFileSync(path.resolve(genCards, "main.html"), "utf-8");
    return placeHolders(generate, "team-members", html);
};

// exporting the function render
module.exports = render