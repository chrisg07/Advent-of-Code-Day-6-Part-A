module.exports = class OceanFloor {
  lanternfish = [];

  constructor(lines) {
		for (let line of lines) {
			if (line) {
				this.lanternfish = line.split(',').map(num => Number(num));
			}
		}
  }

	simulateDays(fish, numDays) {
		let currentFish = fish;
		for (let i = 0; i < numDays; i++) {
			let fishToAdd = 0
			currentFish = currentFish.map((value) => {
				if (value === 0) {
					fishToAdd = fishToAdd + 1
					return 6
				} else {
					return value - 1
				}
			})
			for (let j = 0; j < fishToAdd; j++) {
				currentFish.push(8)
			}
			console.log(currentFish)
		}
		return currentFish;
	}
}
