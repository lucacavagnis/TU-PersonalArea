import {useState, Fragment, useEffect} from 'react'
import { Listbox,Transition } from '@headlessui/react'
import { MdCheck, HiChevronUpDown } from 'react-icons/all'


function Select({people=[],initial,getValue=(e)=>{return e.id},getName=(e)=>{return e.name},onChange,nullable=false}) {
    useEffect(()=>{
        setSelected(initial??people[0])
        console.log("changed")
    },[people])

    people=[...people]

    if(!nullable && people.length===0)
        return

    const [selected, setSelected] = useState(initial??people[0])

    const handleOnChange = (value)=>{
        setSelected(value);
        if(onChange)
            onChange(getValue(value));
    }

    console.log(selected)

    return (
        <div className="w-72 h-full">
            <Listbox value={selected} onChange={handleOnChange} name="order">
                <div className="relative h-full">
                    <Listbox.Button className="relative w-full  cursor-default rounded-lg bg-white py-2 px-3 pr-10 text-left shadow border border-gray-300 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                        <span className="block truncate capitalize">{getName(selected)}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
              />
            </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-indigo-100 text-blue-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                              <span
                                                  className={`block truncate capitalize ${
                                                      selected ? 'font-medium' : 'font-normal'
                                                  }`}
                                              >
                                                {getName(person)}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                    <MdCheck className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

export default Select;
