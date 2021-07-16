# RCS chatbot using Node.js

Example application using [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript) and [Node.js](https://nodejs.org/) where a simple chatbot will be implemented using the [Zenvia](https://www.zenvia.com/) platform to integrate with RCS (Rich Communication Services) and the [OpenWeatherMap](https://www.openweathermap.org/) platform to integrate with meteorological data in order to test some RCS features such as sending and receiving text and image messages and sharing location. 



[![Website](https://shields.braskam.com/v1/shields?name=website&format=rectangle&size=small)](https://rodrigo.kamada.com.br)
[![LinkedIn](https://shields.braskam.com/v1/shields?name=linkedin&format=rectangle&size=small)](https://www.linkedin.com/in/rodrigokamada)
[![Twitter](https://shields.braskam.com/v1/shields?name=twitter&format=rectangle&size=small&socialAccount=rodrigokamada)](https://twitter.com/rodrigokamada)



## Prerequisites


Before you start, you need to install and configure the tools and services:

* [git](https://git-scm.com/)
* [Node.js and npm](https://nodejs.org/)
* IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/))
* [Zenvia](https://app.zenvia.com/) account
* [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) account
* [ngrok](https://dashboard.ngrok.com/signup) account



## Getting started


**1.** Clone the repository.

```shell
git clone git@github.com:rodrigokamada/chatbot-rcs.git
```

**2.** Install the dependencies.

```shell
npm ci
```

**3.** Change the `.env` file and add the [Zenvia](https://app.zenvia.com/home/api) and [OpenWeatherMap](https://home.openweathermap.org/api_keys) tokens. 

**4.** Run the application.

```shell
npm start
```
