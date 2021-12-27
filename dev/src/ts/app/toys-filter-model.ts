import {ToysData} from './toys-model';
export interface IFilters {
  цвет?: string;
  форма?: string;
  размер?: string;
  любимая?: string;
}

export class ToysFiltersModel {
  private filtersSize: IFilters[] = [];
  private filtersShape: IFilters[] = [];
  private filtersColors: IFilters[] = [];
  private filtersFavorite: IFilters[] = [];
  private filterRangeSliderInstanceMin = 1;
  private filterRangeSliderInstanceMax = 12;
  private filterRangeSliderYearMin = 1;
  private filterRangeSliderYearMax = 12;
  private sortIndex = 0;
  private search = '';
  private chosen: ToysData[] = [];
  private defaultChosen: ToysData[] = [];
  private defaultCounter = 20;

  fillDefaultChosen(data: ToysData[]): void {
    if (this.defaultChosen.length === 0) {
      if (data.length >= 20) {
        for (let i = 0; i < this.defaultCounter; i++) {
          this.defaultChosen.push(data[i]);
        }
      } else {
        for (let i = 0, length = data.length; i < length; i++) {
          this.defaultChosen.push(data[i]);
        }
      }
    }
  }

  getDefaultChosen(): ToysData[] {
    return this.defaultChosen;
  }

  addChosen(data: ToysData): void {
    if (!this.chosen.includes(data)) {
      this.chosen.push(data);
    }
  }
  getChosen(): ToysData[] {
    return this.chosen;
  }
  removeChosen(data: ToysData): void {
    const dataNew: ToysData[] = [];
    for (let i = 0; i < this.chosen.length; i++) {
      if (JSON.stringify(this.chosen[i]) !== JSON.stringify(data)) {
        dataNew.push(this.chosen[i]);
      }
    }
    this.chosen = dataNew;
  }
  markChosenCards(card: ToysData, el: HTMLElement): void {
    for (let i = 0, length = this.chosen.length; i < length; i++) {
      if (JSON.stringify(this.chosen[i]) === JSON.stringify(card)) {
        el.classList.add('toys__card_chosen');
      }
    }
  }
  setInitial(): void {
    this.filtersSize = [];
    this.filtersShape = [];
    this.filtersColors = [];
    this.filtersFavorite = [];
    this.filterRangeSliderInstanceMin = 1;
    this.filterRangeSliderInstanceMax = 12;
    this.filterRangeSliderYearMin = 1;
    this.filterRangeSliderYearMax = 12;
    this.sortIndex = 0;
    this.search = '';
    this.chosen = [];
  }

  resetFilters(): void {
    this.filtersSize = [];
    this.filtersShape = [];
    this.filtersColors = [];
    this.filtersFavorite = [];
  }

  setSearch(value: string): void {
    this.search = value;
  }
  getSearch(): string {
    return this.search;
  }
  searchData(filter: ToysData[]): ToysData[] {
    const data: ToysData[] = [];
    if (this.search !== '') {
      for (let i = 0; i < filter.length; i++) {
        const string = JSON.stringify(filter[i].name).toLowerCase();
        if (string.includes(this.search.toLowerCase())) {
          data.push(filter[i]);
        }
      }
      return data;
    } else {
      return filter;
    }
  }

  setSortIndex(number: number): void {
    this.sortIndex = number;
  }
  getSortIndex(): number {
    return this.sortIndex;
  }
  applySort(filter: ToysData[]): ToysData[] {
    switch (true) {
      case this.sortIndex === 0:
        return filter;
      case this.sortIndex === 1:
        this.sortNameUp(filter);
        break;
      case this.sortIndex === 2:
        this.sortNameDown(filter);
        break;
      case this.sortIndex === 3:
        this.sortYearUp(filter);
        break;
      case this.sortIndex === 4:
        this.sortYearDown(filter);
        break;
    }
  }
  sortYearUp(filter: ToysData[]): ToysData[] {
    const data: ToysData[] = filter;
    return data.sort(function (a: ToysData, b: ToysData): number {
      return Number(a.year) - Number(b.year);
    });
  }
  sortYearDown(filter: ToysData[]): ToysData[] {
    const data: ToysData[] = filter;
    return data.sort(function (a: ToysData, b: ToysData): number {
      return Number(b.year) - Number(a.year);
    });
  }

  sortNameUp(filter: ToysData[]): ToysData[] {
    const data: ToysData[] = filter;

    return data.sort(function (a: ToysData, b: ToysData): number {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      if (a.name === b.name) {
        return 0;
      }
    });
  }
  sortNameDown(filter: ToysData[]): ToysData[] {
    const data: ToysData[] = filter;
    return data.sort(function (a: ToysData, b: ToysData): number {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      if (a.name === b.name) {
        return 0;
      }
    });
  }

