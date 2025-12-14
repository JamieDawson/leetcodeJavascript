import React from "react";

const NewStuff = ({ data }) => {
  console.log(data);
  if (Array.isArray(data)) {
    console.log("array found");
    return (
      <div>
        {data.map((item) => (
          <NewStuff data={item} />
        ))}
      </div>
    );
  } else if (typeof data === "object" && data !== null) {
    console.log("object found");
    return (
      <div>
        {Object.entries(data).map((item) => (
          <NewStuff data={item} />
        ))}
      </div>
    );
  } else {
    return <div>{data.name}</div>;
  }
};

/*

if array

else if object   

else (data name)

*/

export function App(props) {
  const data = {
    name: "Tech Innovations Inc.",
    founded: 1998,
    employees: [
      {
        name: "Sarah",
        role: "CEO",
        contact: {
          email: "sarah@techinnovations.com",
          phones: ["555-1111", "555-2222"],
        },
      },
      {
        name: "Miguel",
        role: "CTO",
        skills: ["React", "Node.js", "PostgreSQL"],
        projects: [
          {
            name: "Neon Migration Tool",
            status: "active",
            contributors: [
              { name: "Lana", hoursPerWeek: 20 },
              { name: "Sam", hoursPerWeek: 35 },
            ],
          },
          {
            name: "Collab Engine",
            status: "paused",
          },
        ],
      },
    ],
    offices: [
      {
        city: "San Francisco",
        departments: ["Engineering", "Design", "Support"],
      },
      {
        city: "New York",
        departments: ["Sales", "Marketing"],
      },
    ],
    settings: {
      darkMode: true,
      features: {
        beta: ["new-dashboard", "smart-search"],
        security: {
          "2fa": true,
          allowedDevices: ["laptop", "mobile"],
          lastAudit: {
            date: "2024-09-28",
            issuesFound: 3,
          },
        },
      },
    },
  };

  return (
    <div className="App">
      <NewStuff data={data} />
    </div>
  );
}

// Log to console
console.log("Hello console");
