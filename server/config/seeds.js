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

    await Skill.deleteMany();
    const skills = await Skill.insertMany([
        {
            // Belongs to Strength Ability 
            name: 'Athletics', 
            scoreTotal: 4,
            desc: ["Your Strength (Athletics) check covers difficult situations you encounter while climbing, jumping, or swimming."],
            
        },
        {   // Belongs to Dexterity Ability 
            name: 'Acrobatics',
            scoreTotal: '6', 
            desc: ['Your Dexterity (Acrobatics) check covers your attempt to stay on your feet in a tricky situation', 'such as when you\nre trying to run across a sheet of ice, balance on a tightrope, or stay upright on a rocking ship\ns deck.', 'The GM might also call for a Dexterity (Acrobatics) check to see if you can perform acrobatic stunts, including dives, rolls, somersaults, and flips.'],     
        },
        {   // Belongs to Dexterity Ability 
            name: 'Sleight of Hand',
            scoreTotal: '4', 
            desc: ["Whenever you attempt an act of legerdemain or manual trickery, such as planting something on someone else or concealing an object on your person, make a Dexterity (Sleight of Hand) check.", "The GM might also call for a Dexterity (Sleight of Hand) check to determine whether you can lift a coin purse off another person or slip something out of another person's pocket."]     
        },
        {   // Belongs to Dexterity Ability 
            name: 'Stealth',
            scoreTotal: '2', 
            desc: ["Make a Dexterity (Stealth) check when you attempt to conceal yourself from enemies", "slink past guards, slip away without being noticed, or sneak up on someone without being seen or heard."],     
        },
        {   // Belongs to Intelligence Ability 
            name: 'Arcana',
            scoreTotal: '4', 
            desc: ["Your Intelligence (Arcana) check measures your ability to recall lore about spells.", "Magic items, eldritch symbols, magical traditions, the planes of existence, and the inhabitants of those planes."],     
        },
        {   // Belongs to Intelligence Ability 
            name: 'History',
            scoreTotal: '5', 
            desc: ["Your Intelligence (History) check measures your ability to recall lore about historical events, legendary people, ancient kingdoms, past disputes, recent wars, and lost civilizations."],     
        },
        {   // Belongs to Intelligence Ability 
            name: 'Investigation',
            scoreTotal: '5', 
            desc: ["When you look around for clues and make deductions based on those clues, you make an Intelligence (Investigation) check.", "You might deduce the location of a hidden object, discern from the appearance of a wound what kind of weapon dealt it, or determine the weakest point in a tunnel that could cause it to collapse.", "Poring through ancient scrolls in search of a hidden fragment of knowledge might also call for an Intelligence (Investigation) check."],     
        },
        {  // Belongs to Intelligence Ability 
            name: 'Religion',
            scoreTotal: '3', 
            desc: ["Your Intelligence (Religion) check measures your ability to recall lore about deities, rites and prayers, religious hierarchies, holy symbols, and the practices of secret cults."],     
        },
        {  // Belongs to Wisdom Ability 
            name: 'Animal Handling',
            scoreTotal: '9', 
            desc: ["When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal's intentions, the GM might call for a Wisdom (Animal Handling) check.", "You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver."]     
        },
        {  // Belongs to Wisdom Ability 
            name: 'Insight',
            scoreTotal: '4', 
            desc: ["Your Wisdom (Insight) check decides whether you can determine the true intentions of a creature, such as when searching out a lie or predicting someone's next move.", "Doing so involves gleaning clues from body language, speech habits, and changes in mannerisms."],     
        },
        {  // Belongs to Wisdom Ability 
            name: 'Medicine',
            scoreTotal: '2', 
            desc: ["A Wisdom (Medicine) check lets you try to stabilize a dying companion or diagnose an illness."],     
        },
        {   // Belongs to Wisdom Ability 
            name: 'Perception',
            scoreTotal: '7', 
            desc: ["Your Wisdom (Perception) check lets you spot, hear, or otherwise detect the presence of something. It measures your general awareness of your surroundings and the keenness of your senses.", "For example, you might try to hear a conversation through a closed door, eavesdrop under an open window, or hear monsters moving stealthily in the forest.", "Or you might try to spot things that are obscured or easy to miss, whether they are orcs lying in ambush on a road, thugs hiding in the shadows of an alley, or candlelight under a closed secret door."]     
        },
        {   // Belongs to Wisdom Ability 
            name: 'Survival',
            scoreTotal: '1', 
            desc: ["The GM might ask you to make a Wisdom (Survival) check to follow tracks, hunt wild game, guide your group through frozen wastelands, identify signs that owlbears live nearby, predict the weather, or avoid quicksand and other natural hazards."],     
        },
        {   // Belongs to Charisma Ability 
            name: 'Deception',
            scoreTotal: '4', 
            desc: ["Your Charisma (Deception) check determines whether you can convincingly hide the truth, either verbally or through your actions. This deception can encompass everything from misleading others through ambiguity to telling outright lies.", "Typical situations include trying to fast- talk a guard, con a merchant, earn money through gambling, pass yourself off in a disguise, dull someone's suspicions with false assurances, or maintain a straight face while telling a blatant lie."],     
        },
        {   // Belongs to Charisma Ability 
            name: 'Intimidation',
            scoreTotal: '5', 
            desc: ["When you attempt to influence someone through overt threats, hostile actions, and physical violence, the GM might ask you to make a Charisma (Intimidation) check.", "Examples include trying to pry information out of a prisoner, convincing street thugs to back down from a confrontation, or using the edge of a broken bottle to convince a sneering vizier to reconsider a decision."],     
        },
        {   // Belongs to Charisma Ability 
            name: 'Performance',
            scoreTotal: '9', 
            desc: ["Your Charisma (Performance) check determines how well you can delight an audience with music, dance, acting, storytelling, or some other form of entertainment."],     
        },
        {   // Belongs to Charisma Ability 
            name: 'Persuasion',
            scoreTotal: '8', 
            desc: ["When you attempt to influence someone or a group of people with tact, social graces, or good nature, the GM might ask you to make a Charisma (Persuasion) check.", "Typically, you use persuasion when acting in good faith, to foster friendships, make cordial requests, or exhibit proper etiquette.", "Examples of persuading others include convincing a chamberlain to let your party see the king, negotiating peace between warring tribes, or inspiring a crowd of townsfolk."],     
        },  

    ]);
    console.log('______________    Skills Seeded    ______________');



    await Ability.deleteMany();

    const abilities = await Ability.insertMany([
        {
            // character: characters[0]._id,
            shortName: 'STR',
            fullName: 'Strength', 
            desc: ["Strength measures bodily power, athletic training, and the extent to which you can exert raw physical force.",
            "A Strength check can model any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation. The Athletics skill reflects aptitude in certain kinds of Strength checks."],
            scoreTotal: 14,
            modifier: '+3',
            savingThrow: '-1',
            skills: [skills[0]._id],
        },
        {
            shortName: 'DEX',
            fullName: 'Dexterity', 
            desc: ["Dexterity measures agility, reflexes, and balance.",
            "A Dexterity check can model any attempt to move nimbly, quickly, or quietly, or to keep from falling on tricky footing. The Acrobatics, Sleight of Hand, and Stealth skills reflect aptitude in certain kinds of Dexterity checks."],
            scoreTotal: 10,
            modifier: '+1',
            savingThrow: '-4',
            skills: [
                skills[1]._id, 
                skills[2]._id, 
                skills[3]._id 
            ]
        },
        {
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
            shortName: 'INT',
            fullName: 'Intelligence', 
            desc: ["Intelligence measures mental acuity, accuracy of recall, and the ability to reason.",
            "An Intelligence check comes into play when you need to draw on logic, education, memory, or deductive reasoning. The Arcana, History, Investigation, Nature, and Religion skills reflect aptitude in certain kinds of Intelligence checks."],
            scoreTotal: 10,
            modifier: '+1',
            savingThrow: '-4',
            skills: [
                skills[4]._id, 
                skills[5]._id, 
                skills[6]._id, 
                skills[7]._id 
            ]
        },
        {
            shortName: 'WIS',
            fullName: 'Wisdom', 
            desc: ["Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition.",
            "A Wisdom check might reflect an effort to read body language, understand someone's feelings, notice things about the environment, or care for an injured person. The Animal Handling, Insight, Medicine, Perception, and Survival skills reflect aptitude in certain kinds of Wisdom checks."],
            scoreTotal: 10,
            modifier: '+1',
            savingThrow: '-4',
            skills: [
                skills[8]._id, 
                skills[9]._id, 
                skills[10]._id, 
                skills[11]._id,
                skills[12]._id
            ]
        },
        {
            shortName: 'CHA',
            fullName: 'Charisma', 
            desc: ["Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.",
            "A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation. The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks."],
            scoreTotal: 10,
            modifier: '+1',
            savingThrow: '-4',
            skills: [
                skills[13]._id, 
                skills[14]._id, 
                skills[15]._id, 
                skills[16]._id
            ]
        },
    ]);
    console.log('______________    Abilities Seeded    ______________');



    await Stat.deleteMany();

    const stats = await Stat.insertMany([
        {
            initiative: 2,
            HP: 2,
            speed: 2,
            hitDice: 2,
            armor: 12,
            proficiency: '+2'
        }, 
        {
                initiative: 6,
                HP: 4,
                speed: 4,
                hitDice: 6,
                armor: 11,
                proficiency: '+7' 
        }, 
        {
                initiative: 3,
                HP: 6,
                speed: 4,
                hitDice: 5,
                armor: 8,
                proficiency: '+8'
        }, 
        {
                initiative: 1,
                HP: 4,
                speed: 4,
                hitDice: 3,
                armor: 8,
                proficiency: '+4'

        }, 
        {
                initiative: 4,
                HP: 3,
                speed: 5,
                hitDice: 3,
                armor: 8,
                proficiency: '+5'
        }, 
    ]);
    console.log('______________    Stats Seeded    ______________');




    await Class.deleteMany();
    const classes = await Class.insertMany([
        {
            name: 'Barbarian',
            hitDie: 8,
            savingThrows: ['Strength', 'Constitution'],
        }, 
        {
            name: 'Bard',
            hitDie: 8,
            savingThrows: ['Dexterity', 'Charisma'],
        }, 
        {
            name: 'Warlock',
            hitDie: 8,
            savingThrows: ['Wisdom', 'Charisma'],
        }, 
        {
            name: 'Paladin',
            hitDie: 10,
            savingThrows: ['Wisdom', 'Charisma'],
        }, 
        {
            name: 'Ranger',
            hitDie: 10,
            savingThrows: ['Strength', 'Dexterity'],
        }, 
        {
            name: 'Druid',
            hitDie: 8,
            savingThrows:['Intelligence', 'Constitution'],
        }, 
    ]);
    console.log('______________    Classes Seeded    ______________');


    
    await User.deleteMany();
    const users = await User.insertMany([
        {
            username: 'DmForever',
            email: 'root@admin.com',
            password: 'rootadmin',
            isAdmin: true,
        }, 
        {
            username: 'paladin_simp',
            email: 'paladin_simp@test.com',
            password: 'password123',
        }, 
        {
            username: 'sadboi_sorcerer',
            email: 'sadboi@test.com',
            password: 'password1234',
        }, 
        {
            username: 'magicIsDead',
            email: 'magicIsDead@test.com',
            password: 'password12345',
        }, 
        {
            username: 'overly_postive',
            email: 'overly_postive@test.com',
            password: 'password123456',
        }, 
        {
            username: 'warlock_barbee',
            email: 'warlock_barbee@test.com',
            password: 'password1234567',
        }, 
        
    ])

    console.log('______________    Users Seeded    ______________');


    await Character.deleteMany();

    const characters = await Character.insertMany([
        { 
            user: users[1]._id,
            name: 'Dracoiris',
            level: 5,
            abilityScores: abilities[0]._id,
            class: classes[0]._id,
            characterStats: stats[0]._id
        },
        { 
            user: users[2]._id,
            name: 'Xyrerris Shortcloak',
            level: 3,
            abilityScores: abilities[1]._id,
            class: classes[1]._id,
            characterStats: stats[1]._id
        },
        { 
            user: users[3]._id,
            name: 'Hollydove Soldshort',
            level: 1,
            class: classes[2]._id,
            abilityScores: abilities[2]._id,
            characterStats: stats[2]._id
        },
        { 
            user: users[4]._id,
            name: 'Maraga',
            level: 7,
            class: classes[3]._id,
            abilityScores: abilities[3]._id,
            characterStats: stats[3]._id
        },
        { 
            user: users[5]._id,
            name: 'Zeddicus Zul Zorander',
            level: 2,
            abilityScores: abilities[0]._id,
            class: classes[4]._id,
            characterStats: stats[4]._id
        },
    
    ]);

    console.log('______________    Characters Seeded    ______________');




    process.exit();
});










