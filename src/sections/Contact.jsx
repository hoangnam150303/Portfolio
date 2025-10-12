import React, { useState, useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Cập nhật dữ liệu khi người dùng nhập
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gửi form qua EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_MAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_MAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_MAILJS_PUBLIC_KEY
      );

      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full md:py-20 py-10 bg-black text-white">
      <TitleHeader title="Get In Touch With Me" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 grid-cols-1 gap-10 items-center mt-20">
        {/* LEFT: FORM */}
        <div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              ></textarea>
            </div>

            {/* Send Button */}
            <button
              type="submit"
              disabled={loading}
              className="relative overflow-hidden font-medium py-3 px-8 rounded-lg w-fit text-white 
              bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600
              hover:from-purple-500 hover:via-fuchsia-500 hover:to-pink-500
              transition-all duration-500 shadow-lg hover:shadow-fuchsia-500/40"
            >
              <span className="relative z-10">
                {loading ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/mail.png"
            alt="Contact"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
