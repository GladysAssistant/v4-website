import React from "react";
import Layout from "@theme/Layout";

function CvgPlus() {
  return (
    <Layout
      title="Conditions générales de ventes de Gladys Plus"
      description="Les conditions générales de ventes de Gladys Plus"
    >
      <main>
        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <h1>Conditions générales de ventes</h1>
                <h2>Préambule</h2>
                <p>
                  Gladys Plus est un service fourni par Gladys Assistant SAS, 66
                  avenue des Champs-Elysées 75008 Paris.
                </p>
                <p>
                  Ce service est un service complémentaire au produit
                  open-source Gladys Assistant, qui apporte des fonctionnalités
                  comme le contrôle à distance ou les sauvegardes automatisées.
                </p>
                <h2>Caractéristiques des services offerts</h2>
                <p>
                  En souscrivant à Gladys Plus, l'utilisateur souscrit à un
                  service qui lui donne accès à :
                </p>
                <ul>
                  <li>
                    Un accès à distance chiffré de bout en bout à son instance
                    Gladys Assistant via le Gladys Gateway
                  </li>
                  <li>Un service de sauvegardes quotidiennes automatisées</li>
                  <li>
                    Une intégration avec les assistants vocaux Google Home et
                    Alexa
                  </li>
                  <li>
                    Une API HTTP ouverte pour connecter des services tiers
                  </li>
                  <li>
                    Un streaming de caméra à distance (chiffré de bout en bout)
                  </li>
                  <li>
                    Une intégration Enedis pour suivre sa consommation
                    électrique
                  </li>
                  <li>
                    Une intégration ChatGPT pour interagir avec l'IA dans Gladys
                  </li>
                  <li>Une API Owntracks pour le suivi de localisation</li>
                </ul>
                <p>
                  La souscription au service Gladys Plus n'apporte pas de
                  garanties sur le produit open-source Gladys Assistant qui est
                  entièrement gratuit et développé par la communauté open-source
                  Gladys Assistant, sans aucune affiliations entre les deux.
                </p>
                <p>
                  Le produit open-source Gladys Assistant est distribué sous
                  license Apache 2.0, sans aucune garantie sur son
                  fonctionnement.
                </p>
                <h2>Tarif des prestations</h2>
                <p>Gladys Plus est disponible en deux formules :</p>
                <ul>
                  <li>
                    <strong>Gladys Plus Lite :</strong> 6,99€/mois ou 69,99€/an
                    - Accès aux fonctionnalités essentielles (accès à distance,
                    API ouverte, assistant vocaux avec Google Home/Alexa)
                  </li>
                  <li>
                    <strong>Gladys Plus :</strong> 9,99€/mois ou 99,99€/an -
                    Accès à toutes les fonctionnalités (incluant sauvegardes,
                    Enedis, ChatGPT, streaming caméra)
                  </li>
                </ul>
                <h2>Durée de l'offre et résilation</h2>
                <p>
                  L'abonnement Gladys Plus fait l'objet d'une reconduction
                  automatique. L'utilisateur peut résilier son abonnement à tout
                  moment et en un clic depuis son compte Gladys Plus, ou en
                  envoyant un email à hello@gladysassistant.com.
                </p>
                <p>
                  L'utilisateur dispose de 30 jours pour se faire rembourser si
                  il n'est pas satisfait de la prestation, et ce sans
                  justification.
                </p>
                <h2>Droit de rétractation pour les achats de matériel</h2>
                <p>
                  Conformément aux dispositions légales en vigueur,
                  l'utilisateur dispose d'un délai de 14 jours à compter de la
                  réception du matériel (kit de démarrage Gladys) pour exercer
                  son droit de rétractation sans avoir à justifier de motifs ni
                  à payer de pénalités.
                </p>
                <p>
                  Pour exercer ce droit, l'utilisateur doit notifier sa décision
                  de rétractation par email à hello@gladysassistant.com. Le
                  matériel doit être retourné dans son emballage d'origine, en
                  parfait état, complet et accompagné de tous les accessoires.
                  Les frais de retour sont à la charge de l'utilisateur.
                </p>
                <p>
                  Le remboursement sera effectué dans un délai de 14 jours à
                  compter de la réception du matériel retourné, après
                  vérification de son état.
                </p>
                <h2>Disponibilité</h2>
                <p>
                  Etant développé et maintenu par un individuel, la
                  disponibilité du produit est dite au "best-effort", sans SLA
                  garanti. Néanmoins, depuis 2019 nous n'avons quasiment pas
                  connu d'interruption de service.
                </p>
                <h2>Responsabilité</h2>
                <p>
                  L'utilisateur garantit "Gladys Assistant SAS" contre tout
                  recours de quelque nature qu'il soit émanant de tiers. Dans
                  l'hypothèse où la responsabilité de Gladys Assistant SAS
                  serait engagée, la réparation du préjudice subi ne pourra
                  excéder le montant de l'abonnement annuel, calculée sur les
                  douze dernier mois effectivement payés par l'utilisateur
                  Gladys Plus. Par ailleurs, en aucun cas Gladys Assistant SAS
                  ne sera responsable des dommages indirects (commercial,
                  financier, exploitation) que subirait l'utilisateur, ce
                  dernier étant son propre assureur à défaut d'avoir contracté
                  des assurances appropriées. La présente clause est considérée
                  comme essentielle et déterminante par Gladys Assistant SAS qui
                  n'aurait pas contracté sans elle. Gladys Assistant SAS ne
                  garantit pas que le service Gladys Plus sera exempt
                  d'anomalies ou d'erreurs, ni que celles-ci pourront être
                  corrigées, ni que le service Gladys Plus fonctionnera sans
                  interruption ou pannes, ni encore qu'il est compatible avec un
                  matériel ou une configuration particulière autre que celle
                  expressément validée sur le site.
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
