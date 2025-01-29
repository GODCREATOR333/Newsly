# Newsly

**Newsly** is an advanced, self-hosted artificial intelligence platform designed to address the proliferation of misinformation and enhance journalistic accountability. It employs a **Retrieval-Augmented Generation (RAG) pipeline** to systematically extract, cross-verify, and process news articles utilizing **SearxNG** (a self-hosted metasearch engine) and cloud-based APIs (**Google Cloud/Gemini**).

The system integrates **multi-agent orchestration via Autogen AG2** alongside **Qdrant Vector Database**, ensuring robust, transparent, and highly accurate news analysis and content generation.

## 🚀 Key Features

- **Self-Hosted & Dockerized Deployment** – Enables seamless installation and management.
- **AI-Driven Verification** – Utilizes **Llama 3.2-3B (Ollama)** for sophisticated content validation.
- **Multi-Agent Coordination** – Employs Autogen AG2 to automate data acquisition, content synthesis, and publication.
- **Retrieval-Augmented Generation (RAG) Pipeline** – Enhances information retrieval efficacy and factual accuracy.
- **Qdrant Vector Database Integration** – Facilitates high-performance data indexing and function execution.
- **Automated Content Creation** – Supports the generation of written articles and podcast transcripts.

## 📦 Technological Stack

- **Programming Languages:** Python, Bash
- **AI Models:** Llama 3.2-3B (Ollama)
- **Search & Data Aggregation:** SearxNG, Google Cloud/Gemini APIs
- **Database Architecture:** Qdrant Vector DB
- **Orchestration & Automation:** Autogen (AG2)
- **Deployment Framework:** Docker

## 🛠 Installation Guide

### Prerequisites

- Docker & Docker Compose
- Python 3.10+
- Ollama installed ([Installation Guide](https://ollama.ai/docs/installation))

### Deployment

```bash
# Clone the repository
git clone https://github.com/GODCREATOR333/Newsly.git
cd Newsly

# Launch the Docker container
docker-compose up -d
```

## ⚙️ Configuration

Modify the `.env` file to specify API credentials for Google Cloud/Gemini and additional configurations:

```env
SEARXNG_URL=http://localhost:8888
GEMINI_API_KEY=your_api_key
```

## 🎯 Operational Workflow

### 1️⃣ Initiate News Scraping
```bash
python scripts/scrape_news.py
```

### 2️⃣ Execute Content Generation
```bash
python scripts/generate_content.py
```

### 3️⃣ Publish Content to Platform
```bash
python scripts/publish.py
```

## 📖 System Architecture & Functionality

1. **Data Extraction** – Aggregates news content from diverse sources through **SearxNG & API-based retrieval**.
2. **Fact Verification** – Employs the **RAG pipeline** for automated fact-checking and credibility assessment.
3. **Content Synthesis** – AI models generate structured summaries, detailed articles, and podcast scripts.
4. **Automated Publishing** – Facilitates seamless content distribution for enhanced public engagement.

## 🤝 Contribution Guidelines

Contributions are highly encouraged. Please submit **pull requests (PRs)** or raise **issues** to suggest enhancements or report bugs.

## 📜 Licensing Information

This project is distributed under the MIT License. Refer to the [LICENSE](LICENSE) file for further details.

## 🌐 Connect with Us

- **GitHub**: [@GODCREATOR333](https://github.com/GODCREATOR333)
- **Twitter/X**: [@yourhandle](https://twitter.com/yourhandle) <!-- Replace with actual handle -->

---

*Advancing the integrity of journalism through artificial intelligence.*

