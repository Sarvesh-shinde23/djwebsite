import React from 'react'
import Scrollingtext from './Scrollingtext'

const hero = () => {
  return (
    <main className="overflow-hidden relative shrink-0 w-full h-[1597px] max-md:h-[800px] max-sm:h-[400px]">
      <div className="absolute top-0 left-0 shrink-0 w-full bg-orange-950 h-[1597px] max-md:h-[800px] max-sm:h-[400px]" />

      <div className="absolute top-0 left-0 shrink-0 mx-auto w-full max-w-none h-[1597px] max-md:h-[800px] max-md:max-w-[991px] max-sm:max-w-screen-sm max-sm:h-[400px]">
        <div className="absolute top-0 left-0 shrink-0 w-full h-[222px] max-md:h-[100px] max-sm:h-[50px]" />

  <Scrollingtext/>

        <div className="absolute left-0 shrink-0 w-full bg-orange-950 h-[1374px] top-[222px] max-md:h-[680px] max-md:top-[120px] max-sm:top-20 max-sm:h-80" />

        <div className="absolute shrink-0 h-[1035px] left-[647px] top-[222px] w-[626px] max-md:h-[600px] max-md:left-[312px] max-md:top-[120px] max-md:w-[400px] max-sm:top-20 max-sm:h-[280px] max-sm:left-[150px] max-sm:w-[300px]" />
      </div>
    </main>
  )
}

export default hero