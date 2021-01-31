find . -path ./src/node_modules -prune -o -print | entr sh 'compile.sh';
