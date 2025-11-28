import { Component } from 'solid-js';
import { AiOutlineMail, AiOutlinePhone } from 'solid-icons/ai';
import { FiMapPin } from 'solid-icons/fi';
import styles from './Contact.module.scss';

const Contact: Component = () => {
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted');
    };

    return (
        <section class={styles.contact} id="contact">
            <div class={styles.header}>
                <p class={styles.label}>Get In Touch</p>
                <h2 class={styles.title}>Contact Me</h2>
                <p class={styles.subtitle}>
                    Have a project in mind? Let's work together to create something amazing!
                </p>
            </div>

            <div class={styles.content}>
                <form class={styles.form} onSubmit={handleSubmit}>
                    <div class={styles.formGroup}>
                        <label for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div class={styles.formGroup}>
                        <label for="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your.email@example.com"
                            required
                        />
                    </div>

                    <div class={styles.formGroup}>
                        <label for="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project..."
                            required
                        />
                    </div>

                    <button type="submit" class={styles.button}>
                        Send Message
                    </button>
                </form>

                <div class={styles.info}>
                    <div class={styles.infoItem}>
                        <AiOutlineMail size={24} />
                        <a href="mailto:saurabhgathade@gmail.com">saurabhgathade@gmail.com</a>
                    </div>
                    <div class={styles.infoItem}>
                        <AiOutlinePhone size={24} />
                        <span>+91 9689525960</span>
                    </div>
                    <div class={styles.infoItem}>
                        <FiMapPin size={24} />
                        <span>India</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
