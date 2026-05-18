const BONDII_RADII = {
  H: 1.2,
  C: 1.7,
  N: 1.55,
  O: 1.52,
  S: 1.8,
  P: 1.8,
  F: 1.47,
  Cl: 1.75,
  Br: 1.85,
  I: 1.98
};

const ELEMENT_COLORS = {
  H: "#f7fafc",
  C: "#2d3748",
  N: "#2563eb",
  O: "#dc2626",
  S: "#eab308",
  P: "#f97316",
  F: "#16a34a",
  Cl: "#22c55e",
  Br: "#7c2d12",
  I: "#581c87"
};

const DATASETS = [
  {
    id: "urea",
    name: "Mocznik",
    formula: "CH4N2O",
    cell: { a: 5.661, b: 5.661, c: 4.712, alpha: 90, beta: 90, gamma: 90 },
    spaceGroup: "P -4 21 m",
    z: 2,
    source: "https://www.crystallography.net/cod/result?text=urea",
    sources: [
      {
        label: "COD/CIF + model dydaktyczny",
        primary: "https://www.crystallography.net/cod/result?text=urea",
        links: [
          ["Crystallography Open Database: wyszukiwanie CIF dla mocznika", "https://www.crystallography.net/cod/result?text=urea"],
          ["International Tables for Crystallography, Vol. A: notacja i operacje grup przestrzennych", "https://it.iucr.org/Ac/contents/"],
          ["Bondi 1964: promienie van der Waalsa", "https://doi.org/10.1021/j100785a001"]
        ],
        note: "Parametry komórki i grupa przestrzenna są traktowane jako dane krystalograficzne; współrzędne atomów w cząsteczce są uproszczonym modelem edukacyjnym."
      },
      {
        label: "PubChem + COD",
        primary: "https://pubchem.ncbi.nlm.nih.gov/compound/Urea",
        links: [
          ["PubChem: mocznik, dane cząsteczki", "https://pubchem.ncbi.nlm.nih.gov/compound/Urea"],
          ["Crystallography Open Database: dane kryształu", "https://www.crystallography.net/cod/result?text=urea"]
        ],
        note: "Wariant pokazuje rozdzielenie źródeł: baza cząsteczek dla składu i baza krystalograficzna dla komórki elementarnej."
      }
    ],
    center: [0.25, 0.25, 0.24],
    symOps: [
      { label: "x, y, z", m: [[1,0,0],[0,1,0],[0,0,1]], t: [0,0,0], symbol: "1" },
      { label: "-y, x, -z", m: [[0,-1,0],[1,0,0],[0,0,-1]], t: [0,0,0], symbol: "-4" }
    ],
    targetRotation: { x: -0.32, y: 0.24 },
    atoms: [
      { e: "C", p: [0, 0, 0] },
      { e: "O", p: [0, 0, 1.22] },
      { e: "N", p: [-1.12, 0, -0.56] },
      { e: "N", p: [1.12, 0, -0.56] },
      { e: "H", p: [-1.72, 0.72, -0.45] },
      { e: "H", p: [-1.72, -0.72, -0.45] },
      { e: "H", p: [1.72, 0.72, -0.45] },
      { e: "H", p: [1.72, -0.72, -0.45] }
    ]
  },
  {
    id: "glycine",
    name: "Glicyna",
    formula: "C2H5NO2",
    cell: { a: 5.105, b: 11.970, c: 5.458, alpha: 90, beta: 111.7, gamma: 90 },
    spaceGroup: "P 21/c",
    z: 4,
    source: "https://www.crystallography.net/cod/result?text=glycine",
    sources: [
      {
        label: "COD/CIF + model dydaktyczny",
        primary: "https://www.crystallography.net/cod/result?text=glycine",
        links: [
          ["Crystallography Open Database: wyszukiwanie CIF dla glicyny", "https://www.crystallography.net/cod/result?text=glycine"],
          ["International Tables for Crystallography, Vol. A: P 21/c", "https://it.iucr.org/Ac/contents/"],
          ["Bondi 1964: promienie van der Waalsa", "https://doi.org/10.1021/j100785a001"]
        ],
        note: "Komórka i operacje symetrii służą jako zestaw dydaktyczny do przewidywania upakowania w grupie P 21/c."
      },
      {
        label: "PubChem + COD",
        primary: "https://pubchem.ncbi.nlm.nih.gov/compound/Glycine",
        links: [
          ["PubChem: glicyna, dane cząsteczki", "https://pubchem.ncbi.nlm.nih.gov/compound/Glycine"],
          ["Crystallography Open Database: dane kryształu", "https://www.crystallography.net/cod/result?text=glycine"]
        ],
        note: "Wariant źródłowy do porównania identyfikacji cząsteczki z parametrami krystalograficznymi."
      }
    ],
    center: [0.18, 0.18, 0.22],
    symOps: [
      { label: "x, y, z", m: [[1,0,0],[0,1,0],[0,0,1]], t: [0,0,0], symbol: "1" },
      { label: "-x, y+1/2, -z+1/2", m: [[-1,0,0],[0,1,0],[0,0,-1]], t: [0,0.5,0.5], symbol: "21" },
      { label: "-x, -y, -z", m: [[-1,0,0],[0,-1,0],[0,0,-1]], t: [0,0,0], symbol: "-1" },
      { label: "x, -y+1/2, z+1/2", m: [[1,0,0],[0,-1,0],[0,0,1]], t: [0,0.5,0.5], symbol: "c" }
    ],
    targetRotation: { x: 0.42, y: -0.72 },
    atoms: [
      { e: "N", p: [-1.34, 0.02, 0.02] },
      { e: "C", p: [-0.12, 0, 0] },
      { e: "C", p: [1.1, 0.03, 0.22] },
      { e: "O", p: [1.56, 1.05, 0.65] },
      { e: "O", p: [1.74, -1.02, -0.02] },
      { e: "H", p: [-1.94, 0.78, 0.16] },
      { e: "H", p: [-1.88, -0.76, 0.36] },
      { e: "H", p: [-1.48, -0.06, -0.96] },
      { e: "H", p: [-0.14, 0.05, -1.08] },
      { e: "H", p: [-0.1, 0.92, 0.52] }
    ]
  },
  {
    id: "benzene",
    name: "Benzen",
    formula: "C6H6",
    cell: { a: 7.39, b: 9.42, c: 6.81, alpha: 90, beta: 90, gamma: 90 },
    spaceGroup: "Pbca",
    z: 4,
    source: "https://www.crystallography.net/cod/result?text=benzene",
    sources: [
      {
        label: "COD/CIF + model dydaktyczny",
        primary: "https://www.crystallography.net/cod/result?text=benzene",
        links: [
          ["Crystallography Open Database: wyszukiwanie CIF dla benzenu", "https://www.crystallography.net/cod/result?text=benzene"],
          ["International Tables for Crystallography, Vol. A: Pbca", "https://it.iucr.org/Ac/contents/"],
          ["Bondi 1964: promienie van der Waalsa", "https://doi.org/10.1021/j100785a001"]
        ],
        note: "Pierścień benzenowy jest wbudowanym modelem cząsteczki; wariant służy do demonstracji działania osi śrubowych i płaszczyzn poślizgu."
      },
      {
        label: "PubChem + COD",
        primary: "https://pubchem.ncbi.nlm.nih.gov/compound/Benzene",
        links: [
          ["PubChem: benzen, dane cząsteczki", "https://pubchem.ncbi.nlm.nih.gov/compound/Benzene"],
          ["Crystallography Open Database: dane kryształu", "https://www.crystallography.net/cod/result?text=benzene"]
        ],
        note: "Wariant źródłowy oddziela opis cząsteczki od danych kryształu i ułatwia porównanie baz danych."
      }
    ],
    center: [0.2, 0.18, 0.22],
    symOps: [
      { label: "x, y, z", m: [[1,0,0],[0,1,0],[0,0,1]], t: [0,0,0], symbol: "1" },
      { label: "-x+1/2, -y, z+1/2", m: [[-1,0,0],[0,-1,0],[0,0,1]], t: [0.5,0,0.5], symbol: "b" },
      { label: "x+1/2, -y+1/2, -z", m: [[1,0,0],[0,-1,0],[0,0,-1]], t: [0.5,0.5,0], symbol: "c" },
      { label: "-x, y+1/2, -z+1/2", m: [[-1,0,0],[0,1,0],[0,0,-1]], t: [0,0.5,0.5], symbol: "a" }
    ],
    targetRotation: { x: -0.18, y: 0.88 },
    atoms: ringAtoms()
  }
];

