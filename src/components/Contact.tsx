import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle2, Copy, MapPin, Briefcase } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = 'milan.rajawat@example.com';
  const linkedinUrl = 'https://www.linkedin.com/in/milan-rajawat';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate real send feedback
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Let's build something great together.
          </h2>
          <p className="text-slate-400 text-base mt-2 font-sans">
            Have a project in mind, a mechanical design challenge, or looking to add a passionate product design engineer to your team? I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-white font-sans">
                Contact Details & Links
              </h3>

              {/* Email item */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 truncate">
                  <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-teal-300 transition-colors font-medium truncate block"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn item */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-3 group hover:border-teal-500/40 transition-all block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                      linkedin.com/in/milan-rajawat
                    </span>
                  </div>
                </div>
                <span className="text-xs text-slate-500 group-hover:text-teal-400 font-mono">→</span>
              </a>

              {/* Availability Notice */}
              <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/20 space-y-2">
                <div className="flex items-center gap-2 text-teal-300 text-xs font-bold font-mono">
                  <Briefcase className="w-4 h-4 text-teal-400" />
                  OPPORTUNITIES & ROLES
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Open to full-time Mechanical / Product Design Engineering roles, New Product Development (NPD), and specialized engineering consulting.
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono pt-1">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  <span>Canada & International Remote / Relocation</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic">
                * Note: Contact email placeholder can be updated in code or via Settings.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2 font-sans">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-sans">
                Fill in the form below and I will respond promptly within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-teal-500/10 border border-teal-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-300 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You, {formData.name}!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your message has been received. I look forward to reviewing your inquiry and speaking soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 text-xs font-mono text-teal-400 underline hover:text-teal-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Subject / Project Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Product Design Role / Mechanical Engineering Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, timelines, or specifications..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700/80 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md hover:shadow-teal-500/20"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
