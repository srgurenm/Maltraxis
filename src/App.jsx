import React, { useState, useEffect } from 'react';
import { Book, ChevronRight, Menu, X, BookOpen, Feather, Sparkles, User, Mail, Star, Flame, Droplet, Eye } from 'lucide-react';

const SigilIcon = ({ className }) => (
  <img src={`${import.meta.env.BASE_URL}sigil.svg`} alt="Sigil" className={`${className} filter brightness-150`} />
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resonance, setResonance] = useState('umbrío');
  const [activeRune, setActiveRune] = useState(null);

  const [selectedMagic, setSelectedMagic] = useState(null);
  const [selectedLore, setSelectedLore] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(false);
  const [isReadingOpen, setIsReadingOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const CONTENIDO_CAPITULOS = [
    {
      title: "Prólogo",
      content: `Diez años atrás, Maltraxis, la joya colosal de Abyloria, respiraba en la quietud de la medianoche. Sus cuarenta millones de almas dormitaban o se afanaban en los ciclos nocturnos de una metrópolis que nunca descansaba del todo. Agujas de acero y cristal arcano perforaban la bóveda celeste, conectadas por puentes suspendidos que brillaban con runas de estabilización y luces de neón parpadeantes. Abajo, en los cañones urbanos, el zumbido constante de la maquinaria tecno-mágica, el silbido distante de los trenes levitantes surcando túneles de energía y el resplandor difuso de incontables luces creaban una sinfonía de progreso y poder, ajena al cataclismo que estaba a punto de desgarrar su indiferente normalidad.
La quietud en el Parque Olvidado, uno de los pocos pulmones verdes, al extremo sur de la ciudad, encajonado entre los titanes de metal y piedra del Distrito Inferior, era diferente. Era una quietud densa, casi palpable, cargada con el olor a tierra húmeda y a la vegetación genéticamente modificada que luchaba por sobrevivir bajo la perpetua sombra de los rascacielos. De repente, esta calma fue aniquilada por un estruendo antinatural, un sonido que no pertenecía a este mundo. Se escuchó un estallido como si mil espejos estallaran al unísono, cada fragmento vibrando con una energía cósmica disonante que hizo parpadear las luces de los edificios más cercanos y silenció por un instante el murmullo eterno de la ciudad. Así resonó el evento que marcaría una cicatriz invisible en la historia de Maltraxis.
Una luz de una blancura inmaculada, tan pura y violenta que dolía mirarla incluso a través de los párpados cerrados, hendió el firmamento contaminado sobre el parque. Por un instante, eclipsó el brillo artificial de la metrópolis. El parque desolado, habitualmente sumido en las sombras proyectadas por las moles arquitectónicas, quedó bañado por un brillo espectral que revelaba cada brizna de hierba sintética, cada charco aceitoso, cada árbol nudoso con una claridad casi quirúrgica y cegadora. Sin embargo, más allá del perímetro del parque, a pesar del caos sonoro y la luminiscencia sobrenatural que seguramente registró miles de sensores arcanos, el corazón de Maltraxis continuó latiendo en su sopor colectivo, descartando el evento como una fluctuación energética más en los barrios bajos, una anomalía sin importancia en la vasta complejidad de la urbe.
En el epicentro de la perturbación, suspendido en el aire sobre el césped chamuscado, un portal incandescente se manifestó como una herida abierta en el tejido mismo de la realidad. No era la fisura controlada y zumbante de los portales de transporte usados por la élite, sino algo salvaje, inestable. Sus bordes danzaban con una energía arcana furiosa, desprendiendo chispas de poder incomprensible que crepitaban y morían en el aire nocturno. A través de la hendidura fluctuante, llegaban ecos distorsionados: gritos ahogados por el terror, el choque metálico de armas desconocidas, el rugido de energías desatadas en una batalla desesperada librándose en un plano de existencia moribundo. Por un instante fugaz, dos mundos dispares parecieron superponerse, sus fronteras diseminándose en un crisol de luz agónica y sombras hambrientas.
De repente, como si fuera expulsada por una fuerza invisible, una figura femenina de largo cabello dorado emergió trabajosamente del umbral desgarrado. Su cuerpo temblaba bajo la luz etérea como una hoja azotada por la tormenta. Sus vestiduras, que otrora pudieron ser las elegantes túnicas de una guerrera o una noble, ahora eran jirones andrajosos, manchados de un carmesí oscuro que contrastaba brutalmente con la palidez mortal de su piel. Múltiples heridas, algunas cauterizadas por energía, otras sangrando profusamente, la marcaban con la firma inconfundible de la muerte inminente. A pesar de ello, sus brazos rodeaban con una tenacidad sorprendente a una niña pequeña, de no más de siete u ocho años, cuyo cuerpo menudo y vestido con ropas extrañas descansaba inerte contra su pecho. En la profundidad de los ojos de la mujer, aún brillantes con una determinación feroz, danzaba una mezcla imposible de terror primario y una resolución inquebrantable mientras se esforzaba por alejarse del portal que comenzaba a cerrarse tras ella con una lentitud agónica, como una boca cósmica bostezando por última vez.
Con un último aliento tembloroso que se condensó en el aire frío, la mujer inclinó su rostro ensangrentado hacia la niña y susurró palabras suaves, un secreto maternal, una última voluntad que se desvaneció en la brisa nocturna como el eco de una melodía olvidada. Su voz, apenas un hilo de sonido llevado por el viento, fue un testamento de amor y sacrificio que trascendía incluso el umbral de la muerte. El portal implosionó tras ellas con un último parpadeo de luz cegadora y un gemido sordo que pareció ser absorbido por el silencio opresivo que dejó a su paso, un vacío que devoraba todo sonido. Agotada hasta la médula, la mujer se desplomó de rodillas sobre la hierba fría y húmeda, su respiración un estertor cada vez más superficial hasta que finalmente se extinguió. Sus ojos, fijos en el rostro inconsciente de la niña, perdieron su brillo y se cerraron sobre un mundo de dolor y sacrificio.
Desde las sombras más profundas que se extendían bajo los árboles centenarios del parque, allí donde la luz artificial de la ciudad no lograba penetrar del todo, una figura masculina, alta y vestida con una elegancia sombría que contrastaba con el entorno, había observado toda la escena paralizado por la sorpresa. Sus ojos, oscuros y profundos como pozos sin fondo, habían reflejado el resplandor agónico del portal sin pestañear, analizando cada detalle con una intensidad penetrante. Con una cadencia pausada y segura, casi fantasmal, caminó desde las sombras hacia los cuerpos caídos, su silueta imponiéndose en la penumbra como un espectro salido de una leyenda olvidada. Se arrodilló junto a la niña, cuyo pequeño pecho se elevaba y descendía con una lentitud preocupante, un tenue, casi imperceptible indicio de vida en medio de la desolación.
El hombre contempló el rostro infantil, pálido e inexpresivo bajo la mortecina luz residual. Por un instante fugaz, una compleja maraña de emociones apenas perceptibles cruzó su semblante habitualmente impávido: sorpresa genuina, un destello de reconocimiento que luchó por ocultar, y algo que, en otro ser, podría haberse interpretado como un atisbo de pesar o quizás, de cálculo. Sus dedos largos y finos, enguantados en cuero oscuro, rozaron con una suavidad inesperada la frente fría de la niña, apartando un mechón de cabello oscuro pegado por la humedad. Murmuró en voz baja las palabras casi inaudibles, dirigidas más a sí mismo que a la noche:
—Deberías estar muerta. Ambas. Lo lógico, lo prudente, sería dejarte aquí, donde el destino te ha traído —su tono era frío, desprovisto de calidez aparente, pero una inflexión indescifrable, una vibración de antigua obligación, resonaba en el aire a su alrededor—. Pero le debo demasiado a tus padres. Una deuda de sangre y honor que, al parecer, ahora recae sobre ti para ser saldada.
Con una delicadeza sorprendente para su imponente y enigmática figura, levantó a la niña en sus brazos, sosteniéndola con una firmeza protectora que parecía casi antinatural en él. Se puso en pie con una agilidad felina y lanzó una última mirada impasible a la mujer que yacía inerte sobre la hierba, un tributo silencioso y quizás ambiguo a su sacrificio final. Una brisa fría y repentina se levantó, agitando las hojas sintéticas de los árboles con un susurro lúgubre, y la noche pareció volverse aún más oscura, más profunda, como si el propio tejido indiferente de Maltraxis lamentara por un instante la tragedia presenciada. Sin más dilación, el hombre se internó de nuevo en la profundidad del parque, su silueta fusionándose con las sombras hasta desaparecer por completo, mientras la vasta, indiferente y tecno-mágica metrópolis de Maltraxis continuaba sumida en su letargo colectivo, ignorante del secreto recién llegado que ahora se ocultaba en su oscuro y palpitante seno.
La niña dormía, ajena al destino incierto que le aguardaba en las entrañas de la ciudad de las sombras, y el hombre que la llevaba consigo sabía, con una certeza sombría y resignada, que este acto impulsivo, esta deuda aceptada, cambiaría irrevocablemente el curso de innumerables vidas; tejiendo una red de consecuencias que se extendería como raíces invisibles a lo largo de los años venideros.`
    },
    {
      title: "Capítulo 1: Deudas",
      content: `La lluvia en Maltraxis era una entidad constante, un velo gris que se cernía sobre la ciudad incluso en las noches más claras. Pasada la una de la madrugada, las calles, habitualmente bulliciosas con el trajín de obreros y la actividad de los talleres nocturnos, yacían ahora desiertas, lavadas por un aguacero persistente. El repiqueteo incesante de las gotas sobre el pavimento adoquinado y los tejados de zinc resonaba en el silencio, una melodía sombría que se mezclaba con el lejano silbido de alguna máquina a vapor y el ocasional destello azulado de un farol arcano.
Gur se encorvó bajo el peso de su gabardina raída, intentando inútilmente resguardarse del frío penetrante que calaba hasta los huesos. El aire nocturno olía a hollín, a metal húmedo y a una sutil traza de podredumbre, un aroma característico de los barrios bajos donde la magia industrial y la decadencia se entrelazaban. A su lado, los edificios de ladrillo oscuro se alzaban como espectros silenciosos, sus ventanas tapiadas o iluminadas por la tenue luz ámbar de alguna bombilla encantada.
Un escalofrío recorrió su espalda, aunque no estaba seguro de si era por el frío o por una sensación más inquietante. De reojo, en el reflejo oscuro de un escaparate abandonado, le pareció distinguir una sombra que se movía con una sincronización demasiado precisa con sus propios pasos. Se detuvo bruscamente bajo el arco herrumbroso de un antiguo taller de autómatas, tensando los músculos. ‘¿Una rata de las alcantarillas, mutada por los residuos mágicos, o simplemente el cansancio jugando con mi vista?’, se preguntó, tratando de convencerse de la segunda opción.
Sin embargo, a medida que avanzaba por la calle adoquinada, ahora salpicada de charcos brillantes bajo la mortecina luz de los faroles, la certeza de que alguien lo seguía se hizo más palpable. Su instinto, un sexto sentido afinado por años de navegar por las traicioneras corrientes subterráneas de Maltraxis, gritaba alerta. Aceleró el paso, el eco de sus botas resonando con fuerza en el silencio, mezclándose con el chapoteo del agua al pisar los charcos.
De repente, una mano tosca y fría como el hierro se cerró sobre su hombro, deteniéndolo en seco. Gur giró sobre sus talones con la agilidad de un felino acorralado, pero fue demasiado tarde. Un puño huesudo impactó contra su mandíbula con una fuerza brutal, enviándolo tambaleándose hacia atrás hasta que su espalda golpeó la pared húmeda de un edificio. El sabor acre y metálico de la sangre inundó su boca mientras intentaba recomponerse, la cabeza le daba vueltas. Tres figuras sombrías lo rodeaban ahora, recargándose contra la penumbra del callejón al que lo empujaron sin contemplaciones.
"Los cobradores," pensó Gur con una mezcla de resignación y amargura mientras se esforzaba por incorporarse, sintiendo el dolor punzante en la mandíbula. "No puedo culparlos del todo. Después de todo, las deudas son deudas."
—Estamos hasta las narices de venir hasta este agujero para arañar unas miserables Gemas —gruñó uno de los hombres, un tipo corpulento cuya cara estaba marcada por una cicatriz que le cruzaba la ceja como un rayo—. Lo que pagas apenas cubre el coste del combustible del automóvil y la molestia.
—Entonces dejad de venir —replicó Gur con un sarcasmo amargo, escupiendo un poco de sangre al suelo mojado—. Cuando tenga algo decente, os lo haré llegar por conducto regular. ¿Quizás un cuervo mensajero encantado?
El segundo hombre, tan grande y corpulento como el primero, pero con una mirada más obtusa, levantó un puño del tamaño de un ladrillo, listo para descargar su furia.
—¡Maldito sarnoso...!
Pero el hombre que estaba en medio de los dos, más bajo y delgado, vestido con un traje de lana oscura impecable que parecía fuera de lugar en la mugre del callejón, alzó una mano enguantada para detener a su compañero. Sus ojos, fríos y calculadores como los de un reptil, brillaban rojos con una intensidad inquietante bajo la luz parpadeante de un farol cercano.
—Estimado señor Gur, mis muchachos tienen toda la razón —dijo con una voz suave pero firme, que contrastaba con la brusquedad de sus secuaces—. Su cuota debió ser abonada hace meses, y como bien sabe, las deudas, como las malas hierbas, tienen la desagradable costumbre de multiplicarse. Mis empleadores no son precisamente conocidos por su paciencia, y no podemos permitirnos que usted continúe incumpliendo sus promesas de pago.
Gur lo miró con una mezcla de desdén y desesperación.
—Denme un poco más de tiempo, por favor. Estoy a punto de cerrar un caso delicado, uno que me reportará una suma considerable. En cuanto cobre, seréis los primeros en recibir vuestra parte.
El hombre elegante sonrió, una mueca fría que no alcanzaba sus ojos inexpresivos.
—Me temo que hoy no he venido a escuchar excusas, señor Gur. Mis jefes, si bien aprecian un flujo constante de deudores perpetuos, han llegado a la conclusión de que usted ya no representa un activo viable. Lleva demasiado tiempo acumulando retrasos, y sus pagos son tan esporádicos como las nevadas en pleno verano. Francamente, hemos llegado a un punto en el que nos planteamos si no sería más rentable vender su… eh… material orgánico a algún establecimiento de dudosa reputación en el Distrito de las Sombras. Al menos así recuperaríamos una parte de lo que nos debe. ¿En qué diablos se gasta su dinero, señor Gur? No parece ser en vicios, tiene usted una complexión sorprendentemente saludable para un hombre de su… situación económica.
Gur apretó los dientes, conteniendo la oleada de ira que amenazaba con desbordarlo. No podía revelar la verdad, no podía confesar que cada Gema que conseguía la destinaba a una búsqueda desesperada, una investigación que lo consumía y que, de revelarla, podría ponerlo en un peligro aún mayor.
—Señor Gur, esto es un ultimátum —continuó el hombre, acercándose un paso más, su aliento oliendo a tabaco caro y a algo vagamente metálico—. Solo tiene dos opciones. La primera es que mañana mismo, antes del anochecer, nos entregue al menos el cincuenta por ciento del total de su deuda, intereses incluidos. Una suma, me temo, que dudo mucho que pueda reunir.
La pausa se alargó en el aire húmedo y frío. Gur sostuvo la mirada del hombre, sintiendo un escalofrío distinto al de la lluvia recorrer su espalda. Sabía que era una tarea imposible.
—… O —prosiguió el cobrador, esbozando una sonrisa que no llegaba a sus ojos—, se hace cargo de una tarea… especial que se le encomendará. Una oportunidad única para saldar sus cuentas de una vez por todas.
Gur suspiró, sintiendo el peso de la derrota aplastarlo.
—¿Acaso tengo elección? ¿De qué se trata el trabajo?
—Tiene siete días, a partir de mañana al amanecer, para encontrar y traernos a cierta… "chica". Los detalles específicos le llegarán por correo en las próximas horas. No se preocupe, será discreto.
Gur frunció el ceño, la confusión nublando su rostro.
—¿"Chica"? ¿Quieren que secuestre a alguien? No soy ese tipo de detective.
El hombre elegante soltó una risa suave y calculada.
—Oh, no, señor Gur, nada tan… mundano. No le pediríamos que se rebajara a tales métodos. Esta "chica" es… digamos… una entidad peculiar. Un demonio menor, para ser exactos, aunque lleva cautiva mucho tiempo. Lo único que tiene que hacer es rastrearla, asegurarse de que comprenda sus instrucciones y traerla ante nosotros. Supongo que para un detective con su reputación, no representará ningún problema, ¿verdad?
—¿Un demonio menor? —repitió Gur, la sorpresa reflejada en su rostro—. Esos… esos no suelen tener mucha voluntad propia, ¿verdad? ¿Qué clase de trabajo es este?
Tenía un torrente de preguntas en la punta de la lengua, pero la expresión impaciente de los tres hombres le indicó que no obtendría más respuestas por el momento. Parecían ansiosos por terminar el encuentro y desaparecer en la oscuridad.
—Recuérdelo, señor Gur. Siete días. Tráiganos a la chica, y su deuda quedará saldada. Un borrón y cuenta nueva. No querrá decepcionarnos, ¿verdad? —dijo el hombre, girándose sobre sus talones con una elegancia fría y marchándose sin mirar atrás.
Los dos matones corpulentos lo siguieron de cerca, sus pisadas resonando con fuerza en el callejón. Pronto los tres desaparecieron en la cortina de lluvia que caía sin cesar, dejando a Gur solo en la oscuridad con el sonido distante del tráfico nocturno y el goteo constante del agua desde los tejados como única compañía.
"¿En qué demonios me he metido?", se preguntó, pasándose una mano temblorosa por el cabello rubio empapado. Una misión que sonaba a imposible o la certeza de un destino aún más sombrío. No tenía elección, y lo sabía muy bien.
Con un suspiro pesado, se ajustó la gabardina sobre los hombros y salió del callejón, su figura solitaria perdiéndose entre las sombras de la ciudad que nunca dormía, una ciudad fría y despiadada donde las deudas eran un grillete más pesado que cualquier cadena.
En el corazón de Maltraxis, la vida latía al ritmo constante de sus talleres y fábricas, alimentados por la energía arcana contenida en sus preciadas gemas. Estas no eran meros adornos; eran el alma de la economía y el motor de la magia que impregnaba cada rincón de la ciudad. Extraídas de las profundidades de las minas subterráneas que serpenteaban bajo la urbe, o incluso cultivadas en intrincados invernaderos alquímicos, las gemas de Maltraxis eran la base de su singular existencia.
Aunque se encontraban en abundancia en tamaños diminutos, como arena brillante en los lechos de los ríos subterráneos, su verdadero valor residía en su capacidad para absorber y liberar energía mágica. Cuanto mayor era la pureza y la estructura cristalina de una piedra, más poder podía almacenar, y por ende, más codiciada se volvía en el intrincado sistema de intercambio de la ciudad.
Gur se movía entre la multitud abigarrada del mercado central, un laberinto de puestos improvisados y tiendas permanentes construidas con ladrillo ennegrecido y entramados metálicos. El aire vibraba con el bullicio de los mercaderes pregonando sus mercancías, el tintineo de las gemas al ser manipuladas y el constante murmullo de las negociaciones. La luz tenue de las lámparas de gas enriquecido con cristales mágicos proyectaba sombras danzantes sobre los rostros curtidos de los compradores y vendedores.
Observaba con atención los intercambios que se llevaban a cabo a su alrededor. Un anciano con gafas de aumento examinaba la pureza de un rubí a través de una lente engastada en un marco de cobre. Una mujer vestida con ropas de trabajo intercambiaba un puñado de zafiros por una pequeña herramienta de reparación de autómatas. En cada transacción, las gemas pasaban de mano en mano, pequeñas chispas de luz capturando la atención de los presentes.
Su propia mano se cerró instintivamente sobre el pequeño monedero de cuero gastado que llevaba colgado del cinturón. Dentro solo quedaban unos pocos granates de escaso valor y un par de zafiros deslustrados. Sabía que esa exigua suma no sería suficiente para lo que necesitaba.
Para controlar a un demonio menor, tal como le habían encomendado sus acreedores, necesitaba una gema capaz de contener su esencia volátil. Una esmeralda sería lo ideal, una prisión de energía verde donde el demonio podría ser confinado hasta ser entregado. Pero una esmeralda estaba muy lejos de su alcance económico actual. Incluso diez rubíes serían una inversión considerable.
Con el ceño fruncido, Gur sopesó sus opciones mientras avanzaba entre la multitud. Quizás había llegado el momento de recurrir a viejos contactos. Ezekiel. El nombre resonó en su mente como un eco en un túnel oscuro. Un viejo conocido con una reputación ambigua, un traficante de gemas raras y objetos mágicos, con conexiones en los bajos fondos de Maltraxis. Tratar con Ezekiel siempre era un riesgo, pero la desesperación comenzaba a hacer mella en su determinación.
Mientras la primera gota de lluvia impactaba en su mejilla, seguida rápidamente por muchas más, Gur se desvió del bullicio del mercado central y se adentró en las calles menos iluminadas que conducían al distrito de los mercaderes. Los toldos de lona ondeaban con el viento, y el olor a fritura y especias se mezclaba con el aroma metálico de la lluvia. Tenía que encontrar una forma de cumplir con su encargo, de saldar sus deudas de una vez por todas, aunque eso significara bailar al borde del abismo. Ezekiel era su mejor, quizás su única esperanza.`
    },
    {
      title: "Capítulo 2: Nubes",
      content: `Rabe, con su piel de un blanco casi translúcido que contrastaba con la profundidad de su cabello oscuro, donde a veces jugaban reflejos rojizos a la luz, estaba absorta en la contemplación del exterior. Su melena, cortada a la altura de la mandíbula en un estilo bob que enmarcaba su rostro de delicados rasgos, parecía absorber la escasa luz que se filtraba a través de las nubes. Sentada en un amplio sillón de terciopelo descolorido frente a una de las dos únicas ventanas ojivales de su habitación, sus ojos escarlata, intensos y penetrantes, permanecían fijos en el horizonte.
Más allá del grueso cristal empañado por la humedad constante, se extendía la vasta y laberíntica ciudad de Maltraxis. Desde la considerable altura de su torre, que ella en su interior había bautizado con el nombre de "Celda de Cristal", la urbe se desplegaba como un tapiz grisáceo salpicado de chimeneas humeantes, intrincadas tuberías de metal que serpenteaban entre los edificios y los tejados puntiagudos de estilo gótico industrial. Sin embargo, entre la maraña de edificios grises, destacaban sorprendentes oasis de verdor: los Jardines del cielo. Situados en las plantas intermedias de los rascacielos más altos, estos jardines verticales se conectaban mediante puentes floridos y plataformas flotantes, creando un segundo nivel de naturaleza artificial que parecía desafiar la lógica de la construcción. Desde su ventana, Rabe podía distinguir árboles centenarios que florecían en alturas inverosímiles, cascadas de agua brillante que descendían varios pisos y extrañas luces multicolores que danzaban entre la vegetación; un testimonio silencioso de la magia industrial que sostenía este edén suspendido en el aire. Estos jardines parecían ignorar la frialdad y los problemas que asolaban las calles más abajo, ofreciendo una visión de serenidad y belleza en medio del caos urbano. A menudo, la vista general se veía difuminada, casi engullida por las densas nubes de lluvia que parecían ser un inquilino permanente del cielo de Maltraxis. Hoy no era la excepción: el paisaje urbano, con sus islas verdes elevadas, se presentaba velado, con los contornos de los edificios más lejanos apenas discernibles a través del manto acuoso.
Entre sus manos sostenía un libro encuadernado en cuero cuyas páginas describían las majestuosas montañas que se alzaban más allá de los límites de la ciudad, picos escarpados que parecían arañar el cielo. Sin embargo, su atención se había desviado hacía rato de las palabras impresas, absorbida por la visión fugaz de una cumbre lejana que emergía brevemente entre las nubes como un fantasma blanco. En ese instante, Rabe se imaginó a sí misma explorando esas alturas, sintiendo la roca áspera bajo sus botas y el viento helado azotando su rostro, libre de las paredes de su confinamiento.
Anhelaba la sensación de tierra firme bajo sus pies, más allá del limitado espacio de su habitación circular. Sus días eran una repetición constante de lecturas, ejercicios mentales y la melancólica observación del mundo exterior. Sus sueños de libertad, vívidos y recurrentes, eran interrumpidos una y otra vez por la monotonía de su encierro.
Un ruido metálico, seco y familiar, la sacó de su ensoñación. Era la bandeja de comida, deslizada con precisión por debajo del hueco de su puerta blindada. Una rutina que se repetía tres veces al día como un implacable tic tac de un reloj invisible. Se preguntó cuál sería el menú de hoy.
—Si son coles hervidas otra vez, juro que pasaré la noche en vela con el estómago vacío —murmuró para sí misma, curvando sus finos labios en una mueca de disgusto.
Aunque la monotonía era su constante compañera, la comida al menos solía ser una sorpresa agradable, variada y, en la mayoría de las ocasiones, de una calidad sorprendentemente excepcional para su peculiar situación.
—No puedo quejarme de todo —pensó, suspirando—. Al menos no me dejan morir de hambre.
Pero a pesar de estos pequeños respiros de normalidad, la tristeza profunda y la soledad punzante la empujaban constantemente a idear nuevas formas de escapar de su prisión. Había intentado innumerables estrategias, o al menos eso sentía. Recordaba la semana entera en la que se había negado a probar bocado, solo para despertar atada a una cama fría, con una aguja clavada en su brazo y un suero intravenoso alimentándola a la fuerza. En otra ocasión, había fingido un desmayo, incluso un intento de infarto, retorciéndose en el suelo con la esperanza de alarmar a sus captores. Pero de alguna manera, quienes la vigilaban desde el otro lado de la puerta parecían tener la capacidad de monitorear sus signos vitales con una precisión inquietante. Había llegado a la conclusión de que su captor o captores poseían medios para vigilarla que iban mucho más allá de lo que sus sentidos podían percibir, quizás algún tipo de dispositivo arcano o un hechizo de vigilancia complejo.
Lo único que la mantenía anclada a la cordura eran sus amados libros; la vista, a menudo nublada, de la enorme ciudad que se extendía bajo su torre; y las visitas esporádicas de Mitrila, su tutora. Mitrila era la única persona con la que había tenido una interacción física en años, un rostro humano en medio de la opresiva soledad. Sin embargo, incluso ella se negaba rotundamente a revelarle los motivos de su encierro. Se limitaba a repetir, con una paciencia casi dolorosa:
—Lo entenderás todo cuando seas mayor, pequeña Rabe.
‘Pero ¡maldición!’, pensó Rabe con frustración. Acababa de cumplir dieciocho años, una edad en la que la mayoría de los jóvenes de Maltraxis comenzaban a forjar su propio camino; y sin embargo, para ella la respuesta seguía siendo la misma, vaga e insatisfactoria.
Casi como si la hubiera invocado con la fuerza de su pensamiento, el pesado cerrojo de la gran puerta de seguridad se accionó con un sordo clic mecánico y la imponente estructura de metal se abrió lentamente, revelando la figura de Mitrila en el umbral. Era una mujer de edad avanzada, pero cuya belleza refinada y serena aún era evidente en sus facciones. Sus ojos grises, profundos y llenos de sabiduría, transmitían una tranquilidad que siempre aportaba un rayo de luz a la monótona rutina de Rabe. La joven se sentía agradecida por esas breves visitas, la oportunidad de escuchar una voz humana y conversar, aunque fuera por un tiempo limitado. Era evidente que Mitrila era una erudita de renombre, una figura respetada en los círculos académicos de Maltraxis. ‘Podría ser mucho peor’, pensó Rabe, un escalofrío recorriéndole la espalda ante la idea de que su educación se limitara a frías llamadas telefónicas con algún tutor desinteresado.
Como era habitual, la visita de Mitrila siguió su patrón predecible: revisó los deberes que le había asignado en su encuentro anterior, le entregó nuevos textos y pergaminos para estudiar, se aseguró de que Rabe no estuviera perdiendo sus habilidades sociales y su fluidez verbal, y finalmente, se permitió una breve charla informal.
—¿Cuándo podré salir de aquí, Mitrila? —preguntó Rabe, intentando que su voz sonara casual, como si fuera una pregunta más en la conversación.
Mitrila respondió con una rapidez amable, aunque con un tono que denotaba cansancio ante la repetición:
—Llevas diez años haciéndome exactamente la misma pregunta cada vez que nos vemos, querida Rabe, y entiendo profundamente tu frustración. Pero te lo aseguro, yo no sé más que tú al respecto.
—¡Claro que sí lo sabes! —exclamó Rabe, su frustración finalmente aflorando en su tono de voz—. Sabes claramente mucho más de lo que me dices. Sabes por qué estoy encerrada aquí, por qué no puedo simplemente bajar y caminar por las calles de Maltraxis como cualquier otra persona.
Mitrila suspiró, su rostro mostrando por primera vez una leve expresión de tristeza y resignación.
—Es cierto, Rabe —admitió, suavizando su tono—. Sé más de lo que te cuento, eso no lo niego. Pero parte del acuerdo que hice para poder seguir viniendo a verte me impide revelarte esa información. Ya llegará el momento adecuado, te lo prometo. Si incumpliera mi compromiso, no me permitirían volver a poner un pie en esta torre, y eso es algo que ninguna de las dos queremos, ¿verdad?
—Pero ya tengo dieciocho años, Mitrila. ¡Dieciocho! ¿Cuánto más se supone que tengo que esperar? —dijo Rabe en un tono que denotaba una creciente desesperación.
—No te preocupes demasiado por tu edad, querida —respondió Mitrila con una sonrisa tranquilizadora, aunque sus ojos reflejaban una sombra de preocupación—. He logrado convencerlos de que permitan que más personas te visiten, que vengan a enseñarte sobre diferentes temas. Creo que eso te ayudará a sobrellevar mejor este… periodo.
Rabe contuvo las palabras afiladas que querían brotar de sus labios. Sabía que Mitrila no era quien la retenía allí, que en el fondo se preocupaba genuinamente por su bienestar. Sin sus visitas regulares, probablemente ya habría sucumbido a la locura en medio de tanta soledad y aislamiento. Finalmente, con un suspiro de resignación, simplemente dijo:
—Gracias, Mitrila. Lo aprecio.
La tutora se acercó y le acarició suavemente el cabello oscuro, sus dedos huesudos pero cálidos deslizándose entre sus mechones.
—Aprovecha al máximo estas oportunidades para aprender todo lo que puedas, Rabe —le aconsejó con una dulzura maternal—. Eres una joven muy especial, con un potencial increíble. Tu momento llegará, ten paciencia.
Cuando la pesada puerta se cerró tras la partida de Mitrila el silencio opresivo volvió a llenar la habitación. Pero en el interior de Rabe, lejos de la resignación, una chispa de determinación ardía con más fuerza que nunca. Estaba decidida a descubrir la verdad detrás de su encierro, a desentrañar el misterio que envolvía su pasado y su presente. Miró nuevamente hacia la ventana, hacia las nubes grises que se desplazaban libres por el cielo de Maltraxis, y en su mente inquieta comenzaron a tejerse nuevos planes, nuevas estrategias para alcanzar la libertad que tanto anhelaba.`
    },
    {
      title: "Capítulo 3: La carta",
      content: `La campanilla oxidada sobre la puerta de La Taberna de Ezekiel tintineó suavemente al abrirse, anunciando la llegada de un cliente familiar. Ezekiel, un hombre corpulento con una barba canosa y unos ojos astutos que habían visto demasiadas noches oscuras en Maltraxis, observó con una sonrisa cálida cómo Gur entraba en su establecimiento. El local con sus mesas de madera maciza desgastadas por el tiempo, la tenue luz de las lámparas de aceite y el aire impregnado de un aroma reconfortante a cerveza barata y especias exóticas, ofrecía un extraño remanso de calidez y seguridad en medio del implacable caos de la ciudad. Por supuesto, el negocio principal de Ezekiel no se limitaba a servir copas, en Maltraxis, ¿qué empresa podía permitirse ser puramente legal?
—¡Eh, Gur! —exclamó Ezekiel desde detrás de la barra, su voz grave resonando por el local—. ¡Siéntate muchacho y cuéntame qué te trae por aquí esta vez! Pero te advierto ya, ni una sola Gema más a crédito, ¿me oyes? —A pesar de sus palabras, su tono era más juguetón que amenazante.
Gur le devolvió la sonrisa con una ligera inclinación de cabeza. Ezekiel era más que un simple conocido: era su confidente, el lazo más cercano que había tenido nunca con un amigo de verdad. En muchos sentidos lo consideraba un hermano mayor. Había sido Ezekiel quien lo había recogido de las frías calles adoquinadas cuando el humilde hogar que compartía con sus padres desapareció en la tragedia de Azahr. Le había ofrecido un techo bajo el cual dormir y trabajo en la taberna hasta que Gur pudo valerse por sí mismo. Nunca podría pagarle completamente todo lo que había hecho por él; pero sabía que Ezekiel no esperaba una retribución monetaria. Su amistad era un tesoro mucho más valioso.
—"Trae a la chica y borraremos tu deuda" —dijo Gur con un tono sombrío, dejando caer su gabardina empapada sobre una silla libre—. Parece que por fin se cansaron de mis largas promesas de pago, Ez y me han encomendado una tarea que tiene toda la pinta de ser un suicidio. Pero la otra opción… Bueno, la otra opción es que se cansen de esperar y decidan liquidar la deuda a su manera.
Mientras Gur le explicaba con detalle el encuentro con los cobradores Ezekiel sirvió una generosa jarra de su cerveza negra más amarga, la favorita de Gur. Al comprender la seriedad de la situación el viejo suspiró profundamente, su rostro curtido marcado por una preocupación genuina.
—¿Y bien, muchacho? ¿Qué necesitas esta vez de tu viejo amigo Ezekiel? ¿Un conjuro de invisibilidad? ¿Un pasaje seguro fuera de la ciudad?
—Solo un topacio, Ez —respondió Gur, con un rastro de urgencia en su voz—. Te prometo que te lo devolveré en menos de siete días, lo juro por lo que más quieras. No lo necesito para malgastarlo en licor o juegos.
Ezekiel gruñó, rascándose la barba canosa mientras meditaba la petición.
—Chico, prestarte una piedra tan valiosa… nada me garantiza que puedas cumplir con esa misión. ¿Y si te atrapan? ¿Y si esa "chica" resulta ser más de lo que esperabas? Tengo una idea mejor, una que quizás no te guste; pero escúchame: toma estos dos topacios —dijo, sacando dos gemas doradas de un pequeño cofre de madera bajo la barra—, y desaparece de Maltraxis. Cambia tu nombre, vete a alguna ciudad lejana donde nadie te conozca, empieza una nueva vida. Con las Gemas que te sobren incluso podrías volver a intentar ingresar en la academia de policía. Seguro que esta vez lo consigues —dijo con un tono triste pero firme.
—Sabes que no puedo hacer eso, Ez —exclamó Gur con un tono desesperado, apretando los puños sobre la mesa hasta que sus nudillos se pusieron blancos. Sus ojos amarillo oscuro brillaban con una intensidad dolorosa—. Esta ciudad… esta ciudad guarda el secreto de la masacre de Azahr, de la muerte de mi familia. No puedo simplemente dar la espalda y fingir que nada pasó. ¡Tengo que saber la verdad, Ez! ¡Tengo que saber quiénes fueron los responsables! 
Ezekiel dejó escapar otro largo suspiro, el sonido llenando el breve silencio que se había creado entre ellos.
—¿Y qué vas a hacer después de que sepas la verdad, Gur? ¿Vengarte? ¿Destruir a los responsables? Escúchame muchacho, no caigas en ese pozo oscuro del odio y la venganza. Sé mejor que ellos. Por favor —dijo Ezekiel, su voz más seria y cargada de emoción de lo que Gur le había oído jamás. Nunca pensó que el viejo Ezekiel, generalmente tan pragmático y con un humor cínico, le diría algo tan profundo y con tanta seriedad.
—Por ahora… —dijo Gur, tartamudeando ligeramente, su mirada desviándose hacia la jarra de cerveza—. Por ahora… solo quiero saber qué pasó. Necesito entenderlo.
—Está bien, chico. Entiendo —dijo Ezekiel, asintiendo lentamente. Tomó uno de los topacios que había puesto sobre la barra y se lo entregó a Gur—. Toma, pero escúchame bien, Gurenm: si te metes en un lío del que no puedes salir, no vuelvas por aquí. Espero que lo entiendas. No quiero verte… acabado —terminó de decir con un profundo dolor reflejado en sus ojos.
Gur asintió con gratitud, tomando la gema dorada con cuidado.
—Gracias, Ez. Gracias por todo. —Se levantó de la mesa y salió de la taberna, dejando atrás el calor acogedor y la preocupación silenciosa de su amigo.
De vuelta en su pequeño apartamento en un edificio destartalado del distrito industrial, Gur decidió prepararse para lo que se avecinaba. Miró a su alrededor, recordando con nostalgia que este humilde hogar era lo único que le quedaba de su madre y que había sido Ezekiel quien lo había ayudado a recuperarlo de las garras de los acreedores poco después de su muerte. "¿Cuánto le debo realmente a ese hombre?", pensó, sintiendo una punzada de gratitud y culpa.
Se acercó al espejo astillado que colgaba sobre el lavamanos y se dispuso a arreglar su cabello rubio oscuro, que le llegaba hasta los hombros y que solía atar en una coleta baja para que no le molestara. Aunque su color base era un dorado cenizo, a veces, bajo la luz adecuada, se podían apreciar tonos más castaños; una peculiaridad que siempre había atribuido a su sangre mestiza. "Supongo que es por tener mi sangre mezclada" reflexionó, recordando las miradas curiosas que a veces recibía, aunque generalmente pasaba desapercibido con el cabello recogido.
De repente, un golpe seco en la puerta lo sobresaltó. Gur dio un respingo y corrió a abrir con el corazón latiendo con fuerza en el pecho. Un hombre bajito, completamente cubierto por una capucha oscura que ocultaba su rostro, le empujó una caja de madera pequeña entre las manos y se apresuró a desaparecer por el pasillo sin pronunciar una sola palabra. Gur no pudo distinguir ningún otro detalle del misterioso mensajero.
Con el ceño fruncido cerró la puerta y examinó la caja. Dentro encontró una carta sellada con un símbolo desconocido. Con manos temblorosas, rompió el sello y comenzó a leer las instrucciones de su trabajo:
"El objetivo es un demonio menor con la capacidad de adoptar la apariencia de una mujer joven. No se deje engañar por su apariencia o por cualquier cosa que le diga, si cae en sus trucos, será su fin."
Un escalofrío recorrió la espalda de Gur. Había algo profundamente inquietante en todo esto. Continuó leyendo:
"El objetivo se encuentra recluido en el ático del edificio de la Torre de la Corporación Anael, uno de los rascacielos más altos de la ciudad. Tendrá que infiltrarse para poder llegar hasta ella. Se le ha proporcionado una tarjeta de acceso codificada, esperamos que tenga la sensatez de no intentar entrar por la puerta principal. Una vez que dé con el objetivo, convencerla de que lo siga debería ser relativamente sencillo; sin embargo, en caso de resistencia, también le hemos proporcionado una pistola eléctrica silenciosa y no letal, que solo deberá usar en circunstancias extremas. Recuerde, queremos al demonio con 'vida'."
La carta continuaba:
"Dispone de ciento ochenta horas a partir de este momento para completar la tarea."
Gur miró dentro de la caja, sintiendo un nudo de temor en el estómago. Junto a la carta, encontró el arma no letal descrita: una pistola de aspecto elegante y futurista, con detalles en metal pulido y empuñadura ergonómica. No había empuñado un arma de estas características desde su entrenamiento en la academia de policía, pero esta en particular tenía algo diferente: “irradiaba una sensación de poder y costaba una fortuna” pensó, estimando que su valor podría ascender a la mitad de su deuda total.
La carta concluía con una advertencia final, escrita con una caligrafía firme y amenazante:
"Al final de este plazo lo esperamos con el demonio y la pistola en el lugar convenido. No intente huir, tenemos ojos en todas partes. Memorice esta carta y quémela junto con la caja. NO NOS DECEPCIONE."
Con el corazón latiendo a mil por hora, Gur memorizó cada palabra de la carta y luego la arrojó a las llamas de la pequeña estufa de carbón junto con la caja de madera. Observó cómo el fuego consumía el papel, apenas sintiendo el calor en su rostro, su mente estaba ensimismada procesando la magnitud de la tarea que tenía ante sí.
Finalmente, guardó la pistola eléctrica en el interior de su gabardina y deslizó la tarjeta de acceso en un bolsillo interior. Se colocó el abrigo sobre los hombros y con una determinación sombría grabada en su rostro se dirigió hacia la ventana, contemplando la imponente silueta de la Torre de la Corporación Anael que se alzaba en la distancia, un faro de poder y misterio en el corazón de la ciudad podrida. Sabía que este encargo podría ser su final, pero también representaba una oportunidad, quizás la única, para acercarse a la verdad que había estado buscando durante tanto tiempo.`
    },
    {
      title: "Capítulo 4: La jaula",
      content: `Diez años antes...
Un año. Un año entero había transcurrido desde que Rabe se encontraba recluida en la soledad de aquella torre. Sus días se deslizaban en un silencio casi absoluto, marcado únicamente por el suave crujido de las páginas de los libros que ocasionalmente llegaban junto con sus comidas. Los volúmenes eran una ecléctica colección: historias de civilizaciones olvidadas, novelas de misterio con tramas intrincadas, relatos de tierras lejanas y exóticas. Aunque algunos temas no lograban capturar del todo su interés, Rabe los devoraba con avidez, buscando llenar el vacío de sus horas y evadir la punzante soledad que la envolvía como una segunda piel.
La vista desde su ventana era una panorámica limitada, enmarcada por los arcos ojivales de la torre. Podía contemplar la extensión del sur y sureste de Maltraxis, una masa imponente de edificios que se alzaban hacia el cielo, sus siluetas a menudo difuminadas por la omnipresente bruma industrial. Más allá, en la distancia, las montañas se alzaban como espectros grises contra el horizonte pálido. A veces, en sus momentos de ensueño, jugaba a imaginar cómo serían los bulliciosos puertos situados al norte de la ciudad, repletos de barcos de vapor y autómatas de carga, un hervidero de vida y movimiento, lugares que, en su joven mente, comenzaba a asumir que quizás jamás llegaría a ver.
Para mantener su cuerpo activo en el limitado espacio de su habitación circular, Rabe practicaba ejercicios sencillos que recordaba vagamente de su pasado, moviéndose con una gracia innata por la estancia. A menudo, evocaba las palabras de su madre, susurradas en un tono suave pero firme: "Mantén siempre tus emociones bajo control, pequeña Rabe". No comprendía del todo la importancia de esa enseñanza, pero sentía una profunda necesidad de honrar esa memoria, ese último legado materno. Sin embargo, al intentar recordar más detalles sobre su madre, su rostro, su voz, incluso las circunstancias que la habían llevado a estar allí, su mente se nublaba, como si una espesa niebla artificial cubriera sus recuerdos más preciados, dejándola con una frustrante sensación de vacío.
Una mañana, la rutina se rompió de una manera inesperada. Junto con la habitual bandeja de su desayuno, encontró un sobre de pergamino sellado con un símbolo que no reconocía. Una punzada de emoción y una intensa curiosidad la invadieron mientras rasgaba el sello y desplegaba el papel para leer las breves palabras escritas con una caligrafía elegante y precisa:
"Hoy recibirás una visita después del almuerzo. Por favor, prepárate adecuadamente."
El corazón de Rabe comenzó a latir con fuerza en su pecho. ¿Una visita? ¿Quién podría ser? La idea de ver a otra persona después de tanto tiempo de aislamiento la inundó con una mezcla de alegría y nerviosismo. Se apresuró a arreglarse lo mejor que pudo con los pocos recursos a su alcance, eligiendo un vestido sencillo de lana color ceniza que había encontrado en el armario y peinando su cabello oscuro con los sutiles tonos rojizos que brillaban a la luz, dejándolo caer suavemente sobre sus hombros. Sus ojos escarlata, normalmente apagados por la monotonía, brillaban ahora con una anticipación palpable y un ligero temblor de ansiedad.
Después de un almuerzo que apenas probó, el sonido metálico de la cerradura al ser manipulada rompió el silencio opresivo de la torre, haciéndola estremecer. La pesada puerta de madera reforzada con acero se abrió lentamente, revelando la figura de una mujer que entró en la habitación con una presencia tranquila y elegante. Era alta y de porte distinguido, con un aura de serenidad que parecía llenar el espacio. Su cabello castaño claro, recogido en un moño bajo, enmarcaba un rostro sereno y amable, y sus ojos grises reflejaban una profunda sabiduría y comprensión.
—Hola, Rabe —dijo la mujer con una sonrisa cálida y genuina—. Mi nombre es Mitrila. Seré tu tutora a partir de hoy.
Rabe la miró con asombro y un poco de timidez, sus ojos escarlata fijos en el rostro desconocido.
—¿Mi tutora? —preguntó con un hilo de voz, aún sin poder creerlo—. ¿Vas a enseñarme cosas?
—Así es —asintió Mitrila, su sonrisa permaneciendo suave—. Estoy aquí para ayudarte con tus estudios, para guiarte en tu aprendizaje y para que no te sientas tan sola en este lugar.
Una oleada de alegría y alivio inundó a la joven.
—¡Muchas gracias! He estado… He estado esperando poder hablar con alguien durante tanto tiempo. Tengo tantas preguntas…
Mitrila se acercó y tomó asiento en una silla de madera junto a Rabe, manteniendo una distancia respetuosa pero cercana.
—Entiendo que debes sentirte confundida y quizás un poco asustada. Puedes preguntarme lo que desees, y te responderé con la mayor honestidad posible, dentro de los límites de lo que me permitan.
Rabe tomó aire profundamente, tratando de organizar el torbellino de pensamientos que se agolpaban en su mente.
—No recuerdo mucho de antes de estar aquí. Solo fragmentos, imágenes sueltas… —dijo, frunciendo el ceño en un esfuerzo por evocar recuerdos—. Recuerdo a mi madre diciéndome que debía mantener mis emociones bajo control, pero no sé por qué era tan importante. ¿Por qué estoy en esta torre, Mitrila? ¿Por qué no puedo simplemente bajar y ver el mundo?
Mitrila mantuvo su sonrisa suave, aunque una sombra de tristeza cruzó fuertemente por sus ojos.
—Sé que debe ser muy difícil para ti, querida. Por ahora, lo más importante es que estás a salvo aquí, protegida —respondió con una voz calmada y reconfortante—. El mundo exterior puede ser un lugar complicado y, a veces, peligroso. Queremos asegurarnos de que estés preparada antes de que tengas que enfrentarlo.
—¿Preparada? ¿Para qué exactamente? —insistió Rabe, su curiosidad creciendo—. ¿Hay algo que deba saber sobre… sobre mí?
Mitrila dudó por un instante, su mirada desviándose hacia la ventana antes de volver a los ojos escarlata de Rabe.
—Hay mucho que aprender, Rabe. Eres una chica especial, con un gran potencial que aún está por descubrir. Por eso estoy aquí, para guiarte en ese descubrimiento y enseñarte todo lo que necesitas saber para cuando llegue el momento.
Rabe la observó con atención, notando la forma en que Mitrila evitaba dar respuestas directas a sus preguntas más importantes.
—¿Tiene todo esto que ver con mi madre? —preguntó en voz baja, sintiendo un nudo formarse en su garganta—. ¿Puedes al menos contarme algo sobre ella? ¿Cómo era?
Mitrila suspiró ligeramente, su expresión volviéndose melancólica.
—Tu madre fue una persona extraordinaria, Rabe. Era fuerte, inteligente y… te amaba profundamente. Siempre quiso lo mejor para ti.
—¿Qué le sucedió? —Rabe sintió las lágrimas picarle en los ojos—. ¿Por qué no está aquí conmigo?
—No puedo responder a eso ahora, lo siento mucho —dijo Mitrila con sinceridad, su voz cargada de empatía—. Pero te prometo que, con el tiempo, muchas de estas cosas tendrán más sentido para ti.
Rabe bajó la mirada, tratando de ocultar la punzada de desilusión que la invadía.
—Está bien —murmuró, aunque su tono revelaba su frustración.
Mitrila extendió una mano y la colocó suavemente sobre el hombro de Rabe, ofreciéndole un gesto de consuelo.
—No te preocupes, querida. Hoy podemos comenzar con algunas lecciones que te ayudarán a comprender muchas cosas. ¿Te parece bien?
La joven asintió lentamente, levantando la mirada hacia su tutora.
—Sí, Mitrila. Me gustaría mucho.
Durante las siguientes horas, Mitrila le enseñó a Rabe sobre historia antigua, literatura clásica y los fundamentos de las ciencias naturales. Rabe absorbía cada palabra con avidez, feliz de tener compañía y de aprender cosas nuevas, aunque notaba que Mitrila evitaba cuidadosamente ciertos temas, especialmente aquellos relacionados con la magia y cualquier mención de poderes o habilidades especiales.
Al finalizar la lección, cuando el sol comenzaba a descender tiñendo el cielo de tonos naranjas y morados visibles a través de las nubes, Rabe volvió a intentarlo.
—Mitrila, mi madre siempre me decía que debía controlar mis emociones. ¿Sabes por qué era tan importante?
La tutora la miró con detenimiento, sus ojos grises escrutando su rostro.
—Las emociones pueden ser fuerzas muy poderosas, Rabe. Pueden influir en nuestras acciones y decisiones de maneras que a veces no comprendemos. Aprender a manejarlas, a entenderlas, es fundamental para tomar decisiones sabias y para protegerte a ti misma y a los demás.
—Pero… ¿Hay algo más? —insistió Rabe, sintiendo una punzada de inquietud—. A veces siento como si hubiera algo más dentro de mí… algo… diferente. Algo que no entiendo.
Mitrila sonrió con una tranquilidad que no parecía del todo genuina.
—Es normal sentirse así a veces, querida. Estás creciendo, descubriendo el mundo y descubriéndote a ti misma. Con el tiempo y la práctica, aprenderás a conocerte mejor.
Rabe suspiró, sabiendo que no obtendría más información por el momento.
—Espero que tengas razón —murmuró, mirando hacia las nubes que se arremolinaban en el cielo.
Antes de despedirse, Mitrila se acercó a la puerta y se detuvo, volviéndose hacia Rabe con una mirada seria.
—Recuerda siempre, Rabe, que si alguna vez te sientes abrumada por tus emociones, intenta respirar profundamente y encontrar tu centro. Las enseñanzas de tu madre eran muy sabias.
Rabe asintió con la cabeza.
—Lo haré, Mitrila. ¿Volverás mañana?
—Por supuesto, querida. Tenemos mucho más que explorar juntas.
Cuando la pesada puerta se cerró tras la partida de Mitrila, Rabe se quedó contemplando el espacio vacío, sintiendo una mezcla de alivio y frustración. Aunque aún tenía innumerables preguntas sin respuesta, la presencia de Mitrila había sembrado una pequeña semilla de esperanza en su corazón. Quizás, con su ayuda, podría comenzar a entender más sobre sí misma y su misterioso lugar en el mundo.
En un pasillo tenuemente iluminado, no muy lejos de la habitación de Rabe, Mitrila se encontró con Anael, un hombre de presencia imponente y una mirada severa que parecía penetrar hasta el alma. Su cabello oscuro y liso, peinado hacia atrás, y sus rasgos afilados le conferían un aire misterioso y reservado. Era conocido entre muy pocos como el responsable de la torre y el guardián de Rabe.
—¿Cómo ha ido el encuentro? —preguntó Anael sin rodeos, su voz grave resonando en el silencio del pasillo.
—Ella es inteligente y muy curiosa, como esperábamos —respondió Mitrila, con un ligero tono de cansancio en su voz—. Tiene muchas preguntas, naturalmente.
—Espero que hayas recordado nuestras directrices —dijo él, entornando ligeramente los ojos oscuros—. No debe saber nada sobre su verdadero origen ni sobre la naturaleza de sus poderes.
—Lo sé perfectamente, Anael —afirmó Mitrila con firmeza, aunque con un matiz de reproche en su tono—. Pero también creo que merece saber algo más que medias verdades. Mantenerla en la ignorancia total durante tanto tiempo no es saludable para su desarrollo.
Anael frunció el ceño, su expresión endureciéndose.
—Es por su seguridad, Mitrila, y por la seguridad de todos. Si llegara a descubrir la verdadera naturaleza de su herencia, mitad demonio y mitad azahriana, sin una preparación adecuada, las consecuencias podrían ser catastróficas.
Mitrila lo miró con una determinación silenciosa.
—Pero mantenerla completamente aislada y sin comprender su propia naturaleza también es peligroso, Anael. Necesita guía, necesita comprensión. No podemos simplemente esconder la verdad para siempre.
Anael suspiró, mostrando por primera vez una pizca de cansancio en su rostro habitualmente impasible.
—Confío en tu juicio hasta cierto punto, Mitrila. Pero no debemos correr riesgos innecesarios. Recuerda de lo que eran capaces los Azahrianos: podían moldear la luz en armas y armaduras de una belleza y un poder inigualables. Y ella… ella podría heredar ese poder. Si eso se combina con su lado demoníaco… las consecuencias son, como bien sabes, impredecibles.
—Lo sé, Anael. Soy consciente de los riesgos —respondió Mitrila—. Pero creo firmemente que, juntos, podemos ayudarla a entender y a controlar sus habilidades, cuando llegue el momento adecuado.
—Esperemos que ese momento no llegue pronto —concluyó Anael, su mirada fija en un punto invisible del pasillo—. Por ahora, sigue con las lecciones y mantente estrictamente dentro del plan que hemos establecido.
Mitrila asintió, aunque en su interior sentía una profunda preocupación por el futuro de Rabe. Sabía que la joven necesitaría mucho más que lecciones y evasivas. Necesitaría confianza, apoyo y, sobre todo, la verdad para poder enfrentar lo que inevitablemente se avecinaba.
Mientras ambos se alejaban por caminos opuestos en los laberínticos pasillos de la torre, Rabe observaba desde la ventana de su habitación cómo el sol se escondía tras los imponentes edificios de Maltraxis, tiñendo las nubes de tonos rojizos y dorados antes de que la oscuridad de la noche se apoderara por completo del cielo. Un profundo sentimiento de anhelo inundaba su corazón. Anhelaba respuestas, anhelaba la libertad que veía en las nubes que se desplazaban sin restricciones, y aunque aún no lo comprendía del todo, anhelaba descubrir el poder misterioso que dormía latente en su interior.`
    }
  ];
  
  const ReadingModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto" onClick={() => setIsReadingOpen(false)}>
      <div className="bg-[#0c0a09] border border-white/10 p-4 sm:p-8 rounded-2xl max-w-3xl w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
        <button onClick={() => setIsReadingOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white z-10">
          <X />
        </button>
        <h2 className="text-3xl font-bold text-white mb-6 font-serif text-center">Capítulos Gratuitos</h2>
        <div className="space-y-6 text-slate-300 leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
          {CONTENIDO_CAPITULOS.map((cap, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-red-700 mb-2">{cap.title}</h3>
              <div className="text-justify whitespace-pre-line">{cap.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TestimonialsSection = () => (
    <section className="py-20 bg-black text-white text-center border-t border-white/5">
      <h2 className="text-3xl font-serif font-bold mb-12">Lo que dicen los lectores</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {[
          { quote: "Una atmósfera gótica insuperable. Noctara cobra vida.", author: "Elena R." },
          { quote: "Gur es un detective con el que empatizas desde la primera página.", author: "Marcos T." },
          { quote: "No podía soltar el libro. El sistema de magia es fascinante.", author: "Lucía M." },
        ].map((testimony, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-2xl">
            <Star className="w-6 h-6 text-yellow-500 mx-auto mb-4" />
            <p className="italic mb-4">"{testimony.quote}"</p>
            <p className="font-bold text-red-500">{testimony.author}</p>
          </div>
        ))}
      </div>
    </section>
  );

  const StickyCTA = () => (
    <div className="fixed bottom-0 left-0 w-full bg-red-900 text-white p-4 text-center z-50 md:hidden">
      <a href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6" target="_blank" rel="noopener noreferrer" className="font-bold text-lg">Comprar en Amazon</a>
    </div>
  );

  const galleryImages = [
    { src: '/Paladin.png', alt: 'Paladín' },
    { src: '/Dualidad.png', alt: 'Dualidad' },
    { src: '/ecuacion.png', alt: 'Ecuación' }
  ];

  const nextImage = () => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const loreData = {
    title: "EL CÓDICE DE NOCTARA",
    content: (
      <div className="space-y-4 text-justify">
        <p>Bienvenido a la enciclopedia prohibida. Lo que leerás a continuación son verdades ocultas tras siglos de dogma y acero.</p>
        <h4 className="font-bold text-red-700">1. El Origen: La Fragmentación Divina</h4>
        <p>En los albores de la historia, la conciencia pura que los humanos llamaron "Dios" descendió sobre el planeta Noctara. Fascinada por la chispa de la vida mortal, esta entidad tomó una decisión que cambiaría el cosmos: se fragmentó. De esa ruptura nacieron dieciocho esencias fundamentales: Las Nueve Luces (Ángeles) y Las Nueve Sombras (Demonios). Aunque el mandato original era preservar el equilibrio, la paz se quebró en el Año 0 con la llamada Traición Angelical, un conflicto donde la sangre divina tiñó la tierra por primera vez y los Ángeles juraron abandonar el mundo físico, llevándose consigo la esperanza de la humanidad.</p>
        <h4 className="font-bold text-red-700">2. Geografía de la Dualidad</h4>
        <p>El mundo quedó dividido entre dos bastiones: <strong>Azahr</strong> (La Ciudad Bendita, un paraíso de cristal inmaculado, actualmente sellada) y <strong>Maltraxis</strong> (La Ciudad de las Sombras, una megalópolis gótico-industrial de 40 millones de almas, jungla de rascacielos y neón donde la lluvia nunca cesa).</p>
        <h4 className="font-bold text-red-700">3. El Sistema Arcano: Leyes de Noctara</h4>
        <p>La magia es una ciencia de intercambio equivalente. Los magos actúan como <strong>conductos biológicos</strong> para la energía telúrica del planeta. Canalizar poder sin el anclaje de gemas consume la propia vitalidad del mago. Las gemas son baterías, y las runas son la sintaxis o "código" escrito que permite automatizar efectos mágicos.</p>
        <h4 className="font-bold text-red-700">4. Reliquias de Leyenda</h4>
        <p>Objetos de inmenso poder: La Espada de los Juramentos, capaz de herir a lo inmortal; El Cántico de los Ángeles, una frecuencia telepática que erradica el libre albedrío; y El Filo del Vacío, una hoja experimental capaz de cortar cualquier materia.</p>
        <h4 className="font-bold text-red-700">5. Los Jugadores en la Sombra</h4>
        <p>Los <strong>Demonios Mayores</strong> controlan la industria y la educación mágica en Maltraxis. Los <strong>Seguidores de la Luz</strong>, humanos sin magia leales a los antiguos Ángeles, persisten en las sombras tras la caída de Azahr.</p>
      </div>
    )
  };

  const magicLore = [
    {
      id: 'elemental',
      title: 'Magia Elemental',
      shortDesc: 'Manipulación física del entorno mediante el Flujo Telúrico.',
      fullDesc: 'A diferencia de la Luz o la Oscuridad, la magia elemental no crea materia desde el vacío, sino que manipula el entorno. Requiere concentración constante. Incluye Fuego (requiere combustible), Tierra (manipulación de materiales existentes), Agua/Hielo (depende de la humedad), Viento (efecto de presión) y Electricidad (requiere conductores o runas). Los rangos de élite pueden invocar rayos directamente de las nubes.',
      color: 'border-cyan-500/30'
    },
    {
      id: 'luz',
      title: 'Magia de Luz',
      shortDesc: 'Energía de pureza, orden y constructos sólidos.',
      fullDesc: 'Vinculada a la pureza y vida. Permite solidificar energía para armas o barreras (drenaje agresivo), ralentizar la percepción, acelerar objetos, y el "Cántico", una frecuencia telepática que fuerza la sumisión dogmática absoluta.',
      color: 'border-amber-500/30'
    },
    {
      id: 'oscuridad',
      title: 'Magia de Oscuridad',
      shortDesc: 'Energía caótica del vacío y emociones primarias.',
      fullDesc: 'Caos ligado al vacío. Permite alterar la gravedad (aumentar masa), crear fracturas espaciales (teletransportación peligrosa), proyectar ilusiones basadas en traumas (con "rebote" físico al mago), y manipular fuego negro o electricidad púrpura.',
      color: 'border-red-900/50'
    },
    {
      id: 'infraestructura',
      title: 'Infraestructura',
      shortDesc: 'Gemas como baterías y Runas como código.',
      fullDesc: 'Las gemas actúan como baterías de energía telúrica (según pureza). Las runas son la sintaxis grabada que permite automatizar efectos mágicos de forma permanente (iluminación, transporte), siempre que cuenten con suministro energético.',
      color: 'border-white/20'
    }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const runesLore = [
    {
      id: 'luz',
      title: 'Runa del Flujo Luminoso',
      desc: 'Vinculada a la energía telúrica del planeta. Los constructos de luz sólida exigen precisión mental y consumen energía constante si no se enlazan al flujo natural de Noctara.',
      color: 'text-amber-400 border-amber-500/30 bg-amber-950/20'
    },
    {
      id: 'vacio',
      title: 'Runa del Vórtice Umbrío',
      desc: 'Energía caótica ligada al vacío y las emociones primarias. Permite doblar el espacio y manipular la gravedad, pero su uso prolongado induce desorientación permanente.',
      color: 'text-purple-400 border-purple-500/30 bg-purple-950/20'
    },
    {
      id: 'elemental',
      title: 'Runas de Anclaje',
      desc: 'A diferencia de la Luz o la Oscuridad, la magia elemental requiere el entorno físico. Las runas actúan como baterías que automatizan y sostienen los hechizos continuamente.',
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20'
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-1000 font-sans selection:bg-red-900 selection:text-white ${resonance === 'umbrío'
      ? 'bg-[#030206] text-slate-200'
      : 'bg-white text-slate-900'
      }`}>

      {/* RAIN EFFECT */}
      <div className={`fixed inset-0 pointer-events-none z-10 overflow-hidden ${resonance === 'umbrío' ? 'opacity-30' : 'opacity-10'}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.05)_50%,rgba(255,255,255,0)_100%)] bg-[size:100px_400px] animate-[pulse_3s_infinite]"></div>
        <div className="rain-container absolute inset-0">
          <div className={`absolute w-[1px] h-20 bg-gradient-to-b from-transparent ${resonance === 'umbrío' ? 'to-red-900/30' : 'to-slate-400/30'} left-[12%] top-[-10%] animate-rain-3`}></div>
          <div className={`absolute w-[1px] h-24 bg-gradient-to-b from-transparent ${resonance === 'umbrío' ? 'to-amber-500/20' : 'to-slate-400/20'} left-[35%] top-[-20%] animate-rain-2`}></div>
          <div className={`absolute w-[1px] h-16 bg-gradient-to-b from-transparent ${resonance === 'umbrío' ? 'to-cyan-500/25' : 'to-slate-400/25'} left-[67%] top-[-5%] animate-rain-1`}></div>
          <div className={`absolute w-[1px] h-28 bg-gradient-to-b from-transparent ${resonance === 'umbrío' ? 'to-red-900/30' : 'to-slate-400/30'} left-[85%] top-[-15%] animate-rain-4`}></div>
        </div>
      </div>

      {/* RESONANCE SELECTOR */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <span className="text-[10px] tracking-widest uppercase text-slate-500 font-bold">Resonancia Telúrica</span>
        <div className="flex gap-1 p-1 bg-black/80 border border-white/10 rounded-full backdrop-blur-md shadow-2xl">
          <button
            onClick={() => setResonance('umbrío')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${resonance === 'umbrío'
              ? 'bg-red-950/60 text-red-200 border border-red-900/50 shadow-[0_0_15px_rgba(153,27,27,0.4)]'
              : 'text-slate-400 hover:text-white'
              }`}
          >
            <Droplet className="w-3.5 h-3.5" /> Vórtice Umbrío
          </button>
          <button
            onClick={() => setResonance('luminoso')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${resonance === 'luminoso'
              ? 'bg-amber-950/60 text-amber-200 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
              : 'text-slate-400 hover:text-white'
              }`}
          >
            <Flame className="w-3.5 h-3.5" /> Flujo Luminoso
          </button>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 ${resonance === 'umbrío' ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-md border-b ${resonance === 'umbrío' ? 'border-white/5' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <SigilIcon className={`w-8 h-8 transition-colors duration-1000 ${resonance === 'umbrío' ? 'text-red-700' : 'text-red-900'}`} />
              <span className={`text-2xl font-serif font-bold ${resonance === 'umbrío' ? 'text-white' : 'text-slate-900'} tracking-wider uppercase`}>MALTRAXIS</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-baseline space-x-8">
                  <a href="#inicio" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>Inicio</a>
                  <a href="#sinopsis" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>La Historia</a>
                  <a href="#mundo" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>El Mundo</a>
                  <a href="#magia" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>Magia</a>
                  <button onClick={() => setSelectedLore(true)} className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>Códice</button>
                  <button onClick={() => setSelectedGallery(true)} className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>Galería</button>
                  <a href="#libros" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>Saga</a>
                  <a href="#autor" className={`hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${resonance === 'umbrío' ? 'text-slate-200' : 'text-slate-900'}`}>Autor</a>
                </div>
              </div>

              <a
                href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-red-900 hover:bg-red-800 text-white text-xs sm:text-sm font-bold transition-all shadow-[0_0_10px_rgba(153,27,27,0.3)]"
              >
                Comprar
              </a>

              <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-400 hover:text-white p-2">
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-white/5 px-4 pt-2 pb-4 space-y-1">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Inicio</a>
            <a href="#sinopsis" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">La Historia</a>
            <a href="#mundo" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">El Mundo</a>
            <a href="#magia" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Magia</a>
            <button onClick={() => { setSelectedLore(true); setIsMenuOpen(false); }} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Códice</button>
            <button onClick={() => { setSelectedGallery(true); setIsMenuOpen(false); }} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Galería</button>
            <a href="#libros" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Saga</a>
            <a href="#autor" onClick={() => setIsMenuOpen(false)} className="block hover:text-purple-400 px-3 py-2 rounded-md text-base font-medium transition-colors">Autor</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${resonance === 'umbrío' ? 'opacity-100' : 'opacity-0'} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-950/30 via-[#030206] to-black -z-10`}></div>
        <div className={`absolute inset-0 transition-opacity duration-1000 ${resonance === 'luminoso' ? 'opacity-100' : 'opacity-0'} bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-[#060402] to-black -z-10`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-red-500 text-sm font-medium mb-6">
                <SigilIcon className="w-4 h-4 text-red-700" /> Nueve luces para nueve sombras
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 tracking-wide">
                Maltraxis: <span className={`transition-colors duration-1000 text-transparent bg-clip-text bg-gradient-to-r ${resonance === 'umbrío' ? 'from-red-300 via-red-800 to-red-950' : 'from-amber-200 via-amber-400 to-yellow-600'}`}>La Ciudad de las Sombras</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 font-serif italic">"Una fantasía oscura inmersiva que redefine el género."</p>
              <p className="text-lg lg:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
                Sumérgete en Noctara, una megalópolis gótico-industrial donde la magia se paga con la vida y la Luz es una tiranía.
                Acompaña a un detective cínico y a una joven que es la paradoja viviente entre dos mundos, en una huida desesperada que cambiará el destino de millones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#" onClick={() => setIsReadingOpen(true)} className={`inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-500 ${resonance === 'umbrío' ? 'bg-red-900 hover:bg-red-800 text-white shadow-[0_0_25px_rgba(153,27,27,0.4)]' : 'bg-amber-600 hover:bg-amber-500 text-slate-950 shadow-[0_0_25px_rgba(217,119,6,0.4)]'}`}>
                  <Book className="w-5 h-5" />
                  Leer Ahora (Capítulos Gratis)
                </a>
              </div>
            </div>

            {/* NOVEL COVER MOCKUP */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg aspect-[2/3] group">
              <div className={`absolute inset-0 rounded-2xl transform rotate-3 scale-105 opacity-65 duration-1000 transition-all blur-xl ${resonance === 'umbrío' ? 'bg-gradient-to-tr from-purple-600/30 to-indigo-500/25' : 'bg-gradient-to-tr from-amber-600/30 to-yellow-500/25'}`}></div>
              <img
                src={resonance === 'luminoso' ? `${import.meta.env.BASE_URL}portada2.png` : `${import.meta.env.BASE_URL}portada.jpg`}
                alt="Portada"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SYNOPSIS */}
      <section id="sinopsis" className="py-20 border-y border-white/5 relative overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        >
          <source src={`${import.meta.env.BASE_URL}mvideo.mp4`} type="video/mp4" />
        </video>

        {/* Capa de oscurecimiento ajustada */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Feather className={`w-12 h-12 mx-auto mb-6 transition-colors duration-1000 ${resonance === 'umbrío' ? 'text-red-700' : 'text-amber-500'}`} />
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-8 tracking-wider">La Ciudad de las Sombras</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed text-justify lg:text-center text-lg">
            <p>
              Maltraxis no es una simple ciudad de fantasía medieval; es un monstruo tecnológico-gótico de acero, cristal arcano y vapor. En sus niveles más profundos, la humanidad se desangra de deudas, consumiendo escoria de cristales mágicos en callejones húmedos bajo una lluvia constante.
            </p>
            <p>
              <strong>Gur</strong>, un ex-detective que arrastra la culpa de una muerte del pasado, debe infiltrarse en la Torre Anael para extraer a una criatura peligrosa. Al llegar a la cima descubre a <strong>Rabe</strong>, una joven confinada que desconoce su herencia híbrida de luz y oscuridad. Su escape desatará la furia de los Nueve Ángeles, decididos a purgar la inmundicia mortal e imponer una simetría blanca y silenciosa sobre Noctara.
            </p>
          </div>
        </div>
      </section>

      {/* SCENARIO DETAILS WITH TEMPORARY IMAGES */}
      <section id="mundo" className="py-24 relative bg-gradient-to-b from-transparent to-black/85">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-widest uppercase">El Escenario de Noctara</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-purple-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}calles.png`} alt="Calles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-serif">Distrito Inferior</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Calles empedradas marcadas por la humedad y el goteo de aceite de las calderas de vapor. El aire pesado transporta la desesperación de la clase obrera y la presencia de demonios menores refugiados en tabernas lúgubres.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-amber-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}jardines.png`} alt="Cielo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-serif">Jardines del Cielo</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Los Jardines del Cielo de Maltraxis son exuberantes oasis de naturaleza artificial que se extienden entre los pisos 100 y 125 de los rascacielos colosales de la ciudad, funcionando como un segundo nivel urbano suspendido en las alturas. Estas islas celestiales están interconectadas por puentes y plataformas grabados con runas de estabilización azules que brillan suavemente.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={`${import.meta.env.BASE_URL}lab.png`} alt="Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-serif">Las Forjas de Nixael</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Talleres de experimentación donde se tallan runas en engranajes masivos y se destilan gemas para bombear energía a la metrópolis. Ciencia, vacío y transmutación conviven en un peligroso balance.
                </p>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden bg-black/40 border border-white/5 hover:border-indigo-500/30 transition-all shadow-xl">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src="/azhar.jpeg" alt="Azhar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030206] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white font-serif">Azhar: La Ciudad de la Luz</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Contrapunto luminoso a Maltraxis. Azhar se erige como un faro de luz  y esperanza, donde la luz no solo ilumina, sino que dicta el orden y la justicia sobre los dominios telúricos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAGIC SYSTEM */}
      <section id="magia" className="py-24 relative bg-black/80 border-t border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-widest uppercase">El Ecosistema Mágico de Noctara</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-justify">
              Toda la magia en Noctara emana del Flujo Telúrico, la energía natural del núcleo del planeta. Haz clic en cada tipo de magia para explorar sus mecánicas y limitaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {magicLore.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedMagic(item)}
                className={`bg-black/40 p-6 rounded-2xl border ${item.color} cursor-pointer hover:bg-black/60 transition-all transform hover:-translate-y-1`}
              >
                <h3 className="text-xl font-bold text-white mb-4 font-serif">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed text-justify">
                  {item.shortDesc}
                </p>
                <span className="text-xs text-red-700 mt-4 inline-block font-bold">Leer más...</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAGIC MODAL */}
      {selectedMagic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedMagic(null)}>
          <div className="bg-[#0c0a09] border border-white/10 p-8 rounded-2xl max-w-2xl w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedMagic(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
              <X />
            </button>
            <h3 className="text-3xl font-bold text-white mb-4 font-serif">{selectedMagic.title}</h3>
            <p className="text-slate-300 leading-relaxed text-justify text-lg">
              {selectedMagic.fullDesc}
            </p>
          </div>
        </div>
      )}

      {/* READING MODAL */}
      {isReadingOpen && <ReadingModal />}

      {/* GALLERY MODAL */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedGallery(false)}>
          <div className="bg-[#0c0a09] border border-white/10 p-4 sm:p-8 rounded-2xl max-w-3xl w-full shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedGallery(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white z-10">
              <X />
            </button>
            <h3 className="text-2xl font-bold text-white mb-6 font-serif text-center">Galería Conceptual</h3>

            <div className="relative flex items-center justify-center">
              <button onClick={prevImage} className="absolute left-0 bg-black/50 p-2 rounded-full text-white hover:bg-red-900 transition-colors">
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>

              <div className="w-full h-auto overflow-hidden rounded-lg border border-white/10">
                <img src={galleryImages[currentGalleryIndex].src} alt={galleryImages[currentGalleryIndex].alt} className="w-full h-auto" />
              </div>

              <button onClick={nextImage} className="absolute right-0 bg-black/50 p-2 rounded-full text-white hover:bg-red-900 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <p className="text-center text-slate-400 mt-4 font-serif">{galleryImages[currentGalleryIndex].alt}</p>
          </div>
        </div>
      )}

      {/* NOVELS SAGA SECTION */}
      <section id="libros" className="py-24 relative bg-[#060402]/90 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-widest uppercase">La Saga Maltraxis</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Sumérgete en el mundo de Abyloria a través de las novelas de la saga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Book 1 */}
            <div className="bg-black/60 rounded-2xl p-6 border border-white/5 hover:border-red-900/20 transition-all flex flex-col sm:flex-row gap-6">
              <a href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6" target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/3 aspect-[2/3] overflow-hidden rounded-lg relative block">
                <img src="/portada.jpg" alt="Libro 1" className="w-full h-full object-contain bg-black hover:scale-105 transition-transform duration-500" />
              </a>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-red-700 font-bold">Volumen I</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-3">La Ciudad de las Sombras</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    La introducción al mundo de Noctara. Acompaña a Gur en su misión suicida para liberar a Rabe de la Torre Anael y desatar una verdad que cambiará el destino de los mortales.
                  </p>
                </div>
                <a
                  href="https://www.amazon.com/Maltraxis-ciudad-las-sombras-Spanish-ebook/dp/B0F77932D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wider bg-red-900 hover:bg-red-800 text-white transition-all duration-300 shadow-[0_0_15px_rgba(153,27,27,0.3)]"
                >
                  <BookOpen className="w-4 h-4" />
                  Comprar en Amazon
                </a>
              </div>
            </div>

            {/* Book 2 */}
            <div className="bg-black/60 rounded-2xl p-6 border border-white/5 hover:border-amber-500/20 transition-all flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-1/3 aspect-[2/3] overflow-hidden rounded-lg relative">
                <img src="/portada2.png" alt="Libro 2" className="w-full h-full object-contain bg-black" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">Volumen II</span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-3">El Juicio del Alba</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    La rebelión de los Nueve Ángeles ha comenzado. El aire se llena de vapor y el cielo arde con fuego de runas artificiales. Gur y Rabe deben buscar aliados en las forjas olvidadas.
                  </p>
                </div>
                <button className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors">
                  Próximamente <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section id="autor" className="py-24 relative bg-black/90 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 relative shadow-2xl shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-amber-500/20 mix-blend-overlay"></div>
              <img src="/yo.jpg" alt="Jose C. Sierra" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-red-700 font-bold">El Autor</span>
              <h2 className="text-4xl font-serif font-bold text-white mt-1 mb-4">Jose C. Sierra</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Jose C. Sierra es un apasionado escritor de fantasía. Inspirado por la mitología clásica, la tecnología retrofuturista y la narrativa noir, ha construido el universo de Maltraxis como un reflejo de las luchas internas del ser humano bajo la opresión de sistemas implacables.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="mailto:jcsierrah77@gmail.com" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> Contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SUBSCRIPTION SECTION */}
      <section className="py-16 bg-red-950/20 border-t border-white/5 text-center">
        <h3 className="text-2xl font-serif text-white mb-4">¿Quieres saber qué ocurre después?</h3>
        <p className="text-slate-400 mb-6">Suscríbete y recibe los primeros capítulos gratis.</p>
        <div className="max-w-md mx-auto px-4">
          <div 
            className="ml-embedded" 
            data-form="olRIIV"
            key="mailerlite-form"
          ></div>
        </div>
      </section>

      <TestimonialsSection />
      <StickyCTA />

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Jose C. Sierra. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
