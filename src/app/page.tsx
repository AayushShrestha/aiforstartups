"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Target, Layers, PenTool, BarChart3, Globe, Code, Cpu, Palette, X } from "lucide-react";

const schedule = [
  {
    day: "Day 1",
    events: [
      { time: "9:00 AM", desc: "Registrations and breakfast", speaker: "" },
      { time: "10:00 AM", desc: "Welcome Remarks by Mike Harper / US Ambassador to Nepal", speaker: "" },
      { time: "10:15 AM", desc: "Setting expectations and reviewing code of conduct", speaker: "" },
      { time: "10:45 AM", desc: "AI workflow\nBuilding AI as co-worker", speaker: "Alok Khatri" },
      { time: "1:00 PM", desc: "Lunch", speaker: "" },
      { time: "2:00 PM", desc: "Startup Project Development\n- Introduction to 2-month AI project\n- Problem Identification and Planning", speaker: "Aayush Shrestha" },
      { time: "3:00 PM - 6:00 PM", desc: "AI workflow\nBuilding AI as co-worker", speaker: "Alok Khatri" }
    ]
  },
  {
    day: "Day 2",
    events: [
      { time: "9:00 AM", desc: "Breakfast", speaker: "" },
      { time: "9:30 AM", desc: "Using AI for Marketing", speaker: "Ashwin Neupane" },
      { time: "11:30 AM", desc: "Break", speaker: "" },
      { time: "12:00 PM - 1:00 PM", desc: "Sessions from US companies operating in Nepal", speaker: "SpringBase, Veel" },
      { time: "1:00 PM - 2:00 PM", desc: "Lunch", speaker: "" },
      { time: "2:00 PM - 3:00 PM", desc: "Tigg Demo", speaker: "Tigg" },
      { time: "3:00 PM - 3:30 PM", desc: "Break", speaker: "" },
      { time: "3:30 PM - 6:00 PM", desc: "Build with AI", speaker: "GDG" }
    ]
  }
];

