const button = document.querySelector('.button')
const numberValue = document.querySelector('.counterText')

class clickCounter {
    counter = 0;
    click() {
        addEventListener('click', () => {
            this.counter++;
            numberValue.innerText = this.counter
        })
    }

}

const newCounter = new clickCounter()
newCounter.click()