import '../../style/no-ui-slider/nouislider.css';
import {target, API} from 'nouislider';
import noUiSlider from 'nouislider';
import ToysView from './toys-view';
import {cards} from '../index'
import {filtersModel} from './toys-filter-model';
import '../types/import-images';
import ball from '../../../assets/filters/ball.svg';
import bell from '../../../assets/filters/bell.svg';
import cone from '../../../assets/filters/cone.svg';
import snow from '../../../assets/filters/snow.svg';
import toy from '../../../assets/filters/toy.svg';


export class ToysFilters{
	render(parent: HTMLElement):void{
		const filterInner = document.createElement('div');
		filterInner.classList.add('filter-inner');
		const filterItemFirst = document.createElement('div');
		filterItemFirst.classList.add('filter-item');
		const filterTitle = document.createElement('h2');
		filterTitle.classList.add('filter-title');
		filterTitle.textContent = 'Фильтры по значению';
		const filterShape = document.createElement('div');
		filterShape.classList.add('filter-shape');
		const filterShapeText =	document.createElement('p');
		filterShapeText.classList.add('filter-text');
		filterShapeText.textContent = 'Форма:';
		const filterShapeCircle = document.createElement('img');
		filterShapeCircle.src = ball;
		filterShapeCircle.classList.add('filter-shape-ball');
		filterShapeCircle.onclick = ():void=>{ 
			const toys  = new ToysView();
			if(!filterShapeCircle.classList.contains('filter-shape_active')){
				filterShapeCircle.classList.add('filter-shape_active');
				filtersModel.addFilterShape({'форма': 'шар'});
				toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');

			}
			else{
				filterShapeCircle.classList.remove('filter-shape_active');
				filtersModel.removeFilterShape({'форма': 'шар'});
				toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
			}
			
		};
			const filterShapeBell = document.createElement('img');
			filterShapeBell.classList.add('filter-shape-ball');
			filterShapeBell.src = bell;
			filterShapeBell.onclick = ():void=>{
				const toys  = new ToysView();
				if(!filterShapeBell.classList.contains('filter-shape_active')){
					filterShapeBell.classList.add('filter-shape_active');
					filtersModel.addFilterShape({'форма': 'колокольчик'});
					toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
	
				}
				else{
					filterShapeBell.classList.remove('filter-shape_active');
					filtersModel.removeFilterShape({'форма': 'колокольчик'});
					toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
				}
				
			};
const filterShapeCone = document.createElement('img');
filterShapeCone.classList.add('filter-shape-ball');
filterShapeCone.src = cone;
filterShapeCone.onclick = ():void => {
				const toys  = new ToysView();
				if(!filterShapeCone.classList.contains('filter-shape_active')){
					filterShapeCone.classList.add('filter-shape_active');
					filtersModel.addFilterShape({'форма': 'шишка'});
					toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
	
				}
				else{
					filterShapeCone.classList.remove('filter-shape_active');
					filtersModel.removeFilterShape({'форма': 'шишка'});
					toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
				}
				
}
const filterShapeSnow = document.createElement('img');
filterShapeSnow.classList.add('filter-shape-ball');
filterShapeSnow.src = snow;
filterShapeSnow.onclick = ():void =>{
				const toys  = new ToysView();
				if(!filterShapeSnow.classList.contains('filter-shape_active')){
					filterShapeSnow.classList.add('filter-shape_active');
					filtersModel.addFilterShape({'форма': 'снежинка'});
					toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
	
				}
				else{
					filterShapeSnow.classList.remove('filter-shape_active');
					filtersModel.removeFilterShape({'форма': 'снежинка'});
					toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
				}
};
const filterShapeToy = document.createElement('img');
filterShapeToy.classList.add('filter-shape-ball');
filterShapeToy.src = toy;
filterShapeToy.onclick = ():void =>{
	const toys  = new ToysView();
	if(!filterShapeToy.classList.contains('filter-shape_active')){
		filterShapeToy.classList.add('filter-shape_active');
		filtersModel.addFilterShape({'форма': 'фигурка'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');

	}
	else{
		filterShapeToy.classList.remove('filter-shape_active');
		filtersModel.removeFilterShape({'форма': 'фигурка'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
	}
};

const filterColor = document.createElement('div');
filterColor.classList.add('filter-shape');
		const filterColorText =	document.createElement('p');
		filterColorText.classList.add('filter-text');
		filterColorText.textContent = 'Цвет:';
		const filterColorWhite = document.createElement('div');
		filterColorWhite.classList.add('filter-color', 'filter-color_white');
		filterColorWhite.onclick = ():void =>{
	const toys  = new ToysView();
	if(!filterColorWhite.classList.contains('filter-color_white-active')){
		filterColorWhite.classList.add('filter-color_white-active');
		filtersModel.addFiltersColors({'цвет': 'белый'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');

	}
	else{
		filterColorWhite.classList.remove('filter-color_white-active');
		filtersModel.removeFilterColors({'цвет': 'белый'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
	}
		};

		const filterColorYellow = document.createElement('div');
		filterColorYellow.classList.add('filter-color', 'filter-color_yellow');
		filterColorYellow.onclick = ():void =>{
	const toys  = new ToysView();
	if(!filterColorYellow.classList.contains('filter-color_yellow-active')){
		filterColorYellow.classList.add('filter-color_yellow-active');
		filtersModel.addFiltersColors({'цвет': 'желтый'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');

	}
	else{
		filterColorYellow.classList.remove('filter-color_yellow-active');
		filtersModel.removeFilterColors({'цвет': 'желтый'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
	}
		}


		const filterColorRed = document.createElement('div');
		filterColorRed.classList.add('filter-color', 'filter-color_red');
		filterColorRed.onclick = ():void =>{
	const toys  = new ToysView();
	if(!filterColorRed.classList.contains('filter-color_red-active')){
		filterColorRed.classList.add('filter-color_red-active');
		filtersModel.addFiltersColors({'цвет': 'красный'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');

	}
	else{
		filterColorRed.classList.remove('filter-color_red-active');
		filtersModel.removeFilterColors({'цвет': 'красный'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
	}
		}

		const filterColorBlue = document.createElement('div');
		filterColorBlue.classList.add('filter-color', 'filter-color_blue');
		filterColorBlue.onclick = ():void =>{
	const toys  = new ToysView();
	if(!filterColorBlue.classList.contains('filter-color_blue-active')){
		filterColorBlue.classList.add('filter-color_blue-active');
		filtersModel.addFiltersColors({'цвет': 'синий'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');

	}
	else{
		filterColorBlue.classList.remove('filter-color_blue-active');
		filtersModel.removeFilterColors({'цвет': 'синий'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
	}
		}

		const filterColorGreen = document.createElement('div');
		filterColorGreen.classList.add('filter-color', 'filter-color_green');
		filterColorGreen.onclick = ():void =>{
	const toys  = new ToysView();
	if(!filterColorGreen.classList.contains('filter-color_green-active')){
		filterColorGreen.classList.add('filter-color_green-active');
		filtersModel.addFiltersColors({'цвет': 'зелёный'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');

	}
	else{
		filterColorGreen.classList.remove('filter-color_green-active');
		filtersModel.removeFilterColors({'цвет': 'зелёный'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
	}
		};

		const filterSize = document.createElement('div');
		filterSize.classList.add('filter-shape');
				const filterSizeText =	document.createElement('p');
				filterSizeText.classList.add('filter-text');
				filterSizeText.textContent = 'Размер:';
				const filterSizeBig = document.createElement('img');
				filterSizeBig.classList.add('filter-size-big');
				filterSizeBig.src = ball;
				filterSizeBig.onclick = ():void =>{
					const toys  = new ToysView();
					if(!filterSizeBig.classList.contains('filter-shape_active')){
						filterSizeBig.classList.add('filter-shape_active');
						filtersModel.addFiltersSize({'размер': 'большой'});
						toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
				
					}
					else{
						filterSizeBig.classList.remove('filter-shape_active');
						filtersModel.removeFiltersSize({'размер': 'большой'});
						toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
					}
				};
				const filterSizeMedium = document.createElement('img');
				filterSizeMedium.classList.add('filter-size-medium');
				filterSizeMedium.src = ball;
				filterSizeMedium.onclick = ():void =>{
					const toys  = new ToysView();
					if(!filterSizeMedium.classList.contains('filter-shape_active')){
						filterSizeMedium.classList.add('filter-shape_active');
						filtersModel.addFiltersSize({'размер': 'средний'});
						toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
				
					}
					else{
						filterSizeMedium.classList.remove('filter-shape_active');
						filtersModel.removeFiltersSize({'размер': 'средний'});
						toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
					}
				};
				const filterSizeSmall = document.createElement('img');
				filterSizeSmall.classList.add('filter-size-small');
				filterSizeSmall.src = ball;
				filterSizeSmall.onclick = ():void =>{
					const toys  = new ToysView();
					if(!filterSizeSmall.classList.contains('filter-shape_active')){
						filterSizeSmall.classList.add('filter-shape_active');
						filtersModel.addFiltersSize({'размер': 'малый'});
						toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
				
					}
					else{
						filterSizeSmall.classList.remove('filter-shape_active');
						filtersModel.removeFiltersSize({'размер': 'малый'});
						toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
					}
				};

				const filterFavorite = document.createElement('div');
				filterFavorite.classList.add('filter-shape');
						const filterFavoriteText =	document.createElement('p');
						filterFavoriteText.classList.add('filter-text');
						filterFavoriteText.textContent = 'Любимая:';

						const filterFavoriteCheck = document.createElement('div');
						filterFavoriteCheck.classList.add('filter-favorite');
						filterFavoriteCheck.onclick = ():void =>{
	const toys  = new ToysView();
	if(!filterFavoriteCheck.classList.contains('filter-favorite_active')){
		filterFavoriteCheck.classList.add('filter-favorite_active');
		filtersModel.addFiltersFavorite({'любимая': 'да'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
	}
	else{
		filterFavoriteCheck.classList.remove('filter-favorite_active');
		filtersModel.removeFiltersFavorite({'любимая': 'да'});
		toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
	}
		}
		
		const filterItemSecond = document.createElement('div');
		filterItemSecond.classList.add('filter-item', 'filter-ranges');
const filterRangeTitle = document.createElement('h2');
filterRangeTitle.classList.add('filter-title');
filterRangeTitle.textContent = 'Фильтры по диапозону';
const sliderRangeTitle = document.createElement('h3');
sliderRangeTitle.textContent = 'Количество экземпляров';
sliderRangeTitle.classList.add('filter-text');
const sliderRangeItem = document.createElement('div');
sliderRangeItem.classList.add('sldier-instance-inner');
const sliderRangeMinInstance = document.createElement('output');
sliderRangeMinInstance.classList.add('filter-text');
sliderRangeMinInstance.textContent = '1';
const sliderRangeMaxInstance = document.createElement('output');
sliderRangeMaxInstance.textContent = '12';
sliderRangeMaxInstance.classList.add('filter-text');
const filterRangeSliderInstance = document.createElement('div');

filterRangeSliderInstance.setAttribute('id', 'slider-instance');
const rangeInstanseInputs = [sliderRangeMinInstance, sliderRangeMaxInstance];
noUiSlider.create(filterRangeSliderInstance, {
	start: [1, 12],
	connect: true,
	step: 1,
	range: {
		'min': 1,
		'max': 12
},

});
const slider = <target>filterRangeSliderInstance;
(<API>slider.noUiSlider).on('update', function (values, handle) {
	const toys  = new ToysView();
	rangeInstanseInputs[handle].innerHTML = values[handle].toString().split('.')[0];
	filtersModel.setFilterRangeSliderInstanceMin(sliderRangeMinInstance);
	filtersModel.setFilterRangeSliderInstanceMax(sliderRangeMaxInstance);
	toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
});

const sliderCountItem = document.createElement('div');
sliderCountItem.classList.add('sldier-instance-inner');
const sliderCountTitle = document.createElement('h3');
sliderCountTitle.textContent = 'Год приобретения';
sliderCountTitle.classList.add('filter-text');

const sliderYearMinInstance = document.createElement('output');
sliderYearMinInstance.classList.add('filter-text');
sliderYearMinInstance.textContent = '1940';
const sliderYearMaxInstance = document.createElement('output');
sliderYearMaxInstance.textContent = '2020';
sliderYearMaxInstance.classList.add('filter-text');
const filterYearSliderInstance = document.createElement('div');
filterYearSliderInstance.setAttribute('id', 'slider-year');
const yaerInstanseInputs = [sliderYearMinInstance, sliderYearMaxInstance];
noUiSlider.create(filterYearSliderInstance, {
	start: [1940, 2020],
	connect: true,
	step: 10,
	range: {
		'min': 1940,
		'max': 2020
},

});
const sliderYear = <target>filterYearSliderInstance;
(<API>sliderYear.noUiSlider).on('update', function (values, handle) {
	const toys  = new ToysView();
	yaerInstanseInputs[handle].innerHTML = values[handle].toString().split('.')[0];
	filtersModel.setFilterRangeSliderYearMin(sliderYearMinInstance);
	filtersModel.setFilterRangeSliderYearMax(sliderYearMaxInstance);
	toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
});

const filterItemThird = document.createElement('div');
filterItemThird.classList.add('filter-item');
const filterSortTitle = document.createElement('h2');
filterSortTitle.classList.add('filter-title');
filterSortTitle.textContent = 'Сортировка';
const fliterSortSelect = document.createElement('select');
fliterSortSelect.classList.add('fliter-select');

const sortOptionDefault = document.createElement('option');
sortOptionDefault.classList.add('filter-text', 'filter-option');
sortOptionDefault.textContent = 'Без сортировки';

const sortOptionFirst = document.createElement('option');
sortOptionFirst.classList.add('filter-text', 'filter-option');
sortOptionFirst.textContent = 'По названию от А до Я';

const sortOptionSecond = document.createElement('option');
sortOptionSecond.classList.add('filter-text','filter-option');
sortOptionSecond.textContent = 'По названию от Я до А';

const sortOptionThird = document.createElement('option');
sortOptionThird.classList.add('filter-text','filter-option');
sortOptionThird.textContent = 'По году покупки по возрастанию';

const sortOptionFourth = document.createElement('option');
sortOptionFourth.classList.add('filter-text','filter-option');
sortOptionFourth.textContent = 'По году покупки по убыванию';
fliterSortSelect.onchange = function() {
	const toys  = new ToysView();
	filtersModel.setSortIndex(fliterSortSelect.selectedIndex);
	toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');

}
const buttonResetFilters = document.createElement('button');
buttonResetFilters.classList.add('reset-filters');
buttonResetFilters.textContent = 'Сбросить фильтры';
buttonResetFilters.onclick = ()=>{
	const toys  = new ToysView();
	filtersModel.resetFilters();
	filterShapeCircle.classList.remove('filter-shape_active');
	filterShapeBell.classList.remove('filter-shape_active');
	filterShapeCone.classList.remove('filter-shape_active');
	filterShapeSnow.classList.remove('filter-shape_active');
	filterShapeToy.classList.remove('filter-shape_active');
	filterColorWhite.classList.remove('filter-color_white-active');
	filterColorYellow.classList.remove('filter-color_yellow-active');
	filterColorRed.classList.remove('filter-color_red-active');
	filterColorBlue.classList.remove('filter-color_blue-active');
	filterColorGreen.classList.remove('filter-color_green-active');
	filterSizeBig.classList.remove('filter-shape_active');
	filterSizeMedium.classList.remove('filter-shape_active');
	filterSizeSmall.classList.remove('filter-shape_active');
	filterFavoriteCheck.classList.remove('filter-favorite_active');
	(<API>slider.noUiSlider).updateOptions({
		start: [1, 12],
		step: 1,
		range: {
			'min': 1,
			'max': 12
	},
	}, true);
	(<API>sliderYear.noUiSlider).updateOptions({
		start: [1940, 2020],
		step: 10,
		range: {
			'min': 1940,
			'max': 2020
	},
	}, true);

	toys.renderToys(cards, 'https://raw.githubusercontent.com/sergJess/stage1-tasks/christmas-task/dataJsonImg.json');
}

fliterSortSelect.append(sortOptionDefault, sortOptionFirst, sortOptionSecond, sortOptionThird, sortOptionFourth);

		filterShape.append(filterShapeText, filterShapeCircle, filterShapeBell, filterShapeCone, filterShapeSnow, filterShapeToy);
		filterColor.append(filterColorText, filterColorWhite, filterColorYellow,filterColorRed, filterColorBlue, filterColorGreen);
		filterSize.append(filterSizeText, filterSizeBig, filterSizeMedium, filterSizeSmall);
		filterFavorite.append(filterFavoriteText, filterFavoriteCheck);
		filterItemFirst.append(filterTitle, filterShape, filterColor, filterSize, filterFavorite);

		sliderRangeItem.append(sliderRangeMinInstance, filterRangeSliderInstance, sliderRangeMaxInstance);
		filterItemSecond.append(filterRangeTitle,sliderRangeTitle, sliderRangeItem, sliderCountTitle, sliderCountItem);
		sliderCountItem.append(sliderYearMinInstance, filterYearSliderInstance, sliderYearMaxInstance);
		filterItemThird.append(filterSortTitle, fliterSortSelect, buttonResetFilters);
		filterInner.append(filterItemFirst, filterItemSecond, filterItemThird);
		parent.append(filterInner);
	}
}