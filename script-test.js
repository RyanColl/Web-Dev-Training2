
let data = [];
const newUser = {
    name: `Ryan Collicutt`,
    money: Math.floor(Math.random() *10000000)
  };
  const newUser1 = {
    name: `Ryan Collicutt`,
    money: Math.floor(Math.random() *10000000)
  };
  console.log(newUser);

  data.push(newUser);
  data.push(newUser1);
  console.log(data);
  console.log(newUser.money)
  let reducedData = data.reduce( (sum, { money }) => sum + money, 0);  
  console.log(filteredData)
  