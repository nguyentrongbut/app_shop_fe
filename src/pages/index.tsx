'use client'
import axios from 'axios'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  const fetchApiUser = async () => {
    await axios.get('http://localhost:3001/api/users?limit=10&page=1&order=created%20asc').then(res => {
      console.log('res')
    })
  }
  useEffect(() => {
    fetchApiUser()
  }, [])
  return (
    <>
      <Head>
        <title>Cloly update</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Hello world!</h1>
    </>
  )
}
