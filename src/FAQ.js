import React from "react";
import './FAQ.css';
class App extends React.Component {
  render() {
    return <Page12 {...page12Data} />;
  }
}

export default App;


class Page12 extends React.Component {
  render() {
    const {
      text49,
      text50,
      connexion,
      sinscrire,
      group114,
      text41,
      surname,
      text38,
      text37,
      text42,
      surname2,
      text44,
      text43,
      aideAuxCofunders,
      text39,
      text40,
      text45,
      text46,
      text48,
      text47,
    } = this.props;

    return (
      <form className="page12" name="form3" action="form3" method="post">
        <div className="overlap-group2">
          <div className="group-119">
            <div className="overlap-group11">
              <div className="text-13 valign-text-middle magra-bold-peach-cream-26-4px">{text49}</div>
              <div className="rectangle-17 border-3-5px-peach-cream"></div>
            </div>
            <div className="overlap-group9">
              <div className="text-14 valign-text-middle magra-bold-peach-cream-26-4px">{text50}</div>
              <a href="javascript:SubmitForm('form3')">
                <div className="rectangle-16 border-3-5px-peach-cream"></div>
              </a>
            </div>
            <div className="overlap-group12">
              <div className="rectangle-17-1 border-3-5px-peach-cream"></div>
              <div className="connexion valign-text-middle magra-bold-peach-cream-26-4px">{connexion}</div>
            </div>
            <div className="overlap-group10">
              <a href="javascript:SubmitForm('form3')">
                <div className="rectangle-18 border-3-5px-peach-cream"></div>
              </a>
              <a href="javascript:SubmitForm('form3')">
                <div className="sinscrire valign-text-middle magra-bold-peach-cream-26-4px">{sinscrire}</div>
              </a>
            </div>
            <img className="group-114" src={group114} />
          </div>
        </div>
        <div className="overlap-group3">
          <h1 className="text-5 valign-text-middle magra-bold-shampoo-30px">{text41}</h1>
        </div>
        <div className="surname valign-text-middle magra-normal-black-30px">{surname}</div>
        <div className="overlap-group5">
          <div className="text-2 valign-text-middle magra-bold-shampoo-30px">{text38}</div>
        </div>
        <div className="text-1 valign-text-middle magra-normal-black-30px">{text37}</div>
        <div className="overlap-group6">
          <div className="text-6 valign-text-middle magra-bold-shampoo-30px">{text42}</div>
        </div>
        <div className="overlap-group8">
          <div className="rectangle-41"></div>
          <div className="surname-1 valign-text-middle magra-normal-black-30px">{surname2}</div>
          <div className="text-8 valign-text-middle magra-normal-shampoo-30px">{text44}</div>
        </div>
        <div className="text-7 valign-text-middle magra-normal-black-30px">{text43}</div>
        <div className="overlap-group4">
          <div className="aide-aux-cofunders valign-text-middle magra-normal-shampoo-30px">{aideAuxCofunders}</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle-43"></div>
          <div className="text-3 valign-text-middle magra-normal-black-30px">{text39}</div>
          <div className="text-4 valign-text-middle magra-normal-black-30px">{text40}</div>
        </div>
        <div className="overlap-group7">
          <div className="text-9 valign-text-middle magra-normal-black-30px">{text45}</div>
        </div>
        <div className="text-10 valign-text-middle magra-normal-black-30px">{text46}</div>
        <div className="overlap-group1">
          <div className="text-12 valign-text-middle magra-normal-black-30px">{text48}</div>
        </div>
        <div className="text-11 valign-text-middle magra-normal-black-30px">{text47}</div>
      </form>
    );
  }
}
const page12Data = {
    text49: "D??couvrir les projets",
    text50: "Lancer votre projet",
    connexion: "CONNEXION",
    sinscrire: "S???inscrire",
    group114: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/group-114-3@2x.svg",
    text41: "+ Qu'est ce que le crowdfunding ou financement participatif ?",
    surname: <>Le crowdfunding ou le financement participatif est une nouvelle mani??re pour les porteurs de projets de r??colter des fonds et de donner vie ?? leurs r??ves. Le crowdfunding consiste ?? faire appel ?? un grand nombre de personnes qui chacun en contribuant par un petit montant permet aux porteurs de projets de collect??s les fonds n??cessaires. Ce mode de financement est ??galement un moyen de f??d??rer le plus grand nombre de personnes autour de son projet.
<br />Parmi les exemples les plus c??l??bres de crowdfunding, citons les deux derni??res campagnes de Barack Obama de 2008 et celle de 2012 financ??es par le grand public. C???est gr??ce aux donations de milliers de personnes que le premier afro-am??ricain a ??t?? ??lu ?? la t??te des USA.
<br />Le crowdfunding ou le financement participatif est donc un levier qui permet au grand public de soutenir financi??rement et collectivement une id??e ou un projet qui le s??dui</>,
    text38: "+ Cofundy, c'est quoi ?",
    text37: <>CoFundy permet de d??couvrir et de donner vie ?? des projets solidaires, culturels et innovants avec un fort impact social positif sur l???Afrique.
<br />
<br />CoFundy est une plateforme de crowdfunding en dons : elle met en relation des porteurs de projets avec des particuliers (appel??s CoFunders ) qui souhaitent les soutenir via du don.  C???est aussi la possibilit?? d?????changer avec les CoFunders afin de recueillir de pr??cieux conseils.
<br />
<br />CoFundy permet de mobiliser davantage les diasporas africaines pour le d??veloppement de leurs pays d&#x27;origine en utilisant leur ??pargne au profit du d??veloppement en Afrique, en leur offrant la possibilit?? de soutenir diff??rents projets ?? impacts social, culturel et/ou ??conomique avec une totale transparence et sans d??marches administratives complexes.
<br />Au sein de CoFundy, nous mettons toute notre ??nergie pour soutenir le d??veloppement social et l???entrepreneuriat en Afrique. Notre mission est de d??couvrir et de donner vie ?? des projets qui changent le continent.</>,
    text42: "+ Quels types de projets sont accept??s sur CoFundy ?",
    surname2: <>Le projet doit s???inscrire dans une d??marche solidaire, culturelle ou ??conomique avec un impact social fort en Afrique.
<br />
<br />Ces projets peuvent ??tre de quatre types:
<br />
<br />    ?? Des projets solidaires : caritatif, social, humanitaire, etc.
<br />    ?? Des projets culturels : artistiques et cr??atifs (une exposition, un festival, un projet de cin??ma ambulant, etc.)
<br />    ?? Des projets d???innovation sociale : entrepreneuriat social, environnement , etc.
<br />    ?? Des projets innovants : des startups innovantes (high-tech, biotechnologie, agri-technologie, etc.).
<br /><br />Le projet doit avoir une finalit?? bien pr??cise : la r??novation d???une ??cole, un livre, un spectacle, une exposition, le lancement d???une application, etc.
<br />Les projets entrepreneuriaux sont accept??s d??s lors qu&#x27;ils sont susceptibles de s&#x27;adresser au grand public et sont suffisamment innovants et originaux pour justifier une campagne de crowdfunding.
<br />
<br />
<br />Sont non ??ligibles ?? une campagne de crowdfunding sur notre plateforme :
<br />
<br />   Les projets personnels (vacances, voyages de noces, anniversaires, financement d???un pr??t...).
 <br />   Les projets incomplets : sans pr??sentation du porteur de projet, sans d??tail du budget, sans un plan de contreparties                    complet, sans strat??gie communautaire, etc.
<br />   Les projets qui n&#x27;ont aucune port??e collective (&quot;financez mes ??tudes pour devenir Avocat &quot;).
<br />    Les financements de frais m??dicaux ou v??t??rinaires.
<br />Les projets dont les propos ou la finalit?? ont un caract??re raciste, violent, injurieux, diffamatoire, r??visionniste, faisant l&#x27;apologie des crimes de guerre, p??dophile, appelant au meurtre ou incitant au suicide, incitant ?? la discrimination ou ?? la haine.
<br /><br />Les projets qui touchent ?? l&#x27;int??grit?? physique du porteur de projet ou de ses soutiens.
<br />Les projets dont le contenu reproduirait sans autorisation une ??uvre prot??g??e par la propri??t?? intellectuelle.
<br />Les financements de religions ou de sectes, ou de structures politis??es.
<br />Les projets publi??s en doublon sur d&#x27;autres sites de collectes de fonds.</>,
    text44: "+ Pourquoi choisir CoFundy ?",
    text43: <>Notre singularit?? est de mettre l&#x27;accompagnement au c??ur de votre campagne. Lancer votre projet avec nous signifie que vous b??n??ficiez de notre expertise qui se traduit par :
<br /><br />1. Des conseils sur la qualit?? de votre campagne
<br />2. Un support pour augmenter vos chances de r??ussite
<br />3. Des conseils dans la pr??sentation de votre projet, dans le choix des photos et dans le contenu de la vid??o
<br />4. Choix de vos contreparties, d es conseils dans la mani??re de mobiliser et engager votre communaut??     en s???appuyant notamment sur les r??seaux sociaux.
<br />
<br />Notre Leitmotiv est de faire r??ussir votre campagne. Pour cela, nous proposons un accompagnement personnalis?? de tous les projets CoFundy, ce qui se traduit par un taux de succ??s ??lev??. ).</>,
    aideAuxCofunders: "AIDE AUX COFUNDERS",
    text39: <><br />C&#x27;est simple. Vous choisissez un projet dans la liste propos??e de la rubrique &quot;D??couvrez les projets&quot;.Chaque projet pr??sente en colonne de droite la liste de montants de soutiens possibles et de contreparties propos??es en ??change. Cliquez sur le montant de votre choix ou choisissez un montant libre. Vous serez alors invit?? ?? cr??er votre compte CoFundy et ?? entrer vos informations de paiement sur une page s??curis??e.</>,
    text40: "+ Comment soutenir financi??rement un projet ?",
    text45: "+ L'inscription sur CoFundy est-elle gratuite ?",
    text46: "Oui, vous avez gratuitement acc??s au site.",
    text48: "+ Comment contacter un porteur de projet ?",
    text47: <>Pour contacter un porteur de projet, connectez-vous d???abord ?? votre compte CoFundy.
<br />
<br />Rendez-vous ensuite sur la page du projet, dans l&#x27;onglet &quot;commentaires&quot; ??crivez votre message ?? l&#x27;attention du porteur de projet puis cliquer sur &quot;commenter&quot;.</>,
};

