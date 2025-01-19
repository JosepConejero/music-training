# Errores para corregir

- less than 8 no funciona por un sostenido
- from - to -> validaciones (si la6 la6, bucle infinito)
- from - to -> cuando sale el foco se resetean los valores por defecto, no hay permanencia
- podría ser que estuviera duplicando el estado de los botones toggle tanto dentro del componente lit como fuera del componente 
  en react con useState
- error cuando subo a 12 el botón de intervals, no aparece bien; y si después subo y bajo, se descuadra, aparece una cosa en el botón y 
  el número de semitonos o teclas sale incorrecto


# TAREAS SIGUIENTES
- ERROR EN EL BOTÓN DE LOS INTERVALOS CUANDO FLAT, SHARP Y NATURAL ESTÁN DESPULSADOS y con las flechas se selecciona un intervalo
- botón de los intervalos para escoger qué distancia practicar (o si practicar todas)
- dibujos del "play", el "stop" y las flechas de "arriba" y "abajo" en los botones de time
- dibujar el play, stop y flechas de la pestaña staff y añadirlos
- solucionar la anchura de los triángulos en los botones de up y down
- arreglar lo del temporizador con un toggle de play / que todos los botones se ensombrezcan cuando esté pulsado el play / que el play se ensombrezca
- incluir en el componente my-buttons un icono para play y otro para stop (y añadirlo como atributo del componente, p.e. icons="play/stop")
- añadir audio, mp3 de las notas para dictados
- botón de 'la' en página staff
- probar a quitar lo del converter
- que se pueda mover con el dedo de una opción del menú principal a otra
- hilera de botones genérica horizontal o vertical para crear los que queramos
- añadir sombras a los botones
- crear componente lit con el botón de mostrar
- dibujar las armaduras y el compás en svg
- favicon
- botón para mostrar / ocultar una información
- borrar clases de los elementos que he anulado
- eliminar componente Staff y todos los de dentro (cuidado con el archivo .css correspondiente)
- sustituir \u{266f} por su svg y \u{266d} por su svg
- isFlat, isSharp, isNatural están repetidos de algún modo (hay q arreglarlo)
- convertir funcionalidades de intervalspage y staffpracticepage en hooks
- clave de sol también para los intervalos
- modificar el complete-intervals para que con map y filter genere arrays con menos valores
- añadir lista de presets para practicar los intervalos
- añadir menú hamburguesa para la versión móvil


# VSC
- autocorrección CSS
- que muestre la branch en la terminal
 

# Funcionalidades para añadir
- app para dibujar svg's