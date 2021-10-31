function get_viewers_ip(json){
	viewers_ip = jason.ip;

	count_view(viewers_ip);

}
function counter_view(viewers_ip){
	var views;
	var ip_to_string = viewers_ip.toString();
	for (var i, i = 0; i < ip_to_string.length; i++) {
		ip_to_string = ip_to_string.replace(".","-");
	}

	firebase.database().ref().chaild("page_views/" + ip_to_string).set({
		viewers_ip : viewers_ip
	});

	firebase.database().ref().chaild("page_views/").on("value", function(snapshot){
		views = snapshot.numChildren();
		document.getElementById('view_count_text').innerHTML = "";
	});
}