export const wechatDingYue = ()=> {
	let ids = ['Np-O5k2OZMay0LzYtirB-qfK_cwp1uuzGSOG9Gl-cLc', 'z9MZO3mlh_mhTsx7aFvkCNupGaIrpf7RB2wmmwwjqog'];
	return new Promise((resolve,reject)=>{
		uni.requestSubscribeMessage({
			tmplIds: ids,
			success(res) {
				resolve()
			},
		});
	})
}
