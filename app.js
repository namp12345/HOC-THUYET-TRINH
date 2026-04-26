/* =============================================
   AI Tour Guide Speaking Coach v3.0
   Teleprompter + Topic Manager + Font Settings
   ============================================= */

// ── BUILT-IN TOPICS ───────────────────────────
const BUILTIN_TOPICS = [
  {
    id: 'linh-ung', emoji: '🛕', name: 'Chùa Linh Ứng', duration: '2-3 phút', builtin: true,
    script: 'Xin chào quý khách. Hôm nay tôi sẽ giới thiệu với quý khách về Chùa Linh Ứng, một trong những địa điểm nổi tiếng nhất tại Đà Nẵng. Chùa nằm trên bán đảo Sơn Trà, nơi có vị trí rất đẹp, một bên là núi, một bên là biển. Điểm nổi bật nhất ở đây là tượng Phật Bà Quan Âm rất cao và trang nghiêm. Người dân địa phương tin rằng tượng Phật Bà che chở cho thành phố, mang lại bình an, may mắn và sức khỏe. Khi đến đây, quý khách không chỉ tham quan kiến trúc Phật giáo mà còn có thể ngắm toàn cảnh biển và thành phố Đà Nẵng từ trên cao.',
    keywords: ['chùa','phật','quan âm','sơn trà','linh ứng','tượng','bán đảo']
  },
  {
    id: 'ba-na', emoji: '🚠', name: 'Bà Nà Hills', duration: '2-3 phút', builtin: true,
    script: 'Kính chào quý khách, chúng ta sắp đến với Bà Nà Hills, một trong những khu du lịch hấp dẫn bậc nhất miền Trung. Bà Nà Hills nằm ở độ cao hơn 1.400 mét so với mực nước biển, vì vậy khí hậu nơi đây mát mẻ và dễ chịu quanh năm. Điểm nhấn nổi bật nhất là Cầu Vàng, công trình được đỡ bởi hai bàn tay khổng lồ bằng đá, trở thành biểu tượng du lịch nổi tiếng toàn cầu. Ngoài ra, quý khách còn có thể khám phá hệ thống cáp treo dài nhất châu Á và khu vui chơi Fantasy Park sôi động.',
    keywords: ['bà nà','cầu vàng','cáp treo','fantasy park','độ cao','khí hậu']
  },
  {
    id: 'hoi-an', emoji: '🏮', name: 'Hội An', duration: '2-3 phút', builtin: true,
    script: 'Thưa quý khách, chúng ta đang đến với Hội An – một đô thị cổ được UNESCO công nhận là Di sản Văn hóa Thế giới từ năm 1999. Phố cổ Hội An lưu giữ những công trình kiến trúc hàng trăm năm tuổi, là sự pha trộn độc đáo giữa văn hóa Việt, Hoa, Nhật và phương Tây. Điểm không thể bỏ qua là Chùa Cầu, cây cầu gỗ cổ nhỏ nhắn nhưng đầy ý nghĩa lịch sử. Vào buổi tối, phố cổ lung linh ánh đèn lồng đủ màu sắc tạo nên khung cảnh lãng mạn khó quên.',
    keywords: ['hội an','phố cổ','unesco','chùa cầu','đèn lồng','di sản']
  },
  {
    id: 'ngu-hanh-son', emoji: '⛰️', name: 'Ngũ Hành Sơn', duration: '2-3 phút', builtin: true,
    script: 'Xin chào quý khách, chúng ta đang đến thăm Ngũ Hành Sơn, hay còn gọi là Non Nước. Đây là cụm năm ngọn núi đá cẩm thạch và vôi tại phía Nam Đà Nẵng. Năm ngọn núi được đặt theo tên của năm nguyên tố trong triết học phương Đông: Kim, Mộc, Thủy, Hỏa và Thổ. Bên trong các ngọn núi có nhiều hang động và chùa chiền cổ xưa tuyệt đẹp. Đặc biệt, nơi đây nổi tiếng với nghề điêu khắc đá mỹ nghệ truyền thống.',
    keywords: ['ngũ hành sơn','non nước','đá cẩm thạch','hang động','điêu khắc','nguyên tố']
  },
  {
    id: 'chao-doan', emoji: '👋', name: 'Chào đoàn trên xe', duration: '1-2 phút', builtin: true,
    script: 'Xin kính chào toàn thể quý khách! Em tên là ... và em sẽ là hướng dẫn viên đồng hành cùng quý khách trong suốt chuyến tham quan hôm nay. Trước tiên, em xin thay mặt công ty du lịch gửi đến quý khách lời chào đón nồng nhiệt nhất. Hôm nay chúng ta sẽ có một hành trình rất thú vị. Trong suốt chuyến đi, nếu quý khách có bất kỳ thắc mắc hay yêu cầu gì, xin hãy thoải mái liên hệ với em.',
    keywords: ['xin chào','hướng dẫn viên','chuyến đi','quý khách','hành trình']
  },
  {
    id: 'tam-biet', emoji: '🌅', name: 'Tạm biệt khách', duration: '1-2 phút', builtin: true,
    script: 'Thưa quý khách, chuyến tham quan của chúng ta hôm nay đã gần kết thúc. Em thay mặt công ty du lịch và đội ngũ phục vụ chân thành cảm ơn quý khách đã tin tưởng và lựa chọn chúng em trong hành trình này. Hy vọng những trải nghiệm hôm nay đã mang lại cho quý khách những khoảnh khắc vui vẻ và ý nghĩa. Chúc quý khách lên đường bình an, sức khỏe dồi dào và hẹn gặp lại!',
    keywords: ['cảm ơn','tạm biệt','chúc','bình an','sức khỏe','hẹn gặp']
  }
];

const FILLER_WORDS = [
  'ừm','ừ','à','ờ','thì','ý','kiểu','kiểu như','như là','tức là','thực ra',
  'thực sự','cơ bản là','nói chung','rồi thì','về cơ bản','cũng','vậy','thế','nhỉ','nhé'
];

const TIPS = [
  { icon: '🐢', title: 'Nói chậm hơn 10%', desc: 'Tốc độ lý tưởng cho hướng dẫn viên là 100–130 WPM. Nói chậm giúp khách tiếp thu tốt hơn và bạn trông chuyên nghiệp hơn.' },
  { icon: '⏸️', title: 'Ngắt nghỉ chiến lược', desc: 'Sau mỗi ý chính, dừng 1-2 giây. Khoảng im lặng tạo điểm nhấn và giúp khách xử lý thông tin.' },
  { icon: '🚫', title: 'Loại bỏ từ đệm', desc: 'Thay "ừm, à, thì là" bằng khoảng dừng im lặng. Im lặng ngắn thể hiện sự tự tin.' },
  { icon: '🎭', title: 'Thay đổi cao độ giọng', desc: 'Lên cao khi nói về điều thú vị, xuống thấp khi nhấn mạnh. Giọng đều đều sẽ làm khách buồn ngủ.' },
  { icon: '👁️', title: 'Giao tiếp bằng mắt', desc: 'Nhìn vào từng nhóm khách khi nói, không nhìn xuống ghi chú. Mắt là cầu nối cảm xúc mạnh nhất.' },
  { icon: '💛', title: 'Kết bài bằng cảm xúc', desc: 'Kết thúc bằng lời chúc chân thành. Ấn tượng cuối cùng quan trọng không kém ấn tượng đầu tiên.' },
  { icon: '🧠', title: 'Kể chuyện, không đọc số liệu', desc: 'Thay vì "chùa cao 67m", hãy nói "tượng Phật cao đến mức từ biển bạn có thể nhìn thấy".' },
  { icon: '🔥', title: 'Luyện mỗi ngày 7 phút', desc: '7 phút mỗi ngày trong 30 ngày tốt hơn 3 tiếng một lần mỗi tuần. Nhất quán tạo ra xuất sắc.' }
];

const EMOJI_OPTS = ['🛕','🏯','⛩️','🏔️','⛰️','🌊','🚠','🏮','🌸','🌺','🦁','🐉','⭐','🎯','🗺️','🧭','🎪','🎭','🌴','🏝️','🌏','✈️','🚢','🎋','🏛️','🌅','🌄','🌃'];

// ── STATE ─────────────────────────────────────
let selectedTopic = null;
let isRecording = false;
let recognition = null;
let timerInterval = null;
let elapsedSeconds = 0;
let currentTranscript = '';
let speechSupported = false;
let currentAnalysis = null;
let pauseCount = 0;
let lastWordTime = Date.now();
let editingTopicId = null;
let selectedEmoji = '🎯';

// MediaRecorder for audio playback
let mediaRecorder = null;
let audioChunks = [];
let currentAudioBlob = null;
let currentAudioUrl = null;
let audioPlayer = null;        // HTMLAudioElement
let audioUpdateInterval = null;

// Teleprompter state
let tpRunning = false;
let tpAnimFrame = null;
let tpScrollPos = 0;
let tpSpeed = 3;
let tpFontLevel = 3; // 1-5
let tpLightMode = false;
let tpCurrentTopic = null;
const TP_FONT_SIZES = ['1.1rem','1.35rem','1.6rem','1.9rem','2.3rem'];
const TP_FONT_LABELS = ['XS','S','M','L','XL'];

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  checkSpeechSupport();
  buildTopicGrid();
  buildTips();
  renderHistory();
  renderStats();
  bindTabs();
  // bindRecordBtn() — manual recorder removed in v4.2, ghi âm chỉ qua Teleprompter
  bindSaveBtn();
  bindTopicModal();
  bindTeleprompter();
  bindSettings();
  updateStreak();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./service-worker.js').catch(() => {});
});

// ── SETTINGS ──────────────────────────────────
function loadSettings() {
  const s = getSavedSettings();
  applyFontScale(s.fontScale || 1);
  // Sync sliders
  const slid = document.getElementById('fontScaleSlider');
  const val  = document.getElementById('fontScaleVal');
  if (slid) { slid.value = Math.round((s.fontScale||1)*100); }
  if (val)  { val.textContent = Math.round((s.fontScale||1)*100) + '%'; }
  syncFsBtns(s.fontScale || 1);

  tpSpeed = s.tpSpeed || 3;
  tpLightMode = s.tpLight || false;
  tpFontLevel = s.tpFontLevel || 3;
  const dss = document.getElementById('defSpeedSlider');
  const dsv = document.getElementById('defSpeedVal');
  if (dss) { dss.value = tpSpeed; }
  if (dsv) { dsv.textContent = tpSpeed; }
  const dlt = document.getElementById('tpDefaultLight');
  if (dlt) dlt.checked = tpLightMode;
}

function getSavedSettings() {
  try { return JSON.parse(localStorage.getItem('appSettings')) || {}; } catch { return {}; }
}
function saveSettings(patch) {
  const s = getSavedSettings();
  Object.assign(s, patch);
  localStorage.setItem('appSettings', JSON.stringify(s));
}

function applyFontScale(scale) {
  document.documentElement.style.setProperty('--app-font-scale', scale);
}

