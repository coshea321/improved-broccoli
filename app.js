const _excluded = ["practice"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
const _React = React,
  useState = _React.useState,
  useCallback = _React.useCallback,
  useMemo = _React.useMemo;

// ── STYLES ────────────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=IBM+Plex+Mono:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg:#0b0b13; --surface:#111120; --card:#181828; --card2:#1d1d30;
    --border:#252538; --borderb:#32325a;
    --gold:#c9a227; --golddim:rgba(201,162,39,0.12); --goldt:#e0b84a;
    --blue:#6da8d4; --bluedim:rgba(109,168,212,0.12);
    --text:#ece8df; --muted:#8a8699;
    --green:#5aaa77; --greendim:rgba(90,170,119,0.13);
    --red:#c4615a; --reddim:rgba(196,97,90,0.13);
    --purple:#a78bd4; --purpledim:rgba(167,139,212,0.12);
    --gfont:'Crimson Pro',Georgia,serif;
    --bfont:'DM Sans',sans-serif;
    --mfont:'IBM Plex Mono',monospace;
  }
  body,#root { background:var(--bg); min-height:100vh; }
  .app { font-family:var(--bfont); background:var(--bg); color:var(--text); min-height:100vh; line-height:1.6; }

  /* HEADER */
  .hdr { background:var(--surface); border-bottom:1px solid var(--border); padding:14px 24px; display:flex; align-items:center; gap:14px; flex-wrap:wrap; }
  .hdr-title { font-family:var(--gfont); font-size:1.65rem; font-weight:600; color:var(--goldt); letter-spacing:.02em; }
  .hdr-sub { font-family:var(--gfont); font-size:1rem; color:var(--muted); font-style:italic; }
  .badge { font-size:.68rem; font-weight:500; letter-spacing:.07em; text-transform:uppercase; padding:3px 10px; border-radius:20px; background:var(--bluedim); color:var(--blue); border:1px solid rgba(109,168,212,.25); }

  /* NAV */
  .nav { background:var(--surface); border-bottom:1px solid var(--border); padding:0 20px; display:flex; overflow-x:auto; gap:2px; }
  .nb { padding:11px 18px; background:none; border:none; border-bottom:2px solid transparent; color:var(--muted); font-family:var(--bfont); font-size:.88rem; font-weight:500; cursor:pointer; white-space:nowrap; transition:all .15s; letter-spacing:.02em; }
  .nb:hover { color:var(--text); background:rgba(255,255,255,.025); }
  .nb.on { color:var(--goldt); border-bottom-color:var(--gold); }

  /* LAYOUT */
  .main { max-width:960px; margin:0 auto; padding:26px 18px; }
  .sec-hdr { margin-bottom:20px; }
  .sec-title { font-family:var(--gfont); font-size:1.5rem; font-weight:600; color:var(--text); }
  .sec-sub { font-size:.86rem; color:var(--muted); margin-top:2px; }

  /* FILTER PILLS */
  .filter-row { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:20px; }
  .fpill { padding:5px 14px; border-radius:20px; border:1px solid var(--border); background:none; color:var(--muted); font-family:var(--bfont); font-size:.8rem; font-weight:500; cursor:pointer; transition:all .13s; white-space:nowrap; }
  .fpill:hover { border-color:var(--borderb); color:var(--text); }
  .fpill.on { background:var(--golddim); border-color:var(--gold); color:var(--goldt); }

  /* APHANTASIA BANNER */
  .aban { margin-bottom:20px; padding:13px 16px; background:var(--bluedim); border:1px solid rgba(109,168,212,.2); border-radius:10px; font-size:.84rem; color:var(--muted); line-height:1.65; }
  .aban strong { color:var(--blue); font-weight:500; }
  .aban ul { padding-left:18px; margin-top:5px; }
  .aban li { margin-bottom:3px; }

  /* ALPHABET */
  .agrid { display:grid; grid-template-columns:repeat(auto-fill,minmax(255px,1fr)); gap:10px; }
  .acard { background:var(--card); border:1px solid var(--border); border-radius:10px; padding:15px 17px; transition:border-color .18s,background .18s; }
  .acard:hover { border-color:var(--borderb); background:var(--card2); }
  .arow { display:flex; align-items:baseline; gap:10px; margin-bottom:9px; }
  .aU { font-family:var(--gfont); font-size:2rem; font-weight:600; color:var(--goldt); line-height:1; }
  .aL { font-family:var(--gfont); font-size:1.5rem; color:var(--goldt); opacity:.65; }
  .aname { margin-left:auto; font-size:.75rem; font-weight:500; text-transform:uppercase; letter-spacing:.09em; color:var(--muted); }
  .aipa { font-family:var(--mfont); font-size:.78rem; padding:2px 8px; background:var(--bluedim); color:var(--blue); border-radius:4px; border:1px solid rgba(109,168,212,.18); display:inline-block; margin-bottom:6px; }
  .adesc { font-size:.83rem; color:var(--muted); margin-bottom:7px; line-height:1.45; }
  .acog { font-size:.79rem; color:var(--goldt); opacity:.8; font-style:italic; }

  /* VOCAB CARDS */
  .vlist { display:flex; flex-direction:column; gap:13px; }
  .vcard { background:var(--card); border:1px solid var(--border); border-radius:12px; overflow:hidden; transition:border-color .18s; }
  .vcard:hover { border-color:var(--borderb); }
  .vhdr { display:flex; align-items:center; gap:12px; padding:15px 20px 11px; border-bottom:1px solid var(--border); flex-wrap:wrap; }
  .vgreek { font-family:var(--gfont); font-size:2rem; font-weight:600; color:var(--goldt); line-height:1; }
  .vpron { font-family:var(--mfont); font-size:.78rem; padding:2px 10px; background:var(--bluedim); color:var(--blue); border-radius:20px; border:1px solid rgba(109,168,212,.18); }
  .vfield { font-size:.68rem; font-weight:500; text-transform:uppercase; letter-spacing:.07em; padding:2px 9px; border-radius:20px; background:rgba(255,255,255,.04); color:var(--muted); border:1px solid var(--border); }
  .vmeaning { font-size:.98rem; font-weight:500; color:var(--text); margin-left:auto; }
  .vbody { padding:13px 20px; display:grid; grid-template-columns:1fr 1fr; gap:12px; }
  @media(max-width:580px){.vbody{grid-template-columns:1fr;}}
  .vlabel { font-size:.67rem; font-weight:600; text-transform:uppercase; letter-spacing:.09em; color:var(--muted); margin-bottom:4px; }
  .vetym { font-size:.86rem; color:var(--text); line-height:1.5; }
  .dtags { display:flex; flex-wrap:wrap; gap:5px; margin-top:5px; }
  .dtag { font-size:.74rem; padding:2px 9px; background:var(--golddim); color:var(--goldt); border-radius:20px; border:1px solid rgba(201,162,39,.18); }
  .vex { padding:10px 13px; background:rgba(255,255,255,.03); border-radius:7px; border-left:3px solid var(--gold); }
  .exg { font-family:var(--gfont); font-size:1.05rem; color:var(--text); display:block; }
  .exr { font-family:var(--mfont); font-size:.74rem; color:var(--blue); display:block; margin-top:2px; }
  .exe { font-size:.81rem; color:var(--muted); display:block; margin-top:2px; }
  .vpattern { grid-column:1/-1; padding:9px 12px; background:var(--golddim); border-radius:6px; border:1px solid rgba(201,162,39,.12); font-size:.83rem; color:var(--muted); line-height:1.55; }
  .vpattern span { color:var(--goldt); font-weight:500; }
  .vnote { font-size:.79rem; color:var(--muted); margin-top:7px; line-height:1.5; font-style:italic; }

  /* GRAMMAR */
  .glist { display:flex; flex-direction:column; gap:18px; }
  .gcard { background:var(--card); border:1px solid var(--border); border-radius:12px; overflow:hidden; }
  .ghdr { padding:16px 20px; border-bottom:1px solid var(--border); background:rgba(255,255,255,.02); }
  .gtitle { font-family:var(--gfont); font-size:1.2rem; font-weight:600; color:var(--text); }
  .gsub { font-size:.72rem; text-transform:uppercase; letter-spacing:.08em; color:var(--muted); font-weight:500; margin-top:2px; }
  .gbody { padding:16px 20px; display:flex; flex-direction:column; gap:12px; }
  .grule { font-size:.9rem; color:var(--text); line-height:1.6; padding:11px 13px; background:rgba(255,255,255,.03); border-radius:6px; border-left:3px solid var(--blue); }
  .gtw { overflow-x:auto; border-radius:8px; border:1px solid var(--border); }
  .gtw table { width:100%; border-collapse:collapse; font-size:.86rem; }
  .gtw th { background:rgba(255,255,255,.04); color:var(--muted); font-weight:500; text-transform:uppercase; letter-spacing:.05em; font-size:.72rem; padding:9px 13px; text-align:left; white-space:nowrap; }
  .gtw td { padding:9px 13px; border-top:1px solid var(--border); color:var(--text); vertical-align:top; line-height:1.5; }
  .gtw tr:hover td { background:rgba(255,255,255,.018); }
  .greek-cell { font-family:var(--gfont)!important; font-size:1.05rem!important; color:var(--goldt)!important; }
  .mono-cell { font-family:var(--mfont)!important; font-size:.8rem!important; color:var(--blue)!important; }
  .insight { padding:11px 13px; background:var(--golddim); border-radius:6px; border:1px solid rgba(201,162,39,.18); font-size:.86rem; color:var(--text); line-height:1.55; }
  .ilabel { font-size:.68rem; font-weight:600; text-transform:uppercase; letter-spacing:.09em; color:var(--goldt); margin-bottom:3px; display:block; }
  .logic { padding:9px 13px; background:var(--bluedim); border-radius:6px; border:1px solid rgba(109,168,212,.13); font-size:.83rem; color:var(--muted); line-height:1.55; }
  .llabel { font-size:.68rem; font-weight:600; text-transform:uppercase; letter-spacing:.09em; color:var(--blue); margin-bottom:3px; display:block; }

  /* PRACTICE */
  .pwrap { max-width:540px; margin:0 auto; }
  .practice-top { display:flex; flex-direction:column; gap:10px; margin-bottom:16px; }
  .scorebar { display:flex; align-items:center; justify-content:space-between; padding:10px 15px; background:var(--surface); border:1px solid var(--border); border-radius:8px; }
  .stext { font-size:.86rem; color:var(--muted); }
  .snum { font-weight:600; color:var(--green); font-family:var(--mfont); font-size:.95rem; }
  .sbad { color:var(--red); }
  .rbtn { background:none; border:1px solid var(--border); color:var(--muted); padding:3px 11px; border-radius:20px; font-size:.78rem; cursor:pointer; font-family:var(--bfont); transition:all .13s; }
  .rbtn:hover { border-color:var(--borderb); color:var(--text); }
  .pdots { display:flex; gap:5px; flex-wrap:wrap; justify-content:center; }
  .dot { width:8px; height:8px; border-radius:50%; background:var(--border); transition:background .2s; }
  .dot.cur { background:var(--gold); }
  .dot.ok  { background:var(--green); }
  .dot.bad { background:var(--red); }
  .qcard { background:var(--card); border:1px solid var(--border); border-radius:14px; padding:28px 22px; text-align:center; margin-bottom:14px; }
  .qlabel { font-size:.68rem; font-weight:600; text-transform:uppercase; letter-spacing:.1em; color:var(--muted); margin-bottom:9px; }
  .qword { font-family:var(--gfont); font-size:3rem; font-weight:600; color:var(--goldt); line-height:1; margin-bottom:10px; }
  .qpron { font-family:var(--mfont); font-size:.85rem; color:var(--blue); padding:3px 13px; background:var(--bluedim); border-radius:20px; border:1px solid rgba(109,168,212,.2); display:inline-block; }
  .opts { display:grid; grid-template-columns:1fr 1fr; gap:9px; margin-bottom:14px; }
  .opt { padding:13px 10px; background:var(--card); border:1px solid var(--border); border-radius:8px; color:var(--text); font-family:var(--bfont); font-size:.88rem; cursor:pointer; transition:all .13s; text-align:center; line-height:1.4; }
  .opt:hover:not(:disabled) { border-color:var(--gold); background:var(--golddim); color:var(--goldt); }
  .opt.correct { border-color:var(--green); background:var(--greendim); color:var(--green); font-weight:500; }
  .opt.wrong   { border-color:var(--red);   background:var(--reddim);   color:var(--red); }
  .opt.show-ok { border-color:var(--green); background:var(--greendim); color:var(--green); opacity:.6; }
  .opt:disabled { cursor:default; }
  .expl { background:var(--surface); border:1px solid var(--border); border-radius:10px; padding:14px 16px; margin-bottom:14px; text-align:left; }
  .expl-row { margin-bottom:10px; }
  .expl-row:last-child { margin-bottom:0; }
  .expl-lbl { font-size:.68rem; font-weight:600; text-transform:uppercase; letter-spacing:.08em; color:var(--muted); margin-bottom:3px; }
  .expl-txt { font-size:.86rem; color:var(--text); line-height:1.55; }
  .expl-tags { display:flex; flex-wrap:wrap; gap:5px; margin-top:4px; }
  .expl-pat { padding:8px 11px; background:var(--golddim); border-radius:5px; font-size:.84rem; color:var(--goldt); line-height:1.5; border:1px solid rgba(201,162,39,.12); }
  .nxtbtn { width:100%; padding:13px; background:var(--gold); color:#0b0b13; border:none; border-radius:8px; font-family:var(--bfont); font-size:.93rem; font-weight:600; cursor:pointer; transition:background .13s; letter-spacing:.02em; }
  .nxtbtn:hover { background:var(--goldt); }
  .complete { text-align:center; padding:40px 20px; background:var(--card); border:1px solid var(--border); border-radius:14px; }
  .complete h2 { font-family:var(--gfont); font-size:1.8rem; color:var(--goldt); margin-bottom:8px; }
  .complete p { color:var(--muted); font-size:.9rem; margin-bottom:14px; line-height:1.6; }
  .score-big { font-size:2.5rem; font-family:var(--mfont); color:var(--green); margin:10px 0 20px; }

  /* METHOD PANEL */
  .method-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(210px,1fr)); gap:11px; margin-bottom:24px; }
  .mcard { background:var(--card); border:1px solid var(--border); border-radius:10px; padding:15px; }
  .mcard-ico { font-size:1.3rem; margin-bottom:8px; }
  .mcard-title { font-size:.88rem; font-weight:500; color:var(--text); margin-bottom:4px; }
  .mcard-desc { font-size:.8rem; color:var(--muted); line-height:1.5; }
  .mcard.on { border-color:var(--blue); }
  .mcard.on .mcard-title { color:var(--blue); }
  .count-badge { display:inline-block; padding:1px 8px; border-radius:20px; background:var(--golddim); color:var(--goldt); font-size:.72rem; font-family:var(--mfont); border:1px solid rgba(201,162,39,.2); margin-left:8px; vertical-align:middle; }
