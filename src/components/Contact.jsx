import "./../style/Contact.scss";

const Contact = () => {
    
    return (
        <div className="contactContainer">
            <h1 className="heading">Need a simple website?</h1>
            <h2 className="subheading">Feel free to reach out!</h2>
            <div className="buttonContainer">
                <a className="contactButton" href="mailto:tyallembert@example.com?subject=Website%20Inquiry&body=Hey%20there!%0D%0A%0DIf%20you%20are%20interested%20in%20working%20with%20me,%20please%20provide%20a%20brief%20description%20of%20your%20website%20and%20your%20company/business%20name.">
                    Email
                </a>

                <button className="contactButton" >Text</button>
            </div>
        </div>
    );
}

export default Contact;