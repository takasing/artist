// FIXME delete
export default class Hello {
  constructor(message = '') {
    this.message = message
  }

  say() {
    console.log(this.message)
  }
}
