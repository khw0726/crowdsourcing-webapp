<template>
  <div class="ui container">
  	<div id="divCanvas">
    <canvas id="talkCanvas" v-canvas-added 
    @touchstart.prevent="onTouchStart"
    @touchmove.prevent="onTouchMove"
    @touchend.prevent="onTouchEnd"
    @touchcancel.prevent="onTouchCancel"></canvas>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'postQuestion',
    directives: {
      canvasAdded: {
        inserted: function (el) {
          const context = el.getContext('2d')
          const img = new Image()
          img.addEventListener('load', function () {
            // console.log(img)
            // el.width = img.naturalWidth
            el.height = el.width * img.naturalHeight / img.naturalWidth
            const xOffset = el.width * 0.1
            context.drawImage(img, 0, 0, el.width  , el.height)
          }, false)
          img.src = '/static/question.jpg'
        }
      }
    },
    data: function () {
      return {
        touches: []
      }
    },
    methods: {
      onTouchStart: function (ev) {
        const context = ev.target.getContext('2d')
        const canvasX = ev.target.offsetLeft
        const canvasY = ev.target.offsetTop
        console.log(ev.target.offsetLeft)
        for(let i = 0; i < ev.touches.length; i++) {
          const touch = ev.touches[i]
          context.beginPath()
          context.arc(touch.pageX - canvasX, touch.pageY - canvasY, 4, 0, 2 * Math.PI, false)
          context.fill()
          this.touches.push(touch)
        }
      },
      onTouchMove: function (ev) {
        const context = ev.target.getContext('2d')
        const canvasX = ev.target.offsetLeft
        const canvasY = ev.target.offsetTop
        for(let i = 0; i< ev.changedTouches.length; i++){
          const newTouch = ev.changedTouches[i]
          const oldTouchIdx = this.touches.findIndex(function (touch){
            return touch.identifier === newTouch.identifier
          })
          const oldTouch = this.touches[oldTouchIdx]
          context.beginPath()
          context.moveTo(oldTouch.pageX - canvasX, oldTouch.pageY - canvasY)
          context.lineTo(newTouch.pageX - canvasX, newTouch.pageY - canvasY)
          context.lineWidth = 8
          context.stroke()
          this.touches.splice(oldTouchIdx, 1, newTouch)
        }
      },
      onTouchEnd: function (ev) {
        const context = ev.target.getContext('2d')
        const canvasX = ev.target.offsetLeft
        const canvasY = ev.target.offsetTop
        for(let i = 0; i< ev.changedTouches.length; i++) {
          const newTouch = ev.changedTouches[i]
          const oldTouchIdx = this.touches.findIndex(function (touch){
            return touch.identifier === newTouch.identifier
          })
          const oldTouch = this.touches[oldTouchIdx]
          context.beginPath()
          context.moveTo(oldTouch.pageX - canvasX, oldTouch.pageY - canvasY)
          context.lineTo(newTouch.pageX - canvasX, newTouch.pageY - canvasY)
          context.lineWidth = 8
          context.stroke()
          this.touches.splice(oldTouchIdx, 1)
        }
      },
      onTouchCancel: function(ev) {
        for(let i = 0; i< ev.changedTouches.length; i++) {
          const oldTouchIdx = this.touches.findIndex(function (touch){
            return touch.identifier === newTouch.identifier
          })
          this.touches.splice(oldTouchIdx, 1)
        }
      }
    }
  }
</script>

<style scoped>
	#divCanvas {
	margin: auto;
	width: 80%;
	}
  #talkCanvas {
  	max-width: 100%;
    /* height: 80%; */
  }
</style>