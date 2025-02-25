import React, { useEffect, useState } from 'react';
// import Layout from '../component/Layout';
// import SelectVariants from '@/component/selectVariants'


const SystemPage = () => {
  const [deteValue1,setDeteValue1] = useState(1)
  const [selectedSize,setSelectedSize] = useState({value:1, name:"200*200"})
  const handleChangeDate1=(e)=>{
    setDeteValue1(e.target.value)
}
 const materialSizes = [
  {value:1, name:"200*200"},
  {value:2,  name:"300*50"},
  {value:3,  name:"320*50"},
  {value:4, name:"300*250"},
  {value:5, name:"320*480"},
  {value:6, name:"336*280"},
 //  {value:7, name:"500*500"},
 //  {value:8, name:"640*320"},
 //  {value:9, name:"640*360"},
  {value:10, name:"970*250"}, 
 //  {value:11, name:"160*600"},
 //  {value:12, name:"300*600"},
 //  {value:13, name:"728*90"}
 {value:14, name:"250*250"}, 

 ]  
 useEffect(()=>{
  setSelectedSize(materialSizes.find(size => size.value === deteValue1)); // 找到對應的尺寸
  //  const selectedSize = materialSizes.find(size => size.value === value); // 找到對應的尺寸

console.log(selectedSize)
 },[deteValue1])
//  const selectedSize = materialSizes.find(size => size.value === value); // 找到對應的尺寸

  return (
    <div>
      <div>
      <h2>200*200</h2>

<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/756/index.html" 
  
  width="200px" 
  height="200px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/757/index.html" 
  width="200px" 
  height="200px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/758/index.html" 
  width="200px" 
  height="200px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/759/index.html" 
  width="200px" 
  height="200px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<h2>300*50</h2>

<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/756/index.html" 
  
  width="300px" 
  height="50px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/757/index.html" 
  width="300px" 
  height="50px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/758/index.html" 
  width="300px" 
  height="50px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/759/index.html" 
  width="300px" 
  height="50px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<h2>320*50</h2>

<iframe 
  src="https://rmn-creative.ad2iction.com/creative/742/index.html" 
  
  width="320px" 
  height="50px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/757/index.html" 
  width="320px" 
  height="50px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/758/index.html" 
  width="320px" 
  height="50px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/759/index.html" 
  width="320px" 
  height="50px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>

<h2>300*250</h2>

<iframe 
  src="https://rmn-creative.ad2iction.com/creative/737/index.html" 
  
  width="300px" 
  height="250px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/757/index.html" 
  width="300px" 
  height="250px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/758/index.html" 
  width="300px" 
  height="250px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/759/index.html" 
  width="300px" 
  height="250px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>

<h2>320*480</h2>

<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/756/index.html" 
  
  width="320px" 
  height="480px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/757/index.html" 
  width="320px" 
  height="480px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/758/index.html" 
  width="320px" 
  height="480px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/759/index.html" 
  width="320px" 
  height="480px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>

<h2>336*280</h2>

<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/756/index.html" 
  
  width="336px" 
  height="280px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/757/index.html" 
  width="336px" 
  height="280px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/758/index.html" 
  width="336px" 
  height="280px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/759/index.html" 
  width="336px" 
  height="280px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>

<h2>250*250</h2>

<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/756/index.html" 
  
  width="250px" 
  height="250px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/757/index.html" 
  width="250px" 
  height="250px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/758/index.html" 
  width="250px" 
  height="250px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
<iframe 
  src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/759/index.html" 
  width="250px" 
  height="250px" 
  style={{ border: "none" }} 
  allowFullScreen
></iframe>
      <h2>970*250</h2>

        <iframe 
          src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/756/index.html" 
          width="970px" 
          height="250px" 
          style={{ border: "none" }} 
          allowFullScreen
        ></iframe>
<iframe 
          src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/757/index.html" 
          width="970px" 
          height="250px" 
          style={{ border: "none" }} 
          allowFullScreen
        ></iframe>
        <iframe 
          src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/758/index.html" 
          width="970px" 
          height="250px" 
          style={{ border: "none" }} 
          allowFullScreen
        ></iframe>
        <iframe 
          src="https://storage.googleapis.com/stage_rmn_dsp_dco_m1wki4g3r3/creative/759/index.html" 
          width="970px" 
          height="250px" 
          style={{ border: "none" }} 
          allowFullScreen
        ></iframe>
      </div>
     
    </div>
  );
};

// SystemPage.getLayout = (page) => <Layout hideSiteList="true">{page}</Layout>;

export default SystemPage;
