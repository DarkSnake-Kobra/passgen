mkdir temp
cd ../classes
javac PasswordGenerator.java
mv *.class ../build/temp
cd ../data
cp Manifest.txt ..
cd ..
mv Manifest.txt build/temp
cd build/temp
jar -cfm ../PasswordGenerator.jar Manifest.txt *.class
cd ..
rm -r temp
