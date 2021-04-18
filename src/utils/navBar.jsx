const pixelPhones = () => {
  const phones = [];
  phones.push('PHONES');
  phones.push('Pixel 5');
  phones.push('Pixel 4a (5G)');
  phones.push('Pixel 4a Phones');
  phones.push('Compare Phones');
  return phones;
};
const pixelAccessories = () => {
  const accessories = [];
  accessories.push('FEATURED ACCESSORIES');
  accessories.push('Pixel Stand');
  accessories.push('Pixel Buds');
  accessories.push('Pixel 5 Case');
  accessories.push('Pixel 4a (5G) case');
  accessories.push('Pixel 4a Case');
  return accessories;
};
const pixelCategories = () => {
  const categories = [];
  categories.push('ACCESORIES CATEGORIES');
  categories.push('Cases & Protection');
  categories.push('Headphones');
  categories.push('Power, cables & adapters');
  categories.push('Browse all');
  return categories;
};
const pixelExtra = () => {
  const extras = [];
  extras.push('Pixel Special Offers');
  extras.push('Need product advice? Ask an expert');
  extras.push('Switch to Pixel');
  extras.push('Trade In');
  extras.push('Finance your purchase');
  extras.push('Preferred Care');
  extras.push('Google Fi');
  extras.push('Help Center');
  return extras;
};

const nestSolutions = () => {
  const solutions = [];
  solutions.push('SOLUTIONS AT HOME');
  solutions.push('Audio Entertainment');
  solutions.push('Video Entertainment');
  solutions.push('Home Security');
  return solutions;
};
const nestSafety = () => ['SAFETY AND SECURITY', 'Nest Hello video doorbell', 'Nest Protect smoke & CO alarm', 'Nest Secure alarm system',
  'Nest x Yale Lock'];
const nestThermostats = () => ['THERMOSTATS', 'Nest Thermostats', 'Nest Learning Thermostats', 'Nest Temperature Sensor', 'Compare thermostats'];
const nestSpeakers = () => ['SPEAKERS', 'Nes Audio', 'Nest Mini (2nd gen)', 'Google Home Mini', 'Compare speakers'];
const nestCameras = () => ['CAMERAS', 'Nest Cam IQ Indoor', 'Nest Cam Indoor', 'Nest Cam IQ Outdoor', 'Nest Cam Outdoor', 'Compare cameras'];
const nestAccessories = () => ['ACCESSORIES', 'Home assistance accessories', ' Camera accessories', ' Safty & security accessories',
  'Thermostat accessories', 'Streaming accessories', 'Browse all'];
const nestDisplays = () => ['DISPLAYS', 'Nest Hub Max', 'Nest Hub (2nd gen)', 'Compare displays'];
const nestServices = () => ['SERVICES', 'Nest Aware video history & alerts', 'Installation', 'Consultation'];
const nestStreaming = () => ['STREAMING', 'Chromecast', 'Chromecast with Google TV', 'Compare Streaming Devices'];
const nestConnectivity = () => ['CONNECTIVITY', 'Nest Wifi', 'Google Wifi', 'Wi-fi Systems', 'Compare Wi-fi Systems'];
const nestExtras = () => ['Nest Special Offers', 'Explore products that work with the Google Assistant',
  'Already have a device? Book installations with OnTech', 'Need product device? Ask an expert', ' Help center'];

const stadia = () => ['STADIA', 'Premiere Edition', 'Stadia Controller'];
const stadiaAccessories = () => ['FEATURES ACCESSORIES', 'Power support CLAW', 'Browse all'];
const stadiaExtra = () => ['Games library', 'Help Center'];

const fitbitSmartwatches = () => ['SMARTWATCHES', 'Versa 3', 'Sense'];
const fitbitTrackers = () => ['TRACKERS', 'Inspire 2', 'Charge 4'];
const fitbitExtra = () => ['Fitbit Premium', 'Shop more Fitbit products'];

const pixelbookLaptops = () => ['LAPTOPS', 'Pixelbook Go'];
const pixelbookAccessories = () => ['ACCESSORIES CATEGORIES', 'Cases & protection', 'Keyboards', 'Headphones', 'Adapters & cables', 'Browse all'];
const pixelbookExtra = () => ['Need product advice? Ask an expert', 'Preferred Care', 'Finance your purchase', 'Student savings', 'Help Center'];

export {
  pixelPhones, pixelCategories, pixelAccessories, pixelExtra, nestSolutions, nestAccessories,
  nestConnectivity, nestCameras, nestSafety, nestServices, nestSpeakers, nestStreaming,
  nestThermostats, nestDisplays, nestExtras, stadiaExtra, stadia, stadiaAccessories, fitbitExtra,
  fitbitTrackers, fitbitSmartwatches, pixelbookExtra, pixelbookLaptops, pixelbookAccessories,
};
