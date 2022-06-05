import React from "react";

function Contact() {
    return (
        <section id="contact" className="section">
            <h2>Contact</h2>
            <p><a href="https://calendly.com/danicodes">Calendly</a></p>
            <form action="https://formspree.io/hi@daniellenall.com" method="POST">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="_replyto" placeholder="Email" />
                <textarea name="message" rows="6" defaultValue="Your message"></textarea>
                <button type="submit" className="btn" value="Send">Send</button>
            </form>
        </section>
    );
}

export default Contact;