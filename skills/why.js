
module.exports = function(controller) {
  
  // I want inject a more dynaic start thread into the why script
  controller.studio.beforeThread('why', 'start_skill', function(convo, next) {
    // Create a count so we know how many questions we've asked
    convo.setVar('count', 0)
    convo.setVar('whyArray', [])
    
    convo.addQuestion({text: 'Why?'}, function(res, convo){
      if (res.text.trim().toLowercase() === 'done') {
        controller.gotoThread('wrapup')        
      } if (convo.count == 4) {
        convo.gotoThread('wrapup')
      } else {
        convo.setVar('count', convo.variables.count += 1)
        convo.variables.whyArray.push(res.text)
        convo.repeat()
      }
    }, {},'start')
    
    next()
  })
  
  controller.beforeThread('why', 'wrapup', function(conov, next))
  
}