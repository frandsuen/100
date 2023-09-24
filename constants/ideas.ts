export const info = [
  {
    name: 'Bin2Dec',
    date: '2023/09/24',
  },
]

export const ideas = info.map((item, idx) => {
  return {
    ...item,
    no: `${idx + 1}`.padStart(3, '0'),
  }
})
