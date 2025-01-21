import React, { useState, useEffect, useMemo } from 'react';

import { ReactComponent as SonIcon } from './WeatherSVG/clear.svg';
import { ReactComponent as CloudyIcon } from './WeatherSVG/cloudy-fog.svg';
import { ReactComponent as CloudyWithRainIcon } from './WeatherSVG/cloudy-with-rain.svg';
import { ReactComponent as NightWithMoonIcon } from './WeatherSVG/night-clear.svg';
import { ReactComponent as NightWithcloudyIcon } from './WeatherSVG/night-cloudy.svg';
import { ReactComponent as NightWithRainIcon } from './WeatherSVG/night-rain.svg';
import {IconContainer} from '../styles/WeatherStyle';


const weatherTypes = {
    isThunderstorm: [ 8, 9, 10, 11, 12,
                    13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22,
                    23, 24, 25, 26, 27, 
                    28 ,29, 30, 31, 32,
                    33, 34, 35, 36, 37,
                    38, 39, 40, 41, 42],
    isClear: [1],
    isCloudy: [2, 3, 4, 5, 6, 7],
  };
  const weatherIcons = {
    day: {
      // isThunderstorm: <CloudyWithRainIcon />,
      // isClear: <SonIcon />,
      // isCloudy: <CloudyIcon />,
    },
    night: {
    //   isThunderstorm: <NightWithRainIcon />,
    //   isClear: <NightWithMoonIcon />,
    //   isCloudy: <NightWithcloudyIcon />,
    },
  };
  const weatherCode2Type = (weatherCode) => {
    const [weatherType] =
      Object.entries(weatherTypes).find(([weatherType, weatherCodes]) =>
        weatherCodes.includes(Number(weatherCode))
      ) || [];
  
    return weatherType;
  };
const WeatherIcon = ({WeatherCode, moment}) => {
    const [currentWeatherIcon, setCurrentWeatherIcon] = useState('isClear');

  const theWeatherIcon = useMemo(() => weatherCode2Type(WeatherCode), [
    WeatherCode,
  ]);

  useEffect(() => {
    setCurrentWeatherIcon(theWeatherIcon);
  }, [theWeatherIcon]);
    return (
    <IconContainer>
      {/* {weatherIcons[moment][currentWeatherIcon]} */}
    </IconContainer>
  );
};

export default WeatherIcon;