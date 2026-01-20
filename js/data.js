// ===== Japanese Character Data - Organized by Traditional Chart Layout =====

// Hiragana organized by traditional chart (gojūon order)
const HIRAGANA_CHART = {
    // Basic 46 characters in traditional grid layout
    basic: [
        // Row label, then 5 vowels: a, i, u, e, o
        {
            row: "vowel", label: "", chars: [
                { char: "あ", romaji: "a" },
                { char: "い", romaji: "i" },
                { char: "う", romaji: "u" },
                { char: "え", romaji: "e" },
                { char: "お", romaji: "o" }
            ]
        },
        {
            row: "k", label: "K", chars: [
                { char: "か", romaji: "ka" },
                { char: "き", romaji: "ki" },
                { char: "く", romaji: "ku" },
                { char: "け", romaji: "ke" },
                { char: "こ", romaji: "ko" }
            ]
        },
        {
            row: "s", label: "S", chars: [
                { char: "さ", romaji: "sa" },
                { char: "し", romaji: "shi" },
                { char: "す", romaji: "su" },
                { char: "せ", romaji: "se" },
                { char: "そ", romaji: "so" }
            ]
        },
        {
            row: "t", label: "T", chars: [
                { char: "た", romaji: "ta" },
                { char: "ち", romaji: "chi" },
                { char: "つ", romaji: "tsu" },
                { char: "て", romaji: "te" },
                { char: "と", romaji: "to" }
            ]
        },
        {
            row: "n", label: "N", chars: [
                { char: "な", romaji: "na" },
                { char: "に", romaji: "ni" },
                { char: "ぬ", romaji: "nu" },
                { char: "ね", romaji: "ne" },
                { char: "の", romaji: "no" }
            ]
        },
        {
            row: "h", label: "H", chars: [
                { char: "は", romaji: "ha" },
                { char: "ひ", romaji: "hi" },
                { char: "ふ", romaji: "fu" },
                { char: "へ", romaji: "he" },
                { char: "ほ", romaji: "ho" }
            ]
        },
        {
            row: "m", label: "M", chars: [
                { char: "ま", romaji: "ma" },
                { char: "み", romaji: "mi" },
                { char: "む", romaji: "mu" },
                { char: "め", romaji: "me" },
                { char: "も", romaji: "mo" }
            ]
        },
        {
            row: "y", label: "Y", chars: [
                { char: "や", romaji: "ya" },
                null, // yi doesn't exist
                { char: "ゆ", romaji: "yu" },
                null, // ye doesn't exist
                { char: "よ", romaji: "yo" }
            ]
        },
        {
            row: "r", label: "R", chars: [
                { char: "ら", romaji: "ra" },
                { char: "り", romaji: "ri" },
                { char: "る", romaji: "ru" },
                { char: "れ", romaji: "re" },
                { char: "ろ", romaji: "ro" }
            ]
        },
        {
            row: "w", label: "W", chars: [
                { char: "わ", romaji: "wa" },
                null, // wi obsolete
                null, // wu doesn't exist
                null, // we obsolete
                { char: "を", romaji: "wo" }
            ]
        },
        {
            row: "nn", label: "N", chars: [
                null,
                null,
                { char: "ん", romaji: "n" },
                null,
                null
            ]
        }
    ],

    // Dakuten (voiced) - ga, za, da, ba rows
    dakuten: [
        {
            row: "g", label: "G", chars: [
                { char: "が", romaji: "ga" },
                { char: "ぎ", romaji: "gi" },
                { char: "ぐ", romaji: "gu" },
                { char: "げ", romaji: "ge" },
                { char: "ご", romaji: "go" }
            ]
        },
        {
            row: "z", label: "Z", chars: [
                { char: "ざ", romaji: "za" },
                { char: "じ", romaji: "ji" },
                { char: "ず", romaji: "zu" },
                { char: "ぜ", romaji: "ze" },
                { char: "ぞ", romaji: "zo" }
            ]
        },
        {
            row: "d", label: "D", chars: [
                { char: "だ", romaji: "da" },
                { char: "ぢ", romaji: "ji" },
                { char: "づ", romaji: "zu" },
                { char: "で", romaji: "de" },
                { char: "ど", romaji: "do" }
            ]
        },
        {
            row: "b", label: "B", chars: [
                { char: "ば", romaji: "ba" },
                { char: "び", romaji: "bi" },
                { char: "ぶ", romaji: "bu" },
                { char: "べ", romaji: "be" },
                { char: "ぼ", romaji: "bo" }
            ]
        },
        {
            row: "p", label: "P", chars: [
                { char: "ぱ", romaji: "pa" },
                { char: "ぴ", romaji: "pi" },
                { char: "ぷ", romaji: "pu" },
                { char: "ぺ", romaji: "pe" },
                { char: "ぽ", romaji: "po" }
            ]
        }
    ],

    // Yōon (combination characters) - basic
    yoon: [
        {
            row: "ky", label: "KY", chars: [
                { char: "きゃ", romaji: "kya" },
                { char: "きゅ", romaji: "kyu" },
                { char: "きょ", romaji: "kyo" }
            ]
        },
        {
            row: "sh", label: "SH", chars: [
                { char: "しゃ", romaji: "sha" },
                { char: "しゅ", romaji: "shu" },
                { char: "しょ", romaji: "sho" }
            ]
        },
        {
            row: "ch", label: "CH", chars: [
                { char: "ちゃ", romaji: "cha" },
                { char: "ちゅ", romaji: "chu" },
                { char: "ちょ", romaji: "cho" }
            ]
        },
        {
            row: "ny", label: "NY", chars: [
                { char: "にゃ", romaji: "nya" },
                { char: "にゅ", romaji: "nyu" },
                { char: "にょ", romaji: "nyo" }
            ]
        },
        {
            row: "hy", label: "HY", chars: [
                { char: "ひゃ", romaji: "hya" },
                { char: "ひゅ", romaji: "hyu" },
                { char: "ひょ", romaji: "hyo" }
            ]
        },
        {
            row: "my", label: "MY", chars: [
                { char: "みゃ", romaji: "mya" },
                { char: "みゅ", romaji: "myu" },
                { char: "みょ", romaji: "myo" }
            ]
        },
        {
            row: "ry", label: "RY", chars: [
                { char: "りゃ", romaji: "rya" },
                { char: "りゅ", romaji: "ryu" },
                { char: "りょ", romaji: "ryo" }
            ]
        }
    ],

    // Yōon Dakuten (voiced combinations)
    yoonDakuten: [
        {
            row: "gy", label: "GY", chars: [
                { char: "ぎゃ", romaji: "gya" },
                { char: "ぎゅ", romaji: "gyu" },
                { char: "ぎょ", romaji: "gyo" }
            ]
        },
        {
            row: "j", label: "J", chars: [
                { char: "じゃ", romaji: "ja" },
                { char: "じゅ", romaji: "ju" },
                { char: "じょ", romaji: "jo" }
            ]
        },
        {
            row: "by", label: "BY", chars: [
                { char: "びゃ", romaji: "bya" },
                { char: "びゅ", romaji: "byu" },
                { char: "びょ", romaji: "byo" }
            ]
        },
        {
            row: "py", label: "PY", chars: [
                { char: "ぴゃ", romaji: "pya" },
                { char: "ぴゅ", romaji: "pyu" },
                { char: "ぴょ", romaji: "pyo" }
            ]
        }
    ]
};

