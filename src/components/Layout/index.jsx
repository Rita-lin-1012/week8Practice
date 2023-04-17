import photo from './img/photo.svg'
import './index.css'

export function Main() {
    return (
        <div className="responsivePractice" />

    )
}
export function Navbar() {
    return (
        <div>
            <div className="header" />
            <div className="bottom">
                <div className="bottomLeft" />
                <div className="bottomMiddle" />
                <div className="bottomRight" />
            </div>
            <div className="middle">
                <div className="context">
                    {/* <div className="photo" /> */}
                    <img className='photo' src={photo} />

                </div>
            </div>
        </div>


    )
}