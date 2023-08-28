import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../App'
import axios from 'axios'
import Nav from './Nav'
import Footer from './Footer'

export default function SongList () {

    const [songs, setSongs] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const getSongs = async() => {
            try {
                const response = await axios.get(`${BASE_URL}songs/get/all`)
                if (response) {
                    setSongs(response.data)
                }
            } catch (error) {
                console.error('Error fetching songs:', error)
            }
        }
        getSongs()
    }, [])

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        const updateSearchResults = () => {
            if(searchQuery === '') {
                setSearchResults(songs)
            } else {
                const filteredResults = songs.filter(
                    (result) => result.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    result.artist.toLowerCase().includes(searchQuery.toLowerCase())
                )
                setSearchResults(filteredResults)
            }
        }
        updateSearchResults()
    }, [searchQuery, songs])
    
    return searchResults ? (
        <div>
            <div className="home-page">
                <Nav />
                <div className="page-container">
                    <div className="search-container">
                        <input type="search" placeholder="Search songs" className="search-bar" onChange = {handleChange}/>
                    </div>
                    <div className="song-list-container">
                        <h1 className="page-header">Song List</h1>
                        <div className="song-list-grid">
                            <h2 className="song-header">Song Name</h2>
                            <h2 className="artist-header">Artist Name</h2>
                        </div>
                        <hr className="table-break" />
                        {searchResults.map((song) => (
                            <div className="song-details-grid" key={song._id}>
                                <p className="song-name">{song.name}</p>
                                <p className="song-artist">{song.artist}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    ) : (
        <h1>Loading...</h1>
    )
}