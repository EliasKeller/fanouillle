"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'

export default function DragAndDropGame({ isGameComplete }) {
  const dropZoneRef = useRef(null)

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', 'draggable-item')
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.add('border-green-500')
      dropZoneRef.current.classList.remove('border-yellow-500')
    }
  }

  const handleDragLeave = () => {
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.remove('border-green-500')
      dropZoneRef.current.classList.add('border-yellow-500')
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain')
    if (data === 'draggable-item') {
      isGameComplete();
    }
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.remove('border-green-500')
      dropZoneRef.current.classList.add('border-yellow-500')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Drag and Drop Game</h1>
      <div className="relative">
        <Image
          src="/images/me.jpg"
          alt="Background"
          width={600}
          height={400}
          className="rounded-xl shadow-2xl"
        />
        <div
          ref={dropZoneRef}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="absolute w-32 h-32 border-4 border-dashed border-yellow-500 rounded-lg"
          style={{ top: '80%', left: '55%', transform: 'translate(-50%, -50%)' }}
        >

        </div>
      </div>
      <div className="mt-8">
        <div
          draggable
          onDragStart={handleDragStart}
          className="cursor-move"
        >
          <Image
            src="/images/dino.jpg"
            alt="Draggable Item"
            width={100}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  )
}
