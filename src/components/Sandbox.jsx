import { useState } from 'react'

export default function Sandbox(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('you@example.com')
  const [otp, setOtp] = useState('')
  const [token, setToken] = useState('')
  const [instance, setInstance] = useState(null)
  const [msgTo, setMsgTo] = useState('+15551234567')
  const [msgText, setMsgText] = useState('Hello from Sab Tech sandbox!')
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const requestOtp = async () => {
    setLoading(true)
    setResponse(null)
    try{
      const res = await fetch(`${baseUrl}/auth/otp/request`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})})
      const data = await res.json()
      setResponse(data)
      if(data.code){ setOtp(data.code) }
      setStep(2)
    }catch(e){ setResponse({error: String(e)}) }
    setLoading(false)
  }

  const verifyOtp = async () => {
    setLoading(true)
    setResponse(null)
    try{
      const res = await fetch(`${baseUrl}/auth/otp/verify`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email, code: otp})})
      const data = await res.json()
      setResponse(data)
      if(data.access_token){ setToken(data.access_token); setStep(3) }
    }catch(e){ setResponse({error: String(e)}) }
    setLoading(false)
  }

  const createInstance = async () => {
    setLoading(true)
    setResponse(null)
    try{
      const res = await fetch(`${baseUrl}/instances`,{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${token}`},body:JSON.stringify({name:'Primary'})})
      const data = await res.json()
      setResponse(data)
      if(data.instance_id){ setInstance(data) }
    }catch(e){ setResponse({error: String(e)}) }
    setLoading(false)
  }

  const authenticateInstance = async () => {
    setLoading(true)
    setResponse(null)
    try{
      const res = await fetch(`${baseUrl}/instances/${instance.instance_id}/authenticate`,{method:'POST',headers:{'Authorization':`Bearer ${token}`}})
      const data = await res.json()
      setResponse(data)
    }catch(e){ setResponse({error: String(e)}) }
    setLoading(false)
  }

  const sendMessage = async () => {
    setLoading(true)
    setResponse(null)
    try{
      const res = await fetch(`${baseUrl}/messages/send`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({instance_id: instance.instance_id, token: instance.token, to: msgTo, type:'text', text: msgText})})
      const data = await res.json()
      setResponse(data)
    }catch(e){ setResponse({error: String(e)}) }
    setLoading(false)
  }

  return (
    <section className="py-16 bg-slate-900/40" id="sandbox">
      <div className="max-w-6xl mx-auto px-6 text-white">
        <h2 className="text-3xl font-bold">Test our services</h2>
        <p className="mt-2 text-blue-200">Use the guided flow to create an instance and send a test message. This is a safe demo; no real WhatsApp delivery occurs.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold">1. OTP Login</h3>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="mt-3 w-full px-3 py-2 rounded bg-white/10 border border-white/10" />
            <button disabled={loading} onClick={requestOtp} className="mt-3 w-full px-3 py-2 rounded bg-emerald-500 hover:bg-emerald-600">Request OTP</button>
            <input value={otp} onChange={e=>setOtp(e.target.value)} placeholder="Enter OTP" className="mt-3 w-full px-3 py-2 rounded bg-white/10 border border-white/10" />
            <button disabled={loading} onClick={verifyOtp} className="mt-3 w-full px-3 py-2 rounded bg-blue-500 hover:bg-blue-600">Verify OTP</button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold">2. Instance</h3>
            <button disabled={loading || !token} onClick={createInstance} className="mt-3 w-full px-3 py-2 rounded bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50">Create instance</button>
            {instance && (
              <div className="mt-3 text-xs bg-black/40 p-2 rounded">
                <div>Instance ID: <span className="font-mono">{instance.instance_id}</span></div>
                <div>Token: <span className="font-mono">{instance.token}</span></div>
              </div>
            )}
            <button disabled={loading || !instance} onClick={authenticateInstance} className="mt-3 w-full px-3 py-2 rounded bg-teal-500 hover:bg-teal-600 disabled:opacity-50">Scan QR (simulate)</button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold">3. Send message</h3>
            <input value={msgTo} onChange={e=>setMsgTo(e.target.value)} placeholder="Recipient (+1...)" className="mt-3 w-full px-3 py-2 rounded bg-white/10 border border-white/10" />
            <textarea value={msgText} onChange={e=>setMsgText(e.target.value)} rows={4} className="mt-3 w-full px-3 py-2 rounded bg-white/10 border border-white/10" />
            <button disabled={loading || !instance} onClick={sendMessage} className="mt-3 w-full px-3 py-2 rounded bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50">Send</button>
          </div>
        </div>

        <div className="mt-6 bg-black/40 border border-white/10 rounded-xl p-4 text-sm">
          <div className="font-semibold mb-2">Response</div>
          <pre className="overflow-auto text-xs">{response ? JSON.stringify(response, null, 2) : 'Waiting...'}</pre>
        </div>
      </div>
    </section>
  )
}
