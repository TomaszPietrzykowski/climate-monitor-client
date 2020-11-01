import React from "react"
import { useTheme, makeStyles } from '@material-ui/core/styles'
import { Line } from "react-chartjs-2"

const useStyles = makeStyles(theme => ({
    chartContainer: {
        position: "relative",
        height: "60vh",
        width: "calc(90vw - 320px)",
        margin: "1rem",
        padding: "1rem 2rem",
        [theme.breakpoints.down("md")]: {
          height: "60vh",
          width: "95vw",
          margin: "auto",
          padding: "1rem",
        }
    }
}))

const Chart = ({ displayData }) => {

  const { labels, values, title } = displayData
  const theme = useTheme()
  const classes = useStyles()

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

  return (
    <div className={classes.chartContainer}>
      <Line data={chartData} options={chartOptions}/>
    </div>
  )
}

export default Chart