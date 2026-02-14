window.MathJax = {
  tex: {
    // 增加对 $...$ 的行内公式支持
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    // 增加对 $$...$$ 的独立块公式支持
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};