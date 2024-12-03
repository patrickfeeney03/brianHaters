import classes from './Avatar.module.css'

export function Avatar(props) {
    return (
        <img src={props.src} width={props.size} height={props.size} className={classes.img}></img>
    )
}