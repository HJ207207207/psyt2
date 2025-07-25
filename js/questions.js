// 삼위일체 뇌 이론 기반 업무성향 검사 문항
// 각 문항은 뇌간형(R), 구피질형(L), 신피질형(N) 점수를 부여

const questions = [
    {
        id: 1,
        text: "중요한 의사결정을 할 때 나는...",
        options: [
            { text: "직감과 본능을 따른다", type: "R", score: 3 },
            { text: "사람들과의 경험을 바탕으로 판단한다", type: "L", score: 3 },
            { text: "데이터와 논리적 분석을 기반으로 한다", type: "N", score: 3 }
        ]
    },
    {
        id: 2,
        text: "업무 중 갈등 상황이 발생하면...",
        options: [
            { text: "즉각적으로 대응하고 빠르게 해결한다", type: "R", score: 3 },
            { text: "관계를 고려하며 중재하려 노력한다", type: "L", score: 3 },
            { text: "객관적으로 상황을 분석하고 합리적 해결책을 찾는다", type: "N", score: 3 }
        ]
    },
    {
        id: 3,
        text: "새로운 업무를 맡게 되었을 때...",
        options: [
            { text: "바로 시작하며 실행하면서 배운다", type: "R", score: 3 },
            { text: "비슷한 경험이 있는 동료에게 조언을 구한다", type: "L", score: 3 },
            { text: "관련 자료를 충분히 연구하고 계획을 세운다", type: "N", score: 3 }
        ]
    },
    {
        id: 4,
        text: "회의에서 나는 주로...",
        options: [
            { text: "핵심만 간단명료하게 전달한다", type: "R", score: 3 },
            { text: "팀원들의 의견을 듣고 공감대를 형성한다", type: "L", score: 3 },
            { text: "데이터와 근거를 제시하며 논리적으로 설명한다", type: "N", score: 3 }
        ]
    },
    {
        id: 5,
        text: "스트레스를 받을 때 나는...",
        options: [
            { text: "운동이나 신체 활동으로 해소한다", type: "R", score: 3 },
            { text: "동료나 친구와 대화를 나눈다", type: "L", score: 3 },
            { text: "문제의 원인을 분석하고 해결 방안을 모색한다", type: "N", score: 3 }
        ]
    },
    {
        id: 6,
        text: "업무 우선순위를 정할 때...",
        options: [
            { text: "긴급한 일부터 즉시 처리한다", type: "R", score: 3 },
            { text: "팀이나 조직에 미치는 영향을 고려한다", type: "L", score: 3 },
            { text: "중요도와 효율성을 분석해 체계적으로 정한다", type: "N", score: 3 }
        ]
    },
    {
        id: 7,
        text: "성과를 평가받을 때 가장 중요하게 생각하는 것은...",
        options: [
            { text: "실질적인 결과와 성과", type: "R", score: 3 },
            { text: "팀워크와 협업 기여도", type: "L", score: 3 },
            { text: "혁신성과 개선 사항", type: "N", score: 3 }
        ]
    },
    {
        id: 8,
        text: "업무 환경으로 선호하는 것은...",
        options: [
            { text: "독립적이고 자율적인 환경", type: "R", score: 3 },
            { text: "협업과 소통이 활발한 환경", type: "L", score: 3 },
            { text: "체계적이고 조직화된 환경", type: "N", score: 3 }
        ]
    },
    {
        id: 9,
        text: "문제가 발생했을 때 첫 반응은...",
        options: [
            { text: "즉시 행동에 옮긴다", type: "R", score: 3 },
            { text: "관련된 사람들과 상의한다", type: "L", score: 3 },
            { text: "원인을 파악하고 분석한다", type: "N", score: 3 }
        ]
    },
    {
        id: 10,
        text: "보고서를 작성할 때 중점을 두는 것은...",
        options: [
            { text: "핵심 결과와 실행 사항", type: "R", score: 3 },
            { text: "협업 과정과 팀의 기여", type: "L", score: 3 },
            { text: "논리적 구조와 데이터 분석", type: "N", score: 3 }
        ]
    },
    {
        id: 11,
        text: "동료와의 의견 차이가 있을 때...",
        options: [
            { text: "내 입장을 분명히 주장한다", type: "R", score: 3 },
            { text: "상대방의 감정을 이해하려 노력한다", type: "L", score: 3 },
            { text: "객관적 근거로 설득한다", type: "N", score: 3 }
        ]
    },
    {
        id: 12,
        text: "업무 마감이 임박했을 때...",
        options: [
            { text: "집중력을 발휘해 빠르게 처리한다", type: "R", score: 3 },
            { text: "팀원들과 역할을 분담한다", type: "L", score: 3 },
            { text: "계획을 재검토하고 효율적으로 진행한다", type: "N", score: 3 }
        ]
    },
    {
        id: 13,
        text: "새로운 정책이나 제도 도입 시...",
        options: [
            { text: "실용성과 즉각적 효과를 중시한다", type: "R", score: 3 },
            { text: "구성원들의 수용도를 고려한다", type: "L", score: 3 },
            { text: "장기적 영향과 체계성을 검토한다", type: "N", score: 3 }
        ]
    },
    {
        id: 14,
        text: "업무 중 가장 보람을 느낄 때는...",
        options: [
            { text: "목표를 달성하고 성과를 낼 때", type: "R", score: 3 },
            { text: "팀과 함께 성장하고 발전할 때", type: "L", score: 3 },
            { text: "새로운 아이디어로 개선을 이룰 때", type: "N", score: 3 }
        ]
    },
    {
        id: 15,
        text: "회의 준비를 할 때...",
        options: [
            { text: "핵심 안건만 간단히 정리한다", type: "R", score: 3 },
            { text: "참석자들의 의견을 미리 수렴한다", type: "L", score: 3 },
            { text: "상세한 자료와 데이터를 준비한다", type: "N", score: 3 }
        ]
    },
    {
        id: 16,
        text: "업무 피드백을 줄 때...",
        options: [
            { text: "직접적이고 명확하게 전달한다", type: "R", score: 3 },
            { text: "상대방의 감정을 배려하며 전달한다", type: "L", score: 3 },
            { text: "구체적인 개선점과 방안을 제시한다", type: "N", score: 3 }
        ]
    },
    {
        id: 17,
        text: "위기 상황에서 나는...",
        options: [
            { text: "신속하게 결단하고 실행한다", type: "R", score: 3 },
            { text: "팀의 안정과 화합을 우선시한다", type: "L", score: 3 },
            { text: "차분하게 상황을 분석하고 대응한다", type: "N", score: 3 }
        ]
    },
    {
        id: 18,
        text: "업무 개선을 제안할 때...",
        options: [
            { text: "즉시 실행 가능한 방안을 제시한다", type: "R", score: 3 },
            { text: "구성원들의 의견을 반영한다", type: "L", score: 3 },
            { text: "체계적인 분석과 계획을 수립한다", type: "N", score: 3 }
        ]
    },
    {
        id: 19,
        text: "성공적인 리더십이란...",
        options: [
            { text: "강한 추진력과 결단력", type: "R", score: 3 },
            { text: "공감과 소통 능력", type: "L", score: 3 },
            { text: "비전 제시와 전략적 사고", type: "N", score: 3 }
        ]
    },
    {
        id: 20,
        text: "일과 후 시간을 주로...",
        options: [
            { text: "활동적인 취미나 운동으로 보낸다", type: "R", score: 3 },
            { text: "가족이나 친구와 함께 보낸다", type: "L", score: 3 },
            { text: "독서나 학습 등 자기계발에 투자한다", type: "N", score: 3 }
        ]
    }
];

