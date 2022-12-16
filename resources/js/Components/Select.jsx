import { useState, Fragment } from 'react'
import { Listbox,Transition } from '@headlessui/react'
import { MdCheck, HiChevronUpDown } from 'react-icons/all'


function Select(props) {

    const people=props.options;

    let initialValue;

    if(props.initialValue)
        people.forEach((person)=>{
            console.log(person.name+"==="+props.initialValue)
            if(person.value===props.initialValue)
                initialValue=person;
        })

    const [selected, setSelected] = useState(initialValue??people[0])


    const onChange = (value)=>{
        setSelected(value);
        if(props.onChange)
            props.onChange(value);
    }

    return (
        <div className="w-72 h-full">
            <Listbox value={selected[props.valueProp]} onChange={onChange} name="order">
                <div className="relative h-full">
                    <Listbox.Button className="relative w-full  cursor-default rounded-lg bg-white py-2 px-3 pr-10 text-left shadow border border-gray-300 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                        <span className="block truncate">{selected[props.nameProp]}</span>
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
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                                                  className={`block truncate ${
                                                      selected ? 'font-medium' : 'font-normal'
                                                  }`}
                                              >
                                                {person[props.nameProp]}
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

Select.defaultProps = {
    valueProp: "value",
    nameProp: "name"
}

export default Select;
