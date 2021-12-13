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
      constitution
      dexterity
      strength
      wisdom
      charisma
      intelligence
      # class
    }
  }
`;

// export const QUERY_SKILLS = gql`

// `;