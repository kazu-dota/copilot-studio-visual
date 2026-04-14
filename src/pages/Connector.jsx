const refs = [
  { label: 'コネクタの使用', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-connectors' },
  { label: 'コネクタとナレッジ', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-connectors' },
  { label: 'エージェントフロー概要', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview' },
]

const addSteps = [
  { step: 'エージェント → ツール', detail: '対象エージェントを開き「ツール」ページへ移動する' },
  { step: '「ツールを追加」→「コネクタ」', detail: '種類の一覧から「コネクタ」を選択' },
  { step: 'サービスを検索・選択', detail: 'Teams・Outlook・SharePointなど接続先を選ぶ' },
  { step: '接続を作成', detail: '「新しい接続を作成」→認証情報を入力してSubmit' },
  { step: '設定を保存', detail: '「追加して設定」で完了。トピック内から呼び出せる状態になる' },
]

const popularConnectors = [
  { name: 'Microsoft Teams', actions: 'メッセージ送信・チーム作成・チャンネル管理' },
  { name: 'Outlook', actions: 'メール送信・予定表の参照と作成・タスク管理' },
  { name: 'SharePoint', actions: 'リスト作成・ファイルアップロード・アイテム取得' },
  { name: 'Dynamics 365', actions: '顧客データ参照・レコード作成・ケース管理' },
  { name: 'Office 365', actions: 'Word・Excel・Formsとの連携' },
  { name: 'カスタムコネクタ', actions: '既存コネクタにない公開APIを独自に定義して接続' },
]

const comparison = [
  { item: '目的', connector: '外部サービスへの単一操作（1アクション）', flow: '複数アクションを順番に実行するシーケンス' },
  { item: '複雑さ', connector: '単純（1サービス・1操作）', flow: '複雑（条件分岐・ループ・複数サービス）' },
  { item: '使用場面', connector: '「メールを送る」「データを取得する」など単発操作', flow: '「フォーム送信→DB保存→確認メール送信」など一連処理' },
  { item: 'コネクタとの関係', connector: 'コネクタ自体がツール', flow: 'フロー内でコネクタを部品として使用する' },
]

const credentialTypes = [
  { type: 'ユーザー認証情報', desc: '実行したユーザーのIDで外部サービスに接続。ユーザーが持つアクセス権の範囲内でのみ操作可能。', tag: 'セキュア' },
  { type: 'メーカー提供認証情報', desc: '開発者が設定したサービスアカウント（固定認証）で接続。すべてのユーザーに同じ権限で動作する。', tag: '管理必要' },
]

const h2Style = { fontFamily: "'Noto Serif JP', serif", fontSize: '20px', fontWeight: 700, margin: '0 0 4px' }
const subStyle = { color: '#888', fontSize: '12px', letterSpacing: '0.1em', margin: '0 0 32px' }
const sectionStyle = { padding: '48px 0', borderBottom: '1px solid #ddd' }

export default function Connector() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>

      {/* ヘッダー */}
      <header style={{ borderBottom: '2px solid #0d0d0d', padding: '48px 0 32px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '24px' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#0f4c96', textTransform: 'uppercase', margin: '0 0 12px' }}>04 / Core Concept</p>
          <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1 }}>コネクタ</h1>
          <p style={{ fontSize: '15px', color: '#555', margin: 0, maxWidth: '580px' }}>
            外部サービスのAPIをラップした「接続部品」。Teams・Outlook・SharePointなどをエージェントから直接操作できるようにする。
          </p>
        </div>
        <div style={{ border: '2px solid #0d0d0d', background: '#0f4c96', padding: '16px 24px', boxShadow: '4px 4px 0 #0d0d0d', textAlign: 'center', minWidth: '120px' }}>
          <p style={{ color: '#fff', fontSize: '11px', margin: '0 0 4px', opacity: 0.7 }}>TYPE</p>
          <p style={{ color: '#fff', fontFamily: "'Noto Serif JP', serif", fontSize: '18px', fontWeight: 700, margin: 0 }}>外部<br />連携</p>
        </div>
      </header>

      {/* 仕組み */}
      <section style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: '4px 1fr', gap: '24px' }}>
          <div style={{ background: '#0f4c96' }} />
          <div>
            <h2 style={h2Style}>コネクタとは</h2>
            <p style={{ color: '#444', margin: '0 0 16px' }}>
              コネクタはAPIの「ラッパー（包み紙）」。直接APIを呼び出すコードを書かなくても、GUI上でサービスを選択して設定するだけで外部システムと連携できる。Microsoft製・サードパーティ製の標準コネクタと、独自のカスタムコネクタがある。
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { label: '標準コネクタ', desc: 'Microsoft 365系サービス（Teams・Outlook・SharePointなど）が含まれる。すべてのプランで利用可能。', color: '#0f4c96' },
                { label: 'プレミアムコネクタ', desc: '高度なサードパーティサービス。利用には対応するCopilot Studioプランが必要。', color: '#555' },
              ].map((item) => (
                <div key={item.label} style={{ border: '2px solid #0d0d0d', padding: '16px', boxShadow: `3px 3px 0 ${item.color}` }}>
                  <p style={{ fontWeight: 700, fontSize: '13px', margin: '0 0 6px', color: item.color }}>{item.label}</p>
                  <p style={{ fontSize: '12px', color: '#555', margin: 0, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 追加手順 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>エージェントへの追加手順</h2>
        <p style={subStyle}>HOW TO ADD A CONNECTOR</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {addSteps.map((s, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', borderBottom: i < addSteps.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
              <div style={{ borderRight: '2px solid #0d0d0d', padding: '18px 24px 18px 0', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '22px', fontWeight: 900, color: i === 0 ? '#0f4c96' : '#ccc' }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div style={{ padding: '18px 0 18px 24px' }}>
                <p style={{ fontWeight: 700, fontSize: '13px', margin: '0 0 4px' }}>{s.step}</p>
                <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 認証方式 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>認証方式</h2>
        <p style={subStyle}>CREDENTIAL TYPES</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {credentialTypes.map((item) => (
            <div key={item.type} style={{ border: '2px solid #0d0d0d', padding: '20px', boxShadow: '3px 3px 0 #0f4c96' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: '14px', margin: 0 }}>{item.type}</p>
                <span style={{ fontSize: '10px', fontWeight: 700, background: '#0f4c96', color: '#fff', padding: '2px 8px' }}>{item.tag}</span>
              </div>
              <p style={{ fontSize: '12px', color: '#555', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 主なコネクタ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>主なコネクタと操作例</h2>
        <p style={subStyle}>POPULAR CONNECTORS</p>
        <div style={{ border: '2px solid #0d0d0d' }}>
          {popularConnectors.map((c, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: i < popularConnectors.length - 1 ? '1px solid #e8e8e8' : 'none' }}>
              <div style={{ padding: '12px 16px', background: '#f5f5f3', borderRight: '1px solid #ddd' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#0f4c96' }}>{c.name}</p>
              </div>
              <div style={{ padding: '12px 16px' }}>
                <p style={{ fontSize: '12px', color: '#444', margin: 0 }}>{c.actions}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* コネクタ vs エージェントフロー */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>コネクタ vs エージェントフロー</h2>
        <p style={subStyle}>WHEN TO USE WHICH</p>
        <div style={{ border: '2px solid #0d0d0d' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', background: '#0f4c96', padding: '8px 16px' }}>
            {['', 'コネクタ', 'エージェントフロー'].map((h) => (
              <p key={h} style={{ color: '#fff', fontSize: '11px', fontWeight: 700, margin: 0 }}>{h}</p>
            ))}
          </div>
          {comparison.map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', borderBottom: i < comparison.length - 1 ? '1px solid #e8e8e8' : 'none' }}>
              <div style={{ padding: '10px 16px', background: '#f5f5f3', borderRight: '1px solid #ddd' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, margin: 0, color: '#555' }}>{row.item}</p>
              </div>
              <div style={{ padding: '10px 16px', borderRight: '1px solid #ddd' }}>
                <p style={{ fontSize: '12px', color: '#444', margin: 0 }}>{row.connector}</p>
              </div>
              <div style={{ padding: '10px 16px' }}>
                <p style={{ fontSize: '12px', color: '#444', margin: 0 }}>{row.flow}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 参照 */}
      <section style={{ padding: '48px 0' }}>
        <h2 style={h2Style}>参照（Microsoft Learn）</h2>
        <p style={subStyle}>REFERENCES</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {refs.map((ref, i) => (
            <a key={i} href={ref.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', border: '1px solid #ddd', textDecoration: 'none', color: '#0f4c96', fontSize: '13px', fontWeight: 500, transition: 'background 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#f0f4ff'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              <span>{ref.label}</span>
              <span style={{ fontSize: '11px', opacity: 0.5 }}>↗</span>
            </a>
          ))}
        </div>
      </section>

    </div>
  )
}
