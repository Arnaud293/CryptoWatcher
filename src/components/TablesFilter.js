import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStableState } from '../actions/stable.action';
import {setListDisplay} from '../actions/list.action';

const TablesFilter = () => {

    const [showStable, setShowStable] = useState(true);
    const [showFavlist, setShowFavlist] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setStableState(showStable));
        dispatch(setListDisplay(showFavlist));
    },[showStable, showFavlist])

    return (
        <div className='table-filters'>
            <div className="table-filters-container">
                <div className="stable-checkbox-container">
                    <input type="checkbox" id="stableCoin" defaultChecked={true} onChange={() => setShowStable(!showStable)}/>
                    <label htmlFor="stableCoin">{showStable ? "Avec Stable Coin" : "Sans Stable Coin"}</label>
                </div>
            
                <div className={showFavlist ? "no-list-btn" : "no-list-btn active"} onClick={() => setShowFavlist(false)}>
                    <p>Aucune liste</p>
                </div>
                <div className={showFavlist ? "fav-list active" : "fav-list"} onClick={() => setShowFavlist(true)}>
                    <p>Liste des favoris</p>
                    <img src='./assets/star-full.svg' alt="star-icon"/>
                </div>
            </div>
        </div>
    );
};

export default TablesFilter;