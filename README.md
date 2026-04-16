# Compliance QA Pipeline

## Overview
This project is a Compliance QA Pipeline that analyzes YouTube videos for compliance issues. It consists of a FastAPI backend and a modern, responsive frontend built with HTML, CSS, and Vanilla JavaScript.

---

## Features
### Backend
- **Endpoint**: `/audit`
  - **Method**: POST
  - **Request Body**:
    ```json
    {
        "video_url": "string"
    }
    ```
  - **Response**:
    - `status`: PASS/FAIL
    - `final_report`: Summary of the analysis
    - `compliance_results`: List of issues with category, severity, and description

### Frontend
- Input field for YouTube video URL
- "Analyze Video" button
- Loading spinner while processing
- Results displayed in a structured format:
  - **Status**: PASS/FAIL (color-coded)
  - **Final Report**: Highlighted summary
  - **Compliance Issues**:
    - Category
    - Severity (Critical, Medium, Minor)
    - Description
- Modern UI with dark/light theme
- Smooth animations and transitions

---

## Project Structure
```
ComplianceQAPipeline/
├── backend/
│   ├── dockerfile
│   ├── data/
│   ├── scripts/
│   │   └── index_documents.py
│   ├── src/
│   │   ├── api/
│   │   │   ├── server.py
│   │   │   └── telemetry.py
│   │   ├── graph/
│   │   │   ├── __init__.py
│   │   │   ├── nodes.py
│   │   │   ├── state.py
│   │   │   └── workflow.py
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   └── video_indexer.py
│   └── tests/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── main.py
├── pyproject.toml
├── README.md
└── .venv/
```

---

## Setup Instructions

### Prerequisites
- Python 3.9+
- Node.js (optional, for serving frontend)
- Git

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ComplianceQAPipeline
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv .venv
   source .venv/Scripts/activate  # On Windows
   # OR
   source .venv/bin/activate      # On Linux/Mac
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```
5. Open the Swagger UI to test the API:
   ```
   http://127.0.0.1:8000/docs
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Serve the `index.html` file:
   - **Option 1**: Open directly in a browser.
   - **Option 2**: Use Python's HTTP server:
     ```bash
     python -m http.server 8000
     ```
     Open `http://localhost:8000` in your browser.
   - **Option 3**: Use VS Code Live Server extension.

---

## Usage
1. Open the frontend in your browser.
2. Enter a valid YouTube video URL.
3. Click the "Analyze Video" button.
4. View the results:
   - Status (PASS/FAIL)
   - Final Report
   - Compliance Issues

---

## Troubleshooting
### Common Issues
1. **Failed to Fetch**:
   - Ensure the backend is running at `http://127.0.0.1:8000`.
   - Add CORS middleware to the backend if needed:
     ```python
     from fastapi.middleware.cors import CORSMiddleware

     app.add_middleware(
         CORSMiddleware,
         allow_origins=["*"],
         allow_credentials=True,
         allow_methods=["*"],
         allow_headers=["*"],
     )
     ```

2. **Invalid URL**:
   - Ensure the YouTube URL is valid (e.g., `https://youtu.be/...` or `https://www.youtube.com/watch?v=...`).

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact
For any inquiries, please contact:
- **Name**: Your Name
- **Email**: your.email@example.com