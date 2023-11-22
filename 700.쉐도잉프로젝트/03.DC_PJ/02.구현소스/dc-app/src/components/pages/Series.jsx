// 무비페이지 메인컨텐츠 

import { VidIntro } from "../modules/VidIntro";
import { VidSwipe } from "../modules/VidSwipe";
import { Banner } from "../modules/banner";

export function Series(){
    return(
        <>
            <Banner category='SERIES' />
            <VidIntro cat='MOVIES' cls='on'/>
            <VidSwipe cat="movies"/>
        </>
    );
} // Movies 컴포넌트 