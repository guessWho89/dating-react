import { useState } from 'react';
import Slider from '@material-ui/core/Slider';

export default function RangeSlider() {

  const [value, setValue] = useState([20, 45]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Slider
        value={value}
        min={18}
        max={100}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
    </>
  );
}