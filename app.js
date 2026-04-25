/* =============================================
   AI Tour Guide Speaking Coach — app.js
   ============================================= */

// ── DATA ──────────────────────────────────────
const TOPICS = [
  {
    id: 'linh-ung',
    emoji: '🛕',
    name: 'Chùa Linh Ứng',
    script: 'Xin chào quý khách. Hôm nay tôi sẽ giới thiệu với quý khách về Chùa Linh Ứng, một trong những địa điểm nổi tiếng nhất tại Đà Nẵng. Chùa nằm trên bán đảo Sơn Trà, nơi có vị trí rất đẹp, một bên là núi, một bên là biển. Điểm nổi bật nhất ở đây là tượng Phật Bà Quan Âm rất cao và trang nghiêm. Người dân địa phương tin rằng tượng Phật Bà che chở cho thành phố, mang lại bình an, may mắn và sức khỏe. Khi đến đây, quý khách không chỉ tham quan kiến trúc Phật giáo mà còn có thể ngắm toàn cảnh biển và thành phố Đà Nẵng từ trên cao.'
  },
  {
    id: 'ba-na',
    emoji: '🚠',
    name: 'Bà Nà Hills',
    script: 'Kính chào quý khách, chúng ta sắp đến với Bà Nà Hills, một trong những khu du lịch hấp dẫn bậc nhất miền Trung. Bà Nà Hills nằm ở độ cao hơn 1.400 mét so với mực nước biển, vì vậy khí hậu nơi đây mát mẻ và dễ chịu quanh năm. Điểm nhấn nổi bật nhất là Cầu Vàng, công trình được đỡ bởi hai bàn tay khổng lồ bằng đá, trở thành biểu tượng du lịch nổi tiếng toàn cầu. Ngoài ra, quý khách còn có thể khám phá hệ thống cáp treo dài nhất châu Á, làng Pháp cổ kính và khu vui chơi Fantasy Park sôi động.'
  },
  {
    id: 'hoi-an',
    emoji: '🏮',
    name: 'Hội An',
    script: 'Thưa quý khách, chúng ta đang đến với Hội An – một đô thị cổ được UNESCO công nhận là Di sản Văn hóa Thế giới từ năm 1999. Phố cổ Hội An lưu giữ những công trình kiến trúc hàng trăm năm tuổi, là sự pha trộn độc đáo giữa văn hóa Việt, Hoa, Nhật và phương Tây. Điểm không thể bỏ qua là Chùa Cầu, cây cầu gỗ cổ nhỏ nhắn nhưng đầy ý nghĩa lịch sử. Vào buổi tối, phố cổ lung linh ánh đèn lồng đủ màu sắc tạo nên khung cảnh lãng mạn, huyền ảo khó quên.'
  },
  {
    id: 'ngu-hanh-son',
    emoji: '⛰️',
    name: 'Ngũ Hành Sơn',
    script: 'Xin chào quý khách, chúng ta đang đến thăm Ngũ Hành Sơn, hay còn gọi là Non Nước. Đây là cụm năm ngọn núi đá cẩm thạch và vôi tại phía Nam Đà Nẵng. Năm ngọn núi được đặt theo tên của năm nguyên tố trong triết học phương Đông: Kim, Mộc, Thủy, Hỏa và Thổ. Bên trong các ngọn núi có nhiều hang động và chùa chiền cổ xưa tuyệt đẹp. Đặc biệt, nơi đây nổi tiếng với nghề điêu khắc đá mỹ nghệ truyền thống, các sản phẩm được xuất khẩu ra khắp nơi trên thế giới.'
  },
  {
    id: 'chao-doan',
    emoji: '👋',
    name: 'Chào đoàn trên xe',
    script: 'Xin kính chào toàn thể quý khách! Em tên là ... và em sẽ là hướng dẫn viên đồng hành cùng quý khách trong suốt chuyến tham quan hôm nay. Trước tiên, em xin thay mặt công ty du lịch gửi đến quý khách lời chào đón nồng nhiệt nhất. Hôm nay chúng ta sẽ có một hành trình rất thú vị. Trong suốt chuyến đi, nếu quý khách có bất kỳ thắc mắc hay yêu cầu gì, xin hãy thoải mái liên hệ với em. Em luôn sẵn sàng phục vụ và mong rằng chuyến đi hôm nay sẽ để lại nhiều kỷ niệm đẹp cho quý khách.'
  },
  {
    id: 'tam-biet',
    emoji: '🌅',
    name: 'Tạm biệt khách',
    script: 'Thưa quý khách, chuyến tham quan của chúng ta hôm nay đã gần kết thúc. Em thay mặt công ty du lịch và đội ngũ phục vụ chân thành cảm ơn quý khách đã tin tưởng và lựa chọn chúng em trong hành trình này. Hy vọng những trải nghiệm hôm nay đã mang lại cho quý khách những khoảnh khắc vui vẻ và ý nghĩa. Nếu quý khách hài lòng, xin hãy giới thiệu dịch vụ của chúng em với bạn bè và người thân. Chúc quý khách lên đường bình an, sức khỏe dồi dào và hẹn gặp lại trong những chuyến du lịch sắp tới!'
  }
];

