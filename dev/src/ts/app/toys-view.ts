import {ToysData, ToysModel} from './toys-model';
import {filtersModel} from './toys-filter-model';
import {cards} from '../index';
import {observer} from '../index';
import counter  from './counter';
export default class ToysView{
		
	public renderToys(parentNode: HTMLElement,  url: string):void{
		const model = new ToysModel();
		model.returnData(url).then((data:	ToysData[]) =>{
			cards.innerHTML = '';
			filtersModel.fillDefaultChosen(data);
	if(filtersModel.getFilterShape().length >0){
		data = filtersModel.applyFilterShape(data);
	}
	if(filtersModel.getFilterColors().length > 0){
		data = filtersModel.applyFilterColors(data);
	}
	if(filtersModel.getFiltersSize().length > 0){
		data = filtersModel.applyFiltersSize(data);
	}
	if(filtersModel.getFiltersFavorite().length > 0){
		data = filtersModel.applyFiltersFavorite(data);
	}
	if(filtersModel.getSearch() !== ''){
	data = filtersModel.searchData(data);
	}
	filtersModel.applySort(data);
	data = filtersModel.applyRangeFilterInstance(data);
	data = filtersModel.applyYearFilterInstance(data);
			const cardInner = document.createElement('div');
			cardInner.classList.add('toys-cards-inner');
			for(let i = 0, length = data.length; i < length; i++){
			const card = document.createElement('div');
	filtersModel.markChosenCards(data[i], card);
			card.onclick = (): void=>{
				if(card.classList.contains('toys__card_chosen')){
					counter.decreaseCounter();
					observer.emit();
					card.classList.remove('toys__card_chosen');
					filtersModel.removeChosen(data[i]);
				}
				else{ 
					if(counter.getCounter() >=20){
						counter.increaseCounter();
					return;
					}
	else{	
		counter.increaseCounter();
						observer.emit();
						card.classList.add('toys__card_chosen');
						filtersModel.addChosen(data[i]);
	}
				}
				
			};
			card.classList.add('toys__card');
			const cardTitle = document.createElement('h3');
			cardTitle.classList.add('toys__title');
			cardTitle.textContent = data[i].name;
			const cardInfo = document.createElement('div');
			cardInfo.classList.add('toys__card-inner');
			const cardItemLeft = document.createElement('div');
			cardItemLeft.classList.add('toys__card-img-inner');
			const cardItemRight = document.createElement('div');
			const count = document.createElement('p');
			count.classList.add('toys-text');
			count.textContent = `Количество: ${data[i].count.toString()}`;
			const size = document.createElement('p');
			size.textContent = `Размер: ${data[i].size}`;
			size.classList.add('toys-text');
			const shape = document.createElement('p');
			shape.textContent = `Форма: ${data[i].shape}`;
			shape.classList.add('toys-text');
			const color = document.createElement('p');
			color.textContent = `Цвет: ${data[i].color}`;
			color.classList.add('toys-text');
			const favorite = document.createElement('p');
			favorite.textContent = `Любимая: ${data[i].favorite}`;
	
			favorite.classList.add('toys-text');
			const year = document.createElement('p');
			year.textContent =`Год покупки: ${data[i].year.toString()}`;
			year.classList.add('toys-text');
			cardItemRight.append(count, year, shape, color, size, favorite);
	const cardImage = document.createElement('img');
	cardImage.classList.add('toys__card-img');
	cardImage.src = data[i].srcImg;
		const button = document.createElement('button');
		button.classList.add('toys__button');
		button.textContent = 'Взять';
		button.onclick = ():void =>{
			event.stopPropagation();
			const eventCustom = new CustomEvent('click');
			card.dispatchEvent(eventCustom);
		}


	
		cardItemLeft.append(cardImage, button);
			cardInfo.append(cardItemLeft, cardItemRight);
				card.append(cardTitle, cardInfo);
				cardInner.append(card);
			}
	
			if(cardInner.childNodes.length === 0){
				cardInner.innerHTML = '';
				cardInner.textContent = 'Нет совпадений';
			}
			parentNode.append(cardInner);
		});
	
	}
	}