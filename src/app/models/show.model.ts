import { Remark } from './remark.model';

// Declaring Show class to allow creatin of all shows.

export class Show {
  private _id: number;
  private _name: string;
  private _releaseDate: Date;
  private _seasonsNumber: number;
  private _pitch: string;
  private _review: string;
  private _photo: string;
  private _remark: Array<Remark>; // Private _remark referes to remark.model.ts. Declaring remark in such way allow all comments to directly be linked to a show.

  // Auto incrementation, independent of constructor parameters.
  static showLength = 1;

  constructor(
    name: string,
    releaseDate: Date,
    seasonsNumber: number,
    pitch: string,
    review: string,
    photo: string,
    remark: Array<Remark>
  ) {
    this._id = Show.showLength;
    this._name = name;
    this._releaseDate = releaseDate;
    this._seasonsNumber = seasonsNumber;
    this._pitch = pitch;
    this._review = review;
    this._photo = photo;
    this._remark = remark;
    Show.showLength++;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter releaseDate
   * @return {Date}
   */
  public get releaseDate(): Date {
    return this._releaseDate;
  }

  /**
   * Getter seasonsNumber
   * @return {number}
   */
  public get seasonsNumber(): number {
    return this._seasonsNumber;
  }

  /**
   * Getter pitch
   * @return {string}
   */
  public get pitch(): string {
    return this._pitch;
  }

  /**
   * Getter review
   * @return {string}
   */
  public get review(): string {
    return this._review;
  }

  /**
   * Getter photo
   * @return {string}
   */
  public get photo(): string {
    return this._photo;
  }

  /**
   * Getter remark
   * @return {Array<Remark>}
   */
  public get remark(): Array<Remark> {
    return this._remark;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter releaseDate
   * @param {Date} value
   */
  public set releaseDate(value: Date) {
    this._releaseDate = value;
  }

  /**
   * Setter seasonsNumber
   * @param {number} value
   */
  public set seasonsNumber(value: number) {
    this._seasonsNumber = value;
  }

  /**
   * Setter pitch
   * @param {string} value
   */
  public set pitch(value: string) {
    this._pitch = value;
  }

  /**
   * Setter review
   * @param {string} value
   */
  public set review(value: string) {
    this._review = value;
  }

  /**
   * Setter photo
   * @param {string} value
   */
  public set photo(value: string) {
    this._photo = value;
  }

  /**
   * Setter remark
   * @param {Array<Remark>} value
   */
  public set remark(value: Array<Remark>) {
    this._remark = value;
  }
}
