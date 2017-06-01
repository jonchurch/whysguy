module.exports = function(controller) {
  
  controller.hears('^covfefe$', 'message_received', function(bot, message) {
    console.log('=====COVFEFE')
    controller.studio.get('why', message.user).then(function(convo) {
      
      convo.responses.problem = 'Covfefe!'
      
      convo.activate()
      convo.gotoThread('start_skill')  
    })
  })
  
}
                   