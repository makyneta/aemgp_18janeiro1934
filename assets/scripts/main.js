/* ══════════════════════════════════════════════════════
   ★  CONFIGURAÇÃO — edite aqui para cada entrega
══════════════════════════════════════════════════════

   client   → nome do cliente (aparece no hero e footer)
   site     → URL do site principal (logo e copyright)

   PHOTOS   → lista de fotos. Campos:
     src      → caminho ou URL da imagem
     title    → título (aparece na lightbox)
     category → categoria para filtros (use os que quiser,
                 os filtros são gerados automaticamente;
                 use "all" para mostrar sempre tudo sem filtros)
═══════════════════════════════════════════════════════*/

const CONFIG = {
  client: "18 de Janeiro (Ao Vivo @ Sport Operário Marinhense)",
  site:   "https://makyneta.github.io",
};

const PHOTOS = [
  { src: "assets/images/client/IMG_0237.jpg", title: "IMG_0237", category: "ensaio" },
  { src: "assets/images/client/IMG_0248.jpg", title: "IMG_0248", category: "ensaio" },
  { src: "assets/images/client/IMG_0249.jpg", title: "IMG_0249", category: "ensaio" },
  { src: "assets/images/client/IMG_0273.jpg", title: "IMG_0273", category: "ensaio" },
  { src: "assets/images/client/IMG_0278.jpg", title: "IMG_0278", category: "ensaio" },
  { src: "assets/images/client/IMG_0284.jpg", title: "IMG_0284", category: "ensaio" },
  { src: "assets/images/client/IMG_0286.jpg", title: "IMG_0286", category: "ensaio" },
  { src: "assets/images/client/IMG_0293.jpg", title: "IMG_0293", category: "ensaio" },
  { src: "assets/images/client/IMG_0297.jpg", title: "IMG_0297", category: "ensaio" },
  { src: "assets/images/client/IMG_0299.jpg", title: "IMG_0299", category: "ensaio" },
  { src: "assets/images/client/IMG_0303.jpg", title: "IMG_0303", category: "ensaio" },
  { src: "assets/images/client/IMG_0308.jpg", title: "IMG_0308", category: "ensaio" },
  { src: "assets/images/client/IMG_0312.jpg", title: "IMG_0312", category: "ensaio" },
  { src: "assets/images/client/IMG_0316.jpg", title: "IMG_0316", category: "ensaio" },
  { src: "assets/images/client/IMG_0322.jpg", title: "IMG_0322", category: "entrada" },
  { src: "assets/images/client/IMG_0323.jpg", title: "IMG_0323", category: "entrada" },
  { src: "assets/images/client/IMG_0324.jpg", title: "IMG_0324", category: "entrada" },
  { src: "assets/images/client/IMG_0325.jpg", title: "IMG_0325", category: "entrada" },
  { src: "assets/images/client/IMG_0328.jpg", title: "IMG_0328", category: "entrada" },
  { src: "assets/images/client/IMG_0338.jpg", title: "IMG_0338", category: "entrada" },
  { src: "assets/images/client/IMG_0339.jpg", title: "IMG_0339", category: "entrada" },
  { src: "assets/images/client/IMG_0343.jpg", title: "IMG_0343", category: "entrada" },
  { src: "assets/images/client/IMG_0344.jpg", title: "IMG_0344", category: "entrada" },
  { src: "assets/images/client/IMG_0363.jpg", title: "IMG_0363", category: "entrada" },
  { src: "assets/images/client/IMG_0367.jpg", title: "IMG_0367", category: "entrada" },
  { src: "assets/images/client/IMG_0381.jpg", title: "IMG_0381", category: "entrada" },
  { src: "assets/images/client/IMG_0394.jpg", title: "IMG_0394", category: "entrada" },
  { src: "assets/images/client/IMG_0396.jpg", title: "IMG_0396", category: "entrada" },
  { src: "assets/images/client/IMG_0403.jpg", title: "IMG_0403", category: "entrada" },
  { src: "assets/images/client/IMG_0407.jpg", title: "IMG_0407", category: "entrada" },
  { src: "assets/images/client/IMG_0410.jpg", title: "IMG_0410", category: "entrada" },
  { src: "assets/images/client/IMG_0417.jpg", title: "IMG_0417", category: "entrada" },
  { src: "assets/images/client/IMG_0425.jpg", title: "IMG_0425", category: "entrada" },
  { src: "assets/images/client/IMG_0445.jpg", title: "IMG_0445", category: "tocándar" },
  { src: "assets/images/client/IMG_0449.jpg", title: "IMG_0449", category: "tocándar" },
  { src: "assets/images/client/IMG_0453.jpg", title: "IMG_0453", category: "tocándar" },
  { src: "assets/images/client/IMG_0456.jpg", title: "IMG_0456", category: "tocándar" },
  { src: "assets/images/client/IMG_0458.jpg", title: "IMG_0458", category: "tocándar" },
  { src: "assets/images/client/IMG_0461.jpg", title: "IMG_0461", category: "tocándar" },
  { src: "assets/images/client/IMG_0463.jpg", title: "IMG_0463", category: "tocándar" },
  { src: "assets/images/client/IMG_0468.jpg", title: "IMG_0468", category: "tocándar" },
  { src: "assets/images/client/IMG_0470.jpg", title: "IMG_0470", category: "tocándar" },
  { src: "assets/images/client/IMG_0473.jpg", title: "IMG_0473", category: "tocándar" },
  { src: "assets/images/client/IMG_0476.jpg", title: "IMG_0476", category: "tocándar" },
  { src: "assets/images/client/IMG_0479.jpg", title: "IMG_0479", category: "tocándar" },
  { src: "assets/images/client/IMG_0481.jpg", title: "IMG_0481", category: "tocándar" },
  { src: "assets/images/client/IMG_0484.jpg", title: "IMG_0484", category: "tocándar" },
  { src: "assets/images/client/IMG_0487.jpg", title: "IMG_0487", category: "tocándar" },
  { src: "assets/images/client/IMG_0531.jpg", title: "IMG_0531", category: "tocándar" },
  { src: "assets/images/client/IMG_0437.jpg", title: "IMG_0437", category: "ação" },
  { src: "assets/images/client/IMG_0438.jpg", title: "IMG_0438", category: "ação" },
  { src: "assets/images/client/IMG_0547.jpg", title: "IMG_0547", category: "ação" },
  { src: "assets/images/client/IMG_0549.jpg", title: "IMG_0549", category: "ação" },
  { src: "assets/images/client/IMG_0558.jpg", title: "IMG_0558", category: "ação" },
  { src: "assets/images/client/IMG_0560.jpg", title: "IMG_0560", category: "ação" },
  { src: "assets/images/client/IMG_0562.jpg", title: "IMG_0562", category: "ação" },
  { src: "assets/images/client/IMG_0563.jpg", title: "IMG_0563", category: "ação" },
  { src: "assets/images/client/IMG_0566.jpg", title: "IMG_0566", category: "ação" },
  { src: "assets/images/client/IMG_0568.jpg", title: "IMG_0568", category: "ação" },
  { src: "assets/images/client/IMG_0570.jpg", title: "IMG_0570", category: "ação" },
  { src: "assets/images/client/IMG_0577.jpg", title: "IMG_0577", category: "ação" },
  { src: "assets/images/client/IMG_0578.jpg", title: "IMG_0578", category: "ação" },
  { src: "assets/images/client/IMG_0583.jpg", title: "IMG_0583", category: "ação" },
  { src: "assets/images/client/IMG_0587.jpg", title: "IMG_0587", category: "ação" },
  { src: "assets/images/client/IMG_0591.jpg", title: "IMG_0591", category: "ação" },
  { src: "assets/images/client/IMG_0594.jpg", title: "IMG_0594", category: "ação" },
  { src: "assets/images/client/IMG_0596.jpg", title: "IMG_0596", category: "ação" },
  { src: "assets/images/client/IMG_0601.jpg", title: "IMG_0601", category: "ação" },
  { src: "assets/images/client/IMG_0605.jpg", title: "IMG_0605", category: "ação" },
  { src: "assets/images/client/IMG_0608.jpg", title: "IMG_0608", category: "ação" },
  { src: "assets/images/client/IMG_0612.jpg", title: "IMG_0612", category: "ação" },
  { src: "assets/images/client/IMG_0622.jpg", title: "IMG_0622", category: "ação" },
  { src: "assets/images/client/IMG_0626.jpg", title: "IMG_0626", category: "ação" },
  { src: "assets/images/client/IMG_0634.jpg", title: "IMG_0634", category: "ação" },
  { src: "assets/images/client/IMG_0646.jpg", title: "IMG_0646", category: "ação" },
  { src: "assets/images/client/IMG_0650.jpg", title: "IMG_0650", category: "ação" },
  { src: "assets/images/client/IMG_0656.jpg", title: "IMG_0656", category: "ação" },
  { src: "assets/images/client/IMG_0659.jpg", title: "IMG_0659", category: "ação" },
  { src: "assets/images/client/IMG_0660.jpg", title: "IMG_0660", category: "ação" },
  { src: "assets/images/client/IMG_0664.jpg", title: "IMG_0664", category: "ação" },
  { src: "assets/images/client/IMG_0668.jpg", title: "IMG_0668", category: "ação" },
  { src: "assets/images/client/IMG_0670.jpg", title: "IMG_0670", category: "ação" },
  { src: "assets/images/client/IMG_0672.jpg", title: "IMG_0672", category: "ação" },
  { src: "assets/images/client/IMG_0674.jpg", title: "IMG_0674", category: "ação" },
  { src: "assets/images/client/IMG_0676.jpg", title: "IMG_0676", category: "ação" },
  { src: "assets/images/client/IMG_0678.jpg", title: "IMG_0678", category: "ação" },
  { src: "assets/images/client/IMG_0696.jpg", title: "IMG_0696", category: "ação" },
  { src: "assets/images/client/IMG_0704.jpg", title: "IMG_0704", category: "ação" },
  { src: "assets/images/client/IMG_0708.jpg", title: "IMG_0708", category: "ação" },
  { src: "assets/images/client/IMG_0710.jpg", title: "IMG_0710", category: "ação" },
  { src: "assets/images/client/IMG_0720.jpg", title: "IMG_0720", category: "ação" },
  { src: "assets/images/client/IMG_0728.jpg", title: "IMG_0728", category: "ação" },
  { src: "assets/images/client/IMG_0733.jpg", title: "IMG_0733", category: "ação" },
  { src: "assets/images/client/IMG_0737.jpg", title: "IMG_0737", category: "ação" },
  { src: "assets/images/client/IMG_0742.jpg", title: "IMG_0742", category: "ação" },
  { src: "assets/images/client/IMG_0745.jpg", title: "IMG_0745", category: "ação" },
  { src: "assets/images/client/IMG_0746.jpg", title: "IMG_0746", category: "ação" },
  { src: "assets/images/client/IMG_0756.jpg", title: "IMG_0756", category: "ação" },
  { src: "assets/images/client/IMG_0761.jpg", title: "IMG_0761", category: "ação" },
  { src: "assets/images/client/IMG_0765.jpg", title: "IMG_0765", category: "ação" },
  { src: "assets/images/client/IMG_0770.jpg", title: "IMG_0770", category: "ação" },
  { src: "assets/images/client/IMG_0772.jpg", title: "IMG_0772", category: "ação" },
  { src: "assets/images/client/IMG_0775.jpg", title: "IMG_0775", category: "ação" },
  { src: "assets/images/client/IMG_0780.jpg", title: "IMG_0780", category: "ação" },
  { src: "assets/images/client/IMG_0787.jpg", title: "IMG_0787", category: "ação" },
  { src: "assets/images/client/IMG_0796.jpg", title: "IMG_0796", category: "ação" },
  { src: "assets/images/client/IMG_0798.jpg", title: "IMG_0798", category: "ação" },
  { src: "assets/images/client/IMG_0802.jpg", title: "IMG_0802", category: "ação" },
  { src: "assets/images/client/IMG_0805.jpg", title: "IMG_0805", category: "ação" },
  { src: "assets/images/client/IMG_0813.jpg", title: "IMG_0813", category: "ação" },
  { src: "assets/images/client/IMG_0817.jpg", title: "IMG_0817", category: "ação" },
  { src: "assets/images/client/IMG_0820.jpg", title: "IMG_0820", category: "ação" },
  { src: "assets/images/client/IMG_0825.jpg", title: "IMG_0825", category: "ação" },
  { src: "assets/images/client/IMG_0827.jpg", title: "IMG_0827", category: "ação" },
  { src: "assets/images/client/IMG_0829.jpg", title: "IMG_0829", category: "ação" },
  { src: "assets/images/client/IMG_0832.jpg", title: "IMG_0832", category: "ação" },
  { src: "assets/images/client/IMG_0834.jpg", title: "IMG_0834", category: "ação" },
  { src: "assets/images/client/IMG_0835.jpg", title: "IMG_0835", category: "ação" },
  { src: "assets/images/client/IMG_0848.jpg", title: "IMG_0848", category: "ação" },
  { src: "assets/images/client/IMG_0853.jpg", title: "IMG_0853", category: "fim" },
  { src: "assets/images/client/IMG_0877.jpg", title: "IMG_0877", category: "fim" },
  { src: "assets/images/client/IMG_0884.jpg", title: "IMG_0884", category: "fim" },
  { src: "assets/images/client/IMG_0886.jpg", title: "IMG_0886", category: "fim" },
  { src: "assets/images/client/IMG_0890.jpg", title: "IMG_0890", category: "fim" },
  { src: "assets/images/client/IMG_0892.jpg", title: "IMG_0892", category: "fim" },
  { src: "assets/images/client/IMG_0895.jpg", title: "IMG_0895", category: "fim" },
  { src: "assets/images/client/IMG_0905.jpg", title: "IMG_0905", category: "fim" },
  { src: "assets/images/client/IMG_0908.jpg", title: "IMG_0908", category: "fim" },
  { src: "assets/images/client/IMG_0914.jpg", title: "IMG_0914", category: "fim" },
  { src: "assets/images/client/IMG_0918.jpg", title: "IMG_0918", category: "fim" },
  { src: "assets/images/client/IMG_0921.jpg", title: "IMG_0921", category: "fim" },
  { src: "assets/images/client/IMG_0925.jpg", title: "IMG_0925", category: "fim" },
  { src: "assets/images/client/IMG_0928.jpg", title: "IMG_0928", category: "fim" },
  { src: "assets/images/client/IMG_0930.jpg", title: "IMG_0930", category: "fim" },
  { src: "assets/images/client/IMG_0934.jpg", title: "IMG_0934", category: "fim" },
  { src: "assets/images/client/IMG_0937.jpg", title: "IMG_0937", category: "fim" },
  { src: "assets/images/client/IMG_0957.jpg", title: "IMG_0957", category: "fim" },
  { src: "assets/images/client/IMG_0959.jpg", title: "IMG_0959", category: "fim" },
  { src: "assets/images/client/IMG_0963.jpg", title: "IMG_0963", category: "fim" },
  { src: "assets/images/client/IMG_0964.jpg", title: "IMG_0964", category: "fim" },
  { src: "assets/images/client/IMG_0966.jpg", title: "IMG_0966", category: "fim" },
  { src: "assets/images/client/IMG_0968.jpg", title: "IMG_0968", category: "fim" },
  { src: "assets/images/client/IMG_0978.jpg", title: "IMG_0978", category: "fim" },
  { src: "assets/images/client/IMG_0980.jpg", title: "IMG_0980", category: "fim" },
  { src: "assets/images/client/IMG_0985.jpg", title: "IMG_0985", category: "fim" },
  { src: "assets/images/client/IMG_0993.jpg", title: "IMG_0993", category: "fim" },
  { src: "assets/images/client/IMG_0996.jpg", title: "IMG_0996", category: "fim" },
  { src: "assets/images/client/IMG_1001.jpg", title: "IMG_1001", category: "fim" },
  { src: "assets/images/client/IMG_1006.jpg", title: "IMG_1006", category: "fim" },
  { src: "assets/images/client/IMG_1008.jpg", title: "IMG_1008", category: "fim" },
  { src: "assets/images/client/IMG_1010.jpg", title: "IMG_1010", category: "fim" },
  { src: "assets/images/client/IMG_1019.jpg", title: "IMG_1019", category: "fim" },
  { src: "assets/images/client/IMG_1021.jpg", title: "IMG_1021", category: "fim" },
  { src: "assets/images/client/IMG_1024.jpg", title: "IMG_1024", category: "fim" },
  { src: "assets/images/client/IMG_1027.jpg", title: "IMG_1027", category: "fim" },
  { src: "assets/images/client/IMG_1041.jpg", title: "IMG_1041", category: "fim" },
  { src: "assets/images/client/IMG_1052.jpg", title: "IMG_1052", category: "fim" },
  { src: "assets/images/client/IMG_1055.jpg", title: "IMG_1055", category: "fim" },
  { src: "assets/images/client/IMG_1060.jpg", title: "IMG_1060", category: "fim" },
  { src: "assets/images/client/IMG_1085.jpg", title: "IMG_1085", category: "fim" },
  { src: "assets/images/client/IMG_1091.jpg", title: "IMG_1091", category: "fim" },
  { src: "assets/images/client/IMG_1097.jpg", title: "IMG_1097", category: "fim" },
  { src: "assets/images/client/IMG_1102.jpg", title: "IMG_1102", category: "fim" },
  { src: "assets/images/client/IMG_1110.jpg", title: "IMG_1110", category: "fim" },
  { src: "assets/images/client/IMG_1112.jpg", title: "IMG_1112", category: "fim" },
  { src: "assets/images/client/IMG_1119.jpg", title: "IMG_1119", category: "fim" },
  { src: "assets/images/client/IMG_1124.jpg", title: "IMG_1124", category: "fim" },
  { src: "assets/images/client/IMG_1136.jpg", title: "IMG_1136", category: "fim" },
  { src: "assets/images/client/IMG_1140.jpg", title: "IMG_1140", category: "fim" },
  { src: "assets/images/client/IMG_1149.jpg", title: "IMG_1149", category: "fim" },
  { src: "assets/images/client/IMG_1153.jpg", title: "IMG_1153", category: "fim" },
  { src: "assets/images/client/IMG_1159.jpg", title: "IMG_1159", category: "fim" },
  { src: "assets/images/client/IMG_1164.jpg", title: "IMG_1164", category: "fim" },
  { src: "assets/images/client/IMG_1176.jpg", title: "IMG_1176", category: "fim" },
  { src: "assets/images/client/IMG_1184.jpg", title: "IMG_1184", category: "fim" },
  { src: "assets/images/client/IMG_1187.jpg", title: "IMG_1187", category: "fim" },
  { src: "assets/images/client/IMG_1190.jpg", title: "IMG_1190", category: "fim" },
  { src: "assets/images/client/IMG_1194.jpg", title: "IMG_1194", category: "fim" },
  { src: "assets/images/client/IMG_1199.jpg", title: "IMG_1199", category: "fim" },
  { src: "assets/images/client/IMG_1203.jpg", title: "IMG_1203", category: "fim" },
  { src: "assets/images/client/IMG_1207.jpg", title: "IMG_1207", category: "fim" },
  { src: "assets/images/client/IMG_1226.jpg", title: "IMG_1226", category: "fim" },
  { src: "assets/images/client/IMG_1234.jpg", title: "IMG_1234", category: "fim" },
  { src: "assets/images/client/IMG_1247.jpg", title: "IMG_1247", category: "fim" },
  { src: "assets/images/client/IMG_1251.jpg", title: "IMG_1251", category: "fim" },
  { src: "assets/images/client/IMG_1259.jpg", title: "IMG_1259", category: "fim" },
  { src: "assets/images/client/IMG_1265.jpg", title: "IMG_1265", category: "fim" },
  { src: "assets/images/client/IMG_1270.jpg", title: "IMG_1270", category: "fim" },
  { src: "assets/images/client/IMG_1275.jpg", title: "IMG_1275", category: "fim" },
  { src: "assets/images/client/IMG_1282.jpg", title: "IMG_1282", category: "fim" },
  { src: "assets/images/client/IMG_1289.jpg", title: "IMG_1289", category: "fim" },
  { src: "assets/images/client/IMG_1295.jpg", title: "IMG_1295", category: "fim" },
  { src: "assets/images/client/IMG_1309.jpg", title: "IMG_1309", category: "fim" },
  { src: "assets/images/client/IMG_1321.jpg", title: "IMG_1321  ", category: "fim" },
];

