window.PORTFOLIO_CONTENT = {
  projects: [
    {
      id: "bci-hibrida",
      year: "2024—atual",
      status: "em andamento",
      title: "Interface cérebro-máquina híbrida para controle de prótese virtual",
      gallery: [
        {
          src: "assets/images/projects/mestrado-pipeline-eeg-emg.webp",
          alt: "Ilustração da pipeline de fusão EEG e EMG, sincronização, decodificação e controle de perna virtual.",
          caption: "Pipeline de fusão · EEG + EMG",
          fit: "contain"
        },
        {
          src: "assets/images/projects/mestrado-protocolo-inicial.webp",
          alt: "Animação do menu do Experimento 2 em realidade virtual, com as etapas do fluxo do protocolo.",
          caption: "Protocolo experimental · realidade virtual"
        },
        {
          src: "assets/images/projects/mestrado-experimento-eeg-vr.webp",
          alt: "Animação de participante usando touca de EEG durante uma tarefa de realidade virtual.",
          caption: "Aquisição de sinais durante a tarefa"
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
      kind: "Iniciação Científica",
      status: "concluído",
      title: "Avaliação de Modelos de Machine Learning para decodificar contrações a partir de EMG",
      gallery: [
        {
          src: "assets/images/projects/ic-emg-resultados-modelos.webp",
          alt: "Resultados da Iniciação Científica: tabela de métricas dos modelos PCADE, LDA, QDA, PLS, SVM e RNA, com ordenação do desempenho.",
          caption: "Resultados · desempenho dos modelos",
          fit: "contain"
        }
      ],
      summary: "Iniciação Científica (2023–2024) dedicada à avaliação de modelos de aprendizagem de máquina para decodificar contrações a partir de sinais eletromiográficos.",
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
          src: "assets/images/projects/tcc-eeg-vibrotatil.webp",
          alt: "Figura do TCC em cinco painéis: equipamento vibrotátil, eletrodos no tronco, mapa de canais, touca de EEG e participante durante a tarefa.",
          caption: "Equipamentos e protocolo experimental",
          fit: "contain"
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
        { label: "Publicação no Repositório UNIFESP", url: "https://repositorio.unifesp.br/items/631e29f8-5e44-4c82-8efd-af729bbd0bb6" },
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
