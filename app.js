'use strict';

/* ---------- 计划数据 ---------- */
const PLAN = {
  A: {
    name: '全身力量', time: '约28分钟',
    warmup: '原地踏步+摆臂2min → 髋绕环各10次 → 小腿提踵15×2 → 靠墙静蹲30秒（预热膝盖）',
    exercises: [
      { n: '壶铃罗马尼亚硬拉', e: '6kg壶铃', s: '3×12', tip: '微屈膝、髋部向后推，背平直，感受大腿后侧', vid: 'QXRcfqP55Is',
        guide: {
          steps: ['站距与髋同宽，壶铃双手下垂于大腿前', '微屈膝，髋部向后推，背部全程平直', '壶铃沿腿前下放至小腿中部，感受大腿后侧拉伸', '臀部发力向前顶髋，站直回到起始'],
          breathe: '下放吸气，起身顶髋呼气',
          mistakes: ['弓背——变成用腰发力', '膝盖弯曲过多，做成了深蹲', '壶铃离身体太远'],
        } },
      { n: '椅子深蹲', e: '自重', s: '3×10~12', tip: '轻触椅子即起，膝盖对准脚尖，不内扣', vid: 'rvpC9QkTc3Y',
        guide: {
          steps: ['椅子放身后，站距与肩同宽', '臀部向后下方坐，膝盖对准脚尖方向', '轻触椅子立即站起，不要坐实', '脚掌全程踩实，重心在脚中后部'],
          breathe: '下蹲吸气，起身呼气',
          mistakes: ['膝盖内扣', '用惯性弹起', '膝盖不适仍蹲得过深'],
        } },
      { n: '跪姿俯卧撑', e: '自重', s: '3×8~12', tip: '做不了就撑墙/撑桌，躯干一条线', vid: 'NzfZMu9_XGM',
        guide: {
          steps: ['双膝跪地，双手比肩略宽撑地', '头到膝盖保持一条直线', '屈肘下放至胸口接近地面', '推起回到起始'],
          breathe: '下放吸气，推起呼气',
          mistakes: ['塌腰或撅臀', '肘部外展过大', '下放过快靠惯性'],
        } },
      { n: '单臂壶铃划船', e: '6kg壶铃', s: '3×12/侧', tip: '背平，肘向后上方拉', vid: 'Xs8ldCHWuxA',
        guide: {
          steps: ['单手撑椅面，背部平直', '另一手壶铃自然下垂', '肘部贴近身体向后上方拉至腰部', '缓慢下放'],
          breathe: '拉时呼气，放时吸气',
          mistakes: ['耸肩', '身体旋转借力', '拉得过高'],
        } },
      { n: '臀桥', e: '自重', s: '3×15', tip: '顶峰停1~2秒，挤压臀部（护膝关键）', vid: 'q_mmg__3eYU',
        guide: {
          steps: ['仰卧屈膝，脚跟靠近臀部，双脚与髋同宽', '臀部发力将髋顶起，肩到膝成直线', '顶峰挤压臀部停1~2秒', '缓慢下放'],
          breathe: '顶起呼气，下放吸气',
          mistakes: ['用腰顶而不是臀部发力', '顶得过高腰部反弓', '速度太快'],
        } },
      { n: '靠墙静蹲', e: '自重', s: '2×30~45秒', tip: '大腿约90°，膝盖不适就调高角度', vid: '1bh43DdhhPg',
        guide: {
          steps: ['背贴墙，双脚向前移约一步半，与髋同宽', '沿墙下滑至大腿约90°（不适就调高）', '膝盖对准脚尖', '保持均匀呼吸'],
          breathe: '全程均匀呼吸，禁止憋气',
          mistakes: ['大腿低于90°膝盖压力大', '膝盖内扣', '憋气'],
        } },
    ],
    cooldown: '拉伸3分钟：股四头肌、腘绳肌、小腿、髋屈肌各30秒',
  },
  B: {
    name: '核心+心肺', time: '约25分钟',
    warmup: '原地踏步+摆臂2min → 髋绕环各10次 → 小腿提踵15×2 → 靠墙静蹲30秒',
    exercises: [
      { n: '壶铃摆动', e: '6kg壶铃', s: '4组×30秒·休30秒', tip: '髋部发力，膝盖不主动蹲，腰背平直（第2周5组、第4周6组）', vid: '4D8KPkCXZxY',
        guide: {
          steps: ['站距略宽于肩，壶铃置于身前地面', '髋部后推，双手抓住壶铃', '髋部爆发力向前顶，把壶铃甩至胸口高度', '壶铃自然下摆，髋部再次后推缓冲'],
          breathe: '甩起呼气，下摆吸气',
          mistakes: ['用手臂举壶铃而不是髋发力', '蹲成了深蹲', '弓背'],
        } },
      { n: '半跪健腹轮', e: '健腹轮', s: '3×8~12', tip: '骨盆后倾、收腹、不塌腰，滚出距离先小后大', vid: 'tf4Fwji5B54',
        guide: {
          steps: ['双膝跪地，双手握健腹轮', '骨盆后倾，腹部收紧', '慢慢向前滚出，身体接近地面但腰不塌', '用腹部力量把轮子拉回'],
          breathe: '滚出吸气，收回呼气',
          mistakes: ['塌腰——伤腰风险最大', '滚出太远', '手臂发力过多'],
        } },
      { n: '死虫式', e: '瑜伽垫', s: '3×10/侧', tip: '下背贴地，对侧手脚慢伸', vid: 'xZhwA0lgIs8',
        guide: {
          steps: ['仰卧，双臂指向天花板，双腿抬起屈膝90°', '下背贴实地面', '对侧手脚缓慢下放至接近地面', '回到原位，换边重复'],
          breathe: '下放吸气，收回呼气',
          mistakes: ['下背离开地面', '动作过快', '憋气'],
        } },
      { n: '鸟狗式', e: '瑜伽垫', s: '3×10/侧', tip: '躯干稳定不晃动', vid: 'ibqST4wJXo4',
        guide: {
          steps: ['四点跪姿，手在肩正下方、膝在髋正下方', '同时伸出对侧手脚至与躯干齐平', '保持2秒后收回', '换边重复'],
          breathe: '伸出呼气，收回吸气',
          mistakes: ['躯干左右晃动', '抬头塌腰', '手脚抬得过高'],
        } },
      { n: '平板支撑', e: '自重', s: '3×30~45秒', tip: '臀收紧、不撅臀不塌腰', vid: 'yXH6dYtHnxs',
        guide: {
          steps: ['肘撑地，肘在肩正下方', '双脚并拢，身体从头到脚成直线', '收紧腹部和臀部', '保持到计划时长'],
          breathe: '全程均匀呼吸',
          mistakes: ['撅臀或塌腰', '头下垂', '耸肩'],
        } },
    ],
    cooldown: '拉伸3分钟',
  },
  C: {
    name: '上肢塑形+膝盖保养', time: '约28分钟',
    warmup: '同A日：踏步摆臂 → 髋绕环 → 小腿提踵 → 靠墙静蹲30秒',
    exercises: [
      { n: '哑铃坐姿推举', e: '2kg×2', s: '3×15', tip: '核心收紧，不耸肩', vid: 'hW3eTHHnb0s',
        guide: {
          steps: ['坐姿，背部贴实靠背', '哑铃举至耳侧，掌心朝前', '向上推至手臂接近伸直但不锁死', '缓慢下放至耳侧'],
          breathe: '上推呼气，下放吸气',
          mistakes: ['耸肩', '腰部过度反弓', '下放过快'],
        } },
      { n: '哑铃侧平举', e: '2kg×2', s: '3×15', tip: '肘微屈，抬至肩高即可，慢放', vid: 'G0HBr7tJH0I',
        guide: {
          steps: ['站姿，肘微屈，哑铃放体侧', '肩部发力向两侧抬起至与肩同高', '顶端停1秒', '缓慢下放'],
          breathe: '上抬呼气，下放吸气',
          mistakes: ['耸肩借力', '抬得超过肩高', '身体后仰借力'],
        } },
      { n: '俯身哑铃划船', e: '2kg×2', s: '3×15', tip: '俯身45°，肘贴身体向后拉', vid: 'gfUg6qWohTk',
        guide: {
          steps: ['俯身约45°，膝盖微屈，背部平直', '哑铃自然下垂于肩下方', '肘贴身体向后拉至腹部两侧', '缓慢下放'],
          breathe: '拉时呼气，放时吸气',
          mistakes: ['弓背', '身体上下起伏借力', '耸肩'],
        } },
      { n: '哑铃锤式弯举', e: '2kg×2', s: '3×15', tip: '肘固定，慢起慢放', vid: 't8jIkV7laYU',
        guide: {
          steps: ['站姿，哑铃掌心相对如握锤', '上臂固定贴紧身体', '弯举至前臂接近垂直', '缓慢下放伸直'],
          breathe: '弯举呼气，下放吸气',
          mistakes: ['肘部前移借力', '身体后仰甩动', '下放太快'],
        } },
      { n: '靠墙静蹲', e: '自重', s: '3×40秒', tip: '强化股四头，养护膝关节', vid: '1bh43DdhhPg',
        guide: {
          steps: ['背贴墙，双脚向前移约一步半', '沿墙下滑至大腿约90°（不适就调高）', '膝盖对准脚尖', '保持均匀呼吸'],
          breathe: '全程均匀呼吸，禁止憋气',
          mistakes: ['角度过低膝盖压力大', '膝盖内扣', '憋气'],
        } },
      { n: '超人式', e: '瑜伽垫', s: '3×12', tip: '强化下背，与健腹轮配套', vid: 'mf043iaj5jk',
        guide: {
          steps: ['俯卧，双臂向前伸直', '同时抬起双臂和双腿离开地面', '顶峰停1~2秒', '缓慢放下'],
          breathe: '抬起呼气，放下吸气',
          mistakes: ['抬得过高引起腰部不适（离地即可）', '颈部过度后仰', '憋气'],
        } },
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
const getSettings = () => JSON.parse(localStorage.getItem('settings') || '{}');
const setSettings = (s) => localStorage.setItem('settings', JSON.stringify(s));

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

/* 生理周期推算（默认28天） */
function cycleDay() {
  const s = getSettings();
  if (!s.periodStart) return null;
  const days = Math.floor((Date.now() - new Date(s.periodStart + 'T00:00:00').getTime()) / 86400000);
  return ((days % 28) + 28) % 28;
}
function phaseTip(d) {
  if (d <= 5) return '经期中：训练改快走或减半，别硬练';
  if (d >= 25) return '经期临近：体重可能水肿上涨1~2kg，别慌，过后会回落';
  return '状态窗口：身体状态好，适合正常训练或加量';
}
function phaseBanner() {
  const s = getSettings();
  if (!s.female) return '';
  const d = cycleDay();
  if (d === null) return '<div class="card phase-banner">🌸 女性提醒已开启：去"记录"页点一次"今天来了"开始记录周期</div>';
  return `<div class="card phase-banner">🌸 周期第 ${d + 1} 天 · ${phaseTip(d)}</div>`;
}

function exListHTML(d) {
  return d.exercises
    .map(
      (x) => `<li>
        <div class="ex-toggle">
          <div class="ex-main"><span class="ex-name">${x.n}</span><span class="ex-sets">${x.s}</span></div>
          <div class="ex-meta"><span class="chip">${x.e}</span><span class="tip">${x.tip}</span></div>
          <div class="ex-more">学习 ▾</div>
        </div>
        <div class="ex-guide" hidden>
          <ol class="steps">${x.guide.steps.map((st) => `<li>${st}</li>`).join('')}</ol>
          <p class="breathe">🌬 呼吸：${x.guide.breathe}</p>
          <ul class="mistakes">${x.guide.mistakes.map((m) => `<li>✗ ${m}</li>`).join('')}</ul>
          <div class="video-wrap">
            <iframe data-src="https://www.youtube-nocookie.com/embed/${x.vid}" title="${x.n} 教学视频" allow="autoplay; fullscreen" allowfullscreen loading="lazy"></iframe>
          </div>
        </div>
      </li>`
    )
    .join('');
}

/* 点动作展开/收起学习卡（手风琴模式：同一时间只展开一个，视频懒加载） */
document.addEventListener('click', (ev) => {
  const t = ev.target.closest('.ex-toggle');
  if (!t) return;
  const li = t.closest('li');
  const guide = li.querySelector('.ex-guide');
  const willOpen = guide.hidden;
  // 先收起其他所有已展开的学习卡，并停掉它们的视频
  li.parentElement.querySelectorAll('.ex-guide:not([hidden])').forEach((g) => {
    g.hidden = true;
    const f = g.querySelector('iframe');
    if (f) f.setAttribute('src', '');
  });
  li.parentElement.querySelectorAll('.ex-toggle.open').forEach((x) => x.classList.remove('open'));
  if (willOpen) {
    const iframe = guide.querySelector('iframe');
    if (iframe && !iframe.getAttribute('src')) iframe.setAttribute('src', iframe.dataset.src);
    guide.hidden = false;
    t.classList.add('open');
  }
});

function renderToday() {
  const now = new Date();
  const viewing = selectedDate || now;
  const isToday = key(viewing) === key(now);
  $('#date-line').textContent = `${viewing.getMonth() + 1}月${viewing.getDate()}日 · ${WEEKDAYS[viewing.getDay()]}${isToday ? '' : ' · 查看中'}`;
  $('#today-title').textContent = isToday ? '今日安排' : WEEKDAYS[viewing.getDay()] + '安排';
  const slot = WEEK[viewing.getDay()];
  const banner = phaseBanner();
  if (slot.type === 'walk') {
    $('#today-content').innerHTML = banner + `<div class="card today-card">
      <div class="day-badge walk">休息日</div>
      <h2 class="walk-title">快走 20~30 分钟</h2>
      <p class="desc">${WALK_DESC}</p>
    </div>`;
  } else {
    const d = PLAN[slot.type];
    $('#today-content').innerHTML = banner + `<div class="card today-card">
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
  renderSettingsPanel();
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
    updateProteinLine();
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
  const goal = getSettings().goal || 64;
  const toGoal = latest.w - goal;
  stats.innerHTML = `
    <div class="w-big">${latest.w.toFixed(1)}<small> kg</small></div>
    <div class="w-deltas">
      <span>7天：${fmt(delta(7))}</span>
      <span>30天：${fmt(delta(30))}</span>
      <span>距目标${goal}kg：${toGoal > 0 ? toGoal.toFixed(1) + 'kg' : '已达标 ✓'}</span>
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
  updateProteinLine();
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

/* ---------- 蛋白质建议 & 个人设置 ---------- */
function updateProteinLine() {
  const el = $('#protein-val');
  if (!el) return;
  const ws = getWeights();
  if (!ws.length) { el.textContent = '100~120g/天'; return; }
  const latest = ws.sort((a, b) => b.date.localeCompare(a.date))[0];
  el.textContent = `约 ${Math.round(latest.w * 1.6)}g/天`;
}

function renderSettingsPanel() {
  const s = getSettings();
  $('#goal-input').value = s.goal || '';
  $('#female-toggle').checked = !!s.female;
  $('#female-panel').hidden = !s.female;
  renderPhase();
}

function renderPhase() {
  const d = cycleDay();
  $('#phase-line').textContent = d === null
    ? '点"今天来了"记录一次，App 会按28天周期自动推算阶段'
    : `周期第 ${d + 1} 天 · ${phaseTip(d)}`;
}

$('#goal-save').addEventListener('click', () => {
  const v = parseFloat($('#goal-input').value);
  if (!v || v < 40 || v > 100) { alert('请输入有效目标体重（40~100kg）'); return; }
  const s = getSettings();
  s.goal = Math.round(v * 10) / 10;
  setSettings(s);
  renderWeights();
});

$('#female-toggle').addEventListener('change', (e) => {
  const s = getSettings();
  s.female = e.target.checked;
  setSettings(s);
  renderSettingsPanel();
  renderToday();
});

$('#period-btn').addEventListener('click', () => {
  const s = getSettings();
  s.periodStart = key(new Date());
  setSettings(s);
  renderPhase();
  renderToday();
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
