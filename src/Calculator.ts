interface Buffer{
	num1: string| undefined,
	op: string | undefined,
	num2: string | undefined,
}

export class Calculator {
	private result: number = 0;
	private screen: string = '';
	private buffer: Buffer = {
		num1: '0',
		op: '',
		num2: '0',
	}

	private operating: boolean = false;
	private screenElement: HTMLElement;
	private history: Buffer[] = [];

	constructor(btns: HTMLElement[], screen: HTMLElement) {
		this.screenElement = screen;
		this.initElements(btns);
	}

	operate(val: string) {
		
		console.log('Segundo movimiento',this.operating);
		if(this.operating === false) {
			this.addFirstBuffer(val);
		}else {
			this.addSecondBuffer(val);
		}
	}

	calculate() {
		
		//console.log(`Buffer tiene elementos? = ${this.history.length !== 0}`);
		if(this.history.length !== 0) {
			console.log('historial vacio');
			this.buffer.num1 = '' + this.result;
		} 
		
		//console.log('buffer dos: ',this.buffer.num2);
		//console.log(`${this.buffer.num1} + ${this.buffer.num2} = ${parseFloat(String(this.buffer.num1)) + parseFloat(String(this.buffer.num2))}`);

		switch(this.buffer.op) {
			case 'sum':
				this.result = parseFloat(String(this.buffer.num1)) + parseFloat(String(this.buffer.num2));
				break;

			case 'menus':
				this.result = parseFloat(String(this.buffer.num1)) - parseFloat(String(this.buffer.num2));
				break;

			case 'times':
				if(this.buffer.num2 === '0') {
					//this.result = parseFloat(String(this.buffer.num1));
					this.result = 0;
				} 
				// else if(this.buffer.num1 === '0') {
				// 	this.result = 0;
				// } 
				else {
					this.result = parseFloat(String(this.buffer.num1)) * parseFloat(String(this.buffer.num2));
				}

				console.log(`${parseFloat(String(this.buffer.num1))} * ${parseFloat(String(this.buffer.num2))}: ${parseFloat(String(this.buffer.num1)) * parseFloat(String(this.buffer.num2))}`);
				break;

			case 'over':
				this.result = parseFloat(String(this.buffer.num1)) / parseFloat(String(this.buffer.num2));	
				if(this.result === Infinity) {
					console.log('Es infinito');
					this.result = parseFloat(String(this.buffer.num1)) / 1;
				}
				console.log("El resultado de la división: "+this.result);
				break;
		}

		

		this.history.push(this.buffer);
		//console.log(this.history);
		this.buffer.num2 = '0';
		this.screen = "" + this.result;
		this.updateScreen();
	
	}

	setOperator(val: string) {
		this.operating = true;
		this.buffer.op = val;
		this.screen += ' + ';
	}
	
	addSecondBuffer(val: string) {
		if(this.buffer.num2 === '0') {
			this.buffer.num2 = val
		} else {
			this.buffer.num2 += val;
		}
		this.screen = String(this.buffer.num2);
	}

	addFirstBuffer(val: string) {
		if(this.buffer.num1 === '0') {
			this.buffer.num1 = val;
		}else {
			this.buffer.num1 += val;
		}
		this.screen = String(this.buffer.num1);
	}

	updateScreen() {
		this.screenElement.innerText = this.screen;
	}

	cleanBuffer() {
		this.buffer.num1 = '0';
		this.buffer.op = '';
		this.buffer.num2 = '0';
		this.operating = false;
		this.history = [];
	}

	initElements(btns: HTMLElement[]): void {
		btns.forEach(btn => {
			switch(btn.dataset.btn) {
				case 'trash':
					btn.addEventListener('click', ()=>{
					this.cleanBuffer();
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
						this.setOperator(String(btn.dataset.btn));
						this.calculate();
						this.updateScreen();
						console.log(btn.dataset.btn);
				})
					break;

				case 'times':
					btn.addEventListener('click', ()=>{
						this.setOperator(String(btn.dataset.btn));
						this.calculate();
						this.updateScreen();
						console.log(btn.dataset.btn);
				})
					break;
				
				case 'menus':
					btn.addEventListener('click', ()=>{
						this.setOperator(String(btn.dataset.btn));
						this.calculate();
						this.updateScreen();
						console.log(btn.dataset.btn);
				});
					break;
				
				case 'sum':
					btn.addEventListener('click', () => {
						//this.calculateWithBuffer();
						this.setOperator(String(btn.dataset.btn));
						this.calculate();
						this.updateScreen();
						console.log(btn.dataset.btn);
				});
					break;

				case 'equals':
					btn.addEventListener('click', ()=>{
					this.calculate();
					this.cleanBuffer();
				});
					break;
			}
		});
	}
}

export default Calculator;
