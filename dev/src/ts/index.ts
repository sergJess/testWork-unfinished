
import '../style/base/base.css';
import '../style/toys/toys.css';
import '../style/header/header.css';
import '../style/modal/modal-window.css';
import '../style/filter/filter.css';
import '../style/start/start.css'
import {Observer} from './common/observer';
import counter from './app/counter'
import {filtersModel} from './app/toys-filter-model';
import {ToysFilters} from './app/toys-filters';
import './app/app';
import './types/import-images';
import Footer from './app/footer';
import Header from './app/header';


export const root = document.getElementById('root');
export const cards = document.createElement('div');
export const observer = new Observer();

export class StartPage{
	parent:	HTMLElement;
	constructor(parentNode?: HTMLElement){
		this.parent = parentNode;
	}

	render(){	
 const startPage = document.createElement('div');
	startPage.classList.add('start-page');
	const strartTitle = document.createElement('h2');
	strartTitle.classList.add('start-page-title');
	strartTitle.textContent = 'Наряди Ёлку';
	const startButton = document.createElement('button');
	startButton.classList.add('start-button');
	startButton.textContent = 'Начать игру';
	startButton.onclick = ():void => {
		localStorage.setItem('mode','toys');
		startPage.remove();
		const header = new Header().render(root, root, counter, cards, observer, filtersModel);
		const filters = new ToysFilters();
		filters.render(root);
		root.append(cards);
		const footer = new Footer().render(root);
		
	}
	startPage.append(strartTitle, startButton);
	if(this.parent){
		this.parent.append(startPage);
	}
	}


}
const strartPage = new StartPage(root);
strartPage.render();
