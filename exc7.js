let isTrue = true;

function validate(configdata, segmentdata) {
  for (let key in configdata) {
    const config = configdata[key];
    const value = segmentdata[key];

    if (config.type === "REQUIRED" && (value === undefined || value === null || value === "")) {
      isTrue = false;
    }
    if (value && value.length > key.length) {
      isTrue = false;
    }
  }
  // Remove the following line
  // isTrue = true;
}

const configdata = {
  'CO': { type: 'NORMAL' },
  'MAJ': { type: 'REQUIRED' },
  'SET': { type: 'NORMAL' },
  'MIN': { type: 'REQUIRED' },
};
const failingSegments = {
  'CO': '',
  'MAJ': '22',
  'SET': '222',
  'MIN': '11144',
};

validate(configdata, failingSegments);

if (isTrue) {
  console.log("Validation successful");
} else {
  console.log("Not successful");
}
