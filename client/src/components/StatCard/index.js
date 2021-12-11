import React from "react";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_STAT } from "../../utils/actions";

function StatCard(charInfo) {
  const [state, dispatch] = useStoreContext();

  const {
    _id,
    constitution,
    dexterity,
    strength,
    wisdom,
    charisma,
    intelligence
    // class
  } = charInfo;

  const { character } = state;

  const statChange = () => {
    const statForCharacter = character.find((charStat) => charStat._id === _id)
      dispatch({
        type: UPDATE_STAT,
        _id: _id,
        statValue: parseInt(statForCharacter.statValue) 
      })
  }

  return (
    <div className="">
      <div>
        <p>{constitution}:</p>
        <div>
          <button onClick={statChange}>-</button>
          <div>0</div>
          <button onClick={statChange}>+</button>
        </div>
      </div>
      <div>
        <p>{dexterity}:</p>
        <div>
          <button onClick={statChange}>-</button>
          <div>0</div>
          <button onClick={statChange}>+</button>
        </div>
      </div>
      <div>
        <p>{strength}:</p>
        <div>
          <button onClick={statChange}>-</button>
          <div>0</div>
          <button onClick={statChange}>+</button>
        </div>
      </div>
      <div>
        <p>{wisdom}:</p>
        <div>
          <button onClick={statChange}>-</button>
          <div>0</div>
          <button onClick={statChange}>+</button>
        </div>
      </div>
      <div>
        <p>{charisma}:</p>
        <div>
          <button onClick={statChange}>-</button>
          <div>0</div>
          <button onClick={statChange}>+</button>
        </div>
      </div>
      <div>
        <p>{intelligence}:</p>
        <div>
          <button onClick={statChange}>-</button>
          <div>0</div>
          <button onClick={statChange}>+</button>
        </div>
      </div>
    </div>
  )
}

export default StatCard;