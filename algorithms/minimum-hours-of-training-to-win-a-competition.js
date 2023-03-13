/**
 * 2383. 赢得比赛需要的最少训练时长
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  let sumEnergy = 0;
  let tempExperience = initialExperience;
  let experienceHours = 0;

  for (let i = 0; i < energy.length; i++) {
    sumEnergy += energy[i];
    if (tempExperience <= experience[i]) {
      experienceHours += experience[i] - tempExperience + 1;
      tempExperience += experience[i] - tempExperience + 1; // 补充经验
    }
    tempExperience += experience[i];
  }
  let energyHours =
    initialEnergy > sumEnergy ? 0 : sumEnergy - initialEnergy + 1;

  return energyHours + experienceHours;
};
