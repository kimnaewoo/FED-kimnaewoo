// CGV PJ 메인 페이지 JS - main.js

// DOM 함수 객체 ////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.uerySelectorAll(x),

    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; // donFn 객체 ////

// 구현1.
// [ 포스터 메뉴를 클릭하여 메인 유튜브이미지를 변경한다. ]
// 1. 대상
// 1-1. 이벤트 대상 : .poster-menu a
const pmenu = domFn.qsa(".poster-menu a");
// 1-2. 변경대상 :.screen
const screen = domFn.qs(".screen");

// 1-3. 포스터 메뉴 리스트
const mlist = domFn.qsa('.poster-menu>ul>li');

console.log("대상:", pmenu, screen,mlist);

// 2. 데이터 생성하기
// 각 영화별 아이디 객체 만들기
const mvCode = {
    닥터스트레인지2: "mI9oyFMUlfg",
    "쥬라기월드:도미니언": "DSEfRVqjbFA",
    브로커: "DpVAb7Bi5UQ",
    범죄도시2: "aw9j_23nORs",
    몬스터싱어: "ELuQ4sMp4yw",
    "스파이더맨:노웨이홈": "W7edvITC9g4",
};

// 3. 이벤트 함수 만들기
// 이벤트대상에 클릭설정하여 함수 연결하기
pmenu.forEach((ele) => {
    domFn.addEvt(ele, "click", (e) => {
        // 나자신
        let me = e.currentTarget;
        // 1. 클릭된 a요소 하위 영화제목정보 읽어오기
        let mtit = domFn.qsEl(ele, "li").innerText;

        //호출확인
        console.log("나야나!", me, mtit, mvCode[mtit],'\n부모:',ele.parentElement);

        // 2. 스크린박스에 아이프레임 src재구성하여 넣기
        screen.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${mvCode[mtit]}?autoplay=1"
            allow="autoplay"></iframe>
        `;

        // 3. 추가구역 : 클릭된 a 요소인 부모인 li에 클래스 on 주기
        // - on을 주면 미리 셋팅된 대로 li가 일어나있다.
        // 부모로 올라가기는 ele.parentElement

        // 3-1. 클래스 on 초기화 : 대상 mlist 변수
        mlist.forEach(ele=>ele.classList.remove('on'));

        // 3-2. 해당li요소에 클래스 on 넣기
        ele.parentElement.classList.add('on');

    });
}); // forEach

// 맵버튼 클릭시 맵박스 보이기 // 
// 대상: 이벤트 - .btn-map, 변경: .gmap
// 변경내용: 맵버튼 클릭시 .gmap에 클래스 on 넣기 , 닫기버튼 클릭시 .gmap에 클래스 on 뺴기
// 1. 대상선정
const btnMap = domFn.qs('.btn-map');
const gmap = domFn.qs('.gmap');
const cbtn = domFn.qs('.cbtn');
const body = domFn.qs('body');
console.log('대상:',btnMap,gmap,cbtn);

// 2. 이벤트 설정 및 함수구현 
domFn.addEvt(btnMap,'click',()=>{
    gmap.classList.add('on');
    body.classList.add('on');
    
}); // click 이벤트 함수 

domFn.addEvt(cbtn,'click',()=>{
    gmap.classList.remove('on');
    document.body.classList.remove('on');
    
}); // click 이벤트 함수 
