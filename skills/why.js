
module.exports = function(controller) {
  
  // I want inject a more dynaic start thread into the why script
  controller.studio.beforeThread('why', 'start', function(convo, next) {
    
    convo.addQuestion({text: 'Why?'}, function(res, convo){
      
    }, {},'start')
  })
  
}