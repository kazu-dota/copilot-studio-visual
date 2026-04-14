const refs = [
  { label: 'エージェントの作成', url: 'https://learn.microsoft.com/ja-jp/microsoft-copilot-studio/authoring-first-bot' },
  { label: 'Copilot Studio の概要', url: 'https://learn.microsoft.com/ja-jp/microsoft-copilot-studio/fundamentals-what-is-copilot-studio' },
  { label: 'NLU / 生成AI機能', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/nlu-gpt-overview' },
  { label: 'トリガーフレーズのベストプラクティス', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/trigger-phrases-best-practices' },
  { label: '環境（Environment）の管理', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/environments-first-run-experience' },
  { label: 'ソリューションの作成と管理', url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-overview' },
]

const glossary = [
  {
    term: 'Environment（環境）',
    desc: 'エージェントやデータを保存・管理する「作業スペース」の単位。開発・テスト・本番など用途ごとに分けて運用するのが一般的。環境ごとにアクセス権・セキュリティ設定・データ保存場所が独立している。トライアル環境は30日で期限切れ。画面左上のスイッチャーから切り替え可能。',
  },
  {
    term: 'Solution（ソリューション）',
    desc: 'エージェントや関連コンポーネント（トピック・フロー・コネクタなど）をまとめるコンテナ。異なる環境間へのエクスポート・インポートや、開発→テスト→本番のデプロイ管理（ALM）に使う。すべてのエージェントは必ずいずれかのソリューションの中に作成される。',
  },
  {
    term: 'スキーマ名（Schema Name）',
    desc: 'Power Platformのコンポーネントに付与される一意の識別子プレフィックス。ソリューションが持つパブリッシャープレフィックス（例：contoso_）が自動付与される。これにより「contoso_agentname」のような名前になり、他テナントのコンポーネントとの名前衝突を防ぐ。高度な作成画面でのみ設定可能。',
  },
  {
    term: 'NLU（自然言語理解）',
    desc: 'ユーザーが入力したテキストから「意図（Intent）」を解析するAI機能。句読点は無視され、ストップワード（助詞など）は自動除外される。クラシックモードではトリガーフレーズとのマッチングで判定。生成AIモードではトピックの説明文をもとに最適なトピックを選択する。複数の意図を同時に検出して組み合わせて応答することも可能。',
  },
  {
    term: 'トリガーフレーズ',
    desc: 'クラシックモードでトピックを起動するサンプル発話。例：「営業時間を教えて」「何時まで開いてる？」。1トピックあたり5〜10個が推奨。短いフレーズ（10語以内）を使い、動詞・名詞の組み合わせを変えて多様性を持たせるとマッチング精度が上がる。生成AIモードでは代わりにトピックの「説明文」が使われる。',
  },
  {
    term: 'Instructions（指示）',
    desc: 'エージェントの行動指針を自然言語で記述するシステムプロンプト（最大8,000文字）。トーン・対応範囲・禁止事項などを定義する。例：「あなたはTechCorpのサポート担当です。製品情報・価格を正確に案内し、複雑な問題は人間のエージェントにエスカレーションしてください。」変更は即座に動作に反映されるためテストが必須。',
  },
]

const steps = [
  {
    number: '01',
    title: 'サインイン',
    description: 'copilotstudio.microsoft.com にアクセスし、Environment（環境）を確認・切り替えてから作業を始める。',
    detail: 'ホーム画面またはエージェント一覧から「エージェントを作成」をクリック。',
  },
  {
    number: '02',
    title: '目的を自然言語で入力（最大1,024文字）',
    description: '「社内規定のFAQに答えるエージェントを作りたい」のように日本語でそのまま記述。AIがエージェント名・説明・指示・トリガー・ナレッジの候補を自動提案する。',
    detail: '白紙から作る場合は「空のエージェントを作成」。言語・ソリューション・スキーマ名を指定するには「高度な作成」を選択。',
  },
  {
    number: '03',
    title: 'AI提案を確認・採択',
    description: 'トリガー・チャンネル・ナレッジ・ツールの各候補に「追加／無視／却下」で応答。このセッション限りの提案なので必要なものはすぐ追加する。',
    detail: 'エージェント名は最大42文字。「<」「>」は使用不可。アイコンはPNG・72KB以下・最大192×192px。',
  },
  {
    number: '04',
    title: 'Instructions（指示）を書く（最大8,000文字）',
    description: 'エージェントの目的・トーン・対応範囲・禁止事項を文章で定義する。概要ページ →「指示」→「編集」から変更可能。変更は即座に動作に反映される。',
    detail: '例：「あなたはXX社のサポート担当です。製品情報を正確に案内し、返金対応は上司承認なしに約束しないでください。」',
  },
  {
    number: '05',
    title: 'トピック・ナレッジ・ツールを追加',
    description: '会話フロー（トピック）、知識源（SharePoint・Webサイト・ファイル）、外部連携（コネクタ・エージェントフロー）を追加して機能を拡充する。',
    detail: 'この段階では「箱」を作るイメージ。各機能の詳細は個別ページを参照。',
  },
  {
    number: '06',
    title: 'テスト → 公開',
    description: 'テストパネルで実際に会話して動作確認。生成AIモードでは「アクティビティマップ」でリアルタイムの処理フローを可視化できる。',
    detail: '公開後はチャンネル（Teams・Web・Dynamics 365など）を選択してデプロイ。',
  },
]

const modes = [
  {
    label: '生成AI（Generative）モード',
    tag: '新規エージェントのデフォルト',
    tagColor: '#0f4c96',
    items: [
      'トピック選択：説明文の関連度でAIが自動判断',
      'ナレッジ：質問に答えるためProactiveに検索',
      '複数トピック・ツールを組み合わせて応答可能',
      '不足情報はエージェントが自動で質問を生成',
      '最終応答もエージェントが自動生成',
    ],
  },
  {
    label: 'クラシック（Classic）モード',
    tag: '従来型チャットボット',
    tagColor: '#555',
    items: [
      'トピック選択：トリガーフレーズのマッチングで判断',
      'ナレッジ：トピック不一致時のフォールバックのみ',
      '1つのトピックのみ実行・組み合わせ不可',
      '質問ノードは手動で作成する必要あり',
      '応答メッセージも手動でノードを作成',
    ],
  },
]

const limits = [
  { label: 'エージェント名', value: '最大 42文字（< > 使用不可）' },
  { label: '説明文', value: '最大 1,024文字' },
  { label: '指示（Instructions）', value: '最大 8,000文字' },
  { label: 'アイコン', value: 'PNG・72KB以下・最大192×192px' },
]

const cautions = [
  '生成AIモードではカスタムエンティティ（クローズドリスト・正規表現）が使えない',
  '長い会話の序盤はAIが参照できない場合がある（履歴の制限）',
  'Word・PDF・WebページのリンクはURLテキストとして表示される（クリック不可）',
  '管理者がGenerative Orchestrationを無効化している環境ではクラシックモードのみ利用可能',
  '作成後に主言語の変更は不可（地域のみ変更可能）',
]

const sectionStyle = { padding: '48px 0', borderBottom: '1px solid #ddd' }
const h2Style = { fontFamily: "'Noto Serif JP', serif", fontSize: '20px', fontWeight: 700, margin: '0 0 4px' }
const subStyle = { color: '#888', fontSize: '12px', letterSpacing: '0.1em', margin: '0 0 32px' }

export default function Agent() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>

      {/* ページヘッダー */}
      <header style={{ borderBottom: '2px solid #0d0d0d', padding: '48px 0 32px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '24px' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', color: '#0f4c96', textTransform: 'uppercase', margin: '0 0 12px' }}>
            01 / Core Concept
          </p>
          <h1 style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, margin: '0 0 16px', lineHeight: 1.1 }}>
            エージェント
          </h1>
          <p style={{ fontSize: '15px', color: '#555', margin: 0, maxWidth: '580px' }}>
            ユーザーの言葉を理解し、自律的に会話・判断・タスク実行を行うAI。言語モデル・指示・ナレッジ・ツールを組み合わせて作る「インテリジェントな窓口」。
          </p>
        </div>
        <div style={{ border: '2px solid #0d0d0d', background: '#0f4c96', padding: '16px 24px', boxShadow: '4px 4px 0 #0d0d0d', textAlign: 'center', minWidth: '120px' }}>
          <p style={{ color: '#fff', fontSize: '11px', margin: '0 0 4px', opacity: 0.7, letterSpacing: '0.1em' }}>TYPE</p>
          <p style={{ color: '#fff', fontFamily: "'Noto Serif JP', serif", fontSize: '18px', fontWeight: 700, margin: 0 }}>会話型<br />AI</p>
        </div>
      </header>

      {/* NLUフロー */}
      <section style={sectionStyle}>
        <div style={{ display: 'grid', gridTemplateColumns: '4px 1fr', gap: '24px' }}>
          <div style={{ background: '#0f4c96' }} />
          <div>
            <h2 style={h2Style}>ユーザー入力はどう処理されるか（NLU）</h2>
            <p style={{ color: '#444', margin: '0 0 24px' }}>
              NLU（自然言語理解）が「ユーザーが何を求めているか」を解析し、適切なトピックにルーティングする。従来の単純マッチング型と異なり、言い回しが違っても意図を正しく捉えられる。複数の意図を同時検出して組み合わせて応答することも可能。
            </p>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0' }}>
              {[
                { label: 'ユーザー入力', sub: '「店の場所と営業時間を教えて」' },
                { label: 'NLU解析', sub: '2つの意図を同時に検出' },
                { label: 'トピック選択', sub: '店舗検索＋営業時間を自動選択' },
                { label: '応答生成', sub: '両方の回答をまとめて返答' },
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

      {/* 作成ステップ */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>作成手順</h2>
        <p style={subStyle}>CREATION STEPS</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((step, i) => (
            <div key={step.number} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', borderBottom: i < steps.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
              <div style={{ borderRight: '2px solid #0d0d0d', padding: '22px 24px 20px 0', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: "'Noto Serif JP', serif", fontSize: '22px', fontWeight: 900, color: i === 0 ? '#0f4c96' : '#ccc' }}>{step.number}</span>
              </div>
              <div style={{ padding: '20px 0 20px 24px' }}>
                <p style={{ fontWeight: 700, margin: '0 0 6px', fontSize: '15px' }}>{step.title}</p>
                <p style={{ color: '#444', margin: '0 0 6px', fontSize: '13px' }}>{step.description}</p>
                <p style={{ color: '#0f4c96', fontSize: '12px', margin: 0, borderLeft: '2px solid #0f4c96', paddingLeft: '8px' }}>{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* モード比較 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>生成AIモード vs クラシックモード</h2>
        <p style={subStyle}>ORCHESTRATION MODES</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {modes.map((mode) => (
            <div key={mode.label} style={{ border: '2px solid #0d0d0d', padding: '24px', boxShadow: '4px 4px 0 ' + mode.tagColor }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <h3 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: '15px', margin: 0 }}>{mode.label}</h3>
                <span style={{ fontSize: '10px', fontWeight: 700, background: mode.tagColor, color: '#fff', padding: '2px 8px' }}>{mode.tag}</span>
              </div>
              <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                {mode.items.map((item, i) => (
                  <li key={i} style={{ fontSize: '13px', color: '#444', marginBottom: '6px', lineHeight: 1.6 }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 用語解説 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>用語解説</h2>
        <p style={subStyle}>GLOSSARY</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {glossary.map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: i < glossary.length - 1 ? '1px solid #e8e8e8' : 'none' }}>
              <div style={{ padding: '16px 20px 16px 0', borderRight: '2px solid #0d0d0d' }}>
                <p style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700, fontSize: '13px', margin: 0, color: '#0f4c96' }}>{item.term}</p>
              </div>
              <div style={{ padding: '16px 0 16px 20px' }}>
                <p style={{ fontSize: '13px', color: '#444', margin: 0, lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 仕様・制限値 */}
      <section style={sectionStyle}>
        <h2 style={h2Style}>仕様・制限値</h2>
        <p style={subStyle}>SPECS & LIMITS</p>
        <div style={{ border: '2px solid #0d0d0d', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {limits.map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: i < limits.length - 2 ? '1px solid #ddd' : 'none', borderRight: i % 2 === 0 ? '1px solid #ddd' : 'none' }}>
              <div style={{ padding: '12px 16px', background: '#f5f5f3', borderRight: '1px solid #ddd' }}>
                <p style={{ fontSize: '12px', fontWeight: 700, margin: 0, color: '#333' }}>{item.label}</p>
              </div>
              <div style={{ padding: '12px 16px' }}>
                <p style={{ fontSize: '12px', margin: 0, color: '#0f4c96', fontWeight: 700 }}>{item.value}</p>
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

      {/* 参照リンク */}
      <section style={{ padding: '48px 0' }}>
        <h2 style={h2Style}>参照（Microsoft Learn）</h2>
        <p style={subStyle}>REFERENCES</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {refs.map((ref, i) => (
            <a key={i} href={ref.url} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px', border: '1px solid #ddd',
              textDecoration: 'none', color: '#0f4c96', fontSize: '13px', fontWeight: 500,
              transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#f0f4ff'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <span>{ref.label}</span>
              <span style={{ fontSize: '11px', opacity: 0.5 }}>↗</span>
            </a>
          ))}
        </div>
      </section>

    </div>
  )
}
