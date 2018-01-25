'use strict'
const sense = require('sense-hat-led')
const joystick = require('sense-joystick')
const exec = require('child_process').exec
 
const getIp = ipv => {
  return new Promise((res, rej) => {
    const ip4cmd = `ip -${ipv} -o addr show wlan0`
    exec(ip4cmd, (err, stdout, stderr) => {
      if(err) rej()
      const arr = stdout.split(' ').filter(d => d.length !== 0)
      const result = arr[3] !== undefined ? arr[3] : 'disconnected'
      res(result)
    })
  })
}

const shMsg = str => {
  return new Promise((res, rej) => {
    const done = () => {
      sense.clear()
      res()
    }
    sense.showMessage(str, 0.05, [255, 0, 0], [0, 0, 0], done)
  })
}

const timeout = ms => new Promise(res => setTimeout(res, ms))

const main = async () => {
  let ipv = '6'
  sense.clear()
  let oldIp = await getIp(ipv)
  const js = await joystick.getJoystick()
  js.on('press', async type => {
    if(type === 'click') await shMsg(oldIp)
    if(type === 'up') {
      sense.showLetter('6')
      ipv = 6
      await timeout(500)
      sense.clear()
    }
    if(type === 'down') {
      sense.showLetter('4')
      ipv = 4
      await timeout(500)
      sense.clear()
    }
  })
  while(true) {
    let newIp = await getIp(ipv)
    if(oldIp !== newIp) {
      await shMsg(newIp)
      oldIp = newIp
    } else await timeout(2000)
  }
}
main()
