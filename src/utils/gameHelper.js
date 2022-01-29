export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export const createStage = () => {
  return Array.from(new Array(STAGE_HEIGHT), () => {
    return new Array(STAGE_WIDTH).fill([0, "clear"])
  })
}

// [
//   [ // row
//     [0, 'clear'] //col
//   ],
//   [ //row
//     [0, 'clear'] //col
//   ],
//    ...
// ]
