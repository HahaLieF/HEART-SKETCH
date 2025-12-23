import "./summaryModal.css";

export default function SummaryModal () {
    return (
        <div className="summary">
            <header className="summary-header wrapper">
                <h1 className="summary-title">今日のまとめ</h1>
            </header>

            <main className ="summary-main wrapper">
                <div className="modal-summary">
                    <section className="physical-check">
                        <h3 className="physical-check-title">今日の体力はどのぐらい？</h3>
                        <select className="check-list">
                            <option value="5">5【かなり余裕がある】</option>
                            <option value="4">5【少し余裕がある】</option>
                            <option value="3">5【良くもなく悪くもなく】</option>
                            <option value="2">5【体力はほとんど残っていない】</option>
                            <option value="1">5【動けない】</option>
                        </select>
                    </section>
                </div>
            </main>
        </div>
    )
}