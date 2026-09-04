'use strict';

/* ---------- 计划数据 ---------- */
const PLAN = {
  A: {
    name: '全身力量', time: '约28分钟',
    warmup: '原地踏步+摆臂2min → 髋绕环各10次 → 小腿提踵15×2 → 靠墙静蹲30秒（预热膝盖）',
    exercises: [
      ['壶铃罗马尼亚硬拉', '6kg壶铃', '3×12', '微屈膝、髋部向后推，背平直，感受大腿后侧'],
      ['椅子深蹲', '自重', '3×10~12', '轻触椅子即起，膝盖对准脚尖，不内扣'],
      ['跪姿俯卧撑', '自重', '3×8~12', '做不了就撑墙/撑桌，躯干一条线'],
      ['单臂壶铃划船', '6kg壶铃', '3×12/侧', '背平，肘向后上方拉'],
      ['臀桥', '自重', '3×15', '顶峰停1~2秒，挤压臀部（护膝关键）'],
      ['靠墙静蹲', '自重', '2×30~45秒', '大腿约90°，膝盖不适就调高角度'],
    ],
    cooldown: '拉伸3分钟：股四头肌、腘绳肌、小腿、髋屈肌各30秒',
  },
  B: {
    name: '核心+心肺', time: '约25分钟',
    warmup: '原地踏步+摆臂2min → 髋绕环各10次 → 小腿提踵15×2 → 靠墙静蹲30秒',
    exercises: [
      ['壶铃摆动', '6kg壶铃', '4组×30秒·休30秒', '髋部发力，膝盖不主动蹲，腰背平直（第2周5组、第4周6组）'],
      ['半跪健腹轮', '健腹轮', '3×8~12', '骨盆后倾、收腹、不塌腰，滚出距离先小后大'],
      ['死虫式', '瑜伽垫', '3×10/侧', '下背贴地，对侧手脚慢伸'],
      ['鸟狗式', '瑜伽垫', '3×10/侧', '躯干稳定不晃动'],
      ['平板支撑', '自重', '3×30~45秒', '臀收紧、不撅臀不塌腰'],
    ],
    cooldown: '拉伸3分钟',
  },
  C: {
    name: '上肢塑形+膝盖保养', time: '约28分钟',
    warmup: '同A日：踏步摆臂 → 髋绕环 → 小腿提踵 → 靠墙静蹲30秒',
    exercises: [
      ['哑铃坐姿推举', '2kg×2', '3×15', '核心收紧，不耸肩'],
      ['哑铃侧平举', '2kg×2', '3×15', '肘微屈，抬至肩高即可，慢放'],
      ['俯身哑铃划船', '2kg×2', '3×15', '俯身45°，肘贴身体向后拉'],
      ['哑铃锤式弯举', '2kg×2', '3×15', '肘固定，慢起慢放'],
      ['靠墙静蹲', '自重', '3×40秒', '强化股四头，养护膝关节'],
      ['超人式', '瑜伽垫', '3×12', '强化下背，与健腹轮配套'],
    ],
    cooldown: '拉伸3分钟',
  },
};

// JS getDay(): 0=周日 … 6=周六 → 周一A 周二B 周三走 周四C 周五B 周六A 周日走
const WEEK = [
  { type: 'walk' }, { type: 'A' }, { type: 'B' },
  { type: 'walk' }, { type: 'C' }, { type: 'B' }, { type: 'A' },
];
const WALK_DESC = '轻松能说话的速度。对膝盖最友好，直接消耗肝脏脂肪，也计入打卡。';

/* ---------- 存储工具 ---------- */
const $ = (s) => document.querySelector(s);
const pad = (n) => String(n).padStart(2, '0');
const key = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const getCheckins = () => JSON.parse(localStorage.getItem('checkins') || '{}');
const setCheckins = (c) => localStorage.setItem('checkins', JSON.stringify(c));
const getWeights = () => JSON.parse(localStorage.getItem('weights') || '[]');
const setWeights = (w) => localStorage.setItem('weights', JSON.stringify(w));

