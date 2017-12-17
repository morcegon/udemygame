new Vue({
	el: '#app',
	data: {
		inGame: false,
		initialHelth: 100
	},
	computed: {
		playerHelth: function() {
			total = this.initialHelth;
			return total + '%'
		},
		monsterHelth: function() {
			total = this.initialHelth;
			return total + '%'
		}
	}
});