const state = {
  dataset: DATASETS[0],
  sourceIndex: 0,
  axis: "z",
  rotation: { x: 0.0, y: 0.0 },
  offset: { x: 0, y: 0 },
  viewScale: 1,
  dragging: false,
  lastPointer: { x: 0, y: 0 },
  showAnswer: false
};

const canvas = document.querySelector("#stage");
const ctx = canvas.getContext("2d");
const compoundSelect = document.querySelector("#compoundSelect");
const dataSourceSelect = document.querySelector("#dataSourceSelect");
const axisButtons = document.querySelectorAll(".axis-btn");
const toggleAnswer = document.querySelector("#toggleAnswer");
const resetBtn = document.querySelector("#resetBtn");
const scaleSlider = document.querySelector("#scaleSlider");

const compoundName = document.querySelector("#compoundName");
const cellText = document.querySelector("#cellText");
const spaceGroupText = document.querySelector("#spaceGroupText");
const zText = document.querySelector("#zText");
const axisText = document.querySelector("#axisText");
const scaleText = document.querySelector("#scaleText");
const symmetryList = document.querySelector("#symmetryList");
const sourceList = document.querySelector("#sourceList");
const sourceNote = document.querySelector("#sourceNote");
const sourceLink = document.querySelector("#sourceLink");
const scoreText = document.querySelector("#scoreText");
const hintText = document.querySelector("#hintText");

