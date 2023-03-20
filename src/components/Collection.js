import React from 'react';
import { NavLink } from 'react-router-dom';
import { collectionData } from '../App';

export default function Collection() {
  return (
    <div>
      <div id="nav">
        <NavLink className="nav-link" to="/" end>
          Home
        </NavLink>
      </div>
      <div id="collection">
        {collectionData.length > 0 ? collectionData.map((hex) => {
            return(
                <div id="collection-card" style={{ backgroundColor: hex }}>
                    {`${hex}`}
                </div>
            )
        }) : "Nothing in collection. Start adding color cards!"}
      </div>
    </div>
  );
}
