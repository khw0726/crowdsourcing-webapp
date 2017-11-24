<template>
<div>
  <div id="divCanvas">
    <canvas v-if="canvasLoaded" id="talkCanvas" ref="talkCanvas" v-canvas-added="{paths: paths, img: img, color: color, width: width}" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchCancel"></canvas>
  </div>
  <br/>
  <router-view @refreshCanvas="onRefreshCanvas" @postFinished="onPostFinished"></router-view>
</div>
<router-view @refreshCanvas="onRefreshCanvas" @postFinished="onPostFinished"></router-view>
</div>
</template>

<script>
import fb from '@/fb.js'
export default {
  name: 'postQuestion',
  props: ['imgID'],
  firebase: {
    questions: fb.db.ref('questions'),
  },
  directives: {
    canvasAdded: function(el, binding) {
      const context = el.getContext('2d')
      const img = new Image()
      img.addEventListener('load', function() {
        // console.log(img)
        // el.width = img.naturalWidth
        el.height = el.width * img.naturalHeight / img.naturalWidth
        // const xOffset = el.width * 0.1
        context.drawImage(img, 0, 0, el.width, el.height)
        context.strokeStyle = binding.value.color
        context.lineWidth = binding.value.width
        binding.value.paths.forEach(function(path) {
          context.stroke(path)
        })
      }, false)
      img.src = binding.value.img

    }
  },
  computed: {
    img: function() {
      if (this.questions.length === 0) {
        return ''
      }
      let img = this.questions.find((question) => {
        // console.log(question['.key'])
        return question['.key'] === this.imgID
      })
      // console.log(img)
      return img.img
    },
    color: function() {
      if (this.$route.name === 'privacy') {
        return 'black'
      } else if (this.$route.name === 'annotate') {
        return 'red'
      }
    },
    width: function() {
      if (this.$route.name === 'privacy') {
        return 8
      } else if (this.$route.name === 'annotate') {
        return 2
      }
    },
    isPathAvailable: function() {
      return this.$route.name === 'privacy' || this.$route.name === 'annotate'
    }
  },
  isPathAvailable: function() {
    return this.$route.name === 'privacy' || this.$route.name === 'annotate'
  }
},
data: function() {
    return {
      touches: [],
      paths: [],
      canvasLoaded: true
    }
  },
  methods: {
    onPostFinished: function() {
      const img = this.$refs.talkCanvas.toDataURL()
      const question = {
        category: this.$store.state.category,
        question: this.$store.state.question,
        img: img
      }
      this.$root.$firebaseRefs.questions.push(question)
    },
    methods: {
<<<<<<< HEAD
      onPostFinished: function() {
=======
      onPostFinished: function () {
        // DB-TODO: Update existing entry

>>>>>>> 993ecec2055a52e46294552a2d92acfaa870d7a7
        // const img =  this.$refs.talkCanvas.toDataURL()
        // const question = {
        //   category: this.$store.state.category,
        //   question: this.$store.state.question,
        //   img: img
        // }
        // // this.$root.$firebaseRefs.questions.push(question)
      },
      onRefreshCanvas: function() {
        // this.canvasLoaded = false
        this.paths.pop()

        // setTimeout(()=>this.canvasLoaded = true, 1)
        // this.canvasLoaded = true
        // const el = document.getElementById('talkCanvas')
        // const context = el.getContext('2d')
        // const img = new Image()
        // img.addEventListener('load', function () {
        //   // console.log(img)
        //   // el.width = img.naturalWidth
        //   el.height = el.width * img.naturalHeight / img.naturalWidth
        //   const xOffset = el.width * 0.1
        //   context.drawImage(img, 0, 0, el.width  , el.height)
        // }, false)
        // img.src = '/static/question.png'
      },
      onTouchStart: function(ev) {
        if (this.isPathAvailable) {
          ev.preventDefault()
          const context = ev.target.getContext('2d')
          const canvasX = ev.target.offsetLeft
          const canvasY = ev.target.offsetTop
          console.log(ev.target.offsetLeft)
          for (let i = 0; i < ev.touches.length; i++) {
            console.log(ev.touches)
            const touch = ev.touches[i]
            const newPath = new Path2D()
            newPath.moveTo(touch.pageX - canvasX, touch.pageY - canvasY)
            this.touches.push({
              identifier: touch.identifier,
              path: newPath
            })
            // context.beginPath()
            // context.arc(touch.pageX - canvasX, touch.pageY - canvasY, 4, 0, 2 * Math.PI, false)
            // context.fillStyle = this.color
            // context.fill()
            // this.touches.push(touch)
          }

        }
      }
    },
    onTouchMove: function(ev) {
      if (this.isPathAvailable) {
        ev.preventDefault()
        const context = ev.target.getContext('2d')
        const canvasX = ev.target.offsetLeft
        const canvasY = ev.target.offsetTop
        for (let i = 0; i < ev.changedTouches.length; i++) {
          const newTouch = ev.changedTouches[i]
          const oldTouchIdx = this.touches.findIndex(function(touch) {
            return touch.identifier === newTouch.identifier
          })
          const oldTouch = this.touches[oldTouchIdx]
          oldTouch.path.lineTo(newTouch.pageX - canvasX, newTouch.pageY - canvasY)
          // context.strokeStyle = this.color
          // context.beginPath()
          // context.moveTo(oldTouch.pageX - canvasX, oldTouch.pageY - canvasY)
          // context.lineTo(newTouch.pageX - canvasX, newTouch.pageY - canvasY)
          // context.lineWidth = 8
          // context.stroke()
          // this.touches.splice(oldTouchIdx, 1, newTouch)
        }
        this.touches.forEach((val) => {
          context.strokeStyle = this.color
          context.lineWidth = this.width
          context.stroke(val.path)
        })
      }
    },
    onTouchEnd: function(ev) {
      if (this.isPathAvailable) {
        ev.preventDefault()
        const context = ev.target.getContext('2d')
        const canvasX = ev.target.offsetLeft
        const canvasY = ev.target.offsetTop
        for (let i = 0; i < ev.changedTouches.length; i++) {
          const newTouch = ev.changedTouches[i]
          const oldTouchIdx = this.touches.findIndex(function(touch) {
            return touch.identifier === newTouch.identifier
          })
          const oldTouch = this.touches[oldTouchIdx]
          oldTouch.path.lineTo(newTouch.pageX - canvasX, newTouch.pageY - canvasY)
          this.paths.push(oldTouch.path)
          // context.strokeStyle = this.color
          // context.beginPath()
          // context.moveTo(oldTouch.pageX - canvasX, oldTouch.pageY - canvasY)
          // context.lineTo(newTouch.pageX - canvasX, newTouch.pageY - canvasY)
          // context.lineWidth = 8
          // context.stroke()
          this.touches.splice(oldTouchIdx, 1)
        }
        this.touches.forEach((val) => {
          context.strokeStyle = this.color
          context.lineWidth = this.width
          context.stroke(val.path)
        })
      }
    },
    onTouchCancel: function(ev) {
      if (this.isPathAvailable) {
        for (let i = 0; i < ev.changedTouches.length; i++) {
          const oldTouchIdx = this.touches.findIndex(function(touch) {
            return touch.identifier === newTouch.identifier
          })
          this.touches.splice(oldTouchIdx, 1)
        }
      }
    }
  }
}
</script>

<style scoped>
/* template {
  text-align: center
} */

#divCanvas {
  margin: auto;
  /* width: 80%; */
  /* position:relative; */
}

canvas {
  padding-left: 0;
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 100%;
}
</style>
