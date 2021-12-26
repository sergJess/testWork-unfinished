import '../../style/tree-page/tree.css';
import '../types/import-images';
import tree1 from '../../../assets/trees/tree-1.png';
import treeBg1 from '../../../assets/tree-bg/tree-bg1.jpg';
export default class Tree{
	private parent: HTMLElement;
	private treeImage = document.createElement('img');
	private treeInner =	document.createElement('div');
	private swag = document.createElement('div');
	private coordY = 0;
	private coordX = 0;
	constructor(parentNode: HTMLElement){
		this.parent = parentNode;
	}
	getTree(): HTMLImageElement{
		return this.treeImage;
	}
	getTreeInner(): HTMLDivElement{
		return this.treeInner;
	}
	getSwag(): HTMLDivElement{
		return this.swag;
	}

	public render(): void{
const treeWrapper = document.createElement('div');
treeWrapper.classList.add('tree-wrapper');
this.treeInner.classList.add('tree-inner');
this.treeInner.style.backgroundImage = `url(${treeBg1})`;
this.treeImage.src = tree1;
this.treeImage.onmousemove = (e: MouseEvent) => {
const top = e.pageY - this.treeImage.getBoundingClientRect().top;
const left = e.pageX - this.treeImage.getBoundingClientRect().left;
this.coordX =  top;
this.coordY = left;

}
this.treeImage.ondragover = (e:DragEvent) =>{
	e.preventDefault();
}
this.treeImage.ondrop = (e:DragEvent) =>{
	e.preventDefault();
	const  data = e.dataTransfer.getData("text");
	const el = document.getElementById(`${data}`);
	if(el){
		el.style.left = `${this.coordX}px`;
		el.style.top = `${this.coordY}px`;
		treeWrapper.append(el);
	}

}
this.swag.classList.add('tree-swag');
for(let i = 0; i< 25; i++){
	const swagItem =	document.createElement('div');
	swagItem.classList.add('tree-swag-item');
	this.swag.append(swagItem);
}
treeWrapper.append(this.treeImage, this.swag);
this.treeInner.append(treeWrapper);
this.parent.append(this.treeInner);
	}
}