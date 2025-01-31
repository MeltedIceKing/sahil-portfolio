import './index.scss'
import { FaPython, FaNodeJs, FaHtml5, FaCss3, FaReact, FaAws, FaDocker } from "react-icons/fa";
import { SiMysql, SiMicrosoftazure, SiKubernetes, SiJira, SiConfluence, SiNginx, SiCsharp, SiUnity } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import Loader from 'react-loaders';

const About = () => {

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    About me
                </h1>
                <p>
                    I'm a Systems Administrator and Web Developer
                    with experience in working with Windows/Linux
                    Server Administration and Web Frameworks.
                </p>
                <p>
                    I've worked alongside the IT team to provide
                    excellent end user support, while meeting
                    deadlines and exceeding expectations.
                </p>
                <p>
                    I'm always passionate about learning something
                    new and improving myself, and I'm always looking
                    forward to meeting new people and diving into
                    new opportunities!
                </p>
            </div>
            <div className='logo-zone'>
                <div><SiMysql className='icon'/>
                <span>MySQL</span></div>
                <div><SiUnity className='icon'/>
                <span>Unity</span></div>
                <div><FaPython className='icon'/>
                <span>Python</span></div>
                <div><SiCsharp  className='icon'/>
                <span>CSharp</span></div>
                <div><IoLogoJavascript className='icon'/>
                <span>Javascript</span></div>
                <div><FaNodeJs className='icon'/>
                <span>NodeJs</span></div>
                <div><FaHtml5 className='icon'/>
                <span>Html5</span></div>
                <div><FaCss3 className='icon'/>
                <span>Css3</span></div>
                <div><FaReact className='icon'/>
                <span>React</span></div>
                <div><FaAws className='icon'/>
                <span>Aws</span></div>
                <div><SiMicrosoftazure className='icon'/>
                <span>Azure</span></div>
                <div><FaDocker className='icon'/>
                <span>Docker</span></div>
                <div><SiKubernetes className='icon'/>
                <span>Kubernetes</span></div>
                <div><SiJira className='icon'/>
                <span>Jira</span></div>
                <div><SiConfluence className='icon'/>
                <span>Confluence</span></div>
                <div><SiNginx  className='icon'/>
                <span>Nginx</span></div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
};

export default About;