/* ---------- Tab 切换 ---------- */
document.querySelectorAll('.tab').forEach((t) => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((x) => x.classList.toggle('active', x === t));
    document.querySelectorAll('.view').forEach((v) => v.classList.toggle('active', v.id === 'view-' + t.dataset.tab));
    if (t.dataset.tab === 'today') renderToday();
    if (t.dataset.tab === 'records') renderRecords();
  });
});

/* ---------- 今天 ---------- */
const WEEKDAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
let selectedDate = null; // null = 今天；否则为选中查看的日期

function exListHTML(d) {
  return d.exercises
    .map(
      ([n, e, s, tip]) => `<li>
        <div class="ex-main"><span class="ex-name">${n}</span><span class="ex-sets">${s}</span></div>
        <div class="ex-meta"><span class="chip">${e}</span><span class="tip">${tip}</span></div>
      </li>`
    )
    .join('');
}

function renderToday() {
  const now = new Date();
  const viewing = selectedDate || now;
  const isToday = key(viewing) === key(now);
  $('#date-line').textContent = `${viewing.getMonth() + 1}月${viewing.getDate()}日 · ${WEEKDAYS[viewing.getDay()]}${isToday ? '' : ' · 查看中'}`;
  $('#today-title').textContent = isToday ? '今日安排' : WEEKDAYS[viewing.getDay()] + '安排';
  const slot = WEEK[viewing.getDay()];
  if (slot.type === 'walk') {
    $('#today-content').innerHTML = `<div class="card today-card">
      <div class="day-badge walk">休息日</div>
      <h2 class="walk-title">快走 20~30 分钟</h2>
      <p class="desc">${WALK_DESC}</p>
    </div>`;
  } else {
    const d = PLAN[slot.type];
    $('#today-content').innerHTML = `<div class="card today-card">
      <div class="card-top"><div class="day-badge">${slot.type}日 · ${d.name}</div><div class="time">${d.time}</div></div>
      <div class="warmup"><b>热身（5分钟）</b><br>${d.warmup}</div>
      <ol class="ex-list">${exListHTML(d)}</ol>
      <div class="cool">${d.cooldown}</div>
    </div>`;
  }
  renderWeekStrip();
  renderCheckin(isToday);
}

function renderWeekStrip() {
  const now = new Date();
  const dow = (now.getDay() + 6) % 7; // 0=周一
  const mon = new Date(now);
  mon.setDate(now.getDate() - dow);
  const labels = ['一', '二', '三', '四', '五', '六', '日'];
  $('#week-strip').innerHTML = labels
    .map((l, i) => {
      const d = new Date(mon);
      d.setDate(mon.getDate() + i);
      const slot = WEEK[d.getDay()];
      const cls = [];
      if (i === dow) cls.push('today');
      if (selectedDate && key(selectedDate) === key(d)) cls.push('selected');
      return `<div class="w-chip${cls.length ? ' ' + cls.join(' ') : ''}" data-i="${i}"><span>${l}</span><b>${slot.type === 'walk' ? '走' : slot.type}</b></div>`;
    })
    .join('');
  document.querySelectorAll('.w-chip').forEach((ch) => {
    ch.addEventListener('click', () => {
      const d = new Date(mon);
      d.setDate(mon.getDate() + Number(ch.dataset.i));
      selectedDate = key(d) === key(new Date()) ? null : d;
      renderToday();
    });
  });
}

