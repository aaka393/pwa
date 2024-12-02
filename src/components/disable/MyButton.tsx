import { DisableProps } from './DisableProps'

const MyButton = ({title, disabled}: DisableProps) => {
  return (
    <>
      <button className='text-blue-500 m-5' disabled={disabled}>{title}</button>
    </>
  )
}

export default MyButton
