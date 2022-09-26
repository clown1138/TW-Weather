import { useState,useEffect } from "react";


const Test =()=>{
    const [WeatherElement ,setWeatherElement]=useState(
        {observationTime: new Date(),
        //地區
        locationName: '',
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
        comfortability: '',}
    )
    const Pingtung = (Nu) => {
        fetch(
            `https://opendata.cwb.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&areaName=%E5%AE%9C%E8%98%AD%E7%B8%A3,%E8%8A%B1%E8%93%AE%E7%B8%A3,%E8%87%BA%E6%9D%B1%E7%B8%A3,%E6%BE%8E%E6%B9%96%E7%B8%A3,%E9%87%91%E9%96%80%E7%B8%A3,%E9%80%A3%E6%B1%9F%E7%B8%A3,%E8%87%BA%E5%8C%97%E5%B8%82,%E6%96%B0%E5%8C%97%E5%B8%82,%E6%A1%83%E5%9C%92%E5%B8%82,%E8%87%BA%E4%B8%AD%E5%B8%82,%E8%87%BA%E5%8D%97%E5%B8%82,%E9%AB%98%E9%9B%84%E5%B8%82,%E5%9F%BA%E9%9A%86%E5%B8%82,%E6%96%B0%E7%AB%B9%E7%B8%A3,%E6%96%B0%E7%AB%B9%E5%B8%82,%E8%8B%97%E6%A0%97%E7%B8%A3,%E5%BD%B0%E5%8C%96%E7%B8%A3,%E5%8D%97%E6%8A%95%E7%B8%A3,%E9%9B%B2%E6%9E%97%E7%B8%A3,%E5%98%89%E7%BE%A9%E7%B8%A3,%E5%98%89%E7%BE%A9%E5%B8%82,%E5%B1%8F%E6%9D%B1%E7%B8%A3` 
        ) 
            .then(response => response.json())
          
            .then(data=>console.log(data))
          
          }

        //   const Hsinchu = () => {
        //     fetch(
        //       `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-053?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536`,
        //     )
        //       .then(response => response.json())
        //       .then(data=>
        //         setWeatherElement(prevState => ({
        //             ...prevState,
        //             locationName:    data.records.locations[0].locationsName,
        //             rainPossibility: data.records.locations[0].location[1].weatherElement[0].time[0].elementValue[0].value,
        //             comfortability:  data.records.locations[0].location[1].weatherElement[5].time[0].elementValue[1].value,
        //             weatherCode:     data.records.locations[0].location[1].weatherElement[1].time[0].elementValue[1].value,
        //             description:     data.records.locations[0].location[1].weatherElement[1].time[0].elementValue[0].value,
        //             windSpeed:       data.records.locations[0].location[1].weatherElement[8].time[0].elementValue[0].value,
        //             temperature:     data.records.locations[0].location[1].weatherElement[3].time[0].elementValue[0].value,
        //             humid:           data.records.locations[0].location[1].weatherElement[4].time[0].elementValue[0].value,
        //         })
        //               )  
        //         ); 
        //         console.log(WeatherElement)
        //       }
//             useEffect(() => {
//                 Miaoli(6);
//   }, []);
    return(
        <div style={{color:"yellow"}}>
            <button onClick={Pingtung}>綠島</button>
            {/* <button onClick={()=>Miaoli(13)}>蘭嶼</button> */}
            {WeatherElement.locationName}_
            {WeatherElement.comfortability}_
            {WeatherElement.weatherCode}_
            {WeatherElement.description}_   
            {WeatherElement.windSpeed}_     
            {WeatherElement.temperature}_     
            {WeatherElement.humid}
        </div>
    )
}
export default Test;
