<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['numbers'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['연애', '직장', '친구', '가족', '그 외'],
      datasets: [
        {
          label: '사람들과 유사도',
          backgroundColor: '#f87979',
          data: this.numbers
        }
      ]
    })
  }
}
</script>
