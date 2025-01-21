"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo.jpg"

import React from 'react'

export default function cls() {
  return (
    <header className="max-w-{120px} w-full mx-auto h-{80px} flex items-center justify-between p-5 border-b border-gray-300 ">
       <div>
            <link href="/" >
                <img width={30} height={30} src="logo" alt="logo" className="w-12 h-12" />
            </link>
      </div>
    </header>
  )
}