/* ══════════════════════════════════════════════════ */

let filter = "all", cols = 3, lbIdx = 0, sel = new Set();

/* init */
document.getElementById("yr").textContent       = new Date().getFullYear();
document.getElementById("hero-name").textContent = CONFIG.client;
document.getElementById("ft-client").textContent = CONFIG.client;

/* ── FILTROS dinâmicos ───────────────────────────── */
function buildFilters() {
  const cats = ["all", ...new Set(PHOTOS.map(p => p.category))];
  const row = document.getElementById("filter-row");
  row.innerHTML = "";
  cats.forEach(c => {
    const b = document.createElement("button");
    b.className = "fpill" + (c === filter ? " on" : "");
    b.dataset.f = c;
    b.textContent = c === "all" ? "Todas" : c.charAt(0).toUpperCase() + c.slice(1);
    b.onclick = () => {
      filter = c;
      document.querySelectorAll(".fpill").forEach(x => x.classList.remove("on"));
      b.classList.add("on");
      render();
    };
    row.appendChild(b);
  });
}

/* ── RENDER ─────────────────────────────────────── */
function visible() {
  return filter === "all" ? PHOTOS : PHOTOS.filter(p => p.category === filter);
}

function render() {
  const vp = visible();
  const g  = document.getElementById("gallery");
  g.innerHTML = "";
  document.getElementById("count-label").textContent =
    `${vp.length} fotografia${vp.length !== 1 ? "s" : ""}`;

  vp.forEach((p, i) => {
    const gi    = PHOTOS.indexOf(p);
    const isSel = sel.has(gi);

    const card = document.createElement("div");
    card.className = "card" + (isSel ? " sel" : "");
    card.dataset.gi = gi;

    card.innerHTML = `
      <div class="card-img">
        <img src="${p.src}" alt="${p.title}" loading="lazy"/>
        <div class="card-ov">
          <div class="ov-row">
            <button class="ov-btn ov-view" onclick="openLb(${gi},event)">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              Ver
            </button>
            <a href="${p.src}" download="${p.title}.jpg" class="ov-btn ov-dl" onclick="event.stopPropagation()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 15V3m0 12-4-4m4 4 4-4"/><path d="M2 17v2a2 2 0 002 2h16a2 2 0 002-2v-2"/></svg>
              Download
            </a>
          </div>
        </div>
        <div class="card-cb">
          <svg class="cb-ico" viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="#0c0b0a" stroke-width="2.2"><path d="M2 6l3 3 5-5"/></svg>
        </div>
      </div>
      <div class="card-name">
        <span class="cn-title">${p.title}</span>
        <span class="cn-num">${String(i + 1).padStart(2, "0")}</span>
      </div>`;

    card.addEventListener("click", () => toggleSel(gi, card));
    g.appendChild(card);

    /* entrada escalonada */
    setTimeout(() => card.classList.add("visible"), i * 55);
  });

  buildDots();
  updateFbar();
}

