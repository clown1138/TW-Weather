import { useEffect, useState } from 'react';
import './App.css';
import Map from './Map' 
import WeatherIcon from './WeatherIcon';
import { ReactComponent as RainIcon } from './WeatherSVG/rain.svg';
import { ReactComponent as WindyIcon } from './WeatherSVG/windy.svg';
import { ReactComponent as HumidIcon } from './WeatherSVG/humid.svg';
import { ReactComponent as RefreshIcon } from './WeatherSVG/refresh.svg';
import {Weatherbody, Weathershow, Title ,WeatherCard , Location ,Description ,CurrentWeather ,Temperature ,Celsius ,AirFlow ,Rain ,Humid, Redo 
} from './WeatherStyle'



function App() {
  const [weatherElement, setWeatherElement] = useState({
    observationTime: new Date(),
    //地區
    locationName: '台北市',
    //濕度
    humid: 0,
    //氣溫
    temperature: 0,
    Maxtemperature: 0,
    Mintemperature: 0,
    //風速
    windSpeed: 0,
    //氣候
    description: '',
    weatherCode: 0,
    // 降雨機率
    rainPossibility: '20',
    //舒適度
    comfortability: '',
  });
      const [citystated, setcitystated] = useState("臺北市")
      const [citystate, setcitystate] = useState("臺北")
      const [hide, setHide] = useState(true)
      //城市
      const City=(citynames)=>{
    const CityN = [
      {
        cityName: '宜蘭縣',
        locationName: '宜蘭',
      },
      {
        cityName: '嘉義市',
        locationName: '嘉義',
      },
      {
        cityName: '屏東縣',
        locationName: '恆春',
      },
      {
        cityName: '雲林縣',
        locationName: '雲林',
      },
      {
        cityName: '臺東縣',
        locationName: '臺東',
      },
      {
        cityName: '臺北市',
        locationName: '臺北',
      },
      {
        cityName: '金門縣',
        locationName: '金門',
      },
      {
        cityName: '桃園市',
        locationName: '新屋',
      },
      {
        cityName: '彰化縣',
        locationName: '彰師大',
      },
      {
        cityName: '嘉義縣',
        locationName: '阿里山',
      },
      {
        cityName: '高雄市',
        locationName: '高雄',
      },
      {
        cityName: '基隆市',
        locationName: '基隆',
      },
      {
        cityName: '臺南市',
        locationName: '南區中心',
      },
      {
        cityName: '南投縣',
        locationName: '日月潭',
      },
      {
        cityName: '臺中市',
        locationName: '臺中',
      },
      {
        cityName: '新竹縣',
        locationName: '新竹',
      },
      {
        cityName: '花蓮縣',
        locationName: '花蓮',
      },
      {
        cityName: '連江縣',
        locationName: '馬祖',
      },
      {
        cityName: '澎湖縣',
        locationName: '澎湖',
      },
      {
        cityName: '新北市',
        locationName: '板橋',
      },
    ];
    // return (CityN.find(location => location.cityName === citynames));
    setcitystated(citynames)
    // console.log(citynames)
    // console.log(citystate)
    console.log(citynames,'citynames')
    
    setHide(!hide)
      }
      const Hideornot=()=>{
          setHide(!hide)
      }
    //   useEffect(() => {
    // fetchCurrentWeather(citystate);
    // fetchWeatherForecast(citystated);
    //   }, [citystate,citystated]);
      //天氣獲取
    //   const fetchCurrentWeather = (citystate) => {
    // fetch(
    //   `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&locationName=${citystate}`,
    // )
    //   .then(response => response.json())
    //   .then(data => {
    //     const locationData = data.records.location[0];
    //     const weatherElements = locationData.weatherElement.reduce(
    //       (neededElements, item) => {
    //         if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
    //           neededElements[item.elementName] = item.elementValue;
    //         }
    //         return neededElements;
    //       },
    //       {},
    //     );
    //     console.log(locationData,'locationData')
    //     setWeatherElement(prevState => ({
    //       ...prevState,
    //       observationTime: locationData.time.obsTime,
    //       // locationName: locationData.locationName,
    //       temperature: weatherElements.TEMP,
    //       windSpeed: weatherElements.WDSD,
    //       humid: weatherElements.HUMD,
    //     }));
    //   });
    //   };
      //苗栗天氣
      const Miaoli = () => {
    fetch(
      `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-013?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536`,
    )
      .then(response => response.json())
      .then(data=>
        {const MiaoliWeather= data.records.locations[0].location[1];
        setWeatherElement(prevState => ({
            ...prevState,
            locationName:    MiaoliWeather.locationName,
            rainPossibility: MiaoliWeather.weatherElement[0].time[0].elementValue[0].value,
            comfortability:  MiaoliWeather.weatherElement[5].time[0].elementValue[1].value,
            weatherCode:     MiaoliWeather.weatherElement[1].time[0].elementValue[1].value,
            description:     MiaoliWeather.weatherElement[1].time[0].elementValue[0].value,
            windSpeed:       MiaoliWeather.weatherElement[8].time[0].elementValue[0].value,
            temperature:     MiaoliWeather.weatherElement[3].time[0].elementValue[0].value,
            humid:           MiaoliWeather.weatherElement[4].time[0].elementValue[0].value,
        })
              )}  
        ); 
    setHide(!hide)

      }
      //屏東＿蘭嶼＿綠島
      const Pingtung = (Nu) => {
        fetch(
            `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-037?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536`
        )
          .then(response => response.json())
        //   .then(data=>console.log(data))
          .then(data=>
            {const PingtungWeather=data.records.locations[0].location[Nu]
            setWeatherElement(prevState => ({
                ...prevState,
                locationName:    PingtungWeather.locationName,
                rainPossibility: PingtungWeather.weatherElement[0].time[0].elementValue[0].value,
                comfortability:  PingtungWeather.weatherElement[5].time[0].elementValue[1].value,
                weatherCode:     PingtungWeather.weatherElement[1].time[0].elementValue[1].value,
                description:     PingtungWeather.weatherElement[1].time[0].elementValue[0].value,
                windSpeed:       PingtungWeather.weatherElement[8].time[0].elementValue[0].value,
                temperature:     PingtungWeather.weatherElement[3].time[0].elementValue[0].value,
                humid:           PingtungWeather.weatherElement[4].time[0].elementValue[0].value,
            })
                  )}  
            ); 
    setHide(!hide)

      }
      //新竹
      const Hsinchu = () => {
        fetch(
          `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-053?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536`,
        )
          .then(response => response.json())
          .then(data=>
            {const HsinchuWeather=data.records.locations[0];
            setWeatherElement(prevState => ({
                ...prevState,
                locationName:    HsinchuWeather.locationsName,
                rainPossibility: HsinchuWeather.location[1].weatherElement[0].time[0].elementValue[0].value,
                comfortability:  HsinchuWeather.location[1].weatherElement[5].time[0].elementValue[1].value,
                weatherCode:     HsinchuWeather.location[1].weatherElement[1].time[0].elementValue[1].value,
                description:     HsinchuWeather.location[1].weatherElement[1].time[0].elementValue[0].value,
                windSpeed:       HsinchuWeather.location[1].weatherElement[8].time[0].elementValue[0].value,
                temperature:     HsinchuWeather.location[1].weatherElement[3].time[0].elementValue[0].value,
                humid:           HsinchuWeather.location[1].weatherElement[4].time[0].elementValue[0].value,
            })
                  )}  
            ); 
    setHide(!hide)

      }
      //濕度
      // const fetchWeatherForecast = (citystated) => {
      //   fetch(
      //     `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&locationName=${citystated}`,
      //   )
      // .then(response => response.json())
      // .then(data => {
      //   const locationData = data.records.location[0];
      //   const weatherElements = locationData.weatherElement.reduce(
      //     (neededElements, item) => {
      //       if (['Wx', 'PoP', 'CI','MaxT', 'MinT'].includes(item.elementName)) {
      //         neededElements[item.elementName] = item.time[0].parameter;
      //       }
      //       return neededElements;
      //     },
      //     {},
      //   );
      //     console.log(weatherElements)
      //   setWeatherElement(prevState => ({
      //     ...prevState,
      //     description: weatherElements.Wx.parameterName,
      //     weatherCode: weatherElements.Wx.parameterValue,
      //     rainPossibility: weatherElements.PoP.parameterName,
      //     comfortability: weatherElements.CI.parameterName,
      //     Maxtemperature:weatherElements.MaxT.parameterName,
      //     Mintemperature:weatherElements.MinT.parameterName,
      //   }));
      // });
      // };
    
      const weatherget =()=>{
        // fetchCurrentWeather(citystate);
        // fetchWeatherForecast(citystated);
      }
  return (
    
    <Weatherbody> 
        <Map City={(citynames)=>City(citynames)} 
             weatherget={weatherget} 
             Hsinchu={Hsinchu} 
             Miaoli={Miaoli}
             Pingtung={(Nu)=>Pingtung(Nu)}
             />
      <Weathershow onClick={Hideornot} ishide={hide}>
    <Title>Taiwan<span>///</span>
      <br />Weather Map<br /></Title>
      <WeatherCard>
        <Location>
          {citystated}
        </Location>
        <Description>
          {weatherElement.description}  
          {weatherElement.comfortability}
        </Description>
        <CurrentWeather>
          <Temperature>
            {weatherElement.temperature} <Celsius>°C</Celsius>
          </Temperature>
            {/* <WeatherIcon 
              WeatherCode={weatherElement.weatherCode}
              moment="night"/> */}
        </CurrentWeather>

        <AirFlow>
            {/* <WindyIcon/>{weatherElement.windSpeed}  m/h */}
        </AirFlow>
        <Rain>
          {/* <RainIcon />{weatherElement.rainPossibility} % */}
        </Rain>
        <Humid>
          {/* <HumidIcon />濕度{Math.round(weatherElement.humid * 100)} % */}
        </Humid>
        <Redo onClick={weatherget}>
        最後觀測時間：
          {new Intl.DateTimeFormat('zh-TW', {
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date(weatherElement.observationTime))}{' '}
          {/* <RefreshIcon /> */}
        </Redo>
      </WeatherCard>
      </Weathershow>
    </Weatherbody>
  );
}

export default App;
