import React from 'react';
import { motion } from 'motion/react';

export function HowItWorks() {
  return (
    <section className="w-full bg-surface-container-lowest py-20 border-t border-outline-variant/30" id="how-it-works">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Operational Sequence</span>
          <h2 className="text-3xl lg:text-4xl text-on-surface font-bold mt-1">
            Understand. Match. Route. Connect.
          </h2>
          <p className="mt-2 text-sm text-on-surface-variant">
            A continuous, deterministic 4-stage pipeline orchestrating unstructured civic dialogue into verifiable programmatic linkages.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/* Spine Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary -translate-y-12 opacity-30 z-0 pointer-events-none"></div>

          {/* Steps */}
          {[
            {
              num: '01',
              icon: 'psychology',
              title: 'Understand',
              desc: 'Interprets ambiguous user intent, tacit skills, explicit needs, agricultural constraints, and geographical location.',
              label: 'INPUT_PARSING_READY',
              color: 'text-primary',
              bg: 'bg-primary/10',
              hoverBorder: 'hover:border-primary/50'
            },
            {
              num: '02',
              icon: 'join_inner',
              title: 'Match',
              desc: 'Identifies relevant people, institutional resources, funding schemes, and municipal opportunities across fragmented registries.',
              label: 'WEIGHTED_COSINE_SIM',
              color: 'text-secondary',
              bg: 'bg-secondary/10',
              hoverBorder: 'hover:border-secondary/50'
            },
            {
              num: '03',
              icon: 'alt_route',
              title: 'Route',
              desc: 'Filters by proximity, eligibility, and urgency to direct the query toward verified institutional and community pathways.',
              label: 'GEO_PATHWAY_DISPATCH',
              color: 'text-tertiary',
              bg: 'bg-tertiary/10',
              hoverBorder: 'hover:border-tertiary/50'
            },
            {
              num: '04',
              icon: 'handshake',
              title: 'Connect',
              desc: 'Outputs a tangible, unambiguous next step: contact coordinate, operational office hours, or verified collaboration partner.',
              label: 'HUMAN_ACTION_DELIVERY',
              color: 'text-primary-fixed',
              bg: 'bg-primary-fixed/10',
              hoverBorder: 'hover:border-primary-fixed/50'
            }
          ].map((step, idx) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative z-10 p-space-lg rounded-lg bg-surface-container border border-outline-variant/40 flex flex-col justify-between ${step.hoverBorder} transition-colors`}
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="text-3xl font-bold text-outline-variant/80 font-display">{step.num}</span>
                  <span className={`w-8 h-8 rounded ${step.bg} ${step.color} flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-base">{step.icon}</span>
                  </span>
                </div>
                <h3 className="text-lg text-on-surface uppercase tracking-wide font-semibold">{step.title}</h3>
                <p className="mt-space-xs text-xs text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className={`mt-space-md pt-space-xs border-t border-outline-variant/20 text-[10px] font-bold ${step.color} font-mono`}>
                {step.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
