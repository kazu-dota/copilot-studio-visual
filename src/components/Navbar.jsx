import { Link, useLocation } from 'react-router-dom'

const links = [
  { path: '/', label: 'ホーム' },
  { path: '/agent', label: 'エージェント' },
  { path: '/topic', label: 'トピック' },
  { path: '/knowledge', label: 'ナレッジ' },
  { path: '/connector', label: 'コネクタ' },
  { path: '/agent-flow', label: 'エージェントフロー' },
  { path: '/channel', label: 'チャンネル' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav style={{ borderBottom: '3px solid #0d0d0d', background: '#fafaf8' }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'stretch',
        gap: '0',
      }}>
        {/* ロゴ */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 20px 14px 0',
            marginRight: '8px',
            borderRight: '2px solid #0d0d0d',
            textDecoration: 'none',
            color: '#0d0d0d',
          }}
        >
          <span style={{
            display: 'inline-block',
            width: '10px',
            height: '28px',
            background: '#0f4c96',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "'Noto Serif JP', serif",
            fontWeight: 900,
            fontSize: '15px',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
          }}>
            Copilot Studio
          </span>
        </Link>

        {/* ナビリンク */}
        <div style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
          {links.slice(1).map((link) => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 14px',
                  fontSize: '13px',
                  fontWeight: active ? 700 : 400,
                  color: active ? '#0f4c96' : '#444',
                  textDecoration: 'none',
                  borderBottom: active ? '3px solid #0f4c96' : '3px solid transparent',
                  marginBottom: '-3px',
                  transition: 'color 0.15s',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
