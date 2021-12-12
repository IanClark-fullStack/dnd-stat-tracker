import { useReducer } from 'react';
import {
  UPDATE_STAT,
  UPDATE_SKILL
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    
    case UPDATE_STAT:
      return {
        ...state,
        character: state.character.map((stat) => {
          if (action._id === stat._id) {
            stat.statValue = action.statValue;
          }
          return stat;
        }),
      };
    
    case UPDATE_SKILL:
      return {
        ...state,
        skill: state.skill.map((ability) => {
          if (action._id === ability._id) {
            ability.abilityValue = action.abilityValue;
          }
          return ability;
        }),
      };

    default:
      return state;
  }
}

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}