function syncFsBtns(scale) {
  document.querySelectorAll('.fs-btn').forEach(btn => {
    btn.classList.toggle('active', parseFloat(btn.dataset.scale) === scale);
  });
}

function bindSettings() {
  // Font size preset buttons
  document.querySelectorAll('.fs-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const scale = parseFloat(btn.dataset.scale);
      applyFontScale(scale);
      syncFsBtns(scale);
      const slid = document.getElementById('fontScaleSlider');
      const val  = document.getElementById('fontScaleVal');
      if (slid) slid.value = Math.round(scale * 100);
      if (val)  val.textContent = Math.round(scale * 100) + '%';
      saveSettings({ fontScale: scale });
    });
  });

  // Font slider
  const fontSlider = document.getElementById('fontScaleSlider');
  const fontVal    = document.getElementById('fontScaleVal');
  if (fontSlider) {
    fontSlider.addEventListener('input', () => {
      const scale = fontSlider.value / 100;
      applyFontScale(scale);
      if (fontVal) fontVal.textContent = fontSlider.value + '%';
      syncFsBtns(scale);
      saveSettings({ fontScale: scale });
    });
  }

  // Teleprompter default speed
  const dss = document.getElementById('defSpeedSlider');
  const dsv = document.getElementById('defSpeedVal');
  if (dss) {
    dss.addEventListener('input', () => {
      tpSpeed = parseInt(dss.value);
      if (dsv) dsv.textContent = tpSpeed;
      saveSettings({ tpSpeed: tpSpeed });
    });
  }

  // Teleprompter light mode toggle
  const dlt = document.getElementById('tpDefaultLight');
  if (dlt) {
    dlt.addEventListener('change', () => {
      tpLightMode = dlt.checked;
      saveSettings({ tpLight: tpLightMode });
    });
  }

  // Teleprompter font preset buttons (in Settings tab)
  document.querySelectorAll('.fs-btn[data-tpfont]').forEach(btn => {
    const level = parseInt(btn.dataset.tpfont);
    // Mark active on load
    if (level === tpFontLevel) btn.classList.add('active');
    btn.addEventListener('click', () => {
      tpFontLevel = level;
      applyTpFont();
      saveSettings({ tpFontLevel: tpFontLevel });
      // Sync hidden slider
      const fs = document.getElementById('tpFontSlider');
      if (fs) fs.value = tpFontLevel;
      // Sync active class
      document.querySelectorAll('.fs-btn[data-tpfont]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Clear data
  const clearBtn = document.getElementById('clearDataBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (confirm('Xoá toàn bộ lịch sử luyện tập và chủ đề tuỳ chỉnh? Hành động này không thể hoàn tác.')) {
        localStorage.removeItem('speakingHistory');
        localStorage.removeItem('streakData');
        localStorage.removeItem('customTopics');
        buildTopicGrid();
        renderHistory();
        renderStats();
        updateStreak();
        showToast('🗑️ Đã xoá toàn bộ dữ liệu.');
      }
    });
  }
}

// ── CUSTOM TOPICS STORAGE ─────────────────────
function getCustomTopics() {
  try { return JSON.parse(localStorage.getItem('customTopics')) || []; } catch { return []; }
}
function saveCustomTopics(arr) {
  localStorage.setItem('customTopics', JSON.stringify(arr));
}
function getAllTopics() {
  return [...BUILTIN_TOPICS, ...getCustomTopics()];
}

// ── TABS ──────────────────────────────────────
function bindTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const t = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-' + t).classList.add('active');
      if (t === 'history') renderHistory();
      if (t === 'stats')   renderStats();
    });
  });
}

// ── TOPIC GRID ────────────────────────────────
function buildTopicGrid() {
  const grid = document.getElementById('topicGrid');
  if (!grid) return;
  grid.innerHTML = '';

  getAllTopics().forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card' + (topic.builtin ? '' : ' custom-card');
    card.dataset.id = topic.id;
    if (selectedTopic && selectedTopic.id === topic.id) card.classList.add('selected');

    // Edit/delete buttons for custom topics
    const actionsHtml = topic.builtin ? '' : `
      <div class="topic-actions">
        <button class="topic-action-btn edit" data-id="${topic.id}" title="Sửa">✏️</button>
        <button class="topic-action-btn del"  data-id="${topic.id}" title="Xóa">🗑</button>
      </div>`;

    card.innerHTML = `
      ${actionsHtml}
      <span class="topic-emoji">${topic.emoji}</span>
      <span class="topic-name">${topic.name}</span>
      <span class="topic-dur">${topic.duration || ''}</span>
      <button class="topic-teleprompter-btn" data-id="${topic.id}">📺 Teleprompter</button>`;

    // Select topic
    card.addEventListener('click', (e) => {
      if (e.target.closest('.topic-actions') || e.target.classList.contains('topic-teleprompter-btn')) return;
      selectTopic(topic, card);
    });

    // Teleprompter button
    card.querySelector('.topic-teleprompter-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openTeleprompter(topic);
    });

    // Edit/delete for custom topics
    if (!topic.builtin) {
      card.querySelector('.topic-action-btn.edit').addEventListener('click', (e) => {
        e.stopPropagation();
        openTopicModal(topic);
      });
      card.querySelector('.topic-action-btn.del').addEventListener('click', (e) => {
        e.stopPropagation();
        deleteCustomTopic(topic.id);
      });
    }

    grid.appendChild(card);
  });

  // Add topic button
  const addBtn = document.createElement('div');
  addBtn.className = 'add-topic-btn';
  addBtn.innerHTML = `<span>➕</span><p>Thêm chủ đề</p>`;
  addBtn.addEventListener('click', () => openTopicModal(null));
  grid.appendChild(addBtn);
}

function selectTopic(topic, card) {
  document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  selectedTopic = topic;
  document.getElementById('scriptTopicName').textContent = `${topic.emoji} ${topic.name}`;
  document.getElementById('scriptText').textContent = topic.script;
  document.getElementById('scriptSection').style.display = 'block';
  document.getElementById('resultCard').classList.remove('visible');
  document.getElementById('saveBtn').style.display = 'none';
  currentTranscript = '';
  // Guard removed elements (liveSection removed in v4.2)
  const _ls = document.getElementById('liveSection');   if (_ls) _ls.style.display = 'none';
  const _lt = document.getElementById('liveTranscript'); if (_lt) _lt.innerHTML = '';
  const _lstat = document.getElementById('liveStats');   if (_lstat) _lstat.innerHTML = '';

  const quickBtn = document.getElementById('quickTeleBtn');
  if (quickBtn) quickBtn.onclick = () => openTeleprompter(topic);
}

// ── TOPIC MODAL ───────────────────────────────
function openTopicModal(topicOrNull) {
  editingTopicId = topicOrNull ? topicOrNull.id : null;
  const modal = document.getElementById('topicModal');
  const title = document.getElementById('topicModalTitle');
  const nameEl = document.getElementById('tmName');
  const durEl  = document.getElementById('tmDuration');
  const scriptEl = document.getElementById('tmScript');
  const noteEl = document.getElementById('tmNote');

  title.textContent = topicOrNull ? '✏️ Sửa chủ đề' : '➕ Thêm chủ đề mới';

  if (topicOrNull) {
    nameEl.value   = topicOrNull.name || '';
    durEl.value    = topicOrNull.duration || '';
    scriptEl.value = topicOrNull.script || '';
    noteEl.value   = topicOrNull.note || '';
    selectedEmoji  = topicOrNull.emoji || '🎯';
  } else {
    nameEl.value = ''; durEl.value = ''; scriptEl.value = ''; noteEl.value = '';
    selectedEmoji = '🎯';
  }

  buildEmojiPicker();
  modal.classList.add('open');
}

function closeTopicModal() {
  document.getElementById('topicModal').classList.remove('open');
  editingTopicId = null;
}