/* ── VIEW ───────────────────────────────────────── */
function setView(c) {
  cols = c;
  const g = document.getElementById("gallery");
  g.className = "gallery" + (c === 2 ? " c2" : c === 1 ? " c1" : "");
  [1, 2, 3].forEach(n =>
    document.getElementById("v" + n).classList.toggle("on", n === c));
  render();
}

/* ── SELECTION ──────────────────────────────────── */
function toggleSel(gi, card) {
  sel.has(gi) ? (sel.delete(gi), card.classList.remove("sel"))
              : (sel.add(gi),    card.classList.add("sel"));
  updateFbar();
}
function clearSel() {
  sel.clear();
  document.querySelectorAll(".card.sel").forEach(c => c.classList.remove("sel"));
  updateFbar();
}
function toggleSelAll() {
  const idxs = visible().map(p => PHOTOS.indexOf(p));
  const all  = idxs.every(i => sel.has(i));
  idxs.forEach(i => all ? sel.delete(i) : sel.add(i));
  render();
}
function updateFbar() {
  document.getElementById("fbar-n").textContent = sel.size;
  document.getElementById("fbar").classList.toggle("show", sel.size > 0);
}
function doDownload() {
  const targets = sel.size > 0
    ? [...sel].map(i => PHOTOS[i])
    : visible();
  if (!targets.length) { alert("Selecione pelo menos uma fotografia."); return }
  targets.forEach((p, i) =>
    setTimeout(() => {
      const a = document.createElement("a");
      a.href = p.src; a.download = p.title + ".jpg"; a.click();
    }, i * 220)
  );
}

