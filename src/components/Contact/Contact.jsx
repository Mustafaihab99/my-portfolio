/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { send } from "@emailjs/browser";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });
  const [showPopup, setShowPopup] = useState(false);

  const SERVICE_ID = "service_rxkgn0c";
  const TEMPLATE_ID_OWNER = "template_wakkfcd";
  const PUBLIC_KEY = "vWUPJn0xdTrECo8oJ";

  function validate() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        loading: false,
        success: null,
        error: "⚠️ Please fill all required fields.",
      });
      setShowPopup(true);
      return false;
    }
    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) {
      setStatus({
        loading: false,
        success: null,
        error: "⚠️ Enter a valid email address.",
      });
      setShowPopup(true);
      return false;
    }
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    if (!validate()) return;

    const templateParamsOwner = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject || "New message from portfolio",
      message: form.message,
      reply_to: form.email,
    };

    try {
      await send(
        SERVICE_ID,
        TEMPLATE_ID_OWNER,
        templateParamsOwner,
        PUBLIC_KEY
      );

      setStatus({
        loading: false,
        success: "✅ Message sent successfully. Thanks!",
        error: null,
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setShowPopup(true);
    } catch (err) {
      console.error("Email send error:", err);
      setStatus({
        loading: false,
        success: null,
        error: "❌ Failed to send message. Try again later.",
      });
      setShowPopup(true);
    }
  }

  // auto-close popup after 3s
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="bg-white dark:bg-[#181818] text-gray-900 dark:text-gray-200 px-6 md:px-20 py-20 transition-colors duration-500">
      <motion.div
        variants={item}
        className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Get In Touch
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Have a project or collaboration in mind? Drop a message — I reply
          fast.
        </p>
      </motion.div>

      <motion.form
        variants={item}
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-100 dark:bg-[#202020] rounded-2xl p-6 md:p-10 shadow-lg transition-colors duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            className="bg-gray-200 dark:bg-[#171717] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
          />
          <input
            className="bg-gray-200 dark:bg-[#171717] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
          />
        </div>

        <input
          className="w-full bg-gray-200 dark:bg-[#171717] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
          placeholder="Subject (optional)"
          value={form.subject}
          onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
        />

        <textarea
          className="w-full bg-gray-200 dark:bg-[#171717] placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4 min-h-[140px] resize-none"
          placeholder="Your message..."
          value={form.message}
          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
        />
        {/* Buttons remain the same */}
      </motion.form>
    </motion.section>
  );
}
