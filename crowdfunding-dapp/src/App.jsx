import { useState } from 'react'
import './App.css'

function App() {
  const [connected, setConnected] = useState(false)

  const goal = 1
  const raised = 0.35
  const progress = (raised / goal) * 100

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">C</div>
          <span>CrowdFund</span>
        </div>

        <button
          className={`wallet-btn ${connected ? 'connected' : ''}`}
          onClick={() => setConnected(!connected)}
        >
          {connected ? 'Wallet Connected' : 'Connect Wallet'}
        </button>
      </header>

      <main className="hero">
        <div className="badge">TESTNET • CROWDFUNDING DAPP</div>

        <h1>Help Us Build the Future</h1>

        <p className="description">
          Support this campaign by contributing to our decentralized
          crowdfunding project.
        </p>

        <section className="campaign-card">
          <div className="campaign-header">
            <div>
              <span className="label">Funding Goal</span>
              <h2>{goal} ETH</h2>
            </div>

            <div className="raised">
              <span className="label">Raised</span>
              <h2>{raised} ETH</h2>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="progress-info">
              <span>{progress}% funded</span>
              <span>{goal - raised} ETH remaining</span>
            </div>
          </div>

          <div className="campaign-footer">
            <div>
              <span className="label">Campaign</span>
              <p>Build a Decentralized Future</p>
            </div>

            <button
              className="contribute-btn"
              onClick={() =>
                alert('Contribution feature will be connected to the smart contract.')
              }
            >
              Contribute
            </button>
          </div>
        </section>
      </main>

      <footer>
        <p>Built for Web3 • Testnet Environment</p>
      </footer>
    </div>
  )
}

export default App