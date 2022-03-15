export class Remark {
  private _id: number;
  private _idLinkShow: number;
  private _date: Date;
  private _author: string;
  private _content: string;

  static remarkLength = 1;

  constructor(date: Date, author: string, content: string) {
    this._id = Remark.remarkLength;
    this._date = date;
    this._author = author;
    this._content = content;

    Remark.remarkLength++;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter idLinkShow
   * @return {number}
   */
  public get idLinkShow(): number {
    return this._idLinkShow;
  }

  /**
   * Getter date
   * @return {Date}
   */
  public get date(): Date {
    return this._date;
  }

  /**
   * Getter author
   * @return {string}
   */
  public get author(): string {
    return this._author;
  }

  /**
   * Getter content
   * @return {string}
   */
  public get content(): string {
    return this._content;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter idLinkShow
   * @param {number} value
   */
  public set idLinkShow(value: number) {
    this._idLinkShow = value;
  }

  /**
   * Setter date
   * @param {Date} value
   */
  public set date(value: Date) {
    this._date = value;
  }

  /**
   * Setter author
   * @param {string} value
   */
  public set author(value: string) {
    this._author = value;
  }

  /**
   * Setter content
   * @param {string} value
   */
  public set content(value: string) {
    this._content = value;
  }
}
