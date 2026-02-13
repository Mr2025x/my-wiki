---
hide:
  - date
  - footer
home: true
template: home.html
statistics: true
---

# o(〃'▽'〃)o Hi!

这里是我的个人笔记本！

[:material-clock-time-two-outline: 最近更新](changelog/) / 
[:octicons-link-16: 朋友们!](links/) / 
[:material-chart-line: 站点统计](javascript:toggle_statistics();)

<div id="statistics" markdown="1" class="card" style="width: 27em; border-color: transparent; opacity: 0; font-size: 75%">
<div style="padding-left: 1em;" markdown="1">
页面总数：{{ pages }}  
总字数：{{ words }}  
代码块行数：{{ codes }}  
网站运行时间：<span id="web-time"></span>
</div>
</div>

<script>
// 简单的建站时间计时器
function updateTime() {
    var date = new Date();
    var now = date.getTime();
    var startDate = new Date("2026/01/01 00:00:00"); // 修改为你的建站时间
    var start = startDate.getTime();
    var diff = now - start;
    var d, h, m;
    d = Math.floor(diff / (24 * 3600 * 1000));
    h = Math.floor(diff / (3600 * 1000) % 24);
    m = Math.floor(diff / (60 * 1000) % 60);
    document.getElementById("web-time").innerHTML = d + " 天 " + h + " 小时 " + m + " 分钟";
    setTimeout(updateTime, 60000);
}
updateTime();

// 切换统计卡片显示/隐藏
function toggle_statistics() {
    var statistics = document.getElementById("statistics");
    statistics.style.opacity = (statistics.style.opacity == 0) ? 1 : 0;
}
</script>