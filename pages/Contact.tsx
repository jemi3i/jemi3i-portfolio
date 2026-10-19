import React, { useEffect, useRef, useState } from 'react';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<'pfe' | 'esc'>('pfe');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copying' | 'success' | 'error'>('idle');
  const copyAttempt = useRef(0);
  const resetCopyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    setCopyStatus('idle');
    return () => {
      copyAttempt.current += 1;
      clearTimeout(resetCopyTimer.current);
    };
  }, [inquiryType, name, organization, message]);

  const subject = inquiryType === 'pfe'
    ? `[PFE Internship Proposal] from ${organization || name || 'Recruiter'}`
    : `[ESC Volunteering Proposal] from ${organization || name || 'Organization'}`;

  const mailBody = `Hello Marwen,\n\nI am contacting you regarding a ${
    inquiryType === 'pfe' ? 'Final-Year Engineering Internship (PFE)' : 'European Solidarity Corps (ESC) Volunteering Opportunity'
  }.\n\nName: ${name || '[Your Name]'}\nOrganization: ${organization || '[Your Company / Organization]'}\n\nDetails:\n${message || '[Please describe the opportunity, location, and timeline]'}\n\nBest regards,`;

  const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

  const handleCopy = async () => {
    const attempt = ++copyAttempt.current;
    clearTimeout(resetCopyTimer.current);
    setCopyStatus('copying');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(`To: ${PROFILE.email}\nSubject: ${subject}\n\n${mailBody}`);
      if (attempt !== copyAttempt.current) return;
      setCopyStatus('success');
      resetCopyTimer.current = setTimeout(() => setCopyStatus('idle'), 3000);
    } catch {
      if (attempt === copyAttempt.current) setCopyStatus('error');
    }
  };

  const copyFeedback = copyStatus === 'success'
    ? 'Formatted transmission copied to clipboard.'
    : copyStatus === 'error'
      ? 'Copy failed. Please retry or use Direct Email.'
      : '';

  return (
    <div className="bg-brand-black pt-36 pb-24 px-6 md:px-12 min-h-screen text-brand-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column: Direct Credentials & Inquiry Tracks */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-brand-red"></span>
              <Text variant="mono" className="text-brand-red tracking-widest text-xs">
                TRANSMISSION_PORTAL // CONTACT
              </Text>
            </div>
            <Text as="h1" variant="hero" className="text-5xl md:text-7xl mb-6 uppercase leading-none font-display">
              INITIATE <br />
              <span className="text-brand-red italic">CONTACT.</span>
            </Text>
            <p className="font-sans text-base text-brand-white/70 leading-relaxed font-light">
              Available for final-year engineering internships (PFE 2026/2027) and European Solidarity Corps (ESC) volunteering opportunities.
            </p>
          </div>

          {/* Contact Coordinates */}
          <div className="space-y-6 border-y border-white/10 py-8">
            <div>
              <Text variant="mono" className="text-brand-red text-xs mb-1">DIRECT_EMAIL</Text>
              <a 
                href={`mailto:${PROFILE.email}`} 
                className="font-display font-bold text-xl md:text-2xl text-brand-white hover:text-brand-red transition-colors block"
              >
                {PROFILE.email}
              </a>
            </div>

            <div>
              <Text variant="mono" className="text-brand-red text-xs mb-1">LOCATION_BASE</Text>
              <span className="font-sans text-base text-brand-white/80 block">
                Tunis / Ariana, Tunisia (ESPRIT Campus)
              </span>
            </div>

            <div>
              <Text variant="mono" className="text-brand-red text-xs mb-1">CODE_PROFILE</Text>
              <a 
                href="https://github.com/jemi3i" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-sm text-brand-white hover:text-brand-red transition-colors inline-flex items-center gap-2"
              >
                <span>github.com/jemi3i</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>

          {/* Inquiry Options Guide */}
          <div className="p-6 bg-brand-gray/40 border border-white/10 space-y-3">
            <Text variant="mono" className="text-brand-white text-xs font-bold">
              TWO DIRECT DISCOVERY CHANNELS:
            </Text>
            <p className="font-sans text-xs text-brand-white/60 leading-relaxed">
              <span className="text-brand-red font-mono font-bold">1. PFE INTERNSHIP:</span> 4-6 months full-stack web engineering, distributed systems, or front-end innovation.
            </p>
            <p className="font-sans text-xs text-brand-white/60 leading-relaxed">
              <span className="text-brand-white font-mono font-bold">2. ESC VOLUNTEERING:</span> Solidarity projects in youth empowerment, inclusive sports coaching, and digital education.
            </p>
          </div>
        </div>

        {/* Right Column: Pre-configured Transmission Generator */}
        <div className="lg:col-span-7 bg-brand-gray/40 p-8 md:p-14 border border-white/10 relative">
          <div className="mb-8">
            <Text variant="label" className="text-brand-red mb-2">PREPARE_TRANSMISSION</Text>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-brand-white uppercase">
              Compose Direct Message
            </h3>
            <p className="font-sans text-xs text-brand-white/50 mt-1">
              Select inquiry intent to format an email dispatch to {PROFILE.email}.
            </p>
          </div>

          {/* Track Selector Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              onClick={() => setInquiryType('pfe')}
              aria-pressed={inquiryType === 'pfe'}
              className={`p-4 border font-mono text-xs uppercase tracking-widest text-left transition-all ${
                inquiryType === 'pfe'
                  ? 'border-brand-red bg-brand-red/10 text-white font-bold'
                  : 'border-white/10 hover:border-white/30 text-white/50'
              }`}
            >
              <span className="block text-[10px] text-brand-red mb-1">CHANNEL_01</span>
              Engineering (PFE)
            </button>

            <button
              type="button"
              onClick={() => setInquiryType('esc')}
              aria-pressed={inquiryType === 'esc'}
              className={`p-4 border font-mono text-xs uppercase tracking-widest text-left transition-all ${
                inquiryType === 'esc'
                  ? 'border-brand-red bg-brand-red/10 text-white font-bold'
                  : 'border-white/10 hover:border-white/30 text-white/50'
              }`}
            >
              <span className="block text-[10px] text-brand-red mb-1">CHANNEL_02</span>
              ESC Volunteering
            </button>
          </div>

          {/* Interactive Form Fields */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="font-mono text-[10px] uppercase tracking-widest text-brand-red block mb-2">
                  Your Identifier / Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Connor"
                  className="w-full bg-brand-black border-b border-white/20 px-4 py-3 focus:outline-none focus:border-brand-red font-sans text-sm text-brand-white"
                />
              </div>

              <div>
                <label htmlFor="contact-org" className="font-mono text-[10px] uppercase tracking-widest text-brand-red block mb-2">
                  Organization / Company
                </label>
                <input
                  id="contact-org"
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder={inquiryType === 'pfe' ? 'e.g. Tech Studio' : 'e.g. Youth NGO'}
                  className="w-full bg-brand-black border-b border-white/20 px-4 py-3 focus:outline-none focus:border-brand-red font-sans text-sm text-brand-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="font-mono text-[10px] uppercase tracking-widest text-brand-red block mb-2">
                Proposal Context / Message
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={inquiryType === 'pfe' 
                  ? "Describe internship position, technical requirements, and starting date..." 
                  : "Describe ESC hosting project, activities, and host community details..."}
                rows={4}
                className="w-full bg-brand-black border-b border-white/20 p-4 focus:outline-none focus:border-brand-red font-sans text-sm text-brand-white resize-none"
              />
            </div>

            {/* Transmission Action Buttons */}
            <div className="pt-6 space-y-4">
              <Button href={mailtoUrl} fullWidth variant="primary" className="py-4 text-xs font-mono">
                Transmit via Email Client →
              </Button>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={copyStatus === 'copying'}
                  aria-busy={copyStatus === 'copying'}
                  className="font-mono text-[10px] text-white/50 hover:text-brand-red underline tracking-widest uppercase transition-colors"
                >
                  {copyStatus === 'success' ? '✓ Transmission Copied to Clipboard!'
                    : copyStatus === 'error' ? 'Copy failed — retry or use Direct Email'
                    : 'Copy Formatted Text to Clipboard'}
                </button>

                <span className="font-mono text-[9px] text-white/30 uppercase">
                  DIRECT DISPATCH // NO FAKE BOT
                </span>
              </div>
            </div>
          </div>

          <span role="status" aria-live="polite" aria-atomic="true" className="sr-only">
            {copyFeedback}
          </span>

          {/* Brutalist Aesthetic Corner Brackets */}
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-brand-red pointer-events-none" />
          <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-brand-red pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
