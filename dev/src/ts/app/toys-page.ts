import '../../style/toys/toys.css';
import '../../style/tree-page/tree-page.css';
import Header from './header';
import {root, cards, observer} from '../index';
import Footer from '../app/footer';
import counter from './counter';
import {ToysFilters} from './toys-filters';
import {filtersModel} from './toys-filter-model';
export default class ToysPage {
  private parent: HTMLElement;
  constructor(parent: HTMLElement) {
    this.parent = parent;
  }
  render() {
    const treePageInner = document.createElement('div');
    treePageInner.classList.add('tree-page');
    const header = new Header();
				header.render(
					this.parent,
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

    this.parent.append(treePageInner);
  }
}
