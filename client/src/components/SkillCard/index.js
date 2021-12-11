import React from "react";
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_SKILL } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_ABILITY } from '../../utils/queries'

function SkillCard() {
  const [state, dispatch] = useStoreContext();

  const { data } = useQuery(QUERY_ABILITY)

  return (
    <div className=''>
      {data.map((ability) => (
        <div className=''>
          {ability}
        </div>
      ))}
    </div>
  )
}