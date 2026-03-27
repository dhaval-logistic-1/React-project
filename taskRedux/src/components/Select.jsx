import React from 'react'
import ChaildSelect from './select/ChaildSelect'
import { useDispatch, useSelector } from 'react-redux'
import { setselectOption } from '../redux/features/selectSlice';

const Select = () => {

  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.select.selectedOption)

  const selectChange = (e) => {
    dispatch(setselectOption(e.target.value));
  }

  
  return (
    <>
      <div className="flex flex-col gap-5 m-10">
          <select value={selectedOption}  onChange={selectChange} className='w-1/3 p-2 border-2 border-gray-500 '>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>
      </div>
      <h1 className="text-3xl font-bold m-10">
        Duplicating state in child component 
      </h1>
      <ChaildSelect/>
    </>
  )
}

export default Select