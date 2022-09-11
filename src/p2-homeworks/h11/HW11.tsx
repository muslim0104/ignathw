import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {


    let [value1, setValue1] = useState(0)
    let [value2, setValue2] = useState(100)


    let updateValueTwo = (v:[number, number],e:any) => {

        console.log(e)
        setValue1(e.target.value[0])
        setValue2(e.target.value[1])

    }
  function min(e:any) {
      setValue1(e)
  }

    function onChangeRange(e:any) {
     setValue1(e)
        setValue2(value2--)
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={onChangeRange} value={value1}/>

            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange  value={[value1,value2]}  onChangeRange={updateValueTwo} min={min}/>
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
