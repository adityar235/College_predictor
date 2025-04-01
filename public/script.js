document.getElementById("collegeForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const gender = document.getElementById("gender").value;
    const category = document.getElementById("category").value;
    const rank = document.getElementById("rank").value;

    const response = await fetch("/api/getColleges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gender, category, rank })
    });

    const data = await response.json();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

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
});