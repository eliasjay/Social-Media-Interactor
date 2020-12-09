const Scrapper = require('../shared/Scrapper')

class Instagram extends Scrapper {
  constructor(postLink) {
    super(postLink)
  }

  login(user, password) { }
  
  like(post) {}

  comment(post, commentary) {}

  post(photo, subtitle) {}

  story(photo, subtitle) {}

  follow(user) {}

}

module.exports = Instagram