window.onload = async function() {
    const url = "https://newsapi.org/v2/everything";
    const apiKey = '6458b118fc1149fb9a38c6c24bcb2757';

    const response = await fetch(`${url}?${new URLSearchParams({
        q: "brazil dev",
        from: "2023-11-01",
        sortBy: "publishedAt",
        apiKey,
      })}`, {
        method: 'GET'
      }
    )
    const results = await response.json();

    console.log(results);

    if (results.status === "ok" ){
        const divStream = document.getElementById("stream");

        results.articles.forEach(item => {
            
        });
    }
}
