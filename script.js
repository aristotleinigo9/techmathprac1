const PASSWORD = 'math5'; // Set your password here
let timer;
let userName, userId;
let countdownTimer;
let quizActive = true;

function startQuiz() {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    if (!name || !id || password !==PASSWORD) {
        alert("Check your name, id or password.");
        return;
    }

    userName = name;
    userId = id;

    document.getElementById('user-info').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';

    startTimer();
    document.getElementById('user-info-display').innerText = `Name: ${userName}, ID: ${userId}`;
}


function startTimer() {
    const endTime = Date.now() + 110 * 60 * 1000; // after + is the number of minutes of the quiz
    countdownTimer = setInterval(() => {
        const now = Date.now();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            document.getElementById('timer').innerText = 'Time is up!';
            submitQuiz();
            return;
        }

        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById('countdown').innerText = `${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

function submitQuiz() {
    clearInterval(timer);

    const answers = document.querySelectorAll('input[type="radio"]:checked');
    let score = 0;

    // Define the correct answers
    const correctAnswers = {
        q1: 'd',
        q2: 'b',
        q3: 'c',
        q4: 'a',
        q5: 'c',
        q6: 'a',
        q7: 'd',
        q8: 'b',
        q9: 'c',
        q10: 'c',
        q11: 'b',
        q12: 'c',
        q13: 'd',
        q14: 'a',
        q15: 'b',
        q16: 'a',
        q17: 'd',
        q18: "c",
        q19: 'a',
        q20: 'b',
        q21: 'c',
        q22: 'd',
        q23: 'a',
        q24: 'd',
        q25: 'c',
        q26: 'b',
        q27: 'a',
        q28: 'd',
        q29: 'c',
        q30: 'c',
        q31: 'b',
        q32: 'd',
        q33: 'a',
        q34: 'b',
        q35: 'c',
        q36: 'd',
        q36: 'c',
        q37: 'c',
        q38: 'a',
        q39: 'c',
        q40: 'b',
        q41: 'd',
        q42: 'c',
        q43: 'a',
        q44: 'd',
        q45: 'b',
        q46: 'a',
        q47: 'd',
        q48: 'c',
        q49: 'a',
        q50: 'b',


        // Add more correct answers here
    };

    answers.forEach(answer => {
        if (correctAnswers[answer.name] === answer.value) {
            score++;
        }
    });

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = `Your score is ${score}/50`;
}

function downloadPDF() {
    const jsPDF = window.jspdf.jsPDF;
    const doc = new jsPDF();
    
    const title = 'Technical Math Practice Test 1';
    const date = new Date().toLocaleString();
    
    doc.text(title, 30, 30);
    doc.text(`Name: ${userName}`, 30, 40);
    doc.text(`ID: ${userId}`, 30, 50);
    doc.text(`Date & Time: ${date}`, 30, 60);
    doc.text(`Score: ${document.getElementById('score').innerText}`, 30, 70);
    doc.text('Rename this file and send/airdrop to your teacher.', 30, 80);
    
    doc.save('type your id-Technical Math Practice Test 1.pdf');
    window.close
}

function closeQuiz(){
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('close').style.display = 'block';
}


function handleVisibilityChange() {
    if (document.hidden) {
        alert("The test has been closed due to minimized page, another opened tab or user submitted the test.");
        closeQuiz()
    }
}

document.addEventListener('visibilitychange', handleVisibilityChange);

