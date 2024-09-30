import { useState } from 'react';
import './App.css';

function App() {
  const [info, setInfo] = useState({
    weight: 0,
    height: 0,
  });
  const [bmi, setBmi] = useState("0");
  const [type, setType] = useState('');
  const [image, setImage] = useState('');

  const calculate = () => {
    const heightInMeters = info.height / 100; 
    const result = info.weight / (heightInMeters * heightInMeters); 

    setBmi(result.toFixed(2)); 

    if (result < 18.5) {
      setType('Underweight');
      setImage('https://images.pexels.com/photos/4498605/pexels-photo-4498605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    } else if (result >= 18.5 && result < 24.9) {
      setType('Normal');
      setImage('https://images.pexels.com/photos/4793366/pexels-photo-4793366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    } else if (result >= 25 && result < 29.9) {
      setType('Overweight');
      setImage('https://images.pexels.com/photos/11911053/pexels-photo-11911053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    } else {
      setType('Obesity');
      setImage('https://images.pexels.com/photos/11911053/pexels-photo-11911053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    }
    
    setInfo({ height: 0, weight: 0 });

  };

  return (
    <>
      <div className='p-10  flex flex-col justify-center items-center>'>
        <div className='flex flex-col lg:flex-row justify-center gap-5'>
          <label htmlFor="">Enter Height</label>
          <input   type="text" className='border-2' value={info.height} onChange={e => setInfo({ ...info, height: e.target.value })} 
          />

          <label htmlFor="">Enter Weight </label>
          <input type="text"   className='border-2'   value={info.weight}  onChange={e => setInfo({ ...info, weight: e.target.value })} 
          />
        </div>
        
        <button onClick={calculate} className="border-2 border-blue-500 bg-blue-500 text-white rounded m-10">
          Calculate 
        </button>

<div className='text-center my-5 flex flex-col items-center'>
<p className="">Your BMI is: {bmi}</p>
        <p>YOur BMI type is : {type}</p> 
        
       <img src={image} alt="" className=" w-[50%] rounded m-10" />

</div>

      </div>
    </>
  );
}

export default App;
