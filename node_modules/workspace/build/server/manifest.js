const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.BnvHVEj3.js",app:"_app/immutable/entry/app.B6EzP_o0.js",imports:["_app/immutable/entry/start.BnvHVEj3.js","_app/immutable/chunks/BB2CLqHe.js","_app/immutable/chunks/CBZ1BmCR.js","_app/immutable/entry/app.B6EzP_o0.js","_app/immutable/chunks/CBZ1BmCR.js","_app/immutable/chunks/o-OwQ9Xp.js","_app/immutable/chunks/tSfN_3by.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-nzWYwuUy.js')),
			__memo(() => import('./chunks/1-CY8G_FlM.js')),
			__memo(() => import('./chunks/2-Bdd55N2f.js'))
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
				endpoint: __memo(() => import('./chunks/_server-BWscrYHo.js'))
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

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
