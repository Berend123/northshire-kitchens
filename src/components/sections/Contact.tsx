import React from "react";
import Image from "next/image";

export default function Contact() {
    const [formState, setFormState] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setStatus('success');
            setFormState({ name: '', email: '', phone: '', message: '' });

            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="relative py-16 px-6 md:px-12 lg:px-24 text-center text-white">
            <Image
                src="/images/rydal.jpg"
                alt="Rydal Kitchen Background"
                fill
                style={{ objectFit: 'cover' }}
                quality={90}
                priority
                className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10">
                <h2 className="text-3xl font-bold">Let's Create Your Dream Kitchen</h2>
                <p className="mt-2 text-lg max-w-3xl mx-auto">
                    We'd love to help you bring your kitchen vision to life. Whether you're after a full renovation,
                    a brand-new design, or simply need advice, our team is here to guide you every step of the way.
                </p>
                
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Production Facility & Opening Hours */}
                    <div className="bg-white bg-opacity-90 text-gray-900 shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold">📍 Production Facility</h3>
                        <p className="mt-2">
                            Unit 2, Binks Close, Standard Way Industrial Park,<br />
                            Northallerton, North Yorkshire, DL6 2YB
                        </p>
                        
                        <h3 className="text-xl font-semibold mt-6">🕒 Opening Hours</h3>
                        <p>
                            Monday – Friday: 9:00 AM – 5:00 PM <br />
                            Saturday: 10:00 AM – 2:00 PM <br />
                            Sunday: Closed
                        </p>
                    </div>

                    {/* Contact Information & Social Media */}
                    <div className="bg-white bg-opacity-90 text-gray-900 shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold">📞 Get in Touch</h3>
                        <p className="mt-2">
                            <strong>Call Us:</strong>
                            <a href="tel:+447561317660" className="text-orange-500 hover:underline"> +44 7561 317660</a> <br />
                            <strong>Email:</strong>
                            <a href="mailto:sales@northshirekitchens.com" className="text-orange-500 hover:underline"> sales@northshirekitchens.com</a>
                        </p>

                        <h3 className="text-xl font-semibold mt-6">🔹 Follow Us</h3>
                        <p>
                            📸 Facebook:
                            <a 
                                href="https://www.facebook.com/profile.php?id=61573564756417" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-orange-500 hover:underline"
                            >
                                Northshire Kitchens
                            </a>
                        </p>
                        <p>
                            📱 Instagram:
                            <a 
                                href="https://www.instagram.com/northshire_kitchens" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-orange-500 hover:underline"
                            >
                                @northshire_kitchens
                            </a>
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="mt-10 bg-white bg-opacity-95 text-gray-900 shadow-lg rounded-lg p-6 max-w-lg mx-auto">
                    <h3 className="text-2xl font-bold">💬 Request a Free Consultation</h3>
                    <p className="mt-2">Fill out our contact form, and we'll get back to you within 24 hours.</p>
                    
                    <form onSubmit={handleSubmit} className="mt-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone Number (Optional)"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-orange-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 h-32 focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && (
                            <p className="mt-4 text-green-600">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
} 