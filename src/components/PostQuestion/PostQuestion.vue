<template>
<div>
  <div id="divCanvas">
    <canvas v-if="canvasLoaded" id="talkCanvas" ref="talkCanvas" v-canvas-added="{paths: paths, img: img}" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchCancel"></canvas>
  </div>
  <br/>
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
      const context = el.getContext("2d");
      const img = new Image();
      img.addEventListener(
        "load",
        function() {
          // console.log(img)
          // el.width = img.naturalWidth
          el.height = el.width * img.naturalHeight / img.naturalWidth;
          // const xOffset = el.width * 0.1
          context.drawImage(img, 0, 0, el.width, el.height);
          binding.value.paths.forEach(function(path) {
            context.strokeStyle = path.color;
            context.lineWidth = path.width;
            context.stroke(path.path);
          });
        },
        false
      );
      img.src = binding.value.img;
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
  data: function() {
    return {
      touches: [],
      paths: [],
      canvasLoaded: true
    }
  },
  methods: {
    onPostFinished: function() {
      console.log("post finished")

       const img =  this.$refs.talkCanvas.toDataURL();
       
       const question = 
       {
         category: this.$store.state.category,
         question: this.$store.state.question,
         imgEdited: img
       }
       
       var updates = {}
        updates[this.imgID] = question
       console.log(question)
       this.$root.$firebaseRefs.questions.update(updates)
    },
    onRefreshCanvas: function() {
      this.paths.pop()

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
            return touch.identifier === newTouch.identifier;
          });
          const oldTouch = this.touches[oldTouchIdx];
          oldTouch.path.lineTo(
            newTouch.pageX - canvasX,
            newTouch.pageY - canvasY
          );
          this.paths.push({
            path: oldTouch.path,
            color: this.color,
            width: this.width
          });
          this.touches.splice(oldTouchIdx, 1)
        }
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