const TIPS = [
  {
    icon: '🐢',
    title: 'Nói chậm hơn bình thường 10%',
    desc: 'Hướng dẫn viên giỏi thường nói chậm hơn tốc độ giao tiếp bình thường. Điều này giúp khách hàng tiếp thu thông tin tốt hơn và bạn trông chuyên nghiệp hơn.'
  },
  {
    icon: '⏸️',
    title: 'Ngắt nghỉ sau mỗi ý chính',
    desc: 'Sau mỗi thông tin quan trọng, hãy dừng lại 1-2 giây. Khoảng ngắt này tạo điểm nhấn và giúp khách ghi nhớ nội dung bạn vừa nói.'
  },
  {
    icon: '👋',
    title: 'Mở bài bằng câu chào rõ ràng',
    desc: 'Luôn bắt đầu bằng lời chào nhiệt tình và tự giới thiệu tên. Ấn tượng đầu tiên rất quan trọng – hãy làm khách cảm thấy được chào đón.'
  },
  {
    icon: '💛',
    title: 'Kết bài bằng cảm xúc hoặc lời chúc',
    desc: 'Kết thúc bài thuyết trình bằng một câu chúc chân thành hoặc lời mời khám phá. Điều này để lại ấn tượng tích cực và khiến khách nhớ đến bạn lâu hơn.'
  },
  {
    icon: '👁️',
    title: 'Duy trì giao tiếp bằng mắt',
    desc: 'Nhìn vào khách khi nói chuyện, không nhìn xuống ghi chú quá nhiều. Giao tiếp bằng mắt tạo sự kết nối và sự tin tưởng với khách hàng.'
  },
  {
    icon: '🎭',
    title: 'Thể hiện cảm xúc qua giọng nói',
    desc: 'Hãy thay đổi cao độ giọng nói: lên cao khi nói về điều thú vị, nhỏ nhẹ hơn khi kể câu chuyện xúc động. Giọng đều đều sẽ khiến khách buồn ngủ.'
  }
];

// ── STATE ──────────────────────────────────────
let selectedTopic = null;
let isRecording = false;
let recognition = null;
let timerInterval = null;
let elapsedSeconds = 0;
let currentTranscript = '';
let speechSupported = false;

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  checkSpeechSupport();
  buildTopicGrid();
  buildTips();
  renderHistory();
  bindTabs();
  bindRecordBtn();
  bindSaveBtn();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  }
});

// ── SPEECH API CHECK ──────────────────────────
function checkSpeechSupport() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    speechSupported = true;
    initRecognition(SpeechRecognition);
  } else {
    document.getElementById('noSpeechBanner').classList.add('visible');
  }
}

function initRecognition(SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = 'vi-VN';
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (e) => {
    let interim = '';
    let finalText = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const text = e.results[i][0].transcript;
      if (e.results[i].isFinal) finalText += text + ' ';
      else interim += text;
    }
    if (finalText) currentTranscript += finalText;

    const liveEl = document.getElementById('liveTranscript');
    if (liveEl) liveEl.textContent = currentTranscript + interim;
  };

  recognition.onerror = (e) => {
    if (e.error !== 'no-speech') {
      stopRecording();
      showToast('⚠️ Lỗi nhận dạng giọng nói: ' + e.error);
    }
  };

  recognition.onend = () => {
    if (isRecording) {
      // auto-restart if still in recording mode
      try { recognition.start(); } catch (_) {}
    }
  };
}

// ── TABS ──────────────────────────────────────
function bindTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-' + target).classList.add('active');
      if (target === 'history') renderHistory();
    });
  });
}

