/* ============================================================
   BIRTHDAY CINEMATIC SITE — script.js
   GSAP + ScrollTrigger + Lenis. All names/ages/messages driven
   by `birthdayConfig`. Respects prefers-reduced-motion.
   ============================================================ */

/* ---------- EDITABLE CONFIG ---------- */
const birthdayConfig = {
  name: "KIRUBAKARAN",
  age: 28,
  senderName: "Ermars castar",
  heroMessage: "Today is all about celebrating you.",
  birthdayDate: "2026-07-20",
  backgroundVideo: "assets/birthday-background.mp4",
  // Code Poetry lines
  codeLines: [
    { text: "function createMasterpiece(person) {", classes: "syntax-func" },
    { text: "  if (person.name === 'Him') {", classes: "syntax-keyword" },
    { text: "    let logic = Infinity;", classes: "syntax-var" },
    { text: "    let creativity = 'Boundless';", classes: "syntax-string" },
    { text: "    // The core algorithm of greatness", classes: "syntax-comment" },
    { text: "    return initializeFuture(logic, creativity);", classes: "syntax-keyword" },
    { text: "  }", classes: "" },
    { text: "}", classes: "syntax-func" }
  ],
  // Architecture of You traits
  archTraits: [
    { title: "Unyielding Logic", desc: "Always finding the optimal path." },
    { title: "Creative Vision", desc: "Seeing what others miss." },
    { title: "Relentless Curiosity", desc: "Never stopping the search for 'why'." },
    { title: "Quiet Strength", desc: "A foundation built to last." },
    { title: "Sharp Wit", desc: "Humor as quick as code execution." }
  ],
  // Future Vision Cards
  futureVisions: [
    { icon: "🌌", title: "The Worlds You'll Create", desc: "Building universes from mere lines of code." },
    { icon: "🧩", title: "The Problems You'll Solve", desc: "Unraveling the impossible with elegant logic." },
    { icon: "🚀", title: "The Heights You'll Reach", desc: "Leveling up beyond all expectations." },
  ],
  // Personal letter (split into lines for line-by-line reveal)
  letterLines: [
    "Dear KIRUBAKARAN,",
    "Happy birthday to one of the most amazing people in my life.",
    "Thank you for all the laughter, support, memories,",
    "and unforgettable moments.",
    "I hope this new chapter brings you happiness, success, peace,",
    "and everything you have been wishing for.",
  ],
  // Birthday wishes cards
  wishes: [
    { icon: "✨", title: "Endless Happiness", desc: "May joy follow you wherever you go." },
    { icon: "🌟", title: "Great Success", desc: "May every dream you chase become real." },
    { icon: "📸", title: "Beautiful Memories", desc: "May this year be worth remembering." },
    { icon: "🌿", title: "Good Health", desc: "May strength and wellness be with you." },
  ],
  // DJ Track
  djTrack: {
    src: "assets/The_Master_Build.mp3",
    title: "The Master Build",
    artist: "Made for Kirubakaran 🎂",
  },
  // Song lyrics
  lyrics: [
    {
      label: "Verse 1",
      lines: [
        "Another frame-rate ticks in the master build,",
        "Kirubakaran, the blueprint is finally filled.",
        "No more debugging the static of the past,",
        "The world you imagined is rendering at last.",
        "From the silicon heart to the pixelated sun,",
        "The quest for the finish has already begun.",
      ],
    },
    {
      label: "Chorus",
      lines: [
        "Syncing up the rhythm, the loading screen fades,",
        "Walking through the gateway the dreamer has made.",
        "The achievements are popping, the score is soaring high,",
        "Unlocking the limits under a wider sky!",
        "Happy birthday, Kirubakaran!",
        "Happy birthday, Kirubakaran!",
        "A new level of life, let the victory begin!",
      ],
    },
    {
      label: "Verse 2",
      lines: [
        "Check the procedural logic, refine every sprite,",
        "Kirubakaran, you're coding the light in the night.",
        "Encounter the boss fight, the challenge is real,",
        "But you have the vision, the heart, and the steel.",
        "One more year of building, the endgame is near,",
        "Chasing the dreams that have brought you right here.",
      ],
    },
    {
      label: "Bridge",
      lines: [
        "It's more than just syntax, it's more than the lines,",
        "It's the soul in the logic where the genius defines.",
        "A world from a thought, a life from a screen,",
        "The brightest programmer the world's ever seen.",
        "Kirubakaran, keep the fire burning bright!",
        "We're ready to witness the launch in the light.",
      ],
    },
    {
      label: "Final Chorus",
      lines: [
        "Syncing up the rhythm, the loading screen fades,",
        "Walking through the gateway the dreamer has made.",
        "The achievements are popping, the score is soaring high,",
        "Unlocking the limits under a wider sky!",
        "Happy birthday, Kirubakaran!",
        "Happy birthday, Kirubakaran!",
        "A new level of life, let the victory begin!",
        "(Let the victory begin!)",
      ],
    },
    {
      label: "Outro",
      lines: [
        "Game on, Kirubakaran, the journey is new,",
        "Success is the only code that's true.",
        "Happy birthday to the master of the craft,",
        "The greatest adventure is finally drafted.",
        "Save the world, Kirubakaran!",
        "Save the world, Kirubakaran!",
        "(Hahaha!)",
        "Save the world!",
      ],
    },
  ],
};