function calcStreak() {
  const d = new Date();
  const c = getCheckins();
  if (!c[key(d)]) d.setDate(d.getDate() - 1);
  let n = 0;
  while (c[key(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

function renderCheckin(isToday) {
  const btn = $('#checkin-btn');
  const line = $('#streak-line');
  if (!isToday) {
    btn.textContent = '← 回到今天';
    btn.classList.add('done');
    line.style.display = 'none';
    return;
  }
  line.style.display = '';
  const checked = !!getCheckins()[key(new Date())];
  btn.textContent = checked ? '今日已打卡 ✓（点击撤销）' : '完成今日打卡 ✓';
  btn.classList.toggle('done', checked);
  line.textContent = `🔥 连续打卡 ${calcStreak()} 天`;
}

$('#checkin-btn').addEventListener('click', () => {
  if (selectedDate) { selectedDate = null; renderToday(); return; }
  const c = getCheckins();
  const k = key(new Date());
  if (c[k]) delete c[k]; else c[k] = true;
  setCheckins(c);
  renderCheckin(true);
  renderRecords();
});

/* ---------- 计划 ---------- */
let curDay = 'A';
function renderPlan() {
  const d = PLAN[curDay];
  $('#plan-detail').innerHTML = `<div class="card">
    <div class="card-top"><div class="day-badge">${curDay}日 · ${d.name}</div><div class="time">${d.time}</div></div>
    <div class="warmup"><b>热身（5分钟）</b><br>${d.warmup}</div>
    <ol class="ex-list">${exListHTML(d)}</ol>
    <div class="cool">${d.cooldown}</div>
  </div>`;
}
document.querySelectorAll('#plan-seg .seg-btn').forEach((b) => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#plan-seg .seg-btn').forEach((x) => x.classList.toggle('active', x === b));
    curDay = b.dataset.day;
    renderPlan();
  });
});

/* ---------- 计时器 ---------- */
const timer = { total: 30, remaining: 30, running: false, endAt: 0, tick: null, sets: 0 };

function fmtTime(s) {
  s = Math.ceil(s);
  return s >= 60 ? Math.floor(s / 60) + ':' + pad(s % 60) : String(s);
}
function renderTimer() {
  $('#timer-display').textContent = fmtTime(timer.remaining);
  $('#timer-display').classList.toggle('running', timer.running);
  $('#timer-start').textContent = timer.running ? '暂停' : '开始';
  $('#sets-line').textContent = `已完成 ${timer.sets} 组（点击清零）`;
}
function beep() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  const ctx = new Ctx();
  [0, 200, 400].forEach((t) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = 'sine'; o.frequency.value = 880;
    const t0 = ctx.currentTime + t / 1000;
    g.gain.setValueAtTime(0.4, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.18);
    o.start(t0); o.stop(t0 + 0.2);
  });
  if (navigator.vibrate) navigator.vibrate([300, 100, 300]);
}
function tick() {
  timer.remaining = (timer.endAt - Date.now()) / 1000;
  if (timer.remaining <= 0) {
    clearInterval(timer.tick);
    timer.running = false;
    timer.remaining = timer.total;
    timer.sets++;
    beep();
  }
  renderTimer();
}
function startTimer() {
  timer.running = true;
  timer.endAt = Date.now() + timer.remaining * 1000;
  timer.tick = setInterval(tick, 200);
  renderTimer();
}
function pauseTimer() {
  clearInterval(timer.tick);
  timer.running = false;
  timer.remaining = Math.max(0, (timer.endAt - Date.now()) / 1000);
  renderTimer();
}
function stopTimer() {
  clearInterval(timer.tick);
  timer.running = false;
  timer.remaining = timer.total;
  renderTimer();
}

$('#timer-start').addEventListener('click', () => (timer.running ? pauseTimer() : startTimer()));
$('#timer-reset').addEventListener('click', stopTimer);
$('#sets-line').addEventListener('click', () => { timer.sets = 0; renderTimer(); });
document.querySelectorAll('#presets button').forEach((b) => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#presets button').forEach((x) => x.classList.toggle('active', x === b));
    stopTimer();
    timer.total = +b.dataset.s;
    timer.remaining = timer.total;
    renderTimer();
  });
});
$('#timer-minus').addEventListener('click', () => {
  stopTimer(); timer.total = Math.max(5, timer.total - 15); timer.remaining = timer.total; renderTimer();
});
$('#timer-plus').addEventListener('click', () => {
  stopTimer(); timer.total = Math.min(600, timer.total + 15); timer.remaining = timer.total; renderTimer();
});

/* ---------- 记录 ---------- */
let calY, calM;

function renderRecords() {
  $('#streak-card').innerHTML = `🔥 连续打卡 <b>${calcStreak()}</b> 天`;
  renderCalendar();
  renderWeights();
}

