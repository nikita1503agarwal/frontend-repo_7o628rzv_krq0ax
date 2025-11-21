import { MessageSquare, Bot, KeyRound, Image as ImageIcon, Receipt, ShieldCheck, Repeat2, Headset, CheckCircle2 } from 'lucide-react'

const features = [
  { icon: MessageSquare, title: 'WhatsApp APIs', desc: 'Simple HTTP endpoints for sending and receiving.' },
  { icon: Bot, title: 'Chatbot', desc: 'Build flows and automate conversations in minutes.' },
  { icon: KeyRound, title: 'OTPs', desc: 'Fast, reliable one‑time passwords at scale.' },
  { icon: ImageIcon, title: 'Multimedia', desc: 'Images, documents, audio, video, emojis, and more.' },
  { icon: Receipt, title: 'Delivery Reports', desc: 'Track every message with unique IDs and statuses.' },
  { icon: Repeat2, title: '2‑Way Communication', desc: 'Full conversational messaging with webhooks.' },
  { icon: Headset, title: 'Support', desc: 'Multi‑agent support and unified inbox ready.' },
  { icon: ShieldCheck, title: 'Fixed Pricing', desc: 'No hidden fees and no per‑message charges.' },
]

export default function Features(){
  return (
    <section className="py-16" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 text-white">
              <f.icon className="w-6 h-6 text-emerald-400" />
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-blue-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
