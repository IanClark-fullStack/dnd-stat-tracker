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

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      password
      isAdmin
      characters {
        _id
        level
        name
        characterStats {
          initiative
          HP
          speed
          hitDice
          armor
          proficiency
        }
      }
      
    }
  }
`;

export const QUERY_CHARACTERS = gql`
  {
    characters {
      _id
      name
      level
      characterStats {
        initiative
        HP
        speed
        hitDice
        armor
        proficiency
      }
      abilityScores {
        shortName
        fullName
        desc
        scoreTotal
        modifier
        savingThrow
        skills {
          name
          scoreTotal
          desc
        }
      }
      class {
        name
        hitDie
        savingThrows
      }
    }
  }
`;

export const QUERY_ABILITIES = gql`
  query queryAbilities {
    abilities {
      character {
        name
      }
      shortName
      fullName
      desc
      scoreTotal
      modifier
      savingThrow
      skills {
        name
      }
    }
  }
`;

export const QUERY_STATS = gql`
  query queryStats {
    stats {
      user {
        _id
      }
      initiative
      HP
      speed
      hitDice
      armor
      proficiency
    }
  }
`;