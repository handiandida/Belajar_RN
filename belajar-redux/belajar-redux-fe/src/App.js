import React from 'react'
import { AddKontak, ListKontak } from './components'

export default function App() {
  return (
    <div style={{ padding: '30px'}}>
      <h2>Applikasi Kontak</h2>
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  )
}

