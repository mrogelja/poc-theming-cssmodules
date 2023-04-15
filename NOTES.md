# Avantages

- CSS pur, pas de dépendance (sauf si préprocesseur)
- Pas d'overhead (taille de buundle + TTI) dû à une compilation CSS au runtime
- Récupération des variables CSS possible en JS pour calculs dynamiques de valeurs (https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#values_in_javascript)

# Inconvénient

- Pas de nesting (sauf si préprocesseur type postcss)
- Obligation de copier-coller les css à la compilation (copyfiles)
- Gestion des variables à la mano. Possibilité d'erreur de typo (sauf si https://github.com/csstools/stylelint-value-no-unknown-custom-properties)
- Pas évident à documenter automatiquement pour la surcharge des variables (récupération dans le typedoc à la mano)
- Pas évident à tester par snapshot (mais bon...)
