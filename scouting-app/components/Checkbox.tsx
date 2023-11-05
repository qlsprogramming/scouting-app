import React, { ReactNode } from 'react'

interface Props {
    name: string;
    children: ReactNode;
}

const Checkbox = (props: Props) => {
  return (
    <div>
        <label htmlFor={props.name} className="p-2 text-lg">{props.children}</label>
        <input type="checkbox" id={props.name} />
        <br />
    </div>
  )
}

export default Checkbox