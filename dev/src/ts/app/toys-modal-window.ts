export default class ModalWindow{
	modalWindow = document.createElement('div');
	overlay = document.createElement('div');
	render(parent: HTMLElement):void{
this.modalWindow.classList.add('modal-window');
const modalTitle = document.createElement('h2');
modalTitle.classList.add('modal-title');
modalTitle.textContent = 'Извините, все слоты заполнены';
const modalButton = document.createElement('button');
modalButton.classList.add('modal-button');
modalButton.textContent = 'Хорошо';
 
this.overlay.classList.add('modal-overlay');
modalButton.onclick = ():void =>{
	this.close();
}
this.modalWindow.append(modalTitle, modalButton);
parent.append(this.overlay ,this.modalWindow);
	}
	show(): void{
this.modalWindow.classList.add('modal-window_show');
	}
	close(): void{
		this.modalWindow.classList.remove('modal-window_show');
		this.modalWindow.innerHTML = '';
		this.overlay.remove();
		this.modalWindow.remove();
	}
}