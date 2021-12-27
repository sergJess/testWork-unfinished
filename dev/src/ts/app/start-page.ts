import '../../style/start/start.css';
import {observer, cards, root} from '../index';
import Footer from './footer';
import Header from './header';
import counter from './counter';
import {filtersModel} from './toys-filter-model';
import {ToysFilters} from './toys-filters';

export default class StartPage {
	parent: HTMLElement;
	constructor(parentNode?: HTMLElement) {
			this.parent = parentNode;
	}

	render() {
			const startPage = document.createElement('div');
			startPage.classList.add('start-page');
			const strartTitle = document.createElement('h2');
			strartTitle.classList.add('start-page-title');
			strartTitle.textContent = 'Наряди Ёлку';
			const startButton = document.createElement('button');
			startButton.classList.add('start-button');
			startButton.textContent = 'Начать игру';
			startButton.onclick = (): void => {
					localStorage.setItem('mode', 'toys');
					startPage.remove();
					const header = new Header();
					header.render(
						root,
						root,
						counter,
						cards,
						observer,
						filtersModel
				);
					const filters = new ToysFilters();
					filters.render(root);
					root.append(cards);
					const footer = new Footer();
					footer.render(root);
			};
			startPage.append(strartTitle, startButton);
			if (this.parent) {
					this.parent.append(startPage);
			}
	}
}