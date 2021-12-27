export interface ToysData {
  srcImg?: string;
  num: string;
  count: number;
  name: string;
  favorite: string;
  year: number;
  color: string;
  shape: string;
  size: string;
}
export class ToysModel {
  private data: ToysData[];

  private getData(url: string): Promise<ToysData[]> {
    return fetch(url).then((res: Response) => res.json());
  }

  public async returnData(url: string): Promise<ToysData[]> {
    this.data = await this.getData(url);
    return this.data;
  }
}
