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
    papers: ["Paper 2"],
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
    papers: ["Paper 1"],
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
,
  {
  id: "svm",
  name: "Support Vector Machine (SVM)",
  difficulty: "Intermediate",
  category: [
    "Machine Learning",
    "Algorithms Hub"
  ],
  definition: "A supervised machine learning algorithm that classifies data by finding the optimal hyperplane that maximizes the margin between different classes.",
  whyUsed: "It captures complex decision boundaries well and is effective for binary classification problems like identifying normal vs. malicious traffic.",
  howWorks: "It maps input features into high-dimensional space and finds a separating line (or hyperplane) with the largest distance to the nearest training data points of any class.",
  simpleExplanation: "Imagine trying to draw a line on a table to separate apples and oranges. SVM draws the thickest possible line so there's less chance of confusion.",
  technicalExplanation: "SVM optimizes a margin using support vectors. For non-linearly separable data, it applies a kernel trick (e.g., RBF, polynomial) to project data into higher dimensions where a linear hyperplane can separate the classes.",
  realWorldAnalogy: "Building a wide fence exactly in the middle of two different animal pastures to keep them as far apart as possible.",
  advantages: [
    "Effective in high-dimensional spaces",
    "Memory efficient due to using a subset of training points",
    "Versatile via kernel functions"
  ],
  disadvantages: [
    "Does not scale well to very large datasets",
    "Sensitive to noise and outliers",
    "Does not natively exploit temporal correlations"
  ],
  whenToUse: "For static, tabular data where you need a reliable baseline for binary classification.",
  whenNotToUse: "When dealing with complex sequential time-series data where temporal context is crucial.",
  paperUsage: "Used as a baseline supervised model in both papers; in Paper 2 it was tested with various kernels (linear, sigmoid, rbf, polynomial).",
  papers: [
    "Both"
  ],
  relatedTerms: [
    "Grid Search"
  ]
},
  {
  id: "fnn",
  name: "Feedforward Neural Network (FNN)",
  difficulty: "Intermediate",
  category: [
    "Deep Learning",
    "Architecture"
  ],
  definition: "A foundational artificial neural network architecture where connections between the nodes do not form a cycle, moving information only in one direction—forward.",
  whyUsed: "Offers a balance between complexity and performance for static data classification tasks without temporal correlations.",
  howWorks: "Data enters the input layer, passes through hidden layers where weights and biases are applied with activation functions, and exits through the output layer as a prediction.",
  simpleExplanation: "An assembly line of workers where each worker looks at a part, modifies it, and passes it to the next person until the final product is decided.",
  technicalExplanation: "FNNs use a series of fully connected dense layers. They apply non-linear activation functions (like ReLU) to capture complex mappings from input features to output labels. They do not maintain internal state.",
  realWorldAnalogy: "Water flowing through a series of filters; it only moves forward until it reaches the end.",
  advantages: [
    "Can model complex non-linear relationships",
    "Easier to train than RNNs",
    "Highly parallelizable"
  ],
  disadvantages: [
    "Cannot capture temporal or sequential correlations natively",
    "Prone to overfitting without regularization"
  ],
  whenToUse: "When data instances are independent of one another and do not rely on past history.",
  whenNotToUse: "When dealing with continuous streams of data like UAV telemetry where the order of events matters.",
  paperUsage: "Used in Paper 2 as a baseline deep structure trained on static data to compare against temporal models.",
  papers: [
    "Paper 2"
  ],
  relatedTerms: [
    "Deep Learning"
  ]
},
  {
  id: "lstm",
  name: "Long Short-Term Memory (LSTM)",
  difficulty: "Advanced",
  category: [
    "Deep Learning",
    "Architecture"
  ],
  definition: "A type of recurrent neural network (RNN) architecture that uses memory cells and gating mechanisms to learn order dependence in sequence prediction problems.",
  whyUsed: "It overcomes the vanishing gradient problem in traditional RNNs, making it highly effective at exploiting temporal correlations within time-series data.",
  howWorks: "It uses input, output, and forget gates to control the flow of information into and out of the memory cell over time, keeping relevant history and discarding noise.",
  simpleExplanation: "Like someone keeping a diary; they remember important past events (like an injury) to influence today's decisions, but forget what they ate for lunch 3 weeks ago.",
  technicalExplanation: "LSTMs maintain a hidden state and a cell state. The forget gate determines what information to discard, the input gate decides what new information to store, and the output gate determines the next hidden state based on the current input and updated cell state.",
  realWorldAnalogy: "A smart budget tracker that remembers long-term financial goals but ignores temporary daily fluctuations in spending.",
  advantages: [
    "Excellent at capturing long-term dependencies",
    "Solves vanishing gradient problem",
    "Ideal for time-series data"
  ],
  disadvantages: [
    "Computationally expensive to train",
    "Requires more memory than simpler models like GRUs",
    "Can be prone to overfitting on small datasets"
  ],
  whenToUse: "When your data is sequential (like flight logs over time) and current events depend heavily on past events.",
  whenNotToUse: "When data has no temporal ordering or when ultra-low latency is required on constrained edge devices.",
  paperUsage: "Used in Paper 2 to process cyber-physical time-series data, outperforming static models by leveraging temporal correlations.",
  papers: [
    "Paper 2"
  ],
  relatedTerms: [
    "RNN",
    "1D CNN"
  ]
},
  {
  id: "grid-search",
  name: "Grid Search",
  difficulty: "Beginner",
  category: [
    "Machine Learning",
    "Optimization"
  ],
  definition: "A hyperparameter tuning technique that exhaustively searches through a manually specified subset of the hyperparameter space of a learning algorithm.",
  whyUsed: "To systematically find the optimal configuration (architecture) for a machine learning model to maximize its performance.",
  howWorks: "You provide a list of possible values for each parameter. The algorithm tests every single combination, evaluates performance using cross-validation, and returns the best set.",
  simpleExplanation: "Like trying every single key on a massive keychain to see which one perfectly opens a door.",
  technicalExplanation: "It creates a Cartesian product of all specified hyperparameter sets and evaluates model performance (often via k-fold cross-validation) on each point in the grid. In Paper 2, random grid search is used to sample combinations more efficiently.",
  realWorldAnalogy: "Adjusting a recipe by trying every combination of salt (1 tsp, 2 tsp) and sugar (1 cup, 2 cups) until it tastes perfect.",
  advantages: [
    "Guarantees finding the best combination within the specified grid",
    "Simple to understand and implement"
  ],
  disadvantages: [
    "Extremely computationally expensive (curse of dimensionality)",
    "Might miss the true optimal value if it falls between grid points"
  ],
  whenToUse: "When you have a small number of hyperparameters to tune and sufficient computational resources.",
  whenNotToUse: "When tuning massive deep neural networks with dozens of hyperparameters (use Random Search or Bayesian Optimization instead).",
  paperUsage: "Used extensively in Paper 2 to identify the optimal structure for SVM, FNN, LSTM, and 1D-CNN models.",
  papers: [
    "Paper 2"
  ],
  relatedTerms: [
    "Cross-Validation"
  ]
},
  {
  id: "cross-validation",
  name: "Cross-Validation",
  difficulty: "Beginner",
  category: [
    "Machine Learning",
    "Evaluation"
  ],
  definition: "A resampling procedure used to evaluate machine learning models on a limited data sample to ensure they generalize well to independent datasets.",
  whyUsed: "It prevents overfitting and provides a more robust estimate of model performance compared to a single train/test split.",
  howWorks: "The dataset is divided into 'k' subsets (folds). The model is trained on k-1 folds and tested on the remaining fold. This is repeated k times so every fold is used for testing exactly once.",
  simpleExplanation: "Like a student taking 5 different practice tests to prove they truly understand the material, rather than just memorizing one test.",
  technicalExplanation: "In k-fold cross-validation, the variance of the performance estimate is reduced compared to a single holdout set. The final performance metric is the average of the metric across all k iterations.",
  realWorldAnalogy: "Testing a new car's brakes on dry, wet, icy, and dirt roads to ensure they work reliably everywhere, not just in the factory.",
  advantages: [
    "Reduces overfitting bias",
    "Makes optimal use of limited data",
    "Provides confidence intervals for performance"
  ],
  disadvantages: [
    "Increases training time by a factor of k",
    "Can be problematic with highly imbalanced or time-series data without stratified or temporal splitting"
  ],
  whenToUse: "Virtually always during model training and hyperparameter tuning to ensure generalized performance.",
  whenNotToUse: "When the dataset is so massively large that a single validation set is statistically sufficient and k-fold would take months.",
  paperUsage: "Paper 2 utilized 5-fold cross-validation during the random grid search for model optimization.",
  papers: [
    "Paper 2"
  ],
  relatedTerms: [
    "Grid Search"
  ]
},
  {
  id: "normalization",
  name: "Normalization",
  difficulty: "Beginner",
  category: [
    "Machine Learning",
    "Statistics"
  ],
  definition: "The process of rescaling the values of numeric columns in a dataset to use a common scale, without distorting differences in the ranges of values.",
  whyUsed: "Many machine learning algorithms perform poorly if features have vastly different scales (e.g., altitude in meters vs. speed in mm/s).",
  howWorks: "Methods like min-max scaling map all values into a specific range, typically [0, 1].",
  simpleExplanation: "Converting all prices from Yen, Euros, and Pesos into Dollars so you can easily compare them.",
  technicalExplanation: "Min-Max normalization applies the formula (x - min) / (max - min). This ensures faster convergence during gradient descent and prevents features with larger magnitudes from dominating distance-based algorithms like SVM.",
  realWorldAnalogy: "Grading students on a curve so that the hardest test and the easiest test both have a top score of 100%.",
  advantages: [
    "Speeds up training convergence",
    "Prevents large-scale features from dominating",
    "Preserves relationships in data"
  ],
  disadvantages: [
    "Sensitive to outliers (which can squash normal data into a tiny range)",
    "Requires storing min/max values for inference scaling"
  ],
  whenToUse: "When fusing data from different domains (like cyber packets and physical telemetry) or using distance-based/gradient-based ML algorithms.",
  whenNotToUse: "When using tree-based models (like Random Forest) which are scale-invariant.",
  paperUsage: "Paper 2 specifically used the min-max method to scale fused cyber and physical features to the [0, 1] range.",
  papers: [
    "Paper 2"
  ],
  relatedTerms: [
    "Cyber-Physical Data Fusion"
  ]
},
  {
  id: "network-intrusion",
  name: "Network Intrusion",
  difficulty: "Intermediate",
  category: [
    "Cybersecurity",
    "Networking"
  ],
  definition: "An unauthorized penetration of a network or system, often resulting in unauthorized access to sensitive data or control systems.",
  whyUsed: "Attackers use it to gain a foothold in the UAV's communication network to eavesdrop, steal data, or launch secondary attacks.",
  howWorks: "Exploits vulnerabilities in network protocols, authentication mechanisms, or encryption to bypass access controls.",
  simpleExplanation: "Like someone picking the lock on a building's front door so they can wander the halls and listen to private conversations.",
  technicalExplanation: "Often involves unauthorized access to the UDP/TCP channels used by the UAV. Attackers may bypass weak wireless encryption to inject malicious packets or exfiltrate telemetry streams.",
  realWorldAnalogy: "Sneaking into a private radio frequency to listen to police communications.",
  advantages: [
    "Provides a foundation for more complex attacks",
    "Can be stealthy and difficult to detect without behavioral analysis"
  ],
  disadvantages: [
    "Requires exploiting specific vulnerabilities",
    "Often leaves traces in network logs (e.g., unusual IP addresses)"
  ],
  whenToUse: "(Attacker perspective) To establish persistence or steal data.",
  whenNotToUse: "(Attacker perspective) When immediate physical disruption is the only goal.",
  paperUsage: "Studied in Paper 1 as a key attack vector detected by their hybrid machine learning framework.",
  papers: [
    "Paper 1"
  ],
  relatedTerms: [
    "Zero-Day Attack"
  ]
},
  {
  id: "jamming",
  name: "Jamming (Denial of Service)",
  difficulty: "Beginner",
  category: [
    "Cybersecurity",
    "Networking",
    "Communication"
  ],
  definition: "An attack that deliberately floods a communication channel with interference or malicious traffic to prevent legitimate communication between the UAV and controller.",
  whyUsed: "To disrupt the control link, forcing the drone into a fail-safe mode (like auto-landing) or causing it to crash.",
  howWorks: "Transmits high-power radio frequency noise on the UAV's operating frequency, or floods the network stack with de-authentication packets.",
  simpleExplanation: "Like screaming at the top of your lungs in a room so two other people can't hear each other talking.",
  technicalExplanation: "At the physical layer, it lowers the Signal-to-Noise Ratio (SNR) below the receiver's threshold. At the MAC/Network layer, it overwhelms the target with forged requests (e.g., 802.11 de-authentication frames) causing legitimate traffic to be dropped.",
  realWorldAnalogy: "Creating a massive artificial traffic jam on a highway so an ambulance cannot get through.",
  advantages: [
    "Highly effective at completely severing control links",
    "Often requires little technical sophistication to execute physical jamming"
  ],
  disadvantages: [
    "Extremely noisy and easily detectable",
    "Requires continuous power output from the attacker"
  ],
  whenToUse: "(Attacker perspective) To completely disable a UAV's remote operation.",
  whenNotToUse: "(Attacker perspective) When stealth or hijacking is desired.",
  paperUsage: "Paper 1 references DoS/Jamming. Paper 2 explicitly simulates a 'De-authentication DoS attack' using spoofed frames.",
  papers: [
    "Both"
  ],
  relatedTerms: [
    "De-authentication Attack"
  ]
},
  {
  id: "replay-attack",
  name: "Replay Attack",
  difficulty: "Intermediate",
  category: [
    "Cybersecurity",
    "Networking"
  ],
  definition: "A network attack in which valid data transmission is maliciously or fraudulently repeated or delayed.",
  whyUsed: "To hijack control or bypass authentication by re-sending a legitimate command that was captured earlier.",
  howWorks: "The attacker sniffs the network to capture a legitimate command (e.g., 'move left 500cm'). Later, the attacker rebroadcasts that exact packet to the UAV, which executes the command thinking it came from the operator.",
  simpleExplanation: "Recording someone saying 'Open Sesame' to a voice-activated door, and then playing the recording back later to get inside.",
  technicalExplanation: "The attacker uses packet capture tools to intercept packets containing valid session tokens, sequence numbers, or commands. If the protocol lacks freshness checks (like nonces or timestamps), the system blindly processes the re-injected packets.",
  realWorldAnalogy: "Forging a check by exactly duplicating a legitimate check that was already cashed.",
  advantages: [
    "Does not require breaking encryption if the entire encrypted payload is replayed",
    "Very difficult for signature-based IDSs to detect"
  ],
  disadvantages: [
    "Fails if the system uses strict timestamps, sequence numbers, or one-time tokens"
  ],
  whenToUse: "(Attacker perspective) To force a UAV to repeat a previous action when encryption keys are unknown.",
  whenNotToUse: "(Attacker perspective) Against systems with robust replay protection (e.g., MAVLink v2 with signing).",
  paperUsage: "Paper 2 executes this by capturing valid UDP packets using aircrack-ng and rebroadcasting them to disrupt the drone's flight path.",
  papers: [
    "Paper 2"
  ],
  relatedTerms: [
    "Network Intrusion"
  ]
},
  {
  id: "evil-twin",
  name: "Evil Twin Attack",
  difficulty: "Intermediate",
  category: [
    "Cybersecurity",
    "Networking",
    "Communication"
  ],
  definition: "A spoofing cyber-attack where a malicious wireless access point is set up to mimic a legitimate network to intercept communications.",
  whyUsed: "To execute a Man-in-the-Middle (MitM) attack, allowing the attacker to monitor, intercept, or manipulate data meant for the UAV.",
  howWorks: "The attacker clones the legitimate SSID and broadcasts it at a much higher transmission power. The UAV (or controller) connects to the stronger rogue signal instead of the real one.",
  simpleExplanation: "Setting up a fake ATM next to a real one, but making it look shinier so people use it and give you their PINs.",
  technicalExplanation: "The attacker uses a high-gain antenna (e.g., 30 dBm) and clones the MAC and ESSID of the target AP. They often combine this with a de-authentication attack to force the client to drop the real connection and auto-reconnect to the rogue AP with the stronger RSSI.",
  realWorldAnalogy: "A criminal dressed as a valet parking attendant standing outside a restaurant to steal your car keys.",
  advantages: [
    "Bypasses client-side security by tricking the hardware into connecting voluntarily",
    "Allows full interception of traffic"
  ],
  disadvantages: [
    "Requires close physical proximity and high transmission power",
    "Can be detected by monitoring BSSID conflicts"
  ],
  whenToUse: "(Attacker perspective) To intercept or modify commands without brute-forcing encryption keys.",
  whenNotToUse: "(Attacker perspective) If the target uses mutual authentication protocols (like enterprise Wi-Fi).",
  paperUsage: "Paper 2 executes this using Airgeddon to clone the UAV's SSID and force the UAV to connect to the attacker's network.",
  papers: [
    "Paper 2"
  ],
  relatedTerms: [
    "Jamming"
  ]
},
  {
  id: "zero-day",
  name: "Zero-Day Attack",
  difficulty: "Advanced",
  category: [
    "Cybersecurity"
  ],
  definition: "A cyber attack that exploits a previously unknown vulnerability in software or hardware before the vendor has released a patch.",
  whyUsed: "They have a high probability of success because traditional signature-based security systems have no existing defense against them.",
  howWorks: "Attackers discover a flaw in a protocol or flight controller logic and write a custom exploit. Because it has never been seen in the wild, standard firewalls fail to block it.",
  simpleExplanation: "A burglar finding a hidden, unlocked window in a new house design that even the architect didn't know existed.",
  technicalExplanation: "Zero-days exploit unmitigated software bugs (buffer overflows, logic errors). Defending against them requires behavioral anomaly detection or unsupervised machine learning, as there are no historical signatures to match.",
  realWorldAnalogy: "A completely new strain of a virus that the immune system has never encountered and has no antibodies for.",
  advantages: [
    "Extremely effective against hardened targets",
    "Bypasses signature-based IDS"
  ],
  disadvantages: [
    "Very difficult and expensive to discover and weaponize",
    "Once used and detected, the vulnerability is often patched quickly"
  ],
  whenToUse: "(Attacker perspective) For high-value targets where standard exploits fail.",
  whenNotToUse: "(Attacker perspective) For routine attacks where known vulnerabilities are still unpatched.",
  paperUsage: "Paper 1 highlights the ability of its unsupervised anomaly detection models (Isolation Forest, Autoencoder) to detect zero-day attacks with 92.5% accuracy.",
  papers: [
    "Both"
  ],
  relatedTerms: [
    "Isolation Forest",
    "Autoencoder"
  ]
},
  {
  id: "accuracy",
  name: "Accuracy",
  difficulty: "Beginner",
  category: [
    "Metrics",
    "Evaluation"
  ],
  definition: "The proportion of total predictions (both normal and attack) that were correctly classified by the model.",
  whyUsed: "Provides a simple, intuitive, overall gauge of model performance.",
  howWorks: "Calculated as (True Positives + True Negatives) / Total Predictions.",
  simpleExplanation: "The percentage of test questions the model answered correctly.",
  technicalExplanation: "While highly interpretable, accuracy can be severely misleading in imbalanced datasets (e.g., if 99% of traffic is normal, a model that simply guesses 'normal' every time will be 99% accurate but completely useless for detection).",
  realWorldAnalogy: "A weather forecaster getting the forecast right 9 days out of 10.",
  advantages: [
    "Easy to understand and communicate to non-technical stakeholders"
  ],
  disadvantages: [
    "Misleading on imbalanced datasets",
    "Does not differentiate between false positives and false negatives"
  ],
  whenToUse: "When the classes (attacks vs. normal) in your dataset are roughly equal in size.",
  whenNotToUse: "When evaluating rare events (like cyber attacks in massive telemetry streams).",
  paperUsage: "Reported in both papers to demonstrate overall model superiority (Paper 1 reports 97.8% overall accuracy).",
  papers: [
    "Both"
  ],
  relatedTerms: [
    "Precision",
    "Recall",
    "F1-Score"
  ]
},
  {
  id: "precision",
  name: "Precision",
  difficulty: "Beginner",
  category: [
    "Metrics",
    "Evaluation"
  ],
  definition: "The proportion of positive identifications that were actually correct.",
  whyUsed: "To measure how much you can trust the model when it raises an alarm.",
  howWorks: "Calculated as True Positives / (True Positives + False Positives).",
  simpleExplanation: "If the alarm goes off 10 times, and 9 times it was a real fire, the precision is 90%.",
  technicalExplanation: "High precision indicates a low false positive rate. This is critical in autonomous systems because false alarms can lead to unnecessary mission aborts or operator fatigue.",
  realWorldAnalogy: "A metal detector at an airport that only beeps when there is actually metal, not when it scans a plastic button.",
  advantages: [
    "Crucial for mitigating 'alert fatigue'",
    "Focuses strictly on the quality of the positive predictions"
  ],
  disadvantages: [
    "Ignores missed attacks (false negatives) entirely"
  ],
  whenToUse: "When the cost of a false positive is very high (e.g., grounding a fleet of drones unnecessarily).",
  whenNotToUse: "When missing a real attack is catastrophic and you'd rather have false alarms.",
  paperUsage: "Paper 1 emphasizes high precision (96.7%) to ensure uninterrupted UAV operations.",
  papers: [
    "Both"
  ],
  relatedTerms: [
    "Recall",
    "False Positive Rate"
  ]
},
  {
  id: "recall",
  name: "Recall (Sensitivity)",
  difficulty: "Beginner",
  category: [
    "Metrics",
    "Evaluation"
  ],
  definition: "The proportion of actual positive cases that were correctly identified.",
  whyUsed: "To measure the model's ability to find all the actual attacks.",
  howWorks: "Calculated as True Positives / (True Positives + False Negatives).",
  simpleExplanation: "If there were 10 real fires, and the alarm only caught 8 of them, the recall is 80%.",
  technicalExplanation: "Recall measures the false negative rate. A model with high recall ensures that very few attacks slip through undetected, even if it means tolerating more false alarms.",
  realWorldAnalogy: "A security guard who checks everyone's ID; they never miss an intruder, but they might annoy regular employees.",
  advantages: [
    "Ensures maximum security coverage",
    "Critical for high-stakes threat detection"
  ],
  disadvantages: [
    "Can result in a high false positive rate if optimized at the expense of precision"
  ],
  whenToUse: "When the cost of missing an attack is catastrophic (e.g., an undetected hijack).",
  whenNotToUse: "When false alarms cause severe operational disruption and the threat level is low.",
  paperUsage: "Paper 1 highlights a recall of 95.4%, meaning it successfully detects the vast majority of attacks.",
  papers: [
    "Both"
  ],
  relatedTerms: [
    "Precision",
    "F1-Score"
  ]
},
  {
  id: "auc-roc",
  name: "AUC-ROC",
  difficulty: "Advanced",
  category: [
    "Metrics",
    "Evaluation"
  ],
  definition: "The Area Under the Receiver Operating Characteristic Curve. It measures the ability of a classifier to distinguish between classes.",
  whyUsed: "It evaluates performance across all possible classification thresholds, providing a threshold-invariant metric.",
  howWorks: "It plots the True Positive Rate (Recall) against the False Positive Rate. An AUC of 1.0 means perfect separation, while 0.5 means random guessing.",
  simpleExplanation: "A score of how well the model separates the 'good guys' from the 'bad guys' regardless of how strictly you set the rules.",
  technicalExplanation: "The ROC curve illustrates the diagnostic ability of a binary classifier as its discrimination threshold is varied. AUC calculates the integral of this curve. It handles imbalanced datasets better than raw accuracy.",
  realWorldAnalogy: "Evaluating a bouncer's overall ability to distinguish under-age from of-age patrons, rather than grading them on one specific night's strictness.",
  advantages: [
    "Threshold invariant",
    "Scale invariant",
    "Excellent for comparing multiple models"
  ],
  disadvantages: [
    "Can be overly optimistic with severely imbalanced datasets (PR curve is sometimes preferred)"
  ],
  whenToUse: "When you want to compare the overall performance of different models before picking a specific operating threshold.",
  whenNotToUse: "When you only care about performance at a very specific threshold or false positive rate constraint.",
  paperUsage: "Mentioned in Paper 1 as an evaluation metric to assess the model's ability to distinguish normal vs malicious behavior.",
  papers: [
    "Paper 1"
  ],
  relatedTerms: [
    "Recall",
    "False Positive Rate"
  ]
},
  {
  id: "autoencoder",
  name: "Autoencoder",
  difficulty: "Advanced",
  category: [
    "Deep Learning",
    "Algorithms Hub"
  ],
  definition: "An unsupervised neural network architecture trained to copy its input to its output by passing it through a compressed bottleneck layer.",
  whyUsed: "Ideal for anomaly detection; it learns to reconstruct normal data well, but fails to reconstruct anomalous data (like zero-day attacks), resulting in a high reconstruction error.",
  howWorks: "Consists of an encoder that compresses data into a latent-space representation, and a decoder that reconstructs the data. Anomalies are flagged when the reconstruction error exceeds a threshold.",
  simpleExplanation: "Like a student who memorizes how to draw a dog. If you ask them to draw a dog, they do it perfectly. If you ask them to draw an alien spaceship (anomaly), they draw it badly.",
  technicalExplanation: "By minimizing the reconstruction loss (e.g., Mean Squared Error) on purely normal data, the autoencoder learns the manifold of the benign class. Malicious packets lie outside this manifold and thus yield high MSE.",
  realWorldAnalogy: "A counterfeit bill detector that only knows the exact dimensions and weight of real money. Anything that feels slightly different is flagged.",
  advantages: [
    "Does not require labeled attack data for training",
    "Can detect completely novel zero-day attacks",
    "Learns non-linear feature representations"
  ],
  disadvantages: [
    "Choosing the right bottleneck size and threshold is difficult",
    "May struggle if normal behavior is highly varied and multi-modal"
  ],
  whenToUse: "When you lack labeled attack data and want to detect deviations from a known baseline of normal operations.",
  whenNotToUse: "When you have a fully labeled dataset and need to classify specific types of known attacks with high confidence.",
  paperUsage: "Used in Paper 1 (unsupervised learning module) to detect zero-day attacks based on reconstruction errors.",
  papers: [
    "Paper 1"
  ],
  relatedTerms: [
    "Zero-Day Attack",
    "Isolation Forest"
  ]
},
  {
  id: "pca",
  name: "Principal Component Analysis (PCA)",
  difficulty: "Intermediate",
  category: [
    "Machine Learning",
    "Statistics"
  ],
  definition: "A dimensionality reduction technique that transforms a large set of variables into a smaller one that still contains most of the information.",
  whyUsed: "To reduce the computational complexity of the IDS by removing redundant features while preserving the dataset's variance.",
  howWorks: "It computes the eigenvectors and eigenvalues of the data's covariance matrix, projecting the data into a new coordinate system where the new axes (principal components) maximize variance.",
  simpleExplanation: "Taking a 3D object and shining a light on it to create a 2D shadow that still shows you the object's most important shape.",
  technicalExplanation: "PCA is an orthogonal linear transformation. It is highly sensitive to the scaling of original variables, so normalization is required first. The first principal component accounts for the most variance, the second for the next most, and so on.",
  realWorldAnalogy: "Summarizing a 100-page book into a 5-page summary that still captures the entire plot.",
  advantages: [
    "Reduces model training time",
    "Helps mitigate the curse of dimensionality",
    "Removes multicollinearity"
  ],
  disadvantages: [
    "The new principal components are completely uninterpretable",
    "Assumes relationships between features are linear",
    "Information is inevitably lost"
  ],
  whenToUse: "When you have hundreds of correlated features and model training is too slow.",
  whenNotToUse: "When model interpretability (knowing exactly which sensor triggered the alarm) is required.",
  paperUsage: "Used in Paper 1 as a feature engineering method to focus on the most significant attributes and reduce dimensionality.",
  papers: [
    "Paper 1"
  ],
  relatedTerms: [
    "RFE"
  ]
},
  {
  id: "rfe",
  name: "Recursive Feature Elimination (RFE)",
  difficulty: "Intermediate",
  category: [
    "Machine Learning",
    "Optimization"
  ],
  definition: "A feature selection algorithm that iteratively removes the weakest features until the specified number of features is reached.",
  whyUsed: "To improve model accuracy and speed by eliminating irrelevant or noisy features from the dataset.",
  howWorks: "It trains a model (like an SVM or Random Forest), evaluates feature importance, removes the least important feature, and repeats the process on the smaller dataset.",
  simpleExplanation: "Like holding tryouts for a sports team and cutting the worst player one by one until you have your starting lineup.",
  technicalExplanation: "A wrapper-based feature selection method. It uses the model's native attribute weighting (like coefficients in linear models or impurity decrease in trees) to rank features recursively.",
  realWorldAnalogy: "Packing a suitcase for a flight and repeatedly removing the heaviest, least useful item until your bag meets the weight limit.",
  advantages: [
    "Considers feature interactions, unlike univariate selection",
    "Maintains feature interpretability (unlike PCA)"
  ],
  disadvantages: [
    "Computationally expensive to retrain the model repeatedly",
    "Requires a base estimator that provides feature weights"
  ],
  whenToUse: "When you need to prune a dataset down to the most critical, interpretable features.",
  whenNotToUse: "When dealing with millions of features or when using a base estimator that doesn't expose feature importance.",
  paperUsage: "Employed in Paper 1 alongside PCA to ensure only the most significant cyber-physical features were retained for analysis.",
  papers: [
    "Paper 1"
  ],
  relatedTerms: [
    "PCA",
    "Grid Search"
  ]
}
];
