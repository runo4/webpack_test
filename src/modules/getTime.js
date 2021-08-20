export default class GetTime{
    constructor(){
        this.now = new Date();
        this.hour = this.now.getHours();
        this.min = this.now.getMinutes();
        this.sec = this.now.getSeconds();
    }

    update(){
        this.now = new Date();
        this.hour = this.now.getHours();
        this.min = this.now.getMinutes();
        this.sec = this.now.getSeconds();
    }
    
    getHours(){
        return this.hour;
    }

    getMinutes(){
        return this.min;
    }

    getSeconds(){
        return this.sec;
    }

    getTimeNow(){
        return ("00" + this.hour).slice(-2) + ":" +
               ("00" + this.min).slice(-2) + ":" +  
               ("00" + this.sec).slice(-2);
    }

    dispClock(e_h, e_m, e_s){
        const degH = this.hour * (360 / 12) + this.min * (360 / 12 / 60);
        const degM = this.min * (360 / 60);
        const degS = this.sec * (360 / 60);
        e_h.style.transform = `rotate(${degH}deg)`;
        e_m.style.transform = `rotate(${degM}deg)`;
        e_s.style.transform = `rotate(${degS}deg)`;
    }
}