function buildEmojiPicker() {
  const picker = document.getElementById('emojiPicker');
  picker.innerHTML = '';
  EMOJI_OPTS.forEach(em => {
    const btn = document.createElement('button');
    btn.className = 'emoji-opt' + (em === selectedEmoji ? ' selected' : '');
    btn.textContent = em;
    btn.addEventListener('click', () => {
      selectedEmoji = em;
      picker.querySelectorAll('.emoji-opt').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
    picker.appendChild(btn);
  });
}

function bindTopicModal() {
  document.getElementById('topicModalCancel').addEventListener('click', closeTopicModal);
  document.getElementById('topicModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('topicModal')) closeTopicModal();
  });

  document.getElementById('topicModalSave').addEventListener('click', () => {
    const name   = document.getElementById('tmName').value.trim();
    const dur    = document.getElementById('tmDuration').value.trim();
    const script = document.getElementById('tmScript').value.trim();
    const note   = document.getElementById('tmNote').value.trim();

    if (!name) { showToast('⚠️ Vui lòng nhập tên chủ đề!'); return; }
    if (!script) { showToast('⚠️ Vui lòng nhập nội dung bài nói!'); return; }

    const customs = getCustomTopics();
    if (editingTopicId) {
      const idx = customs.findIndex(c => c.id === editingTopicId);
      if (idx > -1) {
        customs[idx] = { ...customs[idx], name, emoji: selectedEmoji, duration: dur, script, note, keywords: [] };
      }
    } else {
      const newTopic = {
        id: 'custom-' + Date.now(),
        name, emoji: selectedEmoji, duration: dur, script, note,
        keywords: [], builtin: false
      };
      customs.push(newTopic);
    }
    saveCustomTopics(customs);
    buildTopicGrid();
    closeTopicModal();
    showToast(editingTopicId ? '✅ Đã cập nhật chủ đề!' : '✅ Đã thêm chủ đề mới!');
  });
}

function deleteCustomTopic(id) {
  if (!confirm('Xoá chủ đề này?')) return;
  const customs = getCustomTopics().filter(c => c.id !== id);
  saveCustomTopics(customs);
  if (selectedTopic && selectedTopic.id === id) {
    selectedTopic = null;
    document.getElementById('scriptSection').style.display = 'none';
  }
  buildTopicGrid();
  showToast('🗑️ Đã xoá chủ đề.');
}

// ══════════════════════════════════════════════
// TELEPROMPTER v4 — Integrated Recording
// ══════════════════════════════════════════════

// Extra state for TP recording
let tpIsRecording = false;
let tpRecognition = null;
let tpTimerInterval = null;
let tpElapsedSeconds = 0;
let tpTranscript = '';
let tpPauseCount = 0;
let tpLastWordTime = Date.now();
let tpCurrentAnalysis = null;
let wakeLock = null;

function openTeleprompter(topic) {
  // Set the topic for recording context too
  selectedTopic = topic;
  tpCurrentTopic = topic;

  const screen = document.getElementById('teleprompterScreen');
  document.getElementById('tpText').textContent = topic.script || '';
  document.getElementById('tpTopicName').textContent = `${topic.emoji} ${topic.name}`;

  const s = getSavedSettings();
  tpSpeed = s.tpSpeed || 3;
  tpLightMode = s.tpLight || false;
  if (tpLightMode) screen.classList.add('tp-light'); else screen.classList.remove('tp-light');

  // Reset scroll & playback
  tpScrollPos = 0;
  tpRunning = false;
  applyTpFont();
  updateTpPlayBtn();
  syncTpSliders();

  // Reset recording state
  tpStopRecording(false); // silently stop if any
  tpResetRecUI();

  // Wake lock
  if (navigator.wakeLock) navigator.wakeLock.request('screen').then(wl => { wakeLock = wl; }).catch(() => {});

  screen.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeTeleprompter() {
  // Stop scroll
  tpRunning = false;
  cancelAnimationFrame(tpAnimFrame);

  // Stop recording if active
  if (tpIsRecording) tpStopRecording(false);

  document.getElementById('teleprompterScreen').classList.remove('open');
  document.body.style.overflow = '';

  // Release wake lock
  if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
}

function bindTeleprompter() {
  // ── Close ──
  document.getElementById('tpCloseBtn').addEventListener('click', () => {
    if (tpIsRecording) {
      if (!confirm('Đang ghi âm. Đóng sẽ dừng và mất dữ liệu. Tiếp tục?')) return;
    }
    closeTeleprompter();
  });

  // ── MAIN BUTTON: play scroll + start recording (1 tap = cả hai) ──
  document.getElementById('tpPlayBtn').addEventListener('click', () => {
    if (!tpIsRecording) {
      // Chưa chạy → bắt đầu: scroll + ghi âm cùng lúc
      if (!speechSupported) { showToast('⚠️ Dùng Chrome trên Android!'); return; }
      tpRunning = true;
      updateTpPlayBtn();
      tpTick();
      tpStartRecording();
    } else {
      // Đang chạy → dừng: scroll + dừng ghi âm + hiện kết quả
      tpRunning = false;
      cancelAnimationFrame(tpAnimFrame);
      updateTpPlayBtn();
      tpStopRecording(true);
    }
  });

  // ── Reset: cuộn về đầu, dừng tất cả ──
  document.getElementById('tpResetBtn').addEventListener('click', () => {
    if (tpIsRecording) {
      if (!confirm('Dừng ghi âm và cuộn về đầu?')) return;
      tpStopRecording(false);
    }
    tpScrollPos = 0;
    tpRunning = false;
    updateTpPlayBtn();
    cancelAnimationFrame(tpAnimFrame);
    applyTpScroll();
  });

  // ── Theme ──
  document.getElementById('tpThemeBtn').addEventListener('click', () => {
    tpLightMode = !tpLightMode;
    const screen = document.getElementById('teleprompterScreen');
    if (tpLightMode) screen.classList.add('tp-light'); else screen.classList.remove('tp-light');
    document.getElementById('tpThemeBtn').textContent = tpLightMode ? '🌙' : '☀';
    saveSettings({ tpLight: tpLightMode });
    const dlt = document.getElementById('tpDefaultLight');
    if (dlt) dlt.checked = tpLightMode;
  });

  // ── Speed slider ──
  const speedSlider = document.getElementById('tpSpeedSlider');
  speedSlider.addEventListener('input', () => {
    tpSpeed = parseInt(speedSlider.value);
    document.getElementById('tpSpeedVal').textContent = tpSpeed;
  });

  // ── Speed − + buttons ──
  document.getElementById('tpSpeedDown').addEventListener('click', () => {
    tpSpeed = Math.max(1, tpSpeed - 1);
    document.getElementById('tpSpeedSlider').value = tpSpeed;
    document.getElementById('tpSpeedVal').textContent = tpSpeed;
  });
  document.getElementById('tpSpeedUp').addEventListener('click', () => {
    tpSpeed = Math.min(10, tpSpeed + 1);
    document.getElementById('tpSpeedSlider').value = tpSpeed;
    document.getElementById('tpSpeedVal').textContent = tpSpeed;
  });

  // ── Font slider (hidden, still functional) ──
  const fontSlider = document.getElementById('tpFontSlider');
  if (fontSlider) {
    fontSlider.addEventListener('input', () => {
      tpFontLevel = parseInt(fontSlider.value);
      applyTpFont();
      saveSettings({ tpFontLevel: tpFontLevel });
    });
  }

  // ── Tap viewport = play/pause scroll only (không ảnh hưởng ghi âm) ──
  document.getElementById('tpScrollContainer').addEventListener('click', () => {
    if (tpIsRecording) {
      // Chỉ pause/resume scroll, giữ ghi âm
      tpRunning = !tpRunning;
      if (tpRunning) tpTick();
      // Không update play button để tránh nhầm lẫn
    }
  });

  // ── Result modal buttons ──
  document.getElementById('tpResultClose').addEventListener('click', () => {
    document.getElementById('tpResultModal').classList.remove('open');
    if (tpReplayAudio) { tpReplayAudio.pause(); }
  });

  // Retake: close modal and re-open same topic in teleprompter
  document.getElementById('tpRetakeBtn').addEventListener('click', () => {
    document.getElementById('tpResultModal').classList.remove('open');
    if (tpReplayAudio) { tpReplayAudio.pause(); }
    if (tpCurrentTopic) {
      // Reset and reopen
      setTimeout(() => openTeleprompter(tpCurrentTopic), 200);
    }
  });

  document.getElementById('tpResultSave').addEventListener('click', () => {
    if (!tpCurrentAnalysis || !tpCurrentTopic) return;
    const entry = {
      id: Date.now(),
      topicId: tpCurrentTopic.id, topicName: tpCurrentTopic.name, topicEmoji: tpCurrentTopic.emoji,
      ...tpCurrentAnalysis, mode: 'teleprompter',
      date: new Date().toLocaleDateString('vi-VN', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' })
    };
    // Save audio if available
    if (currentAudioBlob) {
      blobToBase64(currentAudioBlob).then(b64 => {
        entry.audioBase64 = b64;
        entry.audioMime = currentAudioBlob.type || 'audio/webm';
        _saveHistoryEntry(entry);
      });
    } else {
      _saveHistoryEntry(entry);
    }
    updateStreakOnSave();
    updateStreak();
    document.getElementById('tpResultSave').style.display = 'none';
    showToast('✅ Đã lưu bài luyện!');
  });
}

function _saveHistoryEntry(entry) {
  const history = getHistory();
  history.unshift(entry);
  // Keep audio for max 20 entries
  let ac = 0;
  history.forEach(e => { if (e.audioBase64) { ac++; if (ac > 20) { delete e.audioBase64; delete e.audioMime; } } });
  try { localStorage.setItem('speakingHistory', JSON.stringify(history)); } catch (_) {
    delete history[0].audioBase64; delete history[0].audioMime;
    localStorage.setItem('speakingHistory', JSON.stringify(history));
  }
}

// ── TP Recording logic ────────────────────────
function tpStartRecording() {
  tpIsRecording = true;
  tpTranscript = '';
  tpElapsedSeconds = 0;
  tpPauseCount = 0;
  tpLastWordTime = Date.now();
  tpCurrentAnalysis = null;

  // Reset shared audio state
  audioChunks = [];
  currentAudioBlob = null;
  if (currentAudioUrl) { URL.revokeObjectURL(currentAudioUrl); currentAudioUrl = null; }

  // ── Start MediaRecorder for audio playback ──
  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(stream => {
      const mimeType = ['audio/webm;codecs=opus','audio/webm','audio/ogg','audio/mp4']
        .find(m => MediaRecorder.isTypeSupported(m)) || '';
      mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : {});
      mediaRecorder._stream = stream;
      mediaRecorder.ondataavailable = e => { if (e.data && e.data.size > 0) audioChunks.push(e.data); };
      mediaRecorder.onstop = () => {
        if (mediaRecorder._stream) mediaRecorder._stream.getTracks().forEach(t => t.stop());
        if (audioChunks.length > 0) {
          currentAudioBlob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
          currentAudioUrl = URL.createObjectURL(currentAudioBlob);
        }
      };
      mediaRecorder.start(300);
    })
    .catch(() => { mediaRecorder = null; });

  // ── Speech Recognition ──
  if (speechSupported) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    tpRecognition = new SR();
    // Use language based on topic if available
    const lang = tpCurrentTopic?.lang || 'vi-VN';
    tpRecognition.lang = lang;
    tpRecognition.continuous = true;
    tpRecognition.interimResults = true;

    tpRecognition.onresult = (e) => {
      const now = Date.now();
      if (now - tpLastWordTime > 2000) tpPauseCount++;
      tpLastWordTime = now;
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) tpTranscript += t + ' ';
        else interim = t;
      }
      const liveText = document.getElementById('tpLiveText');
      const liveWpm  = document.getElementById('tpLiveWpm');
      if (liveText) {
        const preview = (tpTranscript + interim).trim();
        liveText.textContent = preview ? preview.slice(-80) : 'Đang lắng nghe…';
      }
      if (liveWpm && tpElapsedSeconds > 5) {
        const w = tpTranscript.trim().split(/\s+/).filter(Boolean).length;
        const wpmLive = Math.round(w / (tpElapsedSeconds / 60));
        liveWpm.textContent = wpmLive + ' wpm';
      }
    };
    tpRecognition.onerror = (e) => {
      if (e.error !== 'no-speech') { tpStopRecording(true); showToast('⚠️ Lỗi mic: ' + e.error); }
    };
    tpRecognition.onend = () => { if (tpIsRecording) { try { tpRecognition.start(); } catch (_) {} } };
    try { tpRecognition.start(); } catch (_) {}
  }

  // Timer
  tpTimerInterval = setInterval(() => {
    tpElapsedSeconds++;
    const timerEl = document.getElementById('tpRecTimer');
    if (timerEl) timerEl.textContent = formatTime(tpElapsedSeconds);
  }, 1000);

  // UI → recording state
  updateTpPlayBtn(); // button chuyển sang "⏹ Dừng & Phân tích"
  const pill = document.getElementById('tpRecPill');
  if (pill) pill.style.display = 'flex';
  const strip = document.getElementById('tpLiveStrip');
  if (strip) strip.style.display = 'flex';
}

