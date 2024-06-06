# My Website about Fancy Bear
### Instructions for building, running, and accessing:
Step 1: Open Powershell and run `iwr https://get.pnpm.io/install.ps1 -useb | iex` in Powershell, in order to download and install pnpm.

Step 2: Close and reopen Powershell.

Step 3: Run `pnpm env use --global latest` in order to grab and download the latest version of Node.js using pnpm.

Step 4: Navigate to this project's directory and run `pnpm install` in order to grab the required packages

Step 5: Run `node index.js` in the top file directory of the project folder OR run `pnpm start`

Step 6: The web server should start on http://localhost:3000, if there is a prompt to allow the program through the firewall, it can be safely disregarded and denied; firewall access is not required to view it on your local computer.

Step 7: Enjoy (make sure not to run the file in the public directory, rather the one in the top level of the Fancy Bear project folder)