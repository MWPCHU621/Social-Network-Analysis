var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

//finds the person with the most follows and returns their name.
function whoFollowMost(data)
{
  let maxPerson = data["f01"];

  for(let person in data)
  {

    if(data[person].follows.length > maxPerson.follows.length)
    {
      maxPerson = data[person];
    }
  }
  return maxPerson.name;
}
console.log(whoFollowMost(data));