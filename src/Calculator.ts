interface Buffer{
	num1: string| undefined,
	op: string | undefined,
	num2: string | undefined,
}

export class Calculator {
	private result: number = 0;
	private screen: string = '';
	private operating: boolean = true;
	private screenElement: HTMLElement;
	private history: number[] = [];
	private buffer: string = '';
	private operator: string = '';

	constructor(btns: HTMLElement[], screen: HTMLElement) {
		this.screenElement = screen;
		this.initElements(btns);
	}

	operate(val: string) {
		
		if(this.operating) {
			this.buffer += val;
			this.screen = this.buffer;
		} else {
			this.addNumber(this.buffer);
			this.buffer = '';
			this.operating = true;
		}
		console.log(this.history);
	}

	calculate() {
		if(this.history.length === 0) {
			console.log('El array esta vacío');
		} else if (this.history.length === 1) {
			this.result = this.history[0];
		} else {

			switch(this.operator) {
				case 'sum':
					this.result = this.history[this.history.length - 2] + this.history[this.history.length - 1]
					this.history.push(this.result);		
					break;
	
				case 'menus':
					this.result = this.history[this.history.length - 2] - this.history[this.history.length - 1]
					this.history.push(this.result);
					break;
	
				case 'times':
					this.result = this.history[this.history.length - 2] * this.history[this.history.length - 1]
					this.history.push(this.result);
					break;
	
				case 'over':
					this.result = this.history[this.history.length - 2] / this.history[this.history.length - 1]
					this.history.push(this.result);
					break;
			}
		}

		this.screen = '' + this.result;
		console.log('result: ',this.result);
	}

	addNumber(val: string) {
		this.history.push(parseFloat(val));
	}

	updateScreen() {
		this.screenElement.innerText = this.screen;
	}

	cleanHistory() {
		this.history = [];
		this.buffer = '';
	}

	initElements(btns: HTMLElement[]): void {
		btns.forEach(btn => {
			switch(btn.dataset.btn) {
				case 'trash':
					btn.addEventListener('click', ()=>{
					this.cleanHistory();
					this.screen = '0';
					this.updateScreen();
				})
					break;

				case '?':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				
				
				// Numbers ************************************

				case '1':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				});
					break;

				case '2':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '3':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				})	
					break;

				case '4':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '5':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '6':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '7':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '8':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;
					
				case '9':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case '0':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				case 'comma':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;

				// Operators *************************

				case 'percent':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case 'over':
					btn.addEventListener('click', ()=>{
						this.operating = false;
						this.operate('');
						this.operator = String(btn.dataset.btn);
						this.calculate();
						this.updateScreen();
						console.log(btn.dataset.btn);
				})
					break;

				case 'times':
					btn.addEventListener('click', ()=>{
						this.operating = false;
						this.operate('');
						this.operator = String(btn.dataset.btn);
						this.calculate();
						this.updateScreen();
						console.log(btn.dataset.btn);
				})
					break;
				
				case 'menus':
					btn.addEventListener('click', ()=>{
						this.operating = false;
						this.operate('');
						this.operator = String(btn.dataset.btn);
						this.calculate();
						this.updateScreen();
						console.log(btn.dataset.btn);
				});
					break;
				
				case 'sum':
					btn.addEventListener('click', () => {
						this.operating = false;
						this.operate('');
						this.operator = String(btn.dataset.btn);
						this.calculate();
						this.updateScreen();
						console.log(btn.dataset.btn);
				});
					break;

				case 'equals':
					btn.addEventListener('click', ()=>{
					this.operating = false;
					this.operate('');
					this.calculate();
					this.updateScreen();
					this.cleanHistory();
				});
					break;
			}
		});
	}
}

export default Calculator;
