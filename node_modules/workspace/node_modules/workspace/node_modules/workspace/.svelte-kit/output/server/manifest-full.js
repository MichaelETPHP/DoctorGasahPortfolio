export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["doctor-profile.jpg","favicon.png","favicon.svg","images/dr-gasah-profile.jpg","images/heart-logo.svg","images/hospital-icon.svg","images/service-icons.svg","images/team-member1.svg","images/team-member2.svg","images/team-member3.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DJWsn6kE.js",app:"_app/immutable/entry/app.Dgc_M9ix.js",imports:["_app/immutable/entry/start.DJWsn6kE.js","_app/immutable/chunks/BVTvo2Gl.js","_app/immutable/chunks/CBZ1BmCR.js","_app/immutable/entry/app.Dgc_M9ix.js","_app/immutable/chunks/CBZ1BmCR.js","_app/immutable/chunks/o-OwQ9Xp.js","_app/immutable/chunks/tSfN_3by.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/booking",
				pattern: /^\/api\/booking\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/booking/_server.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
