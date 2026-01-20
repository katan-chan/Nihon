// ===== Main Application =====

document.addEventListener('DOMContentLoaded', () => {
    // Initialize app
    initNavigation();
    initCharacterTab();
    initVocabularyTab();
    initPracticeTab();
});

// ===== Navigation =====
function initNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Hide all content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Show selected content
            const tabId = tab.dataset.tab;
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
}

// ===== Character Tab =====
let currentAlphabet = 'hiragana';
let currentSubtab = 'basic'; // 'basic' = Basic + Dakuten, 'yoon' = Yōon + Yōon Dakuten

function initCharacterTab() {
    renderCharacterGrid();
    initAlphabetToggle();
    initSubtabToggle();
    initCharacterModal();
}

function initAlphabetToggle() {
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentAlphabet = btn.dataset.alphabet;
            renderCharacterGrid();
        });
    });
}

function initSubtabToggle() {
    const subtabBtns = document.querySelectorAll('.subtab-btn');

    subtabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            subtabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSubtab = btn.dataset.subtab;
            renderCharacterGrid();
        });
    });
}

function renderCharacterGrid() {
    const grid = document.getElementById('character-grid');
    const chart = currentAlphabet === 'hiragana' ? HIRAGANA_CHART : KATAKANA_CHART;

    grid.innerHTML = '';

    // Create main container with 2 sections based on subtab
    const container = document.createElement('div');
    container.className = 'kana-chart-container';

    if (currentSubtab === 'basic') {
        // Show Basic + Dakuten
        const basicSection = createChartSection('Cơ bản (46 chữ)', chart.basic, 5, ['a', 'i', 'u', 'e', 'o']);
        container.appendChild(basicSection);

        const dakutenSection = createChartSection('Dakuten ゛ & Handakuten ゜', chart.dakuten, 5, ['a', 'i', 'u', 'e', 'o']);
        container.appendChild(dakutenSection);
    } else {
        // Show Yōon + Yōon Dakuten
        const yoonSection = createChartSection('Yōon (Ghép)', chart.yoon, 3, ['ya', 'yu', 'yo']);
        container.appendChild(yoonSection);

        const yoonDakutenSection = createChartSection('Yōon Dakuten', chart.yoonDakuten, 3, ['ya', 'yu', 'yo']);
        container.appendChild(yoonDakutenSection);
    }

    grid.appendChild(container);
}

