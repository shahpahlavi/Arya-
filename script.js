// TradingView Widgets for Live Charts
(function() {
    new TradingView.widget({
        container_id: "tradingview_btc",
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        studies: ["MACD@tv-basicstudies"],
    });

    new TradingView.widget({
        container_id: "tradingview_eth",
        autosize: true,
        symbol: "BINANCE:ETHUSDT",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        studies: ["RSI@tv-basicstudies"],
    });

    new TradingView.widget({
        container_id: "tradingview_sol",
        autosize: true,
        symbol: "BINANCE:SOLUSDT",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        withdateranges: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        studies: ["EMA@tv-basicstudies"],
    });
})();