function tpStopRecording(showResult) {
  if (!tpIsRecording && !showResult) return;
  tpIsRecording = false;
  clearInterval(tpTimerInterval);
  try { if (tpRecognition) tpRecognition.stop(); } catch (_) {}
  tpResetRecUI();

  if (!showResult) {
    // Just stop MediaRecorder silently
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.onstop = () => {
        if (mediaRecorder._stream) mediaRecorder._stream.getTracks().forEach(t => t.stop());
      };
      mediaRecorder.stop();
    }
    return;
  }

  // Show modal with "processing" status
  const modal = document.getElementById('tpResultModal');
  const statusEl  = document.getElementById('tpStatusMsg');
  const contentEl = document.getElementById('tpResultContent');
  const statusText = document.getElementById('tpStatusText');
  if (statusEl)   statusEl.style.display = 'flex';
  if (contentEl)  contentEl.style.display = 'none';
  if (statusText) statusText.textContent = 'Đang xử lý bản ghi âm…';
  modal.classList.add('open');

  // Stop MediaRecorder first, then show result
  const doShowResult = () => {
    if (statusText) statusText.textContent = 'Đang phân tích bài nói…';
    setTimeout(() => {
      // Tính % teleprompter đã cuộn qua
      const wrapper   = document.querySelector('.tp-text-wrapper');
      const container = document.getElementById('tpScrollContainer');
      let tpPct = 0;
      if (wrapper && container && wrapper.scrollHeight > container.clientHeight) {
        tpPct = Math.min(100, Math.round(
          (tpScrollPos / (wrapper.scrollHeight - container.clientHeight)) * 100
        ));
      }
      const extra = {
        tpProgressPct:    tpPct,
        audioBlobSize:    currentAudioBlob?.size || 0,
        speechSupported:  speechSupported
      };
      tpCurrentAnalysis = analyzeTranscript(tpTranscript, tpElapsedSeconds, extra);
      tpShowResult(tpCurrentAnalysis);
      // Gọi AI chỉ khi có đủ transcript
      if (tpTranscript.trim().length >= 10) {
        tpGetAIFeedback(tpTranscript, tpCurrentAnalysis);
      }
    }, 300);
  };

  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.onstop = () => {
      if (mediaRecorder._stream) mediaRecorder._stream.getTracks().forEach(t => t.stop());
      if (audioChunks.length > 0) {
        currentAudioBlob = new Blob(audioChunks, { type: mediaRecorder.mimeType || 'audio/webm' });
        if (currentAudioUrl) URL.revokeObjectURL(currentAudioUrl);
        currentAudioUrl = URL.createObjectURL(currentAudioBlob);
      }
      doShowResult();
    };
    mediaRecorder.stop();
  } else {
    doShowResult();
  }
}

function tpResetRecUI() {
  // Reset pill
  const pill = document.getElementById('tpRecPill');
  if (pill) { pill.style.display = 'none'; }
  const timer = document.getElementById('tpRecTimer');
  if (timer) timer.textContent = '00:00';
  // Reset live strip
  const strip = document.getElementById('tpLiveStrip');
  if (strip) strip.style.display = 'none';
  const liveText = document.getElementById('tpLiveText');
  if (liveText) liveText.textContent = 'Đang lắng nghe…';
  const liveWpm = document.getElementById('tpLiveWpm');
  if (liveWpm) liveWpm.textContent = '';
  // Reset main button to idle
  updateTpPlayBtn();
}

// ── TP Result Modal ───────────────────────────
function tpShowResult(a) {
  const modal = document.getElementById('tpResultModal');
  const statusEl  = document.getElementById('tpStatusMsg');
  const contentEl = document.getElementById('tpResultContent');
  if (statusEl)  statusEl.style.display = 'none';
  if (contentEl) contentEl.style.display = 'block';

  // ── Score label ───────────────────────────
  const isEstimated = (a.dataMode === 'B');
  const scoreTag    = isEstimated ? ' *' : '';
  const ring = document.getElementById('tpScoreRing');
  if (ring) {
    const c = 2 * Math.PI * 44;
    ring.style.strokeDasharray = c;
    ring.style.strokeDashoffset = c;
    setTimeout(() => { ring.style.strokeDashoffset = c - (a.score / 100) * c; }, 150);
    ring.style.stroke = a.score >= 75 ? '#1A7F7A' : a.score >= 50 ? '#D4A017' : '#E53935';
  }
  setEl('tpScoreNumber', a.score);
  const scoreText = a.score >= 80 ? '🌟 Xuất sắc!' : a.score >= 65 ? '👍 Khá tốt'
    : a.score >= 50 ? '📈 Trung bình' : '💪 Cần luyện';
  setEl('tpScoreLabel', scoreText + (isEstimated ? ' (ước tính)' : ''));

  // ── Stats boxes ───────────────────────────
  // Từ nhận dạng
  if (a.dataMode === 'A') {
    setEl('tpResWords', a.wordCount);
  } else if (a.seconds >= 60) {
    setEl('tpResWords', 'Ít SR');
  } else {
    setEl('tpResWords', a.wordCount || '—');
  }

  // WPM
  if (a.wpmLabel === 'chưa đo được' || a.wpm === 0) {
    setEl('tpResWpm', '—');
  } else if (a.wpmLabel === 'ước tính') {
    setEl('tpResWpm', '~' + a.wpm);
  } else {
    setEl('tpResWpm', a.wpm);
  }

  setEl('tpResTime',    formatTime(a.seconds));
  setEl('tpResFillers', a.dataMode === 'A' ? a.fillerCount : '—');
  setEl('tpResPauses',  a.pauseCount || 0);

  // Khớp nội dung % (stat box)
  if (a.contentLabel === 'chưa đo chính xác') {
    setEl('tpResSync', '—');
  } else {
    setEl('tpResSync', a.contentPct + (a.contentLabel === 'ước tính' ? '%*' : '%'));
  }

  // ── Speed section ────────────────────────
  const speedDesc = document.getElementById('tpSpeedDesc');
  const badgeRow  = document.getElementById('tpBadgeRow');
  let speedBadgeHtml = '';

  if (a.wpmLabel === 'chưa đo được') {
    speedBadgeHtml = '<span class="badge warn">⏱ Chưa đo được tốc độ</span>';
    if (speedDesc) speedDesc.textContent =
      'Chưa đo được tốc độ chính xác, nhưng bạn đã ghi âm đủ thời lượng. Hãy nghe lại bản ghi để tự kiểm tra nhịp nói.';
  } else {
    const wpm = a.wpm;
    let sb, sc, st;
    const tag = a.wpmLabel === 'ước tính' ? ' (ước tính)' : '';
    if (wpm < 90) {
      sb = '🐢 Quá chậm' + tag;           sc = 'error';
      st = `Tốc độ ${wpm} WPM${tag} — quá chậm. Hãy tự tin hơn, nói liên tục và tự nhiên hơn.`;
    } else if (wpm <= 120) {
      sb = '🔵 Hơi chậm nhưng rõ' + tag;  sc = 'warn';
      st = `Tốc độ ${wpm} WPM${tag} — hơi chậm nhưng rõ ràng. Rất phù hợp cho phần giới thiệu lịch sử.`;
    } else if (wpm <= 155) {
      sb = '✅ Tốt, dễ nghe' + tag;        sc = 'good';
      st = `Tốc độ ${wpm} WPM${tag} — lý tưởng cho hướng dẫn viên. Khách hàng dễ tiếp thu.`;
    } else if (wpm <= 180) {
      sb = '⚡ Hơi nhanh' + tag;           sc = 'warn';
      st = `Tốc độ ${wpm} WPM${tag} — hơi nhanh. Nên giảm 10–15% để khách dễ nghe hơn.`;
    } else {
      sb = '🔥 Quá nhanh' + tag;           sc = 'error';
      st = `Tốc độ ${wpm} WPM${tag} — quá nhanh. Hãy ngắt nghỉ rõ hơn sau mỗi ý chính.`;
    }
    speedBadgeHtml = `<span class="badge ${sc}">${sb}</span>`;
    if (speedDesc) speedDesc.textContent = st;
  }

  // Filler / Opening / Closing badges — chỉ khi có transcript đủ
  if (a.dataMode === 'A') {
    speedBadgeHtml += ` ${parseFloat(a.fillerRate) === 0
      ? '<span class="badge good">🎯 Không từ đệm!</span>'
      : `<span class="badge warn">🚫 ${a.fillerCount} từ đệm</span>`}
      ${a.hasOpening ? '<span class="badge good">✅ Có lời chào</span>' : '<span class="badge error">❌ Thiếu lời chào</span>'}
      ${a.hasClosing  ? '<span class="badge good">✅ Có kết bài</span>'  : '<span class="badge error">❌ Thiếu kết bài</span>'}`;
  } else if (a.seconds >= 60) {
    speedBadgeHtml += ' <span class="badge good">✅ Đã ghi âm đủ thời lượng</span>';
  }
  if (badgeRow) badgeRow.innerHTML = speedBadgeHtml;

  // ── Nội dung khớp bar ────────────────────
  const kwBar  = document.getElementById('tpKwBar');
  const kwText = document.getElementById('tpKwText');
  if (kwBar) {
    setTimeout(() => { kwBar.style.width = a.contentPct + '%'; }, 200);
  }
  if (kwText) {
    if (a.contentLabel === 'chưa đo chính xác') {
      kwText.textContent = 'Chưa đủ transcript để đo chính xác — hãy nói gần mic hơn lần sau.';
    } else if (a.contentLabel === 'ước tính') {
      kwText.textContent = `Ước tính ${a.contentPct}% nội dung đã nói (dựa trên tiến độ Teleprompter).`;
    } else if (a.topicKeywords.length > 0) {
      kwText.textContent = `${a.keywordsHit.length}/${a.topicKeywords.length} từ khóa đã đề cập (${a.keywordScore}%).`;
    } else {
      kwText.textContent = `Khoảng ${a.contentPct}% nội dung bài đã được đề cập.`;
    }
  }

  // ── Gợi ý ────────────────────────────────
  const suggestEl = document.getElementById('tpSuggestions');
  if (suggestEl) {
    const tips = buildSuggestions(a, tpCurrentTopic);
    suggestEl.innerHTML = tips.map(t =>
      `<div class="suggestion-item"><span class="suggestion-dot">→</span><span>${t}</span></div>`
    ).join('');
  }

  // ── Feedback chính ───────────────────────
  setEl('tpResFeedback', generateFeedback(a));

  // ── Nghe lại ─────────────────────────────
  if (currentAudioUrl) setupTpReplayPanel(currentAudioUrl);

  // ── Ghi chú ước tính ─────────────────────
  if (isEstimated) {
    const feedbackBox = document.getElementById('tpResFeedback')?.parentElement;
    const noteEl = document.getElementById('tpEstimatedNote');
    if (!noteEl && feedbackBox) {
      const note = document.createElement('div');
      note.id = 'tpEstimatedNote';
      note.style.cssText = 'font-size:.72rem;color:rgba(26,127,122,.7);padding:6px 0 2px;font-style:italic;';
      note.textContent = '* Điểm ước tính — hệ thống nhận dạng giọng nói thu được ít dữ liệu. Kết quả sẽ chính xác hơn khi nói gần micro và rõ từng câu.';
      feedbackBox?.after(note);
    }
  }

  document.getElementById('tpResultSave').style.display = 'flex';
  modal.classList.add('open');
}

