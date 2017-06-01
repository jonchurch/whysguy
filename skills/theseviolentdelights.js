module.exports = function(controller) {
  
  controller.hears('^covfefe$', function(bot, message) {
    controller.studio.run('why', message.user).then(function(convo) {
      convo.beforeThread('why', 'start_skill', function(convo, next) {
        convo.responses.problem = 'Covfefe!'
      })
      
      convo.gotoThread('start_skill')  
    })
})
  
}
                   }