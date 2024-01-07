import homeContent from './home.json';
import './Home.css';
import Header from './../../components/header/Header.js';
import HouseSlides from './components/HouseSlides.js';


function WhoAreWeSection() {
    // Extract parapgraph content from home.json
    const paragraphs = [];
    homeContent["paragraphs"].forEach((item) => {
        paragraphs.push(
            <div class="waw-para">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{item}</p>
            </div>
        );
    });

    return (
        <div id="waw-section">
            <div id="waw-image">
                <img src="images/outside/front_landscape.jpg" />
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
                <HouseSlides/>
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
    return (
        <div id="member-section">
            <div id="member-header">
                <h1>Membership</h1>
            </div>
            <div id="member-graphic">
                {/* COMING SOON */}
            </div>
            <div id="member-count">
                <p>X Active Members</p>
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
            <div id="expense-semesterly">
                <p>$X per semsters</p>
            </div>
            <div id="expense-utilities">
                <ul>
                    <li>Cook</li>
                    <li>Cafeteria</li>
                    <li>Laundry</li>
                    <li>Study Room</li>
                    <li>Landing</li>
                    <li>Parking</li>
                </ul>
            </div>
        </div>
    );
}

function Home() {
    return (
        <div id="home-container">
            <Header>Missouri Mines Chapter</Header>
            <WhoAreWeSection />
            <TheHouseSection/>
             <MembershipSection/>
             {/* <LivingExpensesSection/> */}
        </div>
    );
}

export default Home;