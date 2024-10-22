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
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <Image
          src="/images/me.jpg"
          alt="Background"
          width={300}  // Adjusted width
          height={100} // Adjusted height
          className="rounded-xl shadow-2xl"
        />
        <div
          ref={dropZoneRef}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="absolute w-20 h-20 border-4 border-dashed border-yellow-500 rounded-lg"
          style={{ top: '70%', left: '55%', transform: 'translate(-50%, -50%)' }} // Adjusted size and position
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
            width={80}  // Adjusted draggable item size
            height={80} // Adjusted draggable item size
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  )
}
