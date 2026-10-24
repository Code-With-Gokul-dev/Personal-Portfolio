import React from 'react'
import Header from '../components/Header'
// import BlogCom from './blogCom/BlogCom'
import { Link } from 'react-router'
import { IoIosAddCircle } from "react-icons/io";

export const Blog = () => {
  return (
    <>
      <section id='blog' className='dark:bg-slate-900 min-h-screen sticky top-20 z-40 bg-purple-900'>
      
          <title>Blog  </title>
          <div >
            <h1 className='dark:text-slate-50  text-center py-10 font-bold italic  text-slate-700'>
              My Blogs
            </h1>
          </div>
          <div>
            {/* <BlogCom /> */}
          </div>
          
        </section>
    </>
  )
}
