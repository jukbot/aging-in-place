import React from 'react'
import Layout from './components/Layout'

function App(): JSX.Element {
  return (
    <Layout>
      <section className="bg-[#41E8A3] h-screen w-full p-4 flex flex-col">
        <div className="w-full p-6 mx-auto text-center rounded lg:max-w-1/3 bg-base shadow-dark">
          <div className="flex flex-col w-full">
            <h1 className="text-4xl text-[#4A9368] font-chonburi text-shadow">
              สูงวัย
              <br />
              ในที่เดิม
            </h1>
            <h1 className="text-4xl font-chonburi text-shadow">
              สูงวัย
              <br />
              ในที่เดิม
            </h1>
          </div>

          <div className="pt-6 space-y-2">
            <p className="text-lg font-light">พร้อม Prompt - 300</p>
            <p className="text-lg font-normal">พร้อม Prompt - 400</p>
            <p className="text-lg font-medium">พร้อม Prompt - 500</p>
            <p className="text-lg font-semibold">พร้อม Prompt - 600</p>
            <p className="text-lg font-bold">พร้อม Prompt - 700</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-3">
          <span>🏠</span>
          <p className="text-lg text-center text-[#155730]">
            เตรียมความพร้อม
            <br /> เพื่อการสูงวัยในที่อยู่อาศัยเดิม
            <br /> อย่างมีคุณภาพ
          </p>
        </div>
        <div className="bottom-0 flex justify-center m-3">
          <button className="py-3 w-full md:max-w-[300px] text-lg bg-base rounded text-[#155730] shadow-dark">เข้าสู่เว็บไซต์</button>
        </div>
      </section>
    </Layout>
  )
}

export default App
