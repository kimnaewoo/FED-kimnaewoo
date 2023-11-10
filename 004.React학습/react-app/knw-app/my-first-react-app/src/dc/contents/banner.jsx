// DC.com 배너 컴포넌트

// 배너 데이터
import { banData } from "../data/banner";

// 배너 css
import "../../css/banner.css";
import { useEffect } from "react";
// 제이쿼리 + 제이쿼리 UI  
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

// 슬라이드 기능구현함수
function SlideFn(){

    // 1. 대상선정
    const sldBox = $('.slider');

    // 2. 변수설정
    // 애니시간 
    const A_TM = 600;
    // 애니이징
    const A_ES = "easeInOutQuint";
    // 광클상태변수(1-불허용,0-허용) 
    let cSts = 0;

    // 2. 이벤트설정 및 기능구현 
    // 이동버튼 클릭시
    $('.abtn').click(function(){

        // 0. 광클금지
        if(cSts) return;
        cSts=1; // 잠금 
        setTimeout(()=>cSts=0,A_TM);

        // 1. 오른쪽 버튼 여부
        let isR = $(this).is('.rb')
        console.log('버튼클릭',isR);

        // 2. 버튼별 분기
        // 2-1. 오른쪽 버튼 
        if(isR){
            // 슬라이드가 왼쪽으로 이동하기
            sldBox.animate({left:'-100%'},A_TM,A_ES,
            ()=>{ // 애니메이트 후 콜백함수
                // 맨앞 li 맨뒤로 이동 
                sldBox.append(sldBox.find('li').first())
                // 동시에 left값은 0으로 초기화함! 
                .css({left:'0'});
            })
        } // if 

        // 2-2. 왼쪽버튼 
        else{
            // 맨뒤 li 맨앞으로 이동
            sldBox.prepend(sldBox.find('li').last())
            // left값 -100%
            .css({left:'-100%'})
            // left값을 0으로 애니메이션
            .animate({left:'0'},A_TM,A_ES);
            
        } // else

    })
} // SlideFn 함수 

// 배너 컴포넌트
export function Banner(props) {
  // category - 카테고리 분류명(배너 데이터선택)

  // 페이저 랜더링 후 실행구역
  useEffect(() => {
    console.log("랜더링후~!");
    // 슬라이드 기능구현 함수 호출
    SlideFn();
  });

  // 리스트 만들기 함수
  const makeList = (data) => {
    console.log(data);
    return data.map((v, i) => (
      <li key={i}>
        <img src={v.src} alt="ㅎㅎ" />
      </li>
    ));
  };

  // 선택데이터
  const selData = banData[props.category];

  // 코드 리턴
  return (
    <div className="banner">
      {/* 이동슬라이드 */}
      <ul className="slider">{makeList(selData)}</ul>
      {/* 이동버튼 + 슬라이드 블릿 : 슬라이드 2개 이상일때 보임 */}
      {
        // 조건식 && 코드 : 조건식이 true일때 코드출력
        // 배열.length 는 배열개수 
        selData.length > 1 && 
        <>
          {/* 양쪽이동버튼 */}
          <button className="abtn lb">＜</button>
          <button className="abtn rb">＞</button>
          {/* 블릿 인디케이터 - 선택데이터의 개수만큼 만들기 */}
          <ol className="indic">
            {selData.map((v, i) => (
              <li className={i == 0 ? "on" : ""} key={i}></li>
            ))}
          </ol>
        </>
      }
    </div>
  );
} // Banner 컴포넌트
