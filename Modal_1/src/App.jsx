import { useState } from 'react'
import Modal from './Modal'
export default function App() {
  return (
    <div>
      <Modal text="테스트"/>
      <Modal title={"두번째 모달"} text="테스트2"/>
    </div>
  )
}
