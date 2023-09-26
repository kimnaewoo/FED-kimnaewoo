// JS6-1.Date객체와 Math객체 JS

// DOM 함수 모듈
import dFn from "./dom.js";

// 1. 요구사항 : 화면에 시간을 찍으시오
// 2. 대상 : .tt
const tt = dFn.qsa(".tt");
console.log(dFn, tt);

// 3. 시간찍기

/************************************************ 
 함수명 : ShowTime
 기능 : 시간을 1초간격으로 보여줌
 ************************************************/
// 요일배열 
const week = ["sun", "mon", "tue", "wen", "thr", "fri", "sat"];

// 앞에 0 자릿수를 추가하는 함수 만들기
const addZero = (num) => (num < 10 ? "0" + num : num);

// 인터발호출하기
setInterval (ShowTime,1000);
// 최초호출
ShowTime();

function ShowTime(){
    // JS 시간날짜 객체 : Date() 객체
    const today = new Date();
    // new 키워드로 내장객체의 인스턴스를 생성한다.

    // 3-1. 년도 찍기 : getFullYear()
    tt[0].innerText = today.getFullYear();
    // 참고 : getYear()는 1900년을 뺀 년도가 나옴
    
    // 3-2. 월 찍기 : getMonth()
    // let monthName = ["하하월","파파월","카카월","토토월","코코푸월","싹스월","칸단월","차즈민월","라우딘월","차호호월","테테월","상그리아월"];
    tt[1].innerText = today.getMonth() + 1;
    // 찍어보면 기존 달 보다 1작다.
    // 이것은 배열순번에 넣고 찍기 좋도록 월 순번이 리턴된다.
    // 따라서, 숫자월을 찍고싶으면 +1을 한다!
    
    // 3-3. 일 찍기 : getDate()
    tt[2].innerText = today.getDate();
    // 날짜는 그대로 숫자로 리턴된다.
    
    // 3-4. 요일 찍기 : getDay()
    tt[3].innerText = week[today.getDay()];
    // 요일은 순번을 리턴한다. (0부터)
    // 각 나라별 요일을 배열로 넣고 출력한다.
    
    // 시간찍기 -> 시간은 보통 한자리숫자일때 앞에 0을 표시한다.
    // 01,02,.... -> 이것은 숫자가 아니고 문자이다.
    
    // 3-5. 시 출력 : getHours()
    let H = today.getHours();
    // 테스트용
    // H = 24;
    tt[5].innerText = addZero(H >= 12 ? H % 24 : H);
    // 12보다 크면 12를 빼주고, 작으면 한자리일때 0처리는 항상해준다.
    
    // 3-6. 오전,오후 출력 (기준은 12시보다 크면 오후, 작으면 오전)
    tt[4].innerText = H <= 12 ? "오전" : H=24?"오전":"오후";
    
    // 3-7. 분 출력 : getMinutes()
    let M = today.getMinutes();
    tt[6].innerText = addZero(M);
    
    // 3-8. 분 출력 : getMinutes()
    let S = today.getSeconds();
    tt[7].innerText = addZero(S);
}; // SHowTime 함수

/*************************************** 
    [ Math 객체 ]
    - 수학객체로써 다른 객체와 달리
    new키워드 없이 바로 사용할 수 있게 설계됨
    - 이런객체를 정적객체(Static Object)라고함
    -> 정적객체들!
        Array(), Object(), Math()
    ______________________________

    [ 주요 Math 객체의 메서드들 ]
    Math.min(값들) - 최소값
    Math.max(값들) - 최대값
    Math.round(실수값) - 반올림
    Math.floor(실수값) - 내림
    Math.ceil(실수값) - 올림
    Math.abs(양수나 음수값) - 절대값
    ______________________________

    Math.random() - 난수발생
    -> 0~1  사이의 소수점값 17자리수

***************************************/

// 난수 발생 시키기
let rdm = Math.random();

