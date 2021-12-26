import '../../style/tree-page/settings.css';
import '../types/import-images';
import tree1 from '../../../assets/trees/tree-1.png';
import tree2 from '../../../assets/trees/tree-2.png';
import tree3 from '../../../assets/trees/tree-3.png';
import tree4 from '../../../assets/trees/tree-4.png';
import tree5 from '../../../assets/trees/tree-5.png';
import tree6 from '../../../assets/trees/tree-6.png';
import tree1Small from '../../../assets/trees/tree-1-small.png';
import tree2Small from '../../../assets/trees/tree-2-small.png';
import tree3Small from '../../../assets/trees/tree-3-small.png';
import tree4Small from '../../../assets/trees/tree-4-small.png';
import tree5Small from '../../../assets/trees/tree-5-small.png';
import tree6Small from '../../../assets/trees/tree-6-small.png';
import treeBgSmall1 from '../../../assets/tree-bg/tree-bg-small1.jpg';
import treeBgSmall2 from '../../../assets/tree-bg/tree-bg-small2.jpg';
import treeBgSmall3 from '../../../assets/tree-bg/tree-bg-small3.jpg';
import treeBgSmall4 from '../../../assets/tree-bg/tree-bg-small4.jpg';
import treeBgSmall5 from '../../../assets/tree-bg/tree-bg-small5.jpg';
import treeBgSmall6 from '../../../assets/tree-bg/tree-bg-small6.jpg';
import treeBgSmall7 from '../../../assets/tree-bg/tree-bg-small7.jpg';
import treeBgSmall8 from '../../../assets/tree-bg/tree-bg-small8.jpg';
import treeBg1 from '../../../assets/tree-bg/tree-bg1.jpg';
import treeBg2 from '../../../assets/tree-bg/tree-bg2.jpg';
import treeBg3 from '../../../assets/tree-bg/tree-bg3.jpg';
import treeBg4 from '../../../assets/tree-bg/tree-bg4.jpg';
import treeBg5 from '../../../assets/tree-bg/tree-bg5.jpg';
import treeBg6 from '../../../assets/tree-bg/tree-bg6.jpg';
import treeBg7 from '../../../assets/tree-bg/tree-bg7.jpg';
import treeBg8 from '../../../assets/tree-bg/tree-bg8.jpg';

const smallTreeImages = [`${tree1Small}`, `${tree2Small}`, `${tree3Small}`, `${tree4Small}`, `${tree5Small}`, `${tree6Small}`];
const fullHeightTrees = [`${tree1}`, `${tree2}`, `${tree3}`, `${tree4}`, `${tree5}`, `${tree6}`];
const smallTreeBg = [`${treeBgSmall1}`, `${treeBgSmall2}`,`${treeBgSmall3}`,`${treeBgSmall4}`,`${treeBgSmall5}`,`${treeBgSmall6}`,`${treeBgSmall7}`,`${treeBgSmall8}`];
const treeBgs = [`${treeBg1}`,`${treeBg2}`,`${treeBg3}`,`${treeBg4}`,`${treeBg5}`,`${treeBg6}`,`${treeBg7}`,`${treeBg8}`];
export default class TreeSettings{
	private parent:	HTMLElement;
	constructor(parentNode:	HTMLElement){
this.parent = parentNode;
	}

render(tree:	HTMLImageElement, treeBg:HTMLElement,swag?:HTMLElement):void{
const settingsInner = document.createElement('div');
const firTreeInner = document.createElement('div');
firTreeInner.classList.add('fir-tree-inner');
const firTreeTitle = document.createElement('h2');
firTreeTitle.textContent = 'Выберите Ёлку';
firTreeTitle.classList.add('fir-tree-title');
for(let i = 0, length = smallTreeImages.length; i < length; i++){
	const treeCard =	document.createElement('div');
	treeCard.classList.add('tree-card');
	const treeCardImg = document.createElement('img');
	treeCardImg.setAttribute('alt', 'fir-tree');
	treeCardImg.src = smallTreeImages[i];
	treeCard.append(treeCardImg);
	treeCard.onclick = ():void=>{
		firTreeInner.childNodes.forEach(item=>{
			const el = item as HTMLElement;
			el.classList.remove('tree-card_chosen');
		})
		treeCard.classList.add('tree-card_chosen');
		tree.src = fullHeightTrees[i];
	}
	firTreeInner.append(treeCard);

}
const firstChild = firTreeInner.firstChild as HTMLElement;
firstChild.classList.add('tree-card_chosen');

const firTreeBgTitle = document.createElement('h2');
firTreeBgTitle.textContent = 'Выберите фон';
firTreeBgTitle.classList.add('fir-tree-title');
const firTreeBgInner = document.createElement('div');
firTreeBgInner.classList.add('fir-tree-bg-inner');
for(let i = 0, length = smallTreeBg.length; i <	length; i++){
	const card = document.createElement('div');
	card.classList.add('fir-tree-bg-card');
const img = document.createElement('img');
img.src = smallTreeBg[i];
card.append(img);
firTreeBgInner.append(card);
card.onclick = ()=>{
	firTreeBgInner.childNodes.forEach(item=>{
		const el = item as HTMLElement;
		el.classList.remove('fir-tree-bg-card_chosen');
	})
	card.classList.add('fir-tree-bg-card_chosen');
	treeBg.style.backgroundImage = `url(${treeBgs[i]})`;
}
}
const firstChildBg = firTreeBgInner.firstChild as HTMLElement;
firstChildBg.classList.add('fir-tree-bg-card_chosen');

const swagTitle = document.createElement('h2');
swagTitle.textContent = 'Гирлянда';
swagTitle.classList.add('fir-tree-title');
const swagInner = document.createElement('div');
swagInner.classList.add('swag-inner');
const swagMulty = document.createElement('button');
swagMulty.classList.add('swag-item', 'swag-multy');
const swagRed = document.createElement('button');
swagRed.classList.add('swag-item', 'swag-red');
const swagBlue = document.createElement('button');
swagBlue.classList.add('swag-item', 'swag-blue');
const swagGreen = document.createElement('button');
swagGreen.classList.add('swag-item', 'swag-green');
const swagYellow = document.createElement('button');
swagYellow.classList.add('swag-item', 'swag-yellow');
const swagSwitcher = document.createElement('button');
swagSwitcher.classList.add('swag-switch', 'swag-switch_off');
swagSwitcher.textContent = 'OFF';
swagSwitcher.onclick = ():void => {
	swagSwitcher.classList.toggle('swag-switch_off');
	if(swagSwitcher.classList.contains('swag-switch_off')){
		swagSwitcher.textContent = 'OFF';
		swag.classList.remove('tree-swag_on');
	}
	else{
		swagSwitcher.textContent = 'ON';
		swag.classList.add('tree-swag_on');
	}
}
swagInner.append(swagMulty, swagRed, swagBlue, swagGreen, swagYellow, swagSwitcher);
settingsInner.append(firTreeTitle, firTreeInner, firTreeBgTitle, firTreeBgInner, swagTitle, swagInner);
	this.parent.append(settingsInner);
}
}
