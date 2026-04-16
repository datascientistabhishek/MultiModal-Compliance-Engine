document.addEventListener("DOMContentLoaded", () => {
    const analyzeButton = document.getElementById("analyze-button");
    const videoUrlInput = document.getElementById("video-url");
    const loadingSpinner = document.getElementById("loading-spinner");
    const resultsSection = document.getElementById("results");
    const statusElement = document.getElementById("status");
    const finalReportElement = document.getElementById("final-report");
    const complianceIssuesElement = document.getElementById("compliance-issues");

    analyzeButton.addEventListener("click", async () => {
        const videoUrl = videoUrlInput.value.trim();

        // Basic validation for URL
        if (!isValidUrl(videoUrl)) {
            alert("Please enter a valid YouTube video URL.");
            return;
        }

        // Show loading spinner and hide results
        loadingSpinner.classList.remove("hidden");
        resultsSection.classList.add("hidden");

        try {
            const response = await fetch("http://127.0.0.1:8000/audit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ video_url: videoUrl }),
            });

            if (!response.ok) {
                throw new Error("Failed to analyze video. Please try again later.");
            }

            const data = await response.json();

            // Display results
            displayResults(data);
        } catch (error) {
            alert(error.message);
        } finally {
            // Hide loading spinner
            loadingSpinner.classList.add("hidden");
        }
    });

    function isValidUrl(url) {
        const urlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/).+$/;
        return urlPattern.test(url);
    }

    function displayResults(data) {
        // Show results section
        resultsSection.classList.remove("hidden");

        // Display status
        statusElement.textContent = `Status: ${data.status}`;
        statusElement.style.color = data.status === "PASS" ? "green" : "red";

        // Display final report
        finalReportElement.textContent = `Final Report: ${data.final_report}`;

        // Display compliance issues
        complianceIssuesElement.innerHTML = ""; // Clear previous issues
        data.compliance_results.forEach(issue => {
            const issueElement = document.createElement("div");
            issueElement.classList.add("issue");
            issueElement.innerHTML = `
                <strong>Category:</strong> ${issue.category}<br>
                <strong>Severity:</strong> <span class="${issue.severity.toLowerCase()}">${issue.severity}</span><br>
                <strong>Description:</strong> ${issue.description}
            `;
            complianceIssuesElement.appendChild(issueElement);
        });
    }
});