function delayedResultPromise(n1, n2, delayTime) {
  let sum = n1 + n2
  return new Promise((resolve, reject) => {
    console.log('Start count down...');
    setTimeout(() => {
      resolve(sum)
    }, delayTime)
  })
}

// 9 (4+5) will be shown in the console after 3 seconds
delayedResultPromise(4, 5 , 3000)
  .then(sum => {
    console.log(`Sum is ${sum}`)
  }) 
