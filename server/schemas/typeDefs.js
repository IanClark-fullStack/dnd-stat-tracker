const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
    isAdmin: Boolean
    characters: Character
}

type Character {
    _id: ID
    level: Int
    name: String
    user: User
    characterStats: Stat
    abilityScores: Ability
    class: Class


    # constitution: Int
    # dexterity: [Dexterity]
    # strength: [Strength]
    # wisdom: [Wisdom]
    # charisma: [Charisma]
    # intelligence: [Intelligence]
    # class: String
}

type Ability {
    character: Character
    shortName: String
    fullName: String
    desc: [String]
    scoreTotal: Int
    modifier: String
    savingThrow: String
    skills: Skill
}

type Skill {
    ability: Ability 
    name: String
    scoreTotal: Int
    desc: [String]
}

type Stat {
    user: User
    initiative: Int
    HP: Int
    speed: Int
    hitDice: Int
    armor: Int
    proficiency: String
}
type Class {
    abilities: Ability
    name: String
    hitDie: Int
    savingThrows: [String]
}

# type Dexterity {
#     acrobatics: Int
#     sleightOfHand: Int
#     stealth: Int
#     dexTotal: Int  
# }

# type Strength {
#     athletics: Int
#     strTotal: Int 
# }

# type Wisdom {
#     animalHandling: Int
#     insight: Int
#     medicine: Int
#     perception: Int
#     survival: Int
#     wisTotal: Int
# }

# type Charisma {
#     deception: Int
#     intimidation: Int
#     performance: Int
#     persuasion: Int
#     chaTotal: Int
# }

# type Intelligence {
#     arcana: Int
#     history: Int
#     investigation: Int
#     nature: Int
#     religion: Int
#     intTotal: Int
# }

# type Barbarian {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }
# type Paladin {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }
# type Bard {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }
# type Ranger {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }
# type Cleric {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }
# type Rogue {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }
# type Druid {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }
# type Sorcerer {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }
# type Fighter {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }
# type Warlock {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }
# type Monk {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }
# type Wizard {
#     _id: ID
#     constitution: Int 
#     dexterity: Int
#     strength: Int
#     wisdom: Int
#     charisma: Int
#     intelligence: Int
# }

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user: User
    characters: [Character] 
    abilities: [Ability]
    stats: [Stat]
}

type Mutation {
    addUser(username: String!, email: String!, password: String!, isAdmin: Boolean!): Auth
    updateUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
}

`

module.exports = typeDefs;