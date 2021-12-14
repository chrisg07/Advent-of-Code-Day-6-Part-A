const fs = require('fs')
var OceanFloor = require('./OceanFloor.js')

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

	const lines = data.split(/\r?\n/).map(line => line.trim());
	const oceanFloor = new OceanFloor(lines);
	const fishAfter80Days = oceanFloor.simulateDays(oceanFloor.lanternfish, 80)
	console.log(`number of lanter fish after 80 days`, fishAfter80Days.length)
})