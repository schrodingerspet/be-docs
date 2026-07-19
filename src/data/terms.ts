export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type Category = "Machine Learning" | "Cybersecurity" | "Networking" | "Datasets" | "Metrics" | "Deep Learning" | "Drone" | "Statistics" | "Optimization" | "Architecture" | "Communication" | "Evaluation";

export interface Term {
  id: string;
  name: string;
  difficulty: Difficulty;
  category: Category[];
  definition: string;
  whyUsed: string;
  howWorks: string;
  simpleExplanation: string;
  technicalExplanation: string;
  realWorldAnalogy: string;
  input?: string;
  output?: string;
  advantages: string[];
  disadvantages: string[];
  whenToUse: string;
  whenNotToUse: string;
  paperUsage: string;
  papers: ("Paper 1" | "Paper 2" | "Both")[];
  pageNumbers?: string[];
  relatedFigures?: string[];
  relatedAlgorithms?: string[];
  relatedTerms?: string[];
}

export const TERMS: Term[] = [
  {
    id: "1d-cnn",
    name: "1D CNN",
    difficulty: "Advanced",
    category: ["Deep Learning", "Machine Learning", "Architecture"],
    definition: "A One-Dimensional Convolutional Neural Network designed to process sequential data, such as time-series telemetry from UAVs, by sliding a 1D filter over the input to extract temporal features.",
    whyUsed: "It is highly effective at capturing local temporal dependencies in sensor data while remaining computationally lighter than 2D CNNs or complex RNNs.",
    howWorks: "It applies a series of convolutional filters across the time dimension of the data array. The filters learn to activate when they detect specific patterns (like a sudden spike in GPS coordinates), followed by pooling layers to reduce dimensionality.",
    simpleExplanation: "Imagine reading a book line by line and highlighting important words. A 1D CNN reads a stream of data over time and highlights the exact moments something looks suspicious.",
    technicalExplanation: "Unlike 2D CNNs used for images, 1D CNNs perform convolution operations exclusively along a single spatial dimension (time). The kernel slides over the input sequence (e.g., $N$ features over $T$ time steps) to produce feature maps that are invariant to local temporal translations.",
    realWorldAnalogy: "A heart rate monitor that sounds an alarm when it detects an irregular heartbeat sequence, ignoring the exact exact second it started, as long as the pattern matches.",
    input: "Time-series matrices of UAV telemetry (e.g., coordinates, velocity, pitch, roll over $t$ windows).",
    output: "Feature vectors representing critical temporal patterns, passed to a classifier.",
    advantages: ["Excellent at feature extraction from sequential data", "Faster training than LSTMs", "Automatically learns feature hierarchies"],
    disadvantages: ["Struggles with very long-term dependencies", "Requires large amounts of labeled data", "Fixed input window size"],
    whenToUse: "When processing multi-variate time-series sensor data where local sequence patterns matter (e.g., drone flight paths).",
    whenNotToUse: "When data has no temporal relationship, or when long-term memory (over thousands of steps) is strictly required.",
    paperUsage: "Used as the primary feature extractor in Paper 2's Hybrid Deep Learning pipeline to identify complex anomalies before passing them to a GRU.",
    papers: ["Paper 2"],
    relatedTerms: ["GRU", "Hybrid Deep Learning"],
  },
  {
    id: "gps-spoofing",
    name: "GPS Spoofing",
    difficulty: "Intermediate",
    category: ["Cybersecurity", "Drone", "Communication"],
    definition: "A cyber-attack where an attacker broadcasts fake GPS signals to deceive a UAV's navigation system into calculating an incorrect location.",
    whyUsed: "Used by attackers to hijack the drone's flight path, force it to land in a hostile area, or cause it to crash by feeding it false altitude data.",
    howWorks: "The attacker uses a transmitter to send signals that perfectly mimic legitimate satellite signals but at a higher power level. The drone's receiver locks onto the stronger, fake signal and updates its telemetry based on the attacker's coordinates.",
    simpleExplanation: "It's like secretly swapping out the map a pilot is reading so they think they are flying to New York when they are actually flying to the ocean.",
    technicalExplanation: "The attacker synthesizes L1 C/A code signals (1575.42 MHz) that gradually overpower authentic GNSS signals. The spoofed signals alter the pseudo-range measurements, forcing the Extended Kalman Filter (EKF) in the flight controller to output manipulated state estimations.",
    realWorldAnalogy: "Moving road signs on a highway so a driver unknowingly takes the wrong exit.",
    advantages: ["Can completely hijack a drone without touching it", "Bypasses standard encryption if civilian GPS is used"],
    disadvantages: ["Requires specialized hardware (SDR)", "Requires proximity to the target drone"],
    whenToUse: "(Attacker perspective) To capture or divert an autonomous vehicle.",
    whenNotToUse: "(Attacker perspective) When the target uses military-grade encrypted M-code GPS.",
    paperUsage: "One of the primary attack vectors generated in the UAV datasets to test the detection accuracy of the machine learning models.",
    papers: ["Both"],
    relatedTerms: ["FDI", "Telemetry"],
  },
  {
    id: "random-forest",
    name: "Random Forest",
    difficulty: "Beginner",
    category: ["Machine Learning", "Algorithms Hub"],
    definition: "An ensemble learning method that constructs a multitude of decision trees at training time and outputs the mode of the classes for classification.",
    whyUsed: "It prevents overfitting by averaging multiple decision trees, handles tabular data extremely well, and provides feature importance rankings natively.",
    howWorks: "It creates many decision trees using random subsets of the data (bagging) and random subsets of features at each split. During prediction, each tree 'votes' on the outcome, and the majority wins.",
    simpleExplanation: "Instead of asking one expert to identify an attack, you ask a room full of 100 people with different backgrounds. The most popular answer is chosen.",
    technicalExplanation: "An ensemble of unpruned classification trees created using bootstrap samples of the training data. At each node, a random subset of $m$ features (where $m < M$) is selected to determine the best split, reducing correlation between trees and decreasing overall variance.",
    realWorldAnalogy: "A jury in a courtroom where each juror only gets to see a random piece of evidence before casting their vote.",
    advantages: ["Highly accurate on tabular data", "Resistant to overfitting", "Requires little hyperparameter tuning"],
    disadvantages: ["Can be slow to predict in real-time if too many trees", "A 'black box' model compared to single decision trees"],
    whenToUse: "When you have structured telemetry data and need a robust, reliable baseline classifier.",
    whenNotToUse: "When analyzing raw images, audio, or when ultra-low latency prediction (microseconds) is strictly required.",
    paperUsage: "Evaluated in Paper 1 as a comparative baseline model against more advanced combinations, demonstrating strong default accuracy on standard attack vectors.",
    papers: ["Paper 1"],
    relatedTerms: ["Decision Flowcharts", "Machine Learning"],
  },
  {
    id: "shap",
    name: "SHAP (SHapley Additive exPlanations)",
    difficulty: "Intermediate",
    category: ["Machine Learning", "Evaluation"],
    definition: "A game theoretic approach to explain the output of any machine learning model by assigning each feature an importance value for a particular prediction.",
    whyUsed: "Provides interpretability to complex 'black box' models by quantifying how much each feature (like flight_time or wlan.duration) contributed to the final detection.",
    howWorks: "It evaluates the model with and without a specific feature across all possible feature combinations to isolate the true marginal contribution of that feature.",
    simpleExplanation: "Like determining exactly which player on a soccer team contributed the most to winning the championship by replaying the season with every possible combination of players.",
    technicalExplanation: "SHAP values are calculated as the average marginal contribution of a feature value across all possible coalitions. They satisfy desirable properties like local accuracy, missingness, and consistency.",
    realWorldAnalogy: "An itemized receipt for a dinner bill showing exactly how much you paid for each specific dish.",
    advantages: ["Solid theoretical foundation", "Provides global and local interpretability", "Works with any model"],
    disadvantages: ["Computationally expensive for large feature sets", "Can be difficult for non-experts to interpret complex interactions"],
    whenToUse: "When model transparency is required, such as explaining to security analysts why a drone was flagged as under attack.",
    whenNotToUse: "In real-time inference pathways where speed is more critical than explanation.",
    paperUsage: "Used heavily in Paper 1 to analyze the fusion dataset and prove which cyber-physical features are most critical for detecting specific attacks.",
    papers: ["Paper 1"],
    relatedTerms: ["Feature Extraction", "Cyber-Physical Data Fusion"],
  },
  {
    id: "isolation-forest",
    name: "Isolation Forest",
    difficulty: "Advanced",
    category: ["Machine Learning", "Algorithms Hub", "Statistics"],
    definition: "An unsupervised anomaly detection algorithm that detects anomalies by isolating instances using randomized decision trees.",
    whyUsed: "It explicitly identifies anomalies rather than profiling normal data points, making it highly effective for detecting zero-day attacks that have never been seen before.",
    howWorks: "It recursively generates random partitions in the dataset. Because anomalies are 'few and different', they are isolated closer to the root of the tree (shorter path lengths) compared to normal data.",
    simpleExplanation: "If you have a bag of white marbles and one red marble, you'll grab the red marble much faster if you randomly split the bag looking for differences, rather than studying every white marble first.",
    technicalExplanation: "Builds an ensemble of iTrees. For a given data point, the anomaly score is defined as $s(x, n) = 2^{-\\frac{E(h(x))}{c(n)}}$, where $E(h(x))$ is the expected path length. Anomalies yield scores close to 1.",
    realWorldAnalogy: "Finding a typo in a dictionary—it stands out immediately because it breaks the expected pattern.",
    advantages: ["Extremely fast and scales well", "Does not require labeled attack data", "Low memory footprint"],
    disadvantages: ["Can struggle with multi-modal normal distributions", "Not ideal for classifying specific types of known attacks"],
    whenToUse: "For detecting unknown (zero-day) attacks in real-time.",
    whenNotToUse: "When you need to precisely classify the exact type of attack (e.g., DoS vs. Spoofing).",
    paperUsage: "Used in Paper 2's dual-path pipeline alongside an Autoencoder to flag zero-day anomalies that the supervised pathway misses.",
    papers: ["Paper 2"],
    relatedTerms: ["Zero-Day Attack", "Autoencoder"],
  },
  {
    id: "f1-score",
    name: "F1-Score",
    difficulty: "Beginner",
    category: ["Metrics", "Evaluation"],
    definition: "The harmonic mean of Precision and Recall, providing a single metric that balances both the false positive and false negative rates.",
    whyUsed: "Accuracy is misleading in highly imbalanced datasets (e.g., 99% normal traffic, 1% attacks). F1-Score ensures the model is actually finding the attacks without triggering too many false alarms.",
    howWorks: "Calculated as $2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}$. It only achieves a high value if both Precision and Recall are high.",
    simpleExplanation: "A balanced grade that penalizes you equally for crying wolf (false alarms) and for missing the wolf entirely (missed attacks).",
    technicalExplanation: "F1-Score is heavily weighted toward the lower of the two values (Precision or Recall). It is the preferred metric when the cost of False Positives and False Negatives are both significantly high.",
    realWorldAnalogy: "A fire alarm system: it's not good if it misses fires (low recall), and it's not good if it goes off when you burn toast (low precision). F1-score measures the perfect balance.",
    advantages: ["Robust against class imbalance", "Provides a comprehensive view of model performance"],
    disadvantages: ["Less intuitive than straight accuracy", "Treats precision and recall as equally important, which may not always be true"],
    whenToUse: "Evaluating intrusion detection systems where attack traffic is a minority class.",
    whenNotToUse: "When true negatives are highly critical to the specific business context, or when the dataset is perfectly balanced.",
    paperUsage: "The primary evaluation metric used in both Paper 1 and Paper 2 to validate the effectiveness of the models.",
    papers: ["Both"],
    relatedTerms: ["Precision", "Recall"],
  },
  {
    id: "gru",
    name: "Gated Recurrent Unit (GRU)",
    difficulty: "Advanced",
    category: ["Deep Learning", "Algorithms Hub"],
    definition: "A streamlined type of Recurrent Neural Network (RNN) that uses gating mechanisms to manage the flow of information over time.",
    whyUsed: "Excellent for modeling sequential data (like telemetry streams) but trains faster and requires less memory than traditional LSTMs.",
    howWorks: "Uses an 'Update Gate' (what to keep from the past) and a 'Reset Gate' (what to forget). This allows the network to maintain long-term memory of the drone's flight path without suffering from vanishing gradients.",
    simpleExplanation: "Like reading a novel and maintaining a summary of the plot in your head. When a new chapter starts, you decide what past details to keep in mind (update) and what minor details to forget (reset).",
    technicalExplanation: "GRUs simplify the LSTM architecture by merging the cell state and hidden state, and combining the forget and input gates into a single update gate. This results in fewer tensor operations per time step.",
    realWorldAnalogy: "A smart thermostat that remembers your temperature preferences over the last week to predict today's setting, while safely forgetting last summer's preferences.",
    advantages: ["Faster training than LSTM", "Requires less memory", "Highly effective for time-series forecasting"],
    disadvantages: ["Slightly less expressive than LSTM for exceedingly complex long-term dependencies"],
    whenToUse: "Time-series classification where latency and computational overhead are constraints (e.g., edge-deployed drone models).",
    whenNotToUse: "For static tabular data or image classification.",
    paperUsage: "Used in Paper 2's supervised pathway in combination with a 1D CNN to model the temporal progression of cyber-attacks.",
    papers: ["Paper 2"],
    relatedTerms: ["1D CNN", "Time-Series"],
  },
  {
    id: "fdi",
    name: "False Data Injection (FDI)",
    difficulty: "Intermediate",
    category: ["Cybersecurity", "Networking"],
    definition: "An attack where malicious data is deliberately injected into the communication stream between a UAV and its ground control station or sensors.",
    whyUsed: "To manipulate the drone's behavior (e.g., crashing it) by feeding its control algorithms incorrect state information.",
    howWorks: "Attackers intercept the communication link (like MAVLink) or spoof a sensor, replacing legitimate telemetry packets with tampered values before the flight controller processes them.",
    simpleExplanation: "Like hacking a speedometer to show 30 mph when a car is actually going 100 mph, tricking the driver into speeding up.",
    technicalExplanation: "FDI attacks target the state estimation vectors. By carefully crafting the injected error vector $a$ such that it aligns with the column space of the observation matrix $H$, the attacker can bypass traditional bad data detection algorithms.",
    realWorldAnalogy: "Intercepting a letter in the mail, rewriting the contents, and forwarding it to the recipient.",
    advantages: ["Can cause catastrophic physical failure without a software exploit", "Subtle modifications can evade basic threshold detection"],
    disadvantages: ["Requires breaking into the communication channel", "Must understand the drone's internal control logic to craft effective data"],
    whenToUse: "(Attacker perspective) To subtly degrade performance or cause a targeted physical response.",
    whenNotToUse: "(Attacker perspective) When a simple DoS (jamming) is sufficient.",
    paperUsage: "A primary attack vector studied in both papers; Paper 1 emphasizes how fusing physical telemetry with cyber data exposes the discrepancies caused by FDI.",
    papers: ["Both"],
    relatedTerms: ["GPS Spoofing", "Cyber-Physical Data Fusion"],
  }
];
