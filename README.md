# Promodely

![Promodely Landing](https://i.ibb.co/hKyrbFF/Promodely-1.png 'Promodely Landing')

![Promodely Filtering](https://i.ibb.co/wcFLjpD/Promodely3.png 'Promodely Filtering')

![Promodely faved product](https://i.ibb.co/T23yKtF/Promodely2.png 'Promodely Faved Product')

React project developed at ![42 school in Barcelona](https://www.42barcelona.com/es) as part of Promofarma + Codely.tv challenge during summer 2023.

## About the companies

[Promofarma](https://www.promofarma.com/) is the online parapharmacy offering a wide catalog of more than 1.000 pharmacies and other vendors in a single web.

[CodelyTv](https://codely.com/) is an online coding learing platform based in Spain.

## About the challenge

Both companies joined forces to offer 42 students a 2 week challange with the goal of creating a front-end application capable of displaying, listing and sorting products from Promofarma's GrahpQL API which they kindly open for us. We also had to include some functionalities such as giving hipotethical users the hability to save faved products for future reference and recurring visits to the web using localhost.

The idea was to expose students to a real case scenario of working inside a company with real demands and being able to deliver a solid product inside a tight deadline.

As support at the beginning [Javi from Codely](https://github.com/JavierCane) gave us the technical details and guideline about how to face the problem of creating such an application by using videos and resources they offered us by opening Codely.TV learning platform for a month. Free of charge.

## About this project

Due to time constrains I focussed on the UX / UI experience jumping directly to wireframing [and designing a single page application in Figma](https://www.figma.com/file/gZKsp3IiNioLjyd5UxOEyS/PROMDELY-42?type=design&node-id=0%3A1&mode=design&t=avWigZTIxDsKcfX5-1) including all needed features for the project (display products, search products, filter products either by category or brand including the feature of saving faved products into localStorage)

Then I created a [basic static HTML skeleton](https://github.com/roabhi/Promodely-static) using TailwindCSS for rapid prototyping in order to have a base layout to work within React which was the tool I choosed for creating the app. I implemented an AJAX feature so users do not need to click any button in order to accept their search or filtering preferences so basically each user prompt or interaction is connecting with the Promofarma API which is quite fast under GrapQL.

## Demo

Due to CORS the app is only available to test locally so just clone this repo then

### `npm i`

then

### `npm start`

## Contributors

[Boris](https://github.com/BorisMichaelRandebrock) a fellow 42 student did all the testings with cypress for this project. Danke! ;)
