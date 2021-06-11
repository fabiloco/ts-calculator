
export class Calculator {
	private screenElement: HTMLElement;
	private buffer: string = '';

	constructor(btns: HTMLElement[], screen: HTMLElement) {
		this.screenElement = screen;
		this.initElements(btns);
	}

	calculate() {		
		this.buffer = eval(this.buffer);
	}

	addVal(val: string) {
		if(this.buffer === '0') {
			this.buffer = val;
		} else {
			this.buffer += val;
		}
	}

	updateScreen() {
		this.screenElement.innerText = this.buffer;
	}

	erase() {
		this.buffer = this.buffer.substring(0, this.buffer.length - 1);

		if(this.buffer === '') {
			this.buffer = '0';
		}
	}

	cleanBuffer() {
		this.buffer = '0';
	}

	initElements(btns: HTMLElement[]): void {
		btns.forEach(btn => {
			switch(btn.dataset.btn) {
				case 'trash':
					btn.addEventListener('click', ()=>{
					this.cleanBuffer();
					this.updateScreen();
					console.log(this.buffer);
				})
					break;

				case 'erase':
					btn.addEventListener('click', ()=>{
						this.erase();
						this.updateScreen();
				})
					break;
				
				
				// Numbers ************************************

				case '1':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				});
					break;

				case '2':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '3':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})	
					break;

				case '4':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '5':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '6':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '7':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '8':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;
					
				case '9':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '0':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case ',':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				// Operators *************************

				case 'percent':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case '/':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '*':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;
				
				case '-':
					btn.addEventListener('click', ()=>{
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				});
					break;
				
				case '+':
					btn.addEventListener('click', () => {
						this.addVal(String(btn.dataset.btn));
						this.updateScreen();
				});
					break;

				case '=':
					btn.addEventListener('click', ()=>{
					this.calculate();
					this.updateScreen();
				});
					break;
			}
		});
	}
}

export default Calculator;