/* ---------- DETECT REDUCED MOTION ---------- */
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- APPLY CONFIG TO DOM ---------- */
function applyConfig() {
  document.querySelectorAll("[data-hero-name]").forEach((el) => (el.textContent = birthdayConfig.name));
  document.querySelectorAll("[data-hero-message]").forEach((el) => (el.textContent = birthdayConfig.heroMessage));
  document.querySelectorAll("[data-signature]").forEach((el) => (el.textContent = birthdayConfig.senderName));
  document.querySelectorAll("[data-finale-name]").forEach((el) => (el.textContent = birthdayConfig.name));
  document.querySelectorAll(".countup-label").forEach((el) => (el.textContent = `${birthdayConfig.age} Years of Being Amazing`));

  // Set video sources from config
  document.querySelectorAll("#bg-video source, #reveal-video source").forEach((s) => {
    s.src = birthdayConfig.backgroundVideo;
  });
}

/* ---------- PARTICLES (hero) ---------- */
function buildParticles() {
  const wrap = document.getElementById("particles");
  if (!wrap) return;
  const count = prefersReduced ? 8 : 28;
  const kinds = ["", "star", "pink"];
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "particle " + kinds[Math.floor(Math.random() * kinds.length)];
    const size = 3 + Math.random() * 6;
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";
    p.style.opacity = 0.3 + Math.random() * 0.5;
    wrap.appendChild(p);
    if (!prefersReduced) {
      gsap.to(p, {
        y: -(40 + Math.random() * 120),
        x: (Math.random() - 0.5) * 60,
        duration: 6 + Math.random() * 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 4,
      });
    }
  }
}

/* ---------- CODE POETRY ---------- */
function buildCodePoetry() {
  const body = document.getElementById("code-body");
  if (!body) return;
  birthdayConfig.codeLines.forEach((line, i) => {
    const span = document.createElement("span");
    span.className = "code-line";
    span.innerHTML = `<span class="line-num">${i + 1}</span><span class="${line.classes}">${line.text}</span>`;
    body.appendChild(span);
  });
}

