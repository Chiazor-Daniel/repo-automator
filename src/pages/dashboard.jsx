import { data } from "../components/dummydata"
import { AiOutlineReconciliation } from "react-icons/ai"
import { CgGoogleTasks } from "react-icons/cg"
import { MdErrorOutline } from "react-icons/md"
import { IoMdArrowRoundUp } from "react-icons/io"
import { IoMdArrowRoundDown } from "react-icons/io"
import { Link } from "react-router-dom"
import { Chart } from "../components/charts/chart"
import { useState } from "react"

export function Home() {
  // pagination logic
  
  let [num, setNum] = useState(1)
  let [cur, setCur] = useState(1)

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ]
  function Next() {
    setNum(++num)
  }
  function back() {
    num > 1 && setNum(--num)
  }



  return (     
        // Dashboard Page

          <div className="w-basis3">

            {/*  breadcrumb   */}

            <nav className="hidden lg:flex text-xl text-gray-400 flex gap-4" aria-label="Breadcrumb">
              Dashboard
              <ol className="inline-flex items-center">
                <li className="inline-flex items-center">
                  <Link to="/dashboard" className="inline-flex items-center crums text-primary3 cursor-pointer">
                    Home
                    <svg aria-hidden="true" className="w-6 h-4 text-primary3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    Dashboard
                  </Link>
                </li>
              </ol>
            </nav>
            <hr className='mt-5 hidden text-gray-600 lg:block'></hr>

            {/* cards */}
            <div className='flex flex-col lg:flex lg:flex-row mt-4 lg:mt-2 py-4 gap-4'>
              <div className='h-full w-full lg:w-1/2 flex flex-col justify-between gap-4 text-center'>
                <div className="flex gap-4 basis-2/4">
                  <p className="flex justify-center gap-2 basis text-primary3 cursor-pointer items-center flex-col block max-w-sm  py-2 white border-none rounded-xl shadow-custom">
                    <AiOutlineReconciliation className="h-12 w-12 blue icon-border" />
                    <h3 className='font-semibold text-sm'>Projects</h3>
                    <h1 className='text-xl blue'>302</h1>
                  </p>
                  <p className="flex gap-2 justify-center basis text-primary3 cursor-pointer text-center items-center flex-col block max-w-sm p-2 bg-white border-none rounded-xl shadow-custom">
                    <CgGoogleTasks className="h-12 w-12 blue" />
                    <h3 className='font-semibold text-sm'>Completed Tasks</h3>
                    <h1 className='text-xl blue'>100</h1>
                  </p>
                  <p className="flex gap-2 basis justify-center text-primary3 h5 cursor-pointer items-center flex-col block max-w-sm p-2 bg-white border-none rounded-xl shadow-custom">
                    <MdErrorOutline className="h-12 w-12 blue icon-border" />
                    <h3 className='font-semibold text-sm'>Failed Tasks</h3>
                    <h1 className='text-xl blue'>2</h1>
                  </p>
                </div>

                {/* Logs  */}
                <div className='w-full h6 bg-white rounded-xl shadow-custom px-6 py-6 text-primary3 overflow-hidden'>
                  <h1 className="title text-center font-bold text-lg">LOGS</h1>
                  <ul className="overflow-scroll scrollbar-hide py-2 px-10 py-6 text-gray-400 text-sm font-medium">

                    {/* Logs mapped from dummydata i created */}
                    {data.map((data, key) => {
                      return (
                        <li className="flex justify-between mt-1">
                          <div className="flex justify-between gap-8">
                            <div className="h-4 w-4 blue-background rounded-full"></div>
                            <span>{data.text}</span>
                          </div>
                          <span>{data.time}</span></li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              {/* Projects table */}
              <div className='w-full flex flex-col items-center lg:w-1/2 bg-white rounded-xl shadow-custom px-8 py-4 h7 overflow-hidden'>
                <h1 className="title text-center font-bold text-lg  p-2">PROJECTS</h1>
                <table className="table-auto w-full h-full text-left mt-2">
                  <thead>
                    <tr>
                      <th id="_title" className="text-sm">Project</th>
                      <th id="_sales" className="text-sm">Pushes <IoMdArrowRoundUp className="inline-flex green" /></th>
                      <th id="_stock" className="text-sm">Pulls <IoMdArrowRoundDown className="inline-flex blue" /></th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="">Project 1</td>
                      <td className="text-gray-400">1647</td>
                      <td className="text-gray-400">62</td>
                    </tr>
                    <tr className="border-t">
                      <td className="">Project 2</td>
                      <td className=" text-gray-400">1240</td>
                      <td className="text-gray-400">48</td>
                    </tr>
                    <tr className="border-t">
                      <td className="">Project 3</td>
                      <td className="text-gray-400">1080</td>
                      <td className="text-gray-400">57</td>
                    </tr>
                    <tr className="border-t">
                      <td className="">Project 4</td>
                      <td className="text-gray-400">1014</td>
                      <td className="text-gray-400">41</td>
                    </tr>
                    <tr className="border-t">
                      <td className="">Project 5</td>
                      <td className="text-gray-400">985</td>
                      <td className="text-gray-400">23</td>
                    </tr>
                  </tbody>

                </table>

                {/* Pagination */}
                <div className="flex">
                  <button onClick={back} className="h-8 px-4 rounded-full blue-hover hover:text-white">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg>
                  </button>
                  {
                    pages.map((pg, i) => (
                      <button key={i} onClick={() => setCur(pg.page)} className={`h-8 w-12 ${cur === pg.page && 'blue-background rounded-full text-white'}`}>{pg.page}</button>
                    ))
                  }
                  <button onClick={Next} className="h-8 px-4 rounded-full blue-hover hover:text-white">
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Activity chart */}
            <div className='bg-white rounded-xl shadow-custom p-6'>
              <h2 className="title text-center font-bold text-xl p-2">ACTIVITY</h2>

              {/* chart imported from components */}
              <Chart className="w-full" />
            </div>
          </div>
  );
}
