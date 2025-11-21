import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.25),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.2),transparent_35%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          Enterprise WhatsApp API Gateway
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl"
        >
          Send and receive messages, build chatbots, and automate customer
          communication with fixed pricing and no per‑message fees.
        </motion.p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button onClick={onCTAClick} className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow">
            Test our services
          </button>
          <a href="#developers" className="px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 font-semibold border border-white/20">
            Developer quickstart
          </a>
        </div>
      </div>
    </section>
  )
}
