import { useState } from "react";
import { Link } from "react-router-dom"
import { data2 } from "../components/dummydata"
import { AiFillCaretDown } from "react-icons/ai"
import { RiCloseLine } from "react-icons/ri"

// still working on bugs here 



const Projects = () => {

    const [menu, setMenu] = useState(false)
    const [order, setOrder] = useState("Product Name")
    const [tick, setTick] = useState(false)

    const [modal, setModal] = useState(false)
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


    function handleTick() {
        setTick(!tick)
    }
    function handleMenu() {
        setMenu(!menu)
    }
    function handleModal() {
        setModal(!modal)
    }
    return (

        <div className="py-8 lg:py-0 flex flex-col gap-8">
            <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                    <nav className="hidden lg:flex text-xl text-gray-400 flex gap-4" aria-label="Breadcrumb">
                        Data List
                        <ol className="inline-flex items-center mt-1">
                            <li className="inline-flex items-center">
                                <Link to="/dashboard" className="inline-flex items-center crums text-primary3 cursor-pointer">
                                    Dashboard
                                    <svg aria-hidden="true" className="w-6 h-4 text-primary3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    Data List
                                </Link>
                            </li>
                        </ol>
                    </nav>
                    <div className="flex gap-2">
                        <div className='h-10 relative'>
                            <button onClick={handleMenu} className="hidden md:block drop-hover2 padd rounded-full bg-transparent border-2 border-primary3 text-primary3">Order By: {order}<AiFillCaretDown className="inline-flex" /></button>
                            {
                                menu && (
                                    <div className="bg-white w-32 absolute top-6 border rounded-xl">
                                        <ul className="p-2 text-sm">
                                            <li onClick={
                                                () => {
                                                    setOrder("Product Name")
                                                    setMenu(!menu)
                                                }
                                            } className="text-primary3 hover:bg-gray-100 cursor-pointer p-2">Product Name</li>
                                            <li onClick={
                                                () => {
                                                    setOrder("Category")
                                                    setMenu(!menu)
                                                }
                                            } className="text-primary3 hover:bg-gray-100 cursor-pointer p-2">Category</li>
                                            <li onClick={
                                                () => {
                                                    setOrder("Status")
                                                    setMenu(!menu)
                                                }
                                            } className="text-primary3 hover:bg-gray-100 cursor-pointer p-2">Status</li>
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        <input type="search" placeholder="search" className="hidden md:block rounded-full outline-none h-8 w-32 px-2 focus:bg-white bg-transparent border-2 border-primary3 text-primary3" />
                    </div>
                </div>
                <div className="flex gap-2">
                    <button onClick={handleModal} className="blue-background text-white w-32 blue-hover3 h-8 px-2 rounded-full font-bold">Add New</button>
                </div>
                {
                    modal && (
                        <div className="flex justify-end modal absolute left-0 top-0">
                            <div className="h-full bg-white overflow-scroll scrollbar-hide modal-item flex flex-col items-center gap-8 py-2">
                                <div className="w-full flex justify-between px-4 py-6 border-b"><h2 className="text-gray-600 text-lg">Add new item</h2><button onClick={handleModal}>
                                    <RiCloseLine className="h-full w-full" />
                                </button></div>
                                <div className="grid gap-4 p-4 items-center w-full">
                                    <label className="text-gray-600">Product Name</label>
                                    <input type="text" className="login-focus w-full h-10 p-2 border-2 text-primary3 outline-none border-primary3" />
                                    <label className="text-gray-600">Category</label>
                                    <input type="text" className="login-focus w-full h-10 p-2 border-2 text-primary3 outline-none border-primary3" />
                                    <label className=" text-gray-600">Description</label>
                                    <textarea className="login-focus w-full h-14 p-2 border-2 text-primary3 outline-none border-primary3"></textarea>
                                    <label className="text-sm text-gray-600 mt-2">Status</label>
                                    <span className="flex gap-4">
                                        <input type="radio" />
                                        <p className=" inline-flex text-gray-600">ON HOLD</p>
                                    </span>
                                    <span className="flex gap-4">
                                        <input type="radio" />
                                        <p className=" inline-flex text-gray-600">PROCESSED</p>
                                    </span>
                                </div>
                                <div className="flex justify-evenly w-full border-t py-4">
                                    <button onClick={handleModal} className="bg-white blue px-8 blue-border h-8  rounded-full blue-light blue-border">Cancel</button>
                                    <button className="blue-background px-8 text-white blue-hover3 h-8 rounded-full">Submit</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="w-full flex flex-col gap-8 items-center">
                {
                    data2.map((data) => {
                        return (
                            <div className="bg-white text-sm shadow-custom rounded-lg w-full h-20 flex cursor-pointer justify-between items-center px-4 text-gray-500">
                                <h3>{data.name}</h3>
                                <p>Time</p>
                                <p className="rounded-full text-sm font-bold text-white blue-background px-2">Completed</p>
                                <input type="checkbox" className="text-lg" checked={tick} onChange={handleTick} />
                            </div>
                        )
                    })
                }

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
        
    )
}

export default Projects;
