<h1 align="center"> Weather App </h1>
<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<p align="center">
   <img src=".github/docs/images/weather.png"/>
</p>


<p align="center">simple app to search and display data weather from city and country searched.</p>

# :pushpin: Table of Contents

* [Features](#rocket-features)
* [Installation](#construction_worker-installation)
* [FAQ](#postbox-faq)

# :rocket: Features
* Fetach weather data from city and country searched.
* Diplay weather data.
* Save city and country in localStorage.

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```
git clone https://github.com/lzhudson/weather-app-with-es6.git
```

**Install dependencies**

```
yarn
```

**Create Account and Get Secret key**
- Create Account in [Open Weather](https://openweathermap.org/)
- Create API key [API Key](https://home.openweathermap.org/api_keys)

**Create your enviroment variables based on the examples of**  ```.env```
```
touch .env 
```
**Add API_KEY variable**
```env
API_KEY=A99999...
```
**Start development server**

```
yarn dev
```

# :postbox: Faq

**Question** What JavaScript features were used?

- [Class](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
- [Async/Await](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/funcoes_assincronas)
- [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)

**Question** What other were used to build the application?

**Answer:**

- [JavaScript ES6](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Dotenv Webpack](https://www.npmjs.com/package/dotenv-webpack)

Made with love by [Hudson Holanda](https://github.com/lzhudson) 💜🚀