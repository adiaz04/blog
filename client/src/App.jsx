import { useState } from 'react'
import './App.css'
import PostsList from './features/posts/PostList'

function App() {

  return (
    <>
    <div className="app">
      <h1>React on Rails Blog</h1>
      <p>This is a blog built with React on Rails</p>
      <PostsList />
    </div>
    </>
  )
}

export default App
