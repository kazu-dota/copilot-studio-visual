const refs = [
  { label: 'チャンネルへの公開（基本）', url: 'https://learn.microsoft.com/ja-jp/microsoft-copilot-studio/publication-fundamentals-publish-channels' },
  { label: 'チャンネル別の設定ガイド', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/channels' },
  { label: 'Teamsへの公開', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams' },
]

const channels = [
  { name: 'Teams / Microsoft 365 Copilot', category: 'Microsoft', features: ['アダプティブカード：テキストのみ', '選択肢：最大6個', 'Markdown：一部対応', '認証：Entra ID自動設定'] },
  { name: 'SharePoint', category: 'Microsoft', features: ['SharePointページに埋め込み可能', 'Teams認証と統合', 'ページウィジェットとして配置'] },
  { name: 'カスタムWebサイト', category: 'Web', features: ['アダプティブカード：フル対応', '選択肢：無制限', 'Markdown：フル対応', 'JavaScriptでウィジェット埋め込み'] },
  { name: 'デモWebサイト', category: 'Web', features: ['社内テスト・ステークホルダー確認用', '本番用途には不向き', '認証なしまたは手動認証'] },
  { name: 'Facebook Messenger', category: 'SNS', features: ['選択肢：最大13個', 'Markdown：一部対応', 'ウェルカムメッセージ：非対応', '認証：非対応'] },
  { name: 'Azure Bot Service経由', category: 'その他', features: ['Slack・Telegram・Twilio・Line・Kik・GroupMe・Direct Line Speechなど対応'] },
]

const teamsSteps = [
  { step: 'エージェントを公開', detail: 'ナビゲーション → 「公開」→「公開する」をクリック。数分待つ。' },
  { step: 'Teamsチャンネルを設定', detail: '上部メニュー →「チャンネル」→「Teams and Microsoft 365 Copilot」を選択して接続手順に従う。' },
  { step: '配布方法を選択', detail: 'インストールリンクで直接共有 / Teamsアプリストアに掲載 / 自分のTeamsで開く の3択。' },
  { step: 'Teamsでテスト', detail: 'Teams上でエージェントをインストールして会話テスト。「start over」と入力すると最新版に更新される。' },
]

const authTypes = [
  { type: 'Microsoftで認証（デフォルト）', desc: 'Microsoft Entra IDを使用。Teams・Power Apps・Microsoft 365 Copilotに自動設定される。ユーザー認証情報ツールには使用不可。', recommended: 'Teams・社内向け' },
  { type: '認証なし', desc: 'リンクを持つ誰でも会話可能。組織データへのアクセスにはセキュリティリスクあり。ユーザー認証情報ツールには使用不可。', recommended: '公開ボット・テスト' },
  { type: '手動認証', desc: 'カスタム認証方式を設定。ユーザー認証情報ツールと組み合わせて使用可能。', recommended: '高度な認証要件' },
]

const cautions = [
  '30分間操作がないと新しい会話セッションが開始される（最新の公開コンテンツが読み込まれる）',
  'Teams：満足度アンケートはテキストのみ（アダプティブカード非対応）、選択肢は最大6個まで',
  'Facebook：ウェルカムメッセージ非対応、選択肢は最大13個まで',
  'Word・PDF・WebページのリンクはURLテキストとして表示される（クリック不可）',
  'デモWebサイトは本番用途に使用しない',
]

const h2Style = { fontFamily: "'Noto Serif JP', serif", fontSize: '20px', fontWeight: 700, margin: '0 0 4px' }
const subStyle = { color: '#888', fontSize: '12px', letterSpacing: '0.1em', margin: '0 0 32px' }
const sectionStyle = { padding: '48px 0', borderBottom: '1px solid #ddd' }

const categoryColors = { Microsoft: '#0f4c96', Web: '#1a6b3c', SNS: '#7b4f12', その他: '#555' }

export default function Channel() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>

      {/* ヘッダー */}
      <header style={{ borderBottom: '2px solid #0d0d0d', padding: '48px 0 32px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '24px' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#0f4c96', textTransform: 'uppercase', margin: '0 0 12px' }}>06 / Core Concept</p>
          <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1 }}>チャンネル</h1>
          <p style={{ fontSize: '15px', color: '#555', margin: 0, maxWidth: '580px' }}>
            エージェントを「どこで使えるようにするか」を決める設定。Teams・Webサイト・Facebookなどさまざまなプラットフォームへ公開できる。
          </p>
        </div>
        <div style={{ border: '2px solid #0d0d0d', background: '#0f4c96', padding: '16px 24px', boxShadow: '4px 4px 0 #0d0d0d', textAlign: 'center', minWidth: '120px' }}>
          <p style={{ color: '#fff', fontSize: '11px', margin: '0 0 4px', opacity: 0.7 }}>TYPE</p>
          <p style={{ color: '#fff', fontFamily: "'Noto Serif JP', serif", fontSize: '18px', fontWeight: 700, margin: 0 }}>公開<br />設定</p>
        </div>
      </header>

      {/* チャンネル一覧 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>チャンネル一覧</h2>
        <p style={subStyle}>AVAILABLE CHANNELS</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          {channels.map((ch) => (
            <div key={ch.name} style={{ border: '2px solid #0d0d0d', padding: '16px', boxShadow: `3px 3px 0 ${categoryColors[ch.category]}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: '13px', margin: 0 }}>{ch.name}</p>
                <span style={{ fontSize: '10px', fontWeight: 700, background: categoryColors[ch.category], color: '#fff', padding: '2px 8px' }}>{ch.category}</span>
              </div>
              <ul style={{ margin: 0, padding: '0 0 0 14px' }}>
                {ch.features.map((f, i) => (
                  <li key={i} style={{ fontSize: '11px', color: '#555', marginBottom: '3px' }}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Teamsへの公開手順 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>Teams への公開手順</h2>
        <p style={subStyle}>TEAMS DEPLOYMENT STEPS</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {teamsSteps.map((s, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', borderBottom: i < teamsSteps.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
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
        <h2 style={h2Style}>認証方式の選択</h2>
        <p style={subStyle}>AUTHENTICATION OPTIONS</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {authTypes.map((a, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '10px 1fr', gap: '16px', border: '1px solid #e0e0e0', padding: '16px', borderLeft: '3px solid #0f4c96' }}>
              <div />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                  <p style={{ fontWeight: 700, fontSize: '13px', margin: 0 }}>{a.type}</p>
                  <span style={{ fontSize: '10px', background: '#e8f0fe', color: '#0f4c96', padding: '2px 8px', fontWeight: 700 }}>推奨：{a.recommended}</span>
                </div>
                <p style={{ fontSize: '12px', color: '#555', margin: 0, lineHeight: 1.7 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 注意事項 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>注意事項</h2>
        <p style={subStyle}>KNOWN LIMITATIONS</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {cautions.map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '12px', padding: '12px 16px', border: '1px solid #e0e0e0', borderLeft: '3px solid #cc4400', alignItems: 'start' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#cc4400', paddingTop: '2px' }}>!</span>
              <p style={{ fontSize: '13px', color: '#444', margin: 0 }}>{item}</p>
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
