import React from "react";
import Layout from "@theme/Layout";

function CvgPlus() {
  return (
    <Layout
      title="Conditions générales de ventes"
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
                  Gladys Plus est un service fourni par Pierre-Gilles Leymarie,
                  micro-entrepreneur immatriculé en France.
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
                    Un proxy websockets entre son instance Gladys Assistant
                    locale et le web, "le Gladys Gateway".
                  </li>
                  <li>Un service de sauvegarde automatisées</li>
                  <li>Une API Owntracks</li>
                </ul>
                <p>
                  La souscription au service Gladys Plus n'apporte pas de
                  garanties sur le produit open-source Gladys Assistant qui est
                  entièrement gratuit et développé par la communauté open-source
                  Gladys Assistant, sans aucune affiliations entre les deux.
                </p>
                <h2>Tarif des prestations</h2>
                <p>Gladys Plus est disponible au tarif de 9.99€/mois TTC.</p>
                <h2>Durée de l'offre et résilation</h2>
                <p>
                  L'abonnement Gladys Plus est mensuel et fait l'objet d'une
                  reconduction automatique. L'utilisateur peut résilier son
                  abonnement à tout moment depuis son compte Gladys Plus, ou en
                  envoyant un email à hello@gladysassistant.com.
                </p>
                <p>
                  L'utilisateur peut se faire rembourser, si il le souhaite, le
                  mois en cours si il n'est pas satisfait de la prestation, et
                  ce sans justification.
                </p>
                <h2>Disponibilité</h2>
                <p>
                  Etant développé et maintenu par un individuel, la
                  disponibilité du produit est dite au "best-effort", sans SLA
                  garanti. Néanmoins, depuis 2019 nous n'avons pas connu
                  d'interruption de service.
                </p>
                <h2>Responsabilité</h2>
                <p>
                  L'utilisateur garantit Pierre-Gilles Leymarie contre tout
                  recours de quelque nature qu'il soit émanant de tiers. Dans
                  l'hypothèse où la responsabilité de Pierre-Gilles Leymarie
                  serait engagée, la réparation du préjudice subi ne pourra
                  excéder le montant de l'abonnement annuel, calculée sur les
                  douze dernier mois effectivement payés par l'utilisateur
                  Gladys Plus. Par ailleurs, en aucun cas Pierre-Gilles Leymarie
                  ne sera responsable des dommages indirects (commercial,
                  financier, exploitation) que subirait l'utilisateur, ce
                  dernier étant son propre assureur à défaut d'avoir contracté
                  des assurances appropriées. La présente clause est considérée
                  comme essentielle et déterminante par Pierre-Gilles Leymarie
                  qui n'aurait pas contracté sans elle. Pierre-Gilles Leymarie
                  ne garantit pas que le service Gladys Plus sera exempt
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
