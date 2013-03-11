define(['underscore', 'hbs!./reader'], function(_, template) {
	return {

		initialize: function() {
			
			_.bindAll(this);

			this.render();
		},

		render: function() {
			this.html(template({"nbPage" : this.options.nbPage}));
		}

	};
});
