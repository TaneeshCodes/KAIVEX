
    /* =========================================================================
       DETERMINISTIC KINEMATICS & PHYSICS ENGINE
       ========================================================================= */

    // Closed-form damped harmonic oscillator step response:
    // Returns 0 before t0, and smoothly oscillates toward 1 after t0
    function spring(t, t0, omega = 12, zeta = 0.8) {
      const dt = (t - t0) / 1000;
      if (dt <= 0) return 0;
      const wd = omega * Math.sqrt(Math.max(0, 1 - zeta * zeta));
      return 1 - Math.exp(-zeta * omega * dt) * (Math.cos(wd * dt) + (zeta * omega / wd) * Math.sin(wd * dt));
    }

    // Smooth smoothstep interpolation
    function smoothstep(edge0, edge1, x) {
      const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
      return t * t * (3 - 2 * t);
    }

    // DOM Elements Cache
    const camera = document.getElementById('camera');
    const cursor = document.getElementById('cursor');
    const clickRipple = document.getElementById('click-ripple');
    const floodOverlay = document.getElementById('flood-overlay');

    const sceneWordmark = document.getElementById('scene-wordmark');
    const topDock = document.getElementById('top-dock');
    const dockBtn = document.getElementById('dock-btn');
    const chars = [
      document.getElementById('char-k'),
      document.getElementById('char-a'),
      document.getElementById('char-i'),
      document.getElementById('char-v'),
      document.getElementById('char-e'),
      document.getElementById('char-x')
    ];
    const prism = document.getElementById('prism-mark');

    const sceneBento = document.getElementById('scene-bento');
    const sceneVision = document.getElementById('scene-vision');
    const hudBox = document.getElementById('hud-box');

    const sceneDashboard = document.getElementById('scene-dashboard');
    const dashFrame = document.getElementById('dash-frame');
    const dynamicIsland = document.getElementById('dynamic-island');
    const proofWrap = document.getElementById('proof-wrap');
    const valLatency = document.getElementById('val-latency');
    const valUptime = document.getElementById('val-uptime');

    const sceneFinale = document.getElementById('scene-finale');
    const finaleTitle = document.getElementById('finale-title');
    const finaleTagline = document.getElementById('finale-tagline');
    const finaleBtn = document.getElementById('finale-btn');
    const inkText1 = document.getElementById('ink-text-1');
    const inkText2 = document.getElementById('ink-text-2');

    /* =========================================================================
       WINDOW.SEEK(T): PURE CLOSED-FORM FRAME EVALUATION
       t is in milliseconds: 0 to 27000 (54 beats @ 120 BPM = 500ms/beat)
       ========================================================================= */
    window.seek = function(t) {
      t = Math.max(0, Math.min(27000, t));

      // Reset transforms
      let camX = 0, camY = 0, camScale = 1.0;
      let curX = 900, curY = 900, curScale = 1.0;
      let rippleX = 0, rippleY = 0, rippleScale = 0, rippleOpacity = 0;
      let floodOpacity = 0;

      /* -----------------------------------------------------------------------
         PHASE 1: BEATS 1–8 (0–4000 ms) - WORDMARK SQUEEZE & DOCK APERTURE
         ----------------------------------------------------------------------- */
      if (t < 4000) {
        sceneWordmark.style.opacity = 1;
        sceneBento.style.opacity = smoothstep(2000, 2800, t);
        sceneVision.style.opacity = 0;
        sceneDashboard.style.opacity = 0;
        sceneFinale.style.opacity = 0;

        // Wordmark Squeeze: Beat 1 -> 2 (0 -> 1000ms)
        const sq = smoothstep(400, 1100, t);
        const offsets = [-140, -84, -28, 28, 84, 140];
        chars.forEach((c, idx) => {
          const moveX = (1 - sq) * offsets[idx];
          const sc = 1 - sq * 0.95;
          c.style.transform = `translate3d(${moveX.toFixed(1)}px, 0, 0) scale(${sc.toFixed(3)})`;
          c.style.opacity = Math.max(0, 1 - sq * 1.2);
        });

        // Prism absorbs characters and morphs into dock
        prism.style.transform = `scale(${(1 + sq * 0.4).toFixed(3)})`;
        prism.style.opacity = t < 1200 ? 1 : Math.max(0, 1 - (t - 1200) / 300);

        // TopDock springs in: Beat 3 (1000ms)
        const dockSpring = spring(t, 1000, 14, 0.75);
        topDock.style.opacity = smoothstep(1000, 1300, t);
        topDock.style.transform = `translateX(-50%) scale(${dockSpring.toFixed(3)})`;

        // Cursor moves to "START A PROJECT" button: Beat 3.5 -> 4 (1200 -> 1800ms)
        const curMove = smoothstep(1200, 1750, t);
        curX = 900 - curMove * 110; // moves to dock button x ~790
        curY = 800 - curMove * 710; // moves to dock button y ~90

        // Button click at Beat 4 (1800ms)
        if (t >= 1800 && t < 2200) {
          curScale = 0.88;
          dockBtn.style.transform = 'scale(0.92)';
          rippleX = 790;
          rippleY = 92;
          const rP = (t - 1800) / 400;
          rippleScale = rP * 2.5;
          rippleOpacity = Math.max(0, 1 - rP);
        } else {
          dockBtn.style.transform = 'scale(1)';
        }

        // Camera zooms into bento grid: Beats 5-8 (2000 -> 4000ms)
        const zoomIn = smoothstep(2000, 3900, t);
        camScale = 1.0 + zoomIn * 0.85;
        camX = zoomIn * 180;
        camY = zoomIn * 220;
      }

      /* -----------------------------------------------------------------------
         PHASE 2: BEATS 9–20 (4000–10000 ms) - LIQUID GLASS & VISION INSPECTION
         ----------------------------------------------------------------------- */
      else if (t < 10000) {
        sceneWordmark.style.opacity = 0;
        sceneBento.style.opacity = Math.max(0, 1 - smoothstep(4000, 4800, t));
        sceneVision.style.opacity = smoothstep(4400, 5200, t);
        sceneDashboard.style.opacity = 0;
        sceneFinale.style.opacity = 0;

        camScale = 1.0 + Math.sin((t - 4000) / 2000) * 0.05;
        camX = 0;
        camY = 0;

        // Cursor hovers over inspection stage
        const curT = smoothstep(4800, 6500, t);
        curX = 550 + Math.sin(t / 400) * 80;
        curY = 600 + Math.cos(t / 400) * 40;

        // Bounding box pulses
        const hudP = spring(t, 5500, 10, 0.8);
        hudBox.style.transform = `scale(${hudP.toFixed(3)})`;
        hudBox.style.opacity = smoothstep(5200, 5600, t);
      }

      /* -----------------------------------------------------------------------
         PHASE 3: BEATS 21–32 (10000–16000 ms) - THE DROP & SAAS DASHBOARD
         ----------------------------------------------------------------------- */
      else if (t < 16000) {
        sceneWordmark.style.opacity = 0;
        sceneBento.style.opacity = 0;
        sceneVision.style.opacity = Math.max(0, 1 - smoothstep(10000, 10800, t));
        sceneDashboard.style.opacity = smoothstep(10500, 11400, t);
        sceneFinale.style.opacity = 0;

        // BEAT 24: THE DROP AT 11500 ms!
        if (t >= 11500) {
          const dropSpring = spring(t, 11500, 16, 0.65);
          dashFrame.style.transform = `scale(${(0.92 + dropSpring * 0.08).toFixed(3)})`;
          camScale = 1.0 + (1 - Math.min(1, (t - 11500) / 500)) * 0.08;

          // Metric surge roll up
          const surgeP = smoothstep(11500, 13000, t);
          valLatency.textContent = `${Math.round(48 - surgeP * 36)}ms`;
          valUptime.textContent = `${(98.2 + surgeP * 1.79).toFixed(2)}%`;
        } else {
          dashFrame.style.transform = 'scale(0.92)';
        }

        // Dynamic island alert springs down: Beat 28 (13500ms)
        const islandP = spring(t, 13500, 12, 0.7);
        dynamicIsland.style.opacity = smoothstep(13500, 14000, t);
        dynamicIsland.style.transform = `translateX(-50%) translateY(${(islandP * 20).toFixed(1)}px)`;

        // Cursor glides across dashboard telemetry
        const dashCur = (t - 10000) / 6000;
        curX = 400 + dashCur * 600;
        curY = 550 + Math.sin(dashCur * 8) * 50;
      }

      /* -----------------------------------------------------------------------
         PHASE 4: BEATS 33–42 (16000–21000 ms) - PROOF & BREAKDOWN
         ----------------------------------------------------------------------- */
      else if (t < 21000) {
        sceneDashboard.style.opacity = Math.max(0, 1 - smoothstep(19500, 20800, t));
        sceneFinale.style.opacity = smoothstep(19800, 20800, t);

        // Hand-drawn ink notes draw across: Beat 41 (20000ms)
        const inkP = smoothstep(20000, 20800, t);
        inkText1.style.opacity = inkP;
        inkText2.style.opacity = inkP;

        curX = 720;
        curY = 720;
      }

      /* -----------------------------------------------------------------------
         PHASE 5: BEATS 43–46 (21000–23000 ms) - OBSIDIAN FLOOD BLACKOUT
         ----------------------------------------------------------------------- */
      else if (t < 23000) {
        // Full blackout
        floodOpacity = smoothstep(21000, 21800, t);
        if (t > 22400) {
          floodOpacity = 1 - smoothstep(22400, 23000, t);
        }
        floodOverlay.style.opacity = floodOpacity;
        sceneFinale.style.opacity = 1;
        curX = 720;
        curY = 720;
      }

      /* -----------------------------------------------------------------------
         PHASE 6: BEATS 47–54 (23000–27000 ms) - FINALE, THE CLICK & BEAT RETURN
         ----------------------------------------------------------------------- */
      else {
        floodOverlay.style.opacity = 0;
        sceneWordmark.style.opacity = 0;
        sceneBento.style.opacity = 0;
        sceneVision.style.opacity = 0;
        sceneDashboard.style.opacity = 0;
        sceneFinale.style.opacity = 1;

        // Button Click at Beat 50 (24500ms)
        if (t >= 24500 && t < 25200) {
          curScale = 0.85;
          finaleBtn.style.transform = 'scale(0.94)';
          rippleX = 720;
          rippleY = 820;
          const rP = (t - 24500) / 500;
          rippleScale = rP * 3.0;
          rippleOpacity = Math.max(0, 1 - rP);
        } else {
          finaleBtn.style.transform = 'scale(1)';
        }

        // BEAT RETURN AT BEAT 54 (26000ms): K-A-I-V-E-X SPRINGS OUTWARD
        const returnSpring = spring(t, 26000, 14, 0.7);
        finaleTitle.style.transform = `scale(${(0.8 + returnSpring * 0.2).toFixed(3)})`;
        finaleTitle.style.letterSpacing = `${(-12 + returnSpring * 9).toFixed(1)}px`;
        finaleTagline.style.opacity = smoothstep(26200, 26800, t);

        curX = 720 + (t > 25000 ? (t - 25000) * 0.1 : 0);
        curY = 820;
      }

      // Apply Camera Transform
      camera.style.transform = `translate3d(${(-camX).toFixed(1)}px, ${(-camY).toFixed(1)}px, 0) scale(${camScale.toFixed(3)})`;

      // Apply Cursor Position & Ripple
      cursor.style.transform = `translate3d(${curX.toFixed(1)}px, ${curY.toFixed(1)}px, 0) scale(${curScale.toFixed(2)})`;
      clickRipple.style.left = `${rippleX}px`;
      clickRipple.style.top = `${rippleY}px`;
      clickRipple.style.transform = `translate(-50%, -50%) scale(${rippleScale.toFixed(2)})`;
      clickRipple.style.opacity = rippleOpacity;
    };

    /* Optional Autoplay Preview for Interactive Inspection */
    let startTimestamp = null;
    function loop(now) {
      if (!startTimestamp) startTimestamp = now;
      const elapsed = (now - startTimestamp) % 27000;
      window.seek(elapsed);
      requestAnimationFrame(loop);
    }

    // Auto-start preview in browser if not driven by test renderer
    if (!window.__TEST_MODE__) {
      requestAnimationFrame(loop);
    }
  