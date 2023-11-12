import './Eboard.css'

function Header() {
    return (
        <div id="header">
            <h1>Meet Our Executive Board</h1>
        </div>
    );
}

function Profile() {
    return (
        <div class="profile-container">
            <div class='profile-image'>
                <img src="./images/profilepic.jpg"/>
            </div>
            <div class='profile-info'>
                <h2>Jason Pittman</h2>
                <h3>Recruitment Chair</h3>
                {/* <p>I'm from Grain Valley, Missouri and I'm majoring in Computer Science & Mathematics.</p> */}
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
            <Header/>
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