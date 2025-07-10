const company = {
  name: "TechCorp",
  founded: 2010,
  departments: [
    {
      name: "Engineering",
      employees: [
        {
          id: 1,
          name: "Alice",
          role: "Frontend",
          skills: ["React", "JS", "CSS"],
        },
        { id: 2, name: "Bob", role: "Backend", skills: ["Node.js", "MongoDB"] },
      ],
    },
    {
      name: "HR",
      employees: [
        {
          id: 3,
          name: "Charlie",
          role: "Recruiter",
          skills: ["Communication", "Sourcing"],
        },
      ],
    },
    {
      name: "Design",
      employees: [],
    },
  ],
  meta: {
    "employee-count": 3,
    offices: {
      "San Francisco": { floor: 5, rooms: 12 },
      "New York": { floor: 12, rooms: 20 },
    },
  },
};

//Add a new employee to the Design department.
const addToDesign = (company) => {
  let dep = company.departments;
  // console.log(dep);

  for (var i = 0; i < dep.length; i++) {
    console.log(dep[i].employees);
    if (dep[i].name === "Design") {
      console.log("test");
      dep[i].employees.push("JAMIE");
    }
  }
  console.log(dep);
};

//Number of rooms in New York office
const numberOfRooms = (company) => {
  // console.log(company.meta.offices["New York"].rooms);

  for (let val in company.meta.offices) {
    // console.log(val);
    if (val === "New York") {
      console.log(company.meta.offices[val].rooms);
    }
  }
};

//Make flat array of skills
let flatArray = (company) => {
  let theFlatArray = [];
  let dep = company.departments;

  for (let i = 0; i < dep.length; i++) {
    let current = dep[i].employees;
    // console.log(current);
    for (let j = 0; j < current.length; j++) {
      // console.log(j);
      // console.log(current[j].skills);
      let sk = current[j].skills;
      for (let k = 0; k < sk.length; k++) {
        // console.log(sk[k]);
        theFlatArray.push(sk[k]);
      }
    }
  }
  console.log(theFlatArray);
};

let departmentNames = (company) => {
  console.log(company.departments);
  let depNames = [];

  for (var i = 0; i < company.departments.length; i++) {
    console.log(company.departments[i].name);
    console.log(company.departments[i].employees.length);
    depNames.push([
      company.departments[i].name,
      company.departments[i].employees.length,
    ]);
  }
  console.log(depNames);
};

let EmployeeNames = (company) => {
  // console.log(company.departments);
  let allEmployees = [];

  let d = company.departments;

  for (var i = 0; i < d.length; i++) {
    // console.log(d[i].employees.length);
    for (var j = 0; j < d[i].employees.length; j++) {
      // console.log(d[i].employees[j]);
      allEmployees.push(d[i].employees[j].name);
    }
  }
  console.log(allEmployees);
};

//EmployeeNames(company);
//departmentNames(company);f
//flatArray(company);
//numberOfRooms(company);
//addToDesign(company);

/*
Challenge Ideas
Get all employee names, regardless of department. ==> returns [Alice, Bob, Charlie]

Print each department name and how many employees are in it.

Get a flat array of all skills across the entire company.

Access the number of rooms in the New York office.

Add a new employee to the Design department.

Print each employee's name and what department they're in.
*/
