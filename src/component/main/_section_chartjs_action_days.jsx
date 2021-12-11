import { Box } from '@chakra-ui/layout';
import { useEffect, useRef, useState } from 'react';
import { getMessagesThisWeek } from '../../api/messages';
import { LoadingCircle } from '../utils/loadingCircle';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export function ChartActionWeeks() {
  Chart.register(
    LineController,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale
  );

  const [chartData, setChartData] = useState(null);
  const chartRef = useRef(null);

  const today = new Date().getDate();

  const plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: chart => {
      const ctx = chart.canvas.getContext('2d');
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = '#242424';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  };

  useEffect(() => {
    const values = [
      0, 0, 0, 0, 0 ,0 ,0
    ];
    async function getMessages() {
      const { data } = await getMessagesThisWeek(today);
      for (const user of data.data) {
        const hour = new Date(user.time).getDay();
        console.log(hour);
        values[hour - 1]++;
        console.log(values);
      }
      const chartRes = {
        labels: [
          "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"
        ],
        datasets: [
          {
            fill: true,
            label: 'Người dùng hoạt động tuần này',
            backgroundColor: '#ffffff',
            borderColor: '#bfbfbf',
            data: values,
          },
        ],
      };
      setChartData(chartRes);
    }
    getMessages();
  }, [today]);

  return (
    <Box mt="16px" margin="7px" display="block" w="600" h="200">
      {chartData ? (
        <Line
          margin="20px"
          ref={chartRef}
          data={chartData}
          options={{
            width: '600',
            height: '200',
            plugins: {
              title: {
                display: true,
                text: 'Số người active trong tuần',
                color: "#ffffff"
              },
              legend: {
                display: true,
                position: 'top',
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: {
                  left: 5,
                  right: 5,
                  top: 2,
                  bottom: 5
              }
          }
          }}
          plugins={[plugin]}
        />
      ) : (
        <LoadingCircle />
      )}
    </Box>
  );
}
