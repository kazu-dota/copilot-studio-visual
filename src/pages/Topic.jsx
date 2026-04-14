const refs = [
  { label: 'トピックの作成と編集', url: 'https://learn.microsoft.com/ja-jp/microsoft-copilot-studio/authoring-create-edit-topics' },
  { label: 'トピック設計の概要', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/topics-overview' },
  { label: 'システムトピック', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-system-topics' },
  { label: 'トリガーフレーズのベストプラクティス', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/trigger-phrases-best-practices' },
]

const systemTopics = [
  { name: 'Conversation Start', desc: '会話開始時に自動実行。ユーザーの入力前に挨拶などを表示する。' },
  { name: 'End of Conversation', desc: '会話終了時に実行。満足度アンケートを表示し、セッションを「解決済み」に記録する。' },
  { name: 'Fallback', desc: 'エージェントがユーザーの意図を理解できない場合に起動する。' },
  { name: 'Escalate', desc: '人間のオペレーターへ引き継ぐ。セッションを「エスカレーション済み」として記録する。' },
  { name: 'Multiple Topics Matched', desc: '複数のトピックが一致した場合に「もしかして…？」の選択肢を提示する。' },
  { name: 'On Error', desc: 'エラー発生時にエラーコード・会話ID・タイムスタンプをユーザーに通知する。' },
  { name: 'Sign in', desc: '認証が有効な場合にサインインを求めるプロンプトを表示する。' },
  { name: 'Reset Conversation', desc: 'すべての変数値をクリアし、最新の公開コンテンツを読み込む。' },
]

const nodeTypes = [
  { type: 'メッセージ', color: '#0f4c96', desc: 'ユーザーにテキストを送信。太字・リスト・リンク・変数の埋め込みが可能。' },
  { type: '質問', color: '#1a6b3c', desc: 'ユーザーに質問して回答を取得。選択肢・フリーテキスト・エンティティから選択できる。回答は変数として保存される。' },
  { type: 'アダプティブカード', color: '#7b4f12', desc: 'ボタンや入力フォームを含むインタラクティブなカードを表示する。' },
  { type: '条件分岐', color: '#5a1a7a', desc: '変数の値や認証状態に応じて会話を分岐させる。' },
  { type: '変数管理', color: '#8b0000', desc: '変数の値を設定・変換・クリアする。会話履歴の操作も可能。' },
  { type: 'トピック管理', color: '#004d40', desc: '別のトピックへリダイレクト、会話の転送、トピック・会話の終了を行う。' },
  { type: 'ツール呼び出し', color: '#3d2b1a', desc: 'エージェントフロー・コネクタ・他のエージェントを呼び出す。' },
  { type: '高度な設定', color: '#2d2d2d', desc: '生成AI回答・HTTPリクエスト・イベント送信などの高度な操作を実行する。' },
]

const triggerTips = [
  { tip: '5〜10個を目安に登録する', detail: 'これ以下だとNLUの学習が不十分になりマッチング精度が下がる。' },
  { tip: '短いフレーズを使う（10語以内）', detail: '長い文章より短い表現のほうがNLUが意図を捉えやすい。' },
  { tip: '言い回しを変えてバリエーションを持たせる', detail: '例：「営業時間は？」「何時まで開いてる？」「今日閉まるのは何時？」' },
  { tip: '他のトピックと重複させない', detail: '似たフレーズが複数トピックにあると「Multiple Topics Matched」が頻発する。' },
  { tip: '1語だけのフレーズは避ける', detail: '例：「場所」ではなく「店舗の場所を教えて」のように具体的にする。' },
]

const h2Style = { fontFamily: "'Noto Serif JP', serif", fontSize: '20px', fontWeight: 700, margin: '0 0 4px' }
const subStyle = { color: '#888', fontSize: '12px', letterSpacing: '0.1em', margin: '0 0 32px' }
const sectionStyle = { padding: '48px 0', borderBottom: '1px solid #ddd' }

export default function Topic() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>

      {/* ヘッダー */}
      <header style={{ borderBottom: '2px solid #0d0d0d', padding: '48px 0 32px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '24px' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#0f4c96', textTransform: 'uppercase', margin: '0 0 12px' }}>02 / Core Concept</p>
          <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1 }}>トピック</h1>
          <p style={{ fontSize: '15px', color: '#555', margin: 0, maxWidth: '580px' }}>
            エージェントとユーザーの「会話の1単元」。ノードを組み合わせてフローを定義し、特定の意図に対応する応答ロジックを構築する。
          </p>
        </div>
        <div style={{ border: '2px solid #0d0d0d', background: '#0f4c96', padding: '16px 24px', boxShadow: '4px 4px 0 #0d0d0d', textAlign: 'center', minWidth: '120px' }}>
          <p style={{ color: '#fff', fontSize: '11px', margin: '0 0 4px', opacity: 0.7 }}>TYPE</p>
          <p style={{ color: '#fff', fontFamily: "'Noto Serif JP', serif", fontSize: '18px', fontWeight: 700, margin: 0 }}>会話<br />フロー</p>
        </div>
      </header>

      {/* トピックの種類 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>トピックの種類</h2>
        <p style={subStyle}>TOPIC TYPES</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          {[
            { label: 'システムトピック', tag: '削除不可', color: '#cc4400', desc: 'Copilot Studioが自動作成する組み込みトピック。会話開始・終了・エラー処理などの基本動作を担う。無効化は可能だが削除はできない。' },
            { label: 'カスタムトピック', tag: '自由に作成・編集', color: '#0f4c96', desc: '開発者が自由に作成するトピック。特定のユーザー意図（例：FAQ・注文・サポート）に対応する会話フローを定義する。変更・削除が可能。' },
          ].map((item) => (
            <div key={item.label} style={{ border: '2px solid #0d0d0d', padding: '20px', boxShadow: `4px 4px 0 ${item.color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: '15px', margin: 0 }}>{item.label}</h3>
                <span style={{ fontSize: '10px', fontWeight: 700, background: item.color, color: '#fff', padding: '2px 8px' }}>{item.tag}</span>
              </div>
              <p style={{ fontSize: '13px', color: '#444', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* システムトピック一覧 */}
        <p style={{ fontWeight: 700, fontSize: '13px', marginBottom: '12px', color: '#333' }}>システムトピック一覧</p>
        <div style={{ border: '2px solid #0d0d0d' }}>
          {systemTopics.map((t, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: i < systemTopics.length - 1 ? '1px solid #e8e8e8' : 'none' }}>
              <div style={{ padding: '10px 16px', background: '#f5f5f3', borderRight: '1px solid #ddd' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#0f4c96', fontFamily: 'monospace' }}>{t.name}</p>
              </div>
              <div style={{ padding: '10px 16px' }}>
                <p style={{ fontSize: '12px', color: '#444', margin: 0 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ノードの種類 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>ノードの種類</h2>
        <p style={subStyle}>NODE TYPES — 会話フローを構成するパーツ</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
          {nodeTypes.map((node) => (
            <div key={node.type} style={{ display: 'grid', gridTemplateColumns: '10px 1fr', gap: '12px', border: '1px solid #e0e0e0', padding: '14px 16px', alignItems: 'start' }}>
              <div style={{ background: node.color, alignSelf: 'stretch', marginTop: '2px' }} />
              <div>
                <p style={{ fontWeight: 700, fontSize: '13px', margin: '0 0 4px', color: node.color }}>{node.type}</p>
                <p style={{ fontSize: '12px', color: '#555', margin: 0, lineHeight: 1.65 }}>{node.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 会話フローの仕組み */}
      <section style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: '4px 1fr', gap: '24px' }}>
          <div style={{ background: '#0f4c96' }} />
          <div>
            <h2 style={h2Style}>会話フローの仕組み</h2>
            <p style={{ color: '#444', margin: '0 0 20px' }}>
              トピックはノードベースのキャンバスで定義される。トリガーノードが起点となり、ユーザーの回答や変数の値によって分岐しながら進む。サブトピックへのリダイレクトも可能で、終了後は元のトピックに戻る。
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '2px solid #0d0d0d', maxWidth: '500px' }}>
              {[
                { step: 'トリガー', desc: 'ユーザー発話がトリガーフレーズにマッチ → トピック起動' },
                { step: '質問 / メッセージ', desc: '必要な情報をユーザーから取得。回答は変数に保存' },
                { step: '条件分岐', desc: '変数の値に応じて会話パスを分岐' },
                { step: 'ツール呼び出し', desc: '外部APIやフローを実行（在庫確認・予約など）' },
                { step: '応答', desc: '結果をユーザーに返し、トピックを終了（または別トピックへ）' },
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', borderBottom: i < arr.length - 1 ? '1px solid #e8e8e8' : 'none' }}>
                  <div style={{ padding: '10px 14px', background: i % 2 === 0 ? '#f5f5f3' : '#fafaf8', borderRight: '1px solid #ddd' }}>
                    <p style={{ fontSize: '11px', fontWeight: 700, margin: 0, color: '#0f4c96' }}>{item.step}</p>
                  </div>
                  <div style={{ padding: '10px 14px' }}>
                    <p style={{ fontSize: '12px', color: '#444', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: '#cc4400', margin: '12px 0 0', borderLeft: '2px solid #cc4400', paddingLeft: '8px' }}>
              注意：End of Conversation・Escalate・Goodbye などのシステムトピックへリダイレクトすると、会話全体が終了する。
            </p>
            <p style={{ fontSize: '12px', color: '#555', margin: '8px 0 0' }}>
              トピック名に「.」（ピリオド）を使用するとソリューションのエクスポートができなくなるため注意。
            </p>
          </div>
        </div>
      </section>

      {/* トリガーフレーズのコツ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>トリガーフレーズのコツ</h2>
        <p style={subStyle}>TRIGGER PHRASE BEST PRACTICES</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {triggerTips.map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '12px', padding: '14px 16px', border: '1px solid #e0e0e0', borderLeft: '3px solid #0f4c96', alignItems: 'start' }}>
              <span style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 900, color: '#0f4c96', fontSize: '14px' }}>{i + 1}</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: '13px', margin: '0 0 2px' }}>{item.tip}</p>
                <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>{item.detail}</p>
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
