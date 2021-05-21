import React from 'react'

function App(): JSX.Element {
  return (
    <section className="bg-[#41E8A3] h-screen w-full p-4 flex flex-col">
      <div className="text-center w-full lg:max-w-3/4 bg-base mx-auto p-6 rounded shadow-dark">
        <div className="flex flex-col w-full">
          <h1 className="text-4xl text-[#4A9368] font-chonburi text-shadow">
            สูงวัย
            <br />
            ในที่เดิม
          </h1>
          <h1 className="text-4xl  font-chonburi text-shadow">
            สูงวัย
            <br />
            ในที่เดิม
          </h1>
        </div>

        <div className="space-y-2 pt-6">
          <p className="text-lg font-light">พร้อม Prompt - 300</p>
          <p className="text-lg font-normal">พร้อม Prompt - 400</p>
          <p className="text-lg font-medium">พร้อม Prompt - 500</p>
          <p className="text-lg font-semibold">พร้อม Prompt - 600</p>
          <p className="text-lg font-bold">พร้อม Prompt - 700</p>
        </div>
      </div>
      <div className="h-full flex flex-col space-y-3 items-center justify-center">
        <span>🏠</span>
        <p className="text-lg text-center text-[#155730]">
          เตรียมความพร้อม
          <br /> เพื่อการสูงวัยในที่อยู่อาศัยเดิม
          <br /> อย่างมีคุณภาพ
        </p>
      </div>
      <div className="flex justify-center bottom-0 m-3">
        <button className="py-3 w-full text-lg bg-base rounded text-[#155730] shadow-dark">เข้าสู่เว็บไซต์</button>
      </div>
    </section>
  )
}

export default App
