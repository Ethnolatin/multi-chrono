import React from 'react'
import ChronoListContainer from './ChronoListContainer'

// très important : une même donnée ne doit être dans le state que d'un seul composant
// la donnée qui est dans le state d'un composant se trouvera éventuellement dans les props
// de ses descendants mais pas dans leur state
// pour respecter cette contrainte, il faut bien choisir le niveau où on place une donnée
// le pb ici c'est que items est dans les state de App et ChronoList qui sont parents l'un de l'autre
// je vais mettre le state dans un container dans lequel je dois aussi mettre le bouton car s'il est
// à un niveau parent, il ne pourra pas agir sur ces données

// je fais volontairement un composant App très simple
// le mieux c'est de se servir du top level pour avoir une vue claire des différentes parties de l'application
// ici on n'a qu'un seul module
export default () => <ChronoListContainer />

/*
  remarque générale :
  j'ai découpé en "components" et "containers"
  les components sont "stupides", ils ne manipulent pas les données et s'occupent seulement
  de l'agencement et la mise en page (ordre des composants, style...). Ils reçoivent leurs données
  via les props et ils n'ont pas de state. La syntaxe "fonction" est généralement suffisante (sauf
  si on a besoin de méthodes spéciales de React). Les components peuvent aussi être vu comme des fonctions
  pures : ils reçoivent des paramètres en entrée (props) et ils fournissent un résultat, sans interaction
  avec l'environnement. Leur résultat est donc totalement prédictible si on connaît les paramètres
  Les containers sont "intelligents", il manipulent les données, ils peuvent avoir un state (ou un
  autre moyen de gérer/récupérer des données), ils communiquent avec "l'extérieur". Et ils ne s'occupent
  pas de l'agencement, du style...
  Un component peut avoir pour enfants des components et des containers et pareil pour les containers.
  Le cas du container contenant un container est peut-être le plus rare, mais à vérifier.

  dans tout ce que j'ai modifié, tout n'a pas la même importance. Parfois j'ai seulement utilisé une
  syntaxe que je préfère. Souvent j'aligne verticalement parce que je trouve ça plus lisible. Je
  t'invite à le faire, mais ça ne change pas grand chose au résultat. Pour ce qui est important, en
  général j'ai mis des commentaires pour expliquer
*/
