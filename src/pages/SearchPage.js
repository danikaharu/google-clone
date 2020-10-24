import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import SearchComponent from '../components/SearchComponent'
import { Description, Image, LocalOffer, Room, Search, MoreVert } from '@material-ui/icons';

function SearchPage() {
    const [{ term }, dispacth] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data)
    return (
        <div className="searchPage">

            <div className="searchPage__header">
                <Link to="/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="Google Logo" />
                </Link>

                <div className="searchPage__headerBody">
                    <SearchComponent hideButtons />

                    <div className="searchPage__options">

                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <Search />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <Description />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <Image />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOffer />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <Room />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVert />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {true && (
                <div className="searchPage__results">
                    <p className="searchPage__resultsCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link} className="searchPage__resultLink">
                                {item?.displayLink}
                            </a>
                            <a href={item.link} className="searchPage__resultTitle">
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div >
    )
}

export default SearchPage;
