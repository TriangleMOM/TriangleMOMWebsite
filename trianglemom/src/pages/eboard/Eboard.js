import './Eboard.css'
import Header from './../../components/header/Header.js';

function Profile() {
    return (
        <div class="profile-container">
            <div class='profile-image'>
                <img src="./images/profilepic.jpg"/>
            </div>
            <div class='profile-info'>
                <h2>Jason Pittman</h2>
                <h3>Recruitment Chair</h3>
                <p class='hometown'>My hometown is Grain Valley, Missouri</p>
                <p class='major'>Majoring in Computer Science & Mathematics</p>
                <p class='quote'>"I joined triangle to become part of a family where I'm dad"</p>
            </div>
        </div>
    );
}

function Redbar() {
    return (
        <div class="redbar-container">
            <div class="redbar"></div>
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