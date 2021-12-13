import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  {
    users {
      _id
      email
      password
      username
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  {
    characters {
      _id
      level
      name
      user
      characterStats
      abilityScores
      class
      # class
    }
  }
`;

export const QUERY_ABILITIES = gql`
  {
    abilities {
      _id
      character
      shortName
      fullName
      desc
      scoreTotal
      modifier
      savingThrow
      skills
    }
  }
`;

export const QUERY_STATS = gql`
  {
    stats {
      user
      initiative
      HP
      speed
      hitDice
      armor
      proficiency
    }
  }
`;