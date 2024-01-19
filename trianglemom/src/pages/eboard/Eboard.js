import './Eboard.css'
import Header from './../../components/header/Header.js';
import EboardMembers from './Eboard.json';

function Profile({ member }) {
    return (
        <div className="profile">
            <div className='profile-image'>
                <img src={`./images/eboard/${member.profilepic}`} alt="profileimage"/>
            </div>
            <div className='profile-info'>
                <h2 className="profile-name">{member.name}</h2>
                <h3 className="profile-position">{member.role}</h3>
                <p className='profile-hometown'>My hometown is {member.hometown}</p>
                <p className='profile-major'>Majoring in {member.major}</p>
                <p className='profile-quote'>"{member.quote}"</p>
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
    let members = EboardMembers["members"].map((member, index) => {
        return (
            <>
                <Profile member={member} />
                {index < EboardMembers["members"].length - 1 && <Redbar />}
            </>
        );
    });
    

    return (
        <div id="eboard-container">
            <Header>Meet Our Executive Board</Header>
            <div id="profiles-container">
                {members}
            </div>
        </div>
    );
}

export default Eboard;