// 1~7 사이 난수발생하기
// 방법 : 난수에 발생할 최대수 곱하기 -> 올림/내림 
// rdm = rdm * 7;
// console.log(rdm);
// console.log('내림',Math.floor(rdm));
// console.log('올림',Math.ceil(rdm));
// -> 1부터 최대수는 올림처리 / 0부터 최대수 -1은 내림처리

// 중간난수는?
// 예) 4~12 사이 난수는?
// console.log('4~12사이 난수:',(Math.random()*9)+3);
/**************************************** 
    [ 내가 원하는 난수 만들기 ]

    1. 먼저 난수를 발생시킨다!
    Math.random()

    2. 1부터 원하는 최대수일 경우 최대수를 곱한다
    Math.random() * 최대수

    3. 원하는 범위의 난수를 올림처림함
    Math.ceil(Math.random() * 최대수)
    ________________________________

    [ 중간 범위의 난수 만들기 ]

    1. 1부터 최대수 랜던수를 먼저구한다
    Math.random() * 최대수

    2. 원하는 범위의 시작수 만큼 더함
    Math.ceil(Math.random() * 최대수) + 시작수만큼

    (만약 0부터 시작수로 하면 내림을 적용!
    -> Math.floor())
    ___________________________________

    예) 4~9 사이의 난수 구하기 : 1~6먼저구함
    -> 최대수는 6, 시작수 만큼 더할 수는 3
    Math.ceil(Math.random() * 최대수) + 시작수만큼
    Math.ceil(Math.random() * 6) + 3
    ________________________________

    [ 중간범위 수 계산 ]
    작은수 ~ 큰수
    1. 최대수 = 큰수 - 작은수 + 1
    2. 시작수차이 = 작은수 - 1;

****************************************/
// 웹경로 이미지 배열 
const rimg = ["https://img.etnews.com/photonews/2110/1461216_20211007085904_466_0001.jpg", "https://d2qqqnyszmt41w.cloudfront.net/wp-content/uploads/2021/04/23150534/202104231445162082.jpg", "https://img.imbc.com/adams/Program/202111/132804027350463581.jpg", "https://image.ytn.co.kr/general/jpg/2021/0925/202109251350012465_d.jpg"];

// 1. 요구사항 : 웹경로 이미지를 화면에 넣고 랜덤하게 이미지를 칼라로 약간 커지게 클래스 on을 주어서 변경한다.

// 2. 대상선정 : .imbx 
const imbx = dFn.qs('.imbx');

// 3. 이미지 넣기
// 배열만큼 이미지 넣기
rimg.forEach(val=>{
    imbx.innerHTML += `
        <div>
            <img src="${val}" alt ="드라마이미지" 
        </div>
    `;
}) // forEach

// 랜덤처리 대상선정 : .imbx div
const target = dFn.qsa('.imbx div');
console.log('대상:',target);


/****************************************************** 
    함수명 : colorImg
    기능 : 랜덤하게 선택 박스에 .on 넣기
******************************************************/
// 랜덤수 범위: 0~3 (4개의 배열이므로)

// 2초간격으로 인터발 호출
setInterval(colorImg,500);

// 직전 랜덤수 : 초기셋팅은 0~3 사이수가 아님수 
let bNum = 1000;

function colorImg(){

    // 1. 난수만들기 : 0~3 -> 1~4를 만들고 내림처리
    let rdmNum = Math.floor(Math.random()*4);
    console.log('랜덤수:',rdmNum);

    // 2. 직전 랜덤수와 같을 경우 다시 난수발생하기
    // while(조건true){코드} 사용하기
    // 항상 직전 램덤수는 전역변수로 저장하고 매번 비교한다.
    
    // 3. 대상에 클래스 on 넣기, 나머지는 배기
    target.forEach((ele,idx)=>{
        if(idx==rdmNum)
            ele.classList.add('on');
        else
            ele.classList.remove('on');
    })



} // colorImg 함수