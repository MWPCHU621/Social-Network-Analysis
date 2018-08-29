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


//FUNCTIONS TO IMPLEMENT


//finds the person with the most follows and returns their name.
//Identify who follows the most people
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
//List everyone and for each of them, list the names of who they follow and who follows them
function followAndFollowerInfo(data)
{
  let people = {};
  for(let person in data)
  {
    people[data[person].name] = {};
    people[data[person].name]["followers"] = findFollower(data, person);
    people[data[person].name]["follows"] = findFollows(data, person);

  }
  return people;
}
//console.log(followAndFollowerInfo(data));

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
  return followers;
}

//finds the names of the people followed and returns an array with all the followed person's name. name is the object person eg. f01.
function findFollows(data, name)
{
  let follows = [];
  for(let person in data)
  {
    if(person === name)
    {
      for(let i = 0; i < data[person].follows.length; i++)
      {
        followed = data[person].follows[i];
        follows.push(data[followed].name);
      }
    }
  }
  return follows;
}



//finds the person who has the most followers and return their name.
function mostFollowers(data)
{
  let maxFollowerCount;;
  let allFollowers = {};
  let result = [];
  for(let person in data)
  {
    allFollowers[data[person].name] = findFollower(data, person).length;
  }
  //console.log(allFollowers);

  //determines the most followerCount.
  maxFollowerCount = mostFollowerCount(allFollowers);
  for(let person in allFollowers)
  {
    if(allFollowers[person] == maxFollowerCount)
    {
      result.push(person);
    }
  }
  return result;

}

//given a nested object followerCount of name:followerCount, return the max followerCount.
function mostFollowerCount(followerCount)
{
  let maxFollowerCount = findFollower(data, "f01").length;
  for(let person in followerCount)
  {
    if(followerCount[person] > maxFollowerCount)
    {
      maxFollowerCount = followerCount[person];
    }
  }
  return maxFollowerCount;
}
console.log(mostFollowers(data));
