const button = document.getElementById("go");
const input = document.getElementById("source-text");
const resultText = document.getElementById("result-text");

const letterToPhoto = {
    'A': './images/A.png',
    'B': './images/B.png',
    'C': './images/C.png',
    'D': './images/D.png',
    'E': './images/E.png',
    'F': './images/F.png',
    'G': './images/G.png',
    'H': './images/H.png',
    'I': './images/I.png',
    'J': './images/J.png',
    'K': './images/K.png',
    'L': './images/L.png',
    'M': './images/M.png',
    'N': './images/N.png',
    'O': './images/O.png',
    'P': './images/P.png',
    'Q': './images/Q.png',
    'R': './images/R.png',
    'S': './images/S.png',
    'T': './images/T.png',
    'U': './images/U.png',
    'V': './images/V.png',
    'W': './images/W.png',
    'X': './images/X.png',
    'Y': './images/Y.png',
    'Z': './images/Z.png',

    'a': './images/small_a.png',
    'b': './images/small_b.png',
    'c': './images/small_c.png',
    'd': './images/small_d.png',
    'e': './images/small_e.png',
    'f': './images/small_f.png',
    'g': './images/small_g.png',
    'h': './images/small_h.png',
    'i': './images/small_i.png',
    'j': './images/small_j.png',
    'k': './images/small_k.png',
    'l': './images/small_l.png',
    'm': './images/small_m.png',
    'n': './images/small_n.png',
    'o': './images/small_o.png',
    'p': './images/small_p.png',
    'q': './images/small_q.png',
    'r': './images/small_r.png',
    's': './images/small_s.png',
    't': './images/small_t.png',
    'u': './images/small_u.png',
    'v': './images/small_v.png',
    'w': './images/small_w.png',
    'x': './images/small_x.png',
    'y': './images/small_y.png',
    'z': './images/small_z.png',

};

button.addEventListener('click', () => {
    const text = input.value;

    let resultHTML = '  ';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char in letterToPhoto) {
            const photoPath = letterToPhoto[char];
            resultHTML += `
                <img src="${photoPath}" class="item" style="--anim-delay:${i * 0.2}s;" />
            `;
        } else {
            resultHTML += `<span class="item2" style="--anim-delay:${i * 0.2}s;">${char}</span>`; // Змінюємо розмір шрифту
        }
    }

    resultText.innerHTML = resultHTML;
});