function ringAtoms() {
  const atoms = [];
  for (let i = 0; i < 6; i += 1) {
    const a = (Math.PI * 2 * i) / 6;
    atoms.push({ e: "C", p: [Math.cos(a) * 1.39, Math.sin(a) * 1.39, 0] });
    atoms.push({ e: "H", p: [Math.cos(a) * 2.47, Math.sin(a) * 2.47, 0] });
  }
  return atoms;
}

function init() {
  DATASETS.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = `${item.name} (${item.formula})`;
    compoundSelect.append(option);
  });

  compoundSelect.addEventListener("change", () => {
    state.dataset = DATASETS.find((item) => item.id === compoundSelect.value) || DATASETS[0];
    state.sourceIndex = 0;
    populateSourceSelect();
    resetRound();
    syncInfo();
  });

  dataSourceSelect.addEventListener("change", () => {
    state.sourceIndex = Number(dataSourceSelect.value) || 0;
    syncInfo();
    render();
  });

  axisButtons.forEach((button) => {
    button.addEventListener("click", () => setAxis(button.dataset.axis));
  });

  toggleAnswer.addEventListener("click", () => {
    state.showAnswer = !state.showAnswer;
    toggleAnswer.textContent = state.showAnswer ? "Ukryj rozwiązanie" : "Pokaż rozwiązanie";
    render();
  });

  resetBtn.addEventListener("click", resetRound);
  scaleSlider.addEventListener("input", () => {
    state.viewScale = Number(scaleSlider.value) / 100;
    scaleText.textContent = `${scaleSlider.value}%`;
    render();
  });
  canvas.addEventListener("pointerdown", startDrag);
  canvas.addEventListener("pointermove", drag);
  window.addEventListener("pointerup", stopDrag);
  window.addEventListener("keydown", handleKeys);
  window.addEventListener("resize", render);

  populateSourceSelect();
  syncInfo();
  render();
}

function populateSourceSelect() {
  dataSourceSelect.replaceChildren(...state.dataset.sources.map((source, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = source.label;
    return option;
  }));
  dataSourceSelect.value = String(state.sourceIndex);
}

function setAxis(axis) {
  state.axis = axis;
  axisButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.axis === axis));
  axisText.textContent = `wzdłuż ${axis}`;
  render();
}

function resetRound() {
  state.rotation = { x: 0, y: 0 };
  state.offset = { x: 0, y: 0 };
  state.showAnswer = false;
  toggleAnswer.textContent = "Pokaż rozwiązanie";
  render();
}

