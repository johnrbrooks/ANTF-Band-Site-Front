import Nav from '../Nav';
import Footer from '../Footer';
import './PrivacyPolicy.css';

export default function TermsOfService() {
    return (
        <div className="home-page">
            <Nav />
            <div className="privacy-page-content-wrapper">
                <h1>Terms of Service</h1>
                <p className="extras-body-text">
                    This application is intended for private use by the owner
                    only. There are no external users, accounts, or services
                    provided to the public. Use of this application is limited
                    to internal event management. All rights reserved.
                </p>
            </div>
            <Footer />
        </div>
    );
}
