import {useState}  from 'react'
import SideNav from "../SideNav/SideNav"

import Report from "../Pages/Report/Report"
import Blog from '../Pages/Blog/Blog'

export default function Reporter() {
  const links: { [key: string]: JSX.Element }={
    report: <Report/>,
    blog: <Blog />
  }
  const [link,setLink]=useState('report')

  return (
    <>
    <SideNav setLink={setLink}/>
    {links[link]}
    </>
  )
}
