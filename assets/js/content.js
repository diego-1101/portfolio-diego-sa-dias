window.PORTFOLIO_CONTENT = {
  projects: [
    {
      id: "bci-hibrida",
      year: "2024—atual",
      status: "em andamento",
      title: "Interface cérebro-máquina híbrida para controle de prótese virtual",
      gallery: [
        {
          src: "assets/images/projects/prothese-vr-relaxado.webp",
          alt: "Visão em primeira pessoa do avatar em repouso, com o indicador do movimento em zero grau.",
          caption: "Estado de repouso · 0°"
        },
        {
          src: "assets/images/projects/prothese-vr-60.webp",
          alt: "Visão em primeira pessoa do avatar com a perna elevada até sessenta graus.",
          caption: "Movimento intermediário · 60°"
        },
        {
          src: "assets/images/projects/prothese-vr.webp",
          alt: "Visão em primeira pessoa do avatar com a perna elevada até noventa graus.",
          caption: "Movimento concluído · 90°"
        }
      ],
      summary: "Validação de um protocolo não invasivo que combina EEG e EMG por meio de padrões corticomusculares para controlar uma prótese de membro inferior em realidade virtual.",
      areas: ["EEG", "EMG", "Coerência", "Unity", "Machine Learning"],
      contributions: [
        "Integração em tempo real entre Python e Unity via Lab Streaming Layer.",
        "Pré-processamento, filtragem e análise nos domínios do tempo, frequência e tempo-frequência.",
        "Desenvolvimento do protocolo experimental e dos modelos de classificação."
      ],
      links: [
        {
          label: "Resumo nos anais",
          url: "https://www.even3.com.br/anais/4-science-business-connection-655380/1480392-interface-cerebro-maquina-hibrida-nao-invasiva-usando-padroes-cortico-musculares-para-controle-de-uma-protese-vi/"
        },
        { label: "Registro no Lattes", url: "http://lattes.cnpq.br/0442024321574103" }
      ],
      featured: true
    },
    {
      id: "ml-protese-mioeletrica",
      year: "2023—2024",
      status: "concluído",
      title: "Machine learning para controle de prótese mioelétrica",
      gallery: [
        {
          src: "assets/images/projects/classificacao.webp",
          alt: "Matriz de confusão de um classificador em avaliação na linha de pesquisa atual.",
          caption: "Visual da linha de classificação · trabalho recente"
        }
      ],
      summary: "Iniciação científica dedicada à comparação de técnicas de aprendizagem de máquina para classificar sinais eletromiográficos de flexão e extensão do joelho em tempo real.",
      areas: ["EMG", "Classificação", "SVM", "Redes neurais"],
      contributions: [
        "Comparação de algoritmos para reconhecimento de padrões musculares.",
        "Preparação e análise de sinais eletromiográficos.",
        "Apresentação dos resultados em congresso em 2024."
      ],
      links: [
        { label: "Ver trajetória no Lattes", url: "http://lattes.cnpq.br/0442024321574103" }
      ],
      featured: false
    },
    {
      id: "eeg-vibrotatil",
      year: "2024—2025",
      status: "concluído",
      title: "EEG, desempenho e estimulação vibrotátil",
      gallery: [
        {
          src: "assets/images/projects/eeg-vibrotatil.svg",
          alt: "Esquema ilustrativo de traçados e bandas de EEG relacionados à análise de desempenho, sem dados medidos.",
          caption: "Esquema do método · ilustração"
        }
      ],
      summary: "Trabalho de conclusão em Engenharia Biomédica sobre relações multivariadas entre potência espectral de EEG e desempenho em tarefas guiadas por estimulação vibrotátil.",
      areas: ["EEG", "Potência espectral", "Análise multivariada", "Vibrotátil"],
      contributions: [
        "Análise de dados provenientes de protocolo de reabilitação em realidade virtual.",
        "Investigação de marcadores associados ao desempenho em tarefas guiadas.",
        "Apoio à pesquisa sobre apropriação neurocognitiva de próteses."
      ],
      links: [
        { label: "Ver formação no Lattes", url: "http://lattes.cnpq.br/0442024321574103" }
      ],
      featured: false
    }
  ],
  outputs: [
    {
      type: "Resumo em anais",
      year: "2026",
      title: "Interface cérebro-máquina híbrida não invasiva usando padrões corticomusculares para controle de uma prótese virtual",
      authors: "Diego de Sá Dias; Jean Faber Ferreira de Abreu",
      venue: "4º Science & Business Connection · Anais do Congresso Científico Tecnológico",
      doi: "10.29327/9786527225782.1480392",
      url: "https://www.even3.com.br/anais/4-science-business-connection-655380/1480392-interface-cerebro-maquina-hibrida-nao-invasiva-usando-padroes-cortico-musculares-para-controle-de-uma-protese-vi/"
    },
    {
      type: "Apresentação em congresso",
      year: "2026",
      title: "Interface cérebro-máquina híbrida não invasiva usando padrões corticomusculares para controle de uma prótese virtual",
      authors: "Diego de Sá Dias; Jean Faber Ferreira de Abreu",
      venue: "4º Science & Business Connection",
      doi: "",
      url: ""
    },
    {
      type: "Apresentação em congresso",
      year: "2025",
      title: "Interface cérebro-máquina híbrida não invasiva usando padrões corticomusculares para controle de uma prótese virtual",
      authors: "Diego de Sá Dias; Jean Faber Ferreira de Abreu",
      venue: "Congresso acadêmico · registro no Currículo Lattes",
      doi: "",
      url: "http://lattes.cnpq.br/0442024321574103"
    },
    {
      type: "Apresentação em congresso",
      year: "2024",
      title: "Análise comparativa sobre técnicas de aprendizagem de máquina para controle em tempo real de uma prótese mioelétrica de membro inferior",
      authors: "Diego de Sá Dias; Jean Faber Ferreira de Abreu",
      venue: "Congresso acadêmico · registro no Currículo Lattes",
      doi: "",
      url: "http://lattes.cnpq.br/0442024321574103"
    }
  ]
};
