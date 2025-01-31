import Loader from 'react-loaders';
import './index.scss';
import Skelecode from '../../assets/images/skelecode.png';
import { SiGithub } from 'react-icons/si';

const Projects = () => {

    return (
        <>
        <h1>Projects</h1>

        <div className='masonry'>
            <div className='masonry-brick'><img className='image' src={Skelecode} alt='SkeleCode'/>
            <span><a target='_blank' rel='noreferrer' href='https://github.com/MeltedIceKing/Agile-Project'><SiGithub /></a></span></div>
            <div className='masonry-brick'><span>More Coming Soon!</span></div>
            <div className='masonry-brick'><span>More Coming Soon!</span></div>
            <div className='masonry-brick'><span>More Coming Soon!</span></div>
            <div className='masonry-brick'><span>More Coming Soon!</span></div>
            <div className='masonry-brick'><span>More Coming Soon!</span></div>
            <div className='masonry-brick'><span>More Coming Soon!</span></div>
            <div className='masonry-brick'><span>More Coming Soon!</span></div>
            <div className='masonry-brick'><span>More Coming Soon!</span></div>
            <div className='masonry-brick'><span>More Coming Soon!</span></div>
            <div className='masonry-brick'><span>More Coming Soon!</span></div>
            <div className='masonry-brick'><span>More Coming Soon!</span></div>

        </div>
        <Loader type='pacman'/>
        </>
    )
};

export default Projects;