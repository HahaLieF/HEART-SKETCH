// src/screens/Home/HomeScreen.tsx

export const HomeScreen = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1 className="home-title">こころスケッチ</h1>
            </header>

            <main className="home-main">
                <section className="home-cards">
                <button className="home-card">
                    <h2 className="home-card-title">今日のまとめ</h2>
                </button>

                <button className="home-card">
                    <h2 className="home-card-title">感情吐き出し</h2>
                </button>

                <button className="home-card">
                    <h2 className="home-card-title">記録一覧</h2>
                </button>

                <button className="home-card">
                    <h2 className="home-card-title">自分取扱説明書</h2>
                </button>
                </section>
            </main>
        </div>
    );
};