function buildSuggestions(a, topic) {
  const tips = [];

  if (a.dataMode === 'C') {
    tips.push('Bài nói còn quá ngắn — hãy thử luyện ít nhất 1 phút để có đánh giá chính xác hơn.');
    tips.push('Đọc toàn bộ bài mẫu từ đầu đến cuối mà không dừng lại giữa chừng.');
    tips.push('Đảm bảo microphone đang hoạt động trước khi bắt đầu.');
    return tips;
  }

  if (a.dataMode === 'B') {
    // Transcript yếu — ưu tiên gợi ý về mic & kỹ thuật
    tips.push('Nói gần micro hơn (cách 15–20 cm) và tránh tiếng ồn xung quanh để nhận dạng tốt hơn.');
    tips.push('Ngắt nhẹ sau mỗi ý chính — dừng 1–2 giây giúp khách tiếp thu và micro nhận dạng rõ hơn.');
    if (topic?.keywords?.length) {
      tips.push(`Nhấn mạnh các từ khóa quan trọng: "${topic.keywords.slice(0, 3).join('", "')}".`);
    } else {
      tips.push('Nhấn giọng vào các thông tin quan trọng của điểm tham quan.');
    }
    return tips;
  }

  // dataMode === 'A' — transcript đủ tốt
  if (a.wpm > 155) tips.push('Ngắt câu sau mỗi ý chính — dừng 1–2 giây để khách kịp tiếp thu.');
  if (a.wpm < 90 && a.wpm > 0) tips.push('Tự tin hơn khi nói — tránh dừng quá lâu giữa các từ.');
  if (a.fillerCount > 2) tips.push(`Thay "ừm, à, thì…" bằng khoảng dừng im lặng — đó là dấu hiệu tự tin!`);
  if (!a.hasOpening) tips.push('Mở đầu bằng lời chào rõ ràng: "Xin chào quý khách…"');
  if (!a.hasClosing)  tips.push('Kết bài bằng lời cảm ơn hoặc lời chúc: "Chúc quý khách…"');
  if (topic?.keywords?.length && a.keywordScore < 60) {
    const missing = topic.keywords.filter(k => !a.keywordsHit?.includes(k)).slice(0, 2);
    if (missing.length) tips.push(`Nhấn mạnh từ khóa: "${missing.join('", "')}".`);
  }
  if (a.pauseCount < 2 && a.wordCount > 40) tips.push('Tạo thêm ngắt nghỉ sau mỗi điểm tham quan để tạo điểm nhấn.');
  if (tips.length === 0) tips.push('Tiếp tục luyện tập — bài nói đang rất ổn!');
  return tips.slice(0, 3);
}

// ── TP Replay Panel inside result modal ──────
let tpReplayAudio = null;
let tpReplayInterval = null;

function setupTpReplayPanel(audioUrl) {
  const panel = document.getElementById('tpReplayPanel');
  if (!panel) return;

  if (tpReplayAudio) { tpReplayAudio.pause(); tpReplayAudio.src = ''; }
  clearInterval(tpReplayInterval);
  tpReplayAudio = new Audio(audioUrl);

  const btn    = document.getElementById('tpReplayBtn');
  const filled = document.getElementById('tpReplayFilled');
  const thumb  = document.getElementById('tpReplayThumb');
  const timeEl = document.getElementById('tpReplayTime');
  const prog   = document.getElementById('tpReplayProgress');

  if (btn) { btn.textContent = '▶'; btn.classList.remove('playing'); }
  if (filled) filled.style.width = '0%';
  if (thumb)  thumb.style.left  = '0%';
  if (timeEl) timeEl.textContent = '0:00';

  tpReplayAudio.onended = () => {
    if (btn) { btn.textContent = '▶'; btn.classList.remove('playing'); }
    clearInterval(tpReplayInterval);
    if (filled) filled.style.width = '100%';
  };

  if (btn) {
    btn.onclick = () => {
      if (tpReplayAudio.paused) {
        tpReplayAudio.play();
        btn.textContent = '⏸'; btn.classList.add('playing');
        tpReplayInterval = setInterval(() => {
          if (!tpReplayAudio.duration) return;
          const pct = (tpReplayAudio.currentTime / tpReplayAudio.duration) * 100;
          if (filled) filled.style.width = pct + '%';
          if (thumb)  thumb.style.left  = pct + '%';
          if (timeEl) timeEl.textContent = fmtAudioTime(tpReplayAudio.currentTime);
        }, 150);
      } else {
        tpReplayAudio.pause();
        btn.textContent = '▶'; btn.classList.remove('playing');
        clearInterval(tpReplayInterval);
      }
    };
  }

  if (prog) {
    prog.addEventListener('click', e => {
      const rect = prog.getBoundingClientRect();
      const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (tpReplayAudio.duration) {
        tpReplayAudio.currentTime = pct * tpReplayAudio.duration;
      }
    });
  }

  panel.style.display = 'block';
}

