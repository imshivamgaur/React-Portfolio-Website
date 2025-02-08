import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!🚀");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again!❌");
          console.error("Error:", error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <motion.div
      id="contact"
      className="flex scroll-target min-h-screen w-full flex-col items-center justify-center px-6 text-white md:px-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Contact Me</h1>
      </div>

      {/* Content - Image & Form */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-20 lg:gap-50 py-10 ">
        {/* Left Side - Image */}
        <motion.div
          className="flex-1 flex justify-center max-w-[400px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/contact.svg"
            alt="Contact"
            className="w-full rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          className="flex-1 flex flex-col items-center w-[90%] "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full flex flex-col gap-4"
          >
            <label className="text-lg">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter name"
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-all"
              required
            />

            <label className="text-lg">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter email"
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-all"
              required
            />

            <label className="text-lg">Message</label>
            <textarea
              name="message"
              placeholder="Write message..."
              className="p-3 h-32 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 hover:border-blue-400 transition-all"
              required
            />

            <button
              type="submit"
              className="mt-6 cursor-pointer border border-blue-800 px-7 py-3 sm:px-8 sm:py-3 
                bg-transparent text-white rounded-xl shadow-sm shadow-blue-600 
                hover:shadow-purple-800 transition-all duration-300 transform text-xs sm:text-sm md:text-base 
                disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
