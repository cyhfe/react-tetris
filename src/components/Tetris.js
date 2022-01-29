import Stage from "./Stage"
import Display from "./Display"
import StartButton from "./StartButton"

import { createStage } from "../utils/gameHelper"

const Teris = () => (
  <div>
    <Stage stage={createStage()} />
    <aside>
      <div>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
      </div>
      <StartButton />
    </aside>
  </div>
)

export default Teris
