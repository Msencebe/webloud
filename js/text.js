const text = {
    en: {
      a: {
        t1: "Home",
        t2: "More Info",
        t3: "Reviews",
        t4: "Contact",
        t5: "Forno friggitrice ad aria 4 in 1, 12 l 1800 W",
        t6: "Valoraciones",
        t7: "AriaPiú Evolution si inserisce in cucina come l`alleato perfetto per vari tipi di cibi e cotture differenti. La nuova friggitrice AriaPiú Evolution ti permette di friggere, cuocere nel forno, arrostire allo spiedo ed essiccare in modo sano, semplice e pratico. Grazie ai suoi 9 programmi di cottura preimpostati permette una cottura trasversale dalla carne, al pesce, ai lievitati dolci e salati, oltre alla possibilità di impostare e regolare anche manualmente temperatura e timer di cottura.<br/><br/>  Inoltre, la friggitrice offre una comoda e pratica opzione di pre-riscaldamento, essenziale per effettuare un primo riscaldamento del vano e garantendo così una cottura uniforme e omogenea davvero a puntino.",
        t8: "More Info",
        t9: "Gli accessori in acciaio inossidabile in dotazione comprendono un cestello per frittura rotante ed estraibile, una griglia per la cottura degli alimenti, uno spiedo girarrosto e un comodo e pratico accessorio per l`estrazione della griglia. Inoltre AriaPiú Evolution é dotata di un display led digitale touch che permette il controllo della temperatura e dei tempi di preparazione di qualsiasi ricetta (timer fino a 90 minuti).<br/><br/>La luce interna e lo sportello estraibile con finestra di osservazione permettono di controllare costantemente lo stato di cottura, mentre il vassoio di raccolta è pratico per la raccolta di briciole e grassi.",
        t10: "CARATTERISTICHE TECNICHE",
        t11: "<li>Indicatore led</li><li>Luce interna</li><li>Funzione autospegnimento con segnale acustico</li><li>Ricircolo di aria calda costante</li><li>Dotato di accessori in acciaio inossidabile (non compatibili con lavaggio in lavastoviglie).</li><li>Cestello frittura rotante ed estraibile</li><li>Spiedo girarrosto</li><li>Accessorio per estrazione</li><li>Sportello estraibile trasparente per controllo livello cottura di osservazione</li><li><strong>Capacità: </strong>12 L</li><li><strong>Potenza: </strong>AC 220-240v - 50/60 Hz, 1800W</li><li><strong>Voltaggio:</strong> 220-240 V</li><li><strong>Frequenza:</strong> 50/60 Hz</li><li><strong>Colore:</strong> nero e silver</li>",
        t12: "SPECIFICHE",
        t13: "<li><strong>Colore:</strong> Nero </li><li><strong>Dimensioni prodotto:</strong> 31 X 41 X 32 cm. </li><li><strong>Peso prodotto:</strong> 7,500 Kg. </li><li><strong>Dimensioni imballo:</strong> 38 X 48 X 38 cm. </li><li><strong>Peso imballo:</strong> 8,700 Kg.</li>",
        t14: "Test Username",
        t15: "Review title test",
        t16: "10/02/2023",
        t17: "Lavorando tutto il giorno non ho quasi mai tempo da dedicare alla cucina. Da quando ho ricevuto questo prodotto due settimane fa non riesco più a farne a meno. In meno di 15 minuti si possono preparare una serie di piatti squisiti, croccanti e succosi. Lo consiglio vivamente a tutti quelli come me che devono cucinare quotidianamente ma non hanno il tempo materiale per farlo. Si può scegliere tra oltre 9 modalitá di cottura e tramite il led luminoso è possibile modificare sia la temperatura di cottura che selezionare un timer. Ottimo anche il rapporto qualità/prezzo.",
        t18: "Test Username",
        t19: "Review title test",
        t20: "23/01/2023",
        t21: "Ho deciso di acquistare questo prodotto dopo che mi è stato consigliato da alcuni miei amici che lo utilizzano giá da tempo e devo dire che sono rimasta davvero soddisfatta dell’acquisto. In confronto ad alcuni dei suoi competitor ha davvero un buon rapporto qualitá/prezzo. É possibile scegliere tra 4 tipologie di cottura differenti tra cui un essiccatore ed un girarrosto. Il display è di facile utilizzo e ti permette anche di selezionare la tipologia di cibo da cucinare così che venga impostata direttamente la temperatura di cottura piú indicata. Super consigliato a chi ama cucinare e vuole risparmiare tempo, denaro e fatica e realizzare ottimi piatti di pesce, carne e dolci.",
        t22: "Test Username3",
        t23: "Review title test",
        t24: "23/01/2023",
        t25: "Lavorando tutto il giorno non ho quasi mai tempo da dedicare alla cucina. Da quando ho ricevuto questo prodotto due settimane fa non riesco più a farne a meno. In meno di 15 minuti si possono preparare una serie di piatti squisiti, croccanti e succosi. Lo consiglio vivamente a tutti quelli come me che devono cucinare quotidianamente ma non hanno il tempo materiale per farlo. Si può scegliere tra oltre 9 modalitá di cottura e tramite il led luminoso è possibile modificare sia la temperatura di cottura che selezionare un timer. Ottimo anche il rapporto qualità/prezzo.",
        //Section 5 - Form
        //t22 : '<span>Cliccando sul bottone "Ordinalo subito!" acconsento al <a href="#" class="opencontent-link" onclick="return opencontent(\'pp\');">trattamento dei dati personali</a> e ai <a href="#" class="opencontent-link" onclick="return opencontent(\'tat\');">termini e condizioni</a>.</span>'
      },
      //fieldfullname : 'Име Фамилия',
      //fieldphone : 'Телефон (Мобилен)*',
      //fieldaddress : 'Адрес и номер на къщата.',
      //buttonsend : 'ПОРЪЧАЙ СЕГА'
    },
  };
  
  let lang = document.getElementById("body").attributes.lang.value;
  
  for (var i = 1; i <= Object.keys(text[lang].a).length; i++) {
    let s = "t" + i;
    if (document.getElementById(s)) {
      document.getElementById(s).innerHTML = text[lang].a[s];
    }
  }
  
  document.getElementById('fieldfullname').setAttribute('placeholder',text[lang].fieldfullname);
  document.getElementById('fieldphone').setAttribute('placeholder',text[lang].fieldphone);
  document.getElementById('fieldaddress').setAttribute('placeholder',text[lang].fieldaddress);
  document.getElementById('button-send').value = text[lang].buttonsend;
  
  let date = new Date();
  document.getElementById("tyear").innerHTML = date.getFullYear();
  