import ModalWindow from './toys-modal-window';

export class CounterToys{
	private counter = 0;
	private modalWindow = new ModalWindow();
	public getCounter():number {
		return this.counter;
	}
	public increaseCounter(): void{
		if(this.counter === 20){
			this.modalWindow.close();
			this.modalWindow.render(document.body);
			setTimeout(()=>{
				this.modalWindow.show();
			}, 100);
			return;
		}
		else{	
			this.counter += 1;
		}
		
	}
	public decreaseCounter():void {
		this.counter -= 1;
	}
	public resetCounter(){
		this.counter = 0;
	}
}

const counter = new CounterToys();
 export default counter;
