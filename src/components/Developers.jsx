export default function Developers(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  return (
    <section className="py-20 bg-slate-900/50" id="developers">
      <div className="max-w-6xl mx-auto px-6 text-white">
        <h2 className="text-3xl font-bold">Developer quickstart</h2>
        <p className="mt-2 text-blue-200">Use your instance ID and token to send messages. Webhooks deliver status updates and inbound messages.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-black/50 border border-white/10 rounded-xl p-4">
            <p className="text-sm text-blue-200">Request OTP</p>
            <pre className="mt-2 text-xs overflow-auto"><code>{`curl -X POST ${baseUrl}/auth/otp/request \
 -H 'Content-Type: application/json' \
 -d '{"email":"you@example.com"}'`}</code></pre>
            <p className="text-sm text-blue-200 mt-4">Verify OTP</p>
            <pre className="mt-2 text-xs overflow-auto"><code>{`curl -X POST ${baseUrl}/auth/otp/verify \
 -H 'Content-Type: application/json' \
 -d '{"email":"you@example.com","code":"123456"}'`}</code></pre>
          </div>
          <div className="bg-black/50 border border-white/10 rounded-xl p-4">
            <p className="text-sm text-blue-200">Create instance</p>
            <pre className="mt-2 text-xs overflow-auto"><code>{`curl -X POST ${baseUrl}/instances \
 -H 'Authorization: Bearer <ACCESS_TOKEN>' \
 -H 'Content-Type: application/json' \
 -d '{"name":"Primary"}'`}</code></pre>
            <p className="text-sm text-blue-200 mt-4">Send message</p>
            <pre className="mt-2 text-xs overflow-auto"><code>{`curl -X POST ${baseUrl}/messages/send \
 -H 'Content-Type: application/json' \
 -d '{"instance_id":"...","token":"...","to":"+15551234567","type":"text","text":"Hello"}'`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}