  applyRangeFilterInstance(filter: ToysData[]): ToysData[] {
    const data: ToysData[] = [];
    for (let i = 0; i < filter.length; i++) {
      if (
        Number(filter[i].count) >= this.filterRangeSliderInstanceMin &&
        Number(filter[i].count) <= this.filterRangeSliderInstanceMax
      ) {
        data.push(filter[i]);
      }
    }
    return data;
  }
  applyYearFilterInstance(filter: ToysData[]): ToysData[] {
    const data: ToysData[] = [];
    for (let i = 0; i < filter.length; i++) {
      if (
        Number(filter[i].year) >= this.filterRangeSliderYearMin &&
        Number(filter[i].year) <= this.filterRangeSliderYearMax
      ) {
        data.push(filter[i]);
      }
    }
    return data;
  }

  setFilterRangeSliderYearMax(el: HTMLElement): void {
    this.filterRangeSliderYearMax = Number(el.textContent);
  }
  setFilterRangeSliderYearMin(el: HTMLElement): void {
    this.filterRangeSliderYearMin = Number(el.textContent);
  }
  setFilterRangeSliderInstanceMax(el: HTMLElement): void {
    this.filterRangeSliderInstanceMax = Number(el.textContent);
  }
  setFilterRangeSliderInstanceMin(el: HTMLElement): void {
    this.filterRangeSliderInstanceMin = Number(el.textContent);
  }
  addFilterShape(filter: IFilters): void {
    this.filtersShape.push(filter);
  }
  addFiltersColors(filter: IFilters): void {
    this.filtersColors.push(filter);
  }
  addFiltersSize(filter: IFilters): void {
    this.filtersSize.push(filter);
  }
  addFiltersFavorite(filter: IFilters): void {
    this.filtersFavorite.push(filter);
  }
  removeFiltersFavorite(filter: IFilters): void {
    const res: IFilters[] = [];
    for (let i = 0; i < this.filtersFavorite.length; i++) {
      if (JSON.stringify(filter) !== JSON.stringify(this.filtersFavorite[i])) {
        res.push(this.filtersFavorite[i]);
      }
    }
    this.filtersFavorite = res;
  }
  removeFiltersSize(filter: IFilters): void {
    const res: IFilters[] = [];
    for (let i = 0; i < this.filtersSize.length; i++) {
      if (JSON.stringify(filter) !== JSON.stringify(this.filtersSize[i])) {
        res.push(this.filtersSize[i]);
      }
    }
    this.filtersSize = res;
  }
  removeFilterShape(filter: IFilters): void {
    const res: IFilters[] = [];
    for (let i = 0; i < this.filtersShape.length; i++) {
      if (JSON.stringify(filter) !== JSON.stringify(this.filtersShape[i])) {
        res.push(this.filtersShape[i]);
      }
    }
    this.filtersShape = res;
  }
  removeFilterColors(filter: IFilters): void {
    const res: IFilters[] = [];
    for (let i = 0; i < this.filtersColors.length; i++) {
      if (JSON.stringify(filter) !== JSON.stringify(this.filtersColors[i])) {
        res.push(this.filtersColors[i]);
      }
    }
    this.filtersColors = res;
  }
  public getFilterShape(): IFilters[] {
    return this.filtersShape;
  }
  public getFilterColors(): IFilters[] {
    return this.filtersColors;
  }

  public getFiltersSize(): IFilters[] {
    return this.filtersSize;
  }
  public getFiltersFavorite(): IFilters[] {
    return this.filtersFavorite;
  }
  applyFiltersFavorite(filter: ToysData[]): ToysData[] {
    const filtersFavorite = this.applyFilter(filter, this.filtersFavorite);
    return filtersFavorite;
  }
  applyFilterShape(filter: ToysData[]): ToysData[] {
    const filtersShape = this.applyFilter(filter, this.filtersShape);
    return filtersShape;
  }
  applyFilterColors(filter: ToysData[]): ToysData[] {
    const filtersColors = this.applyFilter(filter, this.filtersColors);
    return filtersColors;
  }
  applyFiltersSize(filter: ToysData[]): ToysData[] {
    const filtersSize = this.applyFilter(filter, this.filtersSize);
    return filtersSize;
  }
  applyFilter(filter: ToysData[], filterArray: IFilters[]): ToysData[] {
    const data: ToysData[] = [];
    const allFIlters: Set<string> = new Set();
    for (let i = 0; i < filterArray.length; i++) {
      const values = Object.values(filterArray[i]);
      for (let j = 0; j < values.length; j++) {
        allFIlters.add(values[j].toString());
      }
    }
    const arr: string[] = Array.from(allFIlters);
    for (let i = 0; i < filter.length; i++) {
      const values = Object.values(filter[i]);

      for (let j = 0; j < arr.length; j++) {
        if (values.includes(arr[j])) {
          data.push(filter[i]);
          break;
        }
      }
    }
    return data;
  }
}
export const filtersModel = new ToysFiltersModel();
