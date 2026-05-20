
React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("All");

  const matches = [
    {
      id: 1,
      type: "Football",
      league: "LA LIGA",
      homeTeam: "Real Madrid",
      awayTeam: "Barcelona",
      homeScore: 2,
      awayScore: 1,
      time: "67'",
      status: "LIVE",
      scorers: "Vinicius Jr 23' • Mbappe 67' • Lewandowski 45+1'",
      homeShort: "RMA",
      awayShort: "BAR",
      homeColor: "#FFD700",
      awayColor: "#FF3333"
    },
    {
      id: 2,
      type: "Football",
      league: "PREMIER LEAGUE",
      homeTeam: "Manchester City",
      awayTeam: "Arsenal",
      homeScore: 0,
      awayScore: 0,
      time: "34'",
      status: "LIVE",
      scorers: "No goals yet",
      homeShort: "MCI",
      awayShort: "ARS",
      homeColor: "#00BFFF",
      awayColor: "#FF3333"
    },
    {
      id: 3,
      type: "Cricket",
      league: "IPL T20",
      homeTeam: "Mumbai Indians",
      awayTeam: "Chennai Super Kings",
      homeScore: "185/4",
      awayScore: "142/2",
      time: "14.2 Ov",
      status: "LIVE",
      scorers: "CSK need 44 runs in 34 balls",
      homeShort: "MI",
      awayShort: "CSK",
      homeColor: "#004BA0",
      awayColor: "#ECC53A"
    }
  ];

  // ফিল্টারিং লজিক যা আপনার বাটনকে সচল করবে
  const filteredMatches = activeTab === "All" ? matches : matches.filter(m => m.type === activeTab);

  return (
    <div style={{
      backgroundColor: "#0F172A",
      color: "#F8FAFC",
      minHeight: "100vh",
00v
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: "16px"
    }}>
      {/* Top Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", 
 backgroundColor: "#2563EB", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", lineHeight: "36px", textAlign: "center" }}>X</div>
          <h1 style={{ fontSize: "1.4rem", fontWeight: "bold", margin: 0 }}>LiveScore<span style={{ color: "#2563EB" }}>X</span></h1>
        </div>
        <div style={{ display: "flex", gap: "16px", fontSize: "1.2rem", color: "#94A3B8" }}>
          <span>🔔</span>
          <span>🔍</span>
        </div>
      </header>

      {/* Categories Tabs - Now fully Functional */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px", overflowX: "auto" }}>
        {["All", "Football", "Cricket"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab === tab ? "#2563EB" : "#1E293B",
              color: activeTab === tab ? "#FFF" : "#94A3B8",
              border: "none",
              borderRadius: "20px",
              padding: "8px 16px",
              fontWeight: "600",
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            {tab === "All" ? "All Sports" : tab}
          </button>
        ))}
      </div>

      {/* Main Dashboard Layout */}
      <main style={{ maxWidth: "500px", margin: "0 auto" }}>
        
        {/* Big Featured Card - Football Dynamic Show */}
        {activeTab !== "Cricket" && filteredMatches.some(m => m.id === 1) && (
          <div style={{
            background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
            borderRadius: "16px",
            padding: "20px",
            marginBottom: "24px",
            border: "1px solid #334155"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: "bold", color: "#38BDF8", backgroundColor: "rgba(56, 189, 248, 0.1)", padding: "4px 8px", borderRadius: "4px" }}>LA LIGA</span>
              <span style={{ color: "#4ADE80", fontSize: "0.85rem", fontWeight: "600" }}>🟢 67'</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: "#FFD700", borderRadius: "50%", color: "#000", fontWeight: "bold", display: "flex", alignItems: "center", justifyCenter: "center", lineHeight: "48px", textAlign: "center", justifyContent: "center" }}>RMA</div>
                <span style={{ marginTop: "8px", fontWeight: "600", fontSize: "0.95rem" }}>Real Madrid</span>
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "800", letterSpacing: "4px" }}>2 - 1</div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                <div style={{ width: "48px", height: "48px", backgroundColor: "#FF3333", borderRadius: "50%", color: "#FFF", fontWeight: "bold", display: "flex", alignItems: "center", justifyCenter: "center", lineHeight: "48px", textAlign: "center", justifyContent: "center" }}>BAR</div>
                <span style={{ marginTop: "8px", fontWeight: "600", fontSize: "0.95rem" }}>Barcelona</span>
              </div>
            </div>
            <div style={{ textAlign: "center", fontSize: "0.8rem", color: "#94A3B8", borderTop: "1px solid #334155", paddingTop: "12px" }}>
              Vinicius Jr 23' • Mbappe 67' • Lewandowski 45+1'
            </div>
          </div>
        )}

        {/* Live List Title */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: "bold", margin: 0 }}>🟢 Live Now ({filteredMatches.length})</h2>
          <span style={{ fontSize: "0.85rem", color: "#2563EB", fontWeight: "600" }}>See All &gt;</span>
        </div>

        {/* Matches Card List - Fully Filtered */}
        {filteredMatches.map((match) => (
          <div key={match.id} style={{
            backgroundColor: "#1E293B",
            borderRadius: "12px",
            padding: "16px",
            marginBottom: "12px",
            border: "1px solid #334155"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "#94A3B8", marginBottom: "12px" }}>
              <span>{match.league}</span>
              <span style={{ color: "#4ADE80", fontWeight: "600" }}>🟢 {match.time}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: "600" }}>{match.homeTeam}</span>
                <span style={{ fontWeight: "700", color: match.type === "Cricket" ? "#ECC53A" : "#FFF" }}>{match.homeScore}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: "600" }}>{match.awayTeam}</span>
                <span style={{ fontWeight: "700" }}>{match.awayScore}</span>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