/* ---------- ARCHITECTURE (CANVAS MIND MAP) ---------- */
function buildArchitecture() {
  const canvas = document.getElementById("arch-canvas");
  const tooltip = document.getElementById("arch-tooltip");
  if (!canvas || !tooltip) return;

  const ctx = canvas.getContext("2d");
  let W = 0, H = 0;

  // Resize canvas to match its rendered size
  function resize() {
    const rect = canvas.getBoundingClientRect();
    W = canvas.width  = rect.width  || canvas.offsetWidth  || window.innerWidth;
    H = canvas.height = rect.height || canvas.offsetHeight || 720;
  }

  // ---- Build nodes ----
  // Central node + ring of trait nodes + cloud of background stars
  let centralNode, traitNodes = [], starNodes = [];

  function buildNodes() {
    traitNodes = [];
    starNodes  = [];

    // Centre
    centralNode = { x: W / 2, y: H / 2, r: 10, pulse: 0, label: "Him", desc: "The centre of it all." };

    const traits = birthdayConfig.archTraits;
    const ringR  = Math.min(W, H) * 0.28;   // radius of first ring

    traits.forEach((t, i) => {
      const angle = (i / traits.length) * Math.PI * 2 - Math.PI / 2;
      const x = W / 2 + Math.cos(angle) * ringR;
      const y = H / 2 + Math.sin(angle) * ringR;
      traitNodes.push({
        x, y,
        baseX: x, baseY: y,
        r: 7,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        label: t.title,
        desc:  t.desc,
        pulse: Math.random() * Math.PI * 2,
        glowAmt: 0,
      });
    });

    // Background star particles
    const starCount = prefersReduced ? 18 : 55;
    for (let i = 0; i < starCount; i++) {
      starNodes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 1 + Math.random() * 1.8,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: 0.15 + Math.random() * 0.35,
      });
    }
  }

  window.addEventListener("resize", () => { resize(); buildNodes(); });
  resize();
  buildNodes();

  // ---- Mouse tracking ----
  let mouse = { x: -9999, y: -9999 };

  canvas.addEventListener("mousemove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = (e.clientX - r.left) * (W / r.width);
    mouse.y = (e.clientY - r.top)  * (H / r.height);
  });
  canvas.addEventListener("mouseleave", () => {
    mouse.x = -9999; mouse.y = -9999;
    tooltip.classList.remove("active");
  });
  canvas.addEventListener("touchmove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = (e.touches[0].clientX - r.left) * (W / r.width);
    mouse.y = (e.touches[0].clientY - r.top)  * (H / r.height);
  }, { passive: true });

  // ---- Draw helpers ----
  function drawLine(x1, y1, x2, y2, alpha, width = 1) {
    ctx.beginPath();
    ctx.strokeStyle = `rgba(232, 194, 122, ${alpha})`;
    ctx.lineWidth = width;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  function drawGlowCircle(x, y, r, alpha, blurAmt, color = "232,194,122") {
    ctx.save();
    ctx.shadowBlur   = blurAmt;
    ctx.shadowColor  = `rgba(${color}, 1)`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${color}, ${alpha})`;
    ctx.fill();
    ctx.restore();
  }

  function drawRing(x, y, r, alpha, color = "232,194,122") {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${color}, ${alpha})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function drawLabel(x, y, radius, text) {
    ctx.save();
    ctx.font = `500 12px 'Poppins', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "rgba(247,241,230,0.85)";
    ctx.shadowBlur  = 6;
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.fillText(text, x, y + radius + 8);
    ctx.restore();
  }

  // ---- Main draw loop ----
  let time = 0;
  let isRunning = false;

  function draw() {
    if (!isRunning) return;
    time += 0.015;
    ctx.clearRect(0, 0, W, H);

    // -- Background stars --
    starNodes.forEach(s => {
      s.x += s.vx; s.y += s.vy;
      if (s.x < 0) s.x = W; if (s.x > W) s.x = 0;
      if (s.y < 0) s.y = H; if (s.y > H) s.y = 0;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(247,241,230,${s.alpha})`;
      ctx.fill();
    });

    // -- Spider-web lines: central → each trait --
    traitNodes.forEach(t => {
      const dist = Math.hypot(mouse.x - t.x, mouse.y - t.y);
      const nearAlpha = dist < 60 ? 0.65 : 0.18;
      drawLine(centralNode.x, centralNode.y, t.x, t.y, nearAlpha, dist < 60 ? 1.5 : 1);
    });

    // -- Proximity lines between trait nodes --
    for (let i = 0; i < traitNodes.length; i++) {
      for (let j = i + 1; j < traitNodes.length; j++) {
        const a = traitNodes[i], b = traitNodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 240) {
          drawLine(a.x, a.y, b.x, b.y, (1 - d / 240) * 0.12);
        }
      }
    }

    // -- Mouse-to-node beam lines --
    traitNodes.forEach(t => {
      const d = Math.hypot(mouse.x - t.x, mouse.y - t.y);
      if (d < 140) {
        drawLine(t.x, t.y, mouse.x, mouse.y, (1 - d / 140) * 0.5, 1);
      }
    });

    // -- Trait nodes --
    let hoveredTrait = null;
    traitNodes.forEach(t => {
      // Gentle drift within bounds
      t.x += t.vx; t.y += t.vy;
      const drift = 30;
      if (Math.abs(t.x - t.baseX) > drift) t.vx *= -1;
      if (Math.abs(t.y - t.baseY) > drift) t.vy *= -1;

      t.pulse += 0.04;
      const pulseR = t.r + Math.sin(t.pulse) * 2;
      const dist   = Math.hypot(mouse.x - t.x, mouse.y - t.y);
      const isHover = dist < 40;

      if (isHover) {
        t.glowAmt = Math.min(t.glowAmt + 2, 28);
        hoveredTrait = t;
      } else {
        t.glowAmt = Math.max(t.glowAmt - 1, 0);
      }

      // Outer pulse ring
      drawRing(t.x, t.y, pulseR + 10 + t.glowAmt * 0.5,
        0.12 + (isHover ? 0.15 : 0),
        "232,194,122");

      // Core glow circle
      drawGlowCircle(t.x, t.y, pulseR,
        isHover ? 1 : 0.85,
        isHover ? t.glowAmt : 8);

      drawLabel(t.x, t.y, pulseR, t.label);
    });

    // -- Central node --
    const cPulse = Math.sin(time * 1.5) * 3;
    drawRing(centralNode.x, centralNode.y, centralNode.r + 18 + cPulse, 0.2);
    drawRing(centralNode.x, centralNode.y, centralNode.r + 30 + cPulse, 0.08);
    drawGlowCircle(centralNode.x, centralNode.y, centralNode.r + cPulse * 0.4,
      1, 28, "232,194,122");
    drawGlowCircle(centralNode.x, centralNode.y, (centralNode.r + cPulse * 0.4) * 0.55,
      0.9, 12, "242,220,168");

    // -- Tooltip --
    const showNode = hoveredTrait || (Math.hypot(mouse.x - centralNode.x, mouse.y - centralNode.y) < 32 ? centralNode : null);
    if (showNode) {
      const rect   = canvas.getBoundingClientRect();
      const scaleX = rect.width  / W;
      const scaleY = rect.height / H;
      tooltip.style.left = (showNode.x * scaleX) + "px";
      tooltip.style.top  = (showNode.y * scaleY) + "px";
      tooltip.querySelector(".tooltip-title").textContent = showNode.label;
      tooltip.querySelector(".tooltip-desc").textContent  = showNode.desc;
      tooltip.classList.add("active");
    } else {
      tooltip.classList.remove("active");
    }

    requestAnimationFrame(draw);
  }

  // Only run when section is visible — saves CPU when scrolled away
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        if (!isRunning) { isRunning = true; draw(); }
      } else {
        isRunning = false;
      }
    });
  }, { threshold: 0.05 });
  io.observe(document.getElementById("architecture"));
}

/* ---------- JOURNEY CARDS ---------- */
function buildJourney() {
  const track = document.getElementById("vision-track");
  if (!track) return;
  birthdayConfig.futureVisions.forEach((v) => {
    const card = document.createElement("div");
    card.className = "vision-card";
    card.innerHTML = `
      <div class="vision-icon">${v.icon}</div>
      <h3 class="vision-title">${v.title}</h3>
      <p class="vision-desc">${v.desc}</p>
    `;
    track.appendChild(card);
  });
}

/* ---------- LETTER LINES ---------- */
function buildLetter() {
  const body = document.getElementById("letter-body");
  if (!body) return;
  birthdayConfig.letterLines.forEach((line) => {
    const span = document.createElement("span");
    span.className = "line";
    span.textContent = line;
    body.appendChild(span);
  });
}

/* ---------- WISHES CARDS ---------- */
function buildWishes() {
  const grid = document.getElementById("wishes-grid");
  if (!grid) return;
  birthdayConfig.wishes.forEach((w) => {
    const card = document.createElement("div");
    card.className = "wish-card";
    card.innerHTML = `
      <div class="wish-icon">${w.icon}</div>
      <h3 class="wish-title">${w.title}</h3>
      <p class="wish-desc">${w.desc}</p>
    `;
    grid.appendChild(card);
  });
}

/* ---------- FLOATING LANGUAGE LOGOS ---------- */
function buildLangLogos() {
  const wrap = document.getElementById("lang-logos");
  if (!wrap) return;

  // Devicons CDN — original coloured SVG variants
  const langs = [
    { name: "Python",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C",          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "C++",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "C#",         src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Rust",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" },
    { name: "Unity",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
  ];

  const count = prefersReduced ? 3 : langs.length;

  for (let i = 0; i < count; i++) {
    const lang = langs[i % langs.length];
    const size = 48 + Math.random() * 32;   // 48–80 px

    const el = document.createElement("div");
    el.className = "lang-logo";
    el.style.width  = size + "px";
    el.style.height = size + "px";
    el.style.left   = (5 + Math.random() * 90) + "%";
    el.title        = lang.name;

    const img = document.createElement("img");
    img.src = lang.src;
    img.alt = lang.name;
    img.width  = size;
    img.height = size;
    img.loading = "lazy";
    img.decoding = "async";
    el.appendChild(img);
    wrap.appendChild(el);

    if (!prefersReduced) {
      // stagger start position vertically so they don't all appear at once
      const startY = window.innerHeight + 60 + Math.random() * 200;
      gsap.set(el, { y: startY, opacity: 0 });
      gsap.to(el, {
        y: -(window.innerHeight + 200),
        opacity: 0.85,
        duration: 12 + Math.random() * 10,
        delay: Math.random() * 8,
        repeat: -1,
        ease: "none",
        onStart() { gsap.to(el, { opacity: 0.85, duration: 0.6 }); },
        onRepeat() {
          el.style.left = (5 + Math.random() * 90) + "%";
          gsap.set(el, { y: startY, opacity: 0 });
          gsap.to(el, { opacity: 0.85, duration: 0.6 });
        },
      });
      // gentle horizontal sway
      gsap.to(el, {
        x: (Math.random() - 0.5) * 60,
        duration: 4 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 3,
      });
    }
  }
}

/* ---------- LENIS SMOOTH SCROLL ---------- */
let lenis = null;
function initLenis() {
  if (prefersReduced || typeof Lenis === "undefined") return;
  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
  });
  // Sync Lenis with ScrollTrigger
  lenis.on("scroll", () => {
    if (window.ScrollTrigger) ScrollTrigger.update();
  });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------- GSAP / SCROLLTRIGGER ANIMATIONS ---------- */
function initAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  /* --- HERO: text intro + scroll-linked scale/blur/fade --- */
  const hero = document.querySelector(".hero");
  const heroVideo = document.getElementById("bg-video");
  const heroContent = document.querySelector(".hero-content");

  // Intro timeline
  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
  intro
    .from("[data-hero-eyebrow]", { y: 20, opacity: 0, duration: 1 })
    .from(".hero-title .word", { y: 80, opacity: 0, duration: 1.1, stagger: 0.12 }, "-=0.6")
    .from("[data-hero-name]", { y: 40, opacity: 0, duration: 1 }, "-=0.6")
    .from("[data-hero-message]", { y: 30, opacity: 0, duration: 1 }, "-=0.6")
    .from(".scroll-indicator", { opacity: 0, duration: 0.8 }, "-=0.3");

  // Scroll-linked hero: video scales/zooms + blurs + darkens, text moves up & fades
  if (!prefersReduced) {
    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (s) => {
        const p = s.progress;
        gsap.set(heroVideo, {
          scale: 1 + p * 0.35,
          filter: `blur(${p * 6}px) brightness(${1 - p * 0.5})`,
        });
        gsap.set(heroContent, {
          y: -p * 180,
          opacity: 1 - p * 1.4,
          scale: 1 - p * 0.08,
        });
      },
    });
  }

  /* --- REVEAL: pinned section, messages animate in/out one by one --- */
  const revealMsgs = gsap.utils.toArray("[data-reveal-msg]");
  const revealVideo = document.getElementById("reveal-video");

  if (!prefersReduced && revealMsgs.length) {
    // Pin the reveal sticky container
    ScrollTrigger.create({
      trigger: "#reveal",
      start: "top top",
      end: "+=" + revealMsgs.length * 80 + "%",
      pin: ".reveal-sticky",
      pinSpacing: true,
      scrub: 1,
      onUpdate: (s) => {
        const p = s.progress;
        // Subtle zoom on reveal video
        gsap.set(revealVideo, { scale: 1 + p * 0.2, filter: `brightness(${0.4 - p * 0.15}) saturate(1.1)` });
      },
    });

    // Each message occupies a slice of the pinned timeline
    revealMsgs.forEach((msg, i) => {
      const slice = 1 / revealMsgs.length;
      const start = i * slice;
      const end = start + slice;
      gsap.fromTo(
        msg,
        { opacity: 0, y: 60, filter: "blur(12px)", scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#reveal",
            start: "top top",
            end: "+=" + revealMsgs.length * 80 + "%",
            scrub: true,
            onUpdate: (s) => {
              const local = (s.progress - start) / slice;
              if (local < 0 || local > 1) {
                gsap.set(msg, { opacity: 0 });
                return;
              }
              // fade in first half, fade out second half
              let op;
              if (local < 0.3) op = local / 0.3;
              else if (local > 0.75) op = (1 - local) / 0.25;
              else op = 1;
              gsap.set(msg, {
                opacity: gsap.utils.clamp(0, 1, op),
                y: (1 - local) * 40,
                filter: `blur(${(1 - op) * 10}px)`,
                scale: 0.95 + op * 0.05,
              });
            },
          },
        }
      );
    });
  } else if (revealMsgs.length) {
    // Reduced motion: just show them stacked
    revealMsgs.forEach((m) => gsap.set(m, { position: "relative", opacity: 1, filter: "none", y: 0, marginBottom: "2rem" }));
  }

  /* --- CODE POETRY: line reveal + 3D tilt --- */
  const codeCard = document.getElementById("code-card");
  if (codeCard) {
    gsap.from(codeCard, {
      opacity: 0,
      y: 60,
      scale: 0.95,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: codeCard, start: "top 85%" },
    });
    
    const codeLines = gsap.utils.toArray(".code-line");
    codeLines.forEach((line, i) => {
      gsap.to(line, {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out",
        delay: i * 0.1,
        scrollTrigger: { trigger: codeCard, start: "top 70%" }
      });
      gsap.set(line, { x: -10 });
    });
    
    if (!prefersReduced && window.matchMedia("(hover: hover)").matches) {
      codeCard.addEventListener("mousemove", (e) => {
        const r = codeCard.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(codeCard, {
          rotationY: px * 6,
          rotationX: -py * 6,
          transformPerspective: 1000,
          duration: 0.4,
          ease: "power2.out",
        });
      });
      codeCard.addEventListener("mouseleave", () => {
        gsap.to(codeCard, { rotationY: 0, rotationX: 0, duration: 0.6, ease: "power3.out" });
      });
    }
  }

  /* --- ARCHITECTURE: canvas fade in --- */
  const archSection = document.getElementById("architecture");
  if (archSection) {
    gsap.from(".arch-container", {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: { trigger: archSection, start: "top 70%" }
    });
  }

  /* --- JOURNEY CARDS: entrance + parallax --- */
  const visionCards = gsap.utils.toArray(".vision-card");
  visionCards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: card, start: "top 88%" },
    });
    if (!prefersReduced) {
      gsap.to(card, {
        yPercent: -10 - (i % 3) * 5,
        ease: "none",
        scrollTrigger: { trigger: ".journey", start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }
  });

  /* --- SECTION HEADS: title + subtitle reveal --- */
  gsap.utils.toArray("[data-anim-title]").forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });
  gsap.utils.toArray("[data-anim-sub]").forEach((el) => {
    gsap.from(el, {
      y: 24,
      opacity: 0,
      duration: 1,
      delay: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  /* --- LETTER: line-by-line reveal + card entrance --- */
  const letterCard = document.getElementById("letter-card");
  if (letterCard) {
    gsap.from(letterCard, {
      opacity: 0,
      y: 60,
      scale: 0.96,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: letterCard, start: "top 80%" },
    });
  }
  const letterLines = gsap.utils.toArray(".letter-body .line");
  letterLines.forEach((line, i) => {
    gsap.to(line, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "power2.out",
      delay: i * 0.15,
      scrollTrigger: { trigger: line, start: "top 90%" },
    });
    gsap.set(line, { y: 24, filter: "blur(8px)" });
  });
  // Signature glow
  gsap.from(".letter-signature", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.4,
    scrollTrigger: { trigger: ".letter-signature", start: "top 90%" },
  });

  /* --- WISHES: card entrance + mouse tilt --- */
  const wishCards = gsap.utils.toArray(".wish-card");
  wishCards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 60,
      duration: 0.9,
      ease: "power3.out",
      delay: i * 0.1,
      scrollTrigger: { trigger: card, start: "top 88%" },
    });
    // Mouse tilt (desktop only)
    if (!prefersReduced && window.matchMedia("(hover: hover)").matches) {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, {
          rotationY: px * 12,
          rotationX: -py * 12,
          transformPerspective: 800,
          duration: 0.4,
          ease: "power2.out",
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.6, ease: "power3.out" });
      });
    }
  });

  /* --- COUNTUP: number counts up when entering viewport --- */
  const countEl = document.getElementById("countup-number");
  if (countEl) {
    const target = birthdayConfig.age;
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: "#countup",
      start: "top 70%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: prefersReduced ? 0.4 : 2,
          ease: "power2.out",
          onUpdate: () => {
            countEl.textContent = Math.round(obj.val);
          },
        });
      },
    });
  }

  /* --- FINALE: title reveal --- */
  gsap.from(".finale-title .line", {
    opacity: 0,
    y: 60,
    duration: 1.1,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: { trigger: ".finale", start: "top 60%" },
  });
  gsap.from(".finale-name, .finale-message, .finale-buttons", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: { trigger: ".finale", start: "top 55%" },
  });

  /* --- PROGRESS INDICATOR --- */
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (s) => {
      document.getElementById("scroll-progress").style.width = s.progress * 100 + "%";
    },
  });

  // Refresh after build
  ScrollTrigger.refresh();
}

/* ---------- VIDEO PAUSE WHEN OUT OF VIEWPORT ---------- */
function setupVideoVisibility() {
  const videos = [document.getElementById("bg-video"), document.getElementById("reveal-video")].filter(Boolean);
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const v = e.target;
        if (e.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      });
    },
    { threshold: 0.05 }
  );
  videos.forEach((v) => io.observe(v));
}

/* ---------- CAKE: make a wish + confetti + sound ---------- */
let soundOn = true;
let confettiCtx = null;
let confettiParticles = [];
let confettiRaf = null;

function setupCake() {
  const wishBtn = document.getElementById("make-wish-btn");
  const soundBtn = document.getElementById("sound-toggle");
  const audio = document.getElementById("celebration-audio");
  const flames = gsap.utils.toArray("[data-flame]");
  const wishResult = document.getElementById("wish-result");
  const cakeStage = document.getElementById("cake-stage");

  // Sound toggle
  soundBtn.addEventListener("click", () => {
    soundOn = !soundOn;
    soundBtn.setAttribute("aria-pressed", String(!soundOn));
    if (!soundOn && audio) audio.pause();
  });

  // Make a wish
  wishBtn.addEventListener("click", () => {
    // Blow out flames
    flames.forEach((f, i) => {
      setTimeout(() => f.classList.add("out"), i * 120);
    });

    // Darken stage
    if (cakeStage && !prefersReduced) {
      gsap.to(cakeStage, { filter: "brightness(0.55)", duration: 0.8, ease: "power2.inOut" });
    }

    // Show glowing message
    setTimeout(() => wishResult.classList.add("show"), 500);

    // Confetti burst
    burstConfetti();

    // Play sound only after user interaction
    if (soundOn && audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }

    // Relight flames after a while + reset
    setTimeout(() => {
      flames.forEach((f) => f.classList.remove("out"));
      wishResult.classList.remove("show");
      if (cakeStage) gsap.to(cakeStage, { filter: "brightness(1)", duration: 0.8 });
    }, 4200);
  });
}

/* ---------- CONFETTI BURST (full screen canvas) ---------- */
function ensureConfettiCanvas() {
  let canvas = document.getElementById("confetti-canvas");
  if (canvas) return canvas;
  canvas = document.createElement("canvas");
  canvas.id = "confetti-canvas";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  confettiCtx = canvas.getContext("2d");
  return canvas;
}

function burstConfetti() {
  if (prefersReduced) return;
  const canvas = ensureConfettiCanvas();
  const ctx = confettiCtx;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ["#e8c27a", "#f7a8c4", "#b98bd6", "#f2dca8", "#fbcfe8", "#ffffff"];
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  confettiParticles = [];
  for (let i = 0; i < 160; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 9;
    confettiParticles.push({
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      size: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      life: 1,
    });
  }
  if (confettiRaf) cancelAnimationFrame(confettiRaf);
  animateConfetti();
}

function animateConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas || !confettiCtx) return;
  const ctx = confettiCtx;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let alive = false;
  confettiParticles.forEach((p) => {
    if (p.life <= 0) return;
    alive = true;
    p.vy += 0.15; // gravity
    p.vx *= 0.99;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.life -= 0.008;
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
    ctx.restore();
  });
  if (alive) {
    confettiRaf = requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiRaf = null;
  }
}

/* ---------- FINALE CONFETTI (ambient, on finale canvas) ---------- */
function setupFinaleConfetti() {
  const canvas = document.getElementById("finale-confetti");
  if (!canvas || prefersReduced) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  const colors = ["#e8c27a", "#f7a8c4", "#b98bd6", "#ffffff"];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function spawn() {
    if (particles.length < 60) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 1.2,
        vy: 1 + Math.random() * 2.5,
        size: 3 + Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.1,
      });
    }
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    spawn();
    particles = particles.filter((p) => p.y < canvas.height + 20);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = 0.85;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
      ctx.restore();
    });
    requestAnimationFrame(tick);
  }
  // Start when finale enters view
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          tick();
          io.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );
  io.observe(document.querySelector(".finale"));
}

/* ---------- FINALE BUTTONS ---------- */
function setupFinaleButtons() {
  document.getElementById("replay-btn")?.addEventListener("click", () => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    setTimeout(() => location.reload(), 300);
  });

  document.getElementById("top-btn")?.addEventListener("click", () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("share-btn")?.addEventListener("click", async () => {
    const shareData = {
      title: "Happy Birthday!",
      text: `Wishing ${birthdayConfig.name} a wonderful birthday! 🎂`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        const btn = document.getElementById("share-btn");
        const orig = btn.textContent;
        btn.textContent = "Link copied!";
        setTimeout(() => (btn.textContent = orig), 1800);
      }
    } catch (_) {
      /* user cancelled — ignore */
    }
  });
}

/* ---------- DJ PLAYER ---------- */
function buildDJPlayer() {
  const audio      = document.getElementById("dj-audio");
  const playBtn    = document.getElementById("dj-play-btn");
  const vinyl      = document.getElementById("vinyl");
  const fillEl     = document.getElementById("dj-progress-fill");
  const thumbEl    = document.getElementById("dj-progress-thumb");
  const progWrap   = document.getElementById("dj-progress-wrap");
  const curTimeEl  = document.getElementById("dj-current-time");
  const totTimeEl  = document.getElementById("dj-total-time");
  const volSlider  = document.getElementById("dj-volume");
  const canvas     = document.getElementById("dj-visualizer");
  const lyricsPanel = document.getElementById("dj-lyrics-panel");
  if (!audio || !playBtn || !vinyl || !canvas || !lyricsPanel) return;

  /* ---- Build lyrics DOM ---- */
  let allLines = [];
  birthdayConfig.lyrics.forEach((block) => {
    const blockEl = document.createElement("div");
    blockEl.className = "lyric-block";
    const labelEl = document.createElement("span");
    labelEl.className = "lyric-label";
    labelEl.textContent = block.label;
    blockEl.appendChild(labelEl);
    block.lines.forEach((text) => {
      const lineEl = document.createElement("span");
      lineEl.className = "lyric-line";
      lineEl.textContent = text;
      blockEl.appendChild(lineEl);
      allLines.push(lineEl);
    });
    lyricsPanel.appendChild(blockEl);
  });

  /* ---- Format time helper ---- */
  function fmt(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ":" + (sec < 10 ? "0" : "") + sec;
  }

  /* ---- Web Audio API setup ---- */
  let audioCtx = null, analyser = null, dataArr = null;
  function initAudioCtx() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioCtx.createMediaElementSource(audio);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 128;
    dataArr = new Uint8Array(analyser.frequencyBinCount);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
  }

  /* ---- Canvas visualizer ---- */
  const ctx = canvas.getContext("2d");
  let vizRaf = null;

  function resizeCanvas() {
    canvas.width  = canvas.offsetWidth  * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  function drawVisualizer() {
    vizRaf = requestAnimationFrame(drawVisualizer);
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    ctx.clearRect(0, 0, W, H);

    if (!analyser) {
      // idle: draw a flat subtle glow line
      ctx.beginPath();
      ctx.strokeStyle = "rgba(232,194,122,0.15)";
      ctx.lineWidth = 1;
      ctx.moveTo(0, H / 2);
      ctx.lineTo(W, H / 2);
      ctx.stroke();
      return;
    }

    analyser.getByteFrequencyData(dataArr);
    const barCount = dataArr.length;
    const barW = (W / barCount) - 1;

    for (let i = 0; i < barCount; i++) {
      const val    = dataArr[i] / 255;
      const barH   = val * H;
      const x      = i * (barW + 1);
      const hue    = 35 + val * 280; // gold → pink → purple
      const alpha  = 0.5 + val * 0.5;
      ctx.fillStyle = `hsla(${hue}, 85%, 65%, ${alpha})`;
      ctx.beginPath();
      ctx.roundRect
        ? ctx.roundRect(x, H - barH, barW, barH, 2)
        : ctx.rect(x, H - barH, barW, barH);
      ctx.fill();
    }
  }
  drawVisualizer();

  /* ---- Vinyl spin (CSS animation toggled) ---- */
  function setPlaying(playing) {
    if (playing) {
      vinyl.classList.add("playing");
      playBtn.classList.add("playing");
      playBtn.setAttribute("aria-label", "Pause");
    } else {
      vinyl.classList.remove("playing");
      playBtn.classList.remove("playing");
      playBtn.setAttribute("aria-label", "Play");
    }
  }

  /* ---- Play / Pause ---- */
  playBtn.addEventListener("click", async () => {
    initAudioCtx();
    if (audioCtx.state === "suspended") await audioCtx.resume();
    if (audio.paused) {
      audio.play().catch(() => {});
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  });

  audio.addEventListener("ended", () => setPlaying(false));

  /* ---- Duration / time display ---- */
  audio.addEventListener("loadedmetadata", () => {
    totTimeEl.textContent = fmt(audio.duration);
  });

  /* ---- Progress bar update + lyrics scroll ---- */
  let lyricsScrollMax = 0;
  function updateProgress() {
    requestAnimationFrame(updateProgress);
    if (!audio.duration) return;

    const pct = audio.currentTime / audio.duration;
    fillEl.style.width  = (pct * 100) + "%";
    thumbEl.style.left  = (pct * 100) + "%";
    curTimeEl.textContent = fmt(audio.currentTime);

    /* Lyrics highlight + auto-scroll */
    const lineIndex = Math.floor(pct * allLines.length);
    allLines.forEach((el, i) => {
      el.classList.toggle("active", i === lineIndex);
    });

    // Auto-scroll proportionally
    lyricsScrollMax = lyricsPanel.scrollHeight - lyricsPanel.clientHeight;
    if (lyricsScrollMax > 0) {
      lyricsPanel.scrollTop = pct * lyricsScrollMax;
    }
  }
  updateProgress();

  /* ---- Click-to-seek on progress bar ---- */
  progWrap.addEventListener("click", (e) => {
    const rect = progWrap.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * audio.duration;
  });

  /* ---- Volume slider ---- */
  if (volSlider) {
    audio.volume = parseFloat(volSlider.value);
    volSlider.addEventListener("input", () => {
      audio.volume = parseFloat(volSlider.value);
    });
  }

  /* ---- GSAP entrance animation ---- */
  const djSection = document.getElementById("dj");
  if (djSection && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.from(".dj-player-wrap", {
      opacity: 0, x: -60, duration: 1.1, ease: "power3.out",
      scrollTrigger: { trigger: djSection, start: "top 80%" },
    });
    gsap.from(".dj-lyrics-panel", {
      opacity: 0, x: 60, duration: 1.1, ease: "power3.out",
      scrollTrigger: { trigger: djSection, start: "top 80%" },
    });
  }
}

/* ---------- INIT ---------- */
function init() {
  applyConfig();
  buildParticles();
  buildCodePoetry();
  buildArchitecture();
  buildJourney();
  buildDJPlayer();
  buildLetter();
  buildWishes();
  buildLangLogos();
  initLenis();
  initAnimations();
  setupVideoVisibility();
  setupCake();
  setupFinaleConfetti();
  setupFinaleButtons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

/* ---------- RESIZE HANDLER ---------- */
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
    const canvas = document.getElementById("confetti-canvas");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, 200);
});
