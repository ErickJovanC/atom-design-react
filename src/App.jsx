import { useState } from 'react'
import { Button } from 'basic-ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>
        <Button children="Button" size="xl" className='btn btn-primary' onClick={() => setCount(count + 1)} />
      </div>
    </>
  )
}

export default App