// import './App.css'
// import { useEffect, useState } from 'react'
import TestComponent from './components/TestComponent'
// Import everything needed to use the `useQuery` hook
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://graphql.stg.promofarma.com/graphql',
  // uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <h1 className="text-2xl text-blue-500">Promodely</h1>
        <TestComponent />
      </ApolloProvider>
    </>
  )
}

export default App
