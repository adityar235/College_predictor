document.getElementById("collegeForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const gender = document.getElementById("gender").value;
    const category = document.getElementById("category").value;
    const rank = document.getElementById("rank").value;

    try {
        const response = await fetch("/api/getColleges", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gender, category, rank })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "";

        // ... (rest of your existing display code)
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("result").innerHTML = `
            <div class="error">Error loading data. Please try again later.</div>
            <div>${error.message}</div>
        `;
    }
});