<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['연애', '상사', '친구', '가족'],
      datasets: [
        {
          label: '누적 답변 수 ',
          backgroundColor: '#f87979',
          data: [245, 141, 200, 531]
        }
      ]
    })
  }
}
</script>
