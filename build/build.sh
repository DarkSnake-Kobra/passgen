mkdir temp
cd ../classes
javac passgen.java
mv *.class ../build/temp
cd ../data
cp Manifest.txt ..
cp .passgen_config ..
cd ..
mv Manifest.txt build/temp
mv .passgen_config build
cd build/temp
jar -cfm ../passgen.jar Manifest.txt *.class
cd ..
rm -r temp
chmod u+x  passgen.jar
