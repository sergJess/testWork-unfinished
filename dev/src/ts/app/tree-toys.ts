import '../../style/tree-page/tree-toys.css';
import '../types/import-images';
import {filtersModel} from './toys-filter-model';

export default class TreeToys {
  private parent: HTMLElement;
  private toysSlots = 20;
  constructor(parentNode: HTMLElement) {
    this.parent = parentNode;
  }
  render(): void {
    const treeToysInner = document.createElement('div');
    const treeToysTitle = document.createElement('h2');
    treeToysTitle.textContent = 'Игрушки';
    treeToysTitle.classList.add('fir-tree-title');
    treeToysInner.append(treeToysTitle);

    const toysSlotsInner = document.createElement('div');
    toysSlotsInner.classList.add('toys-slots-inner');
    if (filtersModel.getChosen().length > 0) {
      for (let i = 0; i < this.toysSlots; i++) {
        const card = document.createElement('div');
        card.classList.add('toy-card');
        card.ondragover = (e: DragEvent): void => {
          e.preventDefault();
        };
        const imgCounter = document.createElement('span');

        if (filtersModel.getChosen()[i]) {
          card.setAttribute(
            'data-toy-index',
            `${filtersModel.getChosen()[i].num}`
          );
          card.ondrop = (e: DragEvent) => {
            e.preventDefault();
            const data = e.dataTransfer.getData('text');
            const el = document.getElementById(`${data}`);
            if (
              el &&
              card.getAttribute('data-toy-index') === data.split('-')[0]
            ) {
              el.style.left = `50%`;
              el.style.top = `50%`;
              card.append(el);
              imgCounter.textContent = (
                Number(imgCounter.textContent) + 1
              ).toString();
            }
          };

          let counter = filtersModel.getChosen()[i].count;
          while (counter > 0) {
            const img = document.createElement('img');
            img.classList.add('toy-cards-img');
            img.src = filtersModel.getChosen()[i].srcImg;
            img.setAttribute(
              'id',
              `${filtersModel.getChosen()[i].num}-${counter}`
            );
            img.setAttribute('draggable', 'true');
            img.ondragstart = (event: DragEvent): void => {
              if (event.dataTransfer) {
                event.dataTransfer.setData('text', img.getAttribute('id'));
              }
            };

            card.append(img);
            counter -= 1;
          }
          imgCounter.textContent = filtersModel.getChosen()[i].count.toString();
          imgCounter.classList.add('toy-cards-img-counter');
          card.append(imgCounter);
        }
        toysSlotsInner.append(card);
      }
    } else {
      for (
        let i = 0, length = filtersModel.getDefaultChosen().length;
        i < length;
        i++
      ) {
        const card = document.createElement('div');
        const imgCounter = document.createElement('span');
        card.ondragover = (e: DragEvent): void => {
          e.preventDefault();
        };
        card.classList.add('toy-card');
        card.setAttribute(
          'data-toy-index',
          `${filtersModel.getDefaultChosen()[i].num}`
        );
        card.ondrop = (e: DragEvent): void => {
          e.preventDefault();
          const data = e.dataTransfer.getData('text');
          const el = document.getElementById(`${data}`);
          if (
            el &&
            card.getAttribute('data-toy-index') === data.split('-')[0]
          ) {
            el.style.left = `50%`;
            el.style.top = `50%`;
            card.append(el);
            imgCounter.textContent = (
              Number(imgCounter.textContent) + 1
            ).toString();
          }
        };
        let counter = filtersModel.getDefaultChosen()[i].count;
        while (counter > 0) {
          const img = document.createElement('img');
          img.classList.add('toy-cards-img');
          img.src = filtersModel.getDefaultChosen()[i].srcImg;
          img.setAttribute('draggable', 'true');
          img.setAttribute(
            'id',
            `${filtersModel.getDefaultChosen()[i].num}-${counter}`
          );
          img.ondragstart = (event: DragEvent): void => {
            if (event.dataTransfer) {
              event.dataTransfer.setData('text', img.getAttribute('id'));
            }
          };
          card.append(img);
          counter -= 1;
        }

        imgCounter.textContent = filtersModel
          .getDefaultChosen()[i].count.toString();
        imgCounter.classList.add('toy-cards-img-counter');
        card.append(imgCounter);
        toysSlotsInner.append(card);
      }
    }
    treeToysInner.append(toysSlotsInner);
    this.parent.append(treeToysInner);
  }
}
