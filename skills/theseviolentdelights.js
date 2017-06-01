module.exports = function(controller) {
  
  controller.hears('^covfefe$', 'message_received', function(bot, message) {
    controller.studio.get(bot, 'why', message.user, message.channel).then(function(convo) {
    console.log('=====COVFEFE')
      
      convo.responses.problem = 'Covfefe!'
      
      convo.activate()
      convo.gotoThread('start_skill')  
      
    })
  })
  
}
                   