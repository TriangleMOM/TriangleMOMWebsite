import './Eboard.css'
import Header from './../../components/header/Header.js';

function Profile() {
    return (
        <div className="profile">
            <div className='profile-image'>
                <img src="./images/profilepic.jpg" alt="profleimage"/>
            </div>
            <div className='profile-info'>
                <h2 className="profile-name">Jason Pittman</h2>
                <h3 className="profile-position">Recruitment Chair</h3>
                <p className='profile-hometown'>My hometown is Grain Valley, Missouri</p>
                <p className='profile-major'>Majoring in Computer Science & Mathematics</p>
                <p className='profile-quote'>"I joined triangle to become part of a family where I'm dad"</p>
            </div>
        </div>
    );
}

function Redbar() {
    return (
        <div className="redbar-container">
            <div className="redbar"></div>
        </div>
    );
}

function Eboard() {
    return (
        <div id="eboard-container">
            <Header>Meet Our Executive Board</Header>
            <div id="profiles-container">
                <Profile/>
                <Redbar/>
                <Profile/> 
                <Redbar/>
                <Profile/>
                <Redbar/> 
                <Profile/>
                <Redbar/> 
                <Profile/>
                <Redbar/> 
                <Profile/> 
            </div>
        </div>
    );
}

export default Eboard;