`;

// ── ALPHABET ──────────────────────────────────────────────────────────────────
const ALPHABET = [{
  U: "Α",
  L: "α",
  name: "Alpha",
  ipa: "/a/",
  desc: "Like 'a' in 'father'",
  cog: "alphabet (alpha+beta), alpha version"
}, {
  U: "Β",
  L: "β",
  name: "Beta",
  ipa: "/v/",
  desc: "Like 'v' in 'vine' — NOT 'b' in Modern Greek",
  cog: "beta test, beta version"
}, {
  U: "Γ",
  L: "γ",
  name: "Gamma",
  ipa: "/ɣ~j/",
  desc: "Guttural; like 'y' before e/i vowels",
  cog: "gamma ray, gamma correction"
}, {
  U: "Δ",
  L: "δ",
  name: "Delta",
  ipa: "/ð/",
  desc: "Like 'th' in 'this' — the VOICED th",
  cog: "delta (river mouth, math symbol Δ)"
}, {
  U: "Ε",
  L: "ε",
  name: "Epsilon",
  ipa: "/e/",
  desc: "Like 'e' in 'bed'",
  cog: "epsilon (small e in calculus)"
}, {
  U: "Ζ",
  L: "ζ",
  name: "Zeta",
  ipa: "/z/",
  desc: "Like 'z' in 'zero'",
  cog: "zeta function (Riemann)"
}, {
  U: "Η",
  L: "η",
  name: "Eta",
  ipa: "/i/",
  desc: "Like 'ee' in 'see'",
  cog: "eta (ETA = estimated time of arrival)"
}, {
  U: "Θ",
  L: "θ",
  name: "Theta",
  ipa: "/θ/",
  desc: "Like 'th' in 'think' — the UNVOICED th",
  cog: "therapy (θεραπεία), theatre (θέατρο)"
}, {
  U: "Ι",
  L: "ι",
  name: "Iota",
  ipa: "/i/",
  desc: "Like 'ee' in 'see'",
  cog: "iota (tiny amount), ion, ionic"
}, {
  U: "Κ",
  L: "κ",
  name: "Kappa",
  ipa: "/k/",
  desc: "Like 'k' in 'key'",
  cog: "kappa (statistics), kangaroo (borrowed)"
}, {
  U: "Λ",
  L: "λ",
  name: "Lambda",
  ipa: "/l/",
  desc: "Like 'l' in 'light'",
  cog: "lambda (programming, calculus)"
}, {
  U: "Μ",
  L: "μ",
  name: "Mu",
  ipa: "/m/",
  desc: "Like 'm' in 'mother'",
  cog: "micro- (μ = millionth prefix), mu meson"
}, {
  U: "Ν",
  L: "ν",
  name: "Nu",
  ipa: "/n/",
  desc: "Like 'n' in 'note'",
  cog: "neuron (νεύρον = nerve), neural"
}, {
  U: "Ξ",
  L: "ξ",
  name: "Xi",
  ipa: "/ks/",
  desc: "Like 'ks' in 'backs' — always both sounds",
  cog: "xeno- (ξένος = stranger): xenophobia"
}, {
  U: "Ο",
  L: "ο",
  name: "Omicron",
  ipa: "/o/",
  desc: "Like 'o' in 'lot'",
  cog: "omicron (COVID variant, small o)"
}, {
  U: "Π",
  L: "π",
  name: "Pi",
  ipa: "/p/",
  desc: "Like 'p' in 'spin'",
  cog: "pi (3.14...), polygon (πολύ = many)"
}, {
  U: "Ρ",
  L: "ρ",
  name: "Rho",
  ipa: "/r/",
  desc: "Rolled/trilled r, like Spanish r",
  cog: "rhythm (ρυθμός), rhapsody, rhetoric"
}, {
  U: "Σ",
  L: "σ/ς",
  name: "Sigma",
  ipa: "/s/",
  desc: "Like 's' in 'sun'. Final ς only at word-end",
  cog: "sigma (Σ = summation), sinusoidal"
}, {
  U: "Τ",
  L: "τ",
  name: "Tau",
  ipa: "/t/",
  desc: "Like 't' in 'stop'",
  cog: "tau (τ), technology (τέχνη = craft/art)"
}, {
  U: "Υ",
  L: "υ",
  name: "Upsilon",
  ipa: "/i/",
  desc: "Like 'ee' in 'see' (Modern Greek)",
  cog: "hyper- (υπερ- = over/beyond), hypo- (υπο-)"
}, {
  U: "Φ",
  L: "φ",
  name: "Phi",
  ipa: "/f/",
  desc: "Like 'f' in 'phone'",
  cog: "philosophy (φιλο+σοφία), phone (φωνή)"
}, {
  U: "Χ",
  L: "χ",
  name: "Chi",
  ipa: "/x/",
  desc: "Like 'ch' in Scottish 'loch' or 'Bach'",
  cog: "character (χαρακτήρ), chaos (χάος)"
}, {
  U: "Ψ",
  L: "ψ",
  name: "Psi",
  ipa: "/ps/",
  desc: "Like 'ps' in 'lips' — always both consonants",
  cog: "psychology (ψυχή = soul), pseudo-"
}, {
  U: "Ω",
  L: "ω",
  name: "Omega",
  ipa: "/o/",
  desc: "Same as Omicron in Modern Greek (merged)",
  cog: "omega (last/ultimate), alpha and omega"
}];

// ── VOCABULARY ────────────────────────────────────────────────────────────────
const VOCAB = [
// ── GREETINGS & POLITENESS ───────────────────────────────────────────────
{
  g: "γεια",
  rom: "ya",
  pron: "YA",
  meaning: "Hello / Goodbye",
  sf: "Greetings",
  etym: "From υγεία (health, wellbeing). Root hygi- → hygiene, hygienic.",
  der: ["hygiene", "hygienic"],
  ex: {
    g: "Γεια σου!",
    r: "Ya sou!",
    e: "Hello to you!"
  },
  pattern: "Same word for hello AND goodbye — arriving vs. leaving determines which.",
  note: "Informal. Formal: χαίρετε (HE-re-te)."
}, {
  g: "καλημέρα",
  rom: "kalimera",
  pron: "ka-li-ME-ra",
  meaning: "Good morning",
  sf: "Greetings",
  etym: "καλή (good/beautiful) + μέρα (day). Root calli- → calligraphy (beautiful writing), calliope.",
  der: ["calligraphy", "calliope", "kaleidoscope"],
  ex: {
    g: "Καλημέρα σας!",
    r: "Kalimera sas!",
    e: "Good morning (formal)!"
  },
  pattern: "Formula: καλή + [time of day]. καλή + νύχτα = καληνύχτα, etc. Productive pattern.",
  note: "Used until approximately noon."
}, {
  g: "καλησπέρα",
  rom: "kalispera",
  pron: "ka-li-SPE-ra",
  meaning: "Good afternoon / Good evening",
  sf: "Greetings",
  etym: "καλή (good) + εσπέρα (evening). Root hesper- → Hesperus (evening star = Venus), Hesperia (western land, where the sun sets).",
  der: ["Hesperus", "Hesperia", "vespers (from Latin vespera, same root)"],
  ex: {
    g: "Καλησπέρα! Πώς είστε;",
    r: "Kalispera! Pos eiste?",
    e: "Good evening! How are you?"
  },
  pattern: "Same καλή + formula. εσπέρα (evening) → vespers (evening prayers in Christianity, via Latin).",
  note: "Used from roughly noon until late evening."
}, {
  g: "καληνύχτα",
  rom: "kalinychta",
  pron: "ka-li-NICH-ta",
  meaning: "Good night",
  sf: "Greetings",
  etym: "καλή (good) + νύχτα (night). Root nyct-/noct- → nocturnal, nocturn, nyctophobia (fear of night).",
  der: ["nocturnal", "nocturn", "nyctophobia"],
  ex: {
    g: "Καληνύχτα! Γλυκά όνειρα!",
    r: "Kalinychta! Glika oneira!",
    e: "Good night! Sweet dreams!"
  },
  pattern: "Same καλή + formula. 'Nocturnal' = Latin nocturnalis, from nox/noctis = same Proto-Indo-European root as νύχτα.",
  note: "γλυκά όνειρα = sweet dreams (γλυκός = sweet → glycerin, glucose)."
}, {
  g: "ευχαριστώ",
  rom: "efharisto",
  pron: "ef-ha-ri-STO",
  meaning: "Thank you",
  sf: "Greetings",
  etym: "ευ (good/well) + χάρη (grace, favor). Prefix eu- → eucharist, eulogy, euphoria, euphemism, euthanasia.",
  der: ["eucharist", "eulogy", "euphoria", "euphemism", "euthanasia", "eureka"],
  ex: {
    g: "Ευχαριστώ πολύ!",
    r: "Efharisto poli!",
    e: "Thank you very much!"
  },
  pattern: "eu- prefix = well/good. Knowing this unlocks 30+ English words: eu+logy, eu+phoria, eu+thanasia, eu+phemism.",
  note: "Most important polite word. πολύ = very/much."
}, {
  g: "παρακαλώ",
  rom: "parakalo",
  pron: "pa-ra-ka-LO",
  meaning: "Please / You're welcome",
  sf: "Greetings",
  etym: "παρά (beside, on behalf of) + καλώ (I call/invite). Root para- → paragraph, parallel, paranormal, paramedic.",
  der: ["paragraph", "parallel", "paranormal", "paramedic", "parasite"],
  ex: {
    g: "Παρακαλώ!",
    r: "Parakalo!",
    e: "You're welcome! / Please!"
  },
  pattern: "Same word = please + you're welcome. Also said when answering phone/door. para- prefix = beside/beyond.",
  note: "Παρακαλώ; (rising intonation) = 'Yes? Can I help you?'"
}, {
  g: "συγγνώμη",
  rom: "signomi",
  pron: "si-GNO-mi",
  meaning: "Sorry / Excuse me",
  sf: "Greetings",
  etym: "συν (together/with) + γνώμη (judgment/understanding). Root gno- → gnosis, diagnosis, prognosis, agnostic, cognitive.",
  der: ["gnosis", "diagnosis", "prognosis", "agnostic", "cognitive", "recognize"],
  ex: {
    g: "Συγγνώμη, μιλάτε αγγλικά;",
    r: "Signomi, milate anglika?",
    e: "Excuse me, do you speak English?"
  },
  pattern: "συν- prefix = together/with → symptom, synonym, synthesis, synchronize, synagogue.",
  note: "Used for both apology and getting someone's attention."
}, {
  g: "εντάξει",
  rom: "endaksi",
  pron: "en-DA-ksi",
  meaning: "OK / Alright / Fine",
  sf: "Greetings",
  etym: "εν (in/within) + τάξει (order, arrangement). Lit. 'in order'. Root taxis → taxonomy, syntax, tactics, taxicab.",
  der: ["taxonomy", "syntax", "tactics", "taxicab"],
  ex: {
    g: "Εντάξει, πάμε!",
    r: "Endaksi, pame!",
    e: "OK, let's go!"
  },
  pattern: "εν- prefix = in/within → endemic, energy, enthusiasm. τάξη = order/class — school class = 'things arranged in order'.",
  note: "Most versatile word in Greek. Covers OK, fine, understood, no problem, deal."
},
// ── NUMBERS ──────────────────────────────────────────────────────────────
{
  g: "ένα / μία",
  rom: "ena / mia",
  pron: "E-na / MI-a",
  meaning: "One",
  sf: "Numbers",
  etym: "Ancient ἕν. Related root: mono- (one) in compounds → monarch, monopoly, monologue, monocle.",
  der: ["monarch", "monopoly", "monologue", "monocle", "monastery"],
  ex: {
    g: "Ένα καφέ, παρακαλώ.",
    r: "Ena kafe, parakalo.",
    e: "One coffee, please."
  },
  pattern: "Number must match noun gender: ένα (neuter), μία (feminine), ένας (masculine). Also means 'a/an'.",
  note: "Gender agreement is a new concept for English speakers — no equivalent in English."
}, {
  g: "δύο",
  rom: "dio",
  pron: "DI-o",
  meaning: "Two",
  sf: "Numbers",
  etym: "Ancient δύο. Root di-/duo- → duo, duet, dialogue (two voices), diploma (double-folded), dioxide, dilemma, bilingual.",
  der: ["duo", "duet", "dialogue", "diploma", "dioxide", "dilemma", "bilingual", "bicycle"],
  ex: {
    g: "Δύο καφέδες, παρακαλώ.",
    r: "Dio kafedes, parakalo.",
    e: "Two coffees, please."
  },
  pattern: "di-/duo- = two → 'dilemma' = two choices, 'dialogue' = two voices, 'dioxide' = two oxygens.",
  note: "Indeclinable — same form regardless of noun gender."
}, {
  g: "τρία",
  rom: "tria",
  pron: "TRI-a",
  meaning: "Three",
  sf: "Numbers",
  etym: "Ancient τρεῖς/τρία. Root tri- → trio, triangle, trinity, tricycle, trident, trilogy, tripod, trilogy.",
  der: ["trio", "triangle", "trinity", "tricycle", "trident", "trilogy", "tripod"],
  ex: {
    g: "Τρία παιδιά.",
    r: "Tria pedia.",
    e: "Three children."
  },
  pattern: "tri- = three. Trident = tri + dent (tooth) = three-toothed. Tripod = tri + pod (foot) = three-footed.",
  note: "Neuter form (τρία). Masculine/feminine: τρεις."
}, {
  g: "τέσσερα",
  rom: "tessera",
  pron: "TES-se-ra",
  meaning: "Four",
  sf: "Numbers",
  etym: "Ancient τέτταρα. Root tetra- → tetrahedron (4 faces), tetrapod (4 feet), tetrameter, tetralogy, Tetris (tetra = 4-block pieces).",
  der: ["tetrahedron", "tetrapod", "tetrameter", "tetralogy", "Tetris"],
  ex: {
    g: "Τέσσερις εποχές.",
    r: "Tesseris epohes.",
    e: "Four seasons."
  },
  pattern: "tetra- = four in scientific English. Tetrahedron = 4-faced solid. Tetris = named for the 4-block pieces.",
  note: "Neuter: τέσσερα. Masculine/feminine: τέσσερις."
}, {
  g: "πέντε",
  rom: "pente",
  pron: "PEN-de",
  meaning: "Five",
  sf: "Numbers",
  etym: "Ancient πέντε. Root pent(a)- → pentagon (5 sides), Pentecost (50th day), pentagram, pentathlon.",
  der: ["pentagon", "Pentecost", "pentagram", "pentathlon", "pentameter"],
  ex: {
    g: "Πέντε ευρώ.",
    r: "Pende evro.",
    e: "Five euros."
  },
  pattern: "penta- = five. Pentagon = 5 sides. Pentecost = 50th day (pente × deca). Pentathlon = 5 events.",
  note: "In spoken Greek, π often sounds like /b/ in consonant clusters: 'pende' not 'pente'."
}, {
  g: "δέκα",
  rom: "deka",
  pron: "DE-ka",
  meaning: "Ten",
  sf: "Numbers",
  etym: "Ancient δέκα. Root dec(a)- → decade, decimal, December (was 10th Roman month), decagon, Decalogue (10 commandments), decimate.",
  der: ["decade", "decimal", "December", "decagon", "Decalogue", "decimate", "decimeter"],
  ex: {
    g: "Δέκα λεπτά.",
    r: "Deka lepta.",
    e: "Ten minutes."
  },
  pattern: "deca- = ten in all sciences. Decimate = originally 'remove 1 in 10'. December was the 10th month before January/February added.",
  note: "Decathlon = δέκα + ἄθλον (contest) = ten contests."
},
// ── TIME ─────────────────────────────────────────────────────────────────
{
  g: "χρόνος",
  rom: "hronos",
  pron: "HRO-nos",
  meaning: "Time / Year",
  sf: "Time",
  etym: "Ancient χρόνος. Root chron- → chronology, chronic (lasting through time), anachronism, synchronize, chronicle, chronometer.",
  der: ["chronology", "chronic", "anachronism", "synchronize", "chronicle", "chronometer"],
  ex: {
    g: "Πόσο χρόνο έχεις;",
    r: "Poso hrono ehis?",
    e: "How much time do you have?"
  },
  pattern: "chron- = time. 'Anachronism' = ana (against) + chronos = out of time. 'Synchronize' = syn + chronos = same time.",
  note: "Also means 'year'. Χρόνια πολλά! = Many years! (birthday/New Year greeting)."
}, {
  g: "σήμερα",
  rom: "simera",
  pron: "SI-me-ra",
  meaning: "Today",
  sf: "Time",
  etym: "σήμε (this) + ἡμέρα (day). Root hemer- = day → ephemeral (epi + hemer + al = lasting one day), Ephemeris.",
  der: ["ephemeral", "Ephemeris"],
  ex: {
    g: "Σήμερα είναι Δευτέρα.",
    r: "Simera einai Deftera.",
    e: "Today is Monday."
  },
  pattern: "ἡμέρα (day) also appears in καλημέρα (good day). 'Ephemeral' = epi (on/upon) + hemera = lasting only a day.",
  note: "Today's word contains the same 'day' root as the morning greeting."
}, {
  g: "αύριο",
  rom: "avrio",
  pron: "AV-rio",
  meaning: "Tomorrow",
  sf: "Time",
  etym: "Ancient αὔριον. Related to αὔρα (morning breeze, air) → aura. The day that comes with the morning air.",
  der: ["aura", "aurora (dawn)"],
  ex: {
    g: "Τα λέμε αύριο!",
    r: "Ta leme avrio!",
    e: "See you tomorrow!"
  },
  pattern: "μεθαύριο = day after tomorrow. μετ- = after/beyond → metamorphosis (change in form), metabolism.",
  note: "Τα λέμε = lit. 'we'll say them' = casual 'talk soon / see you'."
}, {
  g: "τώρα",
  rom: "tora",
  pron: "TO-ra",
  meaning: "Now",
  sf: "Time",
  etym: "From ancient τανῦν (now). Core deictic (pointing) word. αμέσως (immediately) = α- (not) + μέσος (middle) = no middle pause.",
  der: ["mesosphere", "Mediterranean (medius=middle+terra)", "Mesopotamia"],
  ex: {
    g: "Τώρα! Αμέσως!",
    r: "Tora! Amesos!",
    e: "Now! Immediately!"
  },
  pattern: "μέσος = middle → Mediterranean = medi (middle, Latin) + terra (land) = middle of the land/sea.",
  note: "αμέσως is the intensifier — 'right now, no pause in between'."
}, {
  g: "ώρα",
  rom: "ora",
  pron: "O-ra",
  meaning: "Hour / Time / O'clock",
  sf: "Time",
  etym: "Ancient ὥρα (season, period, time). Root hor- = horoscope (hour-watcher), horology (study of timekeeping), hora (dance at the hour of celebration).",
  der: ["horoscope", "horology", "hora"],
  ex: {
    g: "Τι ώρα είναι;",
    r: "Ti ora einai?",
    e: "What time is it?"
  },
  pattern: "'Horoscope' = ὥρα (hour) + σκοπέω (I watch) = watching the hour of birth. Horology = science of measuring time.",
  note: "Essential question: Τι ώρα είναι; = What time is it?"
},
// ── CORE VERBS ───────────────────────────────────────────────────────────
{
  g: "είμαι",
  rom: "eime",
  pron: "EI-me",
  meaning: "I am (to be)",
  sf: "Core Verbs",
  etym: "Ancient εἰμί. Related to Sanskrit 'asmi' and English 'is'. Root es-/is- = the most ancient verb in Indo-European languages.",
  der: ["is, are, am (same ancient root)"],
  ex: {
    g: "Είμαι Αγγλος. / Είμαι καλά.",
    r: "Eime Anglos. / Eime kala.",
    e: "I am English. / I am fine."
  },
  pattern: "Full conjugation: είμαι / είσαι / είναι / είμαστε / είστε / είναι. Note: 3rd sg = 3rd pl (both είναι).",
  note: "The εί- prefix stays constant across all forms — use it as your anchor."
}, {
  g: "θέλω",
  rom: "thelo",
  pron: "THE-lo",
  meaning: "I want / I wish",
  sf: "Core Verbs",
  etym: "Ancient θέλω/ἐθέλω (to will, wish). Note: θ = /th/ as in 'think'. Regular -ω verb with full conjugation.",
  der: ["thelema (will/desire, in philosophy)"],
  ex: {
    g: "Θέλω νερό. / Τι θέλεις;",
    r: "Thelo nero. / Ti thelis?",
    e: "I want water. / What do you want?"
  },
  pattern: "Regular -ω pattern: θέλω / θέλεις / θέλει / θέλουμε / θέλετε / θέλουν.",
  note: "Most useful verb for beginners. Θέλω + noun = I want [noun]."
}, {
  g: "έχω",
  rom: "echo",
  pron: "E-ho",
  meaning: "I have",
  sf: "Core Verbs",
  etym: "Ancient ἔχω (to have, hold). Root ech- → echo (the nymph who could only repeat = 'holds onto' sounds). Also: scheme from σχῆμα (shape held).",
  der: ["echo", "scheme (from σχῆμα)"],
  ex: {
    g: "Έχω μία ερώτηση.",
    r: "Echo mia erotisi.",
    e: "I have a question."
  },
  pattern: "Regular -ω: έχω / έχεις / έχει / έχουμε / έχετε / έχουν. Also forms compound past tenses.",
  note: "Έχω πάει = I have gone. Έχω φάει = I have eaten (present perfect)."
}, {
  g: "πηγαίνω / πάω",
  rom: "pigeno / pao",
  pron: "pi-GE-no / PA-o",
  meaning: "I go",
  sf: "Core Verbs",
  etym: "Ancient πηγαίνω, from πηγή (spring/source of water — a place you go to). Shorter colloquial form πάω used interchangeably.",
  der: ["pelagic (open sea, same movement concept)"],
  ex: {
    g: "Πάμε! / Πού πας;",
    r: "Pame! / Pou pas?",
    e: "Let's go! / Where are you going?"
  },
  pattern: "Πάμε! = 1st person plural = 'Let's go!' / 'Shall we?' — the most used short phrase in Greek.",
  note: "Two forms (πηγαίνω / πάω) used interchangeably — πάω is shorter and more colloquial."
}, {
  g: "λέω",
  rom: "leo",
  pron: "LE-o",
  meaning: "I say / I tell",
  sf: "Core Verbs",
  etym: "Ancient λέγω (to say, pick, gather). Root leg-/log-/lex- → legend, lexicon, dialect, dyslexia, lecture, logic, logos, catalogue.",
  der: ["legend", "lexicon", "dialect", "dyslexia", "lecture", "logic", "logos", "catalogue", "epilogue"],
  ex: {
    g: "Τι λες; / Τα λέμε!",
    r: "Ti les? / Ta leme!",
    e: "What do you say? / See you later!"
  },
  pattern: "'Catalogue' = kata + logos = complete ordered listing. '-logy' in every science word comes from λόγος (from this verb).",
  note: "Τι λες; = 'What's up? / Really?' Τα λέμε = see you later (lit. 'we'll talk')."
}, {
  g: "βλέπω",
  rom: "vlepo",
  pron: "VLE-po",
  meaning: "I see / I watch",
  sf: "Core Verbs",
  etym: "Ancient βλέπω. Related seeing root ὁράω → horizon (the seeing-limit), panorama (pan = all + horama = view), diorama.",
  der: ["panorama", "diorama", "horizon", "television (tele+vision, via Latin)"],
  ex: {
    g: "Βλέπω τηλεόραση.",
    r: "Vlepo tileorasi.",
    e: "I watch television."
  },
  pattern: "τηλεόραση (TV) = τηλε (far) + όραση (vision). Root tel- = far → telescope, telephone, television, telepathy.",
  note: "Regular -ω verb. τηλέφωνο = tele + phono (sound) = far-sound."
}, {
  g: "ξέρω",
  rom: "ksero",
  pron: "KSE-ro",
  meaning: "I know",
  sf: "Core Verbs",
  etym: "From Byzantine ξεύρω. Compare English 'know' family via Greek: gnosis → diagnosis, prognosis, agnostic, cognizant.",
  der: ["gnosis", "diagnosis", "prognosis", "agnostic", "cognizant", "recognize"],
  ex: {
    g: "Δεν ξέρω. / Ξέρεις;",
    r: "Den ksero. / Kseris?",
    e: "I don't know. / Do you know?"
  },
  pattern: "Δεν = negation. Δεν + [verb] = not [verb]. Δεν ξέρω, δεν θέλω, δεν έχω. δεν is the universal negator.",
  note: "'Δεν ξέρω' (I don't know) — one of the most useful phrases in any language."
}, {
  g: "μιλώ",
  rom: "milo",
  pron: "mi-LO",
  meaning: "I speak / I talk",
  sf: "Core Verbs",
  etym: "Ancient μιλῶ from μῦθος (story, speech). Root myth- → myth, mythology (μύθος + λόγος). Alternate root: -phemia → euphemia (good speech = euphemism).",
  der: ["myth", "mythology", "euphemism (eu+phemia)", "blasphemy (blas+phemia)"],
  ex: {
    g: "Μιλάτε αγγλικά;",
    r: "Milate anglika?",
    e: "Do you speak English?"
  },
  pattern: "Group 2 verb (-ώ type): μιλώ / μιλάς / μιλά / μιλάμε / μιλάτε / μιλάνε. Note -ά- stress pattern.",
  note: "Essential phrase: Μιλάτε αγγλικά; = Do you speak English? (formal/plural)"
}, {
  g: "τρώω",
  rom: "troo",
  pron: "TRO-o",
  meaning: "I eat",
  sf: "Core Verbs",
  etym: "Ancient τρώγω (to gnaw, eat). Root trag- → tragedian (one who eats goats?), troglodyte (cave-eater, cave-dweller).",
  der: ["tragedy (tragos=goat + ode=song, goat-song)", "troglodyte"],
  ex: {
    g: "Τι τρως; / Τρώμε μαζί!",
    r: "Ti tros? / Trome mazi!",
    e: "What are you eating? / Let's eat together!"
  },
  pattern: "μαζί = together (same root as 'mass/massive'). μαζί connects to συν- words: all mean 'together'.",
  note: "Irregular conjugation: τρώω / τρως / τρώει / τρώμε / τρώτε / τρώνε."
},
// ── PEOPLE & BODY ────────────────────────────────────────────────────────
{
  g: "άνθρωπος",
  rom: "anthropos",
  pron: "AN-thro-pos",
  meaning: "Human being / Person",
  sf: "People",
  etym: "Ancient ἄνθρωπος. Root anthrop- → anthropology, misanthrope (human-hater), philanthropist, anthropomorphic, anthropocene.",
  der: ["anthropology", "misanthrope", "philanthropist", "anthropomorphic", "anthropocene"],
  ex: {
    g: "Κάθε άνθρωπος.",
    r: "Kathe anthropos.",
    e: "Every person."
  },
  pattern: "anthrop- = human. Any 'anthropo-' or '-anthropy' English word derives from this exact word.",
  note: "Masculine: ο άνθρωπος. Plural: οι άνθρωποι."
}, {
  g: "καρδιά",
  rom: "kardia",
  pron: "kar-DIA",
  meaning: "Heart",
  sf: "Body",
  etym: "Ancient καρδία. Root cardio- → cardiology, cardiac, cardiovascular, pericardium, electrocardiogram (ECG/EKG).",
  der: ["cardiology", "cardiac", "cardiovascular", "electrocardiogram", "pericardium"],
  ex: {
    g: "Η καρδιά μου.",
    r: "I kardia mou.",
    e: "My heart."
  },
  pattern: "cardio- = heart in all medical/fitness contexts. ECG = electro + cardio + gram. Pericardium = peri (around) + cardium.",
  note: "Feminine: η καρδιά. Also idiomatically: από καρδιάς = from the heart."
}, {
  g: "κεφάλι",
  rom: "kefali",
  pron: "ke-FA-li",
  meaning: "Head",
  sf: "Body",
  etym: "Ancient κεφαλή. Root cephal(o)- → cephalopod (head-foot = octopus/squid), encephalitis, encephalogram, hydrocephalus.",
  der: ["cephalopod", "encephalitis", "encephalogram", "hydrocephalus", "bicephalous"],
  ex: {
    g: "Με πονάει το κεφάλι.",
    r: "Me ponai to kefali.",
    e: "My head hurts."
  },
  pattern: "Cephalopods (squid, octopus) = head + feet = legs coming out of the head. Encephalon = en + cephalon = in-head = brain.",
  note: "Neuter: το κεφάλι."
}, {
  g: "χέρι",
  rom: "heri",
  pron: "HE-ri",
  meaning: "Hand / Arm",
  sf: "Body",
  etym: "Ancient χείρ (kheir). Root chir(o)- → chiropractor (hand-practitioner), chirography (hand-writing), chirurgeon → surgeon.",
  der: ["chiropractor", "chirography", "surgeon (from chirurgeon = hand-worker)"],
  ex: {
    g: "Δώσε μου το χέρι.",
    r: "Dose mou to heri.",
    e: "Give me your hand."
  },
  pattern: "'Surgeon' = from χειρ + εργον (work) = 'hand work'. Surgery is literally 'working with the hands'.",
  note: "Neuter: το χέρι. Covers both hand and arm in Greek."
},
// ── NATURE ───────────────────────────────────────────────────────────────
{
  g: "ήλιος",
  rom: "ilios",
  pron: "I-li-os",
  meaning: "Sun",
  sf: "Nature",
  etym: "Ancient ἥλιος. Root helio- → heliocentric, heliograph, helium (found in solar spectrum before on Earth, named for ήλιος), heliotrope.",
  der: ["heliocentric", "heliograph", "helium", "heliotrope", "helipad"],
  ex: {
    g: "Ο ήλιος λάμπει.",
    r: "O ilios lampei.",
    e: "The sun shines."
  },
  pattern: "Helium was first detected in the sun's spectrum in 1868 — named after ήλιος before it was found on Earth.",
  note: "Masculine: ο ήλιος."
}, {
  g: "θάλασσα",
  rom: "thalassa",
  pron: "THA-la-sa",
  meaning: "Sea",
  sf: "Nature",
  etym: "Ancient θάλασσα. Root thalass(o)- → thalassotherapy (sea therapy), thalassemia (blood disease common in sea-adjacent populations), thalassophobia.",
  der: ["thalassotherapy", "thalassemia", "thalassophobia", "thalassocracy"],
  ex: {
    g: "Πάμε θάλασσα!",
    r: "Pame thalassa!",
    e: "Let's go to the sea!"
  },
  pattern: "Thalassemia = named because it was first studied in Mediterranean (sea-adjacent) populations. θάλασσα + αίμα (blood) = sea blood.",
  note: "Feminine: η θάλασσα."
}, {
  g: "γη / γης",
  rom: "yi",
  pron: "YI",
  meaning: "Earth / Land / Ground",
  sf: "Nature",
  etym: "Ancient γῆ (Gaia). Root geo- → geography (earth-writing), geology (earth-study), geometry (earth-measuring), geopolitics, geocentric.",
  der: ["geography", "geology", "geometry", "geopolitics", "geocentric", "geothermal"],
  ex: {
    g: "Η γη μας.",
    r: "I yi mas.",
    e: "Our earth / Our land."
  },
  pattern: "'Geometry' = γεω + μετρία = measuring the earth (its ancient purpose was land surveying). geo- = earth in all sciences.",
  note: "Same root as Gaia (goddess of Earth). Feminine: η γη."
}, {
  g: "φως",
  rom: "fos",
  pron: "FOS",
  meaning: "Light",
  sf: "Nature",
  etym: "Ancient φῶς (stem: φωτ-). Root phot(o)- → photograph (light-writing), photosynthesis, photon, phosphorus (light-bearer), photovoltaic.",
  der: ["photograph", "photosynthesis", "photon", "phosphorus", "telephoto", "photovoltaic"],
  ex: {
    g: "Άναψε το φως!",
    r: "Anapse to fos!",
    e: "Turn on the light!"
  },
  pattern: "'Photography' = φωτο (light) + γραφία (writing) = writing with light. Phosphorus = φῶς + φέρω (carry) = light-bearer.",
  note: "Neuter: το φως. Irregular genitive: φωτός."
}, {
  g: "αέρας",
  rom: "aeras",
  pron: "A-e-ras",
  meaning: "Air / Wind",
  sf: "Nature",
  etym: "Ancient ἀήρ (aer). Root aer(o)- → aerodynamics, aerosol, aerobic (living in air), aerospace, aeroplane → airplane.",
  der: ["aerodynamics", "aerosol", "aerobic", "aerospace", "aeronautics"],
  ex: {
    g: "Φρέσκος αέρας.",
    r: "Freskos aeras.",
    e: "Fresh air."
  },
  pattern: "'Aerobic' = living in air (vs. anaerobic = an + aer + bios = without air life). All aviation English uses aero-.",
  note: "Masculine: ο αέρας."
},
// ── PLACES & TRAVEL ──────────────────────────────────────────────────────
{
  g: "πόλη",
  rom: "poli",
  pron: "PO-li",
  meaning: "City",
  sf: "Places",
  etym: "Ancient πόλις (polis). Root poli(s)- → metropolis (mother-city), cosmopolitan, acropolis (high-city), police, policy, politics, politician.",
  der: ["metropolis", "cosmopolitan", "acropolis", "police", "policy", "politics", "politician"],
  ex: {
    g: "Μεγάλη πόλη.",
    r: "Megali poli.",
    e: "A big city."
  },
  pattern: "polis = city → ALL 'political' English vocabulary comes from here. Police = those maintaining the city. Politics = the art of running the polis.",
  note: "Feminine: η πόλη. Acropolis = ἄκρος (top) + πόλις = the high city."
}, {
  g: "δρόμος",
  rom: "dromos",
  pron: "DRO-mos",
  meaning: "Road / Street / Race",
  sf: "Places",
  etym: "Ancient δρόμος (running, racecourse). Root drom- → dromedary (fast-running camel), syndrome (symptoms running together), hippodrome, palindrome.",
  der: ["dromedary", "syndrome", "hippodrome", "velodrome", "palindrome"],
  ex: {
    g: "Αυτός ο δρόμος.",
    r: "Aftos o dromos.",
    e: "This road/street."
  },
  pattern: "'Syndrome' = συν (together) + δρόμος (running) = symptoms 'running together'. Palindrome = palin (again) + dromos = runs back again.",
  note: "Masculine: ο δρόμος. Also means 'race' or 'course'."
}, {
  g: "σχολείο",
  rom: "sholio",
  pron: "sho-LI-o",
  meaning: "School",
  sf: "Places",
  etym: "Ancient σχολή (leisure, free time, discussion). Root schol- → school, scholar, scholastic. Schools were originally 'leisure' — free time for thinking.",
  der: ["school", "scholar", "scholastic", "scholarship"],
  ex: {
    g: "Πηγαίνω στο σχολείο.",
    r: "Pigeno sto sholio.",
    e: "I go to school."
  },
  pattern: "Ancient schola = free time for intellectual discussion → became the institution. Scholar = one who has schola (leisure for study).",
  note: "Neuter: το σχολείο."
}, {
  g: "εκκλησία",
  rom: "eklisia",
  pron: "ek-li-SI-a",
  meaning: "Church / Assembly",
  sf: "Places",
  etym: "ἐκ (out) + καλέω (to call) = 'those called out/together'. Root: ecclesiastical, ecclesia. Same verb καλέω in παρακαλώ and καλημέρα (καλ-).",
  der: ["ecclesiastical", "ecclesia", "Ecclesiastes"],
  ex: {
    g: "Η εκκλησία του χωριού.",
    r: "I eklisia tou horiou.",
    e: "The village church."
  },
  pattern: "ek- (out) + kaleo (call) = called out. Same root as παρακαλώ: para + kaleo. Both involve 'calling'. Ecclesiastes = preacher = one who speaks to the assembly.",
  note: "Originally a civic assembly (Athens). Christianity adopted the term for the congregation."
},
// ── FOOD & DRINK ─────────────────────────────────────────────────────────
{
  g: "νερό",
  rom: "nero",
  pron: "ne-RO",
  meaning: "Water",
  sf: "Food & Drink",
  etym: "Byzantine Greek from ναρόν (flowing). Ancient form: ὕδωρ (hydor) → hydrate, hydrant, hydrogen, hydraulic, hydroelectric.",
  der: ["hydrate", "hydrant", "hydrogen", "hydraulic", "hydroelectric"],
  ex: {
    g: "Ένα νερό, παρακαλώ.",
    r: "Ena nero, parakalo.",
    e: "One water, please."
  },
  pattern: "Modern Greek replaced the ancient 'hydro' form, but English preserved it in all scientific vocabulary.",
  note: "Neuter: το νερό."
}, {
  g: "καφές",
  rom: "kafes",
  pron: "ka-FES",
  meaning: "Coffee",
  sf: "Food & Drink",
  etym: "Via Arabic qahwa → Ottoman Turkish kahve → Greek καφές. English 'coffee' and 'café' took the same Ottoman route. A shared Mediterranean loanword.",
  der: ["coffee", "café", "caffeine"],
  ex: {
    g: "Έναν ελληνικό καφέ.",
    r: "Enan eliniko kafe.",
    e: "A Greek coffee."
  },
  pattern: "Loanword pattern: many modern Greek everyday words came via Ottoman Turkish (καφές, σαλάτα, etc.). Not all Greek words are ancient.",
  note: "Greek coffee (ελληνικός καφές) = unfiltered, strong. Previously called 'Turkish coffee'."
}, {
  g: "κρασί",
  rom: "krasi",
  pron: "kra-SI",
  meaning: "Wine",
  sf: "Food & Drink",
  etym: "Ancient κρᾶσις (mixing — wine was diluted with water). Root krasis → idiosyncrasy (ἴδιος + σύν + κρᾶσις = your personal mixture of traits).",
  der: ["idiosyncrasy", "crasis (grammar: blending of sounds)"],
  ex: {
    g: "Ένα ποτήρι κρασί.",
    r: "Ena potiri krasi.",
    e: "A glass of wine."
  },
  pattern: "'Idiosyncrasy' = ἴδιος (own/personal) + σύν (together) + κρᾶσις (mixture) = your unique personal blend.",
  note: "Neuter: το κρασί. Ancient Greeks mixed wine with water — drinking undiluted was considered barbaric."
}, {
  g: "ψωμί",
  rom: "psomi",
  pron: "pso-MI",
  meaning: "Bread",
  sf: "Food & Drink",
  etym: "From ψώχω (to crumble). Ψ = /ps/ cluster. Note: ancient form ἄρτος (artos) survives in artisanal, and liturgically (artos = sacramental bread).",
  der: ["psychology (ψυχή = soul)", "pseudonym (ψευδο-)", "artisan (via artos?)"],
  ex: {
    g: "Θέλω ψωμί.",
    r: "Thelo psomi.",
    e: "I want bread."
  },
  pattern: "Ψ = always /ps/ both sounds. ψωμί (bread), ψυχή (soul), ψέμα (lie) — all start with this cluster.",
  note: "Neuter: το ψωμί."
}, {
  g: "ελιά",
  rom: "elia",
  pron: "e-LIA",
  meaning: "Olive / Olive tree",
  sf: "Food & Drink",
  etym: "Ancient ἐλαία. Greek ἔλαιον (olive oil) → Latin oleum → English oil, olive, oleic. Petroleum = petra (rock) + oleum (oil, from Greek).",
  der: ["oil (from oleum ← ἔλαιον)", "olive", "oleic", "petroleum", "oleander"],
  ex: {
    g: "Ελληνικές ελιές.",
    r: "Elinikes elies.",
    e: "Greek olives."
  },
  pattern: "'Petroleum' = πέτρα (rock/stone) + Latin oleum (oil, from Greek ἔλαιον) = rock oil. Greek olive root reached English through Latin.",
  note: "The olive tree (ελιά) is the symbol of Athens — given by Athena in the founding myth."
},
// ── BIG CONCEPTS ─────────────────────────────────────────────────────────
{
  g: "λόγος",
  rom: "logos",
  pron: "LO-ghos",
  meaning: "Word / Reason / Study",
  sf: "Concepts",
  etym: "Ancient λόγος = word, reason, discourse. Root log(o)- = the source of ALL English '-logy' suffixes. Biology, psychology, theology = 'the logos/study of X'.",
  der: ["logic", "logos", "biology", "psychology", "theology", "technology", "catalogue", "dialogue", "monologue", "epilogue"],
  ex: {
    g: "Ο λόγος είναι σημαντικός.",
    r: "O logos einai simantikos.",
    e: "The reason is important."
  },
  pattern: "Every '-logy' = logos. Bio+logy = life-study. Psycho+logy = soul-study. Theo+logy = god-study. This one word generates hundreds of English terms.",
  note: "Masculine: ο λόγος. Also = speech, ratio (in math), and 'the Word' in John 1:1."
}, {
  g: "ζωή",
  rom: "zoi",
  pron: "zo-I",
  meaning: "Life",
  sf: "Concepts",
  etym: "Ancient ζωή. Root zo(o)- → zoology (study of living things), protozoa (first life), zoo, zodiac (circle of living beings), enzyme (en + zyme = active in living).",
  der: ["zoology", "zoo", "protozoa", "zodiac", "enzyme", "azoic (without life)"],
  ex: {
    g: "Η ζωή είναι όμορφη.",
    r: "I zoi einai omorfi.",
    e: "Life is beautiful."
  },
  pattern: "zoo- = living things. 'Enzyme' = ἐν (in) + ζύμη (leaven) = active life-agent. 'Zodiac' = circle of living beings (animal constellations).",
  note: "Feminine: η ζωή. Zoe is a common Greek name meaning 'life'."
}, {
  g: "δημοκρατία",
  rom: "dimokratia",
  pron: "di-mo-kra-TI-a",
  meaning: "Democracy",
  sf: "Concepts",
  etym: "δῆμος (people/district) + κράτος (power/rule). Root dem- → demographic, epidemic, pandemic. Root -cracy → aristocracy, bureaucracy, autocracy, theocracy.",
  der: ["demographic", "epidemic", "pandemic", "aristocracy", "bureaucracy", "autocracy", "theocracy"],
  ex: {
    g: "Η δημοκρατία γεννήθηκε στην Ελλάδα.",
    r: "I dimokratia yenithike stin Ellada.",
    e: "Democracy was born in Greece."
  },
  pattern: "-cracy = rule/power: demo+cracy, aristo+cracy, bureau+cracy, auto+cracy, theo+cracy. 'Pandemic' = pan (all) + demos (people) = affects all people.",
  note: "Invented in Athens ~508 BCE. δῆμος also = district, community."
}, {
  g: "φιλοσοφία",
  rom: "filosofia",
  pron: "fi-lo-so-FI-a",
  meaning: "Philosophy",
  sf: "Concepts",
  etym: "φίλος (loving/fond) + σοφία (wisdom). Root phil(o)- → philharmonic, bibliophile. Root soph- → sophisticated, sophomore, sophistry.",
  der: ["philosophy", "sophisticated", "sophomore", "sophist", "sophistry", "Sophia"],
  ex: {
    g: "Η φιλοσοφία του Αριστοτέλη.",
    r: "I filosofia tou Aristoteli.",
    e: "The philosophy of Aristotle."
  },
  pattern: "Sophomore = sophos (wise) + moros (foolish) = 'wise fool' — the 2nd-year student who thinks they know everything.",
  note: "φιλο- (love of) + σοφία (wisdom). The word itself embodies Greek intellectual culture."
}, {
  g: "οικονομία",
  rom: "ikonomia",
  pron: "iko-no-MI-a",
  meaning: "Economy / Household management",
  sf: "Concepts",
  etym: "οἶκος (house/household) + νόμος (law/rule/management). Root eco-/oiko- → ecology (household-study), ecosystem, economy.",
  der: ["economy", "economics", "ecology", "ecosystem", "ecosphere"],
  ex: {
    g: "Η οικονομία της χώρας.",
    r: "I ikonomia tis horas.",
    e: "The country's economy."
  },
  pattern: "'Ecology' = οἶκος + λόγος = the study of the natural household. 'Economy' = managing the household. Both share the 'home' root.",
  note: "Feminine: η οικονομία. Ancient meaning: household management → expanded to city/state/national economy."
}];

// ── GRAMMAR ───────────────────────────────────────────────────────────────────
const GRAMMAR = [{
  id: "articles",
  title: "The 3-Gender Article System",
  sub: "Noun classifiers — always learn article + noun together",
  rule: "Every Greek noun has a gender: masculine (ο), feminine (η), or neuter (το). The definite article always reveals it. Rule: never learn a noun without its article.",
  table: {
    heads: ["Article", "Gender", "Typical Endings", "Example"],
    rows: [{
      cells: ["ο (o)", "Masculine", "-ος, -ας, -ης", "ο άντρας — the man"],
      types: ["mono", "", "mono", "greek"]
    }, {
      cells: ["η (i)", "Feminine", "-α, -η", "η γυναίκα — the woman"],
      types: ["mono", "", "mono", "greek"]
    }, {
      cells: ["το (to)", "Neuter", "-ο, -ι", "το παιδί — the child"],
      types: ["mono", "", "mono", "greek"]
    }]
  },
  insight: "Learn every noun as [ARTICLE + NOUN]: not 'σπίτι' but 'το σπίτι'. The article is part of the vocabulary item, not a separate word.",
  logic: "Unlike English 'the' (one form for all), Greek has 3 articles as gender classifiers. Knowing the article tells you the noun's grammatical behavior throughout the language."
}, {
  id: "verbs",
  title: "Present Tense: Regular -ω Verbs (Group 1)",
  sub: "The core conjugation pattern — applies to the vast majority of verbs",
  rule: "The verb stem stays constant; only the ending changes to mark person and number. This pattern covers all regular Group 1 verbs with no exceptions.",
  table: {
    heads: ["Person", "Ending", "γράφ-ω (write)", "βλέπ-ω (see)", "Meaning"],
    rows: [{
      cells: ["1st sg (I)", "-ω", "γράφω", "βλέπω", "I write / see"],
      types: ["", "mono", "greek", "greek", ""]
    }, {
      cells: ["2nd sg (You)", "-εις", "γράφεις", "βλέπεις", "You write / see"],
      types: ["", "mono", "greek", "greek", ""]
    }, {
      cells: ["3rd sg (He/She)", "-ει", "γράφει", "βλέπει", "He/She writes / sees"],
      types: ["", "mono", "greek", "greek", ""]
    }, {
      cells: ["1st pl (We)", "-ουμε", "γράφουμε", "βλέπουμε", "We write / see"],
      types: ["", "mono", "greek", "greek", ""]
    }, {
      cells: ["2nd pl (You pl)", "-ετε", "γράφετε", "βλέπετε", "You (pl) write / see"],
      types: ["", "mono", "greek", "greek", ""]
    }, {
      cells: ["3rd pl (They)", "-ουν", "γράφουν", "βλέπουν", "They write / see"],
      types: ["", "mono", "greek", "greek", ""]
    }]
  },
  insight: "The stem (γράφ-, βλέπ-) never changes in present tense. Every regular -ω verb follows this exact pattern — learn the stem, apply endings mechanically.",
  logic: "Structural pattern: singular endings are short (-ω, -εις, -ει). Plural endings are longer and vowel-rich (-ουμε, -ετε, -ουν). Learn the ending as 6 slots, fill any stem."
}, {
  id: "tobe",
  title: "Είμαι — To Be (Irregular but Learnable)",
  sub: "Most-used verb — 6 short forms with a consistent εί- prefix",
  rule: "Είμαι (to be) is irregular but all 6 forms start with εί-. High frequency in real speech means repetition comes naturally.",
  table: {
    heads: ["Person", "Form", "Pronunciation", "Example"],
    rows: [{
      cells: ["I", "είμαι", "EE-me", "Είμαι καλά. (I am well.)"],
      types: ["", "greek", "mono", "greek"]
    }, {
      cells: ["You", "είσαι", "EE-se", "Είσαι εδώ; (Are you here?)"],
      types: ["", "greek", "mono", "greek"]
    }, {
      cells: ["He/She/It", "είναι", "EE-ne", "Είναι φίλος μου. (He is my friend.)"],
      types: ["", "greek", "mono", "greek"]
    }, {
      cells: ["We", "είμαστε", "EE-mas-te", "Είμαστε έτοιμοι. (We are ready.)"],
      types: ["", "greek", "mono", "greek"]
    }, {
      cells: ["You (pl/formal)", "είστε", "EE-ste", "Είστε καλά; (Are you all well?)"],
      types: ["", "greek", "mono", "greek"]
    }, {
      cells: ["They", "είναι", "EE-ne", "Είναι εδώ. (They are here.)"],
      types: ["", "greek", "mono", "greek"]
    }]
  },
  insight: "3rd person singular AND plural = same form (είναι). Context tells you which. The εί- prefix never changes — use it as your anchor across all 6 forms.",
  logic: "Pattern within irregularity: εί- + μαι / σαι / ναι / μαστε / στε / ναι. Focus on the suffixes: -μαι (I), -σαι (you), -ναι (he/they), -μαστε (we), -στε (y'all)."
}, {
  id: "negation",
  title: "Negation with Δεν",
  sub: "Universal negation — one word, zero conjugation",
  rule: "δεν placed before any verb negates it. No changes to the verb required. δεν is invariable — the same regardless of person, tense, or verb.",
  table: {
    heads: ["Positive", "Negative", "Pattern"],
    rows: [{
      cells: ["Ξέρω. (I know.)", "Δεν ξέρω. (I don't know.)", "δεν + verb"],
      types: ["greek", "greek", ""]
    }, {
      cells: ["Θέλω. (I want.)", "Δεν θέλω. (I don't want.)", "δεν + verb"],
      types: ["greek", "greek", ""]
    }, {
      cells: ["Μιλάω ελληνικά. (I speak Greek.)", "Δεν μιλάω ελληνικά. (I don't speak Greek.)", "δεν + verb"],
      types: ["greek", "greek", ""]
    }, {
      cells: ["Είμαι έτοιμος. (I am ready.)", "Δεν είμαι έτοιμος. (I'm not ready.)", "δεν + verb"],
      types: ["greek", "greek", ""]
    }]
  },
  insight: "Unlike English (which needs 'do/does/did not'), Greek simply puts δεν before the verb. This is simpler than English negation.",
  logic: "δεν derives from ancient οὐδέν (nothing). μην is used with commands and subjunctive: Μην πας! (Don't go!). δεν = statement negation; μην = command negation."
}, {
  id: "questions",
  title: "Question Formation — No Inversion Needed",
  sub: "Same word order as statements; intonation + ; signals questions",
  rule: "Greek questions use the EXACT same word order as statements. No auxiliary verb ('do'), no word inversion. Rising intonation + the question mark (;) are the only signals.",
  table: {
    heads: ["Statement", "Question", "What changed?"],
    rows: [{
      cells: ["Είσαι καλά. (You are well.)", "Είσαι καλά; (Are you well?)", "Only: ; and rising pitch"],
      types: ["greek", "greek", ""]
    }, {
      cells: ["Έχεις χρόνο. (You have time.)", "Έχεις χρόνο; (Do you have time?)", "No 'do' auxiliary needed"],
      types: ["greek", "greek", ""]
    }, {
      cells: ["—", "Πού είναι το σχολείο; (Where is the school?)", "Question word (πού) goes first"],
      types: ["", "greek", ""]
    }, {
      cells: ["—", "Τι θέλεις; (What do you want?)", "τι (what) at the start"],
      types: ["", "greek", ""]
    }]
  },
  insight: "Unlike English, no word inversion or auxiliary verb needed. Add ; at the end and raise your pitch. That is the complete rule.",
  logic: "Question words → sentence start: πού (where), τι (what), πότε (when), πώς (how), γιατί (why), ποιος/ποια (who), πόσο (how much). Everything else stays in statement order."
}];

// ── HELPERS ───────────────────────────────────────────────────────────────────
const FIELDS = ["All", ...Array.from(new Set(VOCAB.map(v => v.sf)))];
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
function makeOptions(pool, item) {
  const correct = item.meaning;
  const wrongs = shuffle(pool.filter(v => v.meaning !== correct)).slice(0, 3).map(v => v.meaning);
  return shuffle([correct, ...wrongs]);
}
function CellRender(_ref) {
  let text = _ref.text,
    type = _ref.type;
  if (type === "greek") return /*#__PURE__*/React.createElement("td", {
    className: "greek-cell"
  }, text);
  if (type === "mono") return /*#__PURE__*/React.createElement("td", {
    className: "mono-cell"
  }, text);
  return /*#__PURE__*/React.createElement("td", null, text);
}

// ── ALPHABET TAB ──────────────────────────────────────────────────────────────
function AlphabetTab() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sec-hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-title"
  }, "The Greek Alphabet ", /*#__PURE__*/React.createElement("span", {
    className: "count-badge"
  }, "24")), /*#__PURE__*/React.createElement("div", {
    className: "sec-sub"
  }, "Every letter: IPA notation \xB7 phonetic description anchored to English sounds \xB7 cognates")), /*#__PURE__*/React.createElement("div", {
    className: "aban"
  }, /*#__PURE__*/React.createElement("strong", null, "Aphantasia-friendly alphabet learning:"), " Each card gives you a phonetic description anchored to English sounds you already know, plus English cognates \u2014 no shape-based mnemonics.", /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "IPA notation for precision"), /*#__PURE__*/React.createElement("li", null, "English sound comparison (e.g. \"like 'th' in 'think', not 'this'\")"), /*#__PURE__*/React.createElement("li", null, "English words that use the same sound or derive from the letter name"))), /*#__PURE__*/React.createElement("div", {
    className: "agrid"
  }, ALPHABET.map((l, i) => /*#__PURE__*/React.createElement("div", {
    className: "acard",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "arow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aU"
  }, l.U), /*#__PURE__*/React.createElement("span", {
    className: "aL"
  }, l.L), /*#__PURE__*/React.createElement("span", {
    className: "aname"
  }, l.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "aipa"
  }, l.ipa)), /*#__PURE__*/React.createElement("div", {
    className: "adesc"
  }, l.desc), /*#__PURE__*/React.createElement("div", {
    className: "acog"
  }, "\u2192 ", l.cog)))));
}

// ── VOCAB TAB ─────────────────────────────────────────────────────────────────
function VocabTab() {
  const _useState = useState("All"),
    _useState2 = _slicedToArray(_useState, 2),
    filter = _useState2[0],
    setFilter = _useState2[1];
  const visible = filter === "All" ? VOCAB : VOCAB.filter(v => v.sf === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sec-hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-title"
  }, "Vocabulary ", /*#__PURE__*/React.createElement("span", {
    className: "count-badge"
  }, VOCAB.length, " words")), /*#__PURE__*/React.createElement("div", {
    className: "sec-sub"
  }, "Each word: pronunciation \xB7 etymology \xB7 English derivatives \xB7 example \xB7 learning pattern")), /*#__PURE__*/React.createElement("div", {
    className: "aban"
  }, /*#__PURE__*/React.createElement("strong", null, "No visualization mnemonics."), " Every word connects to your existing semantic knowledge: etymology shows ", /*#__PURE__*/React.createElement("em", null, "why"), " the word means what it means, and English derivatives give you conceptual anchors in vocabulary you already own \u2014 no mental imagery required."), /*#__PURE__*/React.createElement("div", {
    className: "filter-row"
  }, FIELDS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: `fpill${filter === f ? " on" : ""}`,
    onClick: () => setFilter(f)
  }, f, " ", f !== "All" && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .6
    }
  }, "(", VOCAB.filter(v => v.sf === f).length, ")")))), /*#__PURE__*/React.createElement("div", {
    className: "vlist"
  }, visible.map((v, i) => /*#__PURE__*/React.createElement("div", {
    className: "vcard",
    key: v.g + i
  }, /*#__PURE__*/React.createElement("div", {
    className: "vhdr"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vgreek"
  }, v.g), /*#__PURE__*/React.createElement("span", {
    className: "vpron"
  }, v.pron), /*#__PURE__*/React.createElement("span", {
    className: "vfield"
  }, v.sf), /*#__PURE__*/React.createElement("span", {
    className: "vmeaning"
  }, v.meaning)), /*#__PURE__*/React.createElement("div", {
    className: "vbody"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "vlabel"
  }, "Etymology & Root"), /*#__PURE__*/React.createElement("div", {
    className: "vetym"
  }, v.etym), v.der.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "dtags"
  }, v.der.map((d, j) => /*#__PURE__*/React.createElement("span", {
    className: "dtag",
    key: j
  }, d)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "vlabel"
  }, "Example"), /*#__PURE__*/React.createElement("div", {
    className: "vex"
  }, /*#__PURE__*/React.createElement("span", {
    className: "exg"
  }, v.ex.g), /*#__PURE__*/React.createElement("span", {
    className: "exr"
  }, v.ex.r), /*#__PURE__*/React.createElement("span", {
    className: "exe"
  }, v.ex.e)), v.note && /*#__PURE__*/React.createElement("div", {
    className: "vnote"
  }, "\u2139 ", v.note)), /*#__PURE__*/React.createElement("div", {
    className: "vpattern"
  }, /*#__PURE__*/React.createElement("span", null, "\u25B8 Pattern: "), v.pattern))))));
}

// ── GRAMMAR TAB ───────────────────────────────────────────────────────────────
function GrammarTab() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sec-hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-title"
  }, "Grammar Patterns ", /*#__PURE__*/React.createElement("span", {
    className: "count-badge"
  }, GRAMMAR.length, " rules")), /*#__PURE__*/React.createElement("div", {
    className: "sec-sub"
  }, "Rules as logical systems \u2014 not memorization, but pattern recognition")), /*#__PURE__*/React.createElement("div", {
    className: "aban"
  }, /*#__PURE__*/React.createElement("strong", null, "Pattern-first grammar for analytical learners."), " Each rule is presented as a logical system: the rule itself, a reference table, a Key Insight (what matters most), and a Logic Pattern (why the rule works). No stories, no mnemonics \u2014 just structure."), /*#__PURE__*/React.createElement("div", {
    className: "glist"
  }, GRAMMAR.map(g => /*#__PURE__*/React.createElement("div", {
    className: "gcard",
    key: g.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "ghdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gtitle"
  }, g.title), /*#__PURE__*/React.createElement("div", {
    className: "gsub"
  }, g.sub)), /*#__PURE__*/React.createElement("div", {
    className: "gbody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grule"
  }, g.rule), /*#__PURE__*/React.createElement("div", {
    className: "gtw"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, g.table.heads.map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, g.table.rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, row.cells.map((cell, ci) => /*#__PURE__*/React.createElement(CellRender, {
    key: ci,
    text: cell,
    type: row.types[ci]
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "insight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ilabel"
  }, "\u2B21 Key Insight"), g.insight), /*#__PURE__*/React.createElement("div", {
    className: "logic"
  }, /*#__PURE__*/React.createElement("span", {
    className: "llabel"
  }, "\u25C8 Logic Pattern"), g.logic))))));
}

// ── PERSISTENCE HELPERS ───────────────────────────────────────────────────────
const STORE_KEY = "greek-pwa-state-v1";
function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
function saveState(patch) {
  try {
    const prev = loadState() || {};
    localStorage.setItem(STORE_KEY, JSON.stringify({
      ...prev,
      ...patch
    }));
  } catch {/* storage full or unavailable */}
}
function clearPracticeState() {
  try {
    const prev = loadState() || {};
    const _ = prev.practice,
      rest = _objectWithoutProperties(prev, _excluded);
    localStorage.setItem(STORE_KEY, JSON.stringify(rest));
  } catch {}
}

// ── PRACTICE TAB ──────────────────────────────────────────────────────────────
function PracticeTab() {
  // ── Restore from localStorage on first mount ────────────────────────────
  const saved = useMemo(() => {
    const s = loadState();
    return s && s.practice ? s.practice : null;
  }, []);
  const _useState3 = useState(saved ? saved.catFilter : "All"),
    _useState4 = _slicedToArray(_useState3, 2),
    catFilter = _useState4[0],
    setCatFilter = _useState4[1];
  const _useState5 = useState(saved ? saved.started : false),
    _useState6 = _slicedToArray(_useState5, 2),
    started = _useState6[0],
    setStarted = _useState6[1];
  const _useState7 = useState(saved ? saved.deck : []),
    _useState8 = _slicedToArray(_useState7, 2),
    deck = _useState8[0],
    setDeck = _useState8[1];
  const _useState9 = useState(saved ? saved.qIdx : 0),
    _useState0 = _slicedToArray(_useState9, 2),
    qIdx = _useState0[0],
    setQIdx = _useState0[1];
  const _useState1 = useState(saved ? saved.opts : []),
    _useState10 = _slicedToArray(_useState1, 2),
    opts = _useState10[0],
    setOpts = _useState10[1];
  const _useState11 = useState(saved ? saved.sel : null),
    _useState12 = _slicedToArray(_useState11, 2),
    sel = _useState12[0],
    setSel = _useState12[1];
  const _useState13 = useState(saved ? saved.history : []),
    _useState14 = _slicedToArray(_useState13, 2),
    history = _useState14[0],
    setHistory = _useState14[1];
  const _useState15 = useState(saved ? saved.done : false),
    _useState16 = _slicedToArray(_useState15, 2),
    done = _useState16[0],
    setDone = _useState16[1];
  const _useState17 = useState(!!(saved && saved.started && !saved.done)),
    _useState18 = _slicedToArray(_useState17, 2),
    restored = _useState18[0],
    setRestored = _useState18[1];
  const pool = catFilter === "All" ? VOCAB : VOCAB.filter(v => v.sf === catFilter);

  // ── Persist every meaningful state change ───────────────────────────────
  const persist = useCallback(patch => {
    saveState({
      practice: {
        catFilter,
        started,
        deck,
        qIdx,
        opts,
        sel,
        history,
        done,
        ...patch
      }
    });
  }, [catFilter, started, deck, qIdx, opts, sel, history, done]);
  const startSession = useCallback(() => {
    const d = shuffle(pool);
    const newOpts = makeOptions(pool.length >= 4 ? pool : VOCAB, d[0]);
    setDeck(d);
    setQIdx(0);
    setOpts(newOpts);
    setSel(null);
    setHistory([]);
    setDone(false);
    setStarted(true);
    setRestored(false);
    saveState({
      practice: {
        catFilter,
        started: true,
        deck: d,
        qIdx: 0,
        opts: newOpts,
        sel: null,
        history: [],
        done: false
      }
    });
  }, [pool, catFilter]);
  const handleSelect = useCallback(opt => {
    if (sel !== null) return;
    const correct = opt === deck[qIdx].meaning;
    setSel(opt);
    setHistory(h => {
      const next = [...h, correct];
      persist({
        sel: opt,
        history: next
      });
      return next;
    });
  }, [sel, deck, qIdx, persist]);
  const handleNext = useCallback(() => {
    if (qIdx + 1 >= deck.length) {
      setDone(true);
      persist({
        done: true,
        sel: null
      });
      return;
    }
    const next = qIdx + 1;
    const newOpts = makeOptions(pool.length >= 4 ? pool : VOCAB, deck[next]);
    setQIdx(next);
    setOpts(newOpts);
    setSel(null);
    persist({
      qIdx: next,
      opts: newOpts,
      sel: null
    });
  }, [qIdx, deck, pool, persist]);
  const handleReset = useCallback(() => {
    clearPracticeState();
    setStarted(false);
    setDone(false);
    setSel(null);
    setHistory([]);
    setRestored(false);
  }, []);
  const handleChangeCat = useCallback(f => {
    setCatFilter(f);
    saveState({
      practice: {
        catFilter: f,
        started: false,
        deck: [],
        qIdx: 0,
        opts: [],
        sel: null,
        history: [],
        done: false
      }
    });
  }, []);

  // ── Restore banner (shown at top when resuming mid-session) ─────────────
  const ResumeBanner = restored && started && !done ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14,
      padding: "11px 16px",
      background: "var(--greendim)",
      border: "1px solid rgba(90,170,119,0.25)",
      borderRadius: 10,
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1rem"
    }
  }, "\u21A9"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".88rem",
      fontWeight: 500,
      color: "var(--green)"
    }
  }, "Session resumed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: ".78rem",
      color: "var(--muted)"
    }
  }, catFilter !== "All" ? catFilter : "Full deck", " \xB7 question ", qIdx + 1, " of ", deck.length, " · ", history.filter(Boolean).length, " correct so far")), /*#__PURE__*/React.createElement("button", {
    className: "rbtn",
    onClick: () => setRestored(false),
    style: {
      borderColor: "rgba(90,170,119,0.3)",
      color: "var(--green)"
    }
  }, "Dismiss")) : null;
  if (!started) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sec-hdr"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-title"
    }, "Practice"), /*#__PURE__*/React.createElement("div", {
      className: "sec-sub"
    }, "After each answer: etymology and pattern shown \u2014 reinforcing semantic networks, not just right/wrong")), /*#__PURE__*/React.createElement("div", {
      className: "pwrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "aban"
    }, /*#__PURE__*/React.createElement("strong", null, "SDAM-aware practice design:"), " Correct answers alone don't help much if you can't form episodic memories of studying. After each answer, the etymology root and learning pattern are shown \u2014 rebuilding the ", /*#__PURE__*/React.createElement("em", null, "semantic"), " connection each time, which doesn't require autobiographical memory to consolidate."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vlabel",
      style: {
        marginBottom: 8
      }
    }, "Practice by category (optional)"), /*#__PURE__*/React.createElement("div", {
      className: "filter-row"
    }, FIELDS.map(f => /*#__PURE__*/React.createElement("button", {
      key: f,
      className: `fpill${catFilter === f ? " on" : ""}`,
      onClick: () => handleChangeCat(f)
    }, f, " ", f !== "All" ? `(${VOCAB.filter(v => v.sf === f).length})` : `(${VOCAB.length})`)))), /*#__PURE__*/React.createElement("button", {
      className: "nxtbtn",
      onClick: startSession
    }, "Start ", catFilter === "All" ? "Full Practice" : catFilter, " \u2192")));
  }
  if (done) {
    const score = history.filter(Boolean).length;
    const pct = Math.round(score / deck.length * 100);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "sec-hdr"
    }, /*#__PURE__*/React.createElement("div", {
      className: "sec-title"
    }, "Practice")), /*#__PURE__*/React.createElement("div", {
      className: "pwrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "complete"
    }, /*#__PURE__*/React.createElement("h2", null, "\u03A9\u03C1\u03B1\u03AF\u03B1! (Oraia!) \u2014 Well done!"), /*#__PURE__*/React.createElement("div", {
      className: "score-big"
    }, score, "/", deck.length), /*#__PURE__*/React.createElement("p", null, pct >= 80 ? "Strong result — the semantic connections are solidifying." : pct >= 50 ? "Good progress. Review the missed items' etymology sections in the Vocabulary tab." : "Keep cycling — spaced repetition will build these connections over time regardless of autobiographical memory."), /*#__PURE__*/React.createElement("p", null, "For SDAM users: it's normal to need more repetitions than average. The etymology links are semantic anchors that don't depend on remembering a study session \u2014 they just need re-activation."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "nxtbtn",
      onClick: startSession,
      style: {
        flex: 1
      }
    }, "Practice Again \u21BA"), /*#__PURE__*/React.createElement("button", {
      className: "nxtbtn",
      onClick: handleReset,
      style: {
        flex: 1,
        background: "var(--surface)",
        color: "var(--text)",
        border: "1px solid var(--border)"
      }
    }, "Change Category")))));
  }
  const current = deck[qIdx];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sec-hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-title"
  }, "Practice \u2014 ", catFilter), /*#__PURE__*/React.createElement("div", {
    className: "sec-sub"
  }, "Semantic anchors shown after each answer")), /*#__PURE__*/React.createElement("div", {
    className: "pwrap"
  }, ResumeBanner, /*#__PURE__*/React.createElement("div", {
    className: "practice-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scorebar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stext"
  }, qIdx + 1, " / ", deck.length, catFilter !== "All" && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      opacity: .6
    }
  }, " \xB7 ", catFilter)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "snum"
  }, history.filter(Boolean).length, " \u2713"), history.some(h => !h) && /*#__PURE__*/React.createElement("span", {
    className: "snum sbad"
  }, " \xB7 ", history.filter(h => !h).length, " \u2717")), /*#__PURE__*/React.createElement("button", {
    className: "rbtn",
    onClick: handleReset
  }, "\u21A9 Change")), /*#__PURE__*/React.createElement("div", {
    className: "pdots"
  }, deck.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `dot${i < history.length ? history[i] ? " ok" : " bad" : i === qIdx ? " cur" : ""}`
  })))), /*#__PURE__*/React.createElement("div", {
    className: "qcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qlabel"
  }, "What does this mean?"), /*#__PURE__*/React.createElement("div", {
    className: "qword"
  }, current.g), /*#__PURE__*/React.createElement("div", {
    className: "qpron"
  }, current.pron)), /*#__PURE__*/React.createElement("div", {
    className: "opts"
  }, opts.map((opt, i) => {
    let cls = "opt";
    if (sel !== null) {
      if (opt === current.meaning) cls += " correct";else if (opt === sel) cls += " wrong";
    }
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      className: cls,
      onClick: () => handleSelect(opt),
      disabled: sel !== null
    }, opt);
  })), sel !== null && /*#__PURE__*/React.createElement("div", {
    className: "expl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "expl-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "expl-lbl"
  }, sel === current.meaning ? "✓ Correct" : `✗ Answer: ${current.meaning}`)), /*#__PURE__*/React.createElement("div", {
    className: "expl-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "expl-lbl"
  }, "Etymology & Root"), /*#__PURE__*/React.createElement("div", {
    className: "expl-txt"
  }, current.etym)), current.der.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "expl-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "expl-lbl"
  }, "English Derivatives"), /*#__PURE__*/React.createElement("div", {
    className: "expl-tags"
  }, current.der.map((d, j) => /*#__PURE__*/React.createElement("span", {
    className: "dtag",
    key: j
  }, d)))), /*#__PURE__*/React.createElement("div", {
    className: "expl-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "expl-lbl"
  }, "Learning Pattern"), /*#__PURE__*/React.createElement("div", {
    className: "expl-pat"
  }, current.pattern))), sel !== null && /*#__PURE__*/React.createElement("button", {
    className: "nxtbtn",
    onClick: handleNext
  }, qIdx + 1 < deck.length ? "Next →" : "See Results")));
}

// ── METHOD TAB ────────────────────────────────────────────────────────────────
function MethodTab() {
  const methods = [{
    ico: "🔗",
    title: "Etymology Anchors",
    desc: "Every word links to English cognates via shared roots — semantic pegs that don't require visual memory or personal stories."
  }, {
    ico: "◈",
    title: "Pattern Recognition",
    desc: "Grammar is presented as rule-systems with tables, not stories. Learn the pattern once, apply it everywhere."
  }, {
    ico: "🔊",
    title: "Phonetic Precision",
    desc: "IPA + English-sound comparisons for every letter. No 'sounds like something you know' ambiguity — exact phonetic descriptions."
  }, {
    ico: "↺",
    title: "Spaced Repetition",
    desc: "Etymology and patterns shown after each practice answer — re-activating semantic networks, not episodic recall of studying."
  }, {
    ico: "🚫",
    title: "No Visualization",
    desc: "Zero 'picture this word as...' prompts. Zero memory palace techniques. Zero autobiographical hooks. Ever."
  }, {
    ico: "▸",
    title: "Explicit Pattern Labels",
    desc: "Every card labels its pattern explicitly. 'This IS the rule for X' — not buried in an example for you to extract yourself."
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "sec-hdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-title"
  }, "How This App Works for You"), /*#__PURE__*/React.createElement("div", {
    className: "sec-sub"
  }, "Design principles for aphantasia & SDAM learners")), /*#__PURE__*/React.createElement("div", {
    className: "method-grid"
  }, methods.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "mcard on",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "mcard-ico"
  }, m.ico), /*#__PURE__*/React.createElement("div", {
    className: "mcard-title"
  }, m.title), /*#__PURE__*/React.createElement("div", {
    className: "mcard-desc"
  }, m.desc)))), /*#__PURE__*/React.createElement("div", {
    className: "glist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ghdr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gtitle"
  }, "Aphantasia: What Changes in Language Learning"), /*#__PURE__*/React.createElement("div", {
    className: "gsub"
  }, "And what this app does differently")), /*#__PURE__*/React.createElement("div", {
    className: "gbody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grule"
  }, /*#__PURE__*/React.createElement("strong", null, "Aphantasia"), " = no voluntary mental imagery. Visualization-based techniques \u2014 memory palaces, the keyword method ('picture the word as a scene'), shape-based alphabet mnemonics, 'imagine yourself in Greece' immersion cues \u2014 are simply unavailable. This app avoids all of them. Every connection here is semantic (meaning-based) or phonetic (sound-based)."), /*#__PURE__*/React.createElement("div", {
    className: "grule",
    style: {
      borderLeftColor: "var(--gold)"
    }
  }, /*#__PURE__*/React.createElement("strong", null, "SDAM"), " (Severely Deficient Autobiographical Memory) = difficulty forming and recalling personal episodic memories. 'Remember when you studied this last Tuesday' or personal story hooks won't consolidate. This app uses ", /*#__PURE__*/React.createElement("em", null, "semantic memory"), " instead \u2014 facts, categories, logical rules \u2014 which is typically intact in SDAM."), /*#__PURE__*/React.createElement("div", {
    className: "insight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ilabel"
  }, "\u2B21 Core Strategy: Extend Semantic Networks"), "You already know words like 'chronology', 'euphoria', 'democracy', 'ecology'. Every Greek word in this app is connected to your existing vocabulary through etymology. You're not memorizing isolated new words \u2014 you're adding Greek forms to networks you already own. \u03B5\u03C5\u03C7\u03B1\u03C1\u03B9\u03C3\u03C4\u03CE \u2192 eu- (good/well) \u2192 the same prefix as eulogy, euphoria, eucharist, euthanasia. You already have that network. Greek is just adding one more node to it."), /*#__PURE__*/React.createElement("div", {
    className: "logic"
  }, /*#__PURE__*/React.createElement("span", {
    className: "llabel"
  }, "\u25C8 On Spaced Repetition & SDAM"), "The spacing effect works through semantic consolidation, not through episodic recall of 'I studied this last Tuesday'. After each practice question, the etymology anchor is re-shown \u2014 not to remind you that you got it wrong before, but to re-activate the semantic connection itself. Each re-activation strengthens the connection in semantic memory, which is the memory system that holds your knowledge of how words mean things.")))));
}

// ── APP ROOT ──────────────────────────────────────────────────────────────────
function App() {
  const _useState19 = useState(() => {
      const s = loadState();
      return s && s.tab ? s.tab : "method";
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    tab = _useState20[0],
    setTab = _useState20[1];
  const handleTab = useCallback(id => {
    setTab(id);
    saveState({
      tab: id
    });
  }, []);
  const tabs = [{
    id: "method",
    label: "How This Works"
  }, {
    id: "alphabet",
    label: "Alphabet"
  }, {
    id: "vocab",
    label: `Vocabulary (${VOCAB.length})`
  }, {
    id: "grammar",
    label: `Grammar (${GRAMMAR.length})`
  }, {
    id: "practice",
    label: "Practice"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("style", null, CSS), /*#__PURE__*/React.createElement("div", {
    className: "hdr"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "hdr-title"
  }, "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"), /*#__PURE__*/React.createElement("span", {
    className: "hdr-sub"
  }, " \xB7 Greek")), /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, "Aphantasia & SDAM Edition")), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: `nb${tab === t.id ? " on" : ""}`,
    onClick: () => handleTab(t.id)
  }, t.label))), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, tab === "method" && /*#__PURE__*/React.createElement(MethodTab, null), tab === "alphabet" && /*#__PURE__*/React.createElement(AlphabetTab, null), tab === "vocab" && /*#__PURE__*/React.createElement(VocabTab, null), tab === "grammar" && /*#__PURE__*/React.createElement(GrammarTab, null), tab === "practice" && /*#__PURE__*/React.createElement(PracticeTab, null)));
}
// Render
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
