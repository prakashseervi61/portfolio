import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});

const contactMethods = [
  { icon: Mail, label: 'Email', value: 'prakashseervi1503@gmail.com', href: 'mailto:prakashseervi1503@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'prakash-v-446194326', href: 'https://www.linkedin.com/in/prakash-v-446194326/' },
  { icon: Github, label: 'GitHub', value: 'prakashseervi61', href: 'https://github.com/prakashseervi61' },
];

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS env vars not set.');
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 5000);
      return;
    }

    const templateParams = {
      from_name: form.current.name.value,
      from_email: form.current.email.value,
      message: form.current.message.value,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSuccess(true);
        form.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      }, () => {
        setError(true);
        setTimeout(() => setError(false), 5000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-25 sm:py-32">
      <div className="container max-w-[1148px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-16">
          <div className="w-2 h-2 bg-accent rounded-full" />
          <h2 className="text-xl uppercase tracking-wider">Contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info side */}
          <motion.div {...fadeUp(0.1)}>
            <h3 className="text-3xl font-anton mb-4">Get in Touch</h3>
            <p className="text-muted leading-relaxed mb-8">
              I&apos;m currently looking for internship opportunities and am open
              to collaborations. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactMethods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border rounded-xl hover:border-accent/40 transition-colors"
                >
                  <m.icon className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <p className="font-medium">{m.label}</p>
                    <p className="text-sm text-muted">{m.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div {...fadeUp(0.2)}>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-bg-light border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-fg placeholder:text-muted/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-bg-light border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-fg placeholder:text-muted/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-bg-light border border-border rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-fg placeholder:text-muted/50 resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto h-12 px-8 inline-flex justify-center items-center gap-2 font-anton text-lg uppercase tracking-wider bg-accent text-black rounded-md hover:bg-accent/80 transition-colors"
              >
                {loading ? 'Sending...' : <>Send Message <Send className="w-4 h-4" /></>}
              </motion.button>
              {success && <p className="text-center text-accent font-medium">Message sent successfully!</p>}
              {error && <p className="text-center text-red-500 font-medium">Failed to send. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
