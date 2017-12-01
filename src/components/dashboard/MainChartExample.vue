<script>
import {
  Line,
  mixins
} from 'vue-chartjs'
import fb from "@/fb.js";

// const brandPrimary = '#20a8d8'
const brandSuccess = '#4dbd74'
const brandInfo = '#63c2de'
const brandDanger = '#f86c6b'

function convertHex(hex, opacity) {
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
  return result
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  extends: Line,
  props: ['chartData'],
  mixins: [mixins.reactiveProp],
  mounted() {
    var elements = 27
    // this.data1 = Array(27).fill(0)
    var data2 = []
    var data3 = []
    // console.log('data1', data1)
    this.renderChart(this.chartData, {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5,
            stepSize: Math.ceil(10 / 5),
            max: 10
          },
          gridLines: {
            display: true
          }
        }]
      },
      elements: {
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    })
  }
}
</script>
