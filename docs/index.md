---
hide:
  - date
  - footer
  - navigation
  - toc
home: true
template: home.html
statistics: false
---

<style>
  /* 隐藏不需要的元数据 */
  .md-content__header, 
  .md-source-file, 
  .md-typeset .md-content__button, 
  .md-typeset small,
  .read-time,
  .reading-time,
  [id="statistics"] {
    display: none !important;
  }

  /* 闪烁的光标动画 (打字机用) */
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
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: flex-start; 
  padding-top: 8vh; 
  min-height: 80vh; 
  width: 100%;
">

  <div style="
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.05); /* 全局暗边框放前面 */
    border-left: 5px solid #fff; /* 左侧亮白边框放后面，确保不被覆盖 */
    padding: 2.5rem 3rem; 
    border-radius: 0 12px 12px 0; /* 左边直角贴合白边，右边保持圆角 */
    margin-bottom: 4rem;
    max-width: 800px; 
    width: 90%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  ">
    <h2 style="margin: 0 0 1rem 0; font-size: 1.8rem; font-family: 'JetBrains Mono', monospace; font-weight: 700; min-height: 2.2rem;">
      <span id="typing-text"></span><span class="blinking-cursor">_</span>
    </h2>
    <p style="margin: 0 0 0.8rem 0; opacity: 0.9; line-height: 1.7; font-size: 1.1rem; color: #ccc;">
      叮！ <strong>痞老板的Notebook</strong> 已上线。
    </p>
    <p style="margin: 0; opacity: 0.7; font-size: 0.95rem; font-family: 'JetBrains Mono', monospace; color: #888;">
      $ 运行环境: 物理定律 & 计算机逻辑<br>
      $ 状态: 持续学习中...
    </p>
  </div>


  <div style="
    display: grid; 
    /* 【核心修复1】改为 auto-fill，确保无论剩下几个卡片，宽度都绝对统一 */
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
    gap: 2rem; 
    width: 100%; 
    max-width: 1100px; 
    padding: 0 1rem;
    font-family: 'JetBrains Mono', monospace;
  ">

    <a href="physics/quantum/" style="text-decoration: none; color: inherit; display: flex;">
      <div style="
        width: 100%;
        background: rgba(15, 20, 25, 0.85); 
        backdrop-filter: blur(8px); 
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-left: 4px solid #4fc3f7; 
        padding: 2rem; 
        border-radius: 8px; 
        transition: all 0.3s ease;
        display: flex; 
        flex-direction: column;
      " onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='rgba(79, 195, 247, 0.4)'; this.style.boxShadow='0 8px 25px rgba(79, 195, 247, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255, 255, 255, 0.08)'; this.style.boxShadow='none'">
        
        <div style="font-size: 0.85rem; color: #666; margin-bottom: 1.2rem; border-bottom: 1px dashed #333; padding-bottom: 0.8rem;">
          <span style="color: #4fc3f7;">root@archives</span>:~/physics$ ./read.sh
        </div>
        
        <h3 style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #fff;">物理笔记</h3>
        <p style="opacity: 0.7; margin-top: 1rem; font-size: 0.9rem; line-height: 1.6; flex-grow: 1; color: #aaa; font-family: sans-serif;">
          量子力学、电磁场与相对论的学习轨迹。
        </p>
        
        <div style="font-size: 0.8rem; color: #4fc3f7; margin-top: 1rem; font-weight: bold;">
          [ OK ] Loaded
        </div>
      </div>
    </a>

    <a href="coding/ds/" style="text-decoration: none; color: inherit; display: flex;">
      <div style="
        width: 100%;
        background: rgba(15, 20, 25, 0.85); 
        backdrop-filter: blur(8px); 
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-left: 4px solid #69f0ae; 
        padding: 2rem; 
        border-radius: 8px; 
        transition: all 0.3s ease;
        display: flex; 
        flex-direction: column;
      " onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='rgba(105, 240, 174, 0.4)'; this.style.boxShadow='0 8px 25px rgba(105, 240, 174, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255, 255, 255, 0.08)'; this.style.boxShadow='none'">
        
        <div style="font-size: 0.85rem; color: #666; margin-bottom: 1.2rem; border-bottom: 1px dashed #333; padding-bottom: 0.8rem;">
          <span style="color: #69f0ae;">root@archives</span>:~/coding$ cat code.py
        </div>
        
        <h3 style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #fff;">编程算法</h3>
        <p style="opacity: 0.7; margin-top: 1rem; font-size: 0.9rem; line-height: 1.6; flex-grow: 1; color: #aaa; font-family: sans-serif;">
          数据结构、算法题解与开发实战经验。
        </p>
        
        <div style="font-size: 0.8rem; color: #69f0ae; margin-top: 1rem; font-weight: bold;">
          [ RUN ] Executing
        </div>
      </div>
    </a>

    <a href="changelog/" style="text-decoration: none; color: inherit; display: flex;">
      <div style="
        width: 100%;
        background: rgba(15, 20, 25, 0.85); 
        backdrop-filter: blur(8px); 
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-left: 4px solid #ffd54f; 
        padding: 2rem; 
        border-radius: 8px; 
        transition: all 0.3s ease;
        display: flex; 
        flex-direction: column;
      " onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='rgba(255, 213, 79, 0.4)'; this.style.boxShadow='0 8px 25px rgba(255, 213, 79, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255, 255, 255, 0.08)'; this.style.boxShadow='none'">
        
        <div style="font-size: 0.85rem; color: #666; margin-bottom: 1.2rem; border-bottom: 1px dashed #333; padding-bottom: 0.8rem;">
          <span style="color: #ffd54f;">root@archives</span>:~/logs$ tail -f hist.log
        </div>
        
        <h3 style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #fff;">时间轴</h3>
        <p style="opacity: 0.7; margin-top: 1rem; font-size: 0.9rem; line-height: 1.6; flex-grow: 1; color: #aaa; font-family: sans-serif;">
          查看网站更新日志与过往足迹。
        </p>
        
        <div style="font-size: 0.8rem; color: #ffd54f; margin-top: 1rem; font-weight: bold;">
          [ SYNC ] Up to date
        </div>
      </div>
    </a>

    <a href="notes/reading/" style="text-decoration: none; color: inherit; display: flex;">
      <div style="
        width: 100%;
        background: rgba(15, 20, 25, 0.85); 
        backdrop-filter: blur(8px); 
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-left: 4px solid #b39ddb; 
        padding: 2rem; 
        border-radius: 8px; 
        transition: all 0.3s ease;
        display: flex; 
        flex-direction: column;
      " onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='rgba(179, 157, 219, 0.4)'; this.style.boxShadow='0 8px 25px rgba(179, 157, 219, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255, 255, 255, 0.08)'; this.style.boxShadow='none'">
        
        <div style="font-size: 0.85rem; color: #666; margin-bottom: 1.2rem; border-bottom: 1px dashed #333; padding-bottom: 0.8rem;">
          <span style="color: #b39ddb;">root@archives</span>:~/books$ less index.md
        </div>
        
        <h3 style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #fff;">读书笔记</h3>
        <p style="opacity: 0.7; margin-top: 1rem; font-size: 0.9rem; line-height: 1.6; flex-grow: 1; color: #aaa; font-family: sans-serif;">
          沉淀文字力量，记录阅读思考。
        </p>
        
        <div style="font-size: 0.8rem; color: #b39ddb; margin-top: 1rem; font-weight: bold;">
          [ INFO ] Reading...
        </div>
      </div>
    </a>

    <a href="friends/" style="text-decoration: none; color: inherit; display: flex;">
      <div style="
        width: 100%;
        background: rgba(15, 20, 25, 0.85); 
        backdrop-filter: blur(8px); 
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-left: 4px solid #ff8a65; 
        padding: 2rem; 
        border-radius: 8px; 
        transition: all 0.3s ease;
        display: flex; 
        flex-direction: column;
      " onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='rgba(255, 138, 101, 0.4)'; this.style.boxShadow='0 8px 25px rgba(255, 138, 101, 0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255, 255, 255, 0.08)'; this.style.boxShadow='none'">
        
        <div style="font-size: 0.85rem; color: #666; margin-bottom: 1.2rem; border-bottom: 1px dashed #333; padding-bottom: 0.8rem;">
          <span style="color: #ff8a65;">root@archives</span>:~/network$ ping friends
        </div>
        
        <h3 style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #fff;">友情链接</h3>
        <p style="opacity: 0.7; margin-top: 1rem; font-size: 0.9rem; line-height: 1.6; flex-grow: 1; color: #aaa; font-family: sans-serif;">
          结识更多志同道合的伙伴
        </p>
        
        <div style="font-size: 0.8rem; color: #ff8a65; margin-top: 1rem; font-weight: bold;">
          [ 200 ] Connection
        </div>
      </div>
    </a>

  </div>

</div>

<script>
  const textArray = ["> Hello, World", "> Welcome to Plankton'Notebook", "> Talk is cheap. Show me the code.","> #include our future"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = textArray[textIndex];
    const typingElement = document.getElementById("typing-text");
    if (!typingElement) return;

    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 100; 

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2500; 
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      typeSpeed = 500; 
    }
    setTimeout(typeEffect, typeSpeed);
  }
  setTimeout(typeEffect, 800);
</script>