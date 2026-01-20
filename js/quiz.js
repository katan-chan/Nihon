// ===== Quiz Logic =====

class Quiz {
    constructor() {
        this.mode = null;
        this.alphabet = 'hiragana';
        this.questions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.answered = false;
    }

    // Get character data based on current alphabet
    getCharacters() {
        return this.alphabet === 'hiragana' ? HIRAGANA : KATAKANA;
    }

    // Start a new quiz
    start(mode, alphabet = 'hiragana', numQuestions = 10) {
        this.mode = mode;
        this.alphabet = alphabet;
        this.currentIndex = 0;
        this.score = 0;
        this.answered = false;

        if (mode === 'reading') {
            this.questions = this.generateReadingQuestions(numQuestions);
        } else {
            this.questions = this.generateQuestions(numQuestions);
        }

        return this.questions.length > 0;
    }

    // Generate character quiz questions
    generateQuestions(numQuestions) {
        const chars = this.getCharacters();
        const shuffled = this.shuffle([...chars]);
        const selected = shuffled.slice(0, Math.min(numQuestions, shuffled.length));

        return selected.map(char => ({
            character: char,
            options: this.generateOptions(char, chars)
        }));
    }

    // Generate reading comprehension questions
    generateReadingQuestions(numQuestions) {
        const sentences = [];
        VOCABULARY.forEach(vocab => {
            vocab.sentences.forEach(sentence => {
                sentences.push({
                    japanese: sentence.japanese,
                    romaji: sentence.romaji,
                    vietnamese: sentence.vietnamese,
                    word: vocab.word
                });
            });
        });

        const shuffled = this.shuffle([...sentences]);
        return shuffled.slice(0, Math.min(numQuestions, shuffled.length));
    }

    // Generate 4 options for a question
    generateOptions(correctChar, allChars) {
        const options = [correctChar];
        const filtered = allChars.filter(c => c.char !== correctChar.char);
        const shuffled = this.shuffle([...filtered]);

        // Add 3 wrong options
        for (let i = 0; i < 3 && i < shuffled.length; i++) {
            options.push(shuffled[i]);
        }

        return this.shuffle(options);
    }

    // Get current question
    getCurrentQuestion() {
        if (this.currentIndex < this.questions.length) {
            return this.questions[this.currentIndex];
        }
        return null;
    }

    // Check answer for character quiz
    checkAnswer(selectedIndex) {
        if (this.answered) return null;

        const question = this.getCurrentQuestion();
        if (!question) return null;

        this.answered = true;
        const selectedOption = question.options[selectedIndex];
        const isCorrect = selectedOption.char === question.character.char;

        if (isCorrect) {
            this.score++;
        }

        return {
            isCorrect,
            correctChar: question.character,
            selectedChar: selectedOption
        };
    }

    // Move to next question
    next() {
        this.currentIndex++;
        this.answered = false;
        return this.currentIndex < this.questions.length;
    }

    // Check if quiz is complete
    isComplete() {
        return this.currentIndex >= this.questions.length;
    }

    // Get quiz results
    getResults() {
        return {
            score: this.score,
            total: this.questions.length,
            percentage: Math.round((this.score / this.questions.length) * 100)
        };
    }

    // Get result message based on score
    getResultMessage() {
        const percentage = (this.score / this.questions.length) * 100;

        if (percentage === 100) return "🌟 Hoàn hảo! Bạn thật tuyệt vời!";
        if (percentage >= 80) return "🎉 Xuất sắc! Tiếp tục phát huy nhé!";
        if (percentage >= 60) return "👍 Tốt lắm! Cố gắng thêm nữa!";
        if (percentage >= 40) return "💪 Cần luyện tập thêm!";
        return "📚 Hãy ôn lại bảng chữ cái nhé!";
    }

    // Shuffle array (Fisher-Yates algorithm)
    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// Export for use in app.js
const quiz = new Quiz();
