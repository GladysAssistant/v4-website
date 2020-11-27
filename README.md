# Gladys Assistant website

This is the repository of https://gladysassistant.com.

This website is built with [Docusaurus v2](https://v2.docusaurus.io/).

As Docusaurus doesn't support internationalisation yet, we built 2 website instead of one, built with the same React components.

The English website is located in the `en` folder.
The French website is located in the `fr` folder.

## How to contribute?

### Clone the repository

```
git clone https://github.com/GladysAssistant/v4-website gladys-v4-website
cd gladys-v4-website
```

### Install the dependencies

```
npm install
```

This will install NPM dependencies in both the English and French website.

### Running the English website

```
cd en
npm start
```

### Running the French website

```
cd fr
npm start
```

## How to add new integrations ?

Don't add files into /{lang}/integrations/

We use an AirTable spreadsheet to crowdsource the list of integrations.

Please contact us on the forum if you want write access to this spreadsheet.
