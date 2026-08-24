import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  CheckCircle2,
  Clock3,
  Gift,
  Link2,
  Mail,
  MousePointerClick,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';

const APP_URL = 'https://rewards.bernardsvending.com';

const stats = [
  ['7 days', 'custom demo'],
  ['30 days', 'live trial'],
  ['$0', 'to test'],
  ['1 setup', 'for every operator'],
];

const steps = [
  {
    icon: Sparkles,
    title: 'See your branded demo',
    copy: 'We generate a polished rewards experience using your company name, branding, sample machines, customers and transactions.',
  },
  {
    icon: MousePointerClick,
    title: 'Test it before connecting anything',
    copy: 'Simulate purchases, points and rewards so you can see exactly what your customers would experience.',
  },
  {
    icon: Link2,
    title: 'Connect your smart coolers',
    copy: 'When you are ready, connect your supported cooler platform and replace the demo data with your real machines and sales.',
  },
  {
    icon: RefreshCw,
    title: 'Go live for 30 days',
    copy: 'Run the system with real customers for a full month before deciding whether you want to keep it.',
  },
];

const features = [
  ['Automated rewards', 'Turn purchases into points and rewards without spreadsheet work.', Gift],
  ['Customer loyalty pages', 'Give each operator a branded mobile-friendly rewards experience.', Users],
  ['Real-time activity', 'See enrollments, purchases, balances and rewards from one dashboard.', BarChart3],
  ['Automated follow-up', 'Trigger welcome messages, trial reminders and reward emails.', Mail],
  ['White-label friendly', 'Operators can keep their own reward-program name and branding.', BadgeCheck],
  ['Built for smart coolers', 'Designed around connected, grab-and-go vending workflows.', Zap],
];

export const CoolerRewards: React.FC = () => {
  const openApp = () => {
    window.location.href = APP_URL;
  };

  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.14),transparent_26%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-200">
              <Bot size={16} />
              Smart cooler loyalty, without the complicated setup
            </div>
            <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98]">
              Turn your smart coolers into a
              <span className="block text-orange-400">customer rewards engine.</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg sm:text-xl leading-8 text-slate-300">
              Cooler Rewards gives vending operators a branded loyalty program they can test first, connect to their real machines, and run free for 30 days before paying anything.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <button
                onClick={openApp}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-950/30 transition hover:bg-orange-400"
              >
                See My Rewards Demo <ArrowRight size={19} />
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                See how it works
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">No credit card required to test. No long setup call. No paid onboarding.</p>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur">
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white text-slate-900 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">How it works</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">From demo to live rewards in one simple path.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Cooler Rewards is designed so an operator can understand the product before connecting anything, then move into a live trial without rebuilding their account.</p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700"><Icon size={24} /></div>
                    <span className="text-sm font-black text-orange-700">0{index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-black">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 text-slate-900 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Made for operators</p>
              <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">The loyalty system should be the easy part.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">The goal is simple: your team should not need to manually build reward pages, calculate points, send reminders, or create separate installs for every location.</p>
              <div className="mt-8 space-y-4">
                {[
                  'One platform for many operators and machines',
                  'Custom branding for each rewards program',
                  'Demo mode before any real integration',
                  '30-day live trial before billing',
                  'Pause instead of deleting when a trial ends',
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 text-orange-600" size={21} /><span className="font-medium">{item}</span></div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map(([title, copy, icon]) => {
                const Icon = icon as React.ElementType;
                return (
                  <div key={title as string} className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-700"><Icon size={20} /></div>
                    <h3 className="mt-5 text-lg font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-900 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-slate-950 px-6 py-10 sm:px-10 lg:px-14 lg:py-14 text-white overflow-hidden relative">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl" />
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-orange-300 font-bold text-sm"><Clock3 size={18} /> Try it before you pay for it</div>
                <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">Start with a custom demo. Go live free for 30 days.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">Your demo lets you test the experience first. When you connect your smart cooler account, the 30-day live trial begins. If you do not continue, the account can simply pause while your settings and history stay intact.</p>
              </div>
              <button
                onClick={openApp}
                className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-black text-white transition hover:bg-orange-400"
              >
                Start Free <ArrowRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 border-t border-white/10 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-black">Cooler Rewards</div>
            <div className="mt-2 text-sm text-slate-400">A smart-cooler rewards platform from Bernard&apos;s Vending.</div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><ShieldCheck size={16} /> Secure account separation</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} /> No card to test</span>
          </div>
        </div>
      </section>
    </div>
  );
};
