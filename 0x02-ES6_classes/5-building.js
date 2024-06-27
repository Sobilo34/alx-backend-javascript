export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = newSqft;
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
