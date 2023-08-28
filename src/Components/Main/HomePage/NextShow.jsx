import { useState, useEffect } from 'react'
import { BASE_URL } from '../../../App'
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'

export default function NextShow () {

    const [shows, setShows] = useState([])
    const [nextShow, setNextShow] = useState()

    useEffect(() => {
        const getShows = async() => {
            try {
                const response = await axios.get(`${BASE_URL}/shows/get/all`)
                console.log(response.data)
                if (response) {
                    setShows(response.data)
                }
            } catch(error) {
                console.error('Error fetching shows: ', error)
            }
        }
        getShows()
    }, [])

    useEffect(() => {
        const sortShows = () => {
            const sortedShows = shows.sort((a, b) => {
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
    
                return dateA - dateB
            })
            setNextShow(sortedShows[0])
        }
        sortShows()
    }, [shows])


    return nextShow ? (
        <Link to='/shows' className="shows-link">
            <div className="next-show">
                <h1 className='feature-title'>Next Show</h1>
                <hr />
                <h2 className='show-title'>{nextShow.venue}</h2>
                <div className="next-show-container">
                    <img className='next-show-image' src={nextShow.show_poster} alt="" />
                    <div className="info-grid">
                        <h3 className="show-label">Location:</h3>
                        <p className="show-data">{nextShow.location}</p>
                        <h3 className="show-label">Date:</h3>
                        <p className="show-data">{moment(nextShow.date).format('MMM Do, YYYY')}</p>
                        <h3 className="show-label">Time:</h3>
                        <p className="show-data">{nextShow.time}</p>
                        <h3 className="show-label">Cover?</h3>
                        <p className="show-data">{nextShow.cover}</p>
                    </div>
                </div>
            </div>
        </Link>
    ) : (
        <h1>Loading...</h1>
    )
}