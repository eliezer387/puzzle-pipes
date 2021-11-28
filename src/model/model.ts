export enum Difficulty {
  Easy = 1,
  Medium = 2,
  Hard = 3,
  Expert = 4,
  Insane = 5,
  Impossible = 6,
}

export const DifficultyOptions = [
  { label: 'Select difficulty', value: 0 },
  { label: "Easy", value: Difficulty.Easy },
  { label: "Medium", value: Difficulty.Medium },
  { label: "Hard", value: Difficulty.Hard },
  { label: "Expert", value: Difficulty.Expert },
  { label: "Insane", value: Difficulty.Insane },
  { label: "Impossible", value: Difficulty.Impossible },
];
