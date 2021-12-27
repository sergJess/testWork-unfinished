export interface IObserver {
  callback: () => void;
}

export class Observer {
  private events: IObserver[] = [];
  subscribe(callBack: IObserver) {
    if (!this.events.includes(callBack)) {
      this.events.push(callBack);
    }
  }

  unsubscribe(callBack: IObserver) {
    this.events = this.events.filter((x: IObserver) => {
      return x !== callBack;
    });
  }

  emit() {
    this.events.forEach((item) => {
      item.callback();
    });
  }
}
