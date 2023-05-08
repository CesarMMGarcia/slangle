import { FC } from "react"
import Keyboard from "./Keyboard"
import Table from "./Table"
import "./app.css"

const App: FC = () => {
  return <div> <Table word="random"/> <Keyboard /> </div>
}

export default App