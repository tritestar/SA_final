<script setup>
import { ref, computed, defineProps, onMounted } from 'vue';
import { useMapStore } from '../../store/mapStore';

const props = defineProps(['chart_config', 'activeChart', 'series', 'map_config']);
const mapStore = useMapStore();

const chartOptions = ref({
  chart: {
    type: 'polarArea',
    // background: '#fff',
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    colors: ['#282a2c'],
    show: true,
  },
  labels: ["15~19歲","20~24歲","25~29歲","30~34歲","35~39歲","40~44歲","45~49歲"],
  fill: {
    opacity: 0.8,
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200,
      },
    },
  }],
});

const chartHeight = computed(() => {
  console.log('Calculating chart height...');

  const minHeight = 1400; // Set a minimum height for the chart

  if (props.series && props.series.length > 0) {
    const dataSeries = props.series.find(series => series.data);

    if (dataSeries && dataSeries.data && !isNaN(dataSeries.data.length)) {
      const calculatedHeight = Math.max(minHeight, 40 + dataSeries.data.length * 24);
      const height = `${calculatedHeight}px`;
      console.log('Chart height:', height);
      return height;
    }
  }

  // If unable to calculate, return the default minimum height
  console.warn('Unable to calculate chart height. Returning default height.');
  return `${minHeight}px`;
});

onMounted(() => {
  console.log('Component mounted. Props:', props);
});

</script>

<template>
  <div v-if="activeChart === 'PolarChart'">
    <apexchart width="100%" :height="chartHeight" :options="chartOptions" :series="props.series"></apexchart>
  </div>
</template>
