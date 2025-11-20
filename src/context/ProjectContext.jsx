// ProjectContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Dummy data for projects
const dummyProjects = [
  {
    id: "project-1",
    Title: "IPL Spark Data Engineering System",
    Description: "Designed an end-to-end data engineering pipeline using Apache Spark to clean, transform, and analyze IPL datasets efficiently for match insights and player performance reporting.",
    Img: "ipl spark.png",
    Link: "https://github.com/prashant13245/ipl-spark-data-engineering-system",
    TechStack: ["PySpark", "Hadoop", "AWS S3", "Airflow"],
    Features: [
      "Distributed dataset processing",
      "Automated data ingestion & ETL",
      "Data quality checks",
      "Interactive performance reports",
      " Scalable architecture design",
      "Large CSV ingestion & transformation"
    ],
    Github: "https://github.com/prashant13245/ipl-spark-data-engineering-system"
  },
  {
    id: "project-2",
    Title: "COVID-19 Interactive Visual Dashboard",
    Description: "A data-driven visualization dashboard showing global COVID-19 trends using interactive charts and real-time visual insights on cases, recoveries, and fatalities",
    Img: "covid19.png",
    Link: "https://github.com/prashant13245/covid19-interactive-visuals",
    TechStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
    Features: [
      "Real-time COVID-19 data analysis",
      "Interactive charts & dashboards",
      "Country-wise trend comparison",
      "Data cleaning & preprocessing",
      " Visual insights on key metrics"
    ],
    Github: "https://github.com/prashant13245/covid19-interactive-visuals"
  },
  {
    id: "project-3",
    Title: "Uber Data Engineering ETL",
    Description: " A production-level ETL system to process Uber trip data for demand forecasting, revenue analytics, and trip pattern insights.",
    Img: "uber.png",
    Link: "https://github.com/prashant13245/uber-data-engineering-etl",
    TechStack: ["Apache Spark", "Scala", "Kafka", "Cassandra","Python"],
    Features: [
      "Real-time data ingestion with Kafka",
      "Transformation using PySpark",
      "Automated ETL jobs",
      "Trip heatmaps & analytics",
      "Demand forecasting models"
    ],
    Github: "https://github.com/prashant13245/uber-data-engineering-etl"
  },
  {
    id: "project-4",
    Title: "Decentrafile — Decentralized File Sharing App",
    Description: "A file-sharing system that stores files using a decentralized model ensuring security, immutability, and distributed access.",
    Img: "decentra.png",
    Link: "https://github.com/prashant13245/Decentrafile",
    TechStack: ["React", "Solidity", "IPFS", "Ethereum"],
    Features: [
      "Decentralized file storage",
      "Fast upload & retrieval",
      "IPFS hash-based tracking",
      "Smart contract integration",
      "Secure data sharing"
    ],
    Github: "https://github.com/prashant13245/Decentrafile"
  },
  {
    id: "project-5",
    Title: "Fake News Detection (ML/NLP)",
    Description: "Machine-learning model that detects fake news using NLP techniques and classification algorithms.",
    Img: "fakw.png",
    Link: "https://github.com/prashant13245/Fake_News-Detection-System",
    TechStack: ["Python", "Sklearn", "NLP", "TF-IDF"],
    Features: [
      "Text preprocessing",
      "TF-IDF vectorization",
      "Logistic regression classifier",
      "News authenticity scoring",
      "Model evaluation metrics"
    ],
    Github: "https://github.com/prashant13245/Fake_News-Detection-System"
  },
  {
    id: "project-6",
    Title: "Power BI Interactive Sales Dashboard",
    Description: "Fully interactive Power BI dashboard analyzing business performance, KPIs, revenue, and real-time sales trends.",
    Img: "bi.png",
    Link: "https://github.com/prashant13245/Power_bi_Dashboard",
    TechStack: ["Power BI", "DAX", "Power Query"],
    Features: [
      "Interactive visuals",
      "KPI cards",
      "Region & category analysis",
      "Data cleaning in Power Query",
      "Custom DAX measures"
    ],
    Github: "https://github.com/prashant13245/Power_bi_Dashboard"
  },
  {
    id: "project-7",
    Title: "Python TTS Converter",
    Description: "A simple Python-based Text-to-Speech system that converts any text input into natural-sounding audio output.",
    Img: "textto.png",
    Link: "https://github.com/prashant13245/Text-to-Speech-Conveter-Using-Python",
    TechStack: ["Python", "gTTS", "Tkinter"],
    Features: [
      "Real-time text-to-audio conversion",
      "MP3 file download",
      "GUI-based input",
      "Custom voice settings",
      " Easy-to-use interface"
    ],
    Github: "https://github.com/prashant13245/Text-to-Speech-Conveter-Using-Python"
  },
  {
    id: "project-8",
    Title: "SQL Music Store Analysis",
    Description: "Advanced SQL analysis on music store dataset, extracting insights using joins, aggregations, and subqueries.",
    Img: "sql.png",
    Link: "https://github.com/prashant13245/SQL_Music-store_Analysis",
    TechStack: ["MySQL", "SQL Joins", "Aggregate Functions"],
    Features: [
      "Customer purchase insights",
      "Top selling artists & genres",
      "Revenue breakdown",
      "Complex joins & CTEs",
      " Performance optimization"
    ],
    Github: "https://github.com/prashant13245/SQL_Music-store_Analysis"
  }
];

// Dummy certificates
const dummyCertificates = [
  { Img: "/Screenshot 2025-11-13 184221.png" },
  { Img: "Screenshot 2025-11-13 184257.png" },
  { Img: "Screenshot 2025-11-13 184346.png" },
  { Img: "Screenshot 2025-11-13 184415.png" },
  { Img: "Screenshot 2025-11-13 184452.png" },
  { Img: "Screenshot 2025-11-13 184524.png" },
  { Img: "Screenshot 2025-11-13 184612.png" },
   { Img: "Screenshot 2025-11-13 184653.png" }
];

// Create context
const ProjectContext = createContext();

// Custom hook
export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

// Provider component
export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load dummy data
    setProjects(dummyProjects);
    setCertificates(dummyCertificates);
    setLoading(false);
  }, []);

  const getProjectById = (id) => projects.find((project) => project.id === id);

  const addProject = (project) => {
    const newProject = { ...project, id: `project-${Date.now()}` };
    setProjects((prev) => [...prev, newProject]);
  };

  const updateProject = (id, updatedData) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, ...updatedData } : project
      )
    );
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const value = {
    projects,
    certificates,
    loading,
    getProjectById,
    addProject,
    updateProject,
    deleteProject,
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
};
