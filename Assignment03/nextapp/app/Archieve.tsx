export class ShoppingCart {
  private items: Item[];

  public constructor() {
    this.items = [];
  }

  public getContents() {
    return this.items;
  }
}

export class Item {
  private name: string;
  private price: number;
  private quantity: number;

  public constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public getQuantity() {
    return this.quantity;
  }

  public PrintItem() {
    return `Name: ${this.name} Price: ${this.price} Quantity: ${this.quantity}`;
  }
}

export function PrintItems(List: any[]): string {
  if (List.length > 5) {
    console.log("Your cart is full!");
  }

  let text: string = "";
  for (let index = 1; index <= List.length; index++) {
    text = `${text} ${index}. ${List[index - 1]}`;
  }
  return text;
}

export function AppendItems(List: any[], Items: any[]): any[] {
  let newList: any[] = List.slice();
  for (let index = 0; index < Items.length; index++) {
    newList.push(Items[index]);
  }
  return newList;
}

export function RemoveItems(List: any[], ItemIndex: number[]): any[] {
  let newList: any[] = List.slice();
  for (let index = 0; index < ItemIndex.length; index++) {
    let Item: number = ItemIndex[index];
    newList.splice(Item, 1)
  }
  return newList;
}

export function SearchItems(List: any[], Items: string[]): boolean[] {
  let CheckList: boolean[] = [];
  for (let index = 0; index < Items.length; index++) {
    CheckList.push(List.includes(Items[index]));
  }
  return CheckList;
}
