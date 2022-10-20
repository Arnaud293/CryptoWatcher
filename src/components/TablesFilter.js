import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStableState } from '../actions/stable.action';

const TablesFilter = () => {

    const [showStable, setShowStable] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setStableState(showStable))
    },[showStable])

    return (
        <div className='table-filters'>
            <div className="table-filters-container">
                <div className="stable-checkbox-container">
                    <input type="checkbox" id="stableCoin" defaultChecked={true} onChange={() => setShowStable(!showStable)}/>
                    <label htmlFor="stableCoin">{showStable ? "Avec Stable Coin" : "Sans Stable Coin"}</label>
                </div>
            
                <div className="no-list-btn">
                    <p>Aucune liste</p>
                </div>
                <div className="fav-list">
                    <p>Liste des favoris</p>
                    <img src='./assets/star-full.svg' alt="star-icon"/>
                </div>
            </div>
        </div>
    );
};

export default TablesFilter;