/* Script to determine platform on start up. */
const os = ('os');
const is64Bit = os.arch() === 'x64' ||
process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432');
