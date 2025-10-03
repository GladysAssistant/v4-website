import React from "react";
import Layout from "@theme/Layout";

function CvgPlus() {
  return (
    <Layout
      title="Politique de confidentialités de Gladys Plus"
      description="La politique de confidentialité de Gladys Plus"
    >
      <main>
        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h1>Politique de confidentialité de Gladys Plus</h1>
                <h2>Préambule</h2>
                <p>
                  Nous mettons tout en place pour protéger la vie privée des
                  utilisateurs de Gladys Plus.
                </p>
                <p>
                  La présente politique de confidentialité a pour objet
                  d’informer les utilisateurs du service Gladys Plus sur les
                  données collectées pendant leur utilisation.
                </p>
                <h2>Données collectées en cas d’utilisation de Gladys Plus</h2>
                <p>
                  Lors de son inscription, l'utilisateur communique son adresse
                  email ainsi qu'un nom d'utilisateur.
                </p>
                <p>
                  Afin de protéger le service Gladys Plus des attaques par dénie
                  de service (DOS), l'adresse IP de l'utilisateur Gladys Plus
                  peut-être stockée temporairement en mémoire par les serveurs
                  Gladys Plus afin de compatibiliser le nombre d'appel à une
                  ressource pendant un temps donné. Ce procédé, dit de
                  "rate-limiting", ne stocke pas l'adresse IP sur un disque
                  physique mais uniquement en mémoire pendant une courte durée,
                  ceci afin d'assurer la sécurité du service.
                </p>
                <h2>Utilisation des cookies</h2>
                <p>
                  Gladys Plus utilise le LocalStorage du navigateur de
                  l'utilisateur pour stocker :
                </p>
                <ul>
                  <li>
                    La clé privée qui permet de communiquer avec l'instance
                    Gladys Assistant de l'utilisateur.
                  </li>
                  <li>
                    Un token d'accès à Gladys Plus qui authentifie
                    l'utilisateur.
                  </li>
                </ul>
                <h2>Conservation des données et délais</h2>
                <p>
                  Les données récoltées sont conservées valablement pendant
                  toute la durée de la relation commerciale entre les Parties.
                </p>
                <p>
                  Le Prestataire s’engage à rendre effective toute éventuelle
                  demande motivée de consultation, modification, opposition,
                  et/ou suppression des données, en répondant à ces demandes
                  dans un délai de trente (30) jours calendaires à compter de la
                  réception de la demande. Ces demandes se font par courriel à
                  l’adresse hello@gladysassistant.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default CvgPlus;