function syncInfo() {
  const d = state.dataset;
  const selectedSource = activeSource();
  compoundName.textContent = `${d.name} (${d.formula})`;
  cellText.textContent = `a=${d.cell.a.toFixed(3)} Å, b=${d.cell.b.toFixed(3)} Å, c=${d.cell.c.toFixed(3)} Å; α=${d.cell.alpha}°, β=${d.cell.beta}°, γ=${d.cell.gamma}°`;
  spaceGroupText.textContent = d.spaceGroup;
  zText.textContent = String(d.z);
  scaleText.textContent = `${Math.round(state.viewScale * 100)}%`;
  sourceList.replaceChildren(...selectedSource.links.map(([label, url]) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = label;
    item.append(link);
    return item;
  }));
  sourceNote.textContent = selectedSource.note;
  symmetryList.replaceChildren(...d.symOps.map((op) => {
    const li = document.createElement("li");
    li.textContent = `${op.symbol}: ${op.label}`;
    return li;
  }));
  sourceLink.href = selectedSource.primary;
}

function activeSource() {
  return state.dataset.sources[state.sourceIndex] || state.dataset.sources[0];
}

function startDrag(event) {
  state.dragging = true;
  state.lastPointer = { x: event.clientX, y: event.clientY };
  canvas.setPointerCapture(event.pointerId);
}

function drag(event) {
  if (!state.dragging) return;
  const dx = event.clientX - state.lastPointer.x;
  const dy = event.clientY - state.lastPointer.y;
  state.rotation.y += dx * 0.012;
  state.rotation.x += dy * 0.012;
  state.lastPointer = { x: event.clientX, y: event.clientY };
  render();
}

function stopDrag() {
  state.dragging = false;
}

function handleKeys(event) {
  const step = event.shiftKey ? 18 : 8;
  if (event.key === "x" || event.key === "X") setAxis("x");
  if (event.key === "y" || event.key === "Y") setAxis("y");
  if (event.key === "z" || event.key === "Z") setAxis("z");
  if (event.key === "r" || event.key === "R") resetRound();
  if (event.key === " ") {
    event.preventDefault();
    state.showAnswer = !state.showAnswer;
    toggleAnswer.textContent = state.showAnswer ? "Ukryj rozwiązanie" : "Pokaż rozwiązanie";
    render();
  }
  if (event.key === "ArrowLeft") {
    state.offset.x -= step;
    render();
  }
  if (event.key === "ArrowRight") {
    state.offset.x += step;
    render();
  }
  if (event.key === "ArrowUp") {
    state.offset.y -= step;
    render();
  }
  if (event.key === "ArrowDown") {
    state.offset.y += step;
    render();
  }
}

function render() {
  resizeCanvas();
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.scale(canvas.width / w, canvas.height / h);

  const layout = makeLayout(w, h);
  drawGrid(layout);
  drawCell(layout);
  drawSymmetry(layout);
  drawMolecules(layout);
  updateScore();

  ctx.restore();
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const width = Math.max(640, Math.floor(rect.width * ratio));
  const height = Math.max(420, Math.floor(rect.height * ratio));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
}

function makeLayout(w, h) {
  const pad = Math.min(72, Math.max(34, w * 0.055));
  const d = state.dataset;
  const dims = axisDimensions(d.cell, state.axis);
  const scale = Math.min((w - pad * 2) / dims.u, (h - pad * 2) / dims.v) * state.viewScale;
  const cellW = dims.u * scale;
  const cellH = dims.v * scale;
  return {
    pad,
    scale,
    origin: { x: (w - cellW) / 2, y: (h - cellH) / 2 },
    cellW,
    cellH,
    dims
  };
}

function axisDimensions(cell, axis) {
  if (axis === "x") return { u: cell.b, v: cell.c, labels: ["b", "c"] };
  if (axis === "y") return { u: cell.a, v: cell.c, labels: ["a", "c"] };
  return { u: cell.a, v: cell.b, labels: ["a", "b"] };
}

function drawGrid(layout) {
  ctx.fillStyle = "#fbfcfd";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  ctx.strokeStyle = "#eef2f5";
  ctx.lineWidth = 1;
  for (let x = layout.origin.x % 28; x < canvas.clientWidth; x += 28) {
    line(x, 0, x, canvas.clientHeight);
  }
  for (let y = layout.origin.y % 28; y < canvas.clientHeight; y += 28) {
    line(0, y, canvas.clientWidth, y);
  }
}

