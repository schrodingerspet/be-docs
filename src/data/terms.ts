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
    relatedTerms: ["LSTM", "Telemetry", "Feature Engineering"],
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
    relatedTerms: ["Replay Attack", "False Data Injection", "Telemetry"],
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
    relatedTerms: ["Decision Flowcharts", "Machine Learning", "Cross Validation"],
  }
];