async function tpGetAIFeedback(transcript, analysis) {
  const box     = document.getElementById('tpAiFeedbackBox');
  const content = document.getElementById('tpAiFeedbackContent');
  if (!box || !content) return;
  box.style.display = 'block';
  content.innerHTML = '<div class="ai-loading"><span class="ai-spinner"></span> AI đang phân tích…</div>';

  const modeNote = analysis.dataMode === 'B'
    ? 'Lưu ý: transcript nhận dạng ít, kết quả dựa nhiều vào thời lượng và tiến độ.'
    : '';
  const prompt = `Bạn là huấn luyện viên thuyết trình chuyên nghiệp cho hướng dẫn viên du lịch Việt Nam tại Đà Nẵng.
Phân tích bài nói và đưa ra nhận xét ngắn gọn bằng tiếng Việt (tối đa 120 từ): 1) điểm mạnh, 2) 1-2 điều cần cải thiện, 3) lời khuyên thực tế.
Dữ liệu: Chủ đề: ${tpCurrentTopic?.name||'?'} | Thời lượng: ${formatTime(analysis.seconds)} | Từ nhận dạng: ${analysis.wordCount} | WPM: ${analysis.wpm}${analysis.wpmLabel?' ('+analysis.wpmLabel+')':''} | Từ đệm: ${analysis.fillerCount} | Điểm: ${analysis.score}/100 | Chế độ đánh giá: ${analysis.dataMode==='A'?'đầy đủ':analysis.dataMode==='B'?'ước tính':'quá ngắn'}
${modeNote}
Transcript: "${transcript.substring(0,350)}${transcript.length>350?'...':''}"
Viết thành đoạn văn tự nhiên, động viên, không dùng bullet points.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1000, messages: [{ role: 'user', content: prompt }] })
    });
    const data = await res.json();
    const text = data.content?.map(c => c.text || '').join('') || '';
    content.innerHTML = text ? `<p>${text}</p>` : '<p>Không nhận được phản hồi AI.</p>';
  } catch {
    content.innerHTML = '<p style="opacity:.6;font-size:.82rem">Không kết nối được AI.</p>';
  }
}

// ── TP Scroll helpers ─────────────────────────
function tpTick() {
  if (!tpRunning) return;
  tpScrollPos += tpSpeed * 0.3;
  applyTpScroll();
  const wrapper = document.querySelector('.tp-text-wrapper');
  const container = document.getElementById('tpScrollContainer');
  if (wrapper && tpScrollPos >= wrapper.scrollHeight - container.clientHeight) {
    tpRunning = false;
    updateTpPlayBtn();
    return;
  }
  tpAnimFrame = requestAnimationFrame(tpTick);
}

function applyTpScroll() {
  const wrapper = document.querySelector('.tp-text-wrapper');
  if (wrapper) wrapper.style.transform = `translateY(-${tpScrollPos}px)`;
}

function applyTpFont() {
  const tpText = document.getElementById('tpText');
  if (tpText) tpText.style.fontSize = TP_FONT_SIZES[tpFontLevel - 1];
}

function updateTpPlayBtn() {
  const btn   = document.getElementById('tpPlayBtn');
  const icon  = document.getElementById('tpPlayIcon');
  const label = document.getElementById('tpPlayLabel');
  if (!btn) return;
  if (tpIsRecording) {
    // Đang ghi âm → hiện trạng thái STOP
    btn.className = 'tp-ctrl-btn tp-btn-play tp-btn-main rec-state';
    if (icon)  icon.textContent  = '⏹';
    if (label) label.textContent = 'Dừng & Phân tích';
  } else {
    // Chưa ghi → hiện START
    btn.className = 'tp-ctrl-btn tp-btn-play tp-btn-main idle-state';
    if (icon)  icon.textContent  = '▶';
    if (label) label.textContent = 'Bắt đầu';
  }
}

function syncTpSliders() {
  const ss = document.getElementById('tpSpeedSlider');
  const sv = document.getElementById('tpSpeedVal');
  const fs = document.getElementById('tpFontSlider');
  if (ss) ss.value = tpSpeed;
  if (sv) sv.textContent = tpSpeed;
  if (fs) fs.value = tpFontLevel;
  applyTpFont();
}

// ── SPEECH API ────────────────────────────────
function checkSpeechSupport() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR) { speechSupported = true; initRecognition(SR); }
  else { document.getElementById('noSpeechBanner').classList.add('visible'); }
}

function initRecognition(SR) {
  recognition = new SR();
  recognition.lang = 'vi-VN';
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = (e) => {
    const now = Date.now();
    if (now - lastWordTime > 2000 && isRecording) pauseCount++;
    lastWordTime = now;
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) currentTranscript += t + ' ';
      else interim = t;
    }
    const liveEl = document.getElementById('liveTranscript');
    if (liveEl) liveEl.innerHTML = highlightFillers(currentTranscript + interim) || '<span class="live-placeholder">Đang lắng nghe...</span>';
    updateLiveStats();
  };
  recognition.onerror = (e) => { if (e.error !== 'no-speech') { stopRecording(); showToast('⚠️ Lỗi: ' + e.error); } };
  recognition.onend = () => { if (isRecording) { try { recognition.start(); } catch (_) {} } };
}

// ── RECORD ────────────────────────────────────
function bindRecordBtn() {
  const btn = document.getElementById('recordBtn');
  if (!btn) return; // removed in v4.2
  btn.addEventListener('click', () => {
    if (!selectedTopic) { showToast('📌 Vui lòng chọn chủ đề trước!'); return; }
    if (!speechSupported) { showToast('⚠️ Dùng Chrome trên Android!'); return; }
    isRecording ? stopRecording() : startRecording();
  });
}

function startRecording() {
  isRecording = true;
  currentTranscript = '';
  elapsedSeconds = 0;
  pauseCount = 0;
  lastWordTime = Date.now();
  audioChunks = [];
  currentAudioBlob = null;
  currentAudioUrl = null;
  mediaRecorder = null;

  setRecordUI('recording'); // guarded — no-op if recordBtn removed
  const _rc = document.getElementById('resultCard');    if (_rc) _rc.classList.remove('visible');
  const _sb = document.getElementById('saveBtn');       if (_sb) _sb.style.display = 'none';
  const _ls = document.getElementById('liveSection');   if (_ls) _ls.style.display = 'block';
  const _af = document.getElementById('aiFeedbackBox'); if (_af) _af.style.display = 'none';
  const _pp = document.getElementById('playbackPanel'); if (_pp) _pp.style.display = 'none';

  // ── Khởi động MediaRecorder để ghi âm thật ──
  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(stream => {
      const mimeType = ['audio/webm;codecs=opus','audio/webm','audio/ogg','audio/mp4']
        .find(m => MediaRecorder.isTypeSupported(m)) || '';
      mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : {});
      mediaRecorder._stream = stream;
      mediaRecorder.ondataavailable = e => {
        if (e.data && e.data.size > 0) audioChunks.push(e.data);
      };
      mediaRecorder.start(300);
    })
    .catch(() => { mediaRecorder = null; });

  // ── Khởi động Speech Recognition ──
  timerInterval = setInterval(() => {
    elapsedSeconds++;
    const _td = document.getElementById('timerDisplay');
    if (_td) _td.textContent = formatTime(elapsedSeconds);
    updateLiveStats();
  }, 1000);
  try { if (recognition) recognition.start(); } catch (_) {}
}

function stopRecording() {
  isRecording = false;
  clearInterval(timerInterval);
  try { recognition.stop(); } catch (_) {}
  setRecordUI('idle');

  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    // Gán onstop MỘT LẦN duy nhất ở đây
    mediaRecorder.onstop = () => {
      // Release mic
      if (mediaRecorder._stream) {
        mediaRecorder._stream.getTracks().forEach(t => t.stop());
      }
      // Tạo blob audio
      if (audioChunks.length > 0) {
        const mime = mediaRecorder.mimeType || 'audio/webm';
        currentAudioBlob = new Blob(audioChunks, { type: mime });
        currentAudioUrl = URL.createObjectURL(currentAudioBlob);
      }
      _finishRecording();
    };
    mediaRecorder.stop();
  } else {
    _finishRecording();
  }
}

function _finishRecording() {
  if (currentTranscript.trim().length === 0) {
    showToast('Không nhận được giọng nói. Thử lại!');
    return;
  }
  currentAnalysis = analyzeTranscript(currentTranscript, elapsedSeconds);
  showResult(currentAnalysis);
  getAIFeedback(currentTranscript, currentAnalysis);

  // Nếu có audio → setup player ngay + chuyển blob→base64 để lưu
  if (currentAudioUrl) {
    setupPlaybackPanel(currentAudioUrl);
  }
  if (currentAudioBlob) {
    blobToBase64(currentAudioBlob).then(b64 => {
      currentAnalysis._audioBase64 = b64;
      currentAnalysis._audioMime   = currentAudioBlob.type || 'audio/webm';
    });
  }
}

// ── AUDIO PLAYBACK PANEL ──────────────────────
function setupPlaybackPanel(audioUrl) {
  const panel = document.getElementById('playbackPanel');
  if (!panel) return;

  // Destroy previous player
  if (audioPlayer) {
    audioPlayer.pause();
    audioPlayer.src = '';
  }
  clearInterval(audioUpdateInterval);

  audioPlayer = new Audio(audioUrl);
  audioPlayer.preload = 'metadata';

  const playBtn     = document.getElementById('playbackPlayBtn');
  const filled      = document.getElementById('playbackFilled');
  const thumb       = document.getElementById('playbackThumb');
  const timeEl      = document.getElementById('playbackTime');
  const progressWrap= document.getElementById('playbackProgressWrap');

  // Reset UI
  playBtn.textContent = '▶';
  playBtn.classList.remove('playing');
  if (filled) filled.style.width = '0%';
  if (thumb)  thumb.style.left   = '0%';
  if (timeEl) timeEl.textContent = '0:00';

  // Play / Pause
  playBtn.onclick = () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playBtn.textContent = '⏸';
      playBtn.classList.add('playing');
      // Update progress every 100ms
      audioUpdateInterval = setInterval(updatePlaybackProgress, 100);
    } else {
      audioPlayer.pause();
      playBtn.textContent = '▶';
      playBtn.classList.remove('playing');
      clearInterval(audioUpdateInterval);
    }
  };

  // Ended
  audioPlayer.onended = () => {
    playBtn.textContent = '▶';
    playBtn.classList.remove('playing');
    clearInterval(audioUpdateInterval);
    if (filled) filled.style.width = '100%';
    if (thumb)  thumb.style.left   = '100%';
  };

  // Seek by tapping progress bar
  if (progressWrap) {
    progressWrap.addEventListener('click', (e) => {
      const rect = progressWrap.getBoundingClientRect();
      const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (audioPlayer.duration) {
        audioPlayer.currentTime = pct * audioPlayer.duration;
        updatePlaybackProgress();
      }
    });
  }

  function updatePlaybackProgress() {
    if (!audioPlayer.duration) return;
    const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    if (filled) filled.style.width = pct + '%';
    if (thumb)  thumb.style.left   = pct + '%';
    if (timeEl) {
      const remaining = audioPlayer.duration - audioPlayer.currentTime;
      timeEl.textContent = '-' + fmtAudioTime(remaining);
    }
  }

  panel.style.display = 'block';
}

function fmtAudioTime(s) {
  s = Math.max(0, Math.round(s));
  return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result); // "data:audio/webm;base64,..."
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function setRecordUI(state) {
  const btn = document.getElementById('recordBtn');
  if (!btn) return; // removed in v4.2
  const statusText = document.getElementById('recStatusText');
  const dot = document.getElementById('pulseDot');
  if (state === 'recording') {
    btn.className = 'record-btn recording';
    btn.innerHTML = '<span style="font-size:1.6rem">⏹</span>';
    if (statusText) statusText.innerHTML = '<span class="rec-badge">● REC</span>&nbsp;Đang ghi âm...';
    if (dot) dot.className = 'pulse-dot recording';
  } else {
    btn.className = 'record-btn idle';
    btn.innerHTML = '🎤';
    if (statusText) statusText.textContent = 'Nhấn để bắt đầu';
    if (dot) dot.className = 'pulse-dot';
  }
}

// ── ANALYSIS ENGINE v4.3 ─────────────────────
// Hỗ trợ 3 chế độ: transcript tốt / transcript yếu / không có transcript
// Không bao giờ báo "0%" hoặc "chưa đủ dữ liệu" khi đã ghi âm >= 60s

function analyzeTranscript(text, seconds, extra) {
  // extra = { tpProgressPct, audioBlobSize, speechSupported }
  const tpPct      = extra?.tpProgressPct   ?? 0;   // % teleprompter đã cuộn qua
  const hasAudio   = extra?.audioBlobSize    > 0;
  const srOk       = extra?.speechSupported  ?? speechSupported;

  const words      = tokenize(text);
  const wordCount  = words.length;
  const mins       = Math.max(seconds, 1) / 60;

  // ── Phân loại dữ liệu ─────────────────────
  // A = transcript tốt, B = transcript yếu + ghi âm đủ, C = quá ngắn
  let dataMode;
  if (wordCount >= 20)           dataMode = 'A'; // transcript đủ tốt
  else if (seconds >= 60)        dataMode = 'B'; // ghi âm đủ nhưng SR yếu
  else                           dataMode = 'C'; // quá ngắn

  // ── WPM ───────────────────────────────────
  let wpm = 0;
  let wpmLabel = '';   // '' | 'ước tính' | 'chưa đo được'
  const scriptWords = tpCurrentTopic ? tokenize(tpCurrentTopic.script || '').length : 0;

  if (dataMode === 'A') {
    wpm = Math.round(wordCount / mins);
    wpmLabel = '';
  } else if (dataMode === 'B') {
    if (tpPct > 5 && scriptWords > 0) {
      // ước tính từ tiến độ teleprompter
      const estWords = Math.round(scriptWords * tpPct / 100);
      wpm = Math.round(estWords / mins);
      wpmLabel = 'ước tính';
    } else {
      wpm = 0;
      wpmLabel = 'chưa đo được';
    }
  } else {
    wpm = 0;
    wpmLabel = 'chưa đo được';
  }

  // ── Filler words (chỉ khi transcript đủ) ──
  const wordLower = words.map(w => w.toLowerCase().replace(/[.,!?;:""'']/g, ''));
  const fillerFound = [];
  if (dataMode === 'A') {
    wordLower.forEach((w, i) => {
      if (FILLER_WORDS.includes(w)) fillerFound.push(w);
      if (i < wordLower.length - 1 && FILLER_WORDS.includes(w + ' ' + wordLower[i+1]))
        fillerFound.push(w + ' ' + wordLower[i+1]);
    });
  }
  const fillerCount = fillerFound.length;
  const fillerRate  = wordCount > 0 ? ((fillerCount / wordCount) * 100).toFixed(1) : 0;

  // ── Keyword matching ──────────────────────
  const topicKeywords = tpCurrentTopic?.keywords || selectedTopic?.keywords || [];
  const textLower     = text.toLowerCase();
  const keywordsHit   = topicKeywords.filter(kw => textLower.includes(kw));
  const keywordScore  = topicKeywords.length > 0
    ? Math.round((keywordsHit.length / topicKeywords.length) * 100) : 0;

  // ── Nội dung khớp % ──────────────────────
  let contentPct = 0;       // 0–100
  let contentLabel = '';    // '' | 'ước tính' | 'chưa đo chính xác'
  if (dataMode === 'A') {
    // So sánh transcript với script gốc theo token
    if (scriptWords > 0) {
      const coveredRatio = Math.min(1, wordCount / scriptWords);
      const kwBonus = topicKeywords.length > 0 ? keywordScore / 100 : 0.5;
      contentPct = Math.round(coveredRatio * 60 + kwBonus * 40);
    } else {
      contentPct = Math.min(100, Math.round((wordCount / 150) * 100));
    }
    contentLabel = '';
  } else if (dataMode === 'B') {
    if (tpPct > 5) {
      contentPct  = Math.round(tpPct * 0.7); // ước tính 70% tiến độ TP
      contentLabel = 'ước tính';
    } else {
      contentPct  = 0;
      contentLabel = 'chưa đo chính xác';
    }
  } else {
    contentPct  = 0;
    contentLabel = 'chưa đo chính xác';
  }

  // ── Opening / Closing ─────────────────────
  const openingWords = ['xin chào','kính chào','chào quý','thưa quý','xin kính'];
  const closingWords  = ['cảm ơn','tạm biệt','hẹn gặp','chúc quý','xin chúc'];
  const hasOpening = openingWords.some(w => textLower.substring(0, 40).includes(w));
  const hasClosing  = closingWords.some(w => textLower.slice(-80).includes(w));
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 3);
  const sentenceCount = sentences.length;

  // ── ĐIỂM TỔNG ────────────────────────────
  let score = 0;
  if (dataMode === 'A') {
    // Transcript tốt — chấm đủ 4 thành phần
    // 1. Tốc độ nói (30đ)
    if      (wpm >= 120 && wpm <= 155) score += 30;
    else if (wpm >= 90  && wpm < 120)  score += 22;
    else if (wpm > 155  && wpm <= 180) score += 18;
    else if (wpm >= 70  && wpm < 90)   score += 12;
    else if (wpm > 0)                  score += 5;
    // 2. Độ khớp nội dung (30đ)
    score += Math.round(contentPct * 0.30);
    // 3. Độ rõ ràng (20đ)
    score += Math.max(0, 20 - fillerCount * 3);
    // 4. Thời lượng (20đ)
    if      (seconds >= 120) score += 20;
    else if (seconds >= 60)  score += 15;
    else if (seconds >= 30)  score += 8;
    else                     score += 3;
    // bonus
    if (hasOpening) score += 3;
    if (hasClosing)  score += 3;
    if (tpPauseCount >= 2) score += 2;
  } else if (dataMode === 'B') {
    // Transcript yếu nhưng ghi âm đủ — chấm nhẹ tay
    // 1. Tốc độ ước tính (25đ)
    if (wpmLabel === 'ước tính') {
      if      (wpm >= 120 && wpm <= 155) score += 25;
      else if (wpm >= 90  && wpm < 120)  score += 18;
      else if (wpm > 155  && wpm <= 180) score += 14;
      else if (wpm > 0)                  score += 8;
    } else {
      score += 10; // không đo được nhưng đã ghi âm
    }
    // 2. Tiến độ Teleprompter (25đ)
    score += Math.round(Math.min(tpPct, 100) * 0.25);
    // 3. Thời lượng (30đ)
    if      (seconds >= 180) score += 30;
    else if (seconds >= 120) score += 25;
    else if (seconds >= 60)  score += 18;
    else                     score += 8;
    // 4. Kỷ luật hoàn thành (20đ)
    score += hasAudio ? 20 : 10;
  } else {
    // C: quá ngắn
    score = Math.max(5, Math.round(seconds / 3));
  }
  score = Math.max(0, Math.min(100, score));

  return {
    wordCount, wpm, wpmLabel, seconds,
    fillerCount, fillerRate, fillerFound,
    keywordScore, keywordsHit, topicKeywords,
    contentPct, contentLabel,
    sentenceCount, pauseCount: tpPauseCount || 0,
    hasOpening, hasClosing, score,
    dataMode,   // 'A' | 'B' | 'C'
    tpPct, hasAudio, srOk,
    transcript: text.trim()
  };
}

function tokenize(text) { return text.trim().split(/\s+/).filter(w => w.length > 0); }
function highlightFillers(text) {
  let r = text;
  FILLER_WORDS.forEach(fw => { r = r.replace(new RegExp(`\\b(${fw})\\b`, 'gi'), '<mark class="filler-mark">$1</mark>'); });
  return r;
}
function updateLiveStats() {
  const words = tokenize(currentTranscript).length;
  const wpm = elapsedSeconds > 5 ? Math.round(words / (elapsedSeconds / 60)) : 0;
  const el = document.getElementById('liveStats');
  if (el) el.innerHTML = `<span>📝 ${words} từ</span><span>🚀 ${wpm} wpm</span><span>⏸️ ${pauseCount} ngắt</span><span>⏱️ ${formatTime(elapsedSeconds)}</span>`;
}

// ── SHOW RESULT ───────────────────────────────
function showResult(a) {
  const ring = document.getElementById('scoreRing');
  const scoreNum = document.getElementById('scoreNumber');
  const scoreLabel = document.getElementById('scoreLabel');
  if (ring) {
    const c = 2 * Math.PI * 44;
    ring.style.strokeDasharray = c;
    ring.style.strokeDashoffset = c;
    setTimeout(() => { ring.style.strokeDashoffset = c - (a.score / 100) * c; }, 100);
    ring.style.stroke = a.score >= 75 ? '#1A7F7A' : a.score >= 50 ? '#D4A017' : '#E53935';
  }
  if (scoreNum) scoreNum.textContent = a.score;
  if (scoreLabel) scoreLabel.textContent = a.score >= 80 ? '🌟 Xuất sắc!' : a.score >= 65 ? '👍 Khá tốt' : a.score >= 50 ? '📈 Trung bình' : '💪 Cần luyện';
  setEl('resWords', a.wordCount); setEl('resWpm', a.wpm);
  setEl('resTime', formatTime(a.seconds)); setEl('resSentences', a.sentenceCount);
  setEl('resFillers', a.fillerCount); setEl('resPauses', a.pauseCount);
  setBadge('resSpeedBadge', a.wpm < 90 ? ['🐢 Hơi chậm','warn'] : a.wpm <= 130 ? ['✅ Tốc độ tốt','good'] : a.wpm <= 150 ? ['⚡ Hơi nhanh','warn'] : ['🔥 Quá nhanh','error']);
  setBadge('resFillerBadge', parseFloat(a.fillerRate) === 0 ? ['🎯 Không từ đệm!','good'] : parseFloat(a.fillerRate) < 3 ? [`⚠️ ${a.fillerCount} từ đệm`,'warn'] : [`🚨 ${a.fillerCount} từ đệm`,'error']);
  setBadge('resLengthBadge', a.wordCount < 50 ? ['📏 Quá ngắn','error'] : a.wordCount < 80 ? ['📏 Hơi ngắn','warn'] : ['✅ Độ dài tốt','good']);
  setBadge('resOpenBadge', a.hasOpening ? ['✅ Có lời chào','good'] : ['❌ Thiếu lời chào','error']);
  setBadge('resCloseBadge', a.hasClosing ? ['✅ Có kết bài','good'] : ['❌ Thiếu kết bài','error']);
  const kwBar = document.getElementById('keywordBar');
  const kwText = document.getElementById('keywordText');
  if (kwBar) { kwBar.style.width = '0%'; setTimeout(() => { kwBar.style.width = a.keywordScore + '%'; }, 200); }
  if (kwText) kwText.textContent = a.topicKeywords.length ? `${a.keywordsHit.length}/${a.topicKeywords.length} từ khóa (${a.keywordScore}%)` : 'Chủ đề tuỳ chỉnh – không kiểm tra từ khóa';
  const fillerList = document.getElementById('fillerList');
  if (fillerList) {
    if (a.fillerFound.length === 0) { fillerList.innerHTML = '<span style="color:#2E7D32;font-weight:700">🎉 Tuyệt vời! Không có từ đệm.</span>'; }
    else {
      const counts = {};
      a.fillerFound.forEach(w => { counts[w] = (counts[w] || 0) + 1; });
      fillerList.innerHTML = Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([w,c]) => `<span class="filler-chip">"${w}" ×${c}</span>`).join('');
    }
  }
  const tEl = document.getElementById('resTranscript');
  if (tEl) tEl.innerHTML = highlightFillers(a.transcript);
  setEl('resFeedback', generateFeedback(a));
  document.getElementById('resultCard').classList.add('visible');
  document.getElementById('saveBtn').style.display = 'flex';
  setTimeout(() => document.getElementById('resultCard').scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function setBadge(id, [text, cls]) {
  const el = document.getElementById(id);
  if (el) { el.textContent = text; el.className = 'badge ' + cls; }
}

function generateFeedback(a) {
  // dataMode B: ghi âm đủ nhưng SR yếu
  if (a.dataMode === 'B') {
    const durStr = formatTime(a.seconds);
    let msg = `Bạn đã luyện tập ${durStr} — đủ thời lượng. `;
    if (a.wpmLabel === 'ước tính' && a.wpm > 0) {
      msg += `Tốc độ ước tính ${a.wpm} WPM`;
      if (a.wpm >= 120 && a.wpm <= 155) msg += ', phù hợp cho hướng dẫn viên.';
      else if (a.wpm > 155) msg += ' — hơi nhanh, hãy ngắt nghỉ rõ hơn.';
      else msg += '.';
      msg += ' ';
    }
    msg += 'Hệ thống nhận dạng được ít chữ — hãy thử nói gần micro hơn và rõ từng câu để điểm nội dung chính xác hơn lần sau.';
    return msg;
  }

  // dataMode C: quá ngắn
  if (a.dataMode === 'C') {
    return `Bài nói chỉ ${formatTime(a.seconds)} — quá ngắn để đánh giá đầy đủ. Hãy thuyết trình toàn bộ bài mẫu (ít nhất 60 giây).`;
  }

  // dataMode A: transcript đủ
  const f = [];
  if (a.wpm > 155) f.push('Tốc độ hơi nhanh — ngắt nghỉ sau mỗi ý chính giúp khách dễ nghe hơn.');
  if (a.wpm < 90 && a.wpm > 0) f.push('Tốc độ hơi chậm — hãy nói tự tin và liên tục hơn.');
  if (a.fillerCount > 3) f.push(`${a.fillerCount} từ đệm — thay bằng khoảng dừng im lặng ngắn.`);
  if (!a.hasOpening) f.push('Hãy mở đầu bằng lời chào rõ ràng.');
  if (!a.hasClosing)  f.push('Kết bài chưa rõ — thêm lời cảm ơn hoặc lời chúc.');
  if (a.topicKeywords?.length > 0 && a.keywordScore < 50)
    f.push(`Đề cập thêm từ khóa chủ đề (${a.keywordsHit?.length || 0}/${a.topicKeywords.length}).`);
  if (f.length === 0)
    return a.score >= 80
      ? '🌟 Xuất sắc! Tốc độ ổn định, cấu trúc rõ ràng. Hãy tập thêm cảm xúc và nhấn giọng vào từ khóa!'
      : '👍 Khá tốt! Tiếp tục luyện để bài nói ngày càng tự nhiên và cuốn hút hơn.';
  return f.join(' • ');
}

// ── AI FEEDBACK ───────────────────────────────
async function getAIFeedback(transcript, analysis) {
  const el = document.getElementById('aiFeedbackBox');
  const content = document.getElementById('aiFeedbackContent');
  if (!el || !content) return;
  el.style.display = 'block';
  content.innerHTML = '<div class="ai-loading"><span class="ai-spinner"></span> AI đang phân tích bài nói của bạn...</div>';
  const prompt = `Bạn là huấn luyện viên thuyết trình chuyên nghiệp cho hướng dẫn viên du lịch Việt Nam tại Đà Nẵng.
Phân tích bài nói và đưa ra nhận xét ngắn gọn bằng tiếng Việt (tối đa 100 từ), gồm: điểm mạnh cụ thể, điều cần cải thiện ngay nhất, lời khuyên thực tế.
Dữ liệu: Chủ đề: ${selectedTopic?.name || 'không rõ'} | Từ: ${analysis.wordCount} | WPM: ${analysis.wpm} | Từ đệm: ${analysis.fillerCount} | Lời chào: ${analysis.hasOpening?'Có':'Không'} | Kết bài: ${analysis.hasClosing?'Có':'Không'} | Điểm: ${analysis.score}/100
Transcript: "${transcript.substring(0, 350)}${transcript.length>350?'...':''}"
Viết thành đoạn văn tự nhiên, khích lệ, không dùng bullet points.`;
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1000, messages: [{ role: 'user', content: prompt }] })
    });
    const data = await res.json();
    const text = data.content?.map(c => c.text || '').join('') || '';
    content.innerHTML = text ? `<p>${text}</p>` : '<p>Không nhận được phản hồi AI.</p>';
  } catch { content.innerHTML = '<p style="opacity:.6;font-size:.82rem">Không kết nối được AI. Xem phản hồi phía trên.</p>'; }
}

// ── SAVE ──────────────────────────────────────
function bindSaveBtn() {
  document.getElementById('saveBtn').addEventListener('click', () => {
    if (!currentAnalysis) return;
    const entry = {
      id: Date.now(),
      topicId: selectedTopic.id, topicName: selectedTopic.name, topicEmoji: selectedTopic.emoji,
      ...currentAnalysis,
      date: new Date().toLocaleDateString('vi-VN', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' })
    };
    // Lưu audio nếu đã chuyển xong base64
    if (currentAnalysis._audioBase64) {
      entry.audioBase64 = currentAnalysis._audioBase64;
      entry.audioMime   = currentAnalysis._audioMime || 'audio/webm';
    }
    const history = getHistory();
    history.unshift(entry);

    // Giới hạn dung lượng: tối đa 20 bài có audio, xóa audio của bài cũ hơn
    let audioCount = 0;
    history.forEach(e => {
      if (e.audioBase64) {
        audioCount++;
        if (audioCount > 20) { delete e.audioBase64; delete e.audioMime; }
      }
    });

    try {
      localStorage.setItem('speakingHistory', JSON.stringify(history));
    } catch (storageErr) {
      // Nếu vượt dung lượng → lưu không có audio
      delete entry.audioBase64; delete entry.audioMime;
      history[0] = entry;
      localStorage.setItem('speakingHistory', JSON.stringify(history));
      showToast('⚠️ Lưu không có audio (bộ nhớ đầy)');
    }

    updateStreakOnSave();
    showToast('✅ Đã lưu bài luyện!');
    document.getElementById('saveBtn').style.display = 'none';
    updateStreak();
  });
}

// ── HISTORY ───────────────────────────────────
function getHistory() { try { return JSON.parse(localStorage.getItem('speakingHistory')) || []; } catch { return []; } }
function renderHistory() {
  const history = getHistory();
  const container = document.getElementById('historyList');
  if (!container) return;
  container.innerHTML = '';
  if (!history.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">📭</div><p>Chưa có bài luyện nào.<br>Hãy ghi âm và lưu bài đầu tiên!</p></div>`;
    return;
  }
  history.forEach(entry => {
    const sc  = entry.score || 0;
    const col = sc >= 75 ? '#1A7F7A' : sc >= 50 ? '#D4A017' : '#E53935';
    const hasAudio = !!entry.audioBase64;

    const div = document.createElement('div');
    div.className = 'history-item';

    // Audio player HTML (chỉ khi có audio)
    const audioHtml = hasAudio ? `
      <div class="hist-audio-wrap" id="haWrap_${entry.id}">
        <div class="hist-audio-bar">
          <button class="hist-audio-btn" id="haBtn_${entry.id}" title="Nghe lại">▶</button>
          <div class="hist-audio-progress" id="haProg_${entry.id}">
            <div class="hist-audio-filled" id="haFill_${entry.id}" style="width:0%"></div>
          </div>
          <span class="hist-audio-time" id="haTime_${entry.id}">0:00</span>
        </div>
        <div class="hist-audio-hint">🎧 Nhấn ▶ để nghe lại giọng nói của bạn</div>
      </div>` : '';

    div.innerHTML = `
      <div class="history-header">
        <div>
          <div class="history-topic">${entry.topicEmoji} ${entry.topicName}</div>
          <div class="history-date">${entry.date}${hasAudio ? ' · 🎧' : ''}</div>
        </div>
        <div class="history-score" style="color:${col}">${sc}<small>/100</small></div>
      </div>
      <div class="history-stats">
        <div class="h-stat">⏱️ ${formatTime(entry.seconds||0)}</div>
        <div class="h-stat">📝 ${entry.wordCount} từ</div>
        <div class="h-stat">🚀 ${entry.wpm} wpm</div>
        <div class="h-stat">🚫 ${entry.fillerCount||0} đệm</div>
      </div>
      <div class="history-transcript">${entry.transcript ? entry.transcript.substring(0,100) + '...' : ''}</div>
      ${audioHtml}
      <button class="btn-delete" data-id="${entry.id}">🗑️ Xóa</button>`;

    // Bind audio player nếu có
    if (hasAudio) {
      bindHistoryAudioPlayer(div, entry);
    }

    div.querySelector('.btn-delete').addEventListener('click', () => {
      localStorage.setItem('speakingHistory', JSON.stringify(getHistory().filter(e => e.id !== entry.id)));
      renderHistory();
      showToast('🗑️ Đã xóa.');
    });

    container.appendChild(div);
  });
}

