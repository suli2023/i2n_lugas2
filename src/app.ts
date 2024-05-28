class Lugas {
    aSide?: HTMLInputElement | null;
    bSide?: HTMLInputElement | null;
    perimeter?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;
    constructor() {
        this.bindHtml();
        this.handleEvent();
    }
    bindHtml() {
        this.aSide = document.querySelector('#aSide');
        this.bSide = document.querySelector('#bSide');
        this.perimeter = document.querySelector('#perimeter');
        this.calcButton = document.querySelector('#calcButton');
    }
    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }
    startCalc() {
        const aSide = Number(this.aSide?.value);
        const bSide = Number(this.bSide?.value);
        const perimeter = this.calcPerimeter(aSide, bSide);
        this.perimeter!.value = String(perimeter);
    }
    calcPerimeter(aSide: number, bSide: number):number {
        return (aSide + bSide) * 2;
    }
}

new Lugas();