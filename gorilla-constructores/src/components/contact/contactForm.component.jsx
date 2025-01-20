import { useRef, useState } from 'react';
import imgContact from '../../assets/images/contact-us/imgContact.jpg';
import emailjs from '@emailjs/browser';
import './contactForm.style.css';

const ContactForm = () => {

    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');
    const [service, setService] = useState('');

    const serviceOptions = [
        'Persianas',
        'Pisos',
        'Pasto Sintético',
        'Clósets',
        'Cocinas',
        'Arquitectura',
        'Construcción',
        'Supervisión',
        'Otro'
    ]

    const onOptionChangeHandler = (event) => {
        setService(event.target.value);
    };

    const handleSubmit = (e) => {
        const serviceId = 'service_1zosoz7';
        const templateId = 'template_vfp0z0l';
        const publicKey = 'y5qQKDWi4HfNkwfwS';

        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log(result.name)
            console.log(result.message)
            console.log(result.message)
            alert('Mensaje enviado!')
        }, (error) => {
            console.log(error.message)
            alert('Por el momento no podemos enviar tu correo')
        });
        e.target.reset();
    };    

    return (
        <>
            <div className='row'>
                <div className='column-img'>
                    <img src={imgContact} alt='Contacta con nosotros' className='contact-us-img'></img>
                </div>
                <div className='column-form'>
                    <br /><br />
                    <form onSubmit={handleSubmit} ref={form}>
                        <label className='contact-label'>Nombre:</label><br />
                        <input required className='contact-input' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}></input><br />
                        <label className='contact-label'>Correo:</label><br />
                        <input required className='contact-input' type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input><br />
                        <label className='contact-label'>Tel&eacute;fono:</label><br />
                        <input required className='contact-input' type='text' name='telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)}></input><br />
                        <label className='contact-label'>Mensaje:</label><br />
                        <input required className='contact-input' type='text' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></input><br />
                        <label className='contact-label'>Servicio:</label><br />
                        <div className='contact-select'>
                            <select required onChange={onOptionChangeHandler} name='service'>
                                <option>Selecciona una opci&oacute;n</option>
                                {
                                    serviceOptions.map((option, index) => {
                                        return (
                                            <option key={index}>{option}</option>
                                        )
                                    }
                                    )};
                            </select>
                        </div>
                        <div className='button-container'>
                            <button type='submit' style={{ marginLeft: '40%' }}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;