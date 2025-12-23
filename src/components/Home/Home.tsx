import "./home.css";
import SummaryModal from "../modal/SummaryModal";
import { useState } from "react";

export default function Home () {
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const openSummaryModal = () =>{
        setIsSummaryOpen(true);
    }

    const closeSummaryModal = () => {
        setIsSummaryOpen(false)
    }
    return (
        <div className="home">
            <header className="home-header wrapper">
                <h1 className="home-title">こころスケッチ</h1>
            </header>

            <main className="home-main wrapper">
                <section className="home-cards">
                    <button className="home-card card-summary" onClick={openSummaryModal}>
                        <h2 className="home-card-title">今日のまとめ</h2>
                        <span>3行日記/メンタル評価/体力評価</span>
                    </button>

                    <button className="home-card card-emotion">
                        <h2 className="home-card-title">感情吐き出し</h2>
                        <span className ="common-card-description">自由に書く</span>
                    </button>

                    <button className="home-card card-records">
                        <h2 className="home-card-title">記録一覧</h2>
                        <span className ="common-card-description">過去を振り返る</span>
                    </button>

                    <button className="home-card card-manual">
                        <h2 className="home-card-title">自分取扱説明書</h2>
                        <span className ="common-card-description">しんどい時の対処</span>
                    </button>
                </section>
            </main>
            {isSummaryOpen && <SummaryModal />}
        </div>  
    ); 
    
};



