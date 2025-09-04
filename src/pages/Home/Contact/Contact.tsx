// src/components/Contact/Contact.tsx
import { useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [subEmail, setSubEmail] = useState("");
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });
  const [subStatus, setSubStatus] = useState<{
    type: "idle" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const emailIsValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // basic validation
    if (!form.name.trim()) {
      setStatus({ type: "error", message: "Name is required." });
      return;
    }
    if (!emailIsValid(form.email)) {
      setStatus({ type: "error", message: "Enter a valid email." });
      return;
    }
    if (!form.message.trim()) {
      setStatus({ type: "error", message: "Message can not be empty." });
      return;
    }

    // Simulate send (replace this with real API call)
    setStatus({ type: "idle" });
    try {
      // Example placeholder: call your API or EmailJS here
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
      setStatus({
        type: "success",
        message: "Thanks! We received your message.",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        type: "error",
        message: "Failed to send. Try again later." + err,
      });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailIsValid(subEmail)) {
      setSubStatus({ type: "error", message: "Enter a valid email." });
      return;
    }

    // Simulate subscribe (replace with real subscribe API)
    try {
      setSubStatus({
        type: "success",
        message: "Subscribed! Check your inbox.",
      });
      setSubEmail("");
    } catch {
      setSubStatus({
        type: "error",
        message: "Subscription failed. Try again.",
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold">Get in touch</h2>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Questions, feedback or partnership? Send us a message or subscribe
            for updates.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit} noValidate>
              <label className="block">
                <span className="text-sm font-medium text-gray-700">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Your name"
                  required
                  aria-required="true"
                />
              </label>

              <label className="block mt-4">
                <span className="text-sm font-medium text-gray-700">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="you@example.com"
                  required
                  aria-required="true"
                />
              </label>

              <label className="block mt-4">
                <span className="text-sm font-medium text-gray-700">
                  Message
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Write your message..."
                  required
                  aria-required="true"
                />
              </label>

              {status.type === "error" && (
                <p className="mt-3 text-sm text-red-600" role="alert">
                  {status.message}
                </p>
              )}
              {status.type === "success" && (
                <p className="mt-3 text-sm text-green-600" role="status">
                  {status.message}
                </p>
              )}

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ name: "", email: "", message: "" })}
                  className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50 transition"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Subscribe Box */}
          <div className="rounded-2xl border p-6 md:p-8 bg-gray-50 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium">Subscribe for updates</h3>
              <p className="mt-2 text-sm text-gray-700">
                Get product updates, articles and resources — delivered monthly.
              </p>

              <form onSubmit={handleSubscribe} className="mt-4" noValidate>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                    aria-required="true"
                  />
                </label>

                {subStatus.type === "error" && (
                  <p className="mt-3 text-sm text-red-600" role="alert">
                    {subStatus.message}
                  </p>
                )}
                {subStatus.type === "success" && (
                  <p className="mt-3 text-sm text-green-600" role="status">
                    {subStatus.message}
                  </p>
                )}

                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-black text-white px-4 py-2 font-medium hover:opacity-90 transition"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              By subscribing you agree to receive email updates. You can
              unsubscribe at any time.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
