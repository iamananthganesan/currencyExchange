export class AddHistory {
    static readonly type = "[Conversion] Add";
    constructor(public payload: { date: string, amount: number, from:string, to:string }) { }
}
  
export class DelHistory {
    static readonly type = "[Conversion] Del";
    constructor(public payload: { position: number}) { }
}
  
export class Reset {
    static readonly type = "[Conversion] Reset";
    constructor(public payload: { value: number }) { }
}