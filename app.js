/* =============================================
   AI Tour Guide Speaking Coach v2.0
   Deep analysis engine — Orai-inspired
   ============================================= */

const TOPICS = [
  {
    id: 'linh-ung', emoji: '🛕', name: 'Chùa Linh Ứng', duration: '2-3 phút',
    script: 'Xin chào quý khách. Hôm nay tôi sẽ giới thiệu với quý khách về Chùa Linh Ứng, một trong những địa điểm nổi tiếng nhất tại Đà Nẵng. Chùa nằm trên bán đảo Sơn Trà, nơi có vị trí rất đẹp, một bên là núi, một bên là biển. Điểm nổi bật nhất ở đây là tượng Phật Bà Quan Âm rất cao và trang nghiêm. Người dân địa phương tin rằng tượng Phật Bà che chở cho thành phố, mang lại bình an, may mắn và sức khỏe. Khi đến đây, quý khách không chỉ tham quan kiến trúc Phật giáo mà còn có thể ngắm toàn cảnh biển và thành phố Đà Nẵng từ trên cao.',
    keywords: ['chùa','phật','quan âm','sơn trà','linh ứng','tượng','bán đảo']
  },
  {
    id: 'ba-na', emoji: '🚠', name: 'Bà Nà Hills', duration: '2-3 phút',
    script: 'Kính chào quý khách, chúng ta sắp đến với Bà Nà Hills, một trong những khu du lịch hấp dẫn bậc nhất miền Trung. Bà Nà Hills nằm ở độ cao hơn 1.400 mét so với mực nước biển, vì vậy khí hậu nơi đây mát mẻ và dễ chịu quanh năm. Điểm nhấn nổi bật nhất là Cầu Vàng, công trình được đỡ bởi hai bàn tay khổng lồ bằng đá, trở thành biểu tượng du lịch nổi tiếng toàn cầu. Ngoài ra, quý khách còn có thể khám phá hệ thống cáp treo dài nhất châu Á và khu vui chơi Fantasy Park sôi động.',
    keywords: ['bà nà','cầu vàng','cáp treo','fantasy park','độ cao','khí hậu']
  },
  {
    id: 'hoi-an', emoji: '🏮', name: 'Hội An', duration: '2-3 phút',
    script: 'Thưa quý khách, chúng ta đang đến với Hội An – một đô thị cổ được UNESCO công nhận là Di sản Văn hóa Thế giới từ năm 1999. Phố cổ Hội An lưu giữ những công trình kiến trúc hàng trăm năm tuổi, là sự pha trộn độc đáo giữa văn hóa Việt, Hoa, Nhật và phương Tây. Điểm không thể bỏ qua là Chùa Cầu, cây cầu gỗ cổ nhỏ nhắn nhưng đầy ý nghĩa lịch sử. Vào buổi tối, phố cổ lung linh ánh đèn lồng đủ màu sắc tạo nên khung cảnh lãng mạn khó quên.',
    keywords: ['hội an','phố cổ','unesco','chùa cầu','đèn lồng','di sản']
  },
  {
    id: 'ngu-hanh-son', emoji: '⛰️', name: 'Ngũ Hành Sơn', duration: '2-3 phút',
    script: 'Xin chào quý khách, chúng ta đang đến thăm Ngũ Hành Sơn, hay còn gọi là Non Nước. Đây là cụm năm ngọn núi đá cẩm thạch và vôi tại phía Nam Đà Nẵng. Năm ngọn núi được đặt theo tên của năm nguyên tố trong triết học phương Đông: Kim, Mộc, Thủy, Hỏa và Thổ. Bên trong các ngọn núi có nhiều hang động và chùa chiền cổ xưa tuyệt đẹp. Đặc biệt, nơi đây nổi tiếng với nghề điêu khắc đá mỹ nghệ truyền thống.',
    keywords: ['ngũ hành sơn','non nước','đá cẩm thạch','hang động','điêu khắc','nguyên tố']
  },
  {
    id: 'chao-doan', emoji: '👋', name: 'Chào đoàn trên xe', duration: '1-2 phút',
    script: 'Xin kính chào toàn thể quý khách! Em tên là ... và em sẽ là hướng dẫn viên đồng hành cùng quý khách trong suốt chuyến tham quan hôm nay. Trước tiên, em xin thay mặt công ty du lịch gửi đến quý khách lời chào đón nồng nhiệt nhất. Hôm nay chúng ta sẽ có một hành trình rất thú vị. Trong suốt chuyến đi, nếu quý khách có bất kỳ thắc mắc hay yêu cầu gì, xin hãy thoải mái liên hệ với em.',
    keywords: ['xin chào','hướng dẫn viên','chuyến đi','quý khách','hành trình']
  },
  {
    id: 'tam-biet', emoji: '🌅', name: 'Tạm biệt khách', duration: '1-2 phút',
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
  { icon: '⏸️', title: 'Ngắt nghỉ chiến lược', desc: 'Sau mỗi ý chính, dừng 1-2 giây. Khoảng im lặng tạo điểm nhấn và giúp khách xử lý thông tin. Im lặng là vũ khí của diễn giả.' },
  { icon: '🚫', title: 'Loại bỏ từ đệm', desc: 'Thay "ừm, à, thì là" bằng khoảng dừng im lặng. Im lặng ngắn thể hiện sự tự tin, không phải yếu đuối.' },
  { icon: '🎭', title: 'Thay đổi cao độ giọng', desc: 'Lên cao khi nói về điều thú vị, xuống thấp khi muốn nhấn mạnh. Giọng đều đều sẽ làm khách buồn ngủ.' },
  { icon: '👁️', title: 'Giao tiếp bằng mắt', desc: 'Nhìn vào từng nhóm khách khi nói, không nhìn xuống ghi chú. Mắt là cầu nối cảm xúc mạnh nhất.' },
  { icon: '💛', title: 'Kết bài bằng cảm xúc', desc: 'Kết thúc bằng lời chúc chân thành. Ấn tượng cuối cùng quan trọng không kém ấn tượng đầu tiên.' },
  { icon: '🧠', title: 'Kể chuyện, không đọc số liệu', desc: 'Thay vì "chùa cao 67m", hãy nói "tượng Phật cao đến mức từ biển bạn có thể nhìn thấy". Câu chuyện đọng lại lâu hơn con số.' },
  { icon: '🔥', title: 'Luyện mỗi ngày 7 phút', desc: '7 phút mỗi ngày trong 30 ngày tốt hơn 3 tiếng một lần mỗi tuần. Sự nhất quán tạo ra thói quen xuất sắc.' }
];

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

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  checkSpeechSupport();
  buildTopicGrid();
  buildTips();
  renderHistory();
  renderStats();
  bindTabs();
  bindRecordBtn();
  bindSaveBtn();
  updateStreak();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./service-worker.js').catch(() => {});
});

