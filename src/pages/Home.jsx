import { Link } from 'react-router-dom'

const cards = [
  {
    path: '/agent',
    title: 'エージェント',
    description: 'AIエージェントを作成し、ユーザーとの会話や自律的なタスク実行を実現する',
    number: '01',
    wide: true,
  },
  {
    path: '/topic',
    title: 'トピック',
    description: '会話の流れをコントロールするルール。ユーザーの発言に応じた応答を定義する',
    number: '02',
    wide: false,
  },
  {
    path: '/knowledge',
    title: 'ナレッジ',
    description: 'WebサイトやSharePointのドキュメントをAIの知識源として登録する',
    number: '03',
    wide: false,
  },
  {
    path: '/connector',
    title: 'コネクタ',
    description: '外部サービス（Teams・Outlookなど）とエージェントを連携させる仕組み',
    number: '04',
    wide: false,
  },
  {
    path: '/agent-flow',
    title: 'エージェントフロー',
    description: '繰り返し作業や複数サービスをまたぐ処理を自動化するフロー機能',
    number: '05',
    wide: true,
  },
  {
    path: '/channel',
    title: 'チャンネル',
    description: 'Teams・Webサイト・Dynamics 365など、エージェントを公開する場所を設定する',
    number: '06',
    wide: false,
  },
]

export default function Home() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>

      {/* ヒーローセクション */}
      <section style={{
        padding: '64px 0 56px',
        borderBottom: '2px solid #0d0d0d',
        display: 'grid',
        gridTemplateColumns: '1fr 280px',
        gap: '40px',
        alignItems: 'end',
      }}>
        <div>
          <p style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            color: '#0f4c96',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Microsoft / ビジュアル解説
          </p>
          <h1 style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 900,
            margin: '0 0 24px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            Copilot Studio<br />
            <span style={{ color: '#0f4c96' }}>を理解する</span>
          </h1>
          <p style={{ fontSize: '15px', color: '#555', maxWidth: '480px', margin: 0 }}>
            ノーコード・ローコードでAIエージェントを構築できる<br />
            Microsoftのプラットフォームをビジュアルで学ぶ。
          </p>
        </div>

        {/* 右側の装飾ボックス */}
        <div style={{
          border: '2px solid #0d0d0d',
          background: '#0f4c96',
          padding: '24px',
          boxShadow: '6px 6px 0 #0d0d0d',
        }}>
          <p style={{
            color: '#fff',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            margin: '0 0 8px',
            opacity: 0.7,
          }}>
            概念の数
          </p>
          <p style={{
            fontFamily: "'Noto Serif JP', serif",
            color: '#fff',
            fontSize: '56px',
            fontWeight: 900,
            margin: '0 0 4px',
            lineHeight: 1,
          }}>
            6
          </p>
          <p style={{ color: '#fff', fontSize: '13px', margin: 0, opacity: 0.85 }}>
            主要コンセプト
          </p>
        </div>
      </section>

      {/* Copilot Studioとは */}
      <section style={{
        margin: '48px 0',
        display: 'grid',
        gridTemplateColumns: '4px 1fr',
        gap: '24px',
        alignItems: 'start',
      }}>
        <div style={{ background: '#0f4c96', alignSelf: 'stretch' }} />
        <div>
          <h2 style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: '20px',
            fontWeight: 700,
            margin: '0 0 12px',
          }}>
            Copilot Studio とは？
          </h2>
          <p style={{ color: '#444', maxWidth: '680px', margin: 0 }}>
            Microsoft Copilot Studio は、プログラミングの専門知識がなくても
            AIエージェント（会話型ボット）を作成・管理・公開できるプラットフォームです。
            Teams・Webサイト・Dynamics 365などさまざまなチャンネルに展開でき、
            外部サービスとの連携やフローによる自動化も実現できます。
          </p>
        </div>
      </section>

      {/* 主要コンセプト */}
      <section>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '16px',
          marginBottom: '24px',
          borderBottom: '2px solid #0d0d0d',
          paddingBottom: '12px',
        }}>
          <h2 style={{
            fontFamily: "'Noto Serif JP', serif",
            fontSize: '22px',
            fontWeight: 700,
            margin: 0,
          }}>
            主要コンセプト
          </h2>
          <span style={{ fontSize: '12px', color: '#888', letterSpacing: '0.1em' }}>
            CORE CONCEPTS
          </span>
        </div>

        {/* 非対称グリッド */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}>
          {cards.map((card) => (
            <Link
              key={card.path}
              to={card.path}
              style={{
                gridColumn: card.wide ? 'span 2' : 'span 1',
                display: 'block',
                border: '2px solid #0d0d0d',
                background: '#fafaf8',
                padding: '28px',
                boxShadow: '4px 4px 0 #0f4c96',
                textDecoration: 'none',
                color: '#0d0d0d',
                transition: 'transform 0.1s, box-shadow 0.1s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translate(2px, 2px)'
                e.currentTarget.style.boxShadow = '2px 2px 0 #0f4c96'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translate(0, 0)'
                e.currentTarget.style.boxShadow = '4px 4px 0 #0f4c96'
              }}
            >
              <span style={{
                display: 'block',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#0f4c96',
                marginBottom: '12px',
              }}>
                {card.number}
              </span>
              <h3 style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: card.wide ? '22px' : '17px',
                fontWeight: 700,
                margin: '0 0 10px',
              }}>
                {card.title}
              </h3>
              <p style={{ fontSize: '13px', color: '#555', margin: 0, lineHeight: 1.65 }}>
                {card.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
