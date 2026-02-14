---
hide:
  - date
  - footer
  - navigation
  - toc
home: true
template: home.html
statistics: true
---

<style>
  /* 隐藏内容顶部的元数据栏 */
  .md-content__header, .md-source-file, .md-typeset .md-content__button {
    display: none !important;
  }
  /* 调整卡片内的文字间距 */
  .home-card-title {
    margin: 0 !important;
    font-size: 1.6rem !important;
    font-weight: 700 !important;
  }
</style>

<div style="
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: flex-start; 
  padding-top: 2vh;
  min-height: 80vh; 
  width: 100%;
">
<style>
    /* 闪烁的光标动画 */
    .blinking-cursor {
      font-weight: 700;
      font-family: 'JetBrains Mono', monospace;
      color: #fff;
      animation: blink 1s step-end infinite;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
</style>

  <div style="
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(10px);
    border-left: 5px solid #fff;
    /* 【在这里调高度】：修改 2.5rem 即可 */
    padding: 3.0rem 3rem; 
    border-radius: 0 16px 16px 0;
    margin-bottom: 4rem;
    /* 【在这里调宽度】：修改 800px 即可 */
    max-width: 900px; 
    width: 90%;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
  ">
    
    <h2 style="margin: 0 0 1rem 0; font-size: 1.8rem; font-family: 'JetBrains Mono', monospace; font-weight: 700; min-height: 2.2rem;">
      <span id="typing-text"></span><span class="blinking-cursor">_</span>
    </h2>
    
    <p style="margin: 0 0 0.8rem 0; opacity: 0.9; line-height: 1.7; font-size: 1.1rem;">
      系统已上线。欢迎访问 <strong>My Archives</strong>。
    </p>
    <p style="margin: 0; opacity: 0.7; font-size: 0.95rem; font-family: 'JetBrains Mono', monospace;">
      $ 运行环境: 物理定律 & 计算机逻辑<br>
      $ 状态: 持续学习中...
    </p>
  </div>

  <script>
    // 你可以在这个数组里加多句话，它会循环打出来！
    const textArray = ["> Hello, World", "> Welcome to my Wiki", "> Talk is cheap. Show me the code."];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentText = textArray[textIndex];
      const typingElement = document.getElementById("typing-text");
      if (!typingElement) return;

      // 截取当前需要显示的字符
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      // 控制打字和删除的速度 (毫秒)
      let typeSpeed = isDeleting ? 50 : 120; 

      // 如果一句话打完了，停顿两秒再开始删除
      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; 
        isDeleting = true;
      }
      // 如果一句话删完了，切换到下一句
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; // 循环切换到下一句
        typeSpeed = 400; // 开始打下一句前的停顿
      }

      setTimeout(typeEffect, typeSpeed);
    }

    // 页面加载完毕后，延迟 800 毫秒启动打字机
    setTimeout(typeEffect, 800);
  </script>

  <div style="
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); 
    gap: 2rem; 
    width: 100%; 
    max-width: 1250px; /*稍微加宽一点，让三张卡片排布更松弛*/
    padding: 0 1rem;
    min-height: 200px;
  ">

    <a href="physics/quantum/" style="text-decoration: none; color: inherit;">
      <div style="
        background: rgba(255, 255, 255, 0.1); 
        backdrop-filter: blur(12px); 
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2.5rem 2rem; 
        border-radius: 20px; 
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.3s;
        height: 100%;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
      " onmouseover="this.style.transform='translateY(-8px)'; this.style.background='rgba(255,255,255,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.background='rgba(255,255,255,0.1)'">
        
        <div style="margin-bottom: 0.1rem; opacity: 0.95;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="currentColor"><path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10-4.48 10-10S17.52,2 12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8 8-8 8,3.59 8,8S16.41,20 12,20z"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        
        <h3 class="home-card-title">物理</h3>
      </div>
    </a>

    <a href="coding/ds/" style="text-decoration: none; color: inherit;">
      <div style="
        background: rgba(255, 255, 255, 0.1); 
        backdrop-filter: blur(12px); 
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2.5rem 2rem; 
        border-radius: 20px; 
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.3s;
        height: 100%;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
      " onmouseover="this.style.transform='translateY(-8px)'; this.style.background='rgba(255,255,255,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.background='rgba(255,255,255,0.1)'">
        
        <div style="margin-bottom: 0.1rem; opacity: 0.95;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
        </div>
        
        <h3 class="home-card-title">CS</h3>
      </div>
    </a>

    <a href="changelog/" style="text-decoration: none; color: inherit;">
      <div style="
        background: rgba(255, 255, 255, 0.1); 
        backdrop-filter: blur(12px); 
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2.5rem 2rem; 
        border-radius: 20px; 
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.3s;
        height: 100%;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
      " onmouseover="this.style.transform='translateY(-8px)'; this.style.background='rgba(255,255,255,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.background='rgba(255,255,255,0.1)'">
        
        <div style="margin-bottom: 0.1rem; opacity: 0.95;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
        </div>
        
        <h3 class="home-card-title">time</h3>
      </div>
    </a>
    <a href="你的文件夹名/文件名/" style="text-decoration: none; color: inherit;">
      <div style="
        background: rgba(255, 255, 255, 0.1); 
        backdrop-filter: blur(12px); 
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2.5rem 2rem; 
        border-radius: 20px; 
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.3s;
        height: 100%;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
      " onmouseover="this.style.transform='translateY(-8px)'; this.style.background='rgba(255,255,255,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.background='rgba(255,255,255,0.1)'">
        
        <div style="margin-bottom: 0.1rem; opacity: 0.95;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="currentColor"><path d="M12,2A10,10 0 1,0 22,12A10,10 0 0,0 12,2Z" /></svg>
        </div>
        
        <h3 class="home-card-title">新卡片</h3>
      </div>
    </a>
     <a href="你的文件夹名/文件名/" style="text-decoration: none; color: inherit;">
      <div style="
        background: rgba(255, 255, 255, 0.1); 
        backdrop-filter: blur(12px); 
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2.5rem 2rem; 
        border-radius: 20px; 
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.3s;
        height: 100%;
        display: flex; 
        flex-direction: column;
        justify-content: space-between;
      " onmouseover="this.style.transform='translateY(-8px)'; this.style.background='rgba(255,255,255,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.background='rgba(255,255,255,0.1)'">
        
        <div style="margin-bottom: 0.1rem; opacity: 0.95;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="54" height="54" fill="currentColor"><path d="M12,2A10,10 0 1,0 22,12A10,10 0 0,0 12,2Z" /></svg>
        </div>
        
        <h3 class="home-card-title">新卡片</h3>
      </div>
    </a>
    
  </div>

  <div style="
    margin-top: 5rem; 
    display: flex; 
    gap: 2.5rem; 
    opacity: 0.6; 
    font-size: 0.85rem;
    font-family: 'JetBrains Mono', monospace; 
    background: rgba(0,0,0,0.15); 
    padding: 8px 24px; 
    border-radius: 50px;
    backdrop-filter: blur(5px);
    transition: opacity 0.3s;
  " onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.6'">
    <div title="文章总数" style="display: flex; align-items: center; gap: 8px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
      {{ pages }}
    </div>
    <div title="总字数" style="display: flex; align-items: center; gap: 8px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
      {{ words }}
    </div>
    <div title="运行时间" style="display: flex; align-items: center; gap: 8px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
      <span id="web-time">Loading...</span>
    </div>
  </div>

</div>

<script>
function updateTime() {
    var date = new Date();
    var now = date.getTime();
    var startDate = new Date("2026/01/01 00:00:00");
    var start = startDate.getTime();
    var diff = now - start;
    var d = Math.floor(diff / (24 * 3600 * 1000));
    document.getElementById("web-time").innerHTML = d + " Days";
    setTimeout(updateTime, 60000);
}
updateTime();
</script>