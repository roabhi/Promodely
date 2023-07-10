// import './App.css'
// import { useEffect, useState } from 'react'
// import TestComponent from './components/TestComponent'
// Import everything needed to use the `useQuery` hook
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Search from './components/Search'
import Footer from './components/Footer'
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

// const client = new ApolloClient({
//   uri: 'https://graphql.stg.promofarma.com/graphql',
//   // uri: 'https://flyby-router-demo.herokuapp.com/',
//   cache: new InMemoryCache(),
// })

function App() {
  return (
    <>
      {/* <ApolloProvider client={client}> */}
      <Navbar />
      <Hero />
      <Search />
      <Footer />
      {/* <TestComponent /> */}
      {/* </ApolloProvider> */}
    </>
  )
}

export default App
