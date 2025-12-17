
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'credit-scoring-realtime',
    title: 'Real-Time Credit Scoring Engine',
    description: 'Pipeline distribuído para cálculo de score de crédito instantâneo e detecção de fraude em cartões.',
    longDescription: 'Este projeto consistiu no desenvolvimento de um mecanismo de processamento de fluxo para avaliar o risco de crédito em milissegundos. Integrando dados históricos de bureau de crédito com transações de cartões em tempo real, utilizamos Flink e Kafka para processar padrões de comportamento. A arquitetura permitiu uma redução drástica no churn de solicitações de aumento de limite e aumentou a precisão da detecção de fraudes em transações de e-commerce em 25%. Toda a infraestrutura foi provisionada via Terraform seguindo as normas rígidas de segurança bancária (PCI-DSS).',
    techStack: ['Flink', 'Kafka', 'Python', 'Redis', 'Kubernetes', 'Terraform'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    githubUrl: 'https://github.com/brunaschultz/credit-scoring-engine',
    architectureType: 'Streaming'
  },
  {
    id: 'financial-lakehouse',
    title: 'Financial Lakehouse Architecture',
    description: 'Implementação de arquitetura Medallion para processamento de transações em tempo real com Delta Lake.',
    longDescription: 'Este projeto envolveu a migração de um Data Warehouse legado para um Modern Data Lakehouse utilizando Databricks e AWS. Implementamos a arquitetura Medallion (Bronze, Silver, Gold) para garantir a qualidade e linhagem dos dados. O processamento em tempo real foi atingido através do Structured Streaming do Spark, permitindo que o banco tomasse decisões de crédito baseadas em dados com apenas 5 minutos de latência. Utilizamos Terraform para Infraestrutura como Código e garantimos a conformidade com a LGPD através de técnicas de anonimização no nível da camada Bronze.',
    techStack: ['Spark', 'Delta Lake', 'AWS', 'Python', 'Terraform', 'Databricks'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=1200',
    githubUrl: 'https://github.com/brunaschultz/financial-lakehouse',
    architectureType: 'Lakehouse'
  },
  {
    id: 'telco-streaming',
    title: 'High-Volume Streaming Pipeline',
    description: 'Processamento de eventos de rede em tempo real utilizando Kafka e Spark Streaming.',
    longDescription: 'Desenvolvimento de um pipeline resiliente capaz de processar bilhões de registros de rede diariamente. O desafio principal era a de-duplicação e agregação de eventos de CDR em janelas de tempo deslizantes. Utilizamos Kafka como buffer de entrada e Spark Streaming para a lógica de agregação. Os dados enriquecidos foram armazenados em um cluster Cassandra para permitir consultas de baixa latência por equipes de operações de rede. A solução reduziu o tempo médio de detecção de falhas de rede em 40%, impactando diretamente a qualidade do sinal para milhões de usuários da Vivo.',
    techStack: ['Kafka', 'Spark', 'Kubernetes', 'Scala', 'Cassandra', 'Prometheus'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=1200',
    githubUrl: 'https://github.com/brunaschultz/telco-streaming-pipeline',
    architectureType: 'Streaming'
  }
];

export const SKILLS: Skill[] = [
  { name: 'PySpark', category: 'ETL', level: 95 },
  { name: 'Python', category: 'Languages', level: 92 },
  { name: 'SQL (Hive/Trino)', category: 'Languages', level: 98 },
  { name: 'Airflow', category: 'Orchestration', level: 90 },
  { name: 'Terraform', category: 'Cloud', level: 85 },
  { name: 'Databricks', category: 'Cloud', level: 92 },
  { name: 'AWS/GCP', category: 'Cloud', level: 88 },
];
