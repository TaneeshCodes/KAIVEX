import React, { useMemo, useRef, useEffect, type CSSProperties } from "react";
import {
  ThreeUIIntro,
  ParticleWordmark,
  AudioWordmark,
  GalleryHeading,
  type NeuformIsolatedEffectProps,
} from "./NeuformIsolatedEffects";
import creatorStudioIntroSource from "./sources/creator-studio-intro.html?raw";

export type TextAnimationVariant =
  | "threeui-intro"
  | "intro"
  | "creator-studio-intro"
  | "particle-wordmark"
  | "audio-wordmark"
  | "gallery-heading"
  | string;

export type TextAnimationCollectionProps = NeuformIsolatedEffectProps & {
  variant?: TextAnimationVariant;
  text?: string;
  fontSize?: number;
  logoSvg?: string;
  showMark?: boolean;
  holdTime?: number;
  endTime?: number;
  startTrigger?: boolean;
};

const THREEUI_MARK_SVG = `<svg viewBox="0 0 512 512" aria-hidden="true">
  <defs>
    <mask id="threeui-intro-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
      <rect width="512" height="512" fill="#000"/>
      <circle cx="256" cy="256" r="208" fill="#fff"/>
      <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="28">
        <path d="M36 178C112 252 184 264 260 196C336 128 404 114 482 180"/>
        <path d="M36 292C112 366 184 378 260 310C336 242 404 228 482 294"/>
      </g>
    </mask>
  </defs>
  <rect width="512" height="512" fill="#f5f5f7" mask="url(#threeui-intro-cut)"/>
</svg>`;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

/**
 * TextAnimationCollection
 * Registered ThreeUI component providing intro chromatic wordmark motion,
 * particle wordmarks, audio waveforms, and typography gallery animation.
 */
export function TextAnimationCollection({
  variant = "threeui-intro",
  mode = "dark",
  hue = 0,
  saturation = 1,
  brightness = 1,
  text,
  fontSize,
  logoSvg,
  showMark,
  holdTime = 1.1,
  endTime = 1.7,
  startTrigger = true,
  className,
  style,
}: TextAnimationCollectionProps) {
  // If variant is not threeui-intro, route to corresponding ThreeUI effect
  if (variant === "particle-wordmark") {
    return (
      <ParticleWordmark
        mode={mode}
        hue={hue}
        saturation={saturation}
        brightness={brightness}
        className={className}
        style={style}
      />
    );
  }
  if (variant === "audio-wordmark") {
    return (
      <AudioWordmark
        mode={mode}
        hue={hue}
        saturation={saturation}
        brightness={brightness}
        className={className}
        style={style}
      />
    );
  }
  if (variant === "gallery-heading") {
    return (
      <GalleryHeading
        mode={mode}
        hue={hue}
        saturation={saturation}
        brightness={brightness}
        className={className}
        style={style}
      />
    );
  }

  // Canonical default threeui-intro with no text override
  if (!text) {
    return (
      <ThreeUIIntro
        mode={mode}
        hue={hue}
        saturation={saturation}
        brightness={brightness}
        className={className}
        style={style}
      />
    );
  }

  // Custom text threeui-intro using the exact ThreeUI runtime and chromatic motion
  return (
    <CustomIntroEffect
      text={text}
      fontSize={fontSize}
      logoSvg={logoSvg}
      showMark={showMark}
      holdTime={holdTime}
      endTime={endTime}
      startTrigger={startTrigger}
      mode={mode}
      hue={hue}
      saturation={saturation}
      brightness={brightness}
      className={className}
      style={style}
    />
  );
}