// ── TOPIC GRID ────────────────────────────────
function buildTopicGrid() {
  const grid = document.getElementById('topicGrid');
  TOPICS.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.dataset.id = topic.id;
    card.innerHTML = `<span class="topic-emoji">${topic.emoji}</span>
                      <span class="topic-name">${topic.name}</span>`;
    card.addEventListener('click', () => selectTopic(topic, card));
    grid.appendChild(card);
  });
}

function selectTopic(topic, card) {
  document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  selectedTopic = topic;

  const scriptSection = document.getElementById('scriptSection');
  const scriptName = document.getElementById('scriptTopicName');
  const scriptText = document.getElementById('scriptText');

  scriptName.textContent = `${topic.emoji} ${topic.name}`;
  scriptText.textContent = topic.script;
  scriptSection.style.display = 'block';

  // reset result
  document.getElementById('resultCard').classList.remove('visible');
  document.getElementById('saveBtn').style.display = 'none';
  currentTranscript = '';
  const liveEl = document.getElementById('liveTranscript');
  if (liveEl) liveEl.textContent = '';
}

// ── RECORD BUTTON ─────────────────────────────
function bindRecordBtn() {
  document.getElementById('recordBtn').addEventListener('click', () => {
    if (!selectedTopic) {
      showToast('📌 Vui lòng chọn chủ đề trước!');
      return;
    }
    if (!speechSupported) {
      showToast('⚠️ Trình duyệt không hỗ trợ nhận dạng giọng nói.');
      return;
    }
    isRecording ? stopRecording() : startRecording();
  });
}

function startRecording() {
  isRecording = true;
  currentTranscript = '';
  elapsedSeconds = 0;

  const btn = document.getElementById('recordBtn');
  const status = document.getElementById('recStatus');
  const dot = document.getElementById('pulseDot');
  const liveEl = document.getElementById('liveTranscript');
  if (liveEl) liveEl.textContent = '';

  btn.className = 'record-btn recording';
  btn.textContent = '⏹️';
  btn.setAttribute('aria-label', 'Dừng ghi âm');
  status.textContent = 'Đang ghi âm...';
  status.className = 'recorder-status recording-active';
  dot.className = 'pulse-dot recording';

  document.getElementById('resultCard').classList.remove('visible');
  document.getElementById('saveBtn').style.display = 'none';

  timerInterval = setInterval(() => {
    elapsedSeconds++;
    document.getElementById('timerDisplay').textContent = formatTime(elapsedSeconds);
  }, 1000);

  try {
    recognition.start();
  } catch (_) {}
}

function stopRecording() {
  isRecording = false;
  clearInterval(timerInterval);

  try { recognition.stop(); } catch (_) {}

  const btn = document.getElementById('recordBtn');
  const status = document.getElementById('recStatus');
  const dot = document.getElementById('pulseDot');

  btn.className = 'record-btn idle';
  btn.textContent = '🎤';
  btn.setAttribute('aria-label', 'Bắt đầu ghi âm');
  status.textContent = 'Nhấn để bắt đầu';
  status.className = 'recorder-status';
  dot.className = 'pulse-dot';

  if (currentTranscript.trim().length > 0) {
    showResult();
  } else {
    showToast('Không nhận được giọng nói. Hãy thử lại!');
  }
}

