
module.exports = function(controller) {
  controller.studio.before('why', function(convo, next) {
  // Create a count so we know how many questions we've asked
    convo.setVar('whyArray', [])
    next()
  })
  
  
  // I want inject a more dynaic start thread into the why script
  controller.studio.beforeThread('why', 'start_skill', function(convo, next) {
    convo.setVar('count', 0)
    console.log('=====IN BEFORE THERAD START_SKILL')
    
    convo.addQuestion({text: 'Why?'}, function(res, convo){
      if (res.text.trim().toLowerCase() === 'done') {
        convo.gotoThread('wrapup')        
      } else {
        convo.setVar('count', convo.vars.count += 1)
        convo.vars.whyArray.push(res.text)
        convo.repeat()
        convo.next()
      } if (convo.vars.count > 4) {
        convo.gotoThread('after5')
      } 
    }, {},'start_skill')
    
    next()
  })
  
  controller.studio.beforeThread('why', 'wrapup', function(convo, next) {
    if (convo.vars.whyArray.length) {
      convo.setVar('whyResult', '❓' + convo.vars.whyArray.join('\n❓')) 
    }
    next()
  })
  
}