function CustomIntroEffect({
  text,
  fontSize,
  logoSvg,
  showMark = false,
  holdTime = 1.1,
  endTime = 1.7,
  startTrigger = true,
  mode = "dark",
  hue = 0,
  saturation = 1,
  brightness = 1,
  className,
  style,
}: {
  text: string;
  fontSize?: number;
  logoSvg?: string;
  showMark?: boolean;
  holdTime?: number;
  endTime?: number;
  startTrigger?: boolean;
  mode?: "dark" | "light";
  hue?: number;
  saturation?: number;
  brightness?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const safeMode = mode === "light" ? "light" : "dark";
  const background = safeMode === "light" ? "#f4f7fb" : "#000000";

  const safeHue = clamp(hue, -180, 180);
  const safeSaturation = clamp(saturation, 0, 2);
  const safeBrightness = clamp(brightness, 0.35, 1.65);
  const filter =
    safeHue === 0 && safeSaturation === 1 && safeBrightness === 1
      ? undefined
      : `hue-rotate(${safeHue}deg) saturate(${safeSaturation}) brightness(${safeBrightness})`;

  const hasTriggeredRef = useRef(false);

  const triggerStart = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    let attempts = 0;
    const tryTrigger = () => {
      attempts++;
      let handled = false;
      try {
        const cw = frameRef.current?.contentWindow as any;
        if (cw && typeof cw.__startIntro === "function") {
          cw.__startIntro();
          handled = true;
        } else if (cw?.postMessage) {
          cw.postMessage({ type: "threeui-start" }, "*");
        }
      } catch (_) {}
      if (!handled && attempts < 15) {
        requestAnimationFrame(tryTrigger);
      }
    };
    tryTrigger();
  };

  useEffect(() => {
    if (startTrigger) {
      if (frameRef.current) {
        frameRef.current.setAttribute("data-start-trigger", "true");
      }
      triggerStart();
    }
  }, [startTrigger]);

  const docSrc = useMemo(() => {
    let src = creatorStudioIntroSource;

    // Normalize text into two lines if comma present and no newline
    const effectiveText = text.includes("\n") || !text.includes(", ")
      ? text
      : text.replace(", ", ",\n");

    // Calculate responsive base font size
    const isMultiLine = effectiveText.includes("\n");
    const longestLine = isMultiLine
      ? effectiveText.split("\n").reduce((a, b) => (a.length > b.length ? a : b), "")
      : effectiveText;
    const computedFontSize =
      fontSize ??
      (isMultiLine
        ? Math.min(84, Math.max(38, Math.floor(1040 / (longestLine.length * 0.65))))
        : Math.min(76, Math.max(32, Math.floor(1180 / (longestLine.length * 0.62)))));

    // Transform makeWordmark in creatorStudioIntroSource
    const authoredLoop = `    var chars=[], str='Creator Studio';
    for(var i=0;i<str.length;i++){
      var sp=document.createElement('span');
      sp.textContent=str[i]===' '?'\\u00a0':str[i];
      tx.appendChild(sp); chars.push(sp);
    }`;

    const replacementLoop = `    var chars=[], str=${JSON.stringify(effectiveText)};
    for(var i=0;i<str.length;i++){
      if(str[i]==='\\n'){
        tx.appendChild(document.createElement('br'));
        continue;
      }
      var sp=document.createElement('span');
      sp.textContent=str[i]===' '?'\\u00a0':str[i];
      tx.appendChild(sp); chars.push(sp);
    }`;

    if (src.includes(authoredLoop)) {
      src = src.replace(authoredLoop, replacementLoop);
    }

    if (!showMark && !logoSvg) {
      src = src.replace(
        "var mk=el('span','mark',tx,APPLE);",
        "var mk=el('span','mark',tx,''); mk.style.display='none';"
      );
    } else {
      const markSvg = logoSvg || THREEUI_MARK_SVG;
      src = src.replace(
        "var mk=el('span','mark',tx,APPLE);",
        `var mk=el('span','mark',tx,${JSON.stringify(markSvg)});`
      );
    }

    src = src.replace(
      "var fs=fitPx('Creator Studio',678);",
      `var fs=${computedFontSize};`
    );

    // Dynamic auto-scale adaptation so font stays bold on desktop and fits mobile screens
    src = src.replace(
      "var k=Math.min((stage.clientWidth||W)/W,(stage.clientHeight||H)/H);",
      "var k=Math.min(1.0, Math.max(0.24, (stage.clientWidth||W)/W));"
    );

    // Ensure stage and page backgrounds are transparent for difference overlay
    src = src.replace(/background:\s*#000/gi, "background:transparent");

    const focusStyle = `<style data-threeui-focus>
:root, html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: transparent !important; background-color: transparent !important; color-scheme: normal !important; }
#stage, #comp, .scene, .line { background: transparent !important; background-color: transparent !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; background: transparent !important; background-color: transparent !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-hidden] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; background: transparent !important; }
#comp .scene:not(:first-child) { display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; }
#comp .scene:first-child { display: block !important; visibility: visible !important; }
#comp .scene:first-child .tx { font-size: ${computedFontSize}px !important; line-height: 1.08 !important; white-space: normal !important; text-transform: uppercase !important; font-weight: 850 !important; letter-spacing: -0.02em !important; }
</style>`;

    const focusScript = `<script data-threeui-focus>
(function () {
  document.documentElement.dataset.sfMode = ${JSON.stringify(safeMode)};
  var isolated = false;
  var isStarted = false;
  var isDone = false;
  try {
    if (window.frameElement && window.frameElement.getAttribute('data-start-trigger') === 'true') {
      isStarted = true;
    }
  } catch (_) {}
  var introStartedAt = performance.now();
  var introReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.__startIntro = function() {
    if (!isStarted && !isDone) {
      introStartedAt = performance.now();
      isStarted = true;
    }
  };

  window.addEventListener('message', function (e) {
    if (e.data === 'threeui-start' || e.data?.type === 'threeui-start') {
      if (typeof window.__startIntro === 'function') {
        window.__startIntro();
      } else if (!isDone) {
        introStartedAt = performance.now();
        isStarted = true;
      }
    }
  });

  function isolate() {
    if (isolated) return;
    isolated = true;
    var stageEl = document.querySelector('#stage');
    if (stageEl) {
      stageEl.setAttribute('data-threeui-role', 'background');
      document.body.appendChild(stageEl);
    }
    var firstScene = document.querySelector('#comp .scene:first-child');
    if (firstScene) firstScene.classList.add('on');
    
    Array.from(document.body.children).forEach(function (element) {
      if (element === stageEl) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    window.dispatchEvent(new Event('resize'));

    function renderIntroWordmark(now) {
      if (typeof window.__seek !== 'function') {
        requestAnimationFrame(renderIntroWordmark);
        return;
      }
      if (!isStarted) {
        window.__seek(0);
        requestAnimationFrame(renderIntroWordmark);
        return;
      }
      if (introReducedMotion) {
        window.__seek(${endTime});
        isDone = true;
        return;
      }
      var time = (now - introStartedAt) / 1000;
      if (time >= ${endTime}) {
        window.__seek(${endTime});
        isDone = true;
        return; // Run once only: permanently hold at final assembled state
      }
      window.__seek(time);
      requestAnimationFrame(renderIntroWordmark);
    }
    requestAnimationFrame(renderIntroWordmark);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', isolate, { once: true });
  } else {
    isolate();
  }
  window.addEventListener('load', isolate, { once: true });
})();
</script>`;

    return src
      .replace(/<\/head>/i, `${focusStyle}</head>`)
      .replace(/<\/body>/i, `${focusScript}</body>`);
  }, [text, fontSize, logoSvg, showMark, holdTime, endTime, safeMode, background]);

  return (
    <iframe
      ref={frameRef}
      className={className}
      data-mode={safeMode}
      data-start-trigger={startTrigger ? "true" : "false"}
      title="ThreeUI chromatic wordmark intro"
      srcDoc={docSrc}
      sandbox="allow-scripts allow-same-origin"
      loading="eager"
      onLoad={() => {
        if (startTrigger) {
          triggerStart();
        }
      }}
      // @ts-ignore
      allowTransparency="true"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        border: 0,
        background: "transparent",
        backgroundColor: "transparent",
        filter,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

export default TextAnimationCollection;
