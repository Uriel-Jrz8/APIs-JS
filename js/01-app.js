/* const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then((respuesta) => {
            console.log('El resultado es', respuesta);
        })
});


const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Nueva notificacion', {
            icon: '/img/ccj.png',
            body: 'mensaje de notificación'
        });
        notificacion.onclick = function(){
            window.open('google.com')
        }
    }
}); */

/* Consumiendo PokeApi */


