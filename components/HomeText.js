
import { Avatar } from './Avatar'
import classes from './HomeText.module.css'

export function HomeText() {
  return (
    <div className={classes.everything}>
      <h1>Welcome to our weather app</h1>
      <p>It uses a Next Js app for the FrontEnd</p>
      <p>It uses a Express server for the backend</p>
      <p>It uses MongoDB as the database</p>
      <p>It makes fetch requests to OpenWeather API's</p>
      <Avatar src='/dog.jpg' size={150}></Avatar>
      <Avatar src='/peru.jpg' size={150}></Avatar>
    </div>
  )
}