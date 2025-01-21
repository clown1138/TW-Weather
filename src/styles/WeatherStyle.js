
import styled from 'styled-components';
import hide from '../pages/Weather';
export const Weatherbody = styled.div`
height: 580px;
width:800px;
margin:auto;
display:flex;
@media (max-width: 450px) {
  width:95%;
  height:auto;
}
`;

export const Weathershow = styled.div`
height: 580px;
width:400px;
color: white;
font-size: 30px;
float:right;
@media (max-width: 450px) {
  display:${props=>props.ishide===true ? "none" : " "};
  position:absolute;
  z-index:100;
  width:95%;
  height:auto;
}
`;

export const MapSVG = styled.div`
margin:0px;
  height: 580px;
  width:400px;
  stroke: white;
  fill: transparent;
  transition: 0.5s;
  cursor: pointer;
  path:hover {
    fill: #B99362;
    transform: translate(-5px,-5px);
    width:95%;
    height:auto;
`;

export const Title = styled.div`
  color: #B99362;
  padding-left: 10px;;
`;
export const WeatherCard = styled.div`
  position: relative;
  min-width: 360px;
  box-shadow: 0 1px 3px 0 #999999;
  background-color: #504e4e;
  box-sizing: border-box;
  padding: 30px 15px;
`;

export const Location = styled.div`
  font-size: 28px;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  font-size: 16px;

  margin-bottom: 30px;
`;

export const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Temperature = styled.div`

  font-size: 96px;
  font-weight: 300;
  display: flex;
`;
export const MaxMinTemperature = styled.div`
font-size: 1px;
  font-weight: 30;
  display:inline;
`;
export const Celsius = styled.div`
  font-weight: normal;
  font-size: 42px;
`;

export const AirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: #828282;
  margin-bottom: 20px;
  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

export const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: #828282;
  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;
export const Humid = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: 300;
  color: #828282;

  svg {
    width: 10px;
    height: auto;
    margin-right: 0px;
  }
`;

export const Redo = styled.div`
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 12px;
  display: inline-flex;
  align-items: flex-end;
  svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    animation: rotate infinite 1.5s linear;

    animation-duration: ${({ isLoading }) => (isLoading ? '1.5s' : '0s')};
  }

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
export const IconContainer = styled.div`
position: absolute;
left:105px;
flex-basis: 30%;
  svg {
    max-height: 80px;
  }
`;
