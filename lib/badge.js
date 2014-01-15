
function drawStates (ctx, j, list) {
  var textHeight = parseInt(ctx.font)
  ctx.fillStyle = '#ddeedd'
//  ctx.textBaseline = 'top'
  var width = 0, currentWidth
  var totalWidth = ctx.measureText(list.join('').toUpperCase()).width
  var space = ~~((ctx.canvas.width - totalWidth-4) / (list.length - 1))
  var current
  list.forEach(function (word, i) {
    var LOUD = word.toUpperCase()

    ctx.fillStyle = (
      i <   j ? '#999999' //done
    : i === j ? '#333333' //current
    :           '#ddeedd' //todo
    )
    
    ctx.fillText(LOUD, width, textHeight)
    ctx.fill()
    width += ctx.measureText(LOUD).width
//    ctx.moveTo(
    if(i == j)
      current = width
    width += space
  })

  ctx.beginPath()
  ctx.strokeStyle = '#333333'
  ctx.moveTo(0, textHeight + 3)
  if(current) {
    ctx.lineTo(current + 3, textHeight + 3)
    ctx.lineTo(current + 3, 0)
    ctx.stroke()
  }
  ctx.translate(0, textHeight + 6)
}

function drawBar (ctx, ratio, width, message) {
  var textHeight = parseInt(ctx.font)
  var height = textHeight*2
  var barpos =  ~~(width*ratio)
  ctx.fillStyle = 'lightgreen'
  ctx.fillRect(0, 1, width, height - 2)
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 1, barpos, height - 2)

  if(message) {
    ctx.textAlign = 'right'
    ctx.fillStyle = '#eeeeee'
    var w = ctx.measureText(message).width
    ctx.fillText(message, Math.max(width*ratio - height*0.25, w+height*0.25), height*0.70)
    //ctx.restore()
  }

  ctx.translate(0, height + 2)
}

function drawTasks(ctx, tasks, width) {
  ctx.save()
  var height = ~~(parseInt(ctx.font)*1.4)
  //ctx.translate(height*0.5 + 3 , 0)
  tasks.forEach(function (done, i) {
    ctx.fillStyle = 'lightgray'
    ctx.fillRect(0, 0, height, height)
    
    ctx.fillStyle = 'white' //done ? '#00ff00' : 'darkgray'
    ctx.fillRect(2, 2, height - 4, height - 4)
    
    if(done) {
      var h = height
//      ctx.stroke()
      ctx.fillStyle = '#00ff00'
      ctx.beginPath()
      ctx.moveTo(h*.2, h*.2)
      ctx.lineTo(h*.45, h*.5)
      ctx.lineTo(h*1.1, h*-.2)
      ctx.lineTo(h*.4, h*.9)
      ctx.lineTo(h*.2, h*.2)
//      ctx.stroke()
      ctx.fill()

    }

    ctx.translate(height*1.5 + 3 , 0)
  })
}

var states = ['created', 'funding', 'progress', 'complete']

function b () {
  return Math.random () > 0.5
}

function percent(r) {
  return ~~(r*100) + '%'
}

var badge = module.exports = function (ctx, iteration) {
  ctx.save()
  var width = ctx.canvas.width, state = 0
  var height = ~~(ctx.canvas.height/6)
  ctx.font = height+'px sans'
  console.log(iteration.status, states)
  drawStates(ctx, state = states.indexOf(iteration.status), states)
  var r
  drawBar(ctx, r = iteration.sum/iteration.target, width,
    (iteration.sum).toPrecision(3) + 'btc '
    + percent(r)
  )
  ctx.save()
  drawTasks(ctx, iteration.links.map(function (e) {return e.closed}))
  ctx.restore()
  ctx.restore()
  ctx.font = height+'px sans'
  ctx.textAlign = 'right'
  ctx.fillStyle = '#333333'
  ctx.fillText('FEEDOPENSOURCE', width, height*1.4)

  if(state === states.length-1) {
    ctx.restore()
    ctx.fillStyle = 'red'
    ctx.textAlign = 'center'
    ctx.font = 2.2*height+'px sans'
    ctx.translate(width*0.65, ctx.canvas.height*.6)
    ctx.rotate(Math.PI*0.2)
    ctx.fillText('DONE!', 0, 0)
  }
}


if(process.title === 'browser') {
  var randomIteration = require('../api/iteration').random
  var Canvas = require('canvas-browserify')
  var canvas = new Canvas()
  canvas.font = '20px sans'
  canvas.width = 300
  canvas.height = canvas.width / 5
  document.body.appendChild(canvas)
  var ctx = CTX = canvas.getContext('2d')
  ctx.font = '12px sans'
  //ctx.translate (-20, -20)
  badge(ctx, randomIteration())
}

