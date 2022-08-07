
<h2 align="center">getGithub</h2>
<h3 align="center">Just a snippet of code to get Github data by user, repo and parameters</h3>

### [🎮 Demo on console.log()](https://orsifrancesco.github.io/getGithub)
### ⚖️ Licensed under MIT
### 🤓 Author [@orsifrancesco](https://twitter.com/orsifrancesco)
### ☕ [Offer me a coffee](https://www.paypal.com/donate/?business=5EL4L2LDYVH96)
<!--### ☕ [Offer me a coffee](https://paypal.me/orsifrancesco)-->

<hr/>

## 📦 Just a snippet of code

```js
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
```

## 🕹️ JSON output

```json
{
    "getUserData": [
        {
            "id": 265545485,
            "node_id": "MDEwOlJlcG9zaXRvcnkyNjU1NDU0ODU=",
            "name": "instagram-without-api",
		    ...
            "watchers": 63
        },
        {
            "id": 519609940,
            "node_id": "R_kgDOHvieVA",
		    ...
            "forks": 12,
            "watchers": 53
        },
        {
            "id": 425524054,
            "node_id": "R_kgDOGVz7Vg",
            ...
        }
    ],
    "getRepoData": {
        "id": 265545485,
        "node_id": "MDEwOlJlcG9zaXRvcnkyNjU1NDU0ODU=",
        "name": "instagram-without-api",
        "full_name": "orsifrancesco/instagram-without-api",
        "private": false,
	    ...
    "visibility": "public",
        "forks": 2,
        "open_issues": 0,
        "watchers": 63,
        "default_branch": "master",
        "score": 1
    },
    "getRepoParameter": 63
}
```

## ⚖️ License

Licensed under MIT


## ☕ About

Any feedback to [@orsifrancesco](https://twitter.com/orsifrancesco) and/or [coffee](https://www.paypal.com/donate/?business=5EL4L2LDYVH96) is welcome :) 