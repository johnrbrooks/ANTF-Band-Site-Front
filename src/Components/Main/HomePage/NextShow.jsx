export default function NextShow () {
    return (
            <div className="next-show">
                <h1 className='feature-title'>Next Show</h1>
                <hr />
                <h2 className='show-title'>Sauf Haus</h2>
                <img className='next-show-image' src="https://www.washingtonian.com/wp-content/uploads/2014/07/2014-7-24-saufhaus.jpg" alt="" />
                <div className="info-grid">
                    <h3 className="show-label">Location:</h3>
                    <p className="show-data">Sauf Haus</p>
                    <h3 className="show-label">Date:</h3>
                    <p className="show-data">08/19/2023</p>
                    <h3 className="show-label">Time:</h3>
                    <p className="show-data">10:00pm</p>
                    <h3 className="show-label">Cost:</h3>
                    <p className="show-data">Free</p>
                </div>
            </div>
    )
}