import GetTime from './modules/getTime';
import './style.scss';

const getTime = new GetTime();

window.onload = () => {
    const dispNowDate = document.getElementById("disp-now-date");
    const element_h = document.getElementById("h");
    const element_m = document.getElementById("m");
    const element_s = document.getElementById("s");

    setInterval(() => {
        //時刻更新
        getTime.update();
        //時刻表示
        dispNowDate.innerText = getTime.getTimeNow();
        //時計表示
        getTime.dispClock(element_h, element_m, element_s);
    }, 100);
}