function renderCalendar() {
  const now = new Date();
  if (calY === undefined) { calY = now.getFullYear(); calM = now.getMonth(); }
  $('#cal-title').textContent = `${calY}年${calM + 1}月`;
  const c = getCheckins();
  let html = '';
  for (let i = 0; i < new Date(calY, calM, 1).getDay(); i++) html += '<div></div>';
  const days = new Date(calY, calM + 1, 0).getDate();
  for (let d = 1; d <= days; d++) {
    const k = key(new Date(calY, calM, d));
    const cls = (k === key(now) ? ' today' : '') + (c[k] ? ' checked' : '');
    html += `<div class="cal-day${cls}">${d}</div>`;
  }
  $('#cal-grid').innerHTML = html;
}
$('#cal-prev').addEventListener('click', () => { calM--; if (calM < 0) { calM = 11; calY--; } renderCalendar(); });
$('#cal-next').addEventListener('click', () => { calM++; if (calM > 11) { calM = 0; calY++; } renderCalendar(); });

function renderWeights() {
  const ws = getWeights().sort((a, b) => b.date.localeCompare(a.date));
  const stats = $('#weight-stats');
  if (!ws.length) {
    stats.innerHTML = '<p class="w-empty">还没有记录，保存你的第一个空腹体重吧</p>';
    $('#weight-list').innerHTML = '';
    return;
  }
  const latest = ws[0];
  const delta = (days) => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    const old = ws.filter((w) => w.date <= key(cutoff)).sort((a, b) => a.date.localeCompare(b.date))[0];
    return old ? latest.w - old.w : null;
  };
  const fmt = (n) => (n === null ? '—' : (n > 0 ? '+' : '') + n.toFixed(1) + 'kg');
  const toGoal = latest.w - 64;
  stats.innerHTML = `
    <div class="w-big">${latest.w.toFixed(1)}<small> kg</small></div>
    <div class="w-deltas">
      <span>7天：${fmt(delta(7))}</span>
      <span>30天：${fmt(delta(30))}</span>
      <span>距目标64kg：${toGoal > 0 ? toGoal.toFixed(1) + 'kg' : '已达标 ✓'}</span>
    </div>`;
  $('#weight-list').innerHTML = ws
    .map((w, i) => `<li><span>${w.date}</span><b>${w.w.toFixed(1)} kg</b><button class="del" data-i="${i}">✕</button></li>`)
    .join('');
  document.querySelectorAll('#weight-list .del').forEach((b) => {
    b.addEventListener('click', () => {
      const ws2 = getWeights().sort((a, b) => b.date.localeCompare(a.date));
      ws2.splice(+b.dataset.i, 1);
      setWeights(ws2);
      renderWeights();
    });
  });
}
$('#weight-save').addEventListener('click', () => {
  const v = parseFloat($('#weight-input').value);
  if (!v || v < 30 || v > 150) { alert('请输入有效体重（30~150kg）'); return; }
  const ws = getWeights();
  ws.push({ date: key(new Date()), w: Math.round(v * 10) / 10 });
  setWeights(ws);
  $('#weight-input').value = '';
  renderWeights();
});

/* 导出 / 导入 */
$('#export-btn').addEventListener('click', () => {
  const data = JSON.stringify({ checkins: getCheckins(), weights: getWeights(), exportedAt: new Date().toISOString() }, null, 2);
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
  a.download = '训练数据.json';
  a.click();
});
$('#import-btn').addEventListener('click', () => $('#import-file').click());
$('#import-file').addEventListener('change', (e) => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const d = JSON.parse(r.result);
      if (d.checkins) setCheckins(Object.assign(getCheckins(), d.checkins));
      if (d.weights) setWeights(d.weights);
      renderRecords();
    } catch (err) { alert('导入失败：文件格式不正确'); }
  };
  r.readAsText(f);
  e.target.value = '';
});

/* ---------- 初始化 ---------- */
renderToday();
renderPlan();
renderTimer();
renderRecords();

if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
