import '../../style/tree-page/tree-page.css';
import Header from './header';
import {root, cards, observer} from '../index';
import Footer from '../app/footer';
import counter from './counter';
import {filtersModel} from './toys-filter-model';
import TreeSettings from './tree-settings';
import Tree from './tree';
import TreeToys from './tree-toys';
export default class TreePage {
  private parent: HTMLElement;
  constructor(parent: HTMLElement) {
    this.parent = parent;
  }
  render(): void {
    const treePageInner = document.createElement('div');
    treePageInner.classList.add('tree-page');
    const header = new Header();
    header.render(this.parent, root, counter, cards, observer, filtersModel);

    this.parent.append(treePageInner);
    const treeSettings = new TreeSettings(treePageInner);
    const tree = new Tree(treePageInner);
    treeSettings.render(
      tree.getTree(),
      tree.getTreeInner(),
      tree.getSwag(),
      tree.getTreeInner()
    );
    const treeToys = new TreeToys(treePageInner);
    tree.render();
    treeToys.render();

    const footer = new Footer();
    footer.render(root);
  }
}
