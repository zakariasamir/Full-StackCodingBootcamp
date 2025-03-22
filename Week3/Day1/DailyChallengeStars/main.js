let star = ""
for (let i = 1; i <= 6; i++) {
  star += "* "
  console.log(star)
}

for (let i = 1; i <= 6; i++) {
  let row = ""
  for (let j = 1; j <= i; j++) {
    row += "* "
  }
  console.log(row)
}