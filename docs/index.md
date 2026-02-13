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

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 80vh; width: 100%;">

  

  <div style="
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
    gap: 2rem; 
    width: 100%; 
    max-width: 1000px;
    padding: 0 1rem;
  ">

    <a href="physics/quantum/" style="text-decoration: none; color: inherit;">
      <div style="
        background: rgba(255, 255, 255, 0.1); 
        backdrop-filter: blur(12px); 
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2rem; 
        border-radius: 16px; 
        transition: transform 0.2s, background 0.2s;
        height: 100%;
        display: flex; flex-direction: column;
      " onmouseover="this.style.transform='translateY(-5px)'; this.style.background='rgba(255,255,255,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.background='rgba(255,255,255,0.1)'">
        
        <div style="margin-bottom: 1rem; opacity: 0.9;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M12,2C6.48,2 2,6.48 2,12s4.48,10 10,10 10-4.48 10-10S17.52,2 12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8 8-8 8,3.59 8,8S16.41,20 12,20z"/><circle cx="12" cy="12" r="2"/></svg>
        </div>
        
        <h3 style="margin: 0; font-size: 1.5rem; font-weight: 600;">物理笔记</h3>
        <p style="opacity: 0.7; margin-top: 0.5rem; font-size: 0.9rem; line-height: 1.5;">
        </p>
      </div>
    </a>

    <a href="coding/ds/" style="text-decoration: none; color: inherit;">
      <div style="
        background: rgba(255, 255, 255, 0.1); 
        backdrop-filter: blur(12px); 
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2rem; 
        border-radius: 16px; 
        transition: transform 0.2s, background 0.2s;
        height: 100%;
        display: flex; flex-direction: column;
      " onmouseover="this.style.transform='translateY(-5px)'; this.style.background='rgba(255,255,255,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.background='rgba(255,255,255,0.1)'">
        
        <div style="margin-bottom: 1rem; opacity: 0.9;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
        </div>
        
        <h3 style="margin: 0; font-size: 1.5rem; font-weight: 600;">编程算法</h3>
        <p style="opacity: 0.7; margin-top: 0.5rem; font-size: 0.9rem; line-height: 1.5;">
          
        </p>
      </div>
    </a>

    <a href="changelog/" style="text-decoration: none; color: inherit;">
      <div style="
        background: rgba(255, 255, 255, 0.1); 
        backdrop-filter: blur(12px); 
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 2rem; 
        border-radius: 16px; 
        transition: transform 0.2s, background 0.2s;
        height: 100%;
        display: flex; flex-direction: column;
      " onmouseover="this.style.transform='translateY(-5px)'; this.style.background='rgba(255,255,255,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.background='rgba(255,255,255,0.1)'">
        
        <div style="margin-bottom: 1rem; opacity: 0.9;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
        </div>
        
        <h3 style="margin: 0; font-size: 1.5rem; font-weight: 600;">时间轴</h3>
        <p style="opacity: 0.7; margin-top: 0.5rem; font-size: 0.9rem; line-height: 1.5;">
          
        </p>
      </div>
    </a>

  </div>

  <div style="
    margin-top: 4rem; 
    display: flex; 
    gap: 3rem; 
    opacity: 0.8; 
    font-family: 'JetBrains Mono', monospace; 
    background: rgba(0,0,0,0.2); 
    padding: 10px 30px; 
    border-radius: 50px;
    backdrop-filter: blur(5px);
  " class="home-text-shadow">
    <div title="文章总数" style="display: flex; align-items: center; gap: 8px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
      {{ pages }}
    </div>
    <div title="总字数" style="display: flex; align-items: center; gap: 8px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
      {{ words }}
    </div>
    <div title="运行时间" style="display: flex; align-items: center; gap: 8px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
      <span id="web-time">...</span>
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