// Katakana organized by traditional chart
const KATAKANA_CHART = {
    basic: [
        {
            row: "vowel", label: "", chars: [
                { char: "ア", romaji: "a" },
                { char: "イ", romaji: "i" },
                { char: "ウ", romaji: "u" },
                { char: "エ", romaji: "e" },
                { char: "オ", romaji: "o" }
            ]
        },
        {
            row: "k", label: "K", chars: [
                { char: "カ", romaji: "ka" },
                { char: "キ", romaji: "ki" },
                { char: "ク", romaji: "ku" },
                { char: "ケ", romaji: "ke" },
                { char: "コ", romaji: "ko" }
            ]
        },
        {
            row: "s", label: "S", chars: [
                { char: "サ", romaji: "sa" },
                { char: "シ", romaji: "shi" },
                { char: "ス", romaji: "su" },
                { char: "セ", romaji: "se" },
                { char: "ソ", romaji: "so" }
            ]
        },
        {
            row: "t", label: "T", chars: [
                { char: "タ", romaji: "ta" },
                { char: "チ", romaji: "chi" },
                { char: "ツ", romaji: "tsu" },
                { char: "テ", romaji: "te" },
                { char: "ト", romaji: "to" }
            ]
        },
        {
            row: "n", label: "N", chars: [
                { char: "ナ", romaji: "na" },
                { char: "ニ", romaji: "ni" },
                { char: "ヌ", romaji: "nu" },
                { char: "ネ", romaji: "ne" },
                { char: "ノ", romaji: "no" }
            ]
        },
        {
            row: "h", label: "H", chars: [
                { char: "ハ", romaji: "ha" },
                { char: "ヒ", romaji: "hi" },
                { char: "フ", romaji: "fu" },
                { char: "ヘ", romaji: "he" },
                { char: "ホ", romaji: "ho" }
            ]
        },
        {
            row: "m", label: "M", chars: [
                { char: "マ", romaji: "ma" },
                { char: "ミ", romaji: "mi" },
                { char: "ム", romaji: "mu" },
                { char: "メ", romaji: "me" },
                { char: "モ", romaji: "mo" }
            ]
        },
        {
            row: "y", label: "Y", chars: [
                { char: "ヤ", romaji: "ya" },
                null,
                { char: "ユ", romaji: "yu" },
                null,
                { char: "ヨ", romaji: "yo" }
            ]
        },
        {
            row: "r", label: "R", chars: [
                { char: "ラ", romaji: "ra" },
                { char: "リ", romaji: "ri" },
                { char: "ル", romaji: "ru" },
                { char: "レ", romaji: "re" },
                { char: "ロ", romaji: "ro" }
            ]
        },
        {
            row: "w", label: "W", chars: [
                { char: "ワ", romaji: "wa" },
                null,
                null,
                null,
                { char: "ヲ", romaji: "wo" }
            ]
        },
        {
            row: "nn", label: "N", chars: [
                null,
                null,
                { char: "ン", romaji: "n" },
                null,
                null
            ]
        }
    ],

    dakuten: [
        {
            row: "g", label: "G", chars: [
                { char: "ガ", romaji: "ga" },
                { char: "ギ", romaji: "gi" },
                { char: "グ", romaji: "gu" },
                { char: "ゲ", romaji: "ge" },
                { char: "ゴ", romaji: "go" }
            ]
        },
        {
            row: "z", label: "Z", chars: [
                { char: "ザ", romaji: "za" },
                { char: "ジ", romaji: "ji" },
                { char: "ズ", romaji: "zu" },
                { char: "ゼ", romaji: "ze" },
                { char: "ゾ", romaji: "zo" }
            ]
        },
        {
            row: "d", label: "D", chars: [
                { char: "ダ", romaji: "da" },
                { char: "ヂ", romaji: "ji" },
                { char: "ヅ", romaji: "zu" },
                { char: "デ", romaji: "de" },
                { char: "ド", romaji: "do" }
            ]
        },
        {
            row: "b", label: "B", chars: [
                { char: "バ", romaji: "ba" },
                { char: "ビ", romaji: "bi" },
                { char: "ブ", romaji: "bu" },
                { char: "ベ", romaji: "be" },
                { char: "ボ", romaji: "bo" }
            ]
        },
        {
            row: "p", label: "P", chars: [
                { char: "パ", romaji: "pa" },
                { char: "ピ", romaji: "pi" },
                { char: "プ", romaji: "pu" },
                { char: "ペ", romaji: "pe" },
                { char: "ポ", romaji: "po" }
            ]
        }
    ],

    yoon: [
        {
            row: "ky", label: "KY", chars: [
                { char: "キャ", romaji: "kya" },
                { char: "キュ", romaji: "kyu" },
                { char: "キョ", romaji: "kyo" }
            ]
        },
        {
            row: "sh", label: "SH", chars: [
                { char: "シャ", romaji: "sha" },
                { char: "シュ", romaji: "shu" },
                { char: "ショ", romaji: "sho" }
            ]
        },
        {
            row: "ch", label: "CH", chars: [
                { char: "チャ", romaji: "cha" },
                { char: "チュ", romaji: "chu" },
                { char: "チョ", romaji: "cho" }
            ]
        },
        {
            row: "ny", label: "NY", chars: [
                { char: "ニャ", romaji: "nya" },
                { char: "ニュ", romaji: "nyu" },
                { char: "ニョ", romaji: "nyo" }
            ]
        },
        {
            row: "hy", label: "HY", chars: [
                { char: "ヒャ", romaji: "hya" },
                { char: "ヒュ", romaji: "hyu" },
                { char: "ヒョ", romaji: "hyo" }
            ]
        },
        {
            row: "my", label: "MY", chars: [
                { char: "ミャ", romaji: "mya" },
                { char: "ミュ", romaji: "myu" },
                { char: "ミョ", romaji: "myo" }
            ]
        },
        {
            row: "ry", label: "RY", chars: [
                { char: "リャ", romaji: "rya" },
                { char: "リュ", romaji: "ryu" },
                { char: "リョ", romaji: "ryo" }
            ]
        }
    ],

    yoonDakuten: [
        {
            row: "gy", label: "GY", chars: [
                { char: "ギャ", romaji: "gya" },
                { char: "ギュ", romaji: "gyu" },
                { char: "ギョ", romaji: "gyo" }
            ]
        },
        {
            row: "j", label: "J", chars: [
                { char: "ジャ", romaji: "ja" },
                { char: "ジュ", romaji: "ju" },
                { char: "ジョ", romaji: "jo" }
            ]
        },
        {
            row: "by", label: "BY", chars: [
                { char: "ビャ", romaji: "bya" },
                { char: "ビュ", romaji: "byu" },
                { char: "ビョ", romaji: "byo" }
            ]
        },
        {
            row: "py", label: "PY", chars: [
                { char: "ピャ", romaji: "pya" },
                { char: "ピュ", romaji: "pyu" },
                { char: "ピョ", romaji: "pyo" }
            ]
        }
    ]
};

