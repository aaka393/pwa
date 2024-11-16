import { useState } from "react"


const DomEvent = () => {
    const [value, setValue] = useState("Enter anything")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
  return (
    <div>
      <input className="border p-2 rounded-lg m-2" value={value} onChange={handleChange} />
      <p className="ml-3">Value: {value}</p>
    </div>
  )
}

export default DomEvent
