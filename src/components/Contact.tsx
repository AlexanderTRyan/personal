import '../assets/styles/Contact.scss';

const Contact = (): JSX.Element => {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to reach out for collaborations or inquiries.</p>
          <div className="contact-info">
            <p>
               Email: <a href="mailto:atryan@iastate.edu">atryan@iastate.edu</a>
            </p>
            <p>
               Phone: (515) 681-8198
            </p>
            <p>
              Location: Ames, Iowa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

