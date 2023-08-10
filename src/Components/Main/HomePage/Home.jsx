import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../Footer'
import NextShow from './NextShow'
import LatestClip from './LatestClip'
import Contact from '../Contact'

export default function Home () {
    return (
        <div>
            <div className="home-page">
                <Nav />
                <div className="main">
                    <img src="src/assets/images/ANTF_logo_white text w purple (2).png" className='main-logo' alt="" />
                    <h2 className="tagline">pop punk cover band from NOVA playing your favorite songs from those angsty emo years</h2>
                    <div className="members-grid">
                        <Link to='/about'>
                            <img className='member-image' src="https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/278596370_10216386856982473_2476100842096672570_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=rZAUjZYCgFIAX8y79J3&_nc_ht=scontent-iad3-1.xx&oh=00_AfDv6qLlCx-jDvJIOLVt5KEbI9TWQ-li29MkpYJcQOOAfA&oe=64DAC354" alt="" />
                        </Link>
                        <Link to='/about'>
                            <img className='member-image' src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/305971282_10158965258582285_3959941938431167505_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=5dzKJn80FU0AX-v7hig&_nc_ht=scontent-iad3-2.xx&oh=00_AfC0URhZi1bAjI4ujeOaNNLXibyny8FRDx66XrslqHudTg&oe=64D9296F" alt="" />
                        </Link>
                        <Link to='/about'>
                            <img className='member-image' src="https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/286856628_10227730854721290_3361024392840812617_n.jpg?_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=174925&_nc_ohc=BGULtyKuwOsAX8znS7u&_nc_ht=scontent-iad3-1.xx&oh=00_AfBBz4q5tAl8qPh1uE236xcUOlbgC97HGSjhHOzpnlLmLw&oe=64DACAF6" alt="" />
                        </Link>
                        <Link to='/about'>
                            <img className='member-image' src="https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/362951932_803359241556837_1910854480056574392_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=Rz1fDwMQW4QAX8FPqCX&_nc_ht=scontent-iad3-2.xx&oh=00_AfChXoS2j2KxKrTHoAaG4X4j8Aa0VZEHhSZa65lazMGGdA&oe=64DABCC4" alt="" />
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
