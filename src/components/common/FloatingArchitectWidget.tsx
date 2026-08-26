import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Sparkles,
  X,
  Send,
  CheckCircle2,
  Bot,
  User,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  ChevronDown
} from 'lucide-react';

interface FloatingArchitectWidgetProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const FloatingArchitectWidget: React.FC<FloatingArchitectWidgetProps> = ({
  onOpenConsultation,
  onNavigate
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; action?: { label: string; onClick: () => void } }>>([
    {
      sender: 'ai',
      text: 'Hello! I am EVD AI Solution Architect. How can I help with your system architecture, budget estimate, or technology stack today?'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    'Estimate SaaS MVP Timeline',
    'Custom ERP vs Off-the-Shelf',
    'Hire Dedicated ODC Squad',
    'CERT-In Security Compliance'
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Simulate Architect Intelligence
    setTimeout(() => {
      let reply = '';
      let actionObj: { label: string; onClick: () => void } | undefined;

      const lower = query.toLowerCase();
      if (lower.includes('saas') || lower.includes('mvp') || lower.includes('estimate')) {
        reply = 'A production-grade SaaS MVP typically spans 6–10 weeks covering multi-tenant PostgreSQL schema, Next.js frontend, Stripe/Razorpay billing, and AWS automated CI/CD. Would you like a detailed sprint breakdown?';
        actionObj = {
          label: 'Launch Solution Estimator',
          onClick: () => {
            setIsOpen(false);
            onOpenConsultation();
          }
        };
      } else if (lower.includes('erp') || lower.includes('crm')) {
        reply = 'EVD Custom ERPs eliminate recurring per-user seat taxes ($50–$150/user/mo) while integrating multi-warehouse inventory, GST e-invoicing, and custom role permissions with 100% source code ownership.';
        actionObj = {
          label: 'View ERP Architecture',
          onClick: () => {
            setIsOpen(false);
            onNavigate('/services/erp-crm');
          }
        };
      } else if (lower.includes('odc') || lower.includes('hire') || lower.includes('squad') || lower.includes('dedicated')) {
        reply = 'Our dedicated squads consist of pre-vetted senior full-stack engineers, cloud architects, and QA leads operating inside secure VPC boundaries with 100% Git ownership from day 1.';
        actionObj = {
          label: 'Explore Engagement Models',
          onClick: () => {
            setIsOpen(false);
            onNavigate('/engagement-models');
          }
        };
      } else if (lower.includes('security') || lower.includes('cert-in') || lower.includes('vapt')) {
        reply = 'All EVD enterprise deliverables undergo OWASP Top 10 hardening, AES-256 data-at-rest encryption, and pre-audit readiness for CERT-In empanelled compliance audits.';
        actionObj = {
          label: 'Read Security Framework',
          onClick: () => {
            setIsOpen(false);
            onNavigate('/data-security-policy');
          }
        };
      } else {
        reply = `Thanks for asking about "${query}". EVD Technology provides full-stack engineering with zero lock-in, turnkey deployment, and 60-day post-launch warranty. Would you like to schedule a 30-min discovery call with our Lead Architect?`;
        actionObj = {
          label: 'Schedule 30-Min Call',
          onClick: () => {
            setIsOpen(false);
            onOpenConsultation();
          }
        };
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: reply,
          action: actionObj
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Trigger Dock */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-blue-200 shadow-xl shadow-blue-500/10 cursor-pointer hover:border-blue-400 transition-all hover:scale-102 group animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
                <span>Talk to AI Architect</span>
                <Sparkles className="w-3 h-3 text-blue-600" />
              </div>
              <div className="text-[9px] text-slate-500 font-medium">Instant Project Feasibility & Scope</div>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-13 h-13 rounded-2xl flex items-center justify-center shadow-xl transition-all cursor-pointer ${
            isOpen
              ? 'bg-slate-900 text-white hover:bg-slate-800 rotate-90'
              : 'bg-gradient-to-tr from-red-600 via-rose-600 to-slate-900 hover:from-red-700 hover:to-slate-950 text-white shadow-red-500/30 hover:scale-105'
          }`}
          aria-label="Toggle AI Assistant"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </button>
      </div>

      {/* Floating Chat Window Dialog */}
      {isOpen && (
        <div className="fixed bottom-22 right-6 z-50 w-[92vw] sm:w-[380px] max-h-[540px] h-[520px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 flex items-center justify-center text-white">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-display flex items-center gap-1.5">
                  EVD Solution Architect
                  <span className="px-1.5 py-0.2 rounded bg-red-500/30 text-[9px] font-mono text-rose-300 font-normal">AI Copilot</span>
                </h4>
                <p className="text-[10px] text-slate-300">Raipur HQ • 24/7 Technical Scoping</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/60 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-lg bg-red-100 text-red-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] p-3 rounded-2xl leading-relaxed text-xs shadow-2xs ${
                    m.sender === 'user'
                      ? 'bg-red-600 text-white rounded-br-xs'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-xs'
                  }`}
                >
                  <p>{m.text}</p>
                  {m.action && (
                    <button
                      onClick={m.action.onClick}
                      className="mt-2.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 font-bold text-[11px] border border-red-200 flex items-center gap-1.5 cursor-pointer transition-colors w-full justify-center"
                    >
                      <span>{m.action.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-slate-400 text-xs italic pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] ml-1">Analyzing technical architecture...</span>
              </div>
            )}
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-2 border-t border-slate-100 bg-white flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-600 text-[10px] whitespace-nowrap border border-slate-200 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-slate-200 bg-white flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about tech stacks, MVP cost, ERP..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-red-600"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white cursor-pointer transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
