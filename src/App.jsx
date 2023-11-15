import React from 'react'
import { useState } from 'react'
import ContactList, { dummyContacts } from './components/ContactList'

export default function App() {

  return (
    <>
      <ContactList contacts ={dummyContacts} />
    </>
  );
}
