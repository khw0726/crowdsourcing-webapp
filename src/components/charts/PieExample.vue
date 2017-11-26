<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: ['numbers'],
  mounted () {
    this.renderChart({
      labels: ['연애', '직장', '친구', '가족', '그 외'],
      datasets: [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16',
            '#DD1B16'
          ],
          data: this.numbers
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>
