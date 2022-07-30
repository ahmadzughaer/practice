const button = document.querySelector('.button')
const numberValue = document.querySelector('.counterText')

class clickCounter {
    constructor() {
        this.click();
    }
    click = (setCounter) => {
        button.addEventListener('click', () => {
            setCounter++;
            numberValue.innerText = setCounter
        })
        return setCounter;
    }
    getNumberOfClicks = () => {
        console.log(this.setCounter)
    }
}

const newCounter = new clickCounter()
newCounter.click(0)
newCounter.getNumberOfClicks()