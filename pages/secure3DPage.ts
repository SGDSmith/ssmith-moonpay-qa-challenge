module.exports = {

  failButton: {},
  completeButton: {},

  failAuthentication() {
    I.click(this.failButton);
  },

  completeAuthentication() {
    I.click(this.completeButton);
  }

}
