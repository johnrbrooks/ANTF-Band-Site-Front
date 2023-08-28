import { useEffect, useRef } from 'react'

export default function LatestClip() {

    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                } else {
                    entry.target.classList.remove('visible')
                }
            })
        }, { threshold: 0.1 })

            if(elementRef.current) {
                observer.observe(elementRef.current)
            }
            return () => {
                if (elementRef.current) {
                    observer.unobserve(elementRef.current)
                }
            }
    }, [])

    return (
        <a href="https://www.youtube.com/@anighttoforget1810" target="_blank" ref={elementRef} className="clip-link">
            <div className='latest-clip'>
                <h1 className='feature-title-video'>Listen</h1>
                <hr />
                <iframe 
                    className='youtube-clip'
                    src="https://www.youtube.com/embed/xfLgrn7IHkk" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>
        </a>
    )
}