module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('https://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', 'rembrandt van rijn')
      .waitForElementVisible('input[name=btnK]', 1000)
      .click('input[name=btnK]')
      .pause(1000)
      .assert.containsText('div.r h3',
        'Rembrandt - Wikipedia')
      .end();
  }
};
