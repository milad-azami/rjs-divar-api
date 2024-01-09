$(document).ready(function() {
	var development = {
		url: {
			defaultBaselayer: 'https://map.ir/shiveh',
			static: 'https://map.ir/static',
			weather: 'weather.json',
			downloads: {
				apps: {
					android: 'http://corp.map.ir/دانلود-اپلیکیشن-مپ/',
					ios: '#',
				},
			},
			search: {
				geocode: 'search-geocode.json',
				reverse: 'search-reverse.json',
				poi: 'search-poi.json',
			},
			route: 'https://map.ir/routes/',
			auth: {
				server: '',
				signUp: 'https://map.ir/auth/users',
				login: 'https://map.ir/auth/authenticate',
				logout: 'https://map.ir/auth/authenticate',
				validate: 'https://map.ir/auth/validate',
				settings: 'https://map.ir/auth/users',
				readUser: 'https://map.ir/auth/users',
				forgotPassword: 'https://map.ir/auth/forgot-password',
				validateForgot: 'https://map.ir/auth/validate-forgot',
				resetPassword: 'https://map.ir/auth/forgetToken',
				changePassword: 'https://map.ir/auth/change-password',
				googleAuth: 'https://map.ir/social/web/redirect',
				sms: 'https://map.ir/auth/sms'
			},
			feedback: 'http://support.map.ir/api/index.php/Tickets/Ticket',
			routing: {
				primary: 'https://map.ir/routes/route/v1',
				foot: 'https://map.ir/routes/foot/v1',
				bicycle: 'https://map.ir/routes/bicycle/v1',
				zojofard: 'https://map.ir/routes/zojofard/v1',
				tarh: 'https://map.ir/routes/tarh/v1'
			},
		},
	}

	var production = {
		url: {
			defaultBaselayer: 'https://map.ir/shiveh',
			static: 'https://map.ir/static',
			weather: 'https://dev.map.ir/weather/weathers/geojson',
			downloads: {
				apps: {
					android: 'http://corp.map.ir/دانلود-اپلیکیشن-مپ/',
					ios: '#',
				},
			},
			search: {
				geocode: 'https://map.ir/search',
				reverse: 'https://map.ir/reverse',
				poi: 'https://map.ir/search',
			},
			route: 'https://map.ir/routes/',
			auth: {
				server: '',
				signUp: 'https://map.ir/auth/users',
				login: 'https://map.ir/auth/authenticate',
				logout: 'https://map.ir/auth/authenticate',
				validate: 'https://map.ir/auth/validate',
				settings: 'https://map.ir/auth/users',
				readUser: 'https://map.ir/auth/users',
				forgotPassword: 'https://map.ir/auth/forgot-password',
				validateForgot: 'https://map.ir/auth/validate-forgot',
				resetPassword: 'https://map.ir/auth/forgetToken',
				changePassword: 'https://map.ir/auth/change-password',
				googleAuth: 'https://map.ir/social/web/redirect',
				sms: 'https://map.ir/auth/sms'
			},
			feedback: 'http://support.map.ir/api/index.php/Tickets/Ticket',
			routing: {
				primary: 'https://map.ir/routes/route/v1',
				foot: 'https://map.ir/routes/foot/v1',
				bicycle: 'https://map.ir/routes/bicycle/v1',
				zojofard: 'https://map.ir/routes/zojofard/v1',
				tarh: 'https://map.ir/routes/tarh/v1'
			},
		},
	}

	var self = {
		url: {
			defaultBaselayer: 'https://map.ir/shiveh',
			static: '/static',
			weather: '/weather/weathers/geojson',
			downloads: {
				apps: {
					android: 'http://corp.map.ir/دانلود-اپلیکیشن-مپ/',
					ios: '#',
				},
			},
			search: {
				geocode: '/search',
				reverse: '/reverse',
				poi: '/search',
			},
			route: 'https://map.ir/routes/',
			auth: {
				server: '',
				signUp: '/auth/users',
				login: '/auth/authenticate',
				logout: '/auth/authenticate',
				validate: '/auth/validate',
				settings: '/auth/users',
				readUser: '/auth/users',
				forgotPassword: '/auth/forgot-password',
				validateForgot: '/auth/validate-forgot',
				resetPassword: '/auth/forgetToken',
				changePassword: '/auth/change-password',
				googleAuth: '/social/web/redirect',
				sms: '/auth/sms'
			},
			feedback: '/api/index.php/Tickets/Ticket',
			routing: {
				primary: '/routes/route/v1',
				foot: '/routes/foot/v1',
				bicycle: '/routes/bicycle/v1',
				zojofard: '/routes/zojofard/v1',
				tarh: '/routes/tarh/v1'
			},
		},
	}

	var env = {
		development: development,
		production: production,
		self: self,
	}

	$.env = function(opt) {
		var options = $.extend(true, {
			mode: 'production',
		}, opt);

		var output = env[options.mode];

		output.mode = options.mode;
		output.domain = window.location.origin;
		output.href = window.location.href.split('/#/')[0];

		return output;
	}

})
