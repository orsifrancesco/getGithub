function getGithub({ user, id, parameter }) {
	return new Promise((resolve, reject) => {

		if (!user) resolve(false);
		const url = `https://api.github.com/search/repositories?q=user:${user}`;
		fetch(url)
			.then(x => x?.json())
			.then(y => {
				if (!id) resolve(y?.items);
				if (!parameter) resolve(y?.items?.find(el => el.id === id));
				resolve(y?.items?.find(el => el.id === id)?.[parameter]);
			});
	});

}

async function fetchData() {

	const getUserData = await getGithub({ user: 'orsifrancesco' });
	const getRepoData = await getGithub({ user: 'orsifrancesco', id: 265545485 });
	const getRepoParameter = await getGithub({ user: 'orsifrancesco', id: 265545485, parameter: 'watchers' });

	console.log({
		getUserData,
		getRepoData,
		getRepoParameter
	});

}

fetchData();