const db = require('./connection');
const { 
    User, 
    Character, 
    Ability,
    Skill, 
    Stat, 
    Class
} = require('../models');

db.once('open', async () => {
await Character.deleteMany();

  const characters = await Character.insertMany([
    { 
        name: 'Dracoiris',
        level: 5,
        characterStats: 
    },
    { 
        name: 'Xyrerris Shortcloak',
        level: 3,
        characterStats: 
    },
    { 
        name: 'Hollydove Soldshort',
        level: 1,
        characterStats: 
    },
    { 
        name: 'Maraga',
        level: 7,
        characterStats: 
    },
    { 
        name: 'Zeddicus Zul Zorander',
        level: 2,
        characterStats: 
    },
    
  ]);

console.log('______________    Characters Seeded    ______________');


await Ability.deleteMany();

  const abilities = await Ability.insertMany([
    {
        character: characters[0]._id,
        shortName: 'STR',
        fullName: 'Strength', 
        desc: ["Strength measures bodily power, athletic training, and the extent to which you can exert raw physical force.",
        "A Strength check can model any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation. The Athletics skill reflects aptitude in certain kinds of Strength checks."],
        scoreTotal: 14,
        modifier: '+3',
        savingThrow: '-1',
        skills: ['Athletics']
    },


]);
await Skill.deleteMany();

const skills = await Skill.insertMany([
    {
        ability: abilities[0]._id, 
        name: 'Athletics', 
        scoreTotal: 4,
        desc: ["Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming."],
        savingThrow: 
    }, 

    

]);

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});




// console.log('______________    Admin + Users Seeded    ______________');






// console.log('______________    DATABASE Seeded    ______________');


