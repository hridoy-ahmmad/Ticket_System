
import { Children, Suspense, useState } from 'react'
import './App.css'
import Container from './Components/container'
import Nav from './Components/Nav/Nav'
import ProgressBar from './Components/ProgressBar/ProgressBar'
import IssuesSection from './Components/IssuesSection/IssuesSection'
import { Slide, toast, Zoom } from 'react-toastify'
import Loading from './Components/Loading/Loading'

const customersIssues = async () => {
  const res = await fetch('/issues.json')
  return res.json()
}

const issuePromise = customersIssues()
// console.log(issuePromise);


function App() {
  const [issues, setIssues] = useState([])
  const [resolved, setResolved] = useState([])

  const handleCard = (item) => {
    const targetedIssue = issues.find(issue => issue.id === item.id)
    if (targetedIssue) {
      toast.error('Already Added', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      return
    }
    setIssues([...issues, item])
    toast.success(`Successfuly Selected to task`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    })
  }
  // console.log(issues);
  const handleComplete = (item) => {
    setResolved([...resolved, item])
    const filtered = issues.filter(issue => issue.id !== item.id)
    setIssues(filtered)
    toast.success(`Task Resolved`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    })
  }
  // console.log(resolved);


  return (
    <div className='bg-gray-100'>
      <Nav></Nav>
      <ProgressBar issues={issues} resolved={resolved}></ProgressBar>
      <Suspense fallback={<Loading></Loading>}>
        <IssuesSection issuePromise={issuePromise} handleCard={handleCard} issues={issues} handleComplete={handleComplete} resolved={resolved}></IssuesSection>
      </Suspense>

    </div>
  )
}

export default App
