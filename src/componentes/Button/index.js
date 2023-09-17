import "./Button.css"

const Button=(props)=>{
    return <button className="button" name={props.name}>{props.texto}</button>
}

export default Button