import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'


export default function Shop() {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
