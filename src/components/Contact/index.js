import Loader from 'react-loaders';
import './index.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const EJSPublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const EJSServiceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EJSTemplateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const position = [49.28, -123.12]

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(`${EJSServiceID}`, `${EJSTemplateID}`, form.current, {
            publicKey: `${EJSPublicKey}`,
        })
        .then(
            () => {
            alert('Message successfully sent!');
            console.log('SUCCESS!');
            window.location.reload(false);
            },
            (error) => {
            alert('Message failed to send, please try again.')
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    Contact Me
                </h1>
                <p>
                    I am interested in any Programming,
                    Systems Administration, and Freelance opportunities.
                    Although if you have any other questions or requests,
                    feel free to contact me through the form below.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input 
                                placeholder='Subject'
                                type='text'
                                name='subject'
                                required
                                />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <div className='info-map'>
            Sahil Singh,
            <br />
            Canada,
            <br />
            Vancouver <br />
            <span>shilsingh01@yahoo.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer className='leaflet-container' center={position} zoom={13}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Buy me a coffee :D. <br />
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
        <Loader type='pacman'/>
        </>
    )
};

export default Contact;