// ── RESULT ────────────────────────────────────
function showResult() {
  const words = countWords(currentTranscript);
  const minutes = elapsedSeconds / 60;
  const wpm = minutes > 0 ? Math.round(words / minutes) : 0;

  // Speed rating
  let speedBadge, speedClass;
  if (wpm < 90)       { speedBadge = '🐢 Hơi chậm';  speedClass = 'warn'; }
  else if (wpm <= 150){ speedBadge = '✅ Tốc độ tốt'; speedClass = 'good'; }
  else                { speedBadge = '⚡ Hơi nhanh';  speedClass = 'warn'; }

  // Length rating
  let lengthBadge, lengthClass;
  if (words < 80)        { lengthBadge = '⚠️ Quá ngắn';        lengthClass = 'error'; }
  else if (words <= 180) { lengthBadge = '👍 Độ dài phù hợp';  lengthClass = 'good';  }
  else                   { lengthBadge = '📝 Bài dài – tốt!';  lengthClass = 'good';  }

  // Feedback
  let feedback;
  if (words < 80) {
    feedback = '💬 Bạn cần nói dài hơn để có đủ dữ liệu đánh giá. Hãy thử lại và mở rộng thêm nội dung!';
  } else if (wpm > 150) {
    feedback = '🎙️ Bạn đang nói hơi nhanh, hãy ngắt nghỉ rõ hơn sau mỗi câu để khách hàng kịp tiếp thu.';
  } else if (wpm < 90) {
    feedback = '🎙️ Tốc độ của bạn hơi chậm. Hãy thử nói tự nhiên hơn, tự tin hơn một chút!';
  } else {
    feedback = '🌟 Tốc độ nói khá ổn, hãy tập thêm cảm xúc và nhấn giọng vào các từ khóa quan trọng!';
  }

  // Populate DOM
  document.getElementById('resWords').textContent = words;
  document.getElementById('resWpm').textContent = wpm;
  document.getElementById('resTime').textContent = formatTime(elapsedSeconds);
  document.getElementById('resSpeedBadge').textContent = speedBadge;
  document.getElementById('resSpeedBadge').className = `badge ${speedClass}`;
  document.getElementById('resLengthBadge').textContent = lengthBadge;
  document.getElementById('resLengthBadge').className = `badge ${lengthClass}`;
  document.getElementById('resTranscript').textContent = currentTranscript.trim();
  document.getElementById('resFeedback').textContent = feedback;

  const card = document.getElementById('resultCard');
  card.classList.add('visible');
  card.scrollIntoView({ behavior: 'smooth', block: 'start' });

  document.getElementById('saveBtn').style.display = 'flex';
}

// ── SAVE ──────────────────────────────────────
function bindSaveBtn() {
  document.getElementById('saveBtn').addEventListener('click', () => {
    if (!currentTranscript.trim()) return;

    const words = countWords(currentTranscript);
    const wpm = elapsedSeconds > 0 ? Math.round(words / (elapsedSeconds / 60)) : 0;

    const entry = {
      id: Date.now(),
      topicId: selectedTopic.id,
      topicName: selectedTopic.name,
      topicEmoji: selectedTopic.emoji,
      transcript: currentTranscript.trim(),
      words,
      wpm,
      duration: elapsedSeconds,
      date: new Date().toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    const history = getHistory();
    history.unshift(entry);
    localStorage.setItem('speakingHistory', JSON.stringify(history));

    showToast('✅ Đã lưu bài luyện!');
    document.getElementById('saveBtn').style.display = 'none';
  });
}

// ── HISTORY ───────────────────────────────────
function getHistory() {
  try {
    return JSON.parse(localStorage.getItem('speakingHistory')) || [];
  } catch { return []; }
}

function renderHistory() {
  const history = getHistory();
  const container = document.getElementById('historyList');
  container.innerHTML = '';

  if (history.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📭</div>
        <p>Chưa có bài luyện nào được lưu.<br>Hãy ghi âm và lưu bài đầu tiên của bạn!</p>
      </div>`;
    return;
  }

  history.forEach(entry => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <div class="history-header">
        <div class="history-topic">${entry.topicEmoji} ${entry.topicName}</div>
        <div class="history-date">${entry.date}</div>
      </div>
      <div class="history-stats">
        <div class="h-stat">⏱️ ${formatTime(entry.duration)}</div>
        <div class="h-stat">📝 ${entry.words} từ</div>
        <div class="h-stat">🚀 ${entry.wpm} wpm</div>
      </div>
      <div class="history-transcript">${entry.transcript}</div>
      <button class="btn-delete" data-id="${entry.id}">🗑️ Xóa</button>
    `;
    item.querySelector('.btn-delete').addEventListener('click', () => {
      deleteEntry(entry.id);
    });
    container.appendChild(item);
  });
}

function deleteEntry(id) {
  const history = getHistory().filter(e => e.id !== id);
  localStorage.setItem('speakingHistory', JSON.stringify(history));
  renderHistory();
  showToast('🗑️ Đã xóa bài luyện.');
}

// ── TIPS ──────────────────────────────────────
function buildTips() {
  const container = document.getElementById('tipsList');
  TIPS.forEach(tip => {
    const card = document.createElement('div');
    card.className = 'tip-card';
    card.innerHTML = `
      <div class="tip-icon">${tip.icon}</div>
      <div class="tip-content">
        <h4>${tip.title}</h4>
        <p>${tip.desc}</p>
      </div>`;
    container.appendChild(card);
  });
}

// ── UTILITIES ─────────────────────────────────
function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
