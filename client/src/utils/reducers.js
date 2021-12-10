import { useReducer } from 'react';
import {
  UPDATE_STAT

} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    
    case UPDATE_STAT:
      return{
        ...state,
        character: state.character.map((stat) => {
          if (action._id === stat._id) {
            stat.statValue = action.statValue;
          }
          return stat;
        }),
      };
      
    default:
      return state;
  }
}

export function useStateReducer(initialState) {
  return useReducer(reducer, initialState)
}