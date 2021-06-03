interface Buffer{
	num1: string| undefined,
	op: string | undefined,
	num2: string | undefined,
}

export class Calculator {
	private result: number = 0;
	private screen: string = '';
	private buffer: Buffer = {
		num1: '',
		op: '',
		num2: '',
	}
	private operating: boolean = false;
	private screenElement: HTMLElement;

	constructor(btns: HTMLElement[], screen: HTMLElement) {
		this.screenElement = screen;
		this.initElements(btns);
	}

	operate(val: string) {
		console.log(this.operating);
		if(this.operating === false) {
			this.addFirstBuffer(val);
		}else {
			this.addSecondBuffer(val);
		}
	}

	calculate() {
		this.result = parseFloat(String(this.buffer.num1)) + parseFloat(String(this.buffer.num2));
		this.screen = '' + this.result;
	}

	setOperator(val: string) {
		this.operating = true;
		this.buffer.op = val;
		this.screen = '';
	}
	
	addSecondBuffer(val: string) {
		console.log("Second buffer");
		this.buffer.num2 += val;
		this.screen = String(this.buffer.num2);
	}

	addFirstBuffer(val: string) {
		console.log("Primer buffer");
		this.buffer.num1 += val;
		this.screen = String(this.buffer.num1);
	}

	updateScreen() {
		this.screenElement.innerText = this.screen;
	}

	cleanBuffer() {
		this.buffer.num1 = '';
		this.buffer.num2 = '';
		this.buffer.op = '';
	}

	initElements(btns: HTMLElement[]): void {
		console.log(btns[0]);
		btns.forEach(btn => {
			switch(btn.dataset.btn) {
				case 'trash':
					btn.addEventListener('click', ()=>{
					this.operate(String(btn.dataset.btn));
				})
					break;
				case '?':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case 'percent':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case 'over':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case '7':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));

				})
					break;
				case '8':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						console.log(btn.dataset.btn);
				})
					break;
				case '9':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						console.log(btn.dataset.btn);
				})
					break;
				case 'times':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case '4':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						console.log(btn.dataset.btn);
				})
					break;
				case '5':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						console.log(btn.dataset.btn);
				})
					break;
				case '6':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						console.log(btn.dataset.btn);
				})
					break;
				case 'menu':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case '1':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						this.updateScreen();
				})
					break;
				case '2':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
				})
					break;
				case '3':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
				})
					break;
				case 'plus':
					btn.addEventListener('click', ()=>{
					this.setOperator(String(btn.dataset.btn));
					console.log(btn.dataset.btn);
				})
					break;
				case '0':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
				})
					break;
				case 'comma':
					btn.addEventListener('click', ()=>{
						this.operate(String(btn.dataset.btn));
						console.log(btn.dataset.btn);
				})
					break;
				case 'equals':
					btn.addEventListener('click', ()=>{
					this.calculate();
					console.log('result: '+this.result);
					this.updateScreen();
					this.cleanBuffer();
				})
					break;
			}
		})
	}
}

export default Calculator;