// Helper function to get all characters as flat array (for quiz)
function getAllCharacters(alphabet) {
    const chart = alphabet === 'hiragana' ? HIRAGANA_CHART : KATAKANA_CHART;
    const allChars = [];

    // Add basic characters
    chart.basic.forEach(row => {
        row.chars.forEach(char => {
            if (char) allChars.push({ ...char, row: row.row });
        });
    });

    // Add dakuten
    chart.dakuten.forEach(row => {
        row.chars.forEach(char => {
            if (char) allChars.push({ ...char, row: row.row });
        });
    });

    // Add yoon
    chart.yoon.forEach(row => {
        row.chars.forEach(char => {
            if (char) allChars.push({ ...char, row: row.row });
        });
    });

    // Add yoon dakuten
    chart.yoonDakuten.forEach(row => {
        row.chars.forEach(char => {
            if (char) allChars.push({ ...char, row: row.row });
        });
    });

    return allChars;
}

// Legacy support - flat arrays for quiz
const HIRAGANA = getAllCharacters('hiragana');
const KATAKANA = getAllCharacters('katakana');

// Row names in Vietnamese
const ROW_NAMES = {
    vowel: "Hàng nguyên âm",
    k: "Hàng K (か行)",
    s: "Hàng S (さ行)",
    t: "Hàng T (た行)",
    n: "Hàng N (な行)",
    h: "Hàng H (は行)",
    m: "Hàng M (ま行)",
    y: "Hàng Y (や行)",
    r: "Hàng R (ら行)",
    w: "Hàng W (わ行)",
    nn: "Phụ âm N (ん)",
    g: "Hàng G (が行) - Dakuten",
    z: "Hàng Z (ざ行) - Dakuten",
    d: "Hàng D (だ行) - Dakuten",
    b: "Hàng B (ば行) - Dakuten",
    p: "Hàng P (ぱ行) - Handakuten",
    ky: "Hàng KY - Yōon",
    sh: "Hàng SH - Yōon",
    ch: "Hàng CH - Yōon",
    ny: "Hàng NY - Yōon",
    hy: "Hàng HY - Yōon",
    my: "Hàng MY - Yōon",
    ry: "Hàng RY - Yōon",
    gy: "Hàng GY - Yōon Dakuten",
    j: "Hàng J - Yōon Dakuten",
    by: "Hàng BY - Yōon Dakuten",
    py: "Hàng PY - Yōon Dakuten"
};

