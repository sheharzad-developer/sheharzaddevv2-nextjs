import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCalendar, FiX } from 'react-icons/fi';
import { FaWhatsapp as FaWhatsappIcon, FaTelegram as FaTelegramIcon } from 'react-icons/fa';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Sheharzad! I'd like to discuss a project with you.");
    window.open(`https://wa.me/923160144176?text=${message}`, '_blank');
    setIsOpen(false);
  };

  const handleTelegramClick = () => {
    const message = encodeURIComponent("Hi Sheharzad! I'd like to discuss a project with you.");
    window.open(`https://t.me/sheharzad_developer?text=${message}`, '_blank');
    setIsOpen(false);
  };

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/sheharzad-salahuddin9000/30min', '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <style jsx>{`
        .floating-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
        
        .contact-option {
          position: absolute;
          bottom: 70px;
          right: 0;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        .contact-option:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
        }
        
        .whatsapp-option {
          background: #25D366;
          color: white;
        }
        
        .telegram-option {
          background: #0088cc;
          color: white;
        }
        
        .calendly-option {
          background: #6366f1;
          color: white;
        }
      `}</style>

      <div className="floating-button">
        <AnimatePresence>
          {isOpen && (
            <>
              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                className="contact-option whatsapp-option"
                onClick={handleWhatsAppClick}
                title="Chat on WhatsApp"
              >
                <FaWhatsappIcon className="text-xl" />
              </motion.div>

              {/* Telegram */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="contact-option telegram-option"
                onClick={handleTelegramClick}
                title="Chat on Telegram"
              >
                <FaTelegramIcon className="text-xl" />
              </motion.div>

              {/* Calendly */}
              <motion.div
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="contact-option calendly-option"
                onClick={handleCalendlyClick}
                title="Book a Coffee Chat"
              >
                <FiCalendar className="text-xl" />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-indigo-500 hover:bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
          title="Quick Contact"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiX className="text-2xl" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
};

export default FloatingContactButton;
