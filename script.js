const button = document.querySelector('.button')
const numberValue = document.querySelector('.counterText')

class clickCounter {
    constructor() {
        this.setCounter=0;
    }
    getNumberOfClicks = () => {
        console.log(this.setCounter)
    }
    
    click = () => {
        button.addEventListener('click', () => {
            numberValue.innerText = ++this.setCounter;
            this.getNumberOfClicks();
        })
    }
    
}

const newCounter = new clickCounter()
newCounter.click()
