import Chance from 'chance';
const chance = Chance();

function getName() {
  return chance.first();
}

export default getName;
