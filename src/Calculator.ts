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

	constructor(btns: HTMLElement[]) {
		

		this.initElements(btns);
	}

	operate(val: string) {
		if(!this.operating) {
			this.operating = true;
			this.startOperation(val);
		}else {
			this.endOperation(val);
		}
	}

	endOperation(val: string) {
		
	}

	startOperation(val: string) {
		this.buffer.num1 += val;
		this.screen = String(this.buffer.num1);
	}

	initElements(btns: HTMLElement[]): void {
		console.log(btns);
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

				})
					break;
				case '8':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case '9':
					btn.addEventListener('click', ()=>{
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
						console.log(btn.dataset.btn);
				})
					break;
				case '5':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case '6':
					btn.addEventListener('click', ()=>{
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
						console.log(btn.dataset.btn);
						this.startOperation(String(btn.dataset.btn));
						console.log(String(btn.dataset.btn));
						console.log(this.screen);
				})
					break;
				case '2':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case '3':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case 'plus':
					btn.addEventListener('click', ()=>{
					console.log(typeof btn.dataset.btn);
					this.operating = true;
					this.buffer.op = String(btn.dataset.btn);
					this.screen = '';
					console.log(btn.dataset.btn);
				})
					break;
				case '0':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case 'comma':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
				case 'equals':
					btn.addEventListener('click', ()=>{
						console.log(btn.dataset.btn);
				})
					break;
			}
		})
	}
}

export default Calculator;
