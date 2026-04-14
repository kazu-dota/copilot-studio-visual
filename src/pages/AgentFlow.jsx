const refs = [
  { label: 'エージェントフローの概要', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview' },
  { label: 'エージェントでフローを使用する', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-flow' },
]

const triggers = [
  { type: '手動トリガー', en: 'Run a flow from Copilot', desc: 'ユーザーまたはエージェントが明示的に起動する。エージェントのツールとして登録して会話中に呼び出す用途に最適。', example: '「在庫を確認して」と言われたときにフローを起動し結果を返す' },
  { type: 'スケジュールトリガー', en: 'Scheduled', desc: '指定した日時・間隔で自動実行する。毎日・毎週など定期的な処理に使用する。', example: '毎朝9時に未対応チケットをTeamsに通知する' },
  { type: 'イベントトリガー', en: 'Event-based', desc: '外部イベント（メール受信・ファイル追加など）を検知して起動する。', example: 'SharePointに新ファイルが追加されたらTeamsに通知する' },
]

const useCases = [
  {
    title: 'メール → Teamsへ通知',
    steps: ['上司からメール受信', 'メール内容を抽出', 'Teams メッセージに整形', 'Teamsチャンネルに送信'],
    result: '上司のメールが即座にTeams通知に変換される',
  },
  {
    title: 'フォーム送信 → DB保存 → 確認メール',
    steps: ['Teams/Power Appsのフォームが送信', 'フォームデータを取得', 'SharePointリストに新規アイテム作成', '送信者に確認メールを送付'],
    result: '申請フローが完全自動化される',
  },
]

const vsPowerAutomate = [
  { item: '管理場所', flow: 'Copilot Studio内で完結', pa: 'Power Automateポータル（別サイト）' },
  { item: '容量消費', flow: 'Copilot Studio容量を消費', pa: 'Power Automate容量を消費' },
  { item: 'エージェント連携', flow: 'ネイティブ統合（ツールとして直接登録）', pa: '追加設定が必要' },
  { item: '変換', flow: 'Power Automateから一方向変換で作成可', pa: 'エージェントフローへ変換可能（一方向）' },
]

const actionTypes = [
  { category: 'AI機能', examples: 'テキスト生成・ドキュメント処理・LLMプロンプト実行・他エージェントの呼び出し' },
  { category: 'ヒューマンインザループ', examples: '承認リクエスト・情報収集フォームの送信' },
  { category: '組み込みツール', examples: 'ループ・条件分岐・データ変換・日時処理・子フローの呼び出し' },
  { category: 'コネクタ', examples: 'Microsoft 365系・サードパーティ・カスタムコネクタの各アクション' },
]

const capacity = [
  { label: 'トピックから呼び出した場合', value: 'クラシック回答 1回分 + フロー内アクション消費' },
  { label: '生成AIオーケストレーションから呼び出した場合', value: '自律アクション 1回分 + フロー内アクション消費' },
  { label: 'デザイナーでテスト実行した場合', value: '消費なし' },
]

const h2Style = { fontFamily: "'Noto Serif JP', serif", fontSize: '20px', fontWeight: 700, margin: '0 0 4px' }
const subStyle = { color: '#888', fontSize: '12px', letterSpacing: '0.1em', margin: '0 0 32px' }
const sectionStyle = { padding: '48px 0', borderBottom: '1px solid #ddd' }

export default function AgentFlow() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>

      {/* ヘッダー */}
      <header style={{ borderBottom: '2px solid #0d0d0d', padding: '48px 0 32px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '24px' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#0f4c96', textTransform: 'uppercase', margin: '0 0 12px' }}>05 / Core Concept</p>
          <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1 }}>エージェントフロー</h1>
          <p style={{ fontSize: '15px', color: '#555', margin: 0, maxWidth: '580px' }}>
            複数のアクションを順番に実行する「自動化ワークフロー」。Copilot Studio内で管理でき、エージェントのツールとして直接組み込める。
          </p>
        </div>
        <div style={{ border: '2px solid #0d0d0d', background: '#0f4c96', padding: '16px 24px', boxShadow: '4px 4px 0 #0d0d0d', textAlign: 'center', minWidth: '120px' }}>
          <p style={{ color: '#fff', fontSize: '11px', margin: '0 0 4px', opacity: 0.7 }}>TYPE</p>
          <p style={{ color: '#fff', fontFamily: "'Noto Serif JP', serif", fontSize: '18px', fontWeight: 700, margin: 0 }}>自動化<br />フロー</p>
        </div>
      </header>

      {/* トリガーの種類 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>トリガーの種類</h2>
        <p style={subStyle}>TRIGGER TYPES</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {triggers.map((t, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '10px 1fr', gap: '16px', border: '2px solid #0d0d0d', padding: '20px', boxShadow: '3px 3px 0 #0f4c96' }}>
              <div style={{ background: '#0f4c96', alignSelf: 'stretch' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: '15px', margin: 0 }}>{t.type}</p>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#888', background: '#f0f0f0', padding: '2px 8px' }}>{t.en}</span>
                </div>
                <p style={{ fontSize: '13px', color: '#444', margin: '0 0 8px' }}>{t.desc}</p>
                <p style={{ fontSize: '12px', color: '#0f4c96', margin: 0, borderLeft: '2px solid #0f4c96', paddingLeft: '8px' }}>例：{t.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ユースケース */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>具体的なユースケース</h2>
        <p style={subStyle}>USE CASES</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {useCases.map((uc, i) => (
            <div key={i} style={{ border: '2px solid #0d0d0d', padding: '20px', boxShadow: '4px 4px 0 #0f4c96' }}>
              <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: '15px', margin: '0 0 16px', borderBottom: '1px solid #e0e0e0', paddingBottom: '10px' }}>{uc.title}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                {uc.steps.map((step, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: '#0f4c96', minWidth: '16px' }}>{j + 1}</span>
                    <p style={{ fontSize: '12px', color: '#444', margin: 0 }}>{step}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '12px', color: '#1a6b3c', fontWeight: 700, margin: 0, borderLeft: '2px solid #1a6b3c', paddingLeft: '8px' }}>→ {uc.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* アクションの種類 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>使用できるアクション</h2>
        <p style={subStyle}>ACTION TYPES</p>
        <div style={{ border: '2px solid #0d0d0d' }}>
          {actionTypes.map((a, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', borderBottom: i < actionTypes.length - 1 ? '1px solid #e8e8e8' : 'none' }}>
              <div style={{ padding: '12px 16px', background: '#f5f5f3', borderRight: '1px solid #ddd' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#0f4c96' }}>{a.category}</p>
              </div>
              <div style={{ padding: '12px 16px' }}>
                <p style={{ fontSize: '12px', color: '#444', margin: 0 }}>{a.examples}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Power Automate との違い */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Power Automate フローとの違い</h2>
        <p style={subStyle}>VS POWER AUTOMATE</p>
        <div style={{ border: '2px solid #0d0d0d' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', background: '#0f4c96', padding: '8px 16px' }}>
            {['', 'エージェントフロー', 'Power Automate'].map((h) => (
              <p key={h} style={{ color: '#fff', fontSize: '11px', fontWeight: 700, margin: 0 }}>{h}</p>
            ))}
          </div>
          {vsPowerAutomate.map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', borderBottom: i < vsPowerAutomate.length - 1 ? '1px solid #e8e8e8' : 'none' }}>
              <div style={{ padding: '10px 16px', background: '#f5f5f3', borderRight: '1px solid #ddd' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, margin: 0, color: '#555' }}>{row.item}</p>
              </div>
              <div style={{ padding: '10px 16px', borderRight: '1px solid #ddd' }}>
                <p style={{ fontSize: '12px', color: '#444', margin: 0 }}>{row.flow}</p>
              </div>
              <div style={{ padding: '10px 16px' }}>
                <p style={{ fontSize: '12px', color: '#444', margin: 0 }}>{row.pa}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 容量消費 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>容量消費</h2>
        <p style={subStyle}>CAPACITY CONSUMPTION</p>
        <div style={{ border: '2px solid #0d0d0d' }}>
          {capacity.map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto', borderBottom: i < capacity.length - 1 ? '1px solid #e8e8e8' : 'none', alignItems: 'center' }}>
              <div style={{ padding: '12px 16px', borderRight: '1px solid #e8e8e8' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0 }}>{item.label}</p>
              </div>
              <div style={{ padding: '12px 16px', minWidth: '280px' }}>
                <p style={{ fontSize: '12px', color: '#0f4c96', fontWeight: 700, margin: 0, textAlign: 'right' }}>{item.value}</p>
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
