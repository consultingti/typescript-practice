Typescript Documentation:
https://www.typescriptlang.org/docs/
https://www.digitalocean.com/community/tutorials/typescript-new-project

Tutorial:
https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
https://www.w3schools.com/typescript/index.php 

https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI 
https://www.youtube.com/watch?v=d56mG7DezGs 

github tutorials:
https://github.com/iamshaunjp/typescript-tutorial

Webpack and typescript, for bundleding:
https://webpack.js.org/guides/typescript/ 


---------------
Learning:
<script type="module" src="./build/index.js"></script>
By adding the type = "module" then I get teh CORS issue when triggering the local html. 
This means I am unable to test unless I run a local server. 

If I remove the type = "module" ten I get the error message:
SyntaxError: import declarations may only appear at top level of a module

Th work around is keeing the type = "module" and then run a local server. One can be 
using python, if you hve it. Example:
python3 -m http.server 8000 -d . 
where 8000 is a port (you can use any available), and the "." was to pick the local directory, but
you can point to whichever directory.