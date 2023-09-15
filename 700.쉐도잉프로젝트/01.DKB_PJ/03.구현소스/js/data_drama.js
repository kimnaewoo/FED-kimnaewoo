// 도깨비 PJ 데이터 JS - data_drama.js

// 1. 현장포토 리스트 데이터
/******************************************************** 
데이터항목 : 
1. 순번(기본키) : idx
2. 제목 : title
3. 이미지 : imgName
4. 날짜 : date
********************************************************/
const liveData = [
    {idx:'1',title:'다 드립니다 ♡',imgName:'live_photo7',date:'2023-09-08'},
    {idx:'2',title:'비하인드 짤털이~',imgName:'live_photo6',date:'2023-09-08'},
    {idx:'3',title:'꿀 떨어지는 도깨비 내외',imgName:'live_photo5',date:'2023-09-08'},
    {idx:'4',title:'사랑이 넘치네요',imgName:'live_photo8',date:'2023-09-08'},
    {idx:'5',title:'덕화에게서 낯선 향기가 난다',imgName:'live_photo4',date:'2023-09-08'},
    {idx:'6',title:'안녕하세요',imgName:'live_photo3',date:'2023-09-08'},
    {idx:'7',title:'시청자여러분',imgName:'live_photo2',date:'2023-09-08'},
    {idx:'8',title:'도깨비를마니마니',imgName:'live_photo1',date:'2023-09-08'},
]; // liveData 배열


// 2. GNB 하위메뉴 구성 데이터
/******************************************************** 
    [데이터항목 : 객체 ]
    1. 상위메뉴 - 속성명
    2. 하위메뉴 - 속성값 배열데이터
********************************************************/
const gnbData = {
    "드라마":[
        "[예정] 반짝이는 워터멜론",
        "[종영] 경이로운 소문2: 카운터 펀치",
        "[월화] 소용없어 거짓말",
        "[토일] 아라문의 검",
        "[일] O'PENing(오프닝) 2023",
    ],
    "연예오락":[
        "[예정] 골든일레븐: 언리미티드",
        "[수] 코미디빅리그",
        "[금] 형따라 마야로 : 아홉 개의 열쇠",
        "[월] 프리한 닥터",
        "[수] 명의들의 경고",
        "[토] 놀라운 토요일",
        "[화] 벌거벗은 세계사",
        "[목] 300만 년 전 야생탐험 : 손둥동굴",
        "[종영] 알쓸별잡",
        "[수] 유 퀴즈 온 더 블럭",
        "[목] 70억의 선택",
        "[종영] 2억 9천 : 결혼전쟁",
    ],
    "인사이트":[
        "[예정] 김창옥쇼 리부트",
        "[종영] 류준열과 교복 입은 사진가들",
        "[종영] 월간커넥트2",
        "[종영] 그때 나는 내가 되기로 했다",
    ],
};