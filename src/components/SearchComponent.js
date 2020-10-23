import { Button } from '@material-ui/core'
import { Search, Mic } from '@material-ui/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import './SearchComponent.css'

function SearchComponent({ hideButtons = false }) {
    const [{ }, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search');
    }

    return (
        <form className="search">
            <div className="search__input">
                <Search className="search__inputIcon" />
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <Mic />
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm feeling lucky</Button>
                </div>
            ) : (
                    <div className="search__buttons">
                        <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                        <Button className="search__buttonsHidden" variant="outlined">I'm feeling lucky</Button>
                    </div>
                )}
        </form>
    )
}

export default SearchComponent
