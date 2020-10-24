import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import { Apps } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import SearchComponent from '../components/SearchComponent';

function Home() {
    return (
        <div className="home">

            <div className="home__header">
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <IconButton>
                        <Apps />
                    </IconButton>
                    <IconButton>
                        <Avatar />
                    </IconButton>
                </div>
            </div>

            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" />
                <div className="home__inputContainer">
                    <SearchComponent />
                </div>
            </div>
        </div>
    )
}

export default Home
