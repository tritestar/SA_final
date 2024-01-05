<script setup>
import { ref, computed, defineProps, onMounted } from 'vue';
import { useMapStore } from '../../store/mapStore';

const props = defineProps(['chart_config', 'activeChart', 'series', 'map_config']);
const mapStore = useMapStore();

const chartOptions = ref({
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  colors: [
    '#F44F5E',
    '#E55A89',
    '#D863B1',
    '#CA6CD8',
    '#B57BED',
    '#8D95EB',
    '#62ACEA',
    '#4BC3E6',
  ],
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex];
    },
    dropShadow: {
      enabled: true,
    },
  },
  title: {
    text: 'Pyramid Chart',
    align: 'middle',
  },
  xaxis: {
    categories: ["30~34歲","35~39歲","25~29歲","40~44歲","45~49歲","15~19歲","20~24歲"],
  },
  legend: {
    show: false,
  },
});

const chartHeight = computed(() => {
  console.log('Calculating chart height...');

  const minHeight = 400; // Set a minimum height for the chart

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
  <div v-if="activeChart === 'Pyramid'">
    <apexchart width="100%" :height="chartHeight" :options="chartOptions" :series="props.series"></apexchart>
  </div>
</template>
