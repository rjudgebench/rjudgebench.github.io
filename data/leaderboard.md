| # | Model         |                         Method                         |   Learning   |    Size    |    Param    |                         Link                         | Date |   NAT    |   SOC    |   LAN    |   TXT    |   IMG    |       NO | G1-6     | G7-12    | Avg |
| ----- | :--------------------: | :----------------------------------------------------------: | :----------: | :---------: | :---------: | :----------: | :----------: | :----------: | :----------: | :----------: | :----------: | :----------: | :---: | :----------: | :---: | :---: |
| * | **Human Performance** |       -       |      -      |      -      | - |       [Link](https://arxiv.org/abs/2209.09513)       | 22-09-20 | 90.23 | 84.97 | 87.48 | 89.60 | 87.50 | 88.10 | 91.59 | 82.42 | 88.40 |
| - | **Random Chance** |       -       |      -      |      -      | - |       [Link](https://arxiv.org/abs/2209.09513)       | 22-09-20 |    40.28     |    46.13     |    29.25     |    47.45     |    40.08     |        33.66 | 39.35        | 40.67        |    39.83     |
|      | **MCAN**       | VQA-NN |     Fine-tune     |     95M     | 95M | [Link](https://arxiv.org/abs/2209.09513) | 22-09-20 |    56.08     |    46.23     |    58.09     |    59.43     |    51.17     |        55.40 | 51.65        | 59.72        |    54.54     |
|      | **Top-Down**   | VQA-NN |     Fine-tune     |     70M     | 70M | [Link](https://arxiv.org/abs/2209.09513) | 22-09-20 |    59.50     |    54.33     |    61.82     |    62.90     |    54.88     |        59.79 | 57.27        | 62.16        |    59.02     |
|      | **BAN**        |       VQA-NN       | Fine-tune |    112M     | 112M |       [Link](https://arxiv.org/abs/2209.09513)       | 22-09-20 |    60.88     |    46.57     |    66.64     |    62.61     |    52.60     |        65.51 | 56.83        | 63.94        |    59.37     |
|      | **DFAF**       | VQA-NN |     Fine-tune     |     74M     | 74M | [Link](https://arxiv.org/abs/2209.09513) | 22-09-20 |    64.03     |    48.82     |    63.55     |    65.88     |    54.49     |        64.11 | 57.12        | 67.17        |    60.72     |
|      | **ViLT**       | VLM | Fine-tune |    113M     | 113M | [Link](https://arxiv.org/abs/2209.09513) | 22-09-20 |    60.48     |    63.89     |    60.27     |    63.20     |    61.38     |        57.00 | 60.72        | 61.90        |    61.14     |
|      | **Patch-TRM**  |       VLM       |     Fine-tune     |     90M     | 90M |       [Link](https://arxiv.org/abs/2209.09513)       | 22-09-20 |    65.19     |    46.79     |    65.55     |    66.96     |    55.28     |        64.95 | 58.04        | 67.50        |    61.42     |
|      | **VisualBERT** | VLM | Fine-tune |    111M     | 111M | [Link](https://arxiv.org/abs/2209.09513) | 22-09-20 |    59.33     |    69.18     |    61.18     |    62.71     |    62.17     |        58.54 | 62.96        | 59.92        |    61.87     |
|     | **UnifiedQA**  |        PLM        | Fine-tune |    223M     | 223M |        [Link](https://arxiv.org/abs/2209.09513)        | 22-09-20 |    68.16     |    69.18     |    74.91     |    63.78     |    61.38     |        77.84 | 72.98        | 65.00        |    70.12     |
|     | **CoT UnifiedQA** |       PLM       | Fine-tune |    223M     | 223M |       [Link](https://arxiv.org/abs/2209.09513)       | 22-09-20 |    71.00     |    76.04     |    78.91     |    66.42     |    66.53     |        81.81 | 77.06        | 68.82        |    74.11     |
|     | **GPT-3 (2-shot)** |       LLM       |     Few-shot     |    173B     | - |       [Link](https://arxiv.org/abs/2209.09513)       | 22-09-20 |    74.64     |    69.74     |    76.00     |    74.44     |    67.28     |        77.42 | 76.80        | 68.89        |    73.97     |
|     | **GPT-3 (0-shot)** |       LLM       | Zero-shot |    173B     | - |       [Link](https://arxiv.org/abs/2209.09513)       | 22-09-20 |    75.04     |    66.59     |    78.00     |    74.24     |    65.74     |        79.58 | 76.36        | 69.87        |    74.04     |
|     | **CoT GPT-3 (AE)** |       LLM       |  Few-shot |    173B     | - |       [Link](https://arxiv.org/abs/2209.09513)       | 22-09-20 |    76.60     |    65.92     |    77.55     |    75.51     |    66.09     |        79.58 | 78.49        | 67.63        |    74.61     |
|     | **CoT GPT-3 (ALE)** |       LLM       |  Few-shot |    173B     | - |       [Link](https://arxiv.org/abs/2209.09513)       | 22-09-20 |    75.44     |    70.87     |    78.09     |    74.68     |    67.43     |        79.93 | 78.23        | 69.68        |    75.17     |
|     | **Multimodal-CoT_Base** |     VLM     | Fine-tune | 223M | 223M |     [Link](https://arxiv.org/abs/2302.00923)     | 23-02-02 |  87.52   |  77.17   |  85.82   |  87.88   |  82.90   |    86.83 | 84.65    | 85.37    |  84.91   |
| | **Multimodal-CoT_Large** | VLM | Fine-tune | 738M | 738M | [Link](https://arxiv.org/abs/2302.00923) | 23-02-02 | 95.91 | 82.00 | 90.82 | 95.26 | 88.80 | 92.89 | 92.44 | 90.31 | 91.68 |
|  | **LLaMA-Adapter** | VLM |  Fine-tune  | 6B | 1.2M | [Link](https://arxiv.org/abs/2303.16199) | 23-03-28 | 84.37 | 88.30 | 84.36 | 83.72 | 80.32 | 86.90 | 85.83 | 84.05 | 85.19 |
|     | **LLaVA** |     VLM     | Fine-tune |     13B     | 13B |     [Link](https://arxiv.org/abs/2304.08485)     | 23-04-17 |    90.36     |    95.95     |    88.00     |    89.49     |    88.00     |        90.66 | 90.93        | 90.90        |    90.92     |
|     | **LLaVA (GPT-4 judge)** |     VLM     | Fine-tune |     13B     | 13B |     [Link](https://arxiv.org/abs/2304.08485)     | 23-04-17 | 91.56 | 96.74 | 91.09 | 90.62 | 88.99 | 93.52 | 92.73 | 92.16 |    92.53 |
|     | **CoT ChatGPT** |     LLM     | Few-shot |     175B     | - |     [Link](https://arxiv.org/abs/2304.09842)     | 23-04-19 | 78.82 | 70.98 | 83.18 | 77.37 | 67.92 | 86.13 | 80.72 | 74.03 | 78.31 |
|     | **CoT GPT-4** |     LLM     | Few-shot | 1T+ | - |     [Link](https://arxiv.org/abs/2304.09842)     | 23-04-19 | 85.48 | 72.44 | 90.27 | 82.65 | 71.49 | 92.89 | 86.66 | 79.04 | 83.99 |
|     | **Chameleon (ChatGPT)** |     Tool-LLM     | Few-shot |     175B+     | - |     [Link](https://arxiv.org/abs/2304.09842)     | 23-04-19 | 81.62 | 70.64 | 84.00 | 79.77 | 70.80 | 86.62 | 81.86 | 76.53 | 79.93 |
|     | **Chameleon (GPT-4)** |     Tool-LLM     | Few-shot | 1T+ | - |     [Link](https://arxiv.org/abs/2304.09842)     | 23-04-19 | 89.83 | 74.13 | 89.82 | 88.27 | 77.64 | 92.13 | 88.03 | 83.72 | 86.54 |
| | **UnifiedQA-T-SciQ_Base** | LLM | Fine-tune | 223M | 223M | [Link](https://arxiv.org/abs/2305.03453) | 23-05-05 | 76.56 | 88.99 | 80.45 | 72.90 | 73.84 | 83.47 | 81.09 | 75.19 | **79.41** |
| | **Mutimodal-T-SciQ_Base** | LLM | Fine-tune | 223M | 223M | [Link](https://arxiv.org/abs/2305.03453) | 23-05-05 | 91.52 | 91.45 | 92.45 | 91.94 | 90.33 | 92.26 | 92.11 | 91.10 | **91.75** |
| | **Mutimodal-T-SciQ_Large** | LLM | Fine-tune | 738M | 738M | [Link](https://arxiv.org/abs/2305.03453) | 23-05-05 | 96.89 | 95.16 | 95.55 | 96.53 | 94.70 | 96.79 | 96.44 | 95.72 | **96.18** |
| | **LaVIN-7B** | VLM | Fine-tune | 7B | 3.8M | [Link](https://arxiv.org/abs/2305.15023) | 23-05-24 | 89.25 | 94.94 | 85.24 | 88.51 | 87.46 | 88.08 | 90.16 | 88.07 | **89.41** |
| | **LaVIN-13B** | VLM | Fine-tune | 13B | 5.4M | [Link](https://arxiv.org/abs/2305.15023) | 23-05-24 | 89.88 | 94.49 | 89.82 | 88.95 | 87.61 | 91.85 | 91.45 | 89.72 | **90.83** |
| | **LLaMA-SciTune** | VLM | Zero-shot | 7B | - | [Link](https://arxiv.org/abs/2307.01139) | 23-07-03 | 84.50 | 94.15 | 82.91 | 88.35 | 83.64 | 88.74 | 85.05 | 85.60 | **86.11** |
| | **LLaMA-SciTune** | VLM | Zero-shot | 13B | - | [Link](https://arxiv.org/abs/2307.01139) | 23-07-03 | 89.30 | 95.61 | 87.00 | 93.08 | 86.67 | 91.75 | 84.37 | 91.30 | **90.03** |
| | **Enigma-COT_Base** | LLM | Fine-tune | 229M | 229M | [Link](https://arxiv.org/abs/2307.12626) | 23-07-24 | 88.28 | 78.74 | 85.64 | 88.51 | 84.28 | 86.90 | 85.43 | 85.89 | **85.59** |
| | **Enigma-COT_Large** | LLM | Fine-tune | 793M | 793M | [Link](https://arxiv.org/abs/2307.12626) | 23-07-24 | 97.51 | 84.70 | 94.73 | 96.68 | 91.37 | 95.89 | 94.46 | 93.47 | **94.11** |
| | **HoT-T5_Base** | LLM | Fine-tune | 223M | 223M | [Link](https://arxiv.org/abs/2308.06207) | 23-08-11 | 82.46 | 78.07 | 82.00 | 81.18 | 75.20 | 85.09 | 81.86 | 80.62 | **81.42** |
| | **HoT-T5_Large** | LLM | Fine-tune | 738M | 738M | [Link](https://arxiv.org/abs/2308.06207) | 23-08-11 | 84.46 | 79.08 | 84.64 | 82.89 | 75.81 | 88.15 | 83.88 | 82.47 | **83.38** |
| | **Multimodal Bard** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2308.03729) | 23-08-07 | - | - | - | - | **68** | - | - | - | - |
| | **CoT GPT-3 + Doc** | Tool-LLM | Zero-shot | 173B | - | [Link](https://arxiv.org/abs/2308.00675) | 23-08-01 | - | - | - | - | - | - | - | - | **79.91** |
| | **IMMO SL+RL** | VLM | Fine-tune | 7B | 5M | [Link](https://arxiv.org/abs/2308.09970) | 23-08-19 |   -   |   -   |   -   |   -   |   -   |   -   |   -   | - | **84.8** |
| | **CaCo-CoT (ChatGPT)** | LLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2308.11914) | 23-08-23 | - | - | - | **86.5** | - | - | - | - | - |
| | **Claude** | LLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2308.11914) | 23-08-23 | - | - | - | **86.8** | - | - | - | - | - |
| | **CoT Claude** | LLM | Zero-shot | - |   -   | [Link](https://arxiv.org/abs/2308.11914) | 23-08-23 | - | - | - | **86.5** | - | - | - | - | - |
| | **CaCo-CoT (Claude)** | LLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2308.11914) | 23-08-23 | - | - | - | **89.9** | - | - | - | - | - |
| | **CaCo-CoT (ChatGPT)** | LLM | Few-shot | - | - | [Link](https://arxiv.org/abs/2308.11914) | 23-08-23 |   -   |   -   |   -   |   **88.6**   |   -   |   -   |   -   |   -   | - |
|      | **CoT Claude**            |   LLM    | Few-shot  |   -   | - | [Link](https://arxiv.org/abs/2308.11914) | 23-08-23 |   -   |   -   |   -   |   **89.5**   |   -   |   -   |   -   |   -   | - |
|      | **CaCo-CoT (Claude)**     |   LLM    | Few-shot  |   -   | - | [Link](https://arxiv.org/abs/2308.11914) | 23-08-23 | - | - | - | **90.8** | - | - | - | - | - |
| | **Ying-VLM** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2309.07915) | 23-09-14 | - | - | - | - | **55.70** | - | - | - | - |
| | **InstructBLIP** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2309.07915) | 23-09-14 | - | - | - | - | **71.30** | - | - | - | - |
| | **Otter** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2309.07915) | 23-09-14 | - | - | - | - | **63.10** | - | - | - | - |
| | **Shikra** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2309.07915) | 23-09-14 | - | - | - | - | **45.80** | - | - | - | - |
| | **MMICL** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2309.07915) | 23-09-14 | - | - | - | - | **82.10** | - | - | - | - |
| | **MiniGPT-4** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.16436) | 23-10-25 | 43.83 | 48.59 | 43.36 | 55.01 | 42.84 | 41.67 | - | - | **44.71** |
| | **DDCoT (MiniGPT-4)** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.16436) | 23-10-25 | 57.37 | 62.32 | 46.82 | 65.91 | 56.72 | 48.57 | - | - | **55.67** |
| | **DDCoT (GPT-3)** | LLM | Zero-shot | 175B | - | [Link](https://arxiv.org/abs/2310.16436) | 23-10-25 | 78.60 | 73.90 | 80.45 | 77.27 | 69.96 | 82.93 | 80.65 | 73.50 | **78.09** |
| | **DDCoT (ChatGPT)** | LLM | Zero-shot | 175B | - | [Link](https://arxiv.org/abs/2310.16436) | 23-10-25 | 80.15 | 76.72 | 82.82 | 78.89 | 72.53 | 85.02 | 82.86 | 75.21 | **80.15** |
| | **DDCoT (T5)** | PLM | Fine-tune | 223M | 223M | [Link](https://arxiv.org/abs/2310.16436) | 23-10-25 | 88.72 | 86.84 | 84.91 | 87.59 | 83.34 | 88.08 | 88.58 | 85.10 | **87.34** |
| | **BLIP-2 (Vicuna-13B)** | VLM | Zero-shot | 13B | - | [Link](https://arxiv.org/abs/2310.03744) | 23-10-05 | - | - | - | - | **61** | - | - | - | - |
| | **InstructBLIP (Vicuna-7B)** | VLM | Zero-shot | 7B | - | [Link](https://arxiv.org/abs/2310.03744) | 23-10-05 | - | - | - | - | **60.5** | - | - | - | - |
| | **InstructBLIP (Vicuna-13B)** | VLM | Zero-shot | 13B | - | [Link](https://arxiv.org/abs/2310.03744) | 23-10-05 | - | - | - | - | **63.1** | - | - | - | - |
| | **Qwen-VL (Qwen-7B)** | VLM | Zero-shot | 7B | - | [Link](https://arxiv.org/abs/2310.03744) | 23-10-05 | - | - | - | - | **67.1** | - | - | - | - |
| | **Qwen-VL-Chat (Qwen-7B)** | VLM | Zero-shot | 7B | - | [Link](https://arxiv.org/abs/2310.03744) | 23-10-05 | - | - | - | - | **68.2** | - | - | - | - |
| | **LLaVA-1.5 (Vicuna-7B)** | VLM | Zero-shot | 7B | - | [Link](https://arxiv.org/abs/2310.03744) | 23-10-05 | - | - | - | - | **66.8** | - | - | - | - |
| | **LLaVA-1.5 (Vicuna-13B)** | VLM | Zero-shot | 13B | - | [Link](https://arxiv.org/abs/2310.03744) | 23-10-05 | - | - | - | - | **71.6** | - | - | - | - |
| | **VLIS** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09767) | 23-10-15 | - | - | - | 53.1 | 49.3 | 49.1 | - | - | **50.2** |
| | **LG-VQA (CLIP)** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.20159) | 23-10-31 | - | - | - | - | - | - | - | - | **87.22** |
| | **LG-VQA (BLIP-2)** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.20159) | 23-10-31 | - | - | - | - | - | - | - | - | **86.32** |
| | **Honeybee (Vicuna-13B)** | VLM | Fine-tune | 13B | - | [Link](https://arxiv.org/abs/2312.06742) | 23-12-11 | 95.20 | 96.29 | 91.18 | 94.48 | 93.75 | 93.17 | 95.04 | 93.21 | **94.39** |
| | **MetaCLIP** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2312.06709) | 23-12-10 | - | - | - | - | - | - | - | - | **68.77** |
| | **SAM** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2312.06709) | 23-12-10 | - | - | - | - | - | - | - | - | **67.08** |
| | **DINOv2** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2312.06709) | 23-12-10 | - | - | - | - | - | - | - | - | **64.60** |
| | **OpenCLIP** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2312.06709) | 23-12-10 | - | - | - | - | - | - | - | - | **67.53** |
| | **QVix** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2312.01598) | 23-12-04 | - | - | - | - | - | - | - | - | **55.0** |
| | **LLaVA (ViT-L/16-224)** | VLM | Fine-tune | 13B | - | [Link](https://arxiv.org/abs/2312.01987) | 23-12-04 | - | - | - | - | - | - | - | - | **91.2** |
| | **LLaVA+SIRI** | VLM | - | 13B | - | [Link](https://arxiv.org/abs/2311.17331) | 23-11-29 | - | - | - | - | **72.0** | - | - | - | - |
| | **MC-CoT_Base** | VLM | Fine-tune | 223M | - | [Link](https://arxiv.org/abs/2311.14109) | 23-11-23 | 91.87 | 84.59 | 93.00 | 92.28 | 88.30 | 92.75 | 90.64 | 90.64 | **90.64** |
| | **MC-CoT_Large** | VLM | Fine-tune | 738M | - | [Link](https://arxiv.org/abs/2311.14109) | 23-11-23 | 95.47 | 89.99 | 91.82 | 95.11 | 92.66 | 93.24 | 94.27 | 91.76 | **93.37** |
| | **MC-CoT_F-Base** | VLM | Fine-tune | 248M | - | [Link](https://arxiv.org/abs/2311.14109) | 23-11-23 | 93.56 | 83.58 | 90.73 | 94.13 | 89.24 | 90.94 | 90.93 | 90.38 | **90.73** |
| | **MC-CoT_F-Large** | VLM | Fine-tune | 783M | - | [Link](https://arxiv.org/abs/2311.14109) | 23-11-23 | 97.47 | 90.44 | 93.18 | 96.97 | 93.75 | 94.49 | 95.30 | 94.13 | **94.88** |
| | **ShareGPT4V (Vicuna-7B)** | VLM | - | 7B | - | [Link](https://arxiv.org/abs/2311.12793) | 23-11-23 | - | - | - | - | **68.4** | - | - | - | - |
| | **Video-LLaVA (Vicuna-7B)** | VLM | - | 7B | - | [Link](https://arxiv.org/abs/2311.10122) | 23-11-16 | - | - | - | - | **66.4** | - | - | - | - |
| | **Chat-UniVi** | VLM | Zero-shot | 7B | - | [Link](https://arxiv.org/abs/2311.08046) | 23-11-14 | 58.61 | 61.08 | 61.82 |  57.33   |   58.25   | 61.39 | 62.04 | 56.23 | **59.96** |
| | **Chat-UniVi** | VLM | Fine-tune | 7B | - | [Link](https://arxiv.org/abs/2311.08046) | 23-11-14 | 88.50 | 93.03 | 85.91 | 88.51 | 85.97 | 88.15 | 88.88 | 88.60 | **88.78** |
| | **CoMD (Vicuna-7B)** | VLM | Fine-tune | 7B | - | [Link](https://arxiv.org/abs/2311.08213) | 23-11-14 | 91.83 | 95.95 | 88.91 | 90.91 | 89.94 | 91.08 | 92.47 | 90.97 | **91.94** |
| | **VILA-13B (Llama-2-13B)** | VLM | - | 13B | - | [Link](https://arxiv.org/abs/2312.07533) | 23-12-12 | - | - | - | - | **73.7** | - | - | - | - |
| | **DPMM-CoT_Base** | VLM | Fine-tune | 223M | 223M | [Link](https://arxiv.org/abs/2312.08762) | 23-12-14 | 92.72 | 87.85 | 89.91 | 92.72 | 90.48 | 91.29 | 91.45 | 90.11 | **90.97** |
| | **DPMM-CoT_Large** | VLM | Fine-tune | 738M | 738M | [Link](https://arxiv.org/abs/2312.08762) | 23-12-14 | 95.52 | 90.33 | 91.36 | 95.50 | 93.26 | 92.68 | 93.28 | 93.47 | **93.35** |
| | **InstructBLIP+MoCLE** | VLM | Zero-shot | 7B | - | [Link](https://arxiv.org/abs/2312.12379) | 23-12-19 | - | - | - | - | **63.9** | - | - | - | - |
| | **PILL (LLaMA-7B)** | VLM | Fine-tune | 7B | 45M | [Link](https://arxiv.org/abs/2311.02126) | 23-11-03 | 90.36 | 95.84 | 89.27 | 89.39 | 88.65 | 91.71 | 92.11 | 89.65 | **91.23** |
| | **Flan-T5-XL (LoRA)** | LLM | Fine-tune | - | - | [Link](https://leejayyoon.github.io/paper/InstructBLIP_PEFT.pdf) | 23-11-03 | - | - | - | - |   -   | - | - | - | **89.29** |
| | **ChatGPT** | LLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **69.41** |
| | **LLaMA1-7B** | LLM | Zero-shot | 7B | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **36.19** |
| | **LLaMA1-13B** | LLM | Zero-shot | 13B | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **43.33** |
| | **LLaMA2-7B** | LLM | Zero-shot | 7B | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **43.08** |
| | **LLaMA2-13B** | LLM | Zero-shot | 13B | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **55.78** |
| | **Flan-T5-XXL** | LLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **67.43** |
| | **OpenFlamingo** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **39.27** |
| | **Fromage** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **34.51** |
| | **LLaVA-7B** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **41.10** |
| | **LLaVA-13B** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **47.74** |
| | **MiniGPT4** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **58.70** |
| | **mPLUG-Owl** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **37.93** |
| | **LLaMA-Adapter-V2** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **54.44** |
| | **VPGTrans** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **47.00** |
| | **MultiGPT** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **36.29** |
| | **LaVIN-7B** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **75.11** |
| | **LaVIN-13B** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **77.54** |
| | **Lynx** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **38.28** |
| | **BLIP-2** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **74.17** |
| | **InstructBLIP** | VLM | Zero-shot | - | - | [Link](https://arxiv.org/abs/2310.09036) | 23-10-13 | - | - | - | - | - | - | - | - | **73.33** |
| | KAM-CoT | VLM | Fine-tune | 280M | 280M | [Link](https://arxiv.org/abs/2401.12863) | 24-01-23 | 94.76 | 92.24 | 93.36 | 94.53 | 93.16 | 94.15 | 94.24 | 93.21 | **93.87** |