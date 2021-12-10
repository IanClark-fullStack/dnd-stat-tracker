import React from "react";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_STAT, UPDATE_ABILITY } from "../../utils/actions";

function Stat() {
  const [state, dispatch] = useStoreContext();

  const{
    name,
    _id,
    value
  } = stat;

  const { character } = state

  const statChange = () => {
    const statForCharacter = character.find((stat) => state._id === _id)
    if (statForCharacter) {
      dispatch({
        type: UPDATE_STAT,
        _id: _id,
        statValue: parseInt(statForCharacter.statValue) 
      })
    }
  }

  return (
    <div className="">
      <p>{name}</p>
      <div>
        <button onClick={statChange}>-</button>
        <div>{value}</div>
        <button onClick={statChange}>+</button>
      </div>
    </div>
  )
}

export default Stat;