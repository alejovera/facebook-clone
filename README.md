# Facebook Clone
Este proyecto utilizó React Js y CSS para el frontend. Tiene un diseño responsive que se adapta a los diferentes tamaños de pantalla. Utiliza BEM para asignar las clases a los elementos de la página y así estilarlos eficientemente.

## Firebase
En este proyecto se utilizó Firebase para el Hosting y para conectar con una base de datos, Firestore. Así cada Posteo de Facebook está conectada a una base de datos y los posteos permanecen en la página luego de cerrar la App. También se utiliza la Authentication de Firebase, así se inicia sesión en la App emulando lo que sería en la página de Facebook. Firebase permite muchas funcionalidades de una manera rápida y sencilla.

## React Context API
También se utiliza React Context API que sirve para poder acceder a cierta información desde cualquier componente sin tener que pasarlo sucesivamente por las props. Así todos los componentes pueden acceder a cierta información de una forma muy sencilla. En el caso de este Facebook Clon se utiliza para acceder a la información del user en toda la página, que se guarda en el momento de inicio de sesión.