function drawCell(layout) {
  const { origin, cellW, cellH, dims } = layout;
  ctx.strokeStyle = "#1f2937";
  ctx.lineWidth = 2;
  ctx.strokeRect(origin.x, origin.y, cellW, cellH);
  ctx.fillStyle = "#1f2937";
  ctx.font = "600 13px system-ui";
  ctx.fillText(dims.labels[0], origin.x + cellW + 8, origin.y + cellH + 4);
  ctx.fillText(dims.labels[1], origin.x - 18, origin.y - 8);
  ctx.fillText("0", origin.x - 12, origin.y + cellH + 16);
}

function drawSymmetry(layout) {
  const positions = [
    [0.08, 0.08],
    [0.5, 0.08],
    [0.92, 0.08],
    [0.08, 0.5],
    [0.5, 0.5],
    [0.92, 0.5],
    [0.08, 0.92],
    [0.5, 0.92],
    [0.92, 0.92]
  ];
  const ops = state.dataset.symOps;
  positions.forEach((pos, index) => {
    const op = ops[index % ops.length];
    const x = layout.origin.x + pos[0] * layout.cellW;
    const y = layout.origin.y + pos[1] * layout.cellH;
    ctx.save();
    ctx.translate(x, y);
    ctx.strokeStyle = "#0f766e";
    ctx.fillStyle = "#0f766e";
    ctx.lineWidth = 1.6;
    if (op.symbol.includes("21")) {
      ctx.beginPath();
      ctx.arc(0, 0, 9, -Math.PI * 0.7, Math.PI * 0.7);
      ctx.stroke();
      line(-10, 0, 10, 0);
    } else if (op.symbol === "-1") {
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      line(-11, 0, 11, 0);
      line(0, -11, 0, 11);
    } else if (op.symbol === "-4") {
      ctx.rotate(Math.PI / 4);
      ctx.strokeRect(-8, -8, 16, 16);
      line(-12, 0, 12, 0);
      line(0, -12, 0, 12);
    } else if (op.symbol === "a" || op.symbol === "b" || op.symbol === "c") {
      ctx.setLineDash([5, 4]);
      line(-14, 0, 14, 0);
      ctx.setLineDash([]);
      ctx.font = "700 11px system-ui";
      ctx.fillText(op.symbol, 7, -7);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  });
}

function drawMolecules(layout) {
  const d = state.dataset;
  const molecules = d.symOps.slice(0, d.z).map((op, index) => {
    const frac = wrapVec(addVec(mulMatVec(op.m, d.center), op.t));
    return {
      op,
      index,
      center: projectFraction(frac, layout),
      atoms: transformedAtoms(op, index === 0 ? state.rotation : state.showAnswer ? d.targetRotation : state.rotation)
    };
  });

  const drawables = [];
  molecules.forEach((mol) => {
    mol.atoms.forEach((atom) => {
      const p = addVec(atom.p, [0, 0, 0]);
      const projected = projectMoleculePoint(p, mol.center, layout);
      drawables.push({ ...atom, ...projected, index: mol.index });
    });
  });

  drawables.sort((a, b) => a.depth - b.depth);
  if (state.showAnswer) drawAnswerGhost(layout);
  drawables.forEach(drawAtom);
  markActiveMolecule(molecules[0].center);
}

function transformedAtoms(op, rotation) {
  return state.dataset.atoms.map((atom) => {
    const rotated = rotatePoint(atom.p, rotation);
    return { e: atom.e, p: mulMatVec(op.m, rotated) };
  });
}

function projectFraction(frac, layout) {
  let u = frac[0];
  let v = frac[1];
  if (state.axis === "x") {
    u = frac[1];
    v = frac[2];
  } else if (state.axis === "y") {
    u = frac[0];
    v = frac[2];
  }
  return {
    x: layout.origin.x + u * layout.cellW + state.offset.x,
    y: layout.origin.y + (1 - v) * layout.cellH + state.offset.y
  };
}

function projectMoleculePoint(p, center, layout) {
  let u = p[0];
  let v = p[1];
  let depth = p[2];
  if (state.axis === "x") {
    u = p[1];
    v = p[2];
    depth = p[0];
  } else if (state.axis === "y") {
    u = p[0];
    v = p[2];
    depth = p[1];
  }
  return {
    x: center.x + u * layout.scale,
    y: center.y - v * layout.scale,
    depth
  };
}

function drawAtom(atom) {
  const radius = (BONDII_RADII[atom.e] || 1.6) * 0.38 * currentLayoutScale();
  const shade = Math.max(0.72, Math.min(1.14, 0.95 + atom.depth * 0.03));
  ctx.beginPath();
  ctx.arc(atom.x, atom.y, radius, 0, Math.PI * 2);
  ctx.fillStyle = tint(ELEMENT_COLORS[atom.e] || "#64748b", shade);
  ctx.fill();
  ctx.strokeStyle = atom.e === "H" ? "#cbd5e1" : "rgba(15, 23, 42, 0.28)";
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawAnswerGhost(layout) {
  const savedRotation = state.rotation;
  state.rotation = state.dataset.targetRotation;
  const center = projectFraction(state.dataset.center, layout);
  const atoms = state.dataset.atoms.map((atom) => ({
    e: atom.e,
    p: rotatePoint(atom.p, state.dataset.targetRotation)
  }));
  state.rotation = savedRotation;
  atoms.forEach((atom) => {
    const p = projectMoleculePoint(atom.p, center, layout);
    ctx.beginPath();
    ctx.arc(p.x, p.y, (BONDII_RADII[atom.e] || 1.6) * 0.38 * layout.scale, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(180, 83, 9, 0.18)";
    ctx.fill();
    ctx.strokeStyle = "rgba(180, 83, 9, 0.55)";
    ctx.stroke();
  });
}

function currentLayoutScale() {
  const d = state.dataset;
  const dims = axisDimensions(d.cell, state.axis);
  return Math.min((canvas.clientWidth - 92) / dims.u, (canvas.clientHeight - 92) / dims.v) * state.viewScale;
}

function markActiveMolecule(center) {
  ctx.strokeStyle = "#b45309";
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.arc(center.x, center.y, Math.max(28, 42 * state.viewScale), 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
}

function updateScore() {
  const target = state.dataset.targetRotation;
  const dx = angleDelta(state.rotation.x, target.x);
  const dy = angleDelta(state.rotation.y, target.y);
  const distancePenalty = Math.min(1, Math.hypot(state.offset.x, state.offset.y) / 180);
  const angularScore = Math.max(0, 1 - (Math.abs(dx) + Math.abs(dy)) / 2.6);
  const score = Math.max(0, Math.round((angularScore * (1 - distancePenalty * 0.45)) * 100));
  scoreText.textContent = `Dopasowanie: ${score}%`;
  hintText.textContent = score > 88 ? "Bardzo blisko przewidywanego upakowania." : "Dopasuj orientację cząsteczki do kopii symetrycznych.";
}

function angleDelta(a, b) {
  return Math.atan2(Math.sin(a - b), Math.cos(a - b));
}

function rotatePoint(p, rotation) {
  const cx = Math.cos(rotation.x);
  const sx = Math.sin(rotation.x);
  const cy = Math.cos(rotation.y);
  const sy = Math.sin(rotation.y);
  const y1 = p[1] * cx - p[2] * sx;
  const z1 = p[1] * sx + p[2] * cx;
  const x2 = p[0] * cy + z1 * sy;
  const z2 = -p[0] * sy + z1 * cy;
  return [x2, y1, z2];
}

function mulMatVec(m, v) {
  return [
    m[0][0] * v[0] + m[0][1] * v[1] + m[0][2] * v[2],
    m[1][0] * v[0] + m[1][1] * v[1] + m[1][2] * v[2],
    m[2][0] * v[0] + m[2][1] * v[1] + m[2][2] * v[2]
  ];
}

function addVec(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

function wrapVec(v) {
  return v.map((n) => ((n % 1) + 1) % 1);
}

function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function tint(hex, factor) {
  const value = hex.replace("#", "");
  const r = Math.max(0, Math.min(255, Math.round(parseInt(value.slice(0, 2), 16) * factor)));
  const g = Math.max(0, Math.min(255, Math.round(parseInt(value.slice(2, 4), 16) * factor)));
  const b = Math.max(0, Math.min(255, Math.round(parseInt(value.slice(4, 6), 16) * factor)));
  return `rgb(${r}, ${g}, ${b})`;
}

init();
