import { Link } from 'react-router-dom';
import './index.scss';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import Loader from 'react-loaders';

const Home = () => {
    const jobsArray = ['Web Developer', 'Programmer', 'Systems Administrator'];

    const [text] = useTypewriter({
        words: jobsArray,
        loop: {}
    });

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I'm Sahil !
                <br/>
                {text}
                <Cursor/>
                </h1>
                <h2>
                    Full-Stack Developer / CyberSecurity Enthusiast
                    <br/>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </h2>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    );
};

export default Home;