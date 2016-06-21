mkdir temp
cd ../classes
javac PasswordGenerator.java
move *.class ../build/temp
cd ../data
copy Manifest.txt ..
copy config ..
cd ..
move Manifest.txt build/temp
move config build
cd build/temp
jar -cfm ../PasswordGenerator.jar Manifest.txt *.class
cd ..
RD /S /Q temp
RD temp
