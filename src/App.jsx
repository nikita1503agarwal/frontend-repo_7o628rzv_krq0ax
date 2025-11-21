import { useRef } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Developers from './components/Developers'
import Sandbox from './components/Sandbox'

function App() {
  const sandboxRef = useRef(null)
  const scrollToSandbox = () => sandboxRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-slate-900">
      <header className="sticky top-0 z-20 bg-slate-900/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between text-white">
          <div className="font-bold tracking-wide">WHATSAPP.SABTECH.ORG</div>
          <div className="flex items-center gap-6 text-sm">
            <div className="hidden md:block text-blue-200">Sales: 923212022077</div>
            <a href="mailto:support@sabtech.org" className="hidden md:block text-blue-200">Support: support@sabtech.org</a>
            <a href="#sandbox" className="px-3 py-1.5 rounded bg-emerald-500 hover:bg-emerald-600">Test Services</a>
          </div>
        </div>
      </header>

      <main>
        <Hero onCTAClick={scrollToSandbox} />
        <Features />
        <Developers />
        <div ref={sandboxRef} id="sandbox">
          <Sandbox />
        </div>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 text-white grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold">Refund Policy</h3>
              <ul className="mt-2 text-blue-100 text-sm list-disc list-inside space-y-1">
                <li>Refunds within 3 days of purchase.</li>
                <li>Eligible if a feature doesn’t work as described (with proof).</li>
                <li>Proof of purchase required.</li>
                <li>Uninstallation charges may apply for termination.</li>
                <li>By using the service you agree to our Terms & Conditions.</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold">Why Sab Tech</h3>
              <ul className="mt-2 text-blue-100 text-sm list-disc list-inside space-y-1">
                <li>Advanced messaging: media, buttons, lists.</li>
                <li>Two‑way automation and chatbots.</li>
                <li>Delivery reports for every message.</li>
                <li>Fixed pricing. No per‑message fees.</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold">Contact</h3>
              <p className="mt-2 text-blue-100 text-sm">Email: info@sabtech.org</p>
              <p className="text-blue-100 text-sm">Phone: +923212022077</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-blue-300">
        © {new Date().getFullYear()} Sab Tech. All rights reserved.
      </footer>
    </div>
  )
}

export default App
