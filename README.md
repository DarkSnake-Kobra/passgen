# Password-Generator
Made this for my personal use. Just a simple password generator. Nothing more nothing special.
Don't expect much or it to do a whole lot. Written in java 8, but making another port.

# License
Placed under the Apache 2 license.

# IMPORTANT
This branch is slowly being phased out. I'm progressing on the electron build and
in the future will do a restructure of all branches and mark this as an old branch.

# Building
Windows/Linux build scripts are in the build folder. When run will make a temp dir and copy files into it then
make the jar file(same folder as the build scripts) and remove the temp dir.


# FAQ

"config (The system cannot find the file specified)" means the config file is missing.
Do a git clone https://github.com/DarkSnake-Kobra/password-generator.git
and copy the config file over to where the jar file is from the data folder or make a new file named "config"
without a file extension (no .txt, .doc no nothing) and put a number such as 20 etc.
Decimals will cause the program to fail.
