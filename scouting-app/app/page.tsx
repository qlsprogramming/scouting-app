import React from "react"
import Image from 'next/image'
import Checkbox from "@/components/Checkbox"

export default function Home() {
  return (
    <div className="h-screen bg-black text-white p-10">
      <h1 className="text-5xl text-white text-center">7419 Scouting</h1>
      <form className="p-5 m-5">
        <h2 className="text-2xl text-center">Autonomous</h2>
        <Image src="/images/auto.png" alt="" width={300} height={150} className="justify-center"></Image>
        <Checkbox name="docked">Docked</Checkbox>
        <Checkbox name="engaged">Engaged</Checkbox>
        
        <h2 className="text-2xl text-center">Teleop</h2>
        <Image src="/images/teleop.png" alt="" width={300} height={150}></Image>
        
        <Checkbox name="docked">Docked</Checkbox>
        <Checkbox name="engaged">Engaged</Checkbox>
        <Checkbox name="defensive">Defensive</Checkbox>
        <Checkbox name="disabled">Disabled</Checkbox>
      </form>
    </div>
  )
}
