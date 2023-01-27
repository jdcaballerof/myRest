import React, { useEffect, useState } from 'react'

export const Gato = () => {

    const [tablero, setTablero] = useState({
        b1: '_', b2: '_', b3: '_',
        b4: '_', b5: '_', b6: '_',
        b7: '_', b8: '_', b9: '_',
    })

    const [simb, setSimb] = useState('X');
    const [turno1, setTurno1] = useState(true);

    const clic = (btn) => {
      setTablero( { ...tablero, [btn]: simb  } )
    }

    const reset = () => {
        setTablero({
            b1: '_', b2: '_', b3: '_',
            b4: '_', b5: '_', b6: '_',
            b7: '_', b8: '_', b9: '_',
        })
        setSimb('X')
    }

    useEffect(() => {

        turno1 ?  setSimb('X') : setSimb('O');
        console.log(simb)
        setTurno1( !turno1 )

        let gano = false
        const vals = Object.values(tablero)
        const tableroArr = [vals.slice(0,3),  vals.slice(3,6),  vals.slice(-3)]

        console.log('keys', tableroArr )

        gano && console.log('gano', simb);

      
    }, [tablero])
    

  return (
    <div>
        <h2>Gato</h2>

        <div className="grid grid-cols-3 gap-3 w-2/12">
            <button className='bg-slate-300 mx-1 w-4 ' onClick={ () => clic('b1') } disabled={ tablero.b1 != '_' && 'disabled' } > {tablero.b1} </button>
            <button className='bg-slate-300 mx-1 w-4 ' onClick={ () => clic('b2') } disabled={ tablero.b2 != '_' && 'disabled' } > {tablero.b2} </button>
            <button className='bg-slate-300 mx-1 w-4 ' onClick={ () => clic('b3') } disabled={ tablero.b3 != '_' && 'disabled' } > {tablero.b3} </button>
            <button className='bg-slate-300 mx-1 w-4 ' onClick={ () => clic('b4') } disabled={ tablero.b4 != '_' && 'disabled' } > {tablero.b4} </button>
            <button className='bg-slate-300 mx-1 w-4 ' onClick={ () => clic('b5') } disabled={ tablero.b5 != '_' && 'disabled' } > {tablero.b5} </button>
            <button className='bg-slate-300 mx-1 w-4 ' onClick={ () => clic('b6') } disabled={ tablero.b6 != '_' && 'disabled' } > {tablero.b6} </button>
            <button className='bg-slate-300 mx-1 w-4 ' onClick={ () => clic('b7') } disabled={ tablero.b7 != '_' && 'disabled' } > {tablero.b7} </button>
            <button className='bg-slate-300 mx-1 w-4 ' onClick={ () => clic('b8') } disabled={ tablero.b8 != '_' && 'disabled' } > {tablero.b8} </button>
            <button className='bg-slate-300 mx-1 w-4 ' onClick={ () => clic('b9') } disabled={ tablero.b9 != '_' && 'disabled' } > {tablero.b9} </button>
        </div>

        <button className='bg-slate-300 m-2 p-2 ' onClick={reset} >Reset</button>

    </div>
  )
}
