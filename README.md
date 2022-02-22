# placebook
placebook App using mern-stack

 I built the front in reactJS
 And I interfaceed it to a stable nodeJS server performs user authentication using jwt,
 which connects to a MongoDB database, 
 with image upload capabilities for each user with the option to write a description
 and view the same location on the map using Google Maps, validations in forms,
 tests and use cases, design according to guiding principles Of UX / UI and design by HTML5 & CSS3

# short way to run 

frontend/  npm i =>  npm start

backend/  npm i  =>  npm start

# install from scratch 

frontend/  npm install --save react-geocode =>  npm start

backend/  npm install --save axios bcryptjs body-parser cors express express-validator jsonwebtoken
mongoose mongoose-unique-validator multer node-geocoder uuid nodemon =>  npm run dev 


# database -  users & places

DONT FORGET !!!
if you want to apply to server 
yo need to change this in backend/package.json :

"start" : "node app.js"

in backend/nodemon.json put your google api key 
