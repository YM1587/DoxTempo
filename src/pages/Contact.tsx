import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ContactForm from '../components/shared/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Reach out to discuss how DT Brands can help bring your vision to life."
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking to book a service, discuss a project, or simply have a question,
                fill out the form below and our team will get back to you promptly.
              </p>
              <ContactForm />
            </motion.div>
            
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Visit our office, give us a call, or send us an email. We're always happy to hear from you
                and discuss how our creative services can help your project succeed.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Creative Avenue, Innovation District<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:+254123456789" className="hover:text-gray-900 transition-colors">
                        +254 123 456 789
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@dtbrands.com" className="hover:text-gray-900 transition-colors">
                        info@dtbrands.com
                      </a>
                    </p>
                    <div className="mt-2 text-sm text-gray-500">
                      <p className="mb-1">For specific inquiries:</p>
                      <ul className="space-y-1">
                        <li>
                          <a href="mailto:studios@dtbrands.com" className="hover:text-gray-900 transition-colors">
                            studios@dtbrands.com
                          </a>
                          <span className="text-gray-400"> - Media Production</span>
                        </li>
                        <li>
                          <a href="mailto:infinite@dtbrands.com" className="hover:text-gray-900 transition-colors">
                            infinite@dtbrands.com
                          </a>
                          <span className="text-gray-400"> - Creative Services</span>
                        </li>
                        <li>
                          <a href="mailto:safaris@dtbrands.com" className="hover:text-gray-900 transition-colors">
                            safaris@dtbrands.com
                          </a>
                          <span className="text-gray-400"> - Travel & Safaris</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="ml-4">8:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="ml-4">9:00 AM - 2:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="ml-4">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <p className="text-gray-600 mb-3">
                  Stay updated with our latest projects and announcements on social media.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3.75c-1.702 0-1.914.007-2.582.038-.668.03-1.123.136-1.522.29-.413.16-.763.374-1.112.722-.348.348-.562.699-.723 1.112-.154.399-.26.854-.29 1.522-.03.668-.038.88-.038 2.581s.007 1.914.038 2.582c.03.668.136 1.123.29 1.522.16.413.374.763.722 1.112.348.348.699.562 1.112.723.399.154.854.26 1.522.29.668.03.88.038 2.581.038s1.914-.007 2.582-.038c.668-.03 1.123-.136 1.522-.29.413-.16.763-.374 1.112-.722.348-.348.562-.699.723-1.112.154-.399.26-.854.29-1.522.03-.668.038-.88.038-2.581s-.007-1.914-.038-2.582c-.03-.668-.136-1.123-.29-1.522-.16-.413-.374-.763-.722-1.112-.348-.348-.699-.562-1.112-.723-.399-.154-.854-.26-1.522-.29-.668-.03-.88-.038-2.581-.038zm0 1.125c1.67 0 1.867.006 2.526.036.609.028.939.13 1.16.215.291.113.5.248.719.467.218.219.353.428.466.719.085.221.187.551.215 1.16.03.659.036.856.036 2.526s-.006 1.867-.036 2.526c-.028.609-.13.939-.215 1.16-.113.291-.248.5-.467.719-.219.218-.428.353-.719.466-.221.085-.551.187-1.16.215-.659.03-.856.036-2.526.036s-1.867-.006-2.526-.036c-.609-.028-.939-.13-1.16-.215-.291-.113-.5-.248-.719-.467-.218-.219-.353-.428-.466-.719-.085-.221-.187-.551-.215-1.16-.03-.659-.036-.856-.036-2.526s.006-1.867.036-2.526c.028-.609.13-.939.215-1.16.113-.291.248-.5.467-.719.219-.218.428-.353.719-.466.221-.085.551-.187 1.16-.215.659-.03.856-.036 2.526-.036zm0 1.918a3.207 3.207 0 100 6.413 3.207 3.207 0 000-6.413zm0 5.289a2.082 2.082 0 110-4.164 2.082 2.082 0 010 4.164zm4.094-5.414a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05-.78-.83-1.9-1.36-3.16-1.36-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600">
              Visit our offices to meet our team and discuss your projects in person.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-64 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.28012035733!2d36.81978675!3d-1.2866049500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d62d4fccdd%3A0xb2f35b9c8c174263!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1661456998324!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DT Brands Nairobi Office Location"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Nairobi Headquarters</h3>
                <p className="text-gray-600 mb-3">
                  123 Creative Avenue, Innovation District<br />
                  Nairobi, Kenya
                </p>
                <div className="flex justify-between">
                  <a href="tel:+254123456789" className="text-dt-studios-600 hover:text-dt-studios-700 font-medium">
                    +254 123 456 789
                  </a>
                  <a 
                    href="https://goo.gl/maps/1234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-64 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.31451673266!2d39.6682325!3d-4.0551932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184013008b140f0f%3A0x92f518c408cb54cd!2sMombasa%2C%20Kenya!5e0!3m2!1sen!2sus!4v1661458011045!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DT Brands Mombasa Office Location"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mombasa Branch</h3>
                <p className="text-gray-600 mb-3">
                  456 Coastal Road, Beachfront Plaza<br />
                  Mombasa, Kenya
                </p>
                <div className="flex justify-between">
                  <a href="tel:+254987654321" className="text-dt-safaris-600 hover:text-dt-safaris-700 font-medium">
                    +254 987 654 321
                  </a>
                  <a 
                    href="https://goo.gl/maps/9876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and processes.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">How soon can you start a project?</h3>
              <p className="text-gray-600">
                Our timeline depends on the project scope and our current workload. Typically, we can begin within 1-2 weeks of finalizing project details and contract signing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">What's your pricing structure?</h3>
              <p className="text-gray-600">
                We offer custom quotes based on project requirements. After an initial consultation, we'll provide a detailed proposal with transparent pricing and no hidden fees.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">Do you work with clients internationally?</h3>
              <p className="text-gray-600">
                Yes! We work with clients globally for our creative and digital services. For safari experiences, we specialize in East African destinations but can customize experiences in other regions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-3">How do I book a safari experience?</h3>
              <p className="text-gray-600">
                Contact us through the form on this page or email directly at safaris@dtbrands.com. We'll schedule a consultation to discuss your travel preferences, budget, and desired experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;