/* ── LIGHTBOX ───────────────────────────────────── */
function buildDots() {
  const w = document.getElementById("lb-dots");
  w.innerHTML = "";
  PHOTOS.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "lb-dot" + (i === lbIdx ? " cur" : "");
    w.appendChild(d);
  });
}
function openLb(gi, e) {
  e && e.stopPropagation();
  lbIdx = gi; updLb();
  document.getElementById("lb").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLb() {
  document.getElementById("lb").classList.remove("open");
  document.body.style.overflow = "";
}
function navLb(d) { lbIdx = (lbIdx + d + PHOTOS.length) % PHOTOS.length; updLb() }
function updLb() {
  const p   = PHOTOS[lbIdx];
  const img = document.getElementById("lb-img");
  img.style.opacity = "0";
  setTimeout(() => { img.src = p.src; img.alt = p.title; img.style.opacity = "1" }, 160);
  document.getElementById("lb-title").textContent = p.title;
  document.getElementById("lb-sub").textContent   = `${lbIdx + 1} de ${PHOTOS.length}`;
  document.getElementById("lb-dl").href           = p.src;
  document.getElementById("lb-dl").download       = p.title + ".jpg";
  document.querySelectorAll(".lb-dot")
    .forEach((d, i) => d.classList.toggle("cur", i === lbIdx));
}
document.addEventListener("keydown", e => {
  if (!document.getElementById("lb").classList.contains("open")) return;
  if (e.key === "Escape")      closeLb();
  if (e.key === "ArrowRight")  navLb(1);
  if (e.key === "ArrowLeft")   navLb(-1);
});

/* ── START ──────────────────────────────────────── */
buildFilters();
render();