function createChartSection(title, rows, numCols, colHeaders) {
    const section = document.createElement('div');
    section.className = 'chart-section';

    // Section title
    const titleEl = document.createElement('h3');
    titleEl.className = 'chart-title';
    titleEl.textContent = title;
    section.appendChild(titleEl);

    // Table
    const table = document.createElement('table');
    table.className = 'kana-table';

    // Header row with vowels
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th class="row-label"></th>' +
        colHeaders.map(h => `<th class="col-header">${h}</th>`).join('');
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Body rows
    const tbody = document.createElement('tbody');
    rows.forEach(row => {
        const tr = document.createElement('tr');

        // Row label
        const labelTd = document.createElement('td');
        labelTd.className = 'row-label';
        labelTd.textContent = row.label;
        tr.appendChild(labelTd);

        // Character cells
        row.chars.forEach(char => {
            const td = document.createElement('td');
            if (char) {
                td.className = 'char-cell';
                td.innerHTML = `
                    <span class="char">${char.char}</span>
                    <span class="romaji">${char.romaji}</span>
                `;
                td.addEventListener('click', () => showCharacterModal({ ...char, row: row.row }));
            } else {
                td.className = 'char-cell empty';
            }
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    section.appendChild(table);
    return section;
}

function initCharacterModal() {
    const modal = document.getElementById('character-modal');
    const closeBtn = modal.querySelector('.modal-close');

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

function showCharacterModal(char) {
    const modal = document.getElementById('character-modal');

    document.getElementById('modal-char').textContent = char.char;
    document.getElementById('modal-romaji').textContent = char.romaji;
    document.getElementById('modal-row').textContent = ROW_NAMES[char.row] || char.row;

    const examplesDiv = document.getElementById('modal-examples');
    if (char.examples && char.examples.length > 0) {
        examplesDiv.innerHTML = `
            <h4>Ví dụ từ vựng:</h4>
            ${char.examples.map(ex => `
                <div class="example-word">
                    <span class="word-jp">${ex.word}</span>
                    <span class="word-meaning">${ex.meaning}</span>
                </div>
            `).join('')}
        `;
    } else {
        examplesDiv.innerHTML = '<p style="color: var(--text-light); text-align: center;">Chưa có ví dụ</p>';
    }

    modal.classList.add('active');
}

// ===== Vocabulary Tab =====
let currentCategory = 'all';

function initVocabularyTab() {
    renderVocabularyList();
    initVocabularySearch();
    initCategoryFilter();
}

function initVocabularySearch() {
    const searchInput = document.getElementById('vocab-search');

    searchInput.addEventListener('input', (e) => {
        renderVocabularyList(e.target.value);
    });
}

function initCategoryFilter() {
    const categoryBtns = document.querySelectorAll('.category-btn');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderVocabularyList(document.getElementById('vocab-search').value);
        });
    });
}

function renderVocabularyList(searchTerm = '') {
    const list = document.getElementById('vocab-list');

    let filtered = VOCABULARY;

    // Filter by category
    if (currentCategory !== 'all') {
        filtered = filtered.filter(v => v.type === currentCategory);
    }

    // Filter by search term
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(v =>
            v.word.includes(term) ||
            v.romaji.toLowerCase().includes(term) ||
            v.meaning.toLowerCase().includes(term)
        );
    }

    if (filtered.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-light);">
                <p>Không tìm thấy từ vựng nào 😢</p>
            </div>
        `;
        return;
    }

    list.innerHTML = filtered.map(vocab => `
        <div class="vocab-card">
            <div class="vocab-header">
                <span class="vocab-word">${vocab.word}</span>
                <span class="vocab-romaji">${vocab.romaji}</span>
                <span class="vocab-type">${getTypeName(vocab.type)}</span>
                <span class="vocab-meaning">${vocab.meaning}</span>
            </div>
            ${vocab.sentences.length > 0 ? `
                <div class="vocab-sentences">
                    ${vocab.sentences.map(s => `
                        <div class="sentence-item">
                            <div class="sentence-jp">${s.japanese}</div>
                            <div class="sentence-romaji">${s.romaji}</div>
                            <div class="sentence-vn">→ ${s.vietnamese}</div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

function getTypeName(type) {
    const names = {
        pronoun: 'Đại từ',
        noun: 'Danh từ',
        verb: 'Động từ',
        adjective: 'Tính từ',
        phrase: 'Cụm từ'
    };
    return names[type] || type;
}

// ===== Practice Tab =====
let currentQuizMode = null;

function initPracticeTab() {
    initPracticeModes();
    initQuizControls();
}

function initPracticeModes() {
    const modeCards = document.querySelectorAll('.practice-card');

    modeCards.forEach(card => {
        card.addEventListener('click', () => {
            const mode = card.dataset.mode;
            startQuiz(mode);
        });
    });
}

function initQuizControls() {
    document.getElementById('quit-quiz').addEventListener('click', quitQuiz);
    document.getElementById('retry-quiz').addEventListener('click', retryQuiz);
    document.getElementById('back-to-modes').addEventListener('click', backToModes);
}

function startQuiz(mode) {
    currentQuizMode = mode;

    // Start quiz with current alphabet
    if (quiz.start(mode, currentAlphabet, 10)) {
        // Hide mode selection, show quiz area
        document.getElementById('practice-modes').classList.add('hidden');
        document.getElementById('quiz-result').classList.add('hidden');
        document.getElementById('quiz-area').classList.remove('hidden');

        // Reset UI
        document.getElementById('quiz-score').textContent = '0';

        // Show first question
        showQuestion();
    }
}

function showQuestion() {
    const question = quiz.getCurrentQuestion();
    if (!question) return;

    // Update progress
    document.getElementById('quiz-current').textContent = quiz.currentIndex + 1;
    document.getElementById('quiz-total').textContent = quiz.questions.length;

    // Hide feedback
    document.getElementById('quiz-feedback').classList.add('hidden');

    const questionDiv = document.getElementById('quiz-question');
    const optionsDiv = document.getElementById('quiz-options');

    if (currentQuizMode === 'reading') {
        // Reading mode
        questionDiv.innerHTML = `
            <div class="reading-question">
                <div class="reading-sentence">${question.japanese}</div>
                <div class="reading-hint">Đọc câu trên và đoán nghĩa</div>
                <button class="show-answer-btn" id="show-answer">Hiện đáp án</button>
                <div class="reading-answer hidden" id="reading-answer">
                    <div class="reading-romaji">${question.romaji}</div>
                    <div class="reading-meaning">${question.vietnamese}</div>
                </div>
                <div class="reading-nav">
                    <button class="btn-primary" id="next-reading">Câu tiếp theo →</button>
                </div>
            </div>
        `;
        optionsDiv.classList.add('hidden');

        // Add event listeners
        document.getElementById('show-answer').addEventListener('click', () => {
            document.getElementById('reading-answer').classList.remove('hidden');
            document.getElementById('show-answer').classList.add('hidden');
        });

        document.getElementById('next-reading').addEventListener('click', () => {
            quiz.score++; // Auto count as correct for reading mode
            document.getElementById('quiz-score').textContent = quiz.score;

            if (quiz.next()) {
                showQuestion();
            } else {
                showResults();
            }
        });
    } else if (currentQuizMode === 'char-to-romaji') {
        // Show character, select romaji
        questionDiv.innerHTML = `<div class="question-char">${question.character.char}</div>`;
        optionsDiv.classList.remove('hidden');
        optionsDiv.innerHTML = question.options.map((opt, i) => `
            <button class="option-btn" data-index="${i}">${opt.romaji}</button>
        `).join('');

        // Add click handlers
        optionsDiv.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
        });
    } else if (currentQuizMode === 'romaji-to-char') {
        // Show romaji, select character
        questionDiv.innerHTML = `<div class="question-text">${question.character.romaji}</div>`;
        optionsDiv.classList.remove('hidden');
        optionsDiv.innerHTML = question.options.map((opt, i) => `
            <button class="option-btn char-option" data-index="${i}">${opt.char}</button>
        `).join('');

        // Add click handlers
        optionsDiv.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.index)));
        });
    }
}

function handleAnswer(selectedIndex) {
    const result = quiz.checkAnswer(selectedIndex);
    if (!result) return;

    const optionsDiv = document.getElementById('quiz-options');
    const buttons = optionsDiv.querySelectorAll('.option-btn');

    // Highlight correct/wrong answers
    buttons.forEach((btn, i) => {
        const option = quiz.getCurrentQuestion().options[i];
        if (option.char === result.correctChar.char) {
            btn.classList.add('correct');
        } else if (i === selectedIndex && !result.isCorrect) {
            btn.classList.add('wrong');
        }
        btn.disabled = true;
    });

    // Show feedback
    const feedbackDiv = document.getElementById('quiz-feedback');
    feedbackDiv.classList.remove('hidden', 'correct', 'wrong');
    feedbackDiv.classList.add(result.isCorrect ? 'correct' : 'wrong');
    feedbackDiv.querySelector('.feedback-icon').textContent = result.isCorrect ? '✓' : '✗';
    feedbackDiv.querySelector('.feedback-text').textContent = result.isCorrect
        ? 'Chính xác! 🎉'
        : `Sai rồi! Đáp án đúng là: ${result.correctChar.romaji}`;

    // Update score
    document.getElementById('quiz-score').textContent = quiz.score;

    // Auto move to next question after delay
    setTimeout(() => {
        if (quiz.next()) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    document.getElementById('quiz-area').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');

    const results = quiz.getResults();
    document.getElementById('result-correct').textContent = results.score;
    document.getElementById('result-total').textContent = results.total;
    document.getElementById('result-message').textContent = quiz.getResultMessage();
}

function quitQuiz() {
    document.getElementById('quiz-area').classList.add('hidden');
    document.getElementById('practice-modes').classList.remove('hidden');
}

function retryQuiz() {
    startQuiz(currentQuizMode);
}

function backToModes() {
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('practice-modes').classList.remove('hidden');
}
