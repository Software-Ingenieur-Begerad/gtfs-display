import React from 'react';
const Contact = () => {
    return (
        <>
            <h2>About this website</h2>

            <p>
        For questions about this website please do not hesitate to reach out to{' '}
                <a href="mailto:dialog@swingbe.de">Software Ingenieur Begerad</a>.
            </p>
            <p>
        Source code has been made public on{' '}
                <a
                    href="https://github.com/Software-Ingenieur-Begerad/gtfs-display"
                    target="_blank"
                >
          GitHub
                </a>
        .
            </p>
            <h2>Imprint</h2>
            <address>
                <strong>Software Ingenieur Begerad</strong>
                <br />
        Lammer Heide 87
                <br />
        38116 Braunschweig
                <br />
        Deutschland
                <br />
            </address>
        </>
    );
};
export default Contact;
