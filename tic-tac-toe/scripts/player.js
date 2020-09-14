class Player {
  constructor() {
    // bind
    this._alternate = this._alternate.bind(this);

    this.turn = 0;
    this.initPlayer = 'X';

    document.addEventListener('one-square-done', this._alternate);
    this._alternate();
  }
  _alternate() {
    if (this.turn % 2) {
      document.dispatchEvent(new CustomEvent('next-square', { detail: 'X' }));
    } else {
      this._ai();
    }
    console.log('this.trun', this.turn);
  }
}
