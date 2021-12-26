import '../types/import-images';
import tree from '../../../assets/header/tree.svg';
import {StartPage} from '../../ts';
import {CounterToys} from './counter';
import { Observer } from '../common/observer';
import {ToysFiltersModel} from './toys-filter-model';
import TreePage from '../app/tree-page';
import ToysView from './toys-view';
import Footer from '../app/footer';
import {ToysFilters} from './toys-filters';
import ToysPage from '../app/toys-page';

export default class Header{

	render(parent:	HTMLElement, rootElement:	HTMLElement, counterElement :CounterToys, cards:HTMLElement, observer:	Observer, filtersModel:	ToysFiltersModel):void{

	const header = document.createElement('div');
	header.classList.add('header');
	const headerItemLeft =	document.createElement('div');
	headerItemLeft.classList.add('header-item-first')
	const headerItemRight = document.createElement('div');
	headerItemRight.classList.add('header-item-first');
	const headerImg = document.createElement('img');
	headerImg.src = tree;
	headerImg.onclick = ():void => {
		localStorage.setItem('mode', 'toys');
		filtersModel.setInitial();
		counterElement.resetCounter();
		rootElement.innerHTML = '';
		const strartPage = new StartPage(rootElement);
		strartPage.render();
	}
	const nav = document.createElement('nav');
	nav.classList.add('nav');
	const navToys = document.createElement('a');
	navToys.classList.add('nav__link');
	navToys.textContent = 'Игрушки';
	const navTree = document.createElement('a');
	navTree.classList.add('nav__link');
	navTree.setAttribute('href','#');
	navTree.textContent = 'Елка';

	const counterToys = document.createElement('div');
	counterToys.classList.add('header__counter');
	observer.subscribe({callback:(): void=>{
		counterToys.textContent = counterElement.getCounter().toString();
	}});
	counterToys.textContent = `${counterElement.getCounter().toString()}`;


	if(localStorage.getItem('mode') === 'toys'){
		navToys.setAttribute('href','#');
		navToys.onclick = null;
		const inputSearch = document.createElement('input');
		navToys.classList.add('nav__link_active');
		inputSearch.setAttribute('type', 'text');
		inputSearch.classList.add('header__search');
		inputSearch.setAttribute('placeholder', 'Введите текст');
		navTree.onclick = ():void => {
			localStorage.setItem('mode', 'tree');
			rootElement.innerHTML = '';
			const treePage = new TreePage(rootElement);
			treePage.render();
		}
		inputSearch.oninput = () => {
			filtersModel.setSearch(String(inputSearch.value));
			const toys  = new ToysView();
			toys.renderToys(cards, 'https:raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
		}
		
		headerItemRight.append(inputSearch);
	}
	if(localStorage.getItem('mode') === 'tree'){
		navTree.classList.add('nav__link_active');
		navTree.setAttribute('href','#');
		navTree.onclick = null;
		navToys.onclick = ():void=>{
localStorage.setItem('mode', 'toys');
rootElement.innerHTML = '';
const toysPage = new ToysPage(rootElement);
toysPage.render();
		}

	}
	nav.append(navToys, navTree);
	headerItemLeft.append(headerImg, nav);
	headerItemRight.append(counterToys);
	
	header.append(headerItemLeft, headerItemRight);
	parent.append(header);
		}
	}