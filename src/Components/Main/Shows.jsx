import { useState, useEffect, useContext, useRef, createRef } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../App'
import axios from 'axios'
import moment from 'moment'
import Nav from './Nav'
import Footer from './Footer'

export default function Shows () {

    const [shows, setShows] = useState([])
    const [sortedShows, setSortedShows] = useState([])

    const [isModalOpen, setModalOpen] = useState(false)
    const [selectedCalendarLink, setSelectedCalendarLink] = useState(null)

    const showRefs = useRef({})

    useEffect(() => {
        const getShows = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/shows/get/all`)
                if(response) {
                    setShows(response.data)
                }
            } catch (error) {
                console.error('Error gettings shows: ', error)
            }
        }
        getShows()
    }, [])

    useEffect(() => {
        const sortShows = () => {
            const sortedShowDates = shows.sort((a, b) => {
                const dateA = new Date(a.date)
                const dateB = new Date(b.date)
    
                return dateA - dateB
            })
            setSortedShows(sortedShowDates)
        }
        sortShows()
    }, [shows])

    
    useEffect(() => {
        sortedShows.forEach(show => {
            if(!showRefs.current[show._id]) {
                showRefs.current[show._id] = createRef()
            }
        })

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                } else {
                    entry.target.classList.remove('visible')
                }
            })
        }, { threshold: 0.1 })

        Object.values(showRefs.current).forEach(ref => {
            if(ref.current) {
                observer.observe(ref.current)
            }
        })

        return () => {
            Object.values(showRefs.current).forEach(ref => {
                if(ref.current) {
                    observer.unobserve(ref.current)
                }
            })
        }
    }, [sortedShows])

    function generateCalendarLink(show) {
        const BASE_URL = 'https://www.google.com/calendar/render?action=TEMPLATE'
    
        const [startTime, endTime] = show.time.split(' - ')
    
        const startDate = moment(show.date + ' ' + startTime, "YYYY-MM-DD h:mmA").format('YYYYMMDDTHHmmss')
        let endDate = moment(show.date + ' ' + endTime, "YYYY-MM-DD h:mmA").format('YYYYMMDDTHHmmss')
    
        // If the end time is earlier than the start time, it means the show ends the next day
        if (moment(endDate).isBefore(moment(startDate))) {
            endDate = moment(show.date + ' ' + endTime, "YYYY-MM-DD h:mmA").add(1, 'days').format('YYYYMMDDTHHmmss')
        }
    
        const url = `${BASE_URL}&text=${encodeURIComponent(show.venue)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(show.cover)}&location=${encodeURIComponent(show.location)}&sf=true&output=xml`
    
        return url
    }

    function openModal(show) {
        setSelectedCalendarLink(generateCalendarLink(show))
        setModalOpen(true)
    }
      
    function confirmAddToCalendar() {
        if (selectedCalendarLink) {
            window.open(selectedCalendarLink, "_blank")
        }
        setModalOpen(false)
    }

    return sortedShows ? (
        
        <div>
            <div className="home-page">
                <Nav />
                <div className="shows-page-container">
                    <h1 className='page-title'>Upcoming Shows</h1>
                    <hr />
                    <div className="shows-grid">
                        {sortedShows.map((show) => (
                            <div className="show-item" ref={showRefs.current[show._id]} key={show._id}>
                                <h2 className="venue-name">{show.venue}</h2>
                                <div className="show-data-container">
                                    <img src={show.show_poster} alt="" className="show-poster" />
                                    <div className="show-data-grid">
                                        <h3 className="show-data-title">Date:</h3>
                                        <p className="show-data-info">{moment(show.date).format('MMM Do, YYYY')}</p>
                                        <h3 className="show-data-title">Time:</h3>
                                        <p className="show-data-info">{show.time}</p>
                                        <h3 className="show-data-title">Location:</h3>
                                        <p className="show-data-info">{show.location}</p>
                                        <h3 className="show-data-title">Cover?</h3>
                                        <p className="show-data-info">{show.cover}</p>
                                    </div>
                                </div>
                                <button onClick={() => openModal(show)} className="add-to-calendar-button">Add to Calendar</button>
                            </div>
                        ))}
                    </div>
                </div>
                {isModalOpen && (
                    <div className="modal-overlay">
                    <div className="modal-content">
                        <p>Do you want to be taken away from the site to add this event to your Google calendar?</p>
                        <button onClick={confirmAddToCalendar}>Yes, leave site</button>
                        <button onClick={() => setModalOpen(false)}>No, stay here</button>
                    </div>
                    </div>
                )}
                <Footer />
            </div>
        </div>
    ) : (
        <h1>Loading...</h1>
    )
}