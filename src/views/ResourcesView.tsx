import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../components/common/SectionHeader';
import { blogPostsData, techDirectoryData, faqsData, companyNewsData } from '../data/resourcesData';
import {
  FileText,
  Search,
  Cpu,
  HelpCircle,
  Newspaper,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Calendar,
  Layers
} from 'lucide-react';

interface ResourcesViewProps {
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onNavigate, onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'blog' | 'tech' | 'faq' | 'news'>('blog');
  const [techSearch, setTechSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const filteredTech = techDirectoryData.filter(t =>
    t.name.toLowerCase().includes(techSearch.toLowerCase()) ||
    t.category.toLowerCase().includes(techSearch.toLowerCase()) ||
    t.popularFor.some(p => p.toLowerCase().includes(techSearch.toLowerCase()))
  );

  return (
    <div id="resources-view-root" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionHeader
        badge="Engineering Knowledge Base"
        title="Resources, Tech Stack &"
        highlightedWord="Playbooks"
        subtitle="Explore our architectural guides, technology ecosystem benchmarks, company updates, and answers to common technical inquiries."
      />

      {/* Resource View Sub-Navigation Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 border-b border-slate-200 pb-4">
        {[
          { id: 'blog', label: 'Technical Articles & Guides', icon: FileText },
          { id: 'tech', label: 'Technology Stack Directory', icon: Cpu },
          { id: 'faq', label: 'Frequently Asked Questions', icon: HelpCircle },
          { id: 'news', label: 'Company Announcements', icon: Newspaper }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/25 scale-102'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {/* 1. BLOG TAB */}
        {activeTab === 'blog' && (
          <motion.div
            key="blog-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPostsData.map((post) => (
                <div
                  key={post.id}
                  className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-red-300 shadow-2xs hover:shadow-xl hover:shadow-red-500/10 transition-all group card-hover-lift"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 mb-3 font-medium">
                      <span className="px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200 text-red-700 font-mono font-bold">{post.category}</span>
                      <span className="font-mono">{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-display font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-red-600" />
                      <span>{post.publishDate}</span>
                    </div>
                    <span className="font-bold text-red-600 group-hover:underline flex items-center gap-1">
                      <span>Read Article</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 2. TECH STACK DIRECTORY TAB */}
        {activeTab === 'tech' && (
          <motion.div
            key="tech-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            id="technology-directory"
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-display font-bold text-slate-900">Full Technology Ecosystem</h3>
                <p className="text-xs text-slate-600">All tools, languages, and cloud providers actively deployed in client production systems.</p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search languages, DBs, cloud..."
                  value={techSearch}
                  onChange={(e) => setTechSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-red-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTech.map((tech, idx) => (
                <div key={idx} className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-red-300 space-y-2 card-hover-lift transition-all">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900 font-display">{tech.name}</span>
                    <span className="text-[10px] uppercase font-mono text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200 font-bold">
                      {tech.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{tech.description}</p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                    <span>Experience: <strong className="text-slate-900">{tech.experienceYears}</strong></span>
                    <span>Primary: <strong className="text-slate-900">{tech.popularFor[0]}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 3. FAQ TAB */}
        {activeTab === 'faq' && (
          <motion.div
            key="faq-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-display font-bold text-slate-900">Frequently Asked Questions</h3>
              <p className="text-xs text-slate-600 mt-1">Clear answers regarding code ownership, delivery models, post-launch support, and SLAs.</p>
            </div>

            {/* Grouped FAQs */}
            {faqsData.map((group, gIdx) => (
              <div key={gIdx} className="space-y-3">
                <div className="text-xs font-bold font-mono uppercase text-red-700 tracking-wider">
                  {group.category}
                </div>
                <div className="space-y-3">
                  {group.items.map((faq, fIdx) => {
                    const globalIdx = gIdx * 100 + fIdx;
                    const isOpen = activeFaq === globalIdx;
                    return (
                      <div key={fIdx} className="rounded-3xl border border-slate-200 bg-white shadow-2xs overflow-hidden transition-colors hover:border-red-200">
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : globalIdx)}
                          className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 hover:text-red-600 transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-red-600' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="px-5 pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/70"
                            >
                              {faq.answer}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* 4. COMPANY NEWS TAB */}
        {activeTab === 'news' && (
          <motion.div
            key="news-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            {companyNewsData.map((item) => (
              <div key={item.id} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-2 card-hover-lift hover:border-red-300 transition-all">
                <div className="flex items-center justify-between text-[11px] text-red-700 font-mono font-bold">
                  <span>{item.date}</span>
                  <span className="px-2 py-0.5 rounded-full bg-red-50 border border-red-200">{item.category}</span>
                </div>
                <h4 className="text-base font-display font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

