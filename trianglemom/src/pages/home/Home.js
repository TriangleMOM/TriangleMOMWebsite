import homeContent from './home.json';
import './Home.css';
import Header from './../../components/header/Header.js'

function Paragraph({ content }) {
    return (
        <div class="paragraph">
            {content['includeHeader'] == 'true' && 
                <h2>{content['header']}</h2>
            }
            <p>{content['body']}</p>
        </div>
    );
}

function Home() {
    let paragraphs = homeContent['paragraphs'].map((currPara, index) => (
        <Paragraph key={index} content={currPara} />
      ));
      
    return (
        <div id="home-container">
            <Header>Missouri Mines Chapter</Header>
            <div id="image-container">
                <img id="main-image" src="./images/house.jpeg"/>
            </div>
            {paragraphs}
        </div>
    );
}

export default Home;