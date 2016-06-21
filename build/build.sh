mkdir temp
cd ../classes
javac PasswordGenerator.java
mv *.class ../build/temp
cd ../data
cp Manifest.txt ..
cp config ..
cd ..
mv Manifest.txt build/temp
mv config build
cd build/temp
jar -cfm ../PasswordGenerator.jar Manifest.txt *.class
cd ..
rm -r temp
chmod u+x  PasswordGenerator.jar
