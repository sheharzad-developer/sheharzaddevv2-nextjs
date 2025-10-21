import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../context/LanguageContext';

function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      // EmailJS configuration (same as HireMeModal)
      const serviceId = 'service_f6m0myb';
      const templateId = 'template_2iz1ofn';
      const publicKey = 'cyhAdV4SulzwmwCXd';

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.subject,
        message: formData.message,
        to_email: 'sheharzad.salahuddin9000@outlook.com',
      };

      // Send email via EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="leading-loose">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-6 sm:p-10 bg-white dark:bg-secondary-dark rounded-2xl shadow-xl"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
            {t('contact.form.title')}
          </p>
          
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
            >
              <p className="text-green-800 dark:text-green-200 text-center">
                {t('contact.form.success')}
              </p>
            </motion.div>
          )}
          
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
            >
              <p className="text-red-800 dark:text-red-200 text-center">
                {t('contact.form.error')}
              </p>
            </motion.div>
          )}
          
          <div className="mb-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="name"
            >
              {t('contact.form.name')}
            </label>
            <input
              className="w-full px-5 py-3 border border-gray-300 dark:border-ternary-dark rounded-lg shadow-sm text-lg bg-primary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t('contact.form.namePlaceholder')}
              aria-label="Name"
            />
          </div>
          
          <div className="mb-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="email"
            >
              {t('contact.form.email')}
            </label>
            <input
              className="w-full px-5 py-3 border border-gray-300 dark:border-ternary-dark rounded-lg shadow-sm text-lg bg-primary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contact.form.emailPlaceholder')}
              aria-label="Email"
            />
          </div>
          
          <div className="mb-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="subject"
            >
              {t('contact.form.subject')}
            </label>
            <input
              className="w-full px-5 py-3 border border-gray-300 dark:border-ternary-dark rounded-lg shadow-sm text-lg bg-primary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder={t('contact.form.subjectPlaceholder')}
              aria-label="Subject"
            />
          </div>
          
          <div className="mb-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              {t('contact.form.message')}
            </label>
            <textarea
              className="w-full px-5 py-3 border border-gray-300 dark:border-ternary-dark rounded-lg shadow-sm text-lg bg-primary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="message"
              name="message"
              cols="14"
              rows="6"
              aria-label="Message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.form.messagePlaceholder')}
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="mt-8 w-full">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out transform hover:scale-105 shadow-lg border-none"
              style={{ 
                display: 'block',
                visibility: 'visible',
                minHeight: '56px',
                fontSize: '16px'
              }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t('contact.form.sending') || 'Sending...'}
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <FiSend className="mr-2" size={18} />
                  {t('contact.form.send') || 'Send Message'}
                </span>
              )}
            </button>
          </div>
          
        </form>
      </div>
    </motion.div>
  );
}

export default ContactForm;