// ── SPEECH ────────────────────────────────────
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
      if (t === 'stats') renderStats();
    });
  });
}

// ── TOPICS ────────────────────────────────────
function buildTopicGrid() {
  const grid = document.getElementById('topicGrid');
  TOPICS.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.dataset.id = topic.id;
    card.innerHTML = `<span class="topic-emoji">${topic.emoji}</span><span class="topic-name">${topic.name}</span><span class="topic-dur">${topic.duration}</span>`;
    card.addEventListener('click', () => selectTopic(topic, card));
    grid.appendChild(card);
  });
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
  const liveEl = document.getElementById('liveTranscript');
  if (liveEl) liveEl.innerHTML = '';
  document.getElementById('liveStats').innerHTML = '';
}

// ── RECORD ────────────────────────────────────
function bindRecordBtn() {
  document.getElementById('recordBtn').addEventListener('click', () => {
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
  setRecordUI('recording');
  document.getElementById('resultCard').classList.remove('visible');
  document.getElementById('saveBtn').style.display = 'none';
  document.getElementById('liveSection').style.display = 'block';
  document.getElementById('aiFeedbackBox').style.display = 'none';
  timerInterval = setInterval(() => { elapsedSeconds++; document.getElementById('timerDisplay').textContent = formatTime(elapsedSeconds); updateLiveStats(); }, 1000);
  try { recognition.start(); } catch (_) {}
}

function stopRecording() {
  isRecording = false;
  clearInterval(timerInterval);
  try { recognition.stop(); } catch (_) {}
  setRecordUI('idle');
  if (currentTranscript.trim().length > 0) {
    currentAnalysis = analyzeTranscript(currentTranscript, elapsedSeconds);
    showResult(currentAnalysis);
    getAIFeedback(currentTranscript, currentAnalysis);
  } else {
    showToast('Không nhận được giọng nói. Thử lại!');
  }
}

function setRecordUI(state) {
  const btn = document.getElementById('recordBtn');
  const statusText = document.getElementById('recStatusText');
  const dot = document.getElementById('pulseDot');
  if (state === 'recording') {
    btn.className = 'record-btn recording';
    btn.innerHTML = '<span style="font-size:28px">⏹</span>';
    if (statusText) statusText.innerHTML = '<span class="rec-badge">● REC</span> Đang ghi âm...';
    if (dot) dot.className = 'pulse-dot recording';
  } else {
    btn.className = 'record-btn idle';
    btn.innerHTML = '🎤';
    if (statusText) statusText.textContent = 'Nhấn để bắt đầu';
    if (dot) dot.className = 'pulse-dot';
  }
}

// ── ANALYSIS ENGINE ───────────────────────────
function analyzeTranscript(text, seconds) {
  const words = tokenize(text);
  const wordCount = words.length;
  const wpm = seconds > 0 ? Math.round(wordCount / (seconds / 60)) : 0;

  // Filler detection
  const wordLower = words.map(w => w.toLowerCase().replace(/[.,!?]/g, ''));
  const fillerFound = [];
  wordLower.forEach((w, i) => {
    if (FILLER_WORDS.includes(w)) fillerFound.push(w);
    if (i < wordLower.length - 1 && FILLER_WORDS.includes(w + ' ' + wordLower[i+1])) fillerFound.push(w + ' ' + wordLower[i+1]);
  });
  const fillerCount = fillerFound.length;
  const fillerRate = wordCount > 0 ? ((fillerCount / wordCount) * 100).toFixed(1) : 0;

  // Keyword coverage
  const topicKeywords = selectedTopic ? selectedTopic.keywords : [];
  const textLower = text.toLowerCase();
  const keywordsHit = topicKeywords.filter(kw => textLower.includes(kw));
  const keywordScore = topicKeywords.length > 0 ? Math.round((keywordsHit.length / topicKeywords.length) * 100) : 0;

  // Sentence analysis
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 3);
  const sentenceCount = sentences.length;

  // Structure check
  const openingWords = ['xin chào','kính chào','chào quý','thưa quý','xin kính'];
  const closingWords = ['cảm ơn','tạm biệt','hẹn gặp','chúc quý','xin chúc'];
  const hasOpening = openingWords.some(w => textLower.substring(0, 40).includes(w));
  const hasClosing = closingWords.some(w => textLower.slice(-80).includes(w));

  // Scoring
  let score = 40;
  if (wpm >= 90 && wpm <= 130) score += 20;
  else if (wpm > 130 && wpm <= 150) score += 12;
  else if (wpm >= 70 && wpm < 90) score += 10;
  score -= Math.min(20, fillerCount * 3);
  if (wordCount >= 80) score += 10;
  if (wordCount >= 150) score += 5;
  score += Math.round(keywordScore * 0.10);
  if (hasOpening) score += 7;
  if (hasClosing) score += 5;
  if (pauseCount >= 2) score += 5;
  score = Math.max(0, Math.min(100, score));

  return { wordCount, wpm, seconds, fillerCount, fillerRate, fillerFound, keywordScore, keywordsHit, topicKeywords, sentenceCount, pauseCount, hasOpening, hasClosing, score, transcript: text.trim() };
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
  // Score ring animation
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

  setBadge('resSpeedBadge',
    a.wpm < 90 ? ['🐢 Hơi chậm','warn'] : a.wpm <= 130 ? ['✅ Tốc độ tốt','good'] : a.wpm <= 150 ? ['⚡ Hơi nhanh','warn'] : ['🔥 Quá nhanh','error']);
  setBadge('resFillerBadge',
    parseFloat(a.fillerRate) === 0 ? ['🎯 Không từ đệm!','good'] : parseFloat(a.fillerRate) < 3 ? [`⚠️ ${a.fillerCount} từ đệm (${a.fillerRate}%)`, 'warn'] : [`🚨 ${a.fillerCount} từ đệm`,'error']);
  setBadge('resLengthBadge',
    a.wordCount < 50 ? ['📏 Quá ngắn','error'] : a.wordCount < 80 ? ['📏 Hơi ngắn','warn'] : a.wordCount <= 180 ? ['✅ Độ dài tốt','good'] : ['📖 Bài dài – tốt!','good']);
  setBadge('resOpenBadge', a.hasOpening ? ['✅ Có lời chào','good'] : ['❌ Thiếu lời chào','error']);
  setBadge('resCloseBadge', a.hasClosing ? ['✅ Có kết bài','good'] : ['❌ Thiếu kết bài','error']);

  // Keyword bar
  const kwBar = document.getElementById('keywordBar');
  const kwText = document.getElementById('keywordText');
  if (kwBar) { kwBar.style.width = '0%'; setTimeout(() => { kwBar.style.width = a.keywordScore + '%'; }, 200); }
  if (kwText) kwText.textContent = `${a.keywordsHit.length}/${a.topicKeywords.length} từ khóa (${a.keywordScore}%)`;

  // Filler chips
  const fillerList = document.getElementById('fillerList');
  if (fillerList) {
    if (a.fillerFound.length === 0) {
      fillerList.innerHTML = '<span style="color:#2E7D32;font-weight:700;font-size:14px">🎉 Hoàn hảo! Bạn không dùng từ đệm nào.</span>';
    } else {
      const counts = {};
      a.fillerFound.forEach(w => { counts[w] = (counts[w] || 0) + 1; });
      fillerList.innerHTML = Object.entries(counts).sort((a,b)=>b[1]-a[1])
        .map(([w, c]) => `<span class="filler-chip">"${w}" ×${c}</span>`).join('');
    }
  }

  // Highlighted transcript
  const tEl = document.getElementById('resTranscript');
  if (tEl) tEl.innerHTML = highlightFillers(a.transcript);

  // Local feedback
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
  const f = [];
  if (a.wordCount < 50) f.push('Bài nói còn quá ngắn. Hãy mở rộng thêm nội dung và ví dụ cụ thể.');
  if (a.wpm > 150) f.push('Bạn đang nói hơi nhanh. Thử hít thở sâu và ngắt nghỉ sau mỗi ý chính.');
  if (a.wpm < 90 && a.wordCount > 30) f.push('Tốc độ hơi chậm. Hãy nói tự tin và tự nhiên hơn một chút.');
  if (a.fillerCount > 3) f.push(`Bạn dùng ${a.fillerCount} từ đệm — hãy thay bằng khoảng dừng im lặng, đó là dấu hiệu tự tin!`);
  if (!a.hasOpening) f.push('Hãy bắt đầu bằng lời chào rõ ràng để tạo ấn tượng đầu tiên tốt.');
  if (!a.hasClosing) f.push('Kết bài chưa rõ. Thêm lời cảm ơn hoặc lời chúc để bài hoàn chỉnh hơn.');
  if (a.keywordScore < 50) f.push(`Bạn mới đề cập ${a.keywordsHit.length}/${a.topicKeywords.length} từ khóa chủ đề. Hãy bao quát nội dung hơn.`);
  if (a.pauseCount < 2 && a.wordCount > 50) f.push('Bạn gần như không ngắt nghỉ. Hãy dừng lại sau mỗi ý để khách kịp tiếp thu.');
  if (f.length === 0) return a.score >= 80 ? '🌟 Xuất sắc! Tốc độ ổn định, cấu trúc rõ ràng, không từ đệm. Hãy tập thêm cảm xúc và nhấn giọng vào các điểm nhấn quan trọng!' : '👍 Khá tốt! Tiếp tục luyện để bài nói ngày càng tự nhiên và cuốn hút hơn.';
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

Phân tích bài nói sau và đưa ra nhận xét ngắn gọn bằng tiếng Việt (tối đa 100 từ), gồm:
1. Điểm mạnh cụ thể (1 câu)
2. Điều cần cải thiện ngay nhất (1-2 câu)
3. Lời khuyên thực tế để luyện tập (1 câu)

Dữ liệu:
- Chủ đề: ${selectedTopic?.name || 'không rõ'}
- Tổng từ: ${analysis.wordCount} | Tốc độ: ${analysis.wpm} WPM | Từ đệm: ${analysis.fillerCount} lần
- Ngắt nghỉ: ${analysis.pauseCount} lần | Lời chào: ${analysis.hasOpening?'Có':'Không'} | Kết bài: ${analysis.hasClosing?'Có':'Không'}
- Từ khóa đề cập: ${analysis.keywordsHit.join(', ')||'không có'} | Điểm: ${analysis.score}/100

Transcript: "${transcript.substring(0, 350)}${transcript.length>350?'...':''}"

Viết thành đoạn văn tự nhiên, khích lệ, không dùng bullet points.`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1000, messages: [{ role: 'user', content: prompt }] })
    });
    const data = await res.json();
    const text = data.content?.map(c => c.text || '').join('') || '';
    content.innerHTML = text ? `<p>${text}</p>` : '<p>Không nhận được phản hồi AI.</p>';
  } catch {
    content.innerHTML = '<p style="opacity:.6;font-size:13px">Không kết nối được AI. Xem phản hồi phía trên.</p>';
  }
}

// ── SAVE ──────────────────────────────────────
function bindSaveBtn() {
  document.getElementById('saveBtn').addEventListener('click', () => {
    if (!currentAnalysis) return;
    const history = getHistory();
    history.unshift({ id: Date.now(), topicId: selectedTopic.id, topicName: selectedTopic.name, topicEmoji: selectedTopic.emoji, ...currentAnalysis, date: new Date().toLocaleDateString('vi-VN',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}) });
    localStorage.setItem('speakingHistory', JSON.stringify(history));
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
    const sc = entry.score || 0;
    const col = sc >= 75 ? '#1A7F7A' : sc >= 50 ? '#D4A017' : '#E53935';
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
      <div class="history-header">
        <div><div class="history-topic">${entry.topicEmoji} ${entry.topicName}</div><div class="history-date">${entry.date}</div></div>
        <div class="history-score" style="color:${col}">${sc}<small>/100</small></div>
      </div>
      <div class="history-stats">
        <div class="h-stat">⏱️ ${formatTime(entry.seconds||0)}</div>
        <div class="h-stat">📝 ${entry.wordCount} từ</div>
        <div class="h-stat">🚀 ${entry.wpm} wpm</div>
        <div class="h-stat">🚫 ${entry.fillerCount||0} đệm</div>
      </div>
      <div class="history-transcript">${entry.transcript ? entry.transcript.substring(0, 100) + '...' : ''}</div>
      <button class="btn-delete" data-id="${entry.id}">🗑️ Xóa</button>`;
    div.querySelector('.btn-delete').addEventListener('click', () => {
      localStorage.setItem('speakingHistory', JSON.stringify(getHistory().filter(e => e.id !== entry.id)));
      renderHistory(); showToast('🗑️ Đã xóa.');
    });
    container.appendChild(div);
  });
}

