import { Fragment } from "react";
import MapComponent from "../../components/contact/contactMap.component";
import ContactForm from "../../components/contact/contactForm.component";

const ContactPage = () => {
    return (
        <Fragment>
            <h2 style={{ fontSize : 40, position: 'relative' }}>Contacto</h2>
            <ContactForm></ContactForm>
        </Fragment>
    );
};

export default ContactPage;