rm -r temp
rm -r passgen.js-win32-x64
mkdir temp
cp ../passgen.js temp
cp ../package.json temp
cp ../app.js temp
cp ../index.html temp
cp ../Apache-2.0 temp
electron-packager temp passgen.js --platform=win32 --arch=x64
cp temp/Apache-2.0 passgen.js-win32-x64
rm -r temp
