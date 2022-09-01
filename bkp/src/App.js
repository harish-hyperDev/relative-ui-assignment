import './App.css';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react" */

function App() {
  const items = [
    {id: 1, currency: "Bitcoin (BTC)", price: 31812, percentageIncrease: "+10%", TVL: 60000},
    {id: 2, currency: "Solana (SOL)", price: 32.83, percentageIncrease: "-12.32%", TVL: 60000},
    {id: 3, currency: "Ethereum (ETH)", price: 1466.45, percentageIncrease: "-11.93%", TVL: 60000},
    {id: 4, currency: "Binance USD (BUSD)", price: 1.00, percentageIncrease: "+0.26%", TVL: 60000},
    {id: 5, currency: "Shiba Inu (SHIB)", price: 0.00000001948, percentageIncrease: "-0.1%", TVL: 60000}
  ]

  return (
    <div className='m-20 grid grid-row-3 grid-flow-col gap-4'>
    {/*{
        items.map(item => 
              {
                return (
                  <div className='m-20 grid grid-row-3 grid-flow-col gap-4'>
                    <div className='p-2 h-52 w-24 border-solid border-2 border-radius-3 rounded-b-xl first-div'>
                  </div>
                )
              }
          )
      } */}

      <div className='p-2 h-52 w-24 border-solid border-2 border-radius-3 rounded-b-xl first-div'>
        <div className='p-2 h-52 w-48 border-solid border-2 second-div'>
          <div className='p-2 h-52 w-48 border-solid border-2 third-div'></div> 
          <div className='p-2 h-52 w-48 border-solid border-2 fourth-div'></div> 
        </div>
        
        
      </div>
    
    </div>
  );
}

export default App;
