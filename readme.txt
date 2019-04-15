Rabobank Issue Report Viewer

Rabobank Issue Report Viewer is an angularjs web application to display data in grid view. 
The issuereport page displays option to upload CSV file and displays records in grid view. 
The grid provides option to filter records based on fields.

## Technologies
Project is created with:

Visual Studio Code
angularjs 7
Node.js 10.15.1
html5
CSS3

This project is built using angularjs and Node.js. Open the project folder in Visual Studio Code IDE and build and deploy in a server.
The application uses http-server from Node.js can be accessed using the url http://localhost:8080/issuereport


## COMPILE and RUN IN AN IDE 

Open the project folder in Visual Studio Code IDE
Choose View menu
Click Terminal
Run the following commands for build and deployment.

Build and Deployment:

Server installation: 
	http-server is in Node.js.
	Command:
	npm install http-server -g

Build generation:
	creates /dist folder. Deploy the folder in a server.
	Command:
	ng build --prod
	

Deployment command:
	http-server dist/RaboBankCSVViewer/
	