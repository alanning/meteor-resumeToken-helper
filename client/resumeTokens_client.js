
var logins = 0;

function getLoginTokens () {
  var tokens = [],
      emails,
      password = "";

  emails = parseEmails()
  password = $('#password').val()

  loginAndStoreResumeToken()
  
  function parseEmails () {
    var emails = $('#emails').val()
    return emails.trim().split('\n')
  }

  function loginAndStoreResumeToken () {
    var email;
    if (emails && emails.length > 0) {
      email = emails.pop()
      if ('string' == typeof email && 
          email.trim().length > 0) {

        logins++;
        console.log('login', logins, email, password)

        Meteor.loginWithPassword({email: email.trim()}, password, function () {
          tokens.push(Accounts._storedLoginToken())
          Session.set('tokens', tokens)
          //Meteor.logout()
          loginAndStoreResumeToken()
        })
      }
    }
  }
}  // end getLoginTokens

Template.emailsForm.events({
  'click #submit': function () {
    getLoginTokens()
  }
})
Template.tokens.helpers({
  resumeTokens: function () {
    var tokens = Session.get('tokens')
    if (tokens)
      return tokens.join(',')
  },
  tokenList: function () {
    var tokens = Session.get('tokens')
    return tokens
  }
})
