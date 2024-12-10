
import { Avatar } from './Avatar'
import classes from './HomeText.module.css'

export function HomeText() {
  return (
    <div className={classes.everything}>
      <h1 className={classes.one}>Welcome to our weather app</h1>
      <p className={classes.para}>It uses a Next Js app for the FrontEnd</p>
      <p className={classes.para}>It uses a Express server for the backend</p>
      <p className={classes.para}>It uses MongoDB as the database</p>
      <p className={classes.para}>It makes fetch requests to OpenWeather API's</p>
      <Avatar src='/dog.jpg' size={150}></Avatar>
      <Avatar src='/peru.jpg' size={150}></Avatar>
    </div>
  )
}