// 결과 해석을 위한 유형 정보
const brainTypes = {
    R: {
        name: "뇌간형 (실행형)",
        title: "강력한 추진력의 실행가",
        color: "#e74c3c",
        description: `
            <h3>주요 특징</h3>
            <ul>
                <li>신속한 의사결정과 즉각적인 실행력</li>
                <li>목표 지향적이고 결과 중심적 사고</li>
                <li>위기 상황에서 빛을 발하는 리더십</li>
                <li>직관적이고 본능적인 판단력</li>
                <li>강한 독립성과 자율성 추구</li>
            </ul>
            
            <h3>업무 스타일</h3>
            <ul>
                <li>빠른 업무 처리와 효율성 중시</li>
                <li>실용적이고 현실적인 해결책 선호</li>
                <li>복잡한 절차보다 간단명료한 방식 추구</li>
                <li>행동으로 먼저 보여주는 리더십</li>
            </ul>
            
            <h3>강점</h3>
            <ul>
                <li>위기관리 능력과 순발력</li>
                <li>강한 추진력과 실행력</li>
                <li>명확한 목표 의식</li>
                <li>빠른 의사결정</li>
            </ul>
        `,
        interaction: `
            <h3>뇌간형 동료와 효과적으로 일하는 방법</h3>
            
            <h4>의사소통 시</h4>
            <ul>
                <li><strong>핵심만 간단명료하게</strong> 전달하세요</li>
                <li>장황한 설명보다는 <strong>결론을 먼저</strong> 말하세요</li>
                <li>구체적인 <strong>실행 방안</strong>을 함께 제시하세요</li>
                <li>시간을 지체하지 말고 <strong>신속하게</strong> 응답하세요</li>
            </ul>
            
            <h4>협업 시</h4>
            <ul>
                <li>명확한 <strong>목표와 기한</strong>을 설정하세요</li>
                <li>자율성을 존중하되 <strong>핵심 사항은 공유</strong>하세요</li>
                <li>불필요한 회의나 절차는 <strong>최소화</strong>하세요</li>
                <li>성과와 결과에 대한 <strong>즉각적인 피드백</strong>을 제공하세요</li>
            </ul>
            
            <h4>갈등 상황에서</h4>
            <ul>
                <li>감정적 대응보다는 <strong>사실과 논리</strong>로 접근하세요</li>
                <li>문제를 <strong>직접적으로</strong> 다루되 인신공격은 피하세요</li>
                <li><strong>해결책 중심</strong>의 대화를 이끌어가세요</li>
                <li>장시간 논의보다는 <strong>빠른 합의</strong>를 도출하세요</li>
            </ul>
        `
    },
    L: {
        name: "구피질형 (관계형)",
        title: "따뜻한 공감의 조율사",
        color: "#3498db",
        description: `
            <h3>주요 특징</h3>
            <ul>
                <li>뛰어난 공감 능력과 감성 지능</li>
                <li>팀워크와 협업을 중시하는 성향</li>
                <li>인간관계와 조직 화합 우선시</li>
                <li>경험과 전통을 존중하는 태도</li>
                <li>따뜻하고 포용적인 리더십</li>
            </ul>
            
            <h3>업무 스타일</h3>
            <ul>
                <li>팀원들의 의견을 경청하고 수렴</li>
                <li>갈등 상황에서 중재자 역할</li>
                <li>관계 구축을 통한 업무 추진</li>
                <li>과정과 사람을 중시하는 접근</li>
            </ul>
            
            <h3>강점</h3>
            <ul>
                <li>팀 결속력 강화 능력</li>
                <li>갈등 조정 및 중재 능력</li>
                <li>조직 문화 형성에 기여</li>
                <li>신뢰 구축 능력</li>
            </ul>
        `,
        interaction: `
            <h3>구피질형 동료와 효과적으로 일하는 방법</h3>
            
            <h4>의사소통 시</h4>
            <ul>
                <li><strong>따뜻하고 친근한</strong> 어조를 사용하세요</li>
                <li>업무 이야기 전에 <strong>안부를 묻는</strong> 것도 좋습니다</li>
                <li>그들의 <strong>감정과 의견을 존중</strong>한다는 것을 표현하세요</li>
                <li>비판보다는 <strong>건설적인 제안</strong> 형식을 선호합니다</li>
            </ul>
            
            <h4>협업 시</h4>
            <ul>
                <li><strong>팀 전체의 의견</strong>을 수렴하는 과정을 거치세요</li>
                <li>개인의 <strong>기여와 노력을 인정</strong>하고 칭찬하세요</li>
                <li><strong>협력적인 분위기</strong>를 조성하는데 함께 노력하세요</li>
                <li>업무 외적인 <strong>팀 빌딩 활동</strong>도 긍정적으로 받아들입니다</li>
            </ul>
            
            <h4>갈등 상황에서</h4>
            <ul>
                <li><strong>감정을 먼저 인정</strong>하고 공감을 표현하세요</li>
                <li>대립보다는 <strong>상생의 해결책</strong>을 모색하세요</li>
                <li><strong>인간적인 배려</strong>를 잊지 마세요</li>
                <li>관계 회복을 위한 <strong>시간과 노력</strong>을 투자하세요</li>
            </ul>
        `
    },
    N: {
        name: "신피질형 (분석형)",
        title: "논리적 사고의 전략가",
        color: "#2ecc71",
        description: `
            <h3>주요 특징</h3>
            <ul>
                <li>논리적이고 체계적인 사고력</li>
                <li>데이터 기반의 의사결정</li>
                <li>장기적 관점과 전략적 접근</li>
                <li>혁신과 개선을 추구하는 성향</li>
                <li>객관적이고 공정한 판단력</li>
            </ul>
            
            <h3>업무 스타일</h3>
            <ul>
                <li>철저한 분석과 계획 수립</li>
                <li>체계적인 문서화와 프로세스 구축</li>
                <li>근거 기반의 논리적 설득</li>
                <li>지속적인 학습과 개선 추구</li>
            </ul>
            
            <h3>강점</h3>
            <ul>
                <li>문제 분석 및 해결 능력</li>
                <li>전략 수립 및 기획력</li>
                <li>혁신적 아이디어 창출</li>
                <li>공정하고 객관적인 평가</li>
            </ul>
        `,
        interaction: `
            <h3>신피질형 동료와 효과적으로 일하는 방법</h3>
            
            <h4>의사소통 시</h4>
            <ul>
                <li><strong>논리적 근거와 데이터</strong>를 준비하세요</li>
                <li><strong>체계적이고 구조화된</strong> 방식으로 전달하세요</li>
                <li>감정보다는 <strong>사실과 논리</strong>에 기반하세요</li>
                <li><strong>충분한 분석 시간</strong>을 제공하세요</li>
            </ul>
            
            <h4>협업 시</h4>
            <ul>
                <li><strong>명확한 목표와 프로세스</strong>를 설정하세요</li>
                <li><strong>문서화와 기록</strong>을 중시하세요</li>
                <li>그들의 <strong>분석과 제안을 경청</strong>하세요</li>
                <li><strong>혁신적인 아이디어</strong>에 열린 자세를 가지세요</li>
            </ul>
            
            <h4>갈등 상황에서</h4>
            <ul>
                <li><strong>객관적 사실</strong>에 기반한 대화를 나누세요</li>
                <li>감정적 호소보다는 <strong>논리적 설득</strong>을 사용하세요</li>
                <li><strong>다양한 대안</strong>을 함께 검토하세요</li>
                <li><strong>데이터와 증거</strong>로 뒷받침되는 해결책을 제시하세요</li>
            </ul>
        `
    }
};