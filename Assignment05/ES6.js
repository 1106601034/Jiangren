function fetchData1(url, callback) {
    setTimeout(() => {
        callback(url);
    }, 2000);
}

function fetchData2(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url);
        }, 2000);
    });
}

async function loadData(data) {
    try {
        const result = await fetchData2(data);
        return result;
    } catch (error) {
        console.error(`Error message: ${error}`)
    }
}

function betterVisualExperience(sort) {
    console.log(`----------------`)
    console.log(`Question ${sort}:`)
}

function Main(Url) {
    console.clear();

    betterVisualExperience(1);
    console.log(`Fetching data from ${Url}`);
    fetchData1(Url, async (Url) => {
        console.log(`Data from ${Url}`)

        betterVisualExperience(2);
        console.log(`Fetching data from ${Url}`);
        await fetchData2(Url)
            .then(results => { console.log(`Data from ${results}`) })
            .catch(() => console.error("Invaild url."))

        betterVisualExperience(3);
        console.log(`Fetching data from ${Url}`);
        await loadData(Url)
            .then(results => { console.log(`Data from ${results}`) });
    })
}

Main(`Jiangren.com`)