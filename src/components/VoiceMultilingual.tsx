import React from 'react';

export function VoiceMultilingual() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Human-Centric Interfaces</span>
            <h2 className="text-3xl lg:text-4xl text-on-surface font-bold mt-1">
              Technology should adapt to people.
            </h2>
            <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
              In Gujarat and across India, complex English form interfaces exclude millions of capable citizens. SANG enables anyone to speak naturally in their mother tongue to unlock opportunities.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded bg-surface-container border border-outline-variant/40 text-[10px] font-bold text-on-surface">Gujarati (ગુજરાતી)</span>
              <span className="px-3 py-1 rounded bg-surface-container border border-outline-variant/40 text-[10px] font-bold text-on-surface">Hindi (हिन्दी)</span>
              <span className="px-3 py-1 rounded bg-surface-container border border-outline-variant/40 text-[10px] font-bold text-on-surface">Tamil (தமிழ்)</span>
              <span className="px-3 py-1 rounded bg-surface-container border border-outline-variant/40 text-[10px] font-bold text-on-surface">English</span>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="p-8 rounded-xl bg-surface-container border border-outline-variant/40 relative shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-error animate-ping"></span>
                  <span className="font-mono text-[10px] text-on-surface font-bold uppercase">Voice Input Stream // Native Audio Ingest</span>
                </div>
                <span className="font-mono text-[10px] text-primary font-bold">Bitrate: 16kHz PCM</span>
              </div>
              
              <div className="h-16 rounded bg-surface-container-lowest p-3 flex items-center justify-between gap-1 mb-6">
                {[4, 8, 12, 14, 10, 6, 12, 16, 10, 5, 14, 8, 3].map((h, i) => (
                  <div 
                    key={i} 
                    className={`w-1.5 ${i % 3 === 0 ? 'bg-secondary' : 'bg-primary'} rounded animate-pulse`} 
                    style={{ height: `${h * 4}px`, animationDelay: `${i * 80}ms` }}
                  ></div>
                ))}
              </div>
              
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded bg-surface-container-high border border-outline-variant/30 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg shrink-0">mic</span>
                  <div>
                    <span className="text-[10px] font-bold text-outline uppercase block mb-1">Raw Voice Transcription (Gujarati):</span>
                    <span className="text-on-surface font-medium">"મારે કપાસના પાકમાં જીવાત નિયંત્રણ માટે નજીકના કૃષિ કેન્દ્ર સાથે વાત કરવી છે."</span>
                  </div>
                </div>
                <div className="p-3 rounded bg-surface-container-high border border-outline-variant/30 flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg shrink-0">translate</span>
                  <div>
                    <span className="text-[10px] font-bold text-outline uppercase block mb-1">Normalized Semantic Translation:</span>
                    <span className="text-on-surface font-medium">"I want to connect with the nearest agricultural center for pest management in my cotton crop."</span>
                  </div>
                </div>
                <div className="p-3 rounded bg-surface-container-high border border-primary/30 flex items-center justify-between">
                  <span className="text-primary font-mono text-[10px] font-bold">DIRECT DESTINATION: KVK Vadodara Agricultural Helpdesk</span>
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary text-[10px] font-bold">READY TO DIAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
