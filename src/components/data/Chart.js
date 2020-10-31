import React, { useRef } from "react"
import { useTheme, makeStyles } from '@material-ui/core/styles'
import { Line } from "react-chartjs-2"

const useStyles = makeStyles(theme => ({
    chartContainer: {
        position: "relative",
        height: "60vh",
        margin: "1rem",
        padding: "1rem 2rem",
    }
}))

const Chart = ({ displayData }) => {

  const { labels, values, title } = displayData
  const theme = useTheme()
  const classes = useStyles()

  const lineChart = useRef()



  const chartData = canvas => {
    const ctx = canvas.getContext("2d")
    const gradient = ctx.createLinearGradient(0, 500, 0, 100)
    gradient.addColorStop(0, theme.palette.gradient.grad01)
    gradient.addColorStop(0.8, theme.palette.gradient.grad02)
    gradient.addColorStop(1, theme.palette.gradient.grad03)

    return {
      labels: labels,
      datasets: [
        {
          label: title,
          data: values,
          backgroundColor: gradient,
          borderColor: theme.palette.gradient.grad03,
          borderWidth: 2.5
        }
      ]
    }
  }
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: true },
    redraw: true
  }

//   const ro = new ResizeObserver(entries => {
//     for (let entry of entries) {
//       const cr = entry.contentRect;
//       console.log('Element:', entry.target);
//       console.log(`Element size: ${cr.width}px x ${cr.height}px`);
//     }
//   });
//   ro.observe(lineChart.current)
// console.log(lineChart)


  return (
    <div ref={lineChart} className={classes.chartContainer}>
      <Line data={chartData} options={chartOptions}  />
    </div>
  )
}

export default Chart