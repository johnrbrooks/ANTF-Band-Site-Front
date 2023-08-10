export default function LatestClip() {
    return (
        <div className='latest-clip'>
            <h1 className='clip-header'>Listen</h1>
            <iframe 
                className='youtube-clip'
                src="https://www.youtube.com/embed/xfLgrn7IHkk" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
    )
}