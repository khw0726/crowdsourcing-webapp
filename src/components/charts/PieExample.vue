<script>
import { Pie, mixins } from 'vue-chartjs'

export default {
  extends: Pie,    
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  mounted () {
    // console.log(this.numbers)
    this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false})
  }
}
</script>