function bindHistoryAudioPlayer(div, entry) {
  let histPlayer = null;
  let histInterval = null;
  let isPlaying = false;

  const btn  = div.querySelector(`#haBtn_${entry.id}`);
  const fill = div.querySelector(`#haFill_${entry.id}`);
  const prog = div.querySelector(`#haProg_${entry.id}`);
  const time = div.querySelector(`#haTime_${entry.id}`);

  function initPlayer() {
    if (histPlayer) return; // đã khởi tạo
    histPlayer = new Audio(entry.audioBase64);
    histPlayer.preload = 'metadata';
    histPlayer.onended = () => {
      isPlaying = false;
      btn.textContent = '▶';
      btn.classList.remove('playing');
      clearInterval(histInterval);
      if (fill) fill.style.width = '100%';
    };
  }

  function updateProgress() {
    if (!histPlayer || !histPlayer.duration) return;
    const pct = (histPlayer.currentTime / histPlayer.duration) * 100;
    if (fill) fill.style.width = pct + '%';
    if (time) time.textContent = fmtAudioTime(histPlayer.currentTime);
  }

  btn.addEventListener('click', () => {
    initPlayer();
    if (isPlaying) {
      histPlayer.pause();
      isPlaying = false;
      btn.textContent = '▶';
      btn.classList.remove('playing');
      clearInterval(histInterval);
    } else {
      histPlayer.play();
      isPlaying = true;
      btn.textContent = '⏸';
      btn.classList.add('playing');
      histInterval = setInterval(updateProgress, 200);
    }
  });

  if (prog) {
    prog.addEventListener('click', e => {
      initPlayer();
      const rect = prog.getBoundingClientRect();
      const pct  = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (histPlayer.duration) {
        histPlayer.currentTime = pct * histPlayer.duration;
        updateProgress();
      }
    });
  }
}

