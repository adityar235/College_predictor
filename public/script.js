document.getElementById("category").addEventListener("change", function() {
    const category = this.value;
    const subcategoryContainer = document.getElementById("subcategoryRankContainer");
    
    if (category === "General") {
        subcategoryContainer.style.display = "none";
    } else {
        subcategoryContainer.style.display = "block";
    }
});

document.getElementById("collegeForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const gender = document.getElementById("gender").value;
    const category = document.getElementById("category").value;
    const rank = document.getElementById("rank").value;
    const subcategoryRank = category === "General" ? rank : document.getElementById("subcategoryRank").value;

    // Show loading spinner
    const resultDiv = document.getElementById("result");
    const loadingDiv = document.getElementById("loading");
    resultDiv.innerHTML = "";
    loadingDiv.style.display = "block";

    try {
        const response = await fetch("/getColleges", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gender, category, rank, subcategoryRank })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Hide spinner
        loadingDiv.style.display = "none";

        if (data.length === 0) {
            resultDiv.innerHTML = "<p>No colleges found for your criteria.</p>";
            return;
        }

        data.forEach(college => {
            const collegeDiv = document.createElement("div");
            collegeDiv.className = "college-card";
            collegeDiv.innerHTML = `<h3>${college.college} - ${college.branch}</h3>`;

            college.rounds.forEach(round => {
                const roundDiv = document.createElement("div");
                roundDiv.className = `round ${round.color}`;
                roundDiv.innerText = `${round.round}: ${round.value}`;
                collegeDiv.appendChild(roundDiv);
            });

            const lastRankDiv = document.createElement("div");
            lastRankDiv.innerHTML = `<strong>Last Rank: ${college.last_rank}</strong>`;
            collegeDiv.appendChild(lastRankDiv);

            resultDiv.appendChild(collegeDiv);
        });
    } catch (error) {
        loadingDiv.style.display = "none";
        resultDiv.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
});