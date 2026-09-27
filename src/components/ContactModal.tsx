import { useState } from "react";
import { X, Phone, MessageCircle, Navigation, Copy, Check, Clock, MapPin, Send } from "lucide-react";
import { businessInfo } from "../data/business";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiryType: "Takeout Order",
    notes: ""
  });

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(businessInfo.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sensations Bake and Coffee House, I would like to inquire about your menu / bakes:`
  );
  const whatsappUrl = `https://wa.me/923021555855?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Order and Contact Sensations"
    >
      <div
        className="bg-[#FAF7F2] dark:bg-[#1C120C] text-[#231711] dark:text-[#FAF7F2] rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#231711]/10 dark:border-[#FAF7F2]/10 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-[#4A3B32] dark:text-[#DDD3C7] hover:bg-[#F5EFEB] dark:hover:bg-[#251A13] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D58] dark:text-[#C59445] block mb-1">
            Sensations Bake & Coffee House
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#231711] dark:text-[#FAF7F2]">
            Order & Get in Touch
          </h3>
          <p className="text-xs sm:text-sm text-[#4A3B32] dark:text-[#DDD3C7] mt-1 leading-relaxed">
            Connect directly with the café counter in Rahim Yar Khan for dine-in, takeout, or delivery orders.
          </p>
        </div>

        {/* Instant Action Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <a
            href={`tel:${businessInfo.rawPhone}`}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#231711] dark:bg-[#251A13] text-[#FAF7F2] hover:bg-[#3A2A20] transition-colors shadow-xs border border-[#FAF7F2]/10"
          >
            <div className="p-2 rounded-xl bg-[#FAF7F2]/10 text-[#C59445]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold text-[#E5B869] block">
                Call Direct
              </span>
              <span className="text-xs font-bold font-mono">
                {businessInfo.phone}
              </span>
            </div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#1F4E38] text-white hover:bg-[#163828] transition-colors shadow-xs"
          >
            <div className="p-2 rounded-xl bg-white/10 text-emerald-300">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold text-emerald-200 block">
                WhatsApp Chat
              </span>
              <span className="text-xs font-semibold">
                Send Direct Message
              </span>
            </div>
          </a>
        </div>

        {/* Location Quick Strip */}
        <div className="p-4 rounded-2xl bg-[#F5EFEB] dark:bg-[#221812] border border-[#231711]/8 dark:border-[#FAF7F2]/8 mb-6 text-xs text-[#4A3B32] dark:text-[#DDD3C7] space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#C59445] shrink-0 mt-0.5" />
              <span>{businessInfo.fullAddress}</span>
            </div>
            <button
              onClick={handleCopy}
              className="text-[#8C6D58] dark:text-[#E5B869] hover:underline font-semibold shrink-0 flex items-center gap-1"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-[#231711]/5 dark:border-[#FAF7F2]/5 text-[11px] text-[#8C6D58] dark:text-[#B59E8D]">
            <Clock className="w-3.5 h-3.5" />
            <span>Open Daily: 10:00 AM – 1:00 AM</span>
          </div>
        </div>

        {/* Demo Inquiry Form */}
        <div className="pt-2 border-t border-[#231711]/10 dark:border-[#FAF7F2]/10">
          <h4 className="font-serif text-lg font-semibold text-[#231711] dark:text-[#FAF7F2] mb-2">
            Send an Inquiry / Pre-Order Request
          </h4>

          {submitted ? (
            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mx-auto mb-2">
                <Check className="w-5 h-5" />
              </div>
              <h5 className="font-serif text-lg font-semibold text-emerald-900 dark:text-emerald-200 mb-1">
                Demo Inquiry Prepared
              </h5>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 leading-relaxed mb-4">
                Thank you! On the live production site, this message is routed directly to the Sensations staff WhatsApp or ordering desk.
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-800"
                >
                  Forward via WhatsApp
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs text-emerald-800 dark:text-emerald-300 underline"
                >
                  New Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6D58] dark:text-[#C59445] block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#120B07] border border-[#231711]/15 dark:border-[#FAF7F2]/15 text-xs text-[#231711] dark:text-[#FAF7F2] focus:outline-none focus:border-[#C59445]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6D58] dark:text-[#C59445] block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0300 0000000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#120B07] border border-[#231711]/15 dark:border-[#FAF7F2]/15 text-xs text-[#231711] dark:text-[#FAF7F2] focus:outline-none focus:border-[#C59445]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6D58] dark:text-[#C59445] block mb-1">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-[#120B07] border border-[#231711]/15 dark:border-[#FAF7F2]/15 text-xs text-[#231711] dark:text-[#FAF7F2] focus:outline-none focus:border-[#C59445]"
                  >
                    <option>Takeout Order</option>
                    <option>Delivery Inquiry</option>
                    <option>Custom Cake / Celebration</option>
                    <option>Table Reservation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6D58] dark:text-[#C59445] block mb-1">
                  Items or Message Details
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 2 Chicken Cheese Donuts and 1 Mocha Cold Coffee for 8:00 PM pickup."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#120B07] border border-[#231711]/15 dark:border-[#FAF7F2]/15 text-xs text-[#231711] dark:text-[#FAF7F2] focus:outline-none focus:border-[#C59445]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#231711] dark:bg-[#C59445] hover:bg-[#3A2A20] dark:hover:bg-[#DFB268] text-[#FAF7F2] dark:text-[#120B07] font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Demo Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
