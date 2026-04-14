const refs = [
  { label: 'ナレッジソースの概要', url: 'https://learn.microsoft.com/ja-jp/microsoft-copilot-studio/knowledge-copilot-studio' },
  { label: '生成AI回答ノード', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-boost-node' },
  { label: 'Azure OpenAI との連携', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-generative-answers-azure-openai' },
  { label: '高度な生成AIアクション', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-generative-actions' },
]

const sources = [
  {
    type: '公開Webサイト',
    auth: '認証不要',
    genLimit: '25件',
    classicLimit: '4件',
    desc: 'BingがインデックスしたWebサイトから検索。組織が所有するサイトを指定して使用する。',
    detail: '例：公式サポートページ・製品情報サイト・よくある質問ページ',
  },
  {
    type: 'ドキュメント（ファイル）',
    auth: '認証不要',
    genLimit: '無制限',
    classicLimit: '無制限',
    desc: 'DataverseにアップロードしたPDF・Word・PowerPointなどのファイル。ファイル内の内容を直接検索する。',
    detail: 'ファイルはDataverseのストレージ容量を消費する。PDF/PPTX/DOCXは最大512MB（セマンティック検索時）。',
  },
  {
    type: 'SharePoint',
    auth: 'Microsoft Entra ID',
    genLimit: '25件',
    classicLimit: '4件',
    desc: 'SharePoint URLを指定して接続。GraphSearchでファイルを検索し、ユーザーがアクセス権を持つコンテンツのみ返す。',
    detail: 'ファイルサイズ：通常200MB、PDF/PPTX/DOCXはセマンティック検索時512MBまで対応。',
  },
  {
    type: 'Dataverse',
    auth: 'Microsoft Entra ID',
    genLimit: '無制限',
    classicLimit: '2件（各15テーブルまで）',
    desc: '組織のDataverse環境に接続。検索拡張生成（RAG）技術で関連データを取得する。',
    detail: 'CRM・業務データなど構造化データの検索に適している。',
  },
  {
    type: 'エンタープライズコネクタ',
    auth: 'Microsoft Entra ID',
    genLimit: '無制限',
    classicLimit: '2件',
    desc: 'Microsoft Searchがインデックスした組織データへのコネクタ経由アクセス。',
    detail: '社内ポータル・基幹システムのデータを横断検索する用途に適している。',
  },
]

const limits = [
  { label: 'PDF / PPTX / DOCX（セマンティック検索）', value: '最大 512 MB' },
  { label: 'その他のファイル形式', value: '最大 200 MB' },
  { label: '公開Webサイト（生成AIモード）', value: '最大 25 件' },
  { label: '公開Webサイト（クラシックモード）', value: '最大 4 件' },
  { label: 'SharePoint URL（生成AIモード）', value: '最大 25 件' },
  { label: 'Dataverse ソース（クラシック）', value: '最大 2 件（各15テーブル）' },
]

const cautions = [
  '生成AIモードではBingカスタム検索・Azure OpenAI・カスタムデータは使用不可（クラシックデータとして追加する）',
  'SharePointは認証が必要。ユーザーのアクセス権に基づいて返される内容が変わる',
  'ナレッジソースの引用（Citation）は他のツールへの入力として使用できない',
  '「根拠なし回答を許可」をONにするとナレッジソースなしでも一般知識で回答する（要注意）',
  'セマンティック検索はMicrosoft 365 Copilotライセンスが同テナントに必要',
]

const h2Style = { fontFamily: "'Noto Serif JP', serif", fontSize: '20px', fontWeight: 700, margin: '0 0 4px' }
const subStyle = { color: '#888', fontSize: '12px', letterSpacing: '0.1em', margin: '0 0 32px' }
const sectionStyle = { padding: '48px 0', borderBottom: '1px solid #ddd' }

export default function Knowledge() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>

      {/* ヘッダー */}
      <header style={{ borderBottom: '2px solid #0d0d0d', padding: '48px 0 32px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '24px' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#0f4c96', textTransform: 'uppercase', margin: '0 0 12px' }}>03 / Core Concept</p>
          <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1 }}>ナレッジ</h1>
          <p style={{ fontSize: '15px', color: '#555', margin: 0, maxWidth: '580px' }}>
            エージェントの「知識源」。WebサイトやSharePoint・ファイルを登録することで、トピックを1つひとつ書かなくても質問に自動応答できるようになる。
          </p>
        </div>
        <div style={{ border: '2px solid #0d0d0d', background: '#0f4c96', padding: '16px 24px', boxShadow: '4px 4px 0 #0d0d0d', textAlign: 'center', minWidth: '120px' }}>
          <p style={{ color: '#fff', fontSize: '11px', margin: '0 0 4px', opacity: 0.7 }}>TYPE</p>
          <p style={{ color: '#fff', fontFamily: "'Noto Serif JP', serif", fontSize: '18px', fontWeight: 700, margin: 0 }}>知識<br />データ</p>
        </div>
      </header>

      {/* 仕組み */}
      <section style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: '4px 1fr', gap: '24px' }}>
          <div style={{ background: '#0f4c96' }} />
          <div>
            <h2 style={h2Style}>生成AI回答の仕組み</h2>
            <p style={{ color: '#444', margin: '0 0 20px' }}>
              ナレッジソースを登録すると、Copilot Studioが自動で「Conversational Boosting」システムトピックを作成する。このトピックが生成AI回答ノードを持ち、トピックで明示的に処理されないすべての質問に対してナレッジを検索して返答する。
            </p>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0' }}>
              {[
                { label: 'ユーザー質問', sub: '「有給の申請方法は？」' },
                { label: 'ナレッジ検索', sub: 'SharePoint・ファイルを横断検索' },
                { label: '情報を統合', sub: '関連箇所を抽出・要約' },
                { label: '自然言語で回答', sub: '出典付きで返答' },
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ border: '2px solid #0d0d0d', padding: '10px 14px', background: i === 0 ? '#0f4c96' : '#fafaf8', boxShadow: '2px 2px 0 #0d0d0d', minWidth: '120px' }}>
                    <p style={{ fontWeight: 700, fontSize: '12px', margin: '0 0 4px', color: i === 0 ? '#fff' : '#0d0d0d' }}>{item.label}</p>
                    <p style={{ fontSize: '10px', color: i === 0 ? 'rgba(255,255,255,0.8)' : '#888', margin: 0 }}>{item.sub}</p>
                  </div>
                  {i < arr.length - 1 && <div style={{ padding: '0 6px', fontSize: '16px', color: '#0f4c96', fontWeight: 700 }}>→</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ナレッジソースの種類 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>ナレッジソースの種類</h2>
        <p style={subStyle}>SOURCE TYPES</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '2px solid #0d0d0d' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '180px 60px 100px 100px 1fr', background: '#0f4c96', padding: '8px 16px' }}>
            {['種類', '認証', '生成AI上限', 'Classic上限', '説明'].map((h) => (
              <p key={h} style={{ color: '#fff', fontSize: '11px', fontWeight: 700, margin: 0, letterSpacing: '0.05em' }}>{h}</p>
            ))}
          </div>
          {sources.map((s, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 60px 100px 100px 1fr', borderBottom: i < sources.length - 1 ? '1px solid #e8e8e8' : 'none', alignItems: 'start' }}>
              <div style={{ padding: '12px 16px', borderRight: '1px solid #e8e8e8' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#0f4c96' }}>{s.type}</p>
              </div>
              <div style={{ padding: '12px 8px', borderRight: '1px solid #e8e8e8', textAlign: 'center' }}>
                <p style={{ fontSize: '10px', color: s.auth === '認証不要' ? '#1a6b3c' : '#cc4400', margin: 0, fontWeight: 700 }}>{s.auth === '認証不要' ? '不要' : '必要'}</p>
              </div>
              <div style={{ padding: '12px 8px', borderRight: '1px solid #e8e8e8' }}>
                <p style={{ fontSize: '11px', color: '#0f4c96', fontWeight: 700, margin: 0 }}>{s.genLimit}</p>
              </div>
              <div style={{ padding: '12px 8px', borderRight: '1px solid #e8e8e8' }}>
                <p style={{ fontSize: '11px', color: '#555', margin: 0 }}>{s.classicLimit}</p>
              </div>
              <div style={{ padding: '12px 16px' }}>
                <p style={{ fontSize: '12px', color: '#444', margin: '0 0 4px', lineHeight: 1.6 }}>{s.desc}</p>
                <p style={{ fontSize: '11px', color: '#888', margin: 0 }}>{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 制限値 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>仕様・制限値</h2>
        <p style={subStyle}>SPECS & LIMITS</p>
        <div style={{ border: '2px solid #0d0d0d', display: 'flex', flexDirection: 'column' }}>
          {limits.map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto', borderBottom: i < limits.length - 1 ? '1px solid #e8e8e8' : 'none', alignItems: 'center' }}>
              <div style={{ padding: '10px 16px', borderRight: '1px solid #e8e8e8' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#333' }}>{item.label}</p>
              </div>
              <div style={{ padding: '10px 16px', minWidth: '150px' }}>
                <p style={{ fontSize: '12px', margin: 0, color: '#0f4c96', fontWeight: 700, textAlign: 'right' }}>{item.value}</p>
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