// ── STATS ─────────────────────────────────────
function renderStats() {
  const h = getHistory();
  const container = document.getElementById('statsContent');
  if (!container) return;
  if (!h.length) { container.innerHTML = `<div class="empty-state"><div class="empty-icon">📊</div><p>Chưa có dữ liệu.<br>Luyện tập để xem thống kê tiến bộ!</p></div>`; return; }
  const avgScore = Math.round(h.reduce((s,e)=>s+(e.score||0),0)/h.length);
  const avgWpm   = Math.round(h.reduce((s,e)=>s+(e.wpm||0),0)/h.length);
  const avgFill  = (h.reduce((s,e)=>s+(e.fillerCount||0),0)/h.length).toFixed(1);
  const best     = Math.max(...h.map(e=>e.score||0));
  const totalW   = h.reduce((s,e)=>s+(e.wordCount||0),0);
  const totalT   = h.reduce((s,e)=>s+(e.seconds||0),0);
  const recent   = h.slice(0,7).reverse();
  const maxS     = Math.max(...recent.map(e=>e.score||1), 1);
  const bars = recent.map(e => {
    const pct = Math.round(((e.score||0)/maxS)*100);
    const col = (e.score||0)>=75?'#1A7F7A':(e.score||0)>=50?'#D4A017':'#E53935';
    return `<div class="trend-bar-wrap"><div class="trend-bar" style="height:${pct}%;background:${col}"></div><div class="trend-label">${e.score||0}</div></div>`;
  }).join('');
  container.innerHTML = `
    <div class="stats-hero-grid">
      <div class="stat-hero-box"><div class="stat-hero-val">${h.length}</div><div class="stat-hero-lbl">Bài đã luyện</div></div>
      <div class="stat-hero-box"><div class="stat-hero-val" style="color:#1A7F7A">${avgScore}</div><div class="stat-hero-lbl">Điểm TB</div></div>
      <div class="stat-hero-box"><div class="stat-hero-val">${best}</div><div class="stat-hero-lbl">Điểm cao nhất</div></div>
      <div class="stat-hero-box"><div class="stat-hero-val">${avgWpm}</div><div class="stat-hero-lbl">WPM trung bình</div></div>
      <div class="stat-hero-box"><div class="stat-hero-val" style="color:${parseFloat(avgFill)<2?'#2E7D32':'#E65100'}">${avgFill}</div><div class="stat-hero-lbl">Từ đệm TB</div></div>
      <div class="stat-hero-box"><div class="stat-hero-val">${totalW.toLocaleString()}</div><div class="stat-hero-lbl">Tổng từ</div></div>
    </div>
    <p class="section-label">📈 Biểu đồ tiến bộ (7 bài gần nhất)</p>
    <div class="trend-chart">${bars}</div>
    <p class="section-label">⏱️ Tổng thời gian luyện tập</p>
    <div class="total-time-box"><span class="total-time-icon">🏆</span><span class="total-time-val">${formatTime(totalT)}</span><span class="total-time-lbl">giờ phút đã luyện</span></div>`;
}

// ── STREAK ────────────────────────────────────
function getStreakData() { try { return JSON.parse(localStorage.getItem('streakData'))||{streak:0,lastDate:null,totalSessions:0}; } catch { return {streak:0,lastDate:null,totalSessions:0}; } }
function updateStreak() { const d=getStreakData(); setEl('streakCount',d.streak); setEl('totalSessions',d.totalSessions); }
function updateStreakOnSave() {
  const d=getStreakData(), today=new Date().toDateString();
  d.totalSessions=(d.totalSessions||0)+1;
  if(d.lastDate!==today){ const y=new Date(); y.setDate(y.getDate()-1); d.streak=d.lastDate===y.toDateString()?(d.streak||0)+1:1; d.lastDate=today; }
  localStorage.setItem('streakData',JSON.stringify(d));
}

// ── TIPS ──────────────────────────────────────
function buildTips() {
  const c = document.getElementById('tipsList'); if (!c) return;
  TIPS.forEach(t => {
    const el = document.createElement('div'); el.className = 'tip-card';
    el.innerHTML = `<div class="tip-icon">${t.icon}</div><div class="tip-content"><h4>${t.title}</h4><p>${t.desc}</p></div>`;
    c.appendChild(el);
  });
}

// ── UTILS ─────────────────────────────────────
function formatTime(s) { s=Math.round(s||0); return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`; }
function setEl(id, v) { const e = document.getElementById(id); if (e) e.textContent = v; }
function showToast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000); }
