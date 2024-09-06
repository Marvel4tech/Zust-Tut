import { CounterValue } from "./counter-app/counterValue"
import { ManageCounter } from "./counter-app/manageCounter"


function App() {

  return (
    <div className=' max-w-6xl mx-auto'>
       <h1 className=" text-center text-4xl font-bold py-10">Create React with Zustand (Tutorial)</h1>
       <ManageCounter />
       <CounterValue />
    </div>
  )
}

export default App
