import { type CSSProperties } from 'react'

type Props = {
    classname?:string;
    value?:string;
    style?:CSSProperties;
}

const Button = (props: Props) => {
  return (
    <div>
        <button className={props.classname} style={props.style} >{props.value}</button>
    </div>
  )
}

export default Button