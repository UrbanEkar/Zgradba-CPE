function showSection(id, btn) {

    document.querySelectorAll('.content').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');

    document.querySelectorAll('nav button').forEach(button => {
        button.classList.remove('active');
    });

    btn.classList.add('active');
}

function calculateScore() {
    let score = 0;
    const answers = document.querySelectorAll('input[type="radio"]:checked');

    answers.forEach(answer => {
        score += parseInt(answer.value);
    });

    document.getElementById("result").innerText =
        "Dosegel si " + score + " točk.";
}