export default function Home() {
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  return (
    <div className="flex flex-col min-h-screen font-sans bg-black text-white selection:bg-lime selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center z-50 bg-black border-b border-gray-800 shadow-xl">
        <div className="flex items-center gap-4 mix-blend-difference pointer-events-auto">
          {/* Replace with your uploaded logo filename */}
          <img src="/ai-for-startups-logo.png" alt="AI For Startups Logo" className="h-8 md:h-10 w-auto" />
          <div className="text-xl font-bold tracking-tighter uppercase hidden sm:block"></div>
        </div>
        <div className="flex items-center gap-6 pointer-events-auto">
          <div className="hidden md:flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-gray-400">

            {/* These logos are protected from color inversion */}
            <div className="flex items-center gap-3 bg-black/10 p-1 rounded-sm backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
              <img src="/support-1.png" alt="Supported By Logo" className="h-6 md:h-8 w-auto drop-shadow-md" />
              <img src="/support-2.png" alt="Supported By Logo" className="h-6 md:h-8 w-auto drop-shadow-md" />
              <img src="/support-3.png" alt="Supported By Logo" className="h-6 md:h-8 w-auto drop-shadow-md" />
            </div>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScHpOhMzKxRPa5NyxCMXGH_3wfBcFBcIOsQ5PrC3e0b7JMFjg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-black tracking-widest uppercase bg-lime text-black px-6 py-3 border-2 border-lime hover:bg-black hover:text-lime transition-all duration-300 shadow-[0_0_15px_rgba(204,255,0,0.3)]"
          >
            Apply Now
          </a>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row pt-20 border-b border-gray-800 overflow-hidden">
        <div className="flex-1 flex flex-col justify-center px-8 py-10 md:p-12 lg:p-16 relative z-10 bg-black/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter uppercase font-serif"
            >
              GROW YOUR <span className="text-lime italic font-serif font-normal tracking-normal lowercase">Startups</span><br />With AI.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-gray-300">
              Learn the tools, skills, and mindset to scale your business.
            </h2>
            <p className="max-w-xl text-lg text-gray-400 mb-8 leading-relaxed">
              A hands-on, highly selective program designed for early-stage Nepali founders ready to move beyond survival and into rapid growth. Build, automate, and scale using the same tools modern operators use.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScHpOhMzKxRPa5NyxCMXGH_3wfBcFBcIOsQ5PrC3e0b7JMFjg/viewform" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-lime text-black px-8 py-4 font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300">
                [ Apply NOW ]
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

            </div>
          </motion.div>
        </div>

        {/* Video Background Section (Mobile Background / Desktop Right Side) */}
        <div className="absolute inset-0 md:relative md:flex-1 md:border-l md:border-gray-800 bg-black z-0 overflow-hidden md:order-last">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 md:opacity-80 grayscale"
          >
            <source src="/bg lopp .mp4" type="video/mp4" />
          </video>
          {/* Lime Overlay to colorize the video */}
          <div className="absolute inset-0 bg-lime mix-blend-multiply opacity-60 md:opacity-80 pointer-events-none"></div>
          {/* Gradient to smoothly blend the video into the black background */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 md:from-black via-black/50 md:via-black/40 to-transparent pointer-events-none"></div>
        </div>
      </section>

      {/* 2. The Problem */}
      <section className="py-32 px-8 md:px-16 lg:px-24 bg-black relative border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-serif">The Problem: The Manual Trap.</h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl">
              Your startup is not failing because of your idea. <span className="text-lime">It is failing because you are building it manually.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                "Guessing which AI tools actually drive revenue.",
                "Relying on free software versions without knowing when to scale up.",
                "Wasting hours on repetitive tasks like content creation and manual research.",
                "Struggling with financial planning, pricing strategy, and growth bottlenecks.",
                "Wanting to automate workflows, but lacking the technical blueprint.",
                "Operating with existing legacy systems, unsure of how AI integrates."
              ].map((point, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="flex items-start gap-4 p-6 border border-gray-800 hover:border-lime hover:bg-lime group transition-colors duration-300"
                >
                  <Target className="w-6 h-6 text-gray-500 group-hover:text-black mt-1 shrink-0" />
                  <p className="text-lg text-gray-300 group-hover:text-black font-medium">{point}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-16 text-lg text-gray-400 max-w-4xl border-l-4 border-lime pl-6">
              This program moves beyond scattered trial-and-error. We focus on real-world business applications to save time, optimize decisions, and build systems that scale.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What You Will Learn */}
      <section className="py-32 bg-black border-b border-gray-800">
        <div className="px-8 md:px-16 lg:px-24 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase font-serif">What You Will Learn</h2>
          <p className="text-xl text-gray-400 mt-4">Stop experimenting and start executing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-gray-800">
          {[
            { title: "Build Faster", desc: "Turn validated ideas into functional MVPs at unprecedented speeds.", icon: Zap },
            { title: "Automate Workflows", desc: "Eliminate manual bottlenecks and build simple, effective systems.", icon: Layers },
            { title: "Scale Growth", desc: "Design marketing, content, and growth systems that scale sustainably.", icon: Target },
            { title: "Design with AI", desc: "Create professional branding, assets, and visual systems without an agency.", icon: PenTool },
            { title: "Decide with Data", desc: "Use AI to support financial planning and strategic decision-making.", icon: BarChart3 }
          ].map((item, index) => (
            <div key={index} className="p-12 border-b md:border-r border-gray-800 hover:bg-lime group transition-colors duration-300 h-full flex flex-col justify-between">
              <div>
                <item.icon className="w-12 h-12 text-gray-600 group-hover:text-black mb-8" strokeWidth={1} />
                <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-black">{item.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-900 leading-relaxed text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
          {/* Empty cell to complete 3x2 grid if needed, or fill with branding */}
          <div className="p-12 border-b md:border-r border-gray-800 bg-gray-900 flex items-center justify-center">
            <div className="text-6xl font-black text-gray-800 tracking-tighter uppercase opacity-50">Execute</div>
          </div>
        </div>
      </section>

      {/* 4. Tangible Outputs */}
      <section className="py-32 bg-white text-black">
        <div className="px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase font-serif">Tangible Outputs</h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl">You won't just leave with theory. You will walk away with functional assets integrated into your business operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Custom Websites", icon: Globe },
              { title: "Validated MVPs", icon: Code },
              { title: "Automation Systems", icon: Cpu },
              { title: "Polished Branding", icon: Palette }
            ].map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={index}
                className="bg-gray-100 p-12 border border-gray-200 hover:border-lime hover:bg-black hover:text-white group transition-all duration-300"
              >
                <item.icon className="w-16 h-16 text-gray-400 group-hover:text-lime mb-8" strokeWidth={1} />
                <h3 className="text-3xl font-bold tracking-tighter uppercase">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Program Structure & Mentors */}
      <section className="py-32 bg-black border-t border-gray-800">
        <div className="px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-16 font-serif">Program Structure</h2>

          <div className="space-y-12 mb-32">
            {[
              { phase: "Phase 1", title: "2-Day Intensive Bootcamp", details: <span className="text-lime-400 font-semibold"> Kathmandu: 6–7 June | Biratnagar: 13–14 June | Pokhara: 20–21 June </span> },
              { phase: "Phase 2", title: "3-Month Mentorship", details: "Ongoing support, direct guidance, and premium tool access." },
              { phase: "Phase 3", title: "Showcase & Networking", details: "Kathmandu. Connect with peers, mentors, and ecosystem stakeholders." }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-800 pb-12 group hover:border-lime transition-colors">
                <div className="text-2xl font-bold text-lime w-48 shrink-0">{item.phase}</div>
                <div>
                  <h3 className="text-3xl font-bold tracking-tighter uppercase mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.details}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-32 border border-gray-800 bg-black overflow-hidden relative">
            <div className="p-8 md:p-12 border-b border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 bg-black">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase font-serif">Bootcamp Schedule</h3>
              <span className="text-lime font-mono text-sm uppercase tracking-widest border border-lime px-4 py-2">AI FOR STARTUPS NEPAL</span>
            </div>

            <div className="flex flex-col relative z-10">
              {schedule.map((dayData, dIndex) => (
                <div key={dIndex} className="flex flex-col border-b border-gray-800 last:border-0">
                  <div className="bg-gray-900/80 p-6 md:p-8 border-b border-gray-800 sticky top-20 z-20 backdrop-blur-sm">
                    <h4 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase text-lime">{dayData.day}</h4>
                  </div>

                  <div className="flex flex-col bg-black">
                    {/* Header Row (Desktop) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-gray-800 text-xs font-bold tracking-widest uppercase text-gray-500 bg-gray-900">
                      <div className="col-span-3">Time</div>
                      <div className="col-span-6">Description</div>
                      <div className="col-span-3">Facilitators</div>
                    </div>

                    {dayData.events.map((event, eIndex) => {
                      const isBreak = event.desc.toLowerCase().includes('lunch') || event.desc.toLowerCase().includes('break');
                      return (
                        <div
                          key={eIndex}
                          className={`group grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-gray-800 last:border-0 hover:bg-lime hover:text-black transition-colors duration-300 ${isBreak ? 'opacity-70 bg-gray-900/30' : ''}`}
                        >
                          <div className="md:col-span-3 font-mono text-sm md:text-base font-medium flex items-center text-lime group-hover:text-black">
                            {event.time}
                          </div>
                          <div className="md:col-span-6 text-base md:text-lg font-medium whitespace-pre-line group-hover:text-black mt-2 md:mt-0 leading-relaxed">
                            {event.desc}
                          </div>
                          <div className="md:col-span-3 text-sm md:text-base text-gray-400 group-hover:text-gray-800 font-medium flex items-center uppercase tracking-wide mt-4 md:mt-0">
                            {event.speaker || "—"}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-16 font-serif">The Mentors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alok Khatri",
                role: "AI Systems and Automation",
                bio: "Alok Khatri is the Co-Founder and CEO of Tangible Careers and a Research Fellow at NAAMII, specializing in AI workforce readiness. A Data Science postgraduate and ICF-accredited coach, he has trained over 3,300 professionals across Nepal and India on AI integration. Previously the Country Head of AIESEC in India, Alok leverages a decade of global leadership experience to build infrastructure for verifiable learning and precision hiring.",
                image: "/alok.jpg"
              },
              {
                name: "Ashwin Neupane",
                role: "Product Building",
                bio: "Ashwin Neupane is a computer engineer, tech content creator, and AI educator with over 5 years of experience in digital marketing and professional training. He has built a 100,000+ member online community by simplifying complex AI and technology into practical systems for productivity, content creation, and income generation. Through hands-on workshops, real-world experiments, and high-impact content, he helps students, creators, and professionals stay competitive and future-ready in an AI-driven world.",
                image: "/ashwin.jpg"
              },
              {
                name: "Aayush Shrestha",
                role: "Growth Systems",
                bio: "Aayush Shrestha is a Kathmandu-based computer engineer, tech entrepreneur, and professional comedian who uniquely bridges the technology and entertainment sectors. In the tech industry, he works as a software developer and UI/UX engineer, with a strong focus on utilizing artificial intelligence to streamline digital product development. He is the founder of StoryBirdie, an AI-powered SaaS platform designed to automate and optimize the pre-production workflow for filmmakers, such as generating storyboards and shot lists. In the entertainment industry, Shrestha is a pioneering figure in Nepali stand-up. He is the co-founder of Comedy Tuk Tuk, Nepal's first stand-up comedy collective, where he has operated as an event organizer, producer, and touring comedian. Additionally, he has leveraged his writing expertise professionally as a content creator for popular digital programs, including the satirical news show Baaki Samachar.",
                image: "https://creators.usembassynepal.events/mediafiles/website/performers/DSC00956.jpg"
              },
              {
                name: "Saroj Dahal",
                role: "Developer Tools and Scalable Systems",
                bio: "Saroj Dahal is a full-stack developer and the founder of Code Himalayas, a learning-focused technical community in Nepal. With experience as a teaching assistant and freelance developer, he focuses on backend technologies such as FastAPI and builds open-source tools to improve developer workflows. He organizes GDG Kathmandu and currently works at Fusemachines as a software engineer.",
                image: "https://sarojdahal.com/_next/image?url=http%3A%2F%2Fapi.sarojdahal.com%2Fuploads%2F1778076465555-img.png&w=3840&q=75"
              }
            ].map((mentor, index) => (
              <div
                key={index}
                onClick={() => setSelectedMentor(mentor)}
                className="cursor-pointer flex flex-col border border-gray-800 group hover:border-lime transition-colors duration-300"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-gray-900">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 border-b-4 border-transparent group-hover:border-lime transition-colors duration-300 z-10" />
                </div>
                <div className="p-8 flex-1 flex flex-col bg-black group-hover:bg-lime transition-colors duration-300">
                  <h3 className="text-2xl font-bold tracking-tighter uppercase group-hover:text-black mb-1">{mentor.name}</h3>
                  <p className="text-sm text-lime group-hover:text-black font-semibold tracking-wide uppercase mb-4">{mentor.role}</p>
                  <div className="flex gap-4 mt-auto">
                    <span className="text-gray-500 group-hover:text-black transition-colors">
                      <span className="text-xs font-bold uppercase tracking-widest border-b border-current pb-1">Read More</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Program Incentives */}
      <section className="py-32 bg-gray-900 border-t border-gray-800">
        <div className="px-8 md:px-16 lg:px-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase font-serif">Incentives</h2>
            <p className="mt-6 text-gray-400 text-lg">Equipping you with the resources to execute immediately.</p>
          </div>
          <div className="md:w-2/3">
            <ul className="space-y-6">
              {["Google AI Credits", "Springbase Credits", "Comprehensive Startup Kit", "Exclusive AI Playbook", "High-Value Founder Networking"].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-2xl md:text-4xl font-bold tracking-tighter uppercase border-b border-gray-800 pb-6 hover:text-lime transition-colors cursor-default">
                  <span className="text-lime text-xl">0{index + 1} //</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Application / CTA */}
      <section id="apply" className="py-32 md:py-48 bg-lime text-black flex flex-col items-center justify-center px-8 text-center">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-8 leading-none font-serif">
            Signup For AI For Startups.
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-16">
            Limited seats per city. Application-based selection only.
          </p>

          <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScHpOhMzKxRPa5NyxCMXGH_3wfBcFBcIOsQ5PrC3e0b7JMFjg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-lime px-16 py-8 font-black text-2xl tracking-widest uppercase hover:bg-white hover:text-black transition-colors w-full md:w-auto inline-block border-2 border-black"
            >
              Apply Now
            </a>
          </div>
          <p className="mt-8 text-sm font-semibold tracking-wide uppercase opacity-70">
            For early-stage startups (6mo - 2yrs) with a live MVP.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 lg:px-24 border-t border-gray-800 flex justify-between items-center text-sm font-semibold uppercase tracking-widest text-white-500">
        <div>MADE BY SPRINGBASE.AI</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-lime">Twitter</a>
          <a href="#" className="hover:text-lime">LinkedIn</a>
        </div>
      </footer>

      {/* Mentor Modal */}
      <AnimatePresence>
        {selectedMentor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedMentor(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-black border border-gray-800 flex flex-col md:flex-row w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMentor(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white hover:text-lime rounded-full backdrop-blur-sm transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="md:w-1/2 h-64 md:h-auto relative bg-gray-900">
                <img
                  src={selectedMentor.image}
                  alt={selectedMentor.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-2">{selectedMentor.name}</h3>
                <p className="text-lg text-lime font-semibold tracking-wide uppercase mb-6 pb-6 border-b border-gray-800">{selectedMentor.role}</p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {selectedMentor.bio}
                </p>
                <div className="flex gap-6 mt-auto">
                  <a href="#" className="text-gray-500 hover:text-lime transition-colors">
                    <span className="text-sm font-bold uppercase tracking-widest border-b border-current pb-1">LinkedIn</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-lime transition-colors">
                    <span className="text-sm font-bold uppercase tracking-widest border-b border-current pb-1">Twitter</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
