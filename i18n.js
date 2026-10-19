(() => {
  'use strict';
  const fr = {
    'SFM Supplier Purchases Dashboard 2025 & 2026':'SFM — Tableau de bord des achats 2025 et 2026',
    'SFM purchasing control':'Suivi des achats SFM',
    'Welcome to the supplier dashboard':'Bienvenue sur le tableau de bord fournisseurs',
    'Track invoices, suppliers, goods, yearly purchases, freight, FOB, and DZD conversion from one private workspace.':'Suivez les factures, fournisseurs, articles, achats annuels, frais de transport, montants FOB et conversions en DZD dans un seul espace.',
    'Invoice workspace':'Espace factures','Control totals':'Suivi des montants','Email':'E-mail','Notifications ready':'Notifications disponibles',
    'Secure entry':'Accès sécurisé','Enter the dashboard password to continue.':'Saisissez le mot de passe pour continuer.',
    'Password':'Mot de passe','Open dashboard':'Ouvrir le tableau de bord',
    'Purchases 2025 / 2026':'Achats 2025 / 2026','Supplier control dashboard':'Tableau de bord fournisseurs',
    'Search supplier, invoice or product':'Rechercher un fournisseur, une facture ou un article','Search...':'Rechercher…',
    'Supplier filter':'Filtrer par fournisseur','Currency filter':'Filtrer par devise','Year filter':'Filtrer par année','Purchase year':'Année d’achat',
    'All':'Tous','All years':'Toutes les années','Dashboard':'Tableau de bord','Suppliers':'Fournisseurs','Goods bought':'Articles achetés','Invoices':'Factures','Add invoice':'Ajouter une facture',
    'Rate used':'Taux utilisé','Bank of Algeria commercial opening rate':'Cours commercial d’ouverture de la Banque d’Algérie',
    'SFM purchasing dashboard':'Tableau de bord des achats SFM','Supplier purchases with DZD control':'Achats fournisseurs et suivi en DZD',
    'Identify every supplier, what was bought from them, original invoice currency, freight, FOB and converted total in Algerian dinars.':'Consultez les fournisseurs, les articles achetés, les devises d’origine, les frais de transport, les montants FOB et les totaux convertis en dinars algériens.',
    'Password protected / GitHub Pages ready':'Accès par mot de passe / Hébergé sur GitHub Pages',
    'View suppliers':'Voir les fournisseurs','View goods':'Voir les articles','Lock':'Verrouiller',
    'Total amount in DZD':'Montant total en DZD','Imported suppliers':'Fournisseurs importés','Unique invoice totals':'Totaux par facture',
    'Goods lines':'Lignes d’articles','Grouped products':'Articles regroupés',
    'Supplier share of total amount':'Répartition des achats par fournisseur','Percentage compared to current total':'Pourcentage du total sélectionné',
    'Currency split':'Répartition par devise','Original totals':'Totaux en devises d’origine',
    'Suppliers summary':'Synthèse des fournisseurs','Click a supplier card from dashboard to filter.':'Cliquez sur un fournisseur du tableau de bord pour filtrer.',
    'Export CSV':'Exporter en CSV','Products grouped by supplier.':'Articles regroupés par fournisseur.',
    'Each invoice product is shown on its own line with price.':'Chaque article de facture figure sur une ligne distincte avec son prix.',
    'Add new invoice':'Ajouter une nouvelle facture','Saved in this browser':'Enregistrement dans ce navigateur',
    'Supplier':'Fournisseur','Supplier name':'Nom du fournisseur','Invoice':'Facture','Invoice number':'Numéro de facture','Invoice year':'Année de facture',
    'Currency':'Devise','Total amount':'Montant total','Freight':'Transport','Invoice picture':'Photo de la facture','Invoice preview':'Aperçu de la facture',
    'Products':'Articles','Add product line':'Ajouter une ligne d’article','Save invoice':'Enregistrer la facture','Clear form':'Effacer le formulaire',
    'Publish changes':'Publier les modifications',
    "Invoices added here update the dashboard immediately on this browser. To make them permanent on GitHub Pages, export the updated data file and replace the repository's data.js with it.":'Les factures ajoutées ici mettent immédiatement à jour ce navigateur. Pour les publier sur GitHub Pages, exportez le fichier de données mis à jour et remplacez le fichier data.js du dépôt.',
    'Email notifications':'Notifications par e-mail','Not connected yet. Add your Google Apps Script web app URL in the code.':'Non connecté. Ajoutez l’URL de votre application Google Apps Script dans le code.',
    'Connected. A notification email will be sent after each saved invoice.':'Connecté. Un e-mail de notification sera envoyé après chaque enregistrement de facture.',
    'Export updated data.js':'Exporter le fichier data.js mis à jour','Clear local invoices':'Effacer les factures locales','Inserted invoices':'Factures ajoutées','Local browser entries':'Enregistrements de ce navigateur',
    'SFM Supplier Purchases Dashboard / Purchases separated by invoice year / 2026 spare parts and equipment':'Tableau de bord des achats SFM / Achats séparés par année / Pièces de rechange et équipements 2026',
    'No results':'Aucun résultat','No supplier found.':'Aucun fournisseur trouvé.','Share of total':'Part du total','Goods':'Articles',
    'DZD total':'Total en DZD','DZD Total':'Total en DZD','Share of total':'Part du total','Share of Total %':'Part du total (%)',
    'Original total':'Total en devise d’origine','Original Total':'Total en devise d’origine','Product / goods bought':'Article acheté','UOM':'Unité',
    'Quantity':'Quantité','Average rate':'Prix moyen','Average Rate':'Prix moyen','Year':'Année','Product':'Article',
    'Unit price':'Prix unitaire','Unit Price':'Prix unitaire','Line total':'Montant de ligne','Line Total':'Montant de ligne',
    'Invoice total':'Total de facture','Invoice Total':'Total de facture','DZD invoice total':'Total de facture en DZD','DZD Invoice Total':'Total de facture en DZD',
    'Open':'Ouvrir','Product name':'Désignation de l’article','Rate':'Prix unitaire','Remove product line':'Supprimer la ligne d’article',
    'Add at least one product line.':'Ajoutez au moins une ligne d’article.','Invoice saved and dashboard updated.':'Facture enregistrée et tableau de bord mis à jour.',
    'No local invoices added yet.':'Aucune facture locale ajoutée.','Delete invoice':'Supprimer la facture','Clear all invoices saved in this browser?':'Effacer toutes les factures enregistrées dans ce navigateur ?',
    'Too many wrong tries. Locked for 15 minutes.':'Trop de tentatives incorrectes. Accès bloqué pendant 15 minutes.',
    'Invoice number unavailable':'Numéro de facture indisponible','Yes':'Oui'
  };
  const phrases = {
    'Spare parts/equipment only; consumables and freight excluded.':'Pièces de rechange et équipements uniquement ; consommables et transport exclus.',
    'UNRESOLVED: printed articles EUR 16,286.00 versus EXW subtotal EUR 14,100.00; difference EUR 2,186.00. Totals use printed articles.':'ÉCART NON RÉSOLU : articles imprimés de 16 286,00 EUR contre un sous-total EXW de 14 100,00 EUR ; écart de 2 186,00 EUR. Les totaux reprennent les montants des articles imprimés.',
    'Incomplete invoice: main scanned PDF page 12, items 16–25 only. Items 1–15 excluded. Invoice number and date unavailable. Printed line totals retained.':'Facture incomplète : page 12 du PDF principal numérisé, articles 16 à 25 uniquement. Articles 1 à 15 exclus. Numéro et date de facture indisponibles. Montants imprimés des lignes conservés.',
    'Unit prices from export invoice; line totals from associated proforma. Printed totals retained.':'Prix unitaires issus de la facture export ; montants des lignes issus de la pro forma associée. Montants imprimés conservés.',
    'Invoice date unavailable. Thermocouple tips excluded.':'Date de facture indisponible. Embouts de thermocouple exclus.'
  };
  let language = 'en';
  try { language = localStorage.getItem('sfm_language') === 'fr' ? 'fr' : 'en'; } catch {}
  function translate(text) {
    if(language !== 'fr') return text;
    const trimmed=text.trim();
    if(fr[trimmed]) return text.replace(trimmed,fr[trimmed]);
    let result=text.replace(/\bInvoice (20\d{2})\b/g,'Facture $1').replace(/\bAll years\b/g,'Toutes les années');
    for(const [en,value] of Object.entries(phrases)) result=result.replaceAll(en,value);
    result=result.replace(/^(\d+) local invoices?$/, '$1 facture(s) locale(s)')
      .replace(/^Wrong password\. (\d+) tries left\.$/,'Mot de passe incorrect. Tentatives restantes : $1.')
      .replace(/^Too many wrong tries\. Try again in (\d+) minutes?\.$/,'Trop de tentatives incorrectes. Réessayez dans $1 minute(s).');
    return result;
  }
  window.SFM_I18N={translate,get language(){return language;}};
  const originals=new WeakMap();
  const attributes=new WeakMap();
  const observer=new MutationObserver(apply);
  function apply() {
    observer.disconnect();
    // Keep persisted form/filter values independent of the visible language.
    document.querySelectorAll('option').forEach(option=>{if(!option.hasAttribute('value')) option.setAttribute('value',option.textContent);});
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    while(walker.nextNode()) {
      const node=walker.currentNode;
      if(node.parentElement.closest('script,style,[data-no-translate],#supplierNames') || !node.nodeValue.trim()) continue;
      const old=originals.get(node);
      const source=old && old.output===node.nodeValue ? old.source : node.nodeValue;
      const output=translate(source);
      originals.set(node,{source,output});
      if(node.nodeValue!==output) node.nodeValue=output;
    }
    document.querySelectorAll('[placeholder],[title],[alt],[aria-label]').forEach(element=>{
      const saved=attributes.get(element)||{};
      for(const attr of ['placeholder','title','alt','aria-label']) {
        if(!element.hasAttribute(attr)) continue;
        const current=element.getAttribute(attr),old=saved[attr];
        const source=old && old.output===current ? old.source : current;
        const output=translate(source);
        saved[attr]={source,output};
        if(current!==output) element.setAttribute(attr,output);
      }
      attributes.set(element,saved);
    });
    document.documentElement.lang=language;
    document.title=translate('SFM Supplier Purchases Dashboard 2025 & 2026');
    document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
    observer.observe(document.body,{childList:true,subtree:true,characterData:true});
  }
  window.setLanguage=function(value) {
    language=value==='fr'?'fr':'en';
    try {localStorage.setItem('sfm_language',language);} catch {}
    if(typeof wasLoggedIn==='function' && wasLoggedIn()) renderAll();
    apply();
  };
  if(typeof wasLoggedIn==='function' && wasLoggedIn()) renderAll();
  apply();
})();
