/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Version: 1.0.1
 */

import React from "react";
import { motion } from "motion/react";
import { useScroll, useTransform } from "motion/react";
import { 
  Database, 
  Cloud, 
  Terminal, 
  LayoutDashboard, 
  BrainCircuit, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Cpu,
  Network,
  Activity,
  Search,
  LineChart,
  Car,
  Binary
} from "lucide-react";

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-primary/10 flex justify-between items-center px-6 md:px-12 py-6">
    <div className="font-headline italic text-2xl text-primary hover:text-primary-container transition-colors cursor-pointer">TVS//</div>
    <div className="hidden md:flex gap-12">
      {['PROFILE', 'EXPERIENCE', 'PROJECTS', 'SKILLS', 'CONTACT'].map((item) => (
        <a 
          key={item}
          href={`#${item.toLowerCase()}`}
          className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant hover:text-primary transition-all"
        >
          {item}
        </a>
      ))}
    </div>
    <button className="bg-primary text-surface font-label px-6 py-2 text-[10px] tracking-widest hover:shadow-[0_0_15px_rgba(70,241,207,0.4)] transition-all active:scale-95">
      RESUME
    </button>
  </nav>
);

const Profile = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const courses = [
    "Data Warehousing and Business Intelligence",
    "Data Science",
    "Data Mining",
    "Cloud Computing",
    "Business Statistics",
    "Business Accounting",
    "Python Programming",
    "Economic Forecasting",
    "Evidence Based Management",
    "Marketing Analytics"
  ];

  const certifications = [
    "Supply chain analytics - IIT Roorke",
    "Google data analytics - Coursera",
    "Solutions architect associate - AWS",
    "AI practitioner - AWS",
    "Data Analytics & Visualization Job Simulation - Accenture",
    "MS Excel Beginner to Advanced - Udemy",
    "Digital Marketing - Accenture"
  ];

  return (
    <section id="profile" className="relative">
      {/* Hero Part */}
      <header className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-12 pt-32 overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div style={{ y: y1, opacity }} className="absolute top-20 right-20 text-primary/5 pointer-events-none">
          <Database size={400} strokeWidth={0.5} />
        </motion.div>
        <motion.div style={{ y: y2, opacity }} className="absolute bottom-40 left-10 text-primary/5 pointer-events-none">
          <Binary size={300} strokeWidth={0.5} />
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(70,241,207,0.03),transparent)] pointer-events-none"></div>
        <div className="max-w-5xl space-y-8 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-4 bg-surface-container-low px-4 py-2 border-l-4 border-primary"
          >
            <span className="animate-pulse w-2 h-2 bg-primary rounded-full"></span>
            <p className="font-label text-[10px] tracking-widest text-primary/80">
              PIPELINE_STATUS: <span className="text-primary font-bold">ACTIVE</span> | RECORDS: 2.5M+/DAY
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-headline font-bold leading-none tracking-tighter text-white"
          >
            Tharun Venkat <br/>
            <span className="text-primary-container italic font-medium">Sai Murugan</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl font-body text-on-surface-variant max-w-2xl leading-relaxed"
          >
            Graduate student with extensive expertise in <span className="text-primary italic">data engineering, cloud architecture, and BI solutions</span>. A dependable candidate focused on driving business impact through scalable data pipelines and strategic analytics.
          </motion.p>
        </div>

        {/* Scrolling Ticker with Horizontal Parallax */}
        <div className="absolute bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant/10 py-6 overflow-hidden flex whitespace-nowrap">
          {/* Background Parallax Layer */}
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex gap-48 opacity-[0.03] pointer-events-none items-center"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-48 items-center text-7xl font-headline font-bold text-primary">
                <span>DATA_STREAM</span>
                <span>SYSTEM_CORE</span>
                <span>PIPELINE_V01</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="relative z-10 flex gap-24 font-label text-[10px] text-outline-variant tracking-[0.2em] uppercase"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-24 items-center">
                <span>ETL ARCHITECTURE</span>
                <span className="text-primary">•</span>
                <span>BI ENGINEERING</span>
                <span className="text-primary">•</span>
                <span>PIPELINE ORCHESTRATION</span>
                <span className="text-primary">•</span>
                <span>GENERATIVE AI</span>
                <span className="text-primary">•</span>
                <span>MACHINE LEARNING</span>
                <span className="text-primary">•</span>
                <span>RAG ARCHITECTURE</span>
                <span className="text-primary">•</span>
                <span>PREDICTIVE MODELING</span>
                <span className="text-primary">•</span>
                <span>INVENTORY OPTIMIZATION</span>
                <span className="text-primary">•</span>
                <span>DEMAND PLANNING</span>
                <span className="text-primary">•</span>
                <span>STATISTICAL ANALYSIS</span>
                <span className="text-primary">•</span>
                <span>KPI TRACKING</span>
                <span className="text-primary">•</span>
                <span>CLOUD MIGRATION</span>
                <span className="text-primary">•</span>
                <span>MARKET FORECASTING</span>
                <span className="text-primary">•</span>
                <span>ECONOMIC MODELING</span>
                <span className="text-primary">•</span>
                <span>DATA GOVERNANCE</span>
                <span className="text-primary">•</span>
                <span>LOGISTICS ANALYTICS</span>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Coursework Part */}
      <div className="py-24 bg-surface overflow-hidden border-y border-outline-variant/10">
        <div className="px-6 md:px-12 mb-16 max-w-4xl">
          <h2 className="text-4xl font-headline font-bold text-white flex items-center gap-4 mb-8">
            <span className="text-primary text-sm font-label tracking-widest uppercase">Academic_Path</span>
            Education & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="group bg-surface-container-low p-6 border border-outline-variant/10 border-l-4 border-l-primary hover:bg-surface-container-high transition-all">
              <p className="font-label text-[10px] text-primary uppercase tracking-widest mb-2">University</p>
              <p className="text-white font-headline text-xl group-hover:text-primary transition-colors">University of Texas at Arlington</p>
              <p className="text-on-surface-variant text-xs mt-1 font-label">MS in Business Analytics</p>
            </div>
            <div className="group bg-surface-container-low p-6 border border-outline-variant/10 border-l-4 border-l-primary hover:bg-surface-container-high transition-all">
              <p className="font-label text-[10px] text-primary uppercase tracking-widest mb-2">Academic Standing</p>
              <p className="text-white font-headline text-xl group-hover:text-primary transition-colors">CGPA: 4.0 / 4.0</p>
              <p className="text-on-surface-variant text-xs mt-1 font-label">Summa Cum Laude Equivalent</p>
            </div>
          </div>
          <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl">
            My academic foundation is built on rigorous coursework designed to solve complex <span className="text-primary">data-driven challenges</span>. I specialize in bridging the gap between <span className="text-primary italic">data architecture</span> and <span className="text-primary italic">strategic business outcomes</span>.
          </p>
        </div>
        
        <div className="flex whitespace-nowrap mb-20">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-8"
          >
            {[...courses, ...courses].map((course, i) => (
              <div 
                key={i} 
                className="bg-surface-container-low border border-outline-variant/10 px-8 py-6 flex flex-col gap-2 min-w-[300px] hover:border-primary/30 transition-colors group"
              >
                <span className="font-label text-[9px] text-primary/40 tracking-widest uppercase group-hover:text-primary transition-colors">
                  MODULE_{String(i % courses.length + 1).padStart(2, '0')}
                </span>
                <h3 className="font-headline text-xl text-white group-hover:text-primary transition-colors">{course}</h3>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="px-6 md:px-12 mb-12 max-w-4xl">
          <h2 className="text-4xl font-headline font-bold text-white flex items-center gap-4 mb-6">
            <span className="text-primary text-sm font-label tracking-widest uppercase">Professional_Validation</span>
            Certifications
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            My technical expertise is validated by industry-recognized certifications, demonstrating a commitment to <span className="text-primary italic">continuous learning</span> and mastery of <span className="text-primary">enterprise-grade data tools</span>.
          </p>
        </div>

        <div className="flex whitespace-nowrap mb-20">
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-8"
          >
            {[...certifications, ...certifications].map((cert, i) => (
              <div 
                key={i} 
                className="bg-surface-container-low border border-outline-variant/10 px-8 py-6 flex flex-col gap-2 min-w-[350px] hover:border-primary/30 transition-colors group"
              >
                <span className="font-label text-[9px] text-primary/40 tracking-widest uppercase group-hover:text-primary transition-colors">
                  CERT_{String(i % certifications.length + 1).padStart(2, '0')}
                </span>
                <h3 className="font-headline text-xl text-white group-hover:text-primary transition-colors">{cert}</h3>
              </div>
            ))}
          </motion.div>
        </div>

        {/* NCC Details / Beyond Academics */}
        <div className="px-6 md:px-12 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-outline-variant/10 bg-surface-container-low/30 backdrop-blur-sm relative overflow-hidden group max-w-4xl"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award size={80} />
            </div>
            <div className="relative z-10 space-y-4">
              <p className="font-label text-[10px] text-primary uppercase tracking-widest">BEYOND_ACADEMICS</p>
              <h3 className="text-white font-headline text-2xl">NCC NAVY <span className="text-on-surface-variant text-sm font-label font-normal ml-2">// NATIONAL CADET CORPS</span></h3>
              <p className="text-on-surface-variant text-base leading-relaxed italic max-w-2xl">
                "Completed 3-year military-grade Navy training; developed leadership, decision-making, and adaptability as part of India's youth armed forces wing."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => (
  <section className="py-32 px-6 md:px-12 bg-surface-container-low" id="experience">
    <div className="max-w-4xl mx-auto space-y-16">
      <div className="text-center">
        <h2 className="text-5xl font-headline font-bold text-white mb-4">Work History</h2>
        <div className="h-1 w-24 bg-primary mx-auto"></div>
      </div>
      
      <div className="relative pl-8 md:pl-12 border-l border-primary/30 space-y-24">
        {[
          {
            title: "Graduate Teaching Assistant",
            period: "MAY 2024 - PRESENT",
            company: "University of Texas at Arlington",
            metrics: [
              { label: "Students Supported", value: "150+" },
              { label: "Technical Mentorship", value: "Daily" },
              { label: "Course Focus", value: "Stats & Data" }
            ],
            points: [
              "Facilitated advanced statistical analysis sessions, mentoring 150+ graduate students on hypothesis testing, regression modeling, and probability distributions using R and Python.",
              "Leading lab sessions on large-scale data processing, focusing on ETL workflows, data cleaning techniques, and performance optimization in SQL and Spark.",
              "Delivered comprehensive technical feedback on complex data engineering assignments, ensuring student mastery of core concepts in data manipulation and statistical inference."
            ]
          },
          {
            title: "ETL Analyst",
            period: "NOV 2022 - FEB 2024",
            company: "Kaiser Permanente",
            award: "BRIGHT BEGINNER AWARD '24",
            metrics: [
              { label: "Daily Records", value: "2.5M+" },
              { label: "Data Accuracy", value: "99.8%" },
              { label: "Processing Speed", value: "+35%" },
              { label: "Env Upgrades", value: "40+" }
            ],
            points: [
              "Engineered Epic Cogito ETL pipelines (Clarity & Caboodle) processing 2.5M+ records daily (~200GB) for clinical and operational reporting.",
              "Designed SQL extracts from Oracle, Teradata, and MySQL; automated validation in Azure Databricks, reducing processing time by 35% with 99.8% data accuracy.",
              "Built dimensional data models and Caboodle DMCs; automated ETL monitoring via Python/PowerShell with Power BI dashboards, cutting report delivery by 20 min/day.",
              "Managed 10+ production and 30+ non-production environment upgrades in Agile sprints; collaborated on quarterly releases minimizing downtime."
            ]
          },
          {
            title: "Supply Chain Intern",
            period: "MAY 2022 - OCT 2022",
            company: "Krishko Logistics",
            metrics: [
              { label: "Inventory Turnover", value: "+15%" },
              { label: "Logistics Efficiency", value: "+10%" },
              { label: "KPI Delivery", value: "100%" }
            ],
            points: [
              "Optimized inventory turnover by 15% through the implementation of a data-driven demand forecasting model using historical sales data.",
              "Collaborated with cross-functional teams to identify and resolve supply chain bottlenecks, improving overall logistics efficiency by 10%.",
              "Developed interactive Power BI dashboards to track operational KPIs, which were utilized by teams during monthly turnover meetings to drive data-informed decision-making.",
              "Streamlined inventory management and supply chain operations through data-driven analysis; delivered KPIs across scheduling and demand planning."
            ]
          }
        ].map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 bg-primary ring-8 ring-primary/10"></div>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <h3 className="text-2xl font-headline font-bold text-white">{exp.title}</h3>
                <span className="font-label text-[10px] text-primary border border-primary/30 px-3 py-1 w-fit">{exp.period}</span>
              </div>
              <p className="font-label text-sm text-on-surface-variant">{exp.company}</p>
              {exp.award && (
                <div className="flex items-center gap-2 text-secondary">
                  <Award size={14} />
                  <span className="font-label text-[10px] uppercase">{exp.award}</span>
                </div>
              )}

              {/* Metrics Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {exp.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="bg-surface-container-high/30 border border-outline-variant/10 p-4 rounded-sm group hover:border-primary/30 transition-all">
                    <p className="text-primary font-headline text-xl mb-1 group-hover:scale-110 transition-transform origin-left">{metric.value}</p>
                    <p className="text-on-surface-variant text-[9px] uppercase tracking-widest font-label">{metric.label}</p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 text-on-surface-variant list-none mt-6">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex gap-4">
                    <span className="text-primary font-bold font-label text-xs">0{pIdx + 1}</span>
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);



const tagExplanations: Record<string, string> = {
  "AWS_BEDROCK": "Amazon Web Services Bedrock - Managed service for foundation models.",
  "AWS_ATHENA": "Amazon Athena - Interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL.",
  "AWS_LAMBDA": "AWS Lambda - Serverless computing service that runs code in response to events.",
  "AWS_S3": "Amazon Simple Storage Service - Scalable object storage in the cloud.",
  "AWS_GLUE": "AWS Glue - Fully managed ETL service that makes it easy to prepare and load data for analytics.",
  "AWS_STEP_FUNCTIONS": "AWS Step Functions - Serverless function orchestrator that makes it easy to sequence AWS Lambda functions.",
  "AWS_IAM": "AWS Identity and Access Management - Securely manage access to AWS services and resources.",
  "AWS_EC2": "Amazon Elastic Compute Cloud - Scalable computing capacity in the AWS Cloud.",
  "AWS_DYNAMODB": "Amazon DynamoDB - Fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.",
  "AWS_CLOUDWATCH": "Amazon CloudWatch - Monitoring and observability service for AWS resources and applications.",
  "AZURE_DATABRICKS": "Unified analytics platform for data engineering, data science, and machine learning on Azure.",
  "DATABRICKS": "Unified data analytics platform for data engineering, data science, and machine learning.",
  "MYSQL": "MySQL - Popular open-source relational database management system.",
  "RAG": "Retrieval-Augmented Generation - Enhancing LLM output with external knowledge retrieval.",
  "AGENTIC_AI": "Agentic AI - AI systems that can independently plan, use tools, and execute complex tasks.",
  "MILVUS": "Milvus - Highly scalable open-source vector database built for AI applications.",
  "PGVECTOR": "pgvector - Open-source vector similarity search for PostgreSQL.",
  "CHROMA_DB": "ChromaDB - Open-source embedding database for building AI applications with LLMs.",
  "ASTRA_DB": "DataStax Astra DB - Serverless vector database built on Apache Cassandra.",
  "STATISTICS": "Statistical Analysis - Applying mathematical principles to collect, analyze, and interpret data to identify patterns and trends.",
  "DATA_PROCESSING": "Data Processing - Converting raw data into meaningful information through collection, manipulation, and analysis.",
  "EPIC_COGITO": "Epic Cogito - Suite of analytics and reporting tools for healthcare data, including Clarity and Caboodle.",
  "RAG_ARCH": "Retrieval-Augmented Generation - Architecture that optimizes LLM output by referencing an authoritative knowledge base.",
  "REDSHIFT": "AWS Redshift - Fast, fully managed data warehouse.",
  "TERRAFORM": "Infrastructure as Code (IaC) tool for building, changing, and versioning infrastructure safely.",
  "KAFKA": "Apache Kafka - Distributed event store and stream-processing platform.",
  "PYSPARK": "Python API for Apache Spark - Unified analytics engine for large-scale data processing.",
  "SPARK": "Apache Spark - Multi-language engine for executing data engineering, data science, and machine learning.",
  "BERT": "Bidirectional Encoder Representations from Transformers - Pre-trained NLP model by Google.",
  "NLP": "Natural Language Processing - AI field focused on interaction between computers and human language.",
  "SCIKIT-LEARN": "Machine Learning library for Python.",
  "SCIKIT_LEARN": "Machine Learning library for Python.",
  "LSTM": "Long Short-Term Memory - Recurrent Neural Network (RNN) architecture for sequence prediction.",
  "POWER_BI": "Microsoft Business Intelligence platform for data visualization.",
  "TABLEAU": "Visual analytics platform transforming the way we use data to solve problems.",
  "HADOOP": "Apache Hadoop - Framework for distributed storage and processing of big data.",
  "SNOWFLAKE": "Cloud-based data-warehousing platform for data storage and analytics.",
  "MONGODB": "NoSQL document-oriented database program.",
  "POSTGRESQL": "Advanced, enterprise-class open-source relational database.",
  "SQL_SERVER": "Relational database management system developed by Microsoft.",
  "GEN_AI": "Generative Artificial Intelligence - AI capable of generating text, images, or other media.",
  "PYTHON": "High-level, general-purpose programming language.",
  "SQL": "Structured Query Language - Standard language for database management.",
  "R_LANG": "Programming language and free software environment for statistical computing and graphics.",
  "JAVA": "High-level, class-based, object-oriented programming language.",
  "SCALA": "Strongly typed programming language that combines object-oriented and functional programming.",
  "POWERSHELL": "Cross-platform task automation solution made up of a command-line shell and scripting language.",
  "MATPLOTLIB": "Comprehensive library for creating static, animated, and interactive visualizations in Python.",
  "PLOTLY": "Interactive, open-source, and browser-based graphing library for Python.",
  "SEABORN": "Python data visualization library based on matplotlib, providing a high-level interface for drawing attractive statistical graphics.",
  "PYTORCH": "Open source machine learning framework based on the Torch library.",
  "TENSORFLOW": "Free and open-source software library for machine learning and artificial intelligence."
};

const TagWithTooltip: React.FC<{ tag: string }> = ({ tag }) => {
  const explanation = tagExplanations[tag];
  
  return (
    <div className="relative group/tag">
      <span className="font-label text-[9px] text-primary/60 border border-primary/20 px-3 py-1 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all cursor-help">
        {tag}
      </span>
      {explanation && (
        <div className="absolute bottom-full left-0 mb-2 w-48 p-3 bg-surface-container-high border border-outline-variant/20 rounded-sm shadow-xl opacity-0 invisible group-hover/tag:opacity-100 group-hover/tag:visible transition-all z-50 pointer-events-none">
          <p className="text-[10px] text-on-surface-variant leading-relaxed font-body">
            {explanation}
          </p>
          <div className="absolute top-full left-4 border-8 border-transparent border-t-surface-container-high"></div>
        </div>
      )}
    </div>
  );
};

const Projects = () => (
  <section className="py-32 px-6 md:px-12" id="projects">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
      <div className="max-w-2xl">
        <h2 className="text-6xl font-headline font-bold text-white mb-6">Pipeline <span className="italic text-primary">Outputs</span></h2>
        <p className="text-on-surface-variant text-lg">A selection of end-to-end data systems and AI tools I've developed.</p>
      </div>
      <div className="font-label text-[10px] text-on-surface-variant/50 tracking-widest bg-surface-container-high px-6 py-3 border-l-4 border-primary">
        TOTAL_NODES: 04 // ACTIVE_BUILDS: 03
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "LoopMind AI",
          desc: "AI-powered micro-learning app built with AWS Bedrock as an orchestration layer, integrating OpenAI API and Antigravity to generate personalized curriculum from scattered organizational data.",
          tags: ["AWS", "BEDROCK", "OPENAI", "ANTIGRAVITY", "RAG_ARCH"],
          icon: <BrainCircuit className="text-primary" size={32} />,
          award: "#1ST PLACE AWS AI",
          node: "01"
        },
        {
          title: "RAG based Gap Analysis Tool",
          desc: "Capstone project for an AI company; developed a sophisticated RAG-powered tool utilizing PGVector and Milvus for vector storage, Langflow for LLM orchestration, and advanced prompt engineering with semantic and hybrid search to identify gaps in user story documents.",
          tags: ["PGVECTOR", "MILVUS", "LANGFLOW", "HYBRID_SEARCH", "SEMANTIC_SEARCH", "PROMPT_ENG"],
          icon: <Search className="text-primary" size={32} />,
          node: "02"
        },
        {
          title: "Unemployment Forecasting",
          desc: "Forecasting pipeline using time series and ensemble methods to predict monthly unemployment trends in the Fort Worth/Arlington area.",
          tags: ["R", "ARIMA", "SARIMA", "ETS", "RANDOM_FOREST"],
          icon: <LineChart className="text-primary" size={32} />,
          node: "03"
        },
        {
          title: "Ride Share Analysis",
          desc: "Analysis of 500k+ ride-share records using Apache Spark and Hadoop for distributed processing, with Hive for data warehousing and Power BI for interactive visualization of pricing anomalies and peak demand patterns.",
          tags: ["SPARK", "HADOOP", "HIVE", "SQL", "POWER_BI", "ETL"],
          icon: <Car className="text-primary" size={32} />,
          node: "04"
        },
        {
          title: "Airbnb Clustering Analysis",
          desc: "Performed market segmentation of Airbnb listings using K-Means and Hierarchical clustering to identify distinct property tiers and pricing strategies.",
          tags: ["PYTHON", "SCIKIT_LEARN", "CLUSTERING", "EDA", "PANDAS", "MATPLOTLIB"],
          icon: <MapPin className="text-primary" size={32} />,
          node: "05"
        },
        {
          title: "Ride-Sharing Pricing Trend Analysis",
          desc: "Developed a machine learning-based fare prediction system and commuting pattern analysis using District of Columbia ride-sharing data, identifying key factors influencing pricing dynamics.",
          tags: ["PYTHON", "MACHINE_LEARNING", "REGRESSION", "EDA", "SCIKIT_LEARN", "SEABORN"],
          icon: <Activity className="text-primary" size={32} />,
          node: "06"
        },
        {
          title: "Retail Data Engineering Pipeline: Medallion Architecture",
          desc: "Architected a Medallion (Bronze-Silver-Gold) data pipeline to process and analyze large-scale retail sales data using Databricks. Engineered a robust Bronze layer with explicit schemas for 100% auditability. Implemented complex Silver layer refinement (Deduplication, Regex-based trimming, Date standardization) and optimized query performance via StoreID Partitioning and Z-Ordering on TransactionDate.",
          tags: ["PYSPARK", "DATABRICKS", "DELTA_LAKE", "SPARK_SQL", "MEDALLION_ARCH", "DATA_ENG"],
          icon: <Database className="text-primary" size={32} />,
          node: "07"
        },
        {
          title: "Market Basket Analysis - Apriori Algorithm",
          desc: "Implemented the Apriori Algorithm on a large-scale grocery dataset to identify hidden product associations. Engineered an automated data pipeline for One-Hot Encoding and binary basket transformation. Conducted Association Rule Mining using Support, Confidence, and Lift to drive retail strategies like optimized shelf placement and product bundling.",
          tags: ["PYTHON", "MLXTEND", "APRIORI", "EDA", "RETAIL_ANALYTICS", "PANDAS"],
          icon: <Binary className="text-primary" size={32} />,
          node: "08"
        }
      ].map((project, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ y: -10 }}
          className="group bg-surface-container border border-outline-variant/10 hover:border-primary/40 transition-all p-8 flex flex-col justify-between min-h-[400px]"
        >
          <div>
            <div className="flex justify-between items-start mb-8">
              {project.icon}
              <div className="flex flex-col items-end">
                {project.award && (
                  <div className="flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-3 py-1 mb-2">
                    <Award className="text-secondary" size={12} />
                    <span className="font-label text-[9px] text-secondary">{project.award}</span>
                  </div>
                )}
                <span className="font-label text-[10px] text-on-surface-variant/40 tracking-widest uppercase">NODE: {project.node}</span>
              </div>
            </div>
            <h3 className="text-3xl font-headline font-bold text-white group-hover:text-primary transition-colors mb-4">{project.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{project.desc}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <TagWithTooltip key={tag} tag={tag} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Skills = () => (
  <section className="py-32 px-6 md:px-12 bg-surface-container-low" id="skills">
    <h2 className="text-5xl font-headline font-bold text-white mb-20 text-center">Tech Stack_</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {[
        { 
          icon: <Database size={16} />, 
          title: "DATA ENGINEERING TOOLS", 
          items: ["SQL_SERVER", "MYSQL", "SNOWFLAKE", "POSTGRESQL", "MONGODB", "AWS_GLUE", "AWS_ATHENA", "REDSHIFT", "DATABRICKS", "KAFKA", "SPARK", "DATA_PROCESSING", "EPIC_COGITO"] 
        },
        { 
          icon: <Cloud size={16} />, 
          title: "CLOUD PLATFORMS", 
          items: ["AWS_LAMBDA", "AWS_S3", "AWS_IAM", "AWS_EC2", "AWS_DYNAMODB", "AWS_CLOUDWATCH", "AWS_STEP_FUNCTIONS", "AZURE_DATABRICKS", "TERRAFORM"] 
        },
        { 
          icon: <Terminal size={16} />, 
          title: "PROGRAMMING LANGUAGES", 
          items: ["PYTHON", "SQL", "R_LANG", "JAVA", "SCALA", "POWERSHELL"] 
        },
        { 
          icon: <LayoutDashboard size={16} />, 
          title: "BI & VISUALIZATION", 
          items: ["POWER_BI", "TABLEAU", "MATPLOTLIB", "PLOTLY", "SEABORN"] 
        },
        { 
          icon: <BrainCircuit size={16} />, 
          title: "ML/AI FRAMEWORKS", 
          items: ["SCIKIT_LEARN", "PYTORCH", "TENSORFLOW", "AWS_BEDROCK", "BERT", "LSTM", "GEN_AI", "RAG", "AGENTIC_AI", "MILVUS", "PGVECTOR", "CHROMA_DB", "ASTRA_DB", "STATISTICS"] 
        }
      ].map((cat, idx) => (
        <div key={idx} className="bg-surface-container-lowest border border-outline-variant/10 p-6 hover:border-primary/30 transition-colors">
          <div className="font-label text-[10px] text-primary mb-6 flex items-center gap-2">
            {cat.icon} {cat.title}
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.items.map(item => (
              <TagWithTooltip key={item} tag={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section className="py-32 px-6 md:px-12" id="contact">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-6xl font-headline font-bold text-white mb-8">Establish <br/> <span className="text-primary italic">Connection</span></h2>
      <p className="text-on-surface-variant text-lg mb-12 max-w-md">Open for collaboration on data engineering projects, research, or full-time opportunities.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Mail />, label: "Email", value: "metharunvenkat@gmail.com" },
          { icon: <Phone />, label: "Phone", value: "682-247-2511" },
          { icon: <MapPin />, label: "Location", value: "Arlington, TX" }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col gap-4 group bg-surface-container-low p-8 border border-outline-variant/10 hover:border-primary/20 transition-all">
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-high text-primary group-hover:bg-primary group-hover:text-surface transition-all">
              {item.icon}
            </div>
            <div>
              <p className="font-label text-[10px] text-on-surface-variant/40 tracking-widest uppercase">{item.label}</p>
              <p className="font-headline text-xl text-white">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Profile />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="w-full py-12 bg-surface-container-lowest border-t border-primary/10 flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-4">
        <p className="font-label text-[9px] opacity-50 text-primary uppercase tracking-widest">© 2024 ORCHESTRATED_STREAM // ALL_RIGHTS_RESERVED</p>
        <div className="flex gap-12">
          {['GITHUB', 'LINKEDIN', 'SOURCE_CODE'].map(link => (
            <a key={link} href="#" className="font-label text-[9px] opacity-50 text-on-surface-variant hover:text-primary underline underline-offset-4 transition-all">
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
