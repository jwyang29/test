(() => {
  "use strict";

  const DEBUG = false;
  const log = (...a) => { if (DEBUG || window.__COLLECT_DEBUG__) console.log("[collect]", ...a); };

  const recBtn = document.getElementById("recBtn");
  const canvas = document.getElementById("waveCanvas");
  if (!recBtn) return;

  // 1. 녹음 및 시각화 로직 (기존 유지)
  let isRecording = false;
  recBtn.addEventListener("click", () => {
    isRecording = !isRecording;
    if (isRecording) {
      recBtn.innerText = "Stop";
      recBtn.style.background = "#FF4D4D";
      startVisualizer();
    } else {
      recBtn.innerText = "Record";
      recBtn.style.background = "var(--accent)";
      stopVisualizer();
    }
  });

  function startVisualizer() {
    log("Visualization started...");
    // 시각화 로직 실행...
  }

  function stopVisualizer() {
    log("Visualization stopped.");
    // 결과 처리 로직...
  }

  // [중요] 기존에 있던 Carousel 자동 재생 및 Dots 클릭 이벤트 로직은 
  // UI 구조가 변경되었으므로 여기서 완전히 제거되었습니다.

})();

// [HOTFIX A] wiretap 로직 (기존 유지)
(function wiretap(){
  if (window.sock) {
    if (typeof window.sock.onAny === "function") {
      window.sock.onAny((event, ...args) => {
        // 소켓 로깅 로직...
      });
    }
  }
})();