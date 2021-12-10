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
        scoreTotal: 10,
        modifier: '+1',
        savingThrow: '-4',
        skills: ['Athletics']
    },
    {
      character: characters[0]._id,
      shortName: 'DEX',
      fullName: 'Dexterity', 
      desc: ["Dexterity measures agility, reflexes, and balance.",
      "A Dexterity check can model any attempt to move nimbly, quickly, or quietly, or to keep from falling on tricky footing. The Acrobatics, Sleight of Hand, and Stealth skills reflect aptitude in certain kinds of Dexterity checks."],
      scoreTotal: 10,
      modifier: '+1',
      savingThrow: '-4',
      skills: ['Acrobatics', 'Sleight of Hand', 'Stealth']
    },
    {
      character: characters[0]._id,
      shortName: 'CON',
      fullName: 'Constitution', 
      desc: ["Constitution measures health, stamina, and vital force.",
      "Constitution checks are uncommon, and no skills apply to Constitution checks, because the endurance this ability represents is largely passive rather than involving a specific effort on the part of a character or monster."],
      scoreTotal: 10,
      modifier: '+1',
      savingThrow: '-4',
      skills: []
  },
  {
    character: characters[0]._id,
    shortName: 'INT',
    fullName: 'Intelligence', 
    desc: ["Intelligence measures mental acuity, accuracy of recall, and the ability to reason.",
    "An Intelligence check comes into play when you need to draw on logic, education, memory, or deductive reasoning. The Arcana, History, Investigation, Nature, and Religion skills reflect aptitude in certain kinds of Intelligence checks."],
    scoreTotal: 10,
    modifier: '+1',
    savingThrow: '-4',
    skills: ["Arcana", "History", "Investigation", "Nature", "Religion"]
  },
  {
    character: characters[0]._id,
    shortName: 'WIS',
    fullName: 'Wisdom', 
    desc: ["Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition.",
    "A Wisdom check might reflect an effort to read body language, understand someone's feelings, notice things about the environment, or care for an injured person. The Animal Handling, Insight, Medicine, Perception, and Survival skills reflect aptitude in certain kinds of Wisdom checks."],
    scoreTotal: 10,
    modifier: '+1',
    savingThrow: '-4',
    skills: ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"]
  },
  {
    character: characters[0]._id,
    shortName: 'CHA',
    fullName: 'Charisma', 
    desc: ["Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.",
    "A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks."],
    scoreTotal: 10,
    modifier: '+1',
    savingThrow: '-4',
    skills: ["Deception", "Intimidation", "Performance", "Persuasion"]
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


