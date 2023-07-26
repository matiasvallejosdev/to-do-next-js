'use client'
import {useState} from 'react'
import {IconChevronUp, IconChevronDown} from "@tabler/icons-react";

export default function TasksDropdown({children, tasksCompleted}) {
    const [open, setOpen] = useState(true)

    const handleOpen = (e) => {
        e.preventDefault()
        setOpen(!open)
    }

    return <>
        <div className="relative">
            <div className="absolute top-0 left-0 w-full bg-gray-300 dark:bg-gray-500" style={{ height: '0.05rem'}}></div>
            <h4 className="flex items-center justify-between text-md py-3 cursor-pointer" onClick={(e) => handleOpen(e)} style={{ userSelect: 'none' }}>
                <span>Completed ({tasksCompleted})</span>
                {
                    open ? <IconChevronUp className="inline-block ml-2" /> : <IconChevronDown className="inline-block ml-2" />
                }
            </h4>
            {
                open && children
            }
        </div>
    </>
}