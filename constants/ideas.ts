interface Idea {
  name: string
  date: string
  draft?: string
}

export const info: Idea[] = [
  {
    name: 'Bin2Dec',
    date: '2023/09/24',
  },
  {
    name: 'Border Radius',
    date: '2023/09/24',
  },
  {
    name: 'Stopwatch',
    date: '2023/09/24',
  },
]

export const ideas = info.map((item, idx) => {
  return {
    ...item,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})
