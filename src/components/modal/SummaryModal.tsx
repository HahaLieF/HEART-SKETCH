import "./summaryModal.css";


export default function SummaryModal () {
    return (
        <div className="modal-background">
            <div className="modal">
                <div className="summary modal-wrapper">
                    <header className="summary-header">
                        <h1 className="summary-title">今日のまとめ</h1>
                    </header>
                
                    <main className ="summary-main">
                        <div className="modal-summary">
                            <section className="physical-check">
                                <h3 className="physical-check-title">今日の体力はどのぐらい？</h3>
                                <select className="check-list">
                                    {/* 最後にチェック項目を修正する*/}
                                    <option value="">選択してください</option>
                                    <option value="5">5【かなり余裕がある】</option>
                                    <option value="4">4【少し余裕がある】</option>
                                    <option value="3">3【良くもなく悪くもなく】</option>
                                    <option value="2">2【体力はほとんど残っていない】</option>
                                    <option value="1">1【動けない】</option>
                                </select>
                            </section>
                        </div>

                        <div className="mental-summary">
                            <section className="mental-check">
                                <h3 className="mental-check-title">現在のメンタルの調子は？</h3>
                                <select className="check-list" >
                                    <option value="">選択してください</option>
                                    <option value="5">5【心に余裕がある】</option>
                                    <option value="4">4【比較的落ち着いている】</option>
                                    <option value="3">3【特に問題はない】</option>
                                    <option value="2">2【気持ちが重い】</option>
                                    <option value="1">1【かなりつらい】</option>
                                </select>
                            </section>
                        </div>

                        <div className="diary-entry-field">
                            <section className="three-line-diary">
                                <h3 className="three-line-diary-title">3行日記</h3>
                                <ul className="diary-list-wrapper">
                                    <li><input type="text" className="fill-in-field" placeholder="①途中まででOK"/></li>
                                    <li><input type="text" className="fill-in-field" placeholder="②途中まででOK"/></li>
                                    <li><input type="text" className="fill-in-field" placeholder="③途中まででOK"/></li>
                                </ul>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
