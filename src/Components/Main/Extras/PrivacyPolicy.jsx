import Nav from '../Nav';
import Footer from '../Footer';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
    return (
        <div className="home-page">
            <Nav />
            <div className="privacy-page-content-wrapper">
                <h1>Privacy Policy</h1>
                <p className="extras-body-text">
                    This application is used solely by the owner to manage and
                    create calendar events for a band website. No user data is
                    collected, stored, or shared with third parties. Google
                    account access is used only to create and manage events in
                    the owner&apos;s Google Calendar. If you have any questions,
                    contact: fortherecordpro@gmail.com
                </p>
            </div>
            <Footer />
        </div>
    );
}
