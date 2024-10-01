const localNameFinder = (email) => {
  let localArray = [];

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "+" || email[i] === "@") break;

    if (email[i] >= "a" && email <= "z") {
      localArray.push(email[i]);
    }
  }

  return localArray.join("");
};

const domaineNameFinder = (email) => {
  let domainArray = [];

  for (let i = email.length - 1; i >= 0; i--) {
    if (email[i] === "@") {
      domainArray.push(email[i]);
      break;
    }
    domainArray.push(email[i]);
  }
  return domainArray.reverse().join("");
};

var numUniqueEmails = function (emails) {
  //Create object
  let emailsObject = {};

  //loop for emails array
  //fucntion for finding values in local

  //funciton for finding vlaues in domain

  //function for combining the two

  //check object for duplicates function
  for (let email of emails) {
    let currentLocalName = localNameFinder(email);
    let currentDomainName = domaineNameFinder(email);
    let combinedValues = currentLocalName + currentDomainName;
    // console.log(combinedValues)

    if (!emailsObject[combinedValues]) {
      emailsObject[combinedValues] = 1;
    } else {
      emailsObject[combinedValues]++;
    }
  }

  return Object.keys(emailsObject).length;
};
