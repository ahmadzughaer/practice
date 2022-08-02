const button = document.querySelector('.button')
const numberValue = document.querySelector('.counterText')

class clickCounter {
    #setCounter
    constructor() {
        this.#setCounter=0;
    }
    getNumberOfClicks = () => {
        console.log(this.#setCounter)
    }
    
    click = () => {
        button.addEventListener('click', () => {
            numberValue.innerText = ++this.#setCounter;
            this.getNumberOfClicks();
        })
    }
    
}

const newCounter = new clickCounter()
newCounter.click()
console.log(newCounter.setCounter); // undefined 

// private member
class Something1 {
    #property;
    constructor(){
      this.#property = 0;
    }
  }
  
  const instance1 = new Something1();
  console.log(instance1.property);

  
// public member
class Something2 {
    property;
    constructor(){
      this.property = 0;
    }
  }
  
  const instance2 = new Something2();
  console.log(instance2.property);