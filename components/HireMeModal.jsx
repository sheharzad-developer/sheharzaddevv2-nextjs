import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './reusable/Button';

const selectOptions = [
	'Web Application',
	'Mobile Application',
	'UI/UX Design',
	'Branding',
];

function HireMeModal({ onClose, onRequest }) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: 'Web Application',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState('');

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('');

		try {
			// EmailJS configuration
			const serviceId = 'service_f6m0myb'; // ✅ Your Service ID
			const templateId = 'template_2iz1ofn'; // ✅ Your Template ID
			const publicKey = 'cyhAdV4SulzwmwCXd'; // ✅ Your Public Key

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
			setFormData({ name: '', email: '', subject: 'Web Application', message: '' });
			setTimeout(() => {
				onClose();
			}, 2000);

		} catch (error) {
			console.error('Error sending email:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
		>
			{/* Modal Backdrop */}
			<div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

			{/* Modal Content */}
			<main className="flex flex-col items-center justify-center h-full w-full">
				<div className="modal-wrapper flex items-center z-30">
					<div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
						<div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
							<h5 className=" text-primary-dark dark:text-primary-light text-xl">
								What project are you looking for?
							</h5>
							<button
								onClick={onClose}
								className="px-4 font-bold text-primary-dark dark:text-primary-light"
							>
								<FiX className="text-3xl" />
							</button>
						</div>
						<div className="modal-body p-5 w-full h-full">
							{submitStatus === 'success' && (
								<div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
									<p>✅ Request sent successfully! I&apos;ll get back to you soon.</p>
								</div>
							)}
							{submitStatus === 'error' && (
								<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
									<p>❌ Failed to send request. Please try again or contact me directly.</p>
								</div>
							)}
							<form onSubmit={handleSubmit} className="max-w-xl m-4 text-left">
								<div className="">
									<input
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="name"
										name="name"
										type="text"
										required
										placeholder="Name"
										aria-label="Name"
										value={formData.name}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mt-6">
									<input
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="email"
										name="email"
										type="email"
										required
										placeholder="Email"
										aria-label="Email"
										value={formData.email}
										onChange={handleInputChange}
									/>
								</div>
								<div className="mt-6">
									<select
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="subject"
										name="subject"
										required
										aria-label="Project Category"
										value={formData.subject}
										onChange={handleInputChange}
									>
										{selectOptions.map((option) => (
											<option
												className="text-normal sm:text-md"
												key={option}
												value={option}
											>
												{option}
											</option>
										))}
									</select>
								</div>

								<div className="mt-6">
									<textarea
										className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
										id="message"
										name="message"
										cols="14"
										rows="6"
										aria-label="Details"
										placeholder="Project description"
										required
										value={formData.message}
										onChange={handleInputChange}
									></textarea>
								</div>

								<div className="mt-6 pb-4 sm:pb-1">
									<button
										type="submit"
										disabled={isSubmitting}
										className={`px-4 sm:px-6 py-2 sm:py-2.5 text-white rounded-md focus:ring-1 focus:ring-indigo-900 duration-500 ${
											isSubmitting 
												? 'bg-gray-400 cursor-not-allowed' 
												: 'bg-indigo-500 hover:bg-indigo-600'
										}`}
										aria-label="Submit Request"
									>
										<Button title={isSubmitting ? "Sending..." : "Send Request"} />
									</button>
								</div>
							</form>
						</div>
						<div className="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
							<span
								onClick={onClose}
								type="button"
								className="px-4
									sm:px-6
									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
									rounded-md
									focus:ring-1 focus:ring-indigo-900 duration-500"
								aria-label="Close Modal"
							>
								<Button title="Close" />
							</span>
						</div>
					</div>
				</div>
			</main>
		</motion.div>
	);
}

export default HireMeModal;
