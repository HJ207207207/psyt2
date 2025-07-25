// 앱 상태 관리
const app = {
    currentQuestion: 0,
    answers: [],
    scores: {
        R: 0, // 뇌간형
        L: 0, // 구피질형
        N: 0  // 신피질형
    }
};

// DOM 요소
const screens = {
    start: document.getElementById('startScreen'),
    test: document.getElementById('testScreen'),
    result: document.getElementById('resultScreen')
};

// 화면 전환 함수
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenName].classList.add('active');
}

// 검사 시작
document.getElementById('startBtn').addEventListener('click', () => {
    showScreen('test');
    displayQuestion(0);
});

// 문항 표시
function displayQuestion(index) {
    const question = questions[index];
    const questionNumber = document.getElementById('questionNumber');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    
    // 문항 번호와 텍스트 업데이트
    questionNumber.textContent = `문항 ${index + 1}`;
    questionText.textContent = question.text;
    
    // 진행률 업데이트
    const progress = ((index + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${index + 1} / ${questions.length}`;
    
    // 선택지 생성
    optionsContainer.innerHTML = '';
    question.options.forEach((option, optionIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" id="option${optionIndex}" name="question${index}" value="${optionIndex}">
            <label for="option${optionIndex}">${option.text}</label>
        `;
        
        // 이전에 선택한 답변이 있으면 체크
        if (app.answers[index] === optionIndex) {
            optionDiv.querySelector('input').checked = true;
        }
        
        optionDiv.addEventListener('click', (e) => {
            // INPUT 태그를 직접 클릭한 경우는 무시 (중복 실행 방지)
            if (e.target.tagName === 'INPUT') {
                return;
            }
            optionDiv.querySelector('input').checked = true;
            selectOption(index, optionIndex);
        });
        
        // 라디오 버튼의 change 이벤트 처리
        optionDiv.querySelector('input').addEventListener('change', (e) => {
            if (e.target.checked) {
                selectOption(index, optionIndex);
            }
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // 네비게이션 버튼 상태 업데이트
    updateNavigationButtons();
}

// 선택지 선택 처리
function selectOption(questionIndex, optionIndex) {
    app.answers[questionIndex] = optionIndex;
    
    // 다음 버튼 활성화
    document.getElementById('nextBtn').disabled = false;
    
    // 모든 옵션 스타일 초기화
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // 선택된 옵션 스타일 적용
    document.querySelectorAll('.option')[optionIndex].classList.add('selected');
    
    // 자동으로 다음 문항으로 이동
    setTimeout(() => {
        if (app.currentQuestion < questions.length - 1) {
            app.currentQuestion++;
            displayQuestion(app.currentQuestion);
        } else {
            // 마지막 문항인 경우 검사 완료
            calculateResults();
            showResults();
        }
    }, 300); // 300ms 딜레이로 선택 효과를 보여준 후 이동
}

// 네비게이션 버튼 업데이트
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // 이전 버튼
    prevBtn.disabled = app.currentQuestion === 0;
    
    // 다음 버튼
    if (app.answers[app.currentQuestion] !== undefined) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
    
    // 마지막 문항에서는 '완료'로 변경
    if (app.currentQuestion === questions.length - 1) {
        nextBtn.innerHTML = '완료 <i class="fas fa-check"></i>';
    } else {
        nextBtn.innerHTML = '다음 <i class="fas fa-arrow-right"></i>';
    }
}

// 이전 버튼 클릭
document.getElementById('prevBtn').addEventListener('click', () => {
    if (app.currentQuestion > 0) {
        app.currentQuestion--;
        displayQuestion(app.currentQuestion);
    }
});

// 다음 버튼 클릭
document.getElementById('nextBtn').addEventListener('click', () => {
    if (app.currentQuestion < questions.length - 1) {
        app.currentQuestion++;
        displayQuestion(app.currentQuestion);
    } else {
        // 검사 완료
        calculateResults();
        showResults();
    }
});

// 결과 계산
function calculateResults() {
    // 점수 초기화
    app.scores = { R: 0, L: 0, N: 0 };
    
    // 각 답변에 대한 점수 계산
    app.answers.forEach((answerIndex, questionIndex) => {
        const question = questions[questionIndex];
        const selectedOption = question.options[answerIndex];
        
        if (selectedOption) {
            app.scores[selectedOption.type] += selectedOption.score;
        }
    });
}

// 결과 표시
function showResults() {
    showScreen('result');
    
    // 최고 점수 유형 찾기
    const maxScore = Math.max(app.scores.R, app.scores.L, app.scores.N);
    let dominantType = 'R';
    
    if (app.scores.L === maxScore) dominantType = 'L';
    else if (app.scores.N === maxScore) dominantType = 'N';
    
    const typeInfo = brainTypes[dominantType];
    
    // 유형 정보 표시
    document.getElementById('typeName').textContent = typeInfo.name;
    document.getElementById('typeTitle').textContent = typeInfo.title;
    document.getElementById('typeName').style.color = typeInfo.color;
    
    // 점수 퍼센트 계산
    const totalScore = app.scores.R + app.scores.L + app.scores.N;
    const percentages = {
        R: Math.round((app.scores.R / totalScore) * 100),
        L: Math.round((app.scores.L / totalScore) * 100),
        N: Math.round((app.scores.N / totalScore) * 100)
    };
    
    // 점수 막대 업데이트
    Object.keys(percentages).forEach(type => {
        document.getElementById(`score${type}`).style.width = `${percentages[type]}%`;
        document.getElementById(`score${type}Value`).textContent = `${percentages[type]}%`;
    });
    
    // 설명 표시
    document.getElementById('resultDescription').innerHTML = typeInfo.description;
    document.getElementById('interactionGuide').innerHTML = typeInfo.interaction;
    
    // 차트 그리기
    drawResultChart(percentages);
}

// 결과 차트 그리기
function drawResultChart(percentages) {
    const ctx = document.getElementById('resultChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['실행력\n(뇌간형)', '관계력\n(구피질형)', '분석력\n(신피질형)'],
            datasets: [{
                label: '나의 업무 성향',
                data: [percentages.R, percentages.L, percentages.N],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                pointBackgroundColor: ['#e74c3c', '#3498db', '#2ecc71'],
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: ['#e74c3c', '#3498db', '#2ecc71']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// 인쇄 기능
document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
});

// 다시 시작
document.getElementById('restartBtn').addEventListener('click', () => {
    // 상태 초기화
    app.currentQuestion = 0;
    app.answers = [];
    app.scores = { R: 0, L: 0, N: 0 };
    
    // 시작 화면으로
    showScreen('start');
});

// 키보드 네비게이션
document.addEventListener('keydown', (e) => {
    if (screens.test.classList.contains('active')) {
        if (e.key === 'ArrowLeft' && !document.getElementById('prevBtn').disabled) {
            document.getElementById('prevBtn').click();
        } else if (e.key === 'ArrowRight' && !document.getElementById('nextBtn').disabled) {
            document.getElementById('nextBtn').click();
        } else if (e.key >= '1' && e.key <= '3') {
            const optionIndex = parseInt(e.key) - 1;
            const options = document.querySelectorAll('.option input');
            if (options[optionIndex]) {
                options[optionIndex].click();
            }
        }
    }
});