// ── STATS ─────────────────────────────────────
function renderStats() {
  const h = getHistory();
  const container = document.getElementById('statsContent');
  if (!container) return;
  if (!h.length) { container.innerHTML = `<div class="empty-state"><div class="empty-icon">📊</div><p>Chưa có dữ liệu.<br>Luyện tập để xem thống kê tiến bộ!</p></div>`; return; }
  const avg = f => (h.reduce((s,e)=>s+(e[f]||0),0)/h.length);
  const avgScore = Math.round(avg('score'));
  const avgWpm = Math.round(avg('wpm'));
  const avgFill = avg('fillerCount').toFixed(1);
  const best = Math.max(...h.map(e=>e.score||0));
  const totalW = h.reduce((s,e)=>s+(e.wordCount||0),0);
  const totalT = h.reduce((s,e)=>s+(e.seconds||0),0);
  const recent = h.slice(0,7).reverse();
  const maxS = Math.max(...recent.map(e=>e.score||1));
  const bars = recent.map(e=>{
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
      <div class="stat-hero-box"><div class="stat-hero-val">${totalW.toLocaleString()}</div><div class="stat-hero-lbl">Tổng từ đã nói</div></div>
    </div>
    <p class="section-label">📈 Biểu đồ tiến bộ</p>
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
  if(d.lastDate!==today){
    const y=new Date(); y.setDate(y.getDate()-1);
    d.streak=d.lastDate===y.toDateString()?(d.streak||0)+1:1;
    d.lastDate=today;
  }
  localStorage.setItem('streakData',JSON.stringify(d));
}

// ── TIPS ──────────────────────────────────────
function buildTips() {
  const c=document.getElementById('tipsList'); if(!c)return;
  TIPS.forEach(t=>{ const el=document.createElement('div'); el.className='tip-card'; el.innerHTML=`<div class="tip-icon">${t.icon}</div><div class="tip-content"><h4>${t.title}</h4><p>${t.desc}</p></div>`; c.appendChild(el); });
}

// ── UTILS ─────────────────────────────────────
function formatTime(s) { s=Math.round(s||0); return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`; }
function setEl(id,v){ const e=document.getElementById(id); if(e) e.textContent=v; }
function showToast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),3000); }
