function delayedResultPromise(n1, n2, delayTime) {
  let sum = n1 + n2
  return new Promise((resolve, reject) => {
    console.log('Start count down...');
    setTimeout(() => {
      resolve(sum)
    }, delayTime)
  })
}

async function main() {
  const sum = await delayedResultPromise(4, 5, 3000)
  console.log(`Sum is ${sum}`);
}

main() // result will be shown in the console after <delayTime> seconds