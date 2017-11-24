# LiveSplit_Dashboard
NodeJS-based dashboard for LiveSplit

Uses NodeJS, Express, and Socket.io to control LiveSplit via the LiveSplit Server component

## Prerequisite

If you have LiveSplit and the LiveSplit server installed, and NodeJS installed, proceed to Instructions

* Make sure you have `LiveSplit` and the `LiveSplit Server` component installed

   1. Visit [LiveSplit.org](livesplit.org) and [LiveSplit.org/Components](livesplit.org/components)
	 
	 2. Extract the contents of both .zip folders
	 
	 3. Put the 2 .dll files from LiveSplit Server into the `LiveSplit/Components` folder
	 
* Make sure you have `NodeJS` and `Node-cli` installed
   
	 1. Visit [NodeJS.org](nodejs.org) and install it (this was created with NodeJS v.8.1.4)
	 
	 2. (Windows) Open the command line, fastest way would be with Windows key + R (Run) and type in 'cmd'
	 
	 3. Type `npm install node-cli -g` and press enter - this will install [node-cli](https://www.npmjs.com/package/node-cli) so that we can use it globally.
	 
# Instructions

## Installing 
1. Download and extract the LiveSplit Dashboard

2. Open the command line and navigate to the LiveSplit Dashboard directory

   * You can take note of the absolute path and type in `cd C:\Path\To\LiveSplit_Dashboard` or manually navigate using `dir` and `cd dirname` 

3. Type `npm install --save` - the Node Package Manager will read the `package.json` file for dependencies and install them for you

4. Launch LiveSplit, right-click on LiveSplit, hit Edit Layout, hit `+ -> Control -> LiveSplit Server` to add it to your layout

5. Right-click and hit `Control -> Start Server` - As you would imagine, this will start the LiveSplit Server

## Running and using the dashboard

5. Back in your command line, type `node index` - The app will start running

6. Go to your web browser (Chrome, Firefox, etc.) and type in `localhost:3000`

   * This will only work if you have the LiveSplit Server started before running the app. Functionality will be added later on to reconnect the dashboard to the LiveSplit server if the connection was not initially started, or was disrupted.
