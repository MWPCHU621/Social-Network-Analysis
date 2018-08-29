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
//console.log(whoFollowMost(data));

//list the names of everyone as well as the names of who follows them and who they follow.
function followAndFollowerInfo(data)
{
  let people = {};
  for(person in data)
  {
    people[data[person].name] = {};
    people[data[person].name]["followers"] = findFollower(data, person);
    people[data[person].name]["follows"] =

  }
  console.log(people);
}
followAndFollowerInfo(data);

//finds the followers of name in data and returns an array with all the follower's name. name is the object person eg. f01.
function findFollower(data, name)
{
  let followers = [];
  for(let person in data)
  {
    if(data[person].follows.includes(name))
    {
      followers.push(data[person].name);
    }
  }
  //console.log(followers);
  return followers;
}



