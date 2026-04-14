import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Agent from './pages/Agent'
import Topic from './pages/Topic'
import Knowledge from './pages/Knowledge'
import Connector from './pages/Connector'
import AgentFlow from './pages/AgentFlow'
import Channel from './pages/Channel'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/connector" element={<Connector />} />
          <Route path="/agent-flow" element={<AgentFlow />} />
          <Route path="/channel" element={<Channel />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
