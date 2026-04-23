import React, { useState, useContext, useEffect } from "react";
import GeneralContext from "../dashboard/GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist as initialWatchlist } from "../../dashboard_data/data";
import { DoughnutChart } from "../dashboard/DoughnoutChart";
import AIAdvisorPanel from "../dashboard/AIAdvisorPanel";

const labels = initialWatchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const [advisorOpen, setAdvisorOpen] = useState(false);
  const [advisorSymbol, setAdvisorSymbol] = useState("");
  const [watchlist, setWatchlist] = useState(initialWatchlist);

  useEffect(() => {
    const interval = setInterval(() => {
      setWatchlist((prevWatchlist) =>
        prevWatchlist.map((stock) => {
          const change = (Math.random() * 2 - 1) * 0.005; // +/- 0.5% fluctuation
          const newPrice = (stock.price * (1 + change)).toFixed(2);
          const isDown = change < 0;
          const currentPercentVal = parseFloat(stock.percent.replace('%', ''));
          const newPercent = (currentPercentVal + change * 100).toFixed(2) + '%';
          return {
            ...stock,
            price: parseFloat(newPrice),
            percent: newPercent.startsWith('-') ? newPercent : '+' + newPercent,
            isDown,
          };
        })
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(99, 102, 241, 0.6)",
          "rgba(139, 92, 246, 0.6)",
          "rgba(34, 197, 94, 0.6)",
          "rgba(245, 158, 11, 0.6)",
          "rgba(239, 68, 68, 0.6)",
          "rgba(59, 130, 246, 0.6)",
        ],
        borderColor: [
          "rgba(99, 102, 241, 1)",
          "rgba(139, 92, 246, 1)",
          "rgba(34, 197, 94, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(239, 68, 68, 1)",
          "rgba(59, 130, 246, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const openAdvisor = (symbol) => {
    setAdvisorSymbol(symbol);
    setAdvisorOpen(true);
  };

  return (
    <>
      <div className="watchlist-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
            className="search"
          />
          <span className="counts"> {watchlist.length} / 50</span>
        </div>
        <ul className="list">
          {watchlist.map((stock, index) => (
            <WatchListItem stock={stock} key={index} onAIClick={openAdvisor} />
          ))}
        </ul>
        <DoughnutChart data={data} />
      </div>

      <AIAdvisorPanel
        isOpen={advisorOpen}
        onClose={() => setAdvisorOpen(false)}
        symbol={advisorSymbol}
      />
    </>
  );
};

export default WatchList;

const WatchListItem = ({ stock, onAIClick }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchListActions uid={stock.name} onAIClick={onAIClick} />
      )}
    </li>
  );
};

const WatchListActions = ({ uid, onAIClick }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const pillBase = {
    border: "none", borderRadius: 9999, fontSize: "0.72rem", fontWeight: 600,
    padding: "5px 13px", cursor: "pointer", height: 28,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)", letterSpacing: "0.02em", marginRight: 4,
  };

  return (
    <span style={{
      position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
      display: "flex", alignItems: "center", justifyContent: "flex-end",
      paddingRight: 10, boxSizing: "border-box",
      background: "linear-gradient(90deg, transparent 0%, rgba(5,10,22,0.96) 30%)",
      gap: 0,
    }}>
      <Tooltip title="AI Advisor ✨" placement="top" arrow TransitionComponent={Grow}>
        <button
          style={{
            ...pillBase,
            background: "linear-gradient(135deg, #1e40af, #1d4ed8)",
            color: "#e0f2fe",
            boxShadow: "0 3px 14px rgba(29,78,216,0.5)",
            padding: "5px 13px",
            border: "1px solid rgba(96,165,250,0.25)",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.65)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 3px 14px rgba(29,78,216,0.5)"; }}
          onClick={() => onAIClick(uid)}
        >
          ✨ AI
        </button>
      </Tooltip>

      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          style={{
            ...pillBase,
            background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
            color: "#fff",
            boxShadow: "0 3px 12px rgba(37,99,235,0.4)",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.boxShadow = "0 4px 18px rgba(37,99,235,0.6)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 3px 12px rgba(37,99,235,0.4)"; }}
          onClick={handleBuyClick}
        >
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button
          style={{
            ...pillBase,
            background: "linear-gradient(135deg, #9f1239, #f43f5e)",
            color: "#fff",
            boxShadow: "0 3px 12px rgba(244,63,94,0.35)",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          Sell
        </button>
      </Tooltip>

      <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}>
        <button
          style={{
            ...pillBase,
            background: "rgba(255,255,255,0.06)",
            color: "#94a3b8",
            border: "1px solid rgba(59,130,246,0.15)",
            padding: "5px 8px",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,130,246,0.14)"; e.currentTarget.style.color = "#60a5fa"; e.currentTarget.style.transform = "scale(1.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.transform = "scale(1)"; }}
        >
          <BarChartOutlined style={{ fontSize: 14 }} />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button
          style={{
            ...pillBase,
            background: "rgba(255,255,255,0.06)",
            color: "#94a3b8",
            border: "1px solid rgba(59,130,246,0.15)",
            padding: "5px 8px",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,130,246,0.14)"; e.currentTarget.style.color = "#60a5fa"; e.currentTarget.style.transform = "scale(1.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.transform = "scale(1)"; }}
        >
          <MoreHoriz style={{ fontSize: 14 }} />
        </button>
      </Tooltip>
    </span>
  );
};

