import '../../style/tree-page/tree.css';
import '../types/import-images';
import tree1 from '../../../assets/trees/tree-1.png';
import treeBg1 from '../../../assets/tree-bg/tree-bg1.jpg';
export default class Tree {
  private parent: HTMLElement;
  private treeImage = document.createElement('img');
  private treeInner = document.createElement('div');
  private swag = document.createElement('div');
  private swagStart = 12;
  private swagMiddle = 25;
  constructor(parentNode: HTMLElement) {
    this.parent = parentNode;
  }
  getTree(): HTMLImageElement {
    return this.treeImage;
  }
  getTreeInner(): HTMLDivElement {
    return this.treeInner;
  }
  getSwag(): HTMLDivElement {
    return this.swag;
  }
  private createSwags(
    indexCount: number,
    parent: HTMLElement,
    length: number
  ): void {
    let indexCounter = indexCount;
    const swagInner = document.createElement('div');
    swagInner.classList.add('tree-swag-inner');
    for (let i = 0; i < length; i++) {
      if (Math.trunc(length / 2) > i) {
        indexCounter += 2;
      } else {
        indexCounter -= 2;
      }
      const swagItem = document.createElement('div');
      swagItem.style.transform = `translateY(${indexCounter}px)`;
      swagItem.classList.add('tree-swag-item', 'tree-swag-item_multy');
      swagInner.append(swagItem);
    }
    parent.append(swagInner);
  }
  public render(): void {
    const treeWrapper = document.createElement('div');
    treeWrapper.classList.add('tree-wrapper');
    this.treeInner.classList.add('tree-inner');
    this.treeInner.style.backgroundImage = `url(${treeBg1})`;
    this.treeImage.src = tree1;
    const map = document.createElement('map');
    const area = document.createElement('area');
    area.setAttribute(
      'coords',
      '365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664'
    );
    area.setAttribute('shape', 'poly');
    map.setAttribute('name', 'tree-map');
    map.append(area);
    this.treeImage.setAttribute('usemap', '#tree-map');
    area.ondragover = (e: DragEvent) => {
      e.preventDefault();
    };
    area.ondrop = (e: DragEvent) => {
      e.preventDefault();
      const data = e.dataTransfer.getData('text');
      const el = document.getElementById(`${data}`);
      const imgCounter = el.parentElement.querySelector(
        '.toy-cards-img-counter'
      );
      if (imgCounter) {
        imgCounter.textContent = (
          Number(imgCounter.textContent) - 1
        ).toString();
      }
      if (el) {
        el.style.left = `${
          e.pageX - this.treeImage.getBoundingClientRect().left
        }px`;
        el.style.top = `${
          e.pageY - this.treeImage.getBoundingClientRect().top
        }px`;
        treeWrapper.append(el);
      }
    };
    this.swag.classList.add('tree-swag');

    this.createSwags(25, this.swag, this.swagStart);
    this.createSwags(25, this.swag, this.swagStart);
    this.createSwags(25, this.swag, this.swagMiddle);
    this.createSwags(25, this.swag, this.swagMiddle);
    this.createSwags(25, this.swag, this.swagMiddle);
    this.createSwags(25, this.swag, this.swagMiddle);
    treeWrapper.append(this.treeImage, map, this.swag);
    this.treeInner.append(treeWrapper);
    this.parent.append(this.treeInner);
  }
}
