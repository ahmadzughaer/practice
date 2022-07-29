const button = document.querySelector('.button')
const numberValue = document.querySelector('.counterText')

class clickCounter {
    constructor() {
        let counter = 0;
        this.click = () => {
            addEventListener('click', () => {
                counter++;
                numberValue.innerText = counter
            })
        }
    }

}

const newCounter = new clickCounter()
newCounter.click()