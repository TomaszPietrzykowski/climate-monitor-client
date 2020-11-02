import React, { useState, useEffect } from "react"
import InputRange from "react-input-range"
import "./RangeSlider.css"


const RangeSlider = ({ activeData, updateActiveValues }) => {

  const [value, setValue] = useState({
    min: 0,
    max: activeData.labels.length - 1
  })

  const initialRange = activeData.labels.length - 1

  useEffect(() => {
    updateActiveValues(value)
    //eslint-disable-next-line
  }, [value])

  useEffect(() => {
    setValue({ min: 0, max: activeData.labels.length -1 })
  }, [activeData])



  return (
      <div className="slidercontainer">
        <div className="slider">
          <InputRange
            maxValue={initialRange}
            minValue={0}
            formatLabel={value =>
              `${activeData.labels[value] ||
                activeData.labels[value -1]}`
            }
            value={value}
            onChange={value => setValue(value)}
          />
        </div>
      </div>
  )
}

export default RangeSlider