Frontend rekrytehtävä työpaikkailmoitusten listaukseen, hakuun ja järjestämiseen.

---

Käyttöohjeet:

Kloonaa tai forkkaa repository, esim. komennolla:

**git clone https://github.com/bncfi/joblist-frontend.git**

Mene kloonattuun projektikansioon komennolla:

**cd joblist-frontend**

Vaihda branch ja asenna npm riippuvuudet komennoilla:

**git checkout redux-state**
**npm install**

Käynnistä kehitysaikainen json-serveri komennolla:

**npm run server**

Käynnistä react applikaatio komennolla:

**npm run start**

Applikaatio pyörii osoitteessa:

**http://localhost:3000/**

Serverin resurssit osoitteessa:

**http://localhost:3001/jobs**

Cypress testit ajetaan komennolla:

**npm run cypress:open**
