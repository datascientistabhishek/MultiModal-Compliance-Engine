# Azure Multi-Modal Compliance Orchestration Engine using LangGraph

## Introduction
This project is a cutting-edge multimodal AI system designed to analyze videos for compliance using a combination of Azure services, Generative AI, and a Retrieval-Augmented Generation (RAG) pipeline. By leveraging advanced video analysis, natural language processing, and workflow orchestration, this system generates comprehensive compliance reports for video content.

---

## Architecture
The system follows a streamlined pipeline:

1. **Video Input**: Users provide a video for analysis.
2. **Azure Video Indexer**: Extracts video transcripts and metadata.
3. **Transcript Embeddings**: Converts transcripts into vector embeddings.
4. **Azure AI Search**: Stores and retrieves embeddings for context.
5. **Azure OpenAI (GPT-4o)**: Processes retrieved context to generate compliance insights.
6. **Compliance Report**: Outputs a detailed report with compliance status and issues.

---

## Tech Stack
- **Backend**: Python, FastAPI
- **Workflow Orchestration**: LangGraph
- **AI Services**:
  - Azure OpenAI (GPT-4o)
  - Azure AI Search (Vector Database)
  - Azure Video Indexer
- **Frontend**: Streamlit / HTML, CSS, JavaScript

---

## Key Features
- **Multimodal Video Understanding**: Combines video, audio, and text analysis.
- **RAG-Based Compliance Checking**: Ensures accurate and context-aware compliance validation.
- **Rule-Based + LLM Reasoning**: Integrates traditional rule-based logic with advanced language models.
- **API + UI Integration**: Provides a seamless user experience with both programmatic and visual interfaces.

---

## How It Works
1. **User Input**: The user uploads a video or provides a video URL.
2. **Video Analysis**: Azure Video Indexer extracts transcripts and metadata.
3. **Embedding Generation**: Transcripts are converted into embeddings for semantic search.
4. **Context Retrieval**: Azure AI Search retrieves relevant context for compliance queries.
5. **Compliance Analysis**: Azure OpenAI processes the context and generates a compliance report.
6. **Output**: The system delivers a detailed compliance report with status, summary, and issue breakdown.

---

## Screenshots
*Placeholder for screenshots*

---

## API
### Endpoint: `/audit`
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

---

## Frontend
- **Features**:
  - Input field for video URL
  - "Analyze Video" button
  - Loading spinner during processing
  - Results displayed with:
    - **Status**: PASS/FAIL (color-coded)
    - **Final Report**: Highlighted summary
    - **Compliance Issues**: Category, severity, and description
  - Modern UI with dark/light theme and smooth animations

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
2. Enter a valid video URL.
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
   - Ensure the video URL is valid and accessible.

---

## License
This project is licensed under the MIT License.