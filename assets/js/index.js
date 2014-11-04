document.addEventListener('deviceready', onDeviceReady, true);
document.addEventListener("offline", onOffLine, true);

function onDeviceReady() {
	// var ref = window.open(encodeURI('http://elogold-acceptance.herokuapp.com/users/sign_in'), '_self', 'location=no');
	var ref = window.open(encodeURI('https://office.elogoldbrasil.com.br/users/sign_in'), '_self', 'location=no');
}
function onOffLine() {
	navigator.notification.vibrate(100);
	navigator.notification.alert("Você está sem conexão com internet",closeApp,"Alerta",'OK!');
}
function closeApp(){
	if (navigator.app) {
		navigator.app.exitApp();
	}else if (navigator.device) {
		navigator.device.exitApp();
	}
}