import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import { Apps } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';

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

            <div className="home__body"></div>
        </div>
    )
}

export default Home