// ===== Vocabulary Data =====
const VOCABULARY = [
    // Pronouns
    {
        word: "わたし",
        romaji: "watashi",
        meaning: "tôi",
        type: "pronoun",
        sentences: [
            {
                japanese: "わたしはがくせいです",
                romaji: "watashi wa gakusei desu",
                vietnamese: "Tôi là học sinh"
            }
        ]
    },
    {
        word: "あなた",
        romaji: "anata",
        meaning: "bạn",
        type: "pronoun",
        sentences: [
            {
                japanese: "あなたはにほんじんですか",
                romaji: "anata wa nihonjin desu ka",
                vietnamese: "Bạn là người Nhật phải không?"
            }
        ]
    },
    {
        word: "かれ",
        romaji: "kare",
        meaning: "anh ấy",
        type: "pronoun",
        sentences: [
            {
                japanese: "かれはせんせいです",
                romaji: "kare wa sensei desu",
                vietnamese: "Anh ấy là giáo viên"
            }
        ]
    },
    {
        word: "かのじょ",
        romaji: "kanojo",
        meaning: "cô ấy",
        type: "pronoun",
        sentences: [
            {
                japanese: "かのじょはいしゃです",
                romaji: "kanojo wa isha desu",
                vietnamese: "Cô ấy là bác sĩ"
            }
        ]
    },

    // Nouns
    {
        word: "ほん",
        romaji: "hon",
        meaning: "sách",
        type: "noun",
        sentences: [
            {
                japanese: "これはほんです",
                romaji: "kore wa hon desu",
                vietnamese: "Đây là quyển sách"
            }
        ]
    },
    {
        word: "みず",
        romaji: "mizu",
        meaning: "nước",
        type: "noun",
        sentences: [
            {
                japanese: "みずをください",
                romaji: "mizu wo kudasai",
                vietnamese: "Xin cho tôi nước"
            }
        ]
    },
    {
        word: "ごはん",
        romaji: "gohan",
        meaning: "cơm",
        type: "noun",
        sentences: [
            {
                japanese: "ごはんをたべます",
                romaji: "gohan wo tabemasu",
                vietnamese: "Tôi ăn cơm"
            }
        ]
    },
    {
        word: "でんわ",
        romaji: "denwa",
        meaning: "điện thoại",
        type: "noun",
        sentences: [
            {
                japanese: "でんわばんごうはなんですか",
                romaji: "denwa bangou wa nan desu ka",
                vietnamese: "Số điện thoại là bao nhiêu?"
            }
        ]
    },
    {
        word: "えき",
        romaji: "eki",
        meaning: "ga tàu",
        type: "noun",
        sentences: [
            {
                japanese: "えきはどこですか",
                romaji: "eki wa doko desu ka",
                vietnamese: "Ga tàu ở đâu?"
            }
        ]
    },
    {
        word: "がっこう",
        romaji: "gakkou",
        meaning: "trường học",
        type: "noun",
        sentences: [
            {
                japanese: "がっこうにいきます",
                romaji: "gakkou ni ikimasu",
                vietnamese: "Tôi đi đến trường"
            }
        ]
    },
    {
        word: "うち",
        romaji: "uchi",
        meaning: "nhà",
        type: "noun",
        sentences: [
            {
                japanese: "うちにかえります",
                romaji: "uchi ni kaerimasu",
                vietnamese: "Tôi về nhà"
            }
        ]
    },
    {
        word: "しごと",
        romaji: "shigoto",
        meaning: "công việc",
        type: "noun",
        sentences: [
            {
                japanese: "しごとはなんですか",
                romaji: "shigoto wa nan desu ka",
                vietnamese: "Công việc của bạn là gì?"
            }
        ]
    },

    // Verbs
    {
        word: "たべる",
        romaji: "taberu",
        meaning: "ăn",
        type: "verb",
        sentences: [
            {
                japanese: "りんごをたべます",
                romaji: "ringo wo tabemasu",
                vietnamese: "Tôi ăn táo"
            }
        ]
    },
    {
        word: "のむ",
        romaji: "nomu",
        meaning: "uống",
        type: "verb",
        sentences: [
            {
                japanese: "おちゃをのみます",
                romaji: "ocha wo nomimasu",
                vietnamese: "Tôi uống trà"
            }
        ]
    },
    {
        word: "いく",
        romaji: "iku",
        meaning: "đi",
        type: "verb",
        sentences: [
            {
                japanese: "にほんにいきます",
                romaji: "nihon ni ikimasu",
                vietnamese: "Tôi đi Nhật Bản"
            }
        ]
    },
    {
        word: "くる",
        romaji: "kuru",
        meaning: "đến",
        type: "verb",
        sentences: [
            {
                japanese: "ともだちがきます",
                romaji: "tomodachi ga kimasu",
                vietnamese: "Bạn bè sẽ đến"
            }
        ]
    },
    {
        word: "みる",
        romaji: "miru",
        meaning: "xem",
        type: "verb",
        sentences: [
            {
                japanese: "えいがをみます",
                romaji: "eiga wo mimasu",
                vietnamese: "Tôi xem phim"
            }
        ]
    },
    {
        word: "きく",
        romaji: "kiku",
        meaning: "nghe",
        type: "verb",
        sentences: [
            {
                japanese: "おんがくをききます",
                romaji: "ongaku wo kikimasu",
                vietnamese: "Tôi nghe nhạc"
            }
        ]
    },
    {
        word: "よむ",
        romaji: "yomu",
        meaning: "đọc",
        type: "verb",
        sentences: [
            {
                japanese: "しんぶんをよみます",
                romaji: "shinbun wo yomimasu",
                vietnamese: "Tôi đọc báo"
            }
        ]
    },
    {
        word: "かく",
        romaji: "kaku",
        meaning: "viết",
        type: "verb",
        sentences: [
            {
                japanese: "てがみをかきます",
                romaji: "tegami wo kakimasu",
                vietnamese: "Tôi viết thư"
            }
        ]
    },

    // Adjectives
    {
        word: "おおきい",
        romaji: "ookii",
        meaning: "lớn, to",
        type: "adjective",
        sentences: [
            {
                japanese: "このいえはおおきいです",
                romaji: "kono ie wa ookii desu",
                vietnamese: "Ngôi nhà này lớn"
            }
        ]
    },
    {
        word: "ちいさい",
        romaji: "chiisai",
        meaning: "nhỏ",
        type: "adjective",
        sentences: [
            {
                japanese: "このねこはちいさいです",
                romaji: "kono neko wa chiisai desu",
                vietnamese: "Con mèo này nhỏ"
            }
        ]
    },
    {
        word: "たかい",
        romaji: "takai",
        meaning: "cao, đắt",
        type: "adjective",
        sentences: [
            {
                japanese: "このやまはたかいです",
                romaji: "kono yama wa takai desu",
                vietnamese: "Ngọn núi này cao"
            }
        ]
    },
    {
        word: "やすい",
        romaji: "yasui",
        meaning: "rẻ",
        type: "adjective",
        sentences: [
            {
                japanese: "このほんはやすいです",
                romaji: "kono hon wa yasui desu",
                vietnamese: "Quyển sách này rẻ"
            }
        ]
    },
    {
        word: "あたらしい",
        romaji: "atarashii",
        meaning: "mới",
        type: "adjective",
        sentences: [
            {
                japanese: "あたらしいくるまをかいました",
                romaji: "atarashii kuruma wo kaimashita",
                vietnamese: "Tôi đã mua xe mới"
            }
        ]
    },
    {
        word: "ふるい",
        romaji: "furui",
        meaning: "cũ",
        type: "adjective",
        sentences: [
            {
                japanese: "このてらはふるいです",
                romaji: "kono tera wa furui desu",
                vietnamese: "Ngôi chùa này cổ"
            }
        ]
    },

    // Phrases
    {
        word: "おはよう",
        romaji: "ohayou",
        meaning: "chào buổi sáng",
        type: "phrase",
        sentences: [
            {
                japanese: "おはようございます",
                romaji: "ohayou gozaimasu",
                vietnamese: "Chào buổi sáng (lịch sự)"
            }
        ]
    },
    {
        word: "こんにちは",
        romaji: "konnichiwa",
        meaning: "xin chào (ban ngày)",
        type: "phrase",
        sentences: [
            {
                japanese: "こんにちは、おげんきですか",
                romaji: "konnichiwa, ogenki desu ka",
                vietnamese: "Xin chào, bạn khỏe không?"
            }
        ]
    },
    {
        word: "こんばんは",
        romaji: "konbanwa",
        meaning: "chào buổi tối",
        type: "phrase",
        sentences: [
            {
                japanese: "こんばんは、さむいですね",
                romaji: "konbanwa, samui desu ne",
                vietnamese: "Chào buổi tối, trời lạnh nhỉ"
            }
        ]
    },
    {
        word: "ありがとう",
        romaji: "arigatou",
        meaning: "cảm ơn",
        type: "phrase",
        sentences: [
            {
                japanese: "ありがとうございます",
                romaji: "arigatou gozaimasu",
                vietnamese: "Cảm ơn rất nhiều (lịch sự)"
            }
        ]
    },
    {
        word: "すみません",
        romaji: "sumimasen",
        meaning: "xin lỗi / xin phép",
        type: "phrase",
        sentences: [
            {
                japanese: "すみません、これはいくらですか",
                romaji: "sumimasen, kore wa ikura desu ka",
                vietnamese: "Xin lỗi, cái này bao nhiêu tiền?"
            }
        ]
    },
    {
        word: "おねがいします",
        romaji: "onegaishimasu",
        meaning: "xin vui lòng / làm ơn",
        type: "phrase",
        sentences: [
            {
                japanese: "おみずをおねがいします",
                romaji: "omizu wo onegaishimasu",
                vietnamese: "Làm ơn cho tôi nước"
            }
        ]
    },
    {
        word: "いただきます",
        romaji: "itadakimasu",
        meaning: "xin mời (trước khi ăn)",
        type: "phrase",
        sentences: [
            {
                japanese: "いただきます!",
                romaji: "itadakimasu!",
                vietnamese: "Xin phép được ăn!"
            }
        ]
    },
    {
        word: "ごちそうさま",
        romaji: "gochisousama",
        meaning: "cảm ơn bữa ăn (sau khi ăn)",
        type: "phrase",
        sentences: [
            {
                japanese: "ごちそうさまでした",
                romaji: "gochisousama deshita",
                vietnamese: "Cảm ơn bữa ăn ngon"
            }
        ]
    }
];
