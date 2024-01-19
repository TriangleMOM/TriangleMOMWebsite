import homeContent from './home.json';
import './Home.css';
import Header from './../../components/header/Header.js';
import HouseSlides from './components/HouseSlides.js';
import { FaUser } from 'react-icons/fa';


function WhoAreWeSection() {
    // Extract parapgraph content from home.json
    const paragraphs = [];
    homeContent["paragraphs"].forEach((item, index) => {
        paragraphs.push(
            <div className="waw-para" key={`waw-para-${index}`}>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{item}</p>
            </div>
        );
    });

    return (
        <div id="waw-section">
            <div id="waw-image">
                <img alt="front-landscape" src="images/outside/front_landscape.jpg" />
            </div>
            <div id="waw-para-section">
                {paragraphs}
            </div>
        </div>
    );
}

function TheHouseSection() {
    return (
        <div id="house-section">
            <div id="house-header">
                <h1>The House</h1>
            </div>
            <div id="house-slides">
                <HouseSlides />
            </div>
            <div id="house-address">
                <p>807 North State Street, Rolla, Missouri</p>
            </div>
            <div id="house-details">
                <ul>
                    <li>Renovated in Spring 2023, this frat house showcases new flooring, a redesigned cafeteria, and a revitalized study room.</li>
                    <li>Originating as one of the first buildings in Rolla, MO, this historic frat house was formerly the mayor's mansion.</li>
                    <li>Offering a homely ambiance, each unique room in this frat house weaves its own story, setting it apart from conventional fraternity living spaces.</li>
                    <li>Situated directly on-campus, this frat house allows freshmen to move in from their first semester.</li>
                </ul>
            </div>
        </div>
    );
}

function MembershipSection() {
    let profileIcons = [];

    const layers = Math.ceil(19 / 5);
    for (let l = 0; l < layers; ++l) {
        const icons = Math.min(5, 19 - (5 * l));
        let profileIconRow = [];
        for (let i = 0; i < icons; ++i) {
            profileIconRow.push(<FaUser className="profile-icon" key={`profile-icon-${l}-${i}`} />);
        }
        profileIcons.push(<div className="profile-icon-row"  key={`profile-icon-row-${l}`}>{profileIconRow}</div>);
    }

    return (
        <div id="member-section">
            <div id="member-header">
                <h1>Membership</h1>
            </div>

            <div id="member-count">
                <div id="profile-icon-container">
                    {profileIcons}
                </div>
                <div id="member-count-text">
                    <p><span className="word-emphasis">19</span> Active Members</p>
                </div>
            </div>
        </div>
    );
}

function LivingExpensesSection() {
    return (
        <div id="expense-section">
            <div id="expense-header">
                <h1>Living Expenses</h1>
            </div>
            <div id="expense-utilities">
                <h2>Offered Utilities</h2>
                <ul>
                    <li>Expert Full-time Chef Preparing Gourmet Lunch and Dinner Daily</li>
                    <li>Modern Washers and Dryers for Convenient Laundry</li>
                    <li>Quiet Study Room for Focused Learning and Research</li>
                    <li>Entertainment Landing Featuring PS5 and Xbox One Consoles</li>
                    <li>Spacious and Secure Parking Lot for Vehicles</li>
                </ul>
            </div>
            <div id="expense-semesterly">
                <p><span className="word-emphasis">$3500</span> per semester</p>
            </div>
        </div>
    );
}

function Home() {
    return (
        <div id="home-container">
            <Header>Missouri Mines Chapter</Header>
            <WhoAreWeSection />
            <TheHouseSection />
            <MembershipSection />
            <LivingExpensesSection />
        </div>
    );
}

export default Home;