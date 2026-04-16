const PRACTICE_QUESTIONS = [
  {
    text: "What does affective computing primarily involve?",
    options: [
      "Systems that improve computer graphics",
      "Systems that sense, recognize, respond to, and influence emotions",
      "Systems that optimize data storage",
      "Systems that improve processor speed"
    ],
    answer: 1,
    explanation: "Affective computing focuses on understanding and handling human emotions. Other options relate to graphics, storage, and hardware performance, not emotions."
  },
  {
    text: "Which of the following is not a modality for affect sensing?",
    options: [
      "Facial activity",
      "Textual analysis",
      "Temperature of the environment",
      "Physiological signals"
    ],
    answer: 2,
    explanation: "Affect sensing uses human-related signals like facial expressions, text, and physiological data. Environmental temperature does not directly reflect human emotions."
  },
  {
    text: "According to Picard (1997), which of the following is not one of the three applications of affective computing?",
    options: [
      "Detection",
      "Expression",
      "Prediction",
      "Perception"
    ],
    answer: 2,
    explanation: "Picard defined detection, expression, and perception as core applications. Prediction is not part of the original three."
  },
  {
    text: "The EngageMe system uses which data source to help teachers reflect on their classes?",
    options: [
      "EEG readings from helmets",
      "Skin conductance and classroom video feeds",
      "Social media activity",
      "Voice recordings"
    ],
    answer: 1,
    explanation: "EngageMe analyzes engagement using physiological signals like skin conductance and video data. Other options are not used in this system."
  },
  {
    text: "Which application is designed to help individuals with Asperger syndrome or high-functioning autism?",
    options: [
      "StartleMart",
      "Subtle Stone",
      "SymTrend and Autism Track",
      "MACH"
    ],
    answer: 2,
    explanation: "SymTrend and Autism Track assist individuals with autism in understanding emotions. Other options are unrelated applications."
  },
  {
    text: "What is the purpose of the MACH system?",
    options: [
      "Neuromarketing research",
      "Automated conversation coaching for interviews",
      "Stress detection in PTSD",
      "Classroom emotion tracking"
    ],
    answer: 1,
    explanation: "MACH is used to train users for interviews by analyzing and improving communication. Other options belong to different domains."
  },
  {
    text: "In UX design, what does usability mainly concern?",
    options: [
      "How attractive the interface looks",
      "How easy the product is to use",
      "How emotional the user feels",
      "How fast the product can be developed"
    ],
    answer: 1,
    explanation: "Usability focuses on ease of use and user-friendliness. Appearance, emotions, and development speed are separate concerns."
  },
  {
    text: "What is a major problem with self-reported user testing (focus groups/surveys)?",
    options: [
      "Requires expensive hardware",
      "Participant bias and recall bias",
      "Requires EEG equipment",
      "Long training time for participants"
    ],
    answer: 1,
    explanation: "Self-reports can be inaccurate due to bias and memory issues. Other options are not typical problems of surveys."
  },
  {
    text: "Which physiological signal is explicitly mentioned as part of affect sensing?",
    options: [
      "Heart rate variability",
      "Electrodermal activity (EDA)",
      "Sleep cycles",
      "Blood pressure"
    ],
    answer: 1,
    explanation: "EDA measures skin conductance and is widely used for emotion detection. Other signals are less directly used or not mentioned here."
  },
  {
    text: "Emotion recognition systems always rely on facial expressions and cannot use any other type of data.",
    options: [
      "True",
      "False"
    ],
    answer: 1,
    explanation: "Emotion recognition can use multiple modalities like voice, text, and physiological signals, not just facial expressions."
  },
  {
    text: "Which brain region is primarily involved in regulating emotional experience and motivation?",
    options: [
      "Prefrontal cortex",
      "Occipital lobe",
      "Cerebellum",
      "Pituitary gland"
    ],
    answer: 0,
    explanation: "Prefrontal cortex controls emotions and motivation. Occipital lobe handles vision, cerebellum manages movement, and pituitary gland controls hormones."
  },
  {
    text: "The amygdala is most strongly associated with which function?",
    options: [
      "Decision making and planning",
      "Regulation of voluntary movement",
      "Processing stimulus salience and arousal",
      "Language comprehension"
    ],
    answer: 2,
    explanation: "Amygdala detects important emotional stimuli and controls arousal. Other options belong to different brain regions like prefrontal cortex or motor areas."
  },
  {
    text: "According to embodied cognition theories, voluntary facial muscle contraction can influence emotional experience. This idea supports which concept?",
    options: [
      "Emotions exist independently of bodily states",
      "Emotion cannot occur without a conscious appraisal",
      "Emotion is generated only through cognitive evaluation",
      "Bodily feedback contributes to how emotions are felt"
    ],
    answer: 3,
    explanation: "Embodied cognition says body actions (like facial expressions) influence emotions. Other options ignore the role of the body."
  },
  {
    text: "Higher activation in the left frontal hemisphere is generally linked to which motivational tendency?",
    options: [
      "Withdrawal motivation",
      "Approach motivation",
      "Reduced emotional awareness",
      "Neutral affect"
    ],
    answer: 1,
    explanation: "Left frontal activity is linked to approach (moving toward goals). Withdrawal is linked to right hemisphere; others are unrelated."
  },
  {
    text: "Which emotion is commonly associated with activation of the left frontal PFC, despite being negatively valenced?",
    options: [
      "Fear",
      "Sadness",
      "Anger",
      "Disgust"
    ],
    answer: 2,
    explanation: "Anger is negative but involves approach motivation, so it activates left PFC. Fear and sadness are withdrawal emotions."
  },
  {
    text: "In the dimensional VAD/PAD model, dominance refers to:",
    options: [
      "The sense of control or submission associated with an emotion",
      "The pleasantness of an emotional state",
      "The intensity or energy of an emotion",
      "The clarity with which an emotion is recognized"
    ],
    answer: 0,
    explanation: "Dominance means feeling in control or submissive. Pleasantness = valence, intensity = arousal, clarity is unrelated."
  },
  {
    text: "One limitation of traditional categorical emotion models is that:",
    options: [
      "They cannot be implemented computationally",
      "They struggle to represent relationships between emotions",
      "They include too many dimensions to be practical",
      "They ignore facial expressions entirely"
    ],
    answer: 1,
    explanation: "Categorical models treat emotions separately and cannot show relationships between them. Other options are incorrect limitations."
  },
  {
    text: "Which emotion is typically characterized by lowered eyebrows, tense eyelids, and pressed lips?",
    options: [
      "Happiness",
      "Fear",
      "Disgust",
      "Anger"
    ],
    answer: 3,
    explanation: "These facial features are classic signs of anger. Other emotions have different expressions."
  },
  {
    text: "Increased skin conductance is most reliably associated with which type of disgust-related stimulus?",
    options: [
      "Pictures of dirty toilets",
      "Pleasant odors",
      "Mutilation or body-boundary violation images",
      "Neutral facial expressions"
    ],
    answer: 2,
    explanation: "Strong disgust (like mutilation images) causes high physiological arousal and increases skin conductance. Others are weaker or neutral stimuli."
  },
  {
    text: "Crying-related sadness is associated with which physiological pattern?",
    options: [
      "Reduced respiration and lower HRV",
      "Increased heart rate and increased skin conductance",
      "Decreased skin conductance and reduced heart rate",
      "No change in respiration but reduced HRV"
    ],
    answer: 1,
    explanation: "Crying sadness increases arousal, leading to higher heart rate and skin conductance. Other options show low arousal patterns."
  },
  {
    text: "Which type of emotional expression dataset is easiest to collect but suffers from low ecological validity?",
    options: [
      "Acted or posed expressions",
      "Naturalistic expressions",
      "Induced expressions",
      "Behavioral manipulation datasets"
    ],
    answer: 0,
    explanation: "Acted expressions are easy to collect but look artificial, so they lack real-world validity. Naturalistic and induced expressions are more realistic."
  },
  {
    text: "In emotion elicitation, which method involves observing film clips or images designed to evoke emotions?",
    options: [
      "Social interaction",
      "Passive/perception-based methods",
      "Directed facial action tasks",
      "Productive modality elicitation"
    ],
    answer: 1,
    explanation: "Passive methods use stimuli like images or videos to evoke emotions. Other methods involve active participation or expression."
  },
  {
    text: "A key disadvantage of using images for passive elicitation is:",
    options: [
      "Setup is too complex",
      "Emotional reactions are short and transient",
      "Images cannot be standardized",
      "Images elicit too intense emotions"
    ],
    answer: 1,
    explanation: "Images trigger quick but short-lived emotions. They are easy to standardize and not overly complex."
  },
  {
    text: "Which passive method generally includes a neutral baseline clip before emotional clips?",
    options: [
      "Facial action tasks",
      "Social interaction",
      "Film clip–based elicitation",
      "Gesture-based elicitation"
    ],
    answer: 2,
    explanation: "Film-based methods often start with a neutral clip to set baseline. Other methods do not follow this structure."
  },
  {
    text: "Directed Facial Action Tasks are primarily used in:",
    options: [
      "Behavioral manipulation methods",
      "Passive emotion elicitation",
      "Baseline emotional calibration",
      "IRB risk assessment"
    ],
    answer: 0,
    explanation: "These tasks require participants to produce expressions, so they fall under behavioral manipulation. They are not passive methods."
  },
  {
    text: "One major advantage of social interaction–based elicitation is:",
    options: [
      "The emotions elicited are highly controllable",
      "It is effective for collecting productive modalities",
      "Emotions produced are realistic and natural",
      "Participants do not require instruction"
    ],
    answer: 2,
    explanation: "Social interaction produces natural and realistic emotions. However, they are less controllable than lab methods."
  },
  {
    text: "Which document is required when submitting a study for IRB review?",
    options: [
      "A participant payment receipt",
      "A full literature review",
      "A published version of the experiment",
      "A copy of the informed consent form"
    ],
    answer: 3,
    explanation: "IRB requires informed consent to ensure ethical participation. Other documents are not mandatory for approval."
  },
  {
    text: "Which of the following is not a criterion for IRB approval?",
    options: [
      "Risks to subjects must be minimized",
      "Adequate privacy and confidentiality protection",
      "Ensuring participants enjoy the experiment",
      "Selection of subjects must be equitable"
    ],
    answer: 2,
    explanation: "IRB focuses on safety and ethics, not enjoyment. Other options are key ethical requirements."
  },
  {
    text: "Tools such as PsychoPy, OpenSesame, and SuperLab fall under which category?",
    options: [
      "Affect expression tools",
      "Data collection tools",
      "Data mining tools",
      "Annotation tools"
    ],
    answer: 1,
    explanation: "These tools are used to design experiments and collect behavioral/emotional data. They are not for mining or annotation."
  },
  {
    text: "SAM (Self-Assessment Manikin) is primarily used for:",
    options: [
      "Image labeling",
      "Physiological signal cleaning",
      "Facial expression synthesis",
      "Measuring emotional responses along dimensions like valence and arousal"
    ],
    answer: 3,
    explanation: "SAM measures emotions using dimensions like valence and arousal. Other options are unrelated uses."
  },
  {
    text: "Which of the following is not an application of speech in affective computing?",
    options: [
      "Driver safety monitoring",
      "Mobile communications",
      "Diagnostic tools for therapists",
      "Face recognition unlocking"
    ],
    answer: 3,
    explanation: "Speech is used in monitoring, communication, and therapy tools. Face recognition unlocking uses visual data, not speech."
  },
  {
    text: "According to Borden et al. (1994), “how it is said” refers to:",
    options: [
      "The linguistic meaning of the words",
      "Paralinguistic information reflecting emotional state",
      "Speaker identity characteristics",
      "Speech segmentation rules"
    ],
    answer: 1,
    explanation: "‘How it is said’ refers to tone, pitch, and emotion (paralinguistic features). Linguistic meaning is about ‘what is said’."
  },
  {
    text: "Natural emotional speech databases primarily include:",
    options: [
      "Speech from trained actors",
      "Emotionally synthesized speech",
      "Spontaneous speech from real-world scenarios",
      "Scripted dialogues recorded in studios"
    ],
    answer: 2,
    explanation: "Natural databases contain real-life spontaneous speech. Actor-based and scripted speech are less natural."
  },
  {
    text: "Positive emotions always produce lower variability in pitch.",
    options: [
      "True",
      "False"
    ],
    answer: 1,
    explanation: "Positive emotions often increase pitch variability. So the statement is false."
  },
  {
    text: "The Berlin Emotional Speech Database contains recordings of:",
    options: [
      "Children interacting with robots",
      "Professional actors producing emotional German sentences",
      "North American speakers producing neutral statements",
      "Patients and doctors in clinical settings"
    ],
    answer: 1,
    explanation: "Berlin database uses actors speaking emotional German sentences. Other options describe different datasets."
  },
  {
    text: "Prosody features include:",
    options: [
      "MFCCs",
      "SIFT descriptors",
      "Fundamental frequency and short-term energy",
      "Visual intensity curves"
    ],
    answer: 2,
    explanation: "Prosody relates to pitch (f0) and energy. MFCCs are spectral features, SIFT is for images."
  },
  {
    text: "MFCCs are primarily used to represent:",
    options: [
      "Resonant spectral characteristics",
      "Rhythm and intonation patterns",
      "Speaker identity features",
      "Amplitude variations across time"
    ],
    answer: 0,
    explanation: "MFCCs capture spectral properties of sound. Rhythm and intonation belong to prosody."
  },
  {
    text: "Positive voices typically show which characteristic?",
    options: [
      "Low pitch and low formant frequencies",
      "Low speech rate",
      "Flat and monotone amplitude",
      "High loudness variability and high formant frequencies"
    ],
    answer: 3,
    explanation: "Positive emotions are energetic, showing high variability and higher formants. Other options reflect dull or negative speech."
  },
  {
    text: "A key problem with global normalization of f0 across all speakers is that it:",
    options: [
      "May blur emotional differences due to speaker-specific traits",
      "Reduces background noise",
      "Is too computationally expensive",
      "Requires manual annotation"
    ],
    answer: 0,
    explanation: "Global normalization removes speaker differences, which may hide emotional cues. Other options are unrelated."
  },
  {
    text: "One major open challenge in speech-based affect recognition is:",
    options: [
      "Oversupply of natural databases",
      "Inter- and intra-speaker variability",
      "Perfect cross-lingual generalization",
      "Excessive real-time deployment success"
    ],
    answer: 1,
    explanation: "Different speakers and variations in same speaker make emotion recognition difficult. Other options are incorrect or unrealistic."
  },
  {
    text: "ANEW is a categorical lexicon used to label text with Ekman’s six universal emotions.",
    options: [
      "True",
      "False"
    ],
    answer: 1,
    explanation: "ANEW is a dimensional lexicon (valence, arousal), not categorical. Ekman’s model is categorical, so this statement is false."
  },
  {
    text: "According to Poffenberger & Barrows (1924), upward-moving lines tend to evoke which feeling?",
    options: [
      "Calmness",
      "Joy",
      "Fear",
      "Anger"
    ],
    answer: 1,
    explanation: "Upward movement is associated with positive emotions like joy. Other options relate to different emotional cues."
  },
  {
    text: "Juni & Gross (2008) found that articles were perceived as more satirical when written in:",
    options: [
      "Arial",
      "Georgia",
      "Times New Roman",
      "Verdana"
    ],
    answer: 2,
    explanation: "Times New Roman gave a perception of satire in the study. Other fonts did not show this effect."
  },
  {
    text: "Relative Subjective Duration (RSD) experiments showed that good typography led participants to:",
    options: [
      "Underestimate reading time less",
      "Overestimate reading time greatly",
      "Underestimate reading time more",
      "Read significantly slower"
    ],
    answer: 2,
    explanation: "Good typography makes reading feel faster, so participants underestimate time more. Other options do not match findings."
  },
  {
    text: "Why is positive/negative sentiment analysis often insufficient?",
    options: [
      "Emotions with similar polarity (e.g., fear vs. anger) differ in relevance and meaning",
      "Most texts contain no sentiment",
      "It cannot detect sarcasm",
      "It is computationally expensive"
    ],
    answer: 0,
    explanation: "Same polarity emotions (fear, anger) are different in meaning, so simple sentiment fails. Other options are secondary or incorrect."
  },
  {
    text: "Implicit expressions of emotions (Lee, 2015) refer to:",
    options: [
      "Emotions directly stated via adjectives",
      "Physiological signals embedded in text",
      "Metaphors expressing emotional states",
      "Emotion conveyed without explicit emotional words"
    ],
    answer: 3,
    explanation: "Implicit emotion means emotion is not directly stated but understood from context. Other options involve explicit or incorrect forms."
  },
  {
    text: "Metaphorical emotional expressions create challenges because:",
    options: [
      "Their meaning cannot be inferred from literal text alone",
      "They are too rare to train on",
      "They cannot be represented in WordNet",
      "They always express anger"
    ],
    answer: 0,
    explanation: "Metaphors require context and cannot be understood literally. Other options are incorrect assumptions."
  },
  {
    text: "The ISEAR database consists of reports from participants describing:",
    options: [
      "Metaphorical uses of emotional expressions",
      "Situations where they experienced one of seven major emotions",
      "Annotated news headlines",
      "Product reviews labeled for polarity"
    ],
    answer: 1,
    explanation: "ISEAR contains real-life emotional experiences across seven emotions. Other options describe different datasets."
  },
  {
    text: "SentiWordNet focuses primarily on:",
    options: [
      "Dimensional emotion modeling",
      "Detecting metaphors in textual data",
      "Context-sensitive emotional sequences",
      "Polarity (positive, negative, objective) of terms"
    ],
    answer: 3,
    explanation: "SentiWordNet assigns polarity scores to words. Other options are unrelated to its purpose."
  },
  {
    text: "For unsupervised emotion recognition using lexicons, the text emotion is assigned by:",
    options: [
      "Counting how many emotional words appear",
      "Finding the class with highest cosine similarity to the text vector",
      "Selecting the emotion with the highest frequency in ANEW",
      "Applying rule-based keyword matching only"
    ],
    answer: 1,
    explanation: "Unsupervised methods compare vectors and choose highest similarity. Other methods are simpler but less accurate."
  },
  {
    text: "Physiological signals are especially valuable in affect detection because they:",
    options: [
      "Cannot be voluntarily controlled and reflect pure emotional states",
      "Require full attention from the participant",
      "Are easier to fake than facial expressions",
      "Are unaffected by wearable technologies"
    ],
    answer: 0,
    explanation: "Physiological signals (like HR, GSR) are hard to consciously control, so they reflect true emotions. Other options are incorrect."
  },
  {
    text: "Which of the following is not a physiological measure?",
    options: [
      "Respiration",
      "Electrocardiogram",
      "Heart Rate",
      "Eye-blink frequency"
    ],
    answer: 3,
    explanation: "Eye-blink is a behavioral measure, not physiological. Others are standard physiological signals."
  },
  {
    text: "Heart rate is strongly associated with which dimension of emotion?",
    options: [
      "Valence",
      "Arousal",
      "Dominance",
      "Surprise"
    ],
    answer: 1,
    explanation: "Heart rate reflects intensity of emotion (arousal), not whether it is positive or negative (valence)."
  },
  {
    text: "A key advantage of PPG (Photo-Plethysmography) over ECG is that PPG:",
    options: [
      "Provides greater spatial resolution",
      "Is quicker to attach and less intrusive",
      "Measures electrical pulses directly",
      "Requires medical-grade gel electrodes"
    ],
    answer: 1,
    explanation: "PPG is easy to use and less intrusive. ECG is more accurate but requires electrodes and setup."
  },
  {
    text: "Heart Rate Variability (HRV) measures:",
    options: [
      "The average heart rate over the day",
      "The electrical intensity of heart contractions",
      "The variation in RR intervals between beats",
      "The number of peaks in each heartbeat waveform"
    ],
    answer: 2,
    explanation: "HRV measures variation between successive heartbeats (RR intervals). Other options describe different metrics."
  },
  {
    text: "A major limitation of ECG/PPG for affect recognition is that they:",
    options: [
      "Only measure emotional valence, not arousal",
      "Cannot measure changes over short intervals",
      "Are too invasive for most participants",
      "Cannot distinguish positive from negative arousal"
    ],
    answer: 3,
    explanation: "ECG/PPG measure arousal but cannot tell if emotion is positive or negative. Other options are incorrect."
  },
  {
    text: "Physiological signals like HR and GSR are less likely to be consciously manipulated compared to facial expressions.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "These signals are automatic and difficult to fake, unlike facial expressions which can be controlled."
  },
  {
    text: "ECG-based heart rate measurements are more accurate than PPG because:",
    options: [
      "They measure electrical activity directly",
      "They require fewer sensors",
      "They work better at long distances",
      "They are less sensitive to motion artifacts"
    ],
    answer: 0,
    explanation: "ECG directly records electrical signals of the heart, making it more accurate than PPG."
  },
  {
    text: "Low HRV is typically associated with:",
    options: [
      "Relaxation",
      "Strong stress or arousal",
      "Enhanced emotional control",
      "Deep sleep"
    ],
    answer: 1,
    explanation: "Low HRV indicates stress and poor adaptability. High HRV is linked to relaxation and good regulation."
  },
  {
    text: "Skin Conductance (GSR/EDA) measures changes primarily due to:",
    options: [
      "Sweat gland activity",
      "Body temperature",
      "Blood pressure",
      "Respiration depth"
    ],
    answer: 0,
    explanation: "GSR measures sweat gland activity controlled by the nervous system. Other options are different physiological signals."
  },
  {
    text: "In GSR signals, the fast, event-related component is called:",
    options: [
      "SCL (Skin Conductance Level)",
      "EDL (Electrodermal Level)",
      "SCR (Skin Conductance Response)",
      "ERV (Emotional Response Value)"
    ],
    answer: 2,
    explanation: "SCR represents quick changes due to stimuli. SCL is slow baseline activity."
  },
  {
    text: "GSR can reveal whether the emotional state is positive or negative.",
    options: [
      "True",
      "False"
    ],
    answer: 1,
    explanation: "GSR only measures arousal, not whether emotion is positive or negative."
  },
  {
    text: "Skin conductance responses (SCR) correspond to:",
    options: [
      "Slow tonic changes in conductivity",
      "Rapid, event-related changes triggered by stimuli",
      "Changes due to respiration cycles",
      "Variations caused only by temperature"
    ],
    answer: 1,
    explanation: "SCR reflects fast changes due to emotional stimuli. Slow changes are part of SCL."
  },
  {
    text: "The most emotionally reactive sweat glands are located on:",
    options: [
      "Forehead",
      "Knees",
      "Palms and soles",
      "Back"
    ],
    answer: 2,
    explanation: "Palms and soles have highest sweat gland activity linked to emotions."
  },
  {
    text: "In EEG signals, alpha-band power has what relationship with cortical activity?",
    options: [
      "Direct (more alpha = more activity)",
      "Inverse (more alpha = less activity)",
      "No relationship",
      "Only positive emotions change alpha"
    ],
    answer: 1,
    explanation: "Higher alpha means lower brain activity (inverse relation)."
  },
  {
    text: "In multimodal emotion recognition, early fusion requires:",
    options: [
      "Combining classifier decisions",
      "Using only a single modality",
      "Late-stage hypothesis selection",
      "Synchronizing signals before concatenation"
    ],
    answer: 3,
    explanation: "Early fusion combines raw features, so signals must be synchronized first."
  },
  {
    text: "Slow fusion is beneficial because it:",
    options: [
      "Avoids all redundancy across modalities",
      "Assumes strict independence of cues",
      "Exploits correlations while relaxing synchronization requirements",
      "Works only with visual cues"
    ],
    answer: 2,
    explanation: "Slow fusion allows flexibility and uses relationships between modalities without strict timing."
  },
  {
    text: "The SEMAINE project aims to train a system that:",
    options: [
      "Engages in multimodal social interaction as a Sensitive Artificial Listener",
      "Predicts emotional valence using only speech",
      "Detects emotions using physiological sensors alone",
      "Generates emotional facial expressions automatically"
    ],
    answer: 0,
    explanation: "SEMAINE focuses on interactive systems that respond emotionally in conversations."
  },
  {
    text: "A challenge in multimodal affect data collection is:",
    options: [
      "Too many synchronized datasets exist",
      "Overabundance of annotated corpora",
      "Lack of available audio signals",
      "Getting spontaneous, subtle expressions with aligned modalities"
    ],
    answer: 3,
    explanation: "It is difficult to capture natural emotions across multiple modalities in sync."
  },
  {
    text: "Empathy is defined as the capacity to:",
    options: [
      "Understand what other humans are experiencing",
      "Sense physiological signals of another person",
      "Predict future user behavior",
      "Generate synthetic emotions"
    ],
    answer: 0,
    explanation: "Empathy means understanding others’ feelings and experiences. Other options are related to sensing or prediction, not empathy itself."
  },
  {
    text: "Anthropomorphism refers to:",
    options: [
      "Designing robots without humanlike qualities",
      "Assigning human characteristics to non-human entities",
      "Removing emotional expressiveness from agents",
      "Ensuring robots remain purely mechanical"
    ],
    answer: 1,
    explanation: "Anthropomorphism means giving human-like traits to machines or objects. Other options describe the opposite."
  },
  {
    text: "A primary risk of highly humanlike robot design is the:",
    options: [
      "Social inertia problem",
      "Mechanical failure effect",
      "Uncanny Valley effect",
      "Immersion fatigue"
    ],
    answer: 2,
    explanation: "Very human-like robots can feel strange or uncomfortable, known as the Uncanny Valley. Other options are unrelated."
  },
  {
    text: "In empathy analysis, lexical cues typically involve:",
    options: [
      "Physiological features from GSR",
      "Motion tracking of gestures",
      "Patterns in language transcripts",
      "Eye-gaze direction estimation"
    ],
    answer: 2,
    explanation: "Lexical cues come from text and spoken words. Other options are physiological or visual cues."
  },
  {
    text: "Prosodic cues for empathy detection include:",
    options: [
      "Pitch, jitter, shimmer and energy",
      "Facial landmark velocities",
      "Background noise estimation",
      "Lexicon-based word embeddings"
    ],
    answer: 0,
    explanation: "Prosody refers to voice features like pitch and energy. Other options are not prosodic features."
  },
  {
    text: "Empathic agents can lead to more positive and appropriate interactions with users.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Empathic systems improve user experience and communication, so this statement is true."
  },
  {
    text: "The robot “Shimi” determines valence using:",
    options: [
      "Facial EMG signals",
      "EEG spectral features",
      "Pulse analysis from PPG",
      "Semantic analysis of spoken language"
    ],
    answer: 3,
    explanation: "Shimi analyzes spoken language meaning to detect emotional valence. Other options involve physiological signals."
  },
  {
    text: "In virtual agent studies, bystander intervention was influenced by:",
    options: [
      "Visual realism only",
      "Social identity of the participant",
      "Robot motion speed",
      "Ambient sound levels"
    ],
    answer: 1,
    explanation: "Social identity affects how people respond in group situations. Other factors are less significant."
  },
  {
    text: "A major limitation of data-driven empathy modeling is:",
    options: [
      "Lack of high-quality, finely annotated empathy datasets",
      "Too much multimodal data available",
      "Overabundance of therapist training corpora",
      "Universal agreement on evaluation metrics"
    ],
    answer: 0,
    explanation: "Good labeled empathy datasets are limited, making training difficult. Other options are incorrect."
  },
  {
    text: "Affective AutoTutor adapts its responses using:",
    options: [
      "Randomized affect scripts",
      "Motion-only cues",
      "Predefined facial, prosodic and verbal empathic behaviors",
      "Reward-based reinforcement learning"
    ],
    answer: 2,
    explanation: "AutoTutor uses predefined emotional behaviors across face, voice, and text. Other options do not describe its approach."
  },
  {
    text: "Which of the following is a suitable reason why an Emotional Virtual Agent (EVA) should support multiple languages?",
    options: [
      "To enable a wider range of users to access emotional support",
      "To ensure that the agent never makes translation errors",
      "To reduce the need for emotional modeling",
      "To increase the agent’s computational speed"
    ],
    answer: 0,
    explanation: "Supporting multiple languages increases accessibility for diverse users. Other options are incorrect or unrealistic."
  },
  {
    text: "Virtual assistants may be biased towards the training data, which may potentially lead to the unfair treatment of certain groups.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Bias in training data can lead to unfair or discriminatory outcomes. This is a known issue in AI systems."
  },
  {
    text: "Emotional virtual agents might lead to social isolation.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Over-reliance on virtual agents may reduce human interaction, leading to social isolation."
  },
  {
    text: "Which of the following is the best way to prevent privacy concerns related to emotional virtual agents?",
    options: [
      "Collect as much user data as possible to improve accuracy",
      "Obtaining users' consent before collecting personal data and clearly stating the purpose of the data collection.",
      "Store all emotional data indefinitely for future analysis",
      "Disable all emotional recognition features entirely"
    ],
    answer: 1,
    explanation: "User consent and transparency are key for privacy protection. Other options either violate privacy or are impractical."
  },
  {
    text: "The speech emotion detection and virtual assistant components should be able to work in real-time or close to real-time.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Real-time processing is important for natural interaction and timely responses."
  },
  {
    text: "What is the role of the \"context\" in an emotionally intelligent virtual assistant?",
    options: [
      "To understand the user’s preferences and history for personalized responses",
      "It eliminates the need to analyze user input",
      "It ensures the assistant always responds with positive emotions",
      "To simply follow the user’s spoken instructions without emotion or history"
    ],
    answer: 0,
    explanation: "Context helps personalize responses using past interactions and preferences. Other options misunderstand context."
  },
  {
    text: "How can emotional virtual agents help avoid bias in their responses to users?",
    options: [
      "By using data from only one ethnic group.",
      "By ensuring the data used for training is diverse and representative.",
      "By focusing on only one language group.",
      "By ignoring cultural differences."
    ],
    answer: 1,
    explanation: "Diverse and representative data reduces bias. Other options increase bias."
  },
  {
    text: "Which of the following is true about a virtual personal assistant system?",
    options: [
      "It should protect personal information but not emotional information.",
      "It should protect emotional information but not personal information.",
      "It should not protect either personal or emotional information.",
      "It should protect both personal and emotional information."
    ],
    answer: 3,
    explanation: "Both personal and emotional data are sensitive and must be protected."
  },
  {
    text: "What should an Emotional Virtual Agent base its appropriate response on?",
    options: [
      "Intent and emotion",
      "Intent and context",
      "A mix of intent, emotion, and context",
      "Emotion and context"
    ],
    answer: 2,
    explanation: "Best responses consider what user wants (intent), how they feel (emotion), and situation (context)."
  },
  {
    text: "Normalizing emotional data from different users ensures that their responses can be compared fairly.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Normalization removes individual differences, allowing fair comparison across users."
  },
  {
    text: "Which security measure is most commonly used to protect emotional state data transmitted to cloud-based systems?",
    options: [
      "Two-factor authentication",
      "IP whitelisting",
      "End-to-end encryption",
      "Data obfuscation"
    ],
    answer: 2,
    explanation: "End-to-end encryption secures data during transmission. Other methods help access control but do not directly protect transmitted data."
  },
  {
    text: "Perfect anonymization cannot be guaranteed because any piece of data may become identifiable when combined with enough additional information.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Even anonymized data can be re-identified when combined with other datasets."
  },
  {
    text: "Why is it important for designers to provide clear documentation and contracts regarding app functionalities and data handling?",
    options: [
      "To maximize user interaction with the app",
      "To increase user dependence on the app",
      "To limit user access to app features",
      "To ensure users understand how their data is recorded and who can access it"
    ],
    answer: 3,
    explanation: "Transparency helps users understand data usage and builds trust. Other options are unethical or irrelevant."
  },
  {
    text: "Which of the following is in the correct order of their privacy invasiveness. Starting with the most invasive first.",
    options: [
      "Accelerometer > Wifi > Microphone",
      "Accelerometer > Microphone > Wifi",
      "Microphone > Wife > Accelerometer",
      "Microphone > Wifi > Accelerometer"
    ],
    answer: 3,
    explanation: "Microphone captures sensitive audio (most invasive), WiFi reveals location/network, and accelerometer is least invasive."
  },
  {
    text: "What method from the list below is used in neuromarketing research?",
    options: [
      "fMRI",
      "dMRI",
      "EGG",
      "ECB"
    ],
    answer: 0,
    explanation: "fMRI is widely used to study brain responses in neuromarketing. Other options are incorrect or less relevant."
  },
  {
    text: "From an ethics perspective, what is a major concern regarding affect-sensing apps and emotional dependency?",
    options: [
      "User engagement",
      "Privacy intrusion",
      "User addiction",
      "Emotional manipulation"
    ],
    answer: 2,
    explanation: "Affect-sensing apps can make users emotionally dependent on them for support and validation, leading to addictive usage and reduced ability to manage emotions independently."
  },
  {
    text: "Targeted advertising can improve user experience, but it also increases the user's vulnerability to privacy risks.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Targeted ads require personal data, increasing privacy risks."
  },
  {
    text: "Why should designers provide clear documentation and contracts about app functionalities and data handling?",
    options: [
      "To maximize how much users interact with the app",
      "To increase user dependence on the application",
      "To restrict user access to features",
      "To clearly inform users about how their data is recorded and who can access it"
    ],
    answer: 3,
    explanation: "Clear documentation ensures transparency and informed consent."
  },
  {
    text: "Who should participate in forming ethical guidelines for developing affect-aware machines?",
    options: [
      "A collaborative group including engineers, ethicists, users, and other relevant stakeholders",
      "Only engineers and system developers",
      "Only ethicists and philosophers",
      "Only end users and direct stakeholders"
    ],
    answer: 0,
    explanation: "Ethical guidelines require input from multiple perspectives, not just one group."
  },
  {
    text: "Which of the following sensing strategies is written wrongly in order of their privacy invasiveness?",
    options: [
      "Microphone > WiFi> Accelerometer",
      "GPS > Bluetooth > Screen Touch",
      "Calls > Apps > Gyroscope",
      "WiFi > Gyroscope > Calls"
    ],
    answer: 3,
    explanation: "Calls are more invasive than WiFi, so this order is incorrect. Other options follow correct invasiveness order."
  },
  {
    text: "Which input modality is considered the most informative and non-intrusive for Facial Emotion Recognition (FER)?",
    options: [
      "EMG",
      "Camera",
      "EEG",
      "Earables"
    ],
    answer: 1,
    explanation: "Camera captures facial expressions naturally without contact, making it informative and non-intrusive. EMG/EEG require sensors."
  },
  {
    text: "Dynamic FER generally outperforms static FER because it:",
    options: [
      "Uses more sensors",
      "Ignores temporal variations",
      "Captures expression transitions over time",
      "Removes noise from peak frames"
    ],
    answer: 2,
    explanation: "Dynamic FER uses time information, capturing how expressions change. Static FER uses only single frames."
  },
  {
    text: "The first step in conventional FER pipelines typically involves:",
    options: [
      "Expression classification",
      "Texture smoothing",
      "Face and facial component detection",
      "Motion estimation"
    ],
    answer: 2,
    explanation: "First step is detecting face and key regions. Classification happens later."
  },
  {
    text: "Deep-learning-based FER systems reduce reliance on:",
    options: [
      "Face-physics-based models and preprocessing",
      "Landmark detectors",
      "Data augmentation",
      "GPU resources"
    ],
    answer: 0,
    explanation: "Deep learning learns features automatically, reducing need for manual preprocessing models."
  },
  {
    text: "Macro expressions typically last:",
    options: [
      "Less than 1/2 second",
      "5–10 seconds",
      "Longer than 10 seconds",
      "Between 1/2 and 4 seconds"
    ],
    answer: 3,
    explanation: "Macro expressions last 0.5 to 4 seconds. Micro expressions are shorter."
  },
  {
    text: "Micro expressions are difficult to detect because they:",
    options: [
      "Last longer than macro expressions",
      "Are consciously controlled",
      "Are brief and often involuntary",
      "Do not involve facial muscles"
    ],
    answer: 2,
    explanation: "Micro expressions are very fast and involuntary, making them hard to capture."
  },
  {
    text: "Facial Action Coding System (FACS) is based on:",
    options: [
      "Facial muscle movements",
      "Wrinkle depth measurements",
      "Tracking head pose only",
      "Eye aperture changes exclusively"
    ],
    answer: 0,
    explanation: "FACS describes facial expressions using muscle movements (Action Units)."
  },
  {
    text: "Which appearance-based feature descriptor is sensitive to lighting variations?",
    options: [
      "SIFT",
      "Raw pixel intensity values",
      "Gabor filters",
      "HOG"
    ],
    answer: 1,
    explanation: "Raw pixel values change directly with lighting, making them sensitive. Others are more robust."
  },
  {
    text: "Optical flow is primarily used to extract:",
    options: [
      "Static shape features",
      "Texture gradients",
      "Motion-based features",
      "High-resolution appearance cues"
    ],
    answer: 2,
    explanation: "Optical flow captures motion between frames. It is not for static or texture features."
  },
  {
    text: "Geometric features alone are sometimes insufficient because different AUs can produce similar landmark changes.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Different facial actions can look similar in landmarks, so geometry alone is not enough."
  },
  {
    text: "Affective AutoTutor combines individual affect diagnoses using:",
    options: [
      "Feature-level fusion",
      "Decision-level fusion",
      "Early multimodal fusion",
      "Pure rule-based weighting"
    ],
    answer: 1,
    explanation: "AutoTutor combines outputs from different models (decisions), not raw features. Hence decision-level fusion."
  },
  {
    text: "GazeTutor primarily focuses on detecting:",
    options: [
      "Heart rate fluctuations",
      "Keyboard typing patterns",
      "Emotional tone of spoken dialogue",
      "Eye-gaze shifts indicating waning attention"
    ],
    answer: 3,
    explanation: "GazeTutor monitors eye movement to detect attention levels. Other options are unrelated."
  },
  {
    text: "In affect-aware games, emotion-driven interaction allows:",
    options: [
      "Predicting user goals only",
      "Removing all non-playable characters",
      "Preventing game difficulty adjustments",
      "Tailoring game experience to individual players"
    ],
    answer: 3,
    explanation: "Emotion-aware systems adapt gameplay based on user emotions. Other options are incorrect."
  },
  {
    text: "Nevermind modifies gameplay difficulty based on:",
    options: [
      "Heart rate and emotional distress indicators",
      "Player’s reaction time",
      "Completed mission count",
      "Voice loudness"
    ],
    answer: 0,
    explanation: "Nevermind uses physiological signals like heart rate to adjust difficulty."
  },
  {
    text: "A key scalability issue with sensors is that they are often:",
    options: [
      "Too small to detect affective signals",
      "Only compatible with gaming systems",
      "Custom, non-portable, and expensive",
      "Used exclusively for medical purposes"
    ],
    answer: 2,
    explanation: "Many sensors are costly and not easily portable, limiting large-scale use."
  },
  {
    text: "Sensorlite approaches typically rely on:",
    options: [
      "EEG headsets only",
      "Cameras and microphones as scalable proxies",
      "Pressure-sensitive chairs",
      "Biological implants"
    ],
    answer: 1,
    explanation: "Sensorlite uses easily available devices like cameras and mics instead of complex sensors."
  },
  {
    text: "A major open issue in affect detection is:",
    options: [
      "Too much annotated data availability",
      "Perfect generalization across users and contexts",
      "Noisy and intrusive sensors that reduce scalability",
      "Complete agreement on emotion models"
    ],
    answer: 2,
    explanation: "Sensors can be noisy and intrusive, making real-world use difficult."
  },
  {
    text: "A Level 0 adaptation system is one that:",
    options: [
      "Adapts multiple tasks simultaneously",
      "Recognizes affect but does not alter behavior",
      "Communicates adaptation with other agents",
      "Does not alter its behavior at all"
    ],
    answer: 3,
    explanation: "Level 0 means no adaptation at all. It does not change behavior."
  },
  {
    text: "Level 4 adaptation involves:",
    options: [
      "Multiple independent agents communicating adaptations",
      "No adaptation to emotion",
      "A single optimized task",
      "Removing emotional monitoring entirely"
    ],
    answer: 0,
    explanation: "Level 4 is the most advanced, involving multiple agents coordinating adaptations."
  },
  {
    text: "Affect detection in real-world environments is extremely challenging and may never reach perfect accuracy.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    explanation: "Real-world variability and noise make perfect accuracy very difficult."
  },
  {
    "text": "Affective computing focuses solely on the recognition of emotions without any attempt to synthesize or simulate emotional expressions.",
    "options": ["True", "False"],
    "answer": 1,
    "explanation": "Affective computing includes both recognizing and simulating emotions. True is incorrect because it ignores the synthesis aspect."
  },
  {
    "text": "Which of the following data modalities is least likely to be used for emotion recognition?",
    "options": ["Heart Rate Variability (HRV)", "Speech intonation", "Weather patterns", "Facial expressions"],
    "answer": 2,
    "explanation": "Weather patterns are unrelated to human emotions. HRV, speech, and facial expressions are directly linked to emotional states."
  },
  {
    "text": "Thermal cameras can be effective for affect sensing because:",
    "options": [
      "They capture changes in heat patterns associated with emotional states",
      "They have high resolution for RGB-based emotion analysis",
      "They are designed for real-time object tracking",
      "They directly measure neural activity"
    ],
    "answer": 0,
    "explanation": "Thermal cameras detect heat variations caused by emotional changes. Other options are incorrect because they describe unrelated features."
  },
  {
    "text": "Analyzing multiple data streams simultaneously (e.g., combining facial expressions, voice tone, and physiological signals) improves the accuracy of emotion recognition systems.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Combining multiple modalities increases accuracy. False is incorrect because single data sources are less reliable."
  },
  {
    "text": "Wearable devices like smartwatches can assist in affect sensing by:",
    "options": [
      "Detecting changes in motion and location",
      "Tracking physiological metrics like heart rate and skin conductivity",
      "Providing augmented reality overlays",
      "Capturing high-resolution facial expressions"
    ],
    "answer": 1,
    "explanation": "Wearables track physiological signals related to emotions. Other options are not directly related to affect sensing."
  },
  {
    "text": "Which of the following sensors is commonly used for detecting physiological signals related to emotions?",
    "options": ["Gyroscope", "Galvanic Skin Response (GSR)", "Ultrasonic sensor", "Barcode reader"],
    "answer": 1,
    "explanation": "GSR measures skin conductivity linked to emotional arousal. Other sensors do not measure emotional physiology."
  },
  {
    "text": "Which of the following is an ethical concern in affective computing?",
    "options": [
      "High computational cost",
      "Misinterpretation of emotional data",
      "Limited bandwidth for sensor data transfer",
      "Lack of compatibility with legacy hardware"
    ],
    "answer": 1,
    "explanation": "Misinterpreting emotions can lead to wrong decisions and harm users. Other options are technical issues, not ethical concerns."
  },
  {
    "text": "What is the primary purpose of the MACH system?",
    "options": [
      "To analyze environmental data",
      "To provide analytics on user communication behavior",
      "To monitor physical health",
      "To replace human recruiters in interviews"
    ],
    "answer": 1,
    "explanation": "MACH analyzes communication behavior. Other options describe unrelated purposes."
  },
  {
    "text": "What ethical concern might arise with the use of systems like MACH?",
    "options": [
      "Over-reliance on hardware performance",
      "Privacy concerns regarding facial data collection",
      "Limited availability in rural areas",
      "High training cost for users"
    ],
    "answer": 1,
    "explanation": "Collecting facial data raises privacy issues. Other options are not ethical concerns."
  },
  {
    "text": "What is the primary goal of emotion-aware interfaces in user experience design?",
    "options": [
      "To create complex and visually appealing designs",
      "To ensure content aligns with the user's emotional state to avoid overwhelming them",
      "To focus solely on functional aspects of a product",
      "To prioritize system efficiency over user satisfaction"
    ],
    "answer": 1,
    "explanation": "Emotion-aware interfaces adapt to users' emotions for better experience. Other options ignore emotional adaptation."
  },
  {
    "text": "Which type of emotion is primarily recognized in the stimuli?",
    "options": ["Induced emotion", "Perceived emotion", "None of the given", "A and B"],
    "answer": 1,
    "explanation": "Perceived emotion refers to what observers identify in stimuli. Induced emotion is what the viewer personally feels, so it is different."
  },
  {
    "text": "Which model makes annotation easier for classifying emotions during data collection?",
    "options": ["Categorical Model", "Valence-Arousal-Dominance (VAD) model", "None of the given", "A and B"],
    "answer": 1,
    "explanation": "VAD provides continuous dimensions, making annotation easier and flexible. The categorical model is rigid with fixed labels."
  },
  {
    "text": "In the Circumplex Model, which emotion belongs to Low Arousal and Positive Valence?",
    "options": ["Frustrated", "Delighted", "Content", "Tired"],
    "answer": 2,
    "explanation": "Content is calm (low arousal) and pleasant (positive valence). Others either have high arousal or negative valence."
  },
  {
    "text": "Dominance allows better differentiation of emotions overlapping in the VA model.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Dominance adds a third dimension to separate similar emotions. False is incorrect because VA alone may overlap emotions."
  },
  {
    "text": "A set of facial actions is specific to a particular emotion.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Facial Action Coding System links specific muscle movements to emotions. False is incorrect because expressions are not random."
  },
  {
    "text": "Which of the following is/are a result of individual variability in emotions?",
    "options": [
      "Accumulation of emotions over time",
      "Cultural bias",
      "Cognitive appraisal",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "All factors influence how individuals experience emotions. Other options are partial, not complete."
  },
  {
    "text": "In Emotion Design, which of the following is responsible for the initial impression of a product?",
    "options": ["Behavioral", "Visceral", "Reflective", "All of the above"],
    "answer": 1,
    "explanation": "Visceral design focuses on appearance and first impression. Behavioral and reflective come later."
  },
  {
    "text": "In the context of emotion recognition models, which model categorizes emotions into discrete, distinct categories or labels?",
    "options": ["Categorical model", "VAD model", "Universal model", "Dynamic model"],
    "answer": 0,
    "explanation": "Categorical model uses fixed emotion labels like happy, sad. VAD uses dimensions instead."
  },
  {
    "text": "What is the primary distinction between perceived emotions and induced emotions?",
    "options": [
      "Perceived emotions are universal, while induced emotions are culturally influenced.",
      "Perceived emotions are consciously experienced, while induced emotions are subconscious reactions.",
      "Perceived emotions are the emotions others observe in an individual, while induced emotions are intentionally expressed.",
      "Perceived emotions are the emotions an individual believes they are experiencing, while induced emotions are emotions intentionally triggered by external stimuli."
    ],
    "answer": 3,
    "explanation": "Perceived emotion is what a person thinks they feel, while induced emotion is caused by external stimuli. Other options misinterpret definitions."
  },
  {
    "text": "Which of the following design level helps in improving the user-product interaction of a product?",
    "options": ["Visceral", "Behavioral", "Reflective", "None of the above"],
    "answer": 1,
    "explanation": "Behavioral design focuses on usability and interaction. Visceral is about looks, reflective is about meaning."
  },
  {
    "text": "What type of emotional expression is typically characterized by exaggerated and scripted feelings to simulate real emotions?",
    "options": ["Spontaneous expressions", "Acted expressions", "Authentic expressions", "Spontaneous nonverbal cues"],
    "answer": 1,
    "explanation": "Acted expressions are deliberately exaggerated and scripted. Spontaneous and authentic expressions are natural, not staged."
  },
  {
    "text": "Which experimental design involves comparing different groups of participants who are exposed to varying conditions or stimuli?",
    "options": ["Between-subject design", "Within-subject design", "Both A and B", "Correlational design"],
    "answer": 0,
    "explanation": "Between-subject design compares different groups. Within-subject uses the same participants, and correlational design does not involve controlled conditions."
  },
  {
    "text": "When conducting research on emotion recognition, why is the inclusion of naturalistic stimuli important?",
    "options": [
      "It helps maintain consistent emotional expression across participants",
      "It increases the realism and relevance of the research findings",
      "It simplifies the emotion recognition process for participants",
      "It minimizes ethical concerns in emotional manipulation"
    ],
    "answer": 1,
    "explanation": "Naturalistic stimuli reflect real-world conditions, improving realism. Other options do not directly relate to research validity."
  },
  {
    "text": "What is the purpose of presenting a neutral baseline film before showing emotional clips in a study?",
    "options": [
      "To establish a standard emotional state for all participants",
      "To assess the baseline physiological signals",
      "To make the participant feel neutral about the study",
      "To ensure that the participant understands the instructions"
    ],
    "answer": 0,
    "explanation": "A neutral baseline standardizes emotional state. Other options are secondary or unrelated purposes."
  },
  {
    "text": "What kind of data can be collected while a participant is watching an emotional video clip?",
    "options": [
      "Physiological signals such as heart rate and skin conductivity",
      "Audio-visual data through a webcam or camera",
      "Both physiological signals and audio-visual data",
      "Only self-reported emotions from the participant"
    ],
    "answer": 0,
    "explanation": "Physiological signals are primary for internal emotional response. Other options are possible but not the main focus here."
  },
  {
    "text": "What is the primary purpose of the Institutional Review Board (IRB) in human research studies?",
    "options": [
      "To ensure that research is conducted ethically and protects the welfare of human subjects",
      "To analyze the scientific validity of research proposals",
      "To recruit participants for experiments",
      "To determine the funding for human research projects"
    ],
    "answer": 0,
    "explanation": "IRB ensures ethical standards and participant safety. Other options are handled by different bodies."
  },
  {
    "text": "Which of the following is NOT one of the categories of tools used in affective computing?",
    "options": [
      "Data collection tools",
      "Signal analysis tools",
      "Affective expression tools",
      "Natural language processing tools"
    ],
    "answer": 2,
    "explanation": "Affective expression tools are not a standard tool category. Others are commonly used in affective computing."
  },
  {
    "text": "If you prefer a more customized approach to data annotation, what option do you have?",
    "options": [
      "Use prebuilt annotation tools exclusively",
      "Write your own scripts for data annotation",
      "Hire external annotators",
      "Focus only on video and audio modalities"
    ],
    "answer": 1,
    "explanation": "Custom scripts allow flexibility and control. Other options limit customization."
  },
  {
    "text": "What is the primary function of data mining tools in affective computing?",
    "options": [
      "To collect raw data",
      "To preprocess data",
      "To analyze and understand emotions in the collected data",
      "To annotate the data"
    ],
    "answer": 2,
    "explanation": "Data mining extracts patterns and insights. Other options belong to earlier processing stages."
  },
  {
    "text": "Which of the following tools is mentioned as a commonly used and simple tool for emotion expression in machines?",
    "options": [
      "WEKA",
      "ICT Virtual Human Toolkit",
      "ROS (Robotics Operating System)",
      "SAM (Self-Assessment Manikin)"
    ],
    "answer": 3,
    "explanation": "SAM is a simple tool for representing emotions. Other tools serve different purposes like ML or robotics."
  },
  {
    "text": "Which frame serves as the reference frame for facial expression recognition?",
    "options": [
      "Starting frame of the sequence",
      "Last frame of the sequence",
      "Peak expression frame",
      "Random frame"
    ],
    "answer": 2,
    "explanation": "The peak expression frame shows the maximum intensity of emotion, making it the best reference. Other frames may not capture full expression."
  },
  {
    "text": "Dynamic facial expressions share the transition duration.",
    "options": ["True", "False"],
    "answer": 1,
    "explanation": "Different expressions have different transition durations. True is incorrect because timing varies across emotions."
  },
  {
    "text": "Which of the following is not an important step in conventional FER?",
    "options": [
      "Face detection",
      "Feature extraction",
      "Background analysis",
      "Face landmark detection"
    ],
    "answer": 2,
    "explanation": "Background analysis is not required in facial expression recognition. Other steps are essential for detecting and analyzing faces."
  },
  {
    "text": "Temporal information is crucial for detecting micro-expressions.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Micro-expressions are very brief, so timing information is essential. False is incorrect because static images are insufficient."
  },
  {
    "text": "What does FACS stand for?",
    "options": [
      "Facial Attribute Coding System",
      "Facial Affect Coding System",
      "Facial Action Coding System",
      "Functional Action Coding System"
    ],
    "answer": 2,
    "explanation": "FACS stands for Facial Action Coding System, which encodes facial muscle movements. Other options are incorrect expansions."
  },
  {
    "text": "Which of the facial features require less storage?",
    "options": [
      "Both appearance and geometric",
      "Appearance only",
      "Geometric only",
      "None of the above"
    ],
    "answer": 2,
    "explanation": "Geometric features use key points and require less storage. Appearance features store pixel-level details, which are larger."
  },
  {
    "text": "Sequential information helps in expression recognition.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Sequence captures changes over time, improving recognition. False is incorrect because static data misses motion."
  },
  {
    "text": "Which of the following features do not provide motion information?",
    "options": [
      "Motion History Images (MHI)",
      "Local Binary Patterns (LBP)",
      "Histogram of Gradients (HOG)",
      "Optical Flow"
    ],
    "answer": 1,
    "explanation": "LBP captures texture, not motion. MHI, HOG, and Optical Flow include motion or gradient information."
  },
  {
    "text": "The relative position of the persons in a group has no effect on the group-level affect.",
    "options": ["True", "False"],
    "answer": 1,
    "explanation": "Group positioning influences collective emotion perception. True is incorrect because spatial relations matter."
  },
  {
    "text": "When dealing with subtle facial expressions, which of the following is not a setback?",
    "options": [
      "Self-occlusion",
      "Illumination",
      "Individual variability",
      "Pose variation"
    ],
    "answer": 1,
    "explanation": "Illumination can be adjusted and is less of a limitation compared to others. Self-occlusion, pose, and variability are major challenges."
  },
  {
    "text": "Which of the following is true about emotional speech signals?",
    "options": [
      "Emotional speech always follows predictable patterns",
      "Emotional speech can be conveyed through tone, rhythm, and loudness",
      "Emotional speech is only expressed through content words",
      "Emotional speech is always louder than neutral speech"
    ],
    "answer": 1,
    "explanation": "Emotion is conveyed through tone, rhythm, and loudness. Other options are incorrect because emotional speech is not always predictable, word-based, or louder."
  },
  {
    "text": "What is a key factor in determining the emotional tone of a speaker's voice?",
    "options": [
      "The pitch and modulation of the voice",
      "The speed of speech",
      "The presence of background music",
      "The clarity of the speaker's pronunciation"
    ],
    "answer": 0,
    "explanation": "Pitch and modulation directly reflect emotions. Other options have less influence on emotional tone."
  },
  {
    "text": "Which of the following is a commonly used feature in speech emotion recognition?",
    "options": [
      "Mel-Frequency Cepstral Coefficients (MFCCs)",
      "Linear Prediction Coefficients (LPCs)",
      "Formant frequencies",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "All listed features are widely used in speech analysis. Other options are correct individually but incomplete."
  },
  {
    "text": "What does 'prosody' refer to in speech emotion recognition?",
    "options": [
      "The phonetic structure of speech",
      "The rhythm, pitch, and intonation patterns in speech",
      "The speaker's gender and age characteristics",
      "The loudness of speech"
    ],
    "answer": 1,
    "explanation": "Prosody refers to rhythm, pitch, and intonation. Other options describe different speech aspects."
  },
  {
    "text": "Why is it important to analyze emotions in situations where people speak different languages, like in interrogations?",
    "options": [
      "To understand the emotional state of the speaker",
      "To count how many languages are being spoken",
      "To identify the speaker's name",
      "To translate all words into one language"
    ],
    "answer": 0,
    "explanation": "Emotion analysis works across languages and helps understand intent. Other options are unrelated."
  },
  {
    "text": "Which of the following prosody-based features is used to measure the energy in an input acoustic signal?",
    "options": [
      "Loudness",
      "Pitch",
      "Speech rate",
      "Formant frequency"
    ],
    "answer": 0,
    "explanation": "Loudness represents signal energy. Other features measure frequency or timing, not energy."
  },
  {
    "text": "What is the advantage of using pre-trained networks in speech analysis over hand-engineered features like MFCC?",
    "options": [
      "Pre-trained networks automatically extract features through deep learning",
      "Hand-engineered features are more accurate",
      "Pre-trained networks do not require data",
      "Hand-engineered features work better for real-time analysis"
    ],
    "answer": 0,
    "explanation": "Pre-trained networks learn features automatically. Other options are incorrect assumptions."
  },
  {
    "text": "Which is the primary reason for using spectrograms in speech-based emotion recognition?",
    "options": [
      "To visualize the frequency content of the audio signal over time",
      "To reduce the duration of the audio signal",
      "To eliminate background noise in the signal",
      "To make the signal easier to interpret in its raw form"
    ],
    "answer": 0,
    "explanation": "Spectrograms show frequency vs time, helping analyze emotions. Other options are not their main purpose."
  },
  {
    "text": "Which of the following machine learning techniques is commonly used in speech emotion analysis?",
    "options": [
      "Hidden Markov Models",
      "K-means clustering",
      "Linear regression",
      "Decision tree only"
    ],
    "answer": 0,
    "explanation": "HMMs are widely used for sequential speech data. Other methods are less suitable for temporal modeling."
  },
  {
    "text": "In the speech synthesis example, how can one distinguish between disappointment and excitement in speech?",
    "options": [
      "By listening to differences in tone and emotional expression in the speech",
      "By looking at the text being read aloud",
      "By measuring pitch only",
      "By analyzing background noise"
    ],
    "answer": 0,
    "explanation": "Tone and expression reveal emotions clearly. Other options do not fully capture emotional differences."
  },
  {
    "text": "The shape and placement of text significantly contribute to conveying emotion in design or communication.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Typography (shape and placement) affects emotional perception. False is incorrect because visual design strongly influences emotion."
  },
  {
    "text": "Emotion representation in text is:",
    "options": [
      "Always straightforward and easily detectable without considering the surrounding context",
      "Often complex and influenced by the surrounding context",
      "Primarily dependent on the use of specific emotion words",
      "A combination of linguistic features and contextual clues"
    ],
    "answer": 1,
    "explanation": "Emotion in text depends heavily on context. Other options are incomplete or oversimplified."
  },
  {
    "text": "How can cultural differences impact the interpretation of emotions in text?",
    "options": [
      "Cultural differences have no impact on emotion recognition",
      "Cultural differences can lead to misunderstandings and misinterpretations of emotions",
      "Cultural differences can enhance the understanding of emotions, as they provide diverse perspectives",
      "Cultural differences are only relevant in face-to-face communication, not in text-based communication"
    ],
    "answer": 1,
    "explanation": "Different cultures interpret emotions differently, causing misinterpretation. Other options ignore or overgeneralize the effect."
  },
  {
    "text": "What is the significance of a high objective score for a word in SentiWordNet?",
    "options": [
      "The word is highly positive",
      "The word is highly negative",
      "The word is highly neutral",
      "The word has a strong sentiment orientation"
    ],
    "answer": 2,
    "explanation": "High objectivity means the word is neutral. Other options refer to sentiment polarity, not objectivity."
  },
  {
    "text": "What is the primary objective of Bag-of-Words?",
    "options": [
      "To represent text as a numerical feature vector",
      "To understand the grammatical structure of a text",
      "To analyze the semantic relationships between words in a text",
      "To identify the topic or theme of a text"
    ],
    "answer": 0,
    "explanation": "Bag-of-Words converts text into numerical vectors. Other options involve grammar or semantics, which BoW ignores."
  },
  {
    "text": "What is an n-gram?",
    "options": [
      "A statistical method for estimating the probability of a word",
      "A technique for stemming words",
      "A type of neural network architecture",
      "A sequence of n consecutive words in a text"
    ],
    "answer": 3,
    "explanation": "An n-gram is a sequence of consecutive words. Other options describe different NLP concepts."
  },
  {
    "text": "How can part-of-speech tagging help in emotion recognition?",
    "options": [
      "It identifies the grammatical role of words in a sentence, which can provide clues about the intended emotion",
      "It extracts keywords from a text",
      "It identifies the topic of a text",
      "It analyzes the semantic meaning of words"
    ],
    "answer": 0,
    "explanation": "POS tagging shows how words function, helping infer emotion. Other options describe different NLP tasks."
  },
  {
    "text": "Which model is better suited for handling rare words or out-of-vocabulary words?",
    "options": ["Word2Vec", "FastText", "GloVe", "All are equally suited"],
    "answer": 1,
    "explanation": "FastText uses subword information, handling rare words better. Others rely on fixed vocabulary."
  },
  {
    "text": "What does the IDF component in TF-IDF represent?",
    "options": [
      "The frequency of a term within a document",
      "The total number of documents in the corpus",
      "The importance of a term relative to the entire corpus",
      "The number of times a term appears in a document multiplied by total terms"
    ],
    "answer": 2,
    "explanation": "IDF measures how important a term is across all documents. Other options describe TF or incorrect definitions."
  },
  {
    "text": "Basic statistics are computed around the labels assigned by different labelers in text-based emotion detection to arrive at a final emotional classification for a statement.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Aggregating multiple annotations improves reliability. False is incorrect because single labels may be biased."
  },
  {
    "text": "Which of the following is the primary physiological indicator measured in Electrodermal Activity (EDA)?",
    "options": [
      "The electrical resistance of the skin",
      "The amount of sweat produced by the skin",
      "Heart rate variability",
      "Brain wave activity"
    ],
    "answer": 0,
    "explanation": "EDA measures skin conductance/resistance changes due to sweat gland activity. Other options relate to different physiological signals."
  },
  {
    "text": "Heart rate variability is often reduced in individuals experiencing high stress.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "High stress reduces HRV due to autonomic imbalance. False is incorrect because stress typically lowers variability."
  },
  {
    "text": "Which of the following is NOT a typical physiological marker for detecting emotions in the autonomic nervous system?",
    "options": [
      "Heart rate",
      "Respiratory rate",
      "Oxygen saturation",
      "Skin temperature"
    ],
    "answer": 2,
    "explanation": "Oxygen saturation is not commonly used for emotion detection. Other options are standard autonomic markers."
  },
  {
    "text": "The Theta frequency band in EEG is commonly associated with deep relaxation and meditation states.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Theta waves are linked to relaxation and meditation. False is incorrect because this is well-established."
  },
  {
    "text": "Which of the following emotions has been found to be correlated with heart rate?",
    "options": ["Happiness", "Anger", "Sadness", "Surprise"],
    "answer": 1,
    "explanation": "Anger is strongly associated with increased heart rate. Other emotions may vary but are less consistently linked."
  },
  {
    "text": "Why does heart rate increase during stressful situations, such as giving a presentation?",
    "options": [
      "The brain signals the heart to pump more blood due to perceived stress or importance",
      "The heart automatically adjusts to any increase in oxygen levels",
      "The brain reduces the heart rate to conserve energy",
      "The brain disconnects from the heart during stressful events"
    ],
    "answer": 0,
    "explanation": "Stress activates the sympathetic nervous system, increasing heart rate. Other options are incorrect explanations."
  },
  {
    "text": "Which of the following is a more accurate method for measuring heart rate?",
    "options": [
      "Photoplethysmography (PPG)",
      "Electrocardiogram (ECG)",
      "Both are equally accurate",
      "Neither"
    ],
    "answer": 1,
    "explanation": "ECG directly measures electrical activity of the heart, making it more accurate. PPG is indirect."
  },
  {
    "text": "How does posture affect heart rate during measurement?",
    "options": [
      "It does not affect heart rate",
      "An uncomfortable posture may cause an increase in heart rate due to extra effort needed for stabilization",
      "An uncomfortable posture decreases heart rate",
      "Posture has only a minor effect on heart rate"
    ],
    "answer": 1,
    "explanation": "Uncomfortable posture increases physical effort, raising heart rate. Other options ignore this effect."
  },
  {
    "text": "What aspect of emotional state can heart rate measurements accurately estimate?",
    "options": ["Valence", "Arousal", "Both valence and arousal", "Neither"],
    "answer": 1,
    "explanation": "Heart rate reflects arousal (intensity of emotion), not valence. Other options are incorrect."
  },
  {
    "text": "Heart rate measurements can distinguish whether the arousal is caused by positive or negative emotion.",
    "options": ["True", "False"],
    "answer": 1,
    "explanation": "Heart rate shows arousal but cannot determine if emotion is positive or negative. True is incorrect."
  },
  {
    "text": "Which of the following emotional states is typically associated with increased skin conductance?",
    "options": ["Boredom", "Relaxation", "Stress", "Happiness"],
    "answer": 2,
    "explanation": "Stress increases skin conductance due to higher sweat gland activity. Boredom and relaxation lower arousal, while happiness is less consistently linked."
  },
  {
    "text": "What is a common technique used to measure skin conductance?",
    "options": [
      "Electromyography (EMG)",
      "Electroencephalography (EEG)",
      "Functional Magnetic Resonance Imaging (fMRI)",
      "Galvanic Skin Response (GSR)"
    ],
    "answer": 3,
    "explanation": "GSR directly measures skin conductance. Other techniques measure muscles, brain waves, or brain imaging."
  },
  {
    "text": "How can SCL and SCR be used to assess emotional arousal?",
    "options": [
      "Increased SCL and SCR indicate higher arousal",
      "Decreased SCL and SCR indicate higher arousal",
      "Increased SCL but decreased SCR indicate higher arousal",
      "Decreased SCL but increased SCR indicate higher arousal"
    ],
    "answer": 0,
    "explanation": "Higher arousal leads to increases in both SCL and SCR. Other options contradict physiological behavior."
  },
  {
    "text": "What is the primary advantage of using the 10-20 system?",
    "options": [
      "It allows for easy comparison of EEG data across different studies",
      "It reduces the number of electrodes needed",
      "It increases spatial resolution",
      "It eliminates the need for anatomical measurements"
    ],
    "answer": 0,
    "explanation": "The 10-20 system standardizes electrode placement, enabling comparison. Other options are incorrect benefits."
  },
  {
    "text": "Which frequency band is associated with deep sleep?",
    "options": ["Alpha", "Beta", "Delta", "Theta"],
    "answer": 2,
    "explanation": "Delta waves are dominant during deep sleep. Other bands correspond to wakefulness or light sleep."
  },
  {
    "text": "In a multimodal setting, each modality is expected to provide similar information.",
    "options": ["True", "False"],
    "answer": 1,
    "explanation": "Different modalities provide complementary, not identical, information. True is incorrect."
  },
  {
    "text": "What is a major challenge in early feature fusion of multimodal data?",
    "options": [
      "Data alignment and synchronization issues",
      "Increased computational complexity",
      "Selection of appropriate feature extraction techniques",
      "Lack of standardized evaluation metrics"
    ],
    "answer": 0,
    "explanation": "Early fusion requires proper alignment of data streams. Other options are general challenges but not the main one."
  },
  {
    "text": "Which fusion level is most suitable for modalities with different temporal resolutions?",
    "options": [
      "Early fusion",
      "Intermediate fusion",
      "Late fusion",
      "All have the same effect"
    ],
    "answer": 2,
    "explanation": "Late fusion handles different time scales independently. Early fusion requires synchronized data."
  },
  {
    "text": "Which type of features does feature selection aim to eliminate?",
    "options": [
      "Descriptive features",
      "Relevant features",
      "Redundant features",
      "Interactive features"
    ],
    "answer": 2,
    "explanation": "Feature selection removes redundant or irrelevant features. Other options are useful features."
  },
  {
    "text": "Slow fusion eliminates the synchronization requirement while taking advantage of correlations between modalities.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Slow fusion processes modalities separately while capturing relationships. False is incorrect."
  },
  {
    "text": "What is the core concept of empathy?",
    "options": [
      "Recognizing and understanding the emotional states of others",
      "Feeling pity for others in distress",
      "Ignoring others' emotional states",
      "Controlling others' emotions"
    ],
    "answer": 0,
    "explanation": "Empathy involves understanding others' emotions. Pity is different, and ignoring or controlling emotions is incorrect."
  },
  {
    "text": "The Uncanny Valley effect is most often observed when:",
    "options": [
      "A robot has human-like features but lacks certain human behaviors",
      "A robot mimics human emotions accurately",
      "A robot appears completely non-human",
      "A robot displays behaviors that are distinctly mechanical"
    ],
    "answer": 0,
    "explanation": "Uncanny Valley occurs when something looks human but behaves unnaturally. Other options do not create this effect."
  },
  {
    "text": "Can empathy in robots and virtual agents be genuine?",
    "options": [
      "Yes, as long as the agent can process and respond to emotional signals",
      "No, empathy in agents is always simulated and not truly felt",
      "Yes, but only when humans are aware it is an agent",
      "No, empathy in robots is irrelevant for effective interaction"
    ],
    "answer": 1,
    "explanation": "Robots simulate empathy but do not truly feel emotions. Other options incorrectly assume genuine emotional experience."
  },
  {
    "text": "What is the key focus of perspective-taking in the context of empathy?",
    "options": [
      "Understanding emotional state from physiological cues",
      "Analyzing how the response will make the individual feel from their point of view",
      "Modifying the emotional state of an individual",
      "Ignoring the user's feelings"
    ],
    "answer": 1,
    "explanation": "Perspective-taking means viewing the situation from another person's viewpoint. Other options do not reflect this."
  },
  {
    "text": "What is the primary goal of empathy analysis in artificial empathy?",
    "options": [
      "To predict emotions without context",
      "To understand the emotional state of the user and evaluate whether the interaction is empathetic",
      "To generate responses only from physiological cues",
      "To analyze only physiological cues"
    ],
    "answer": 1,
    "explanation": "Empathy analysis considers both emotion and context. Other options ignore context or limit analysis."
  },
  {
    "text": "The appearance of an embodied agent should be designed to match the specific characteristics of the target user to enhance empathy.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Matching user characteristics improves relatability and empathy. False is incorrect."
  },
  {
    "text": "Which of the following best describes the role of lexical cues in empathy analysis?",
    "options": [
      "Physiological data",
      "Text-based data used to analyze empathetic quality of interactions",
      "Used only for emotion, not empathy",
      "Visual and audio cues"
    ],
    "answer": 1,
    "explanation": "Lexical cues are words/text used to analyze empathy. Other options confuse them with different data types."
  },
  {
    "text": "What is one of the mediating factors that can affect the empathetic response of an observer?",
    "options": [
      "The agent's physical location",
      "The mood of the observer",
      "The agent's programming language",
      "The time of day"
    ],
    "answer": 1,
    "explanation": "Observer's mood strongly influences empathy. Other options have little direct effect."
  },
  {
    "text": "What was the result of providing empathetic feedback in the virtual interview scenario?",
    "options": [
      "It increased stress",
      "It had no effect",
      "It reduced stress",
      "It caused abandonment"
    ],
    "answer": 2,
    "explanation": "Empathetic feedback helps reduce stress. Other options contradict observed outcomes."
  },
  {
    "text": "The emotional state of the user is irrelevant when designing an embodied agent for a specific task.",
    "options": ["True", "False"],
    "answer": 1,
    "explanation": "User emotion is important for effective interaction design. True is incorrect."
  },
  {
    "text": "Learners' experiences with affective learning technologies involve both emotional responses and learning outcomes.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Affective learning considers both emotions and performance. False is incorrect because learning is influenced by emotions."
  },
  {
    "text": "How does GazeTutor use eye-tracking data to improve learning?",
    "options": [
      "By identifying when students are struggling with a concept",
      "By predicting students' future performance",
      "By adapting the difficulty level of the tutoring content",
      "By providing real-time feedback on attention and engagement"
    ],
    "answer": 0,
    "explanation": "Eye-tracking helps detect confusion or struggle. Other options are indirect or not the primary function."
  },
  {
    "text": "A machine that can anticipate future needs and adjust its behavior accordingly is at which level of adaptation?",
    "options": ["Level 0", "Level 1", "Level 2", "Level 3"],
    "answer": 3,
    "explanation": "Level 3 represents predictive and adaptive behavior. Lower levels involve limited or no adaptation."
  },
  {
    "text": "Camera can be used to monitor the heart rate of the user.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Cameras can estimate heart rate using remote photoplethysmography. False is incorrect."
  },
  {
    "text": "What is empathy in the context of affective computing?",
    "options": [
      "The ability of a machine to understand and respond to human emotions",
      "The ability of a machine to perform tasks independently",
      "The ability of a machine to learn from experience",
      "The ability of a machine to process large data"
    ],
    "answer": 0,
    "explanation": "Empathy in AI refers to understanding and responding to emotions. Other options describe general AI abilities."
  },
  {
    "text": "Tendency to provide human characteristics to non-lifelike artifacts is called:",
    "options": [
      "Polymorphism",
      "Anthropomorphism",
      "Skeuomorphism",
      "Neumorphism"
    ],
    "answer": 1,
    "explanation": "Anthropomorphism means assigning human traits to objects. Other terms refer to design or programming concepts."
  },
  {
    "text": "Parallel empathy is characterized by:",
    "options": [
      "A strong emotional response to another person's feelings",
      "A detached and objective perspective",
      "The ability to understand and share feelings without being overwhelmed",
      "A tendency to avoid emotional situations"
    ],
    "answer": 2,
    "explanation": "Parallel empathy balances understanding and control. Other options describe different emotional responses."
  },
  {
    "text": "User feedback ratings can be a metric for evaluating affective agents.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "User feedback reflects effectiveness and experience. False is incorrect."
  },
  {
    "text": "Which of the following strategies can help to reduce negative affective states in learners?",
    "options": [
      "Increasing task difficulty",
      "Providing immediate feedback",
      "Creating a competitive environment",
      "Ignoring learner emotions"
    ],
    "answer": 1,
    "explanation": "Immediate feedback helps reduce frustration. Other options may increase stress or ignore emotions."
  },
  {
    "text": "Cognitive empathy involves perceiving the emotions of the target in a logical manner.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Cognitive empathy focuses on logical understanding of emotions. False is incorrect."
  },
  {
    "text": "A virtual assistant takes input in the form of text messages only.",
    "options": ["True", "False"],
    "answer": 1,
    "explanation": "Virtual assistants can take voice, text, and other inputs. True is incorrect because input is not limited to text."
  },
  {
    "text": "Which of the following is NOT a part of the process for creating a virtual assistant as described in the lecture?",
    "options": [
      "Wake word detection",
      "Automatic Speech Recognition (ASR)",
      "Emotion detection in speech",
      "Data encryption for privacy"
    ],
    "answer": 2,
    "explanation": "Emotion detection is not a core step in basic virtual assistant creation. Other options are essential components."
  },
  {
    "text": "It is acceptable to anthropomorphize emotional virtual agents as long as they provide useful emotional support to users.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Anthropomorphism is acceptable if it benefits users. False is incorrect."
  },
  {
    "text": "An emotionally intelligent virtual assistant can help improve communication and reduce stress in the workplace by recognizing emotional cues from employees.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Recognizing emotions helps improve communication and reduce stress. False is incorrect."
  },
  {
    "text": "In which domain can an emotionally intelligent virtual assistant help provide real-time emotional support and coping strategies?",
    "options": [
      "Healthcare",
      "Customer service",
      "Mental health and therapy",
      "Entertainment"
    ],
    "answer": 2,
    "explanation": "Mental health applications focus on emotional support. Other domains may use it but not primarily for coping strategies."
  },
  {
    "text": "What is the main goal of using an emotionally intelligent virtual assistant in education?",
    "options": [
      "To replace teachers",
      "To monitor students' grades",
      "To identify when students need additional support and provide targeted feedback",
      "To conduct exams"
    ],
    "answer": 2,
    "explanation": "The goal is personalized support and feedback. Other options are not the main purpose."
  },
  {
    "text": "The first step in the process of building an emotionally intelligent virtual assistant is to identify the language spoken by the user.",
    "options": ["True", "False"],
    "answer": 1,
    "explanation": "The first step is not language identification; it involves system setup and input detection. True is incorrect."
  },
  {
    "text": "What is the role of 'context' in an emotionally intelligent virtual assistant?",
    "options": [
      "To recognize emotion at all times",
      "To understand the user's preferences and history for personalized responses",
      "To determine intent regardless of emotion",
      "To simply follow instructions without emotion"
    ],
    "answer": 1,
    "explanation": "Context helps personalize responses using history and preferences. Other options ignore personalization."
  },
  {
    "text": "What is the primary ethical concern related to privacy when developing emotionally intelligent virtual agents?",
    "options": [
      "The agent may not collect enough data",
      "The agent may collect personal data without user consent",
      "The agent may not process data accurately",
      "The agent may share data only with medical professionals"
    ],
    "answer": 1,
    "explanation": "Unauthorized data collection is a major ethical issue. Other options are not core privacy concerns."
  },
  {
    "text": "How can emotional virtual agents help avoid bias in their responses to users?",
    "options": [
      "Using data from only one ethnic group",
      "Ensuring training data is diverse and representative",
      "Focusing on one language group",
      "Ignoring cultural differences"
    ],
    "answer": 1,
    "explanation": "Diverse data reduces bias. Other options increase bias or ignore diversity."
  },
  {
    "text": "Privacy concerns in affective computing arise from:",
    "options": [
      "The collection and analysis of personal data",
      "The potential for misuse of emotional information",
      "The lack of transparency in AI decision-making",
      "None of the above"
    ],
    "answer": 0,
    "explanation": "Privacy concerns mainly arise from collecting and analyzing personal data. Other options are related issues but not the primary source."
  },
  {
    "text": "Which of the following is not a potential ethical consideration that needs to be addressed?",
    "options": [
      "Emotional manipulation",
      "Privacy",
      "Emotional dependency",
      "System accuracy"
    ],
    "answer": 3,
    "explanation": "System accuracy is a technical concern, not an ethical one. Other options are key ethical issues."
  },
  {
    "text": "Which of the following has a high level of privacy intrusion?",
    "options": ["Audio jack", "WiFi", "Camera", "Bluetooth"],
    "answer": 2,
    "explanation": "Cameras capture visual personal data, making them highly intrusive. Others collect less sensitive data."
  },
  {
    "text": "All mobile sensors capture the least amount of sensitive data.",
    "options": ["True", "False"],
    "answer": 1,
    "explanation": "Some sensors (like cameras and microphones) capture highly sensitive data. True is incorrect."
  },
  {
    "text": "Which of the following sensing strategies is written wrongly in ascending order of privacy invasiveness?",
    "options": [
      "Microphone > WiFi > Accelerometer",
      "GPS > Bluetooth > Screen Touch",
      "WiFi > Gyroscope > Calls",
      "Calls > Apps > Gyroscope"
    ],
    "answer": 3,
    "explanation": "The order is incorrect because calls are more intrusive than apps and gyroscope. Other sequences are more reasonable."
  },
  {
    "text": "What is the primary goal of anticipatory mobile computing?",
    "options": [
      "To predict user needs and proactively provide services",
      "To optimize battery life",
      "To enhance device security",
      "To increase processing power"
    ],
    "answer": 0,
    "explanation": "Anticipatory computing predicts user behavior and needs. Other options are secondary system goals."
  },
  {
    "text": "From an ethics perspective, what is a significant concern regarding affect-sensing apps in relation to emotional dependency?",
    "options": [
      "User engagement",
      "Privacy intrusion",
      "Emotional manipulation",
      "User addiction"
    ],
    "answer": 2,
    "explanation": "Apps may manipulate emotions, creating dependency. Other options are related but not the main ethical concern here."
  },
  {
    "text": "What is a potential ethical concern related to facial expression recognition?",
    "options": [
      "Privacy violations",
      "Bias in recognition systems",
      "Misinterpretation of emotions",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "All listed issues are valid ethical concerns. Other options are incomplete individually."
  },
  {
    "text": "It is possible to completely anonymize a user's personal information using algorithms.",
    "options": ["True", "False"],
    "answer": 1,
    "explanation": "Complete anonymization is very difficult due to re-identification risks. True is incorrect."
  },
  {
    "text": "Who should be involved in shaping the ethical guidelines for affect-aware machines?",
    "options": [
      "Engineers only",
      "Ethicists only",
      "Users only",
      "A combination of engineers, ethicists, users, and stakeholders"
    ],
    "answer": 3,
    "explanation": "Ethical design requires input from multiple stakeholders. Other options are too limited."
  }
];


let shuffledQuestions = [];  // Holds 100 questions for current attempt
let userResponses = [];      // null = not answered, else option index chosen
let userStatus = [];         // "not-visited", "not-answered", "answered", "review"
let currentIdx = 0;
let practiceTimer = null, secondsLeft = 3600;
let selectedYears = [2025, 2026];  // Track selected years for filtering
let testStarted = false;

// --- YEAR ASSIGNMENT AND FILTERING ---
function assignYearsToQuestions() {
  PRACTICE_QUESTIONS.forEach((q, index) => {
    if (index < 119) {
      q.year = 2025;
    } else {
      q.year = 2026;
    }
  });
}

// Filter questions based on selected years
function getFilteredQuestions(years) {
  return PRACTICE_QUESTIONS.filter(q => years.includes(q.year));
}

// Update question count display
function updateQuestionCountDisplay() {
  const filtered = getFilteredQuestions(selectedYears);
  const countSpan = document.getElementById('total-questions');
  if (countSpan) {
    countSpan.textContent = filtered.length;
  }
}

// Initialize year selector
function initYearSelector() {
  const checkbox2025 = document.getElementById('year-2025');
  const checkbox2026 = document.getElementById('year-2026');
  const applyBtn = document.getElementById('year-apply-btn');
  
  if (checkbox2025) {
    checkbox2025.addEventListener('change', () => {
      selectedYears = [];
      if (checkbox2025.checked) selectedYears.push(2025);
      if (checkbox2026.checked) selectedYears.push(2026);
      
      // Ensure at least one year is selected
      if (selectedYears.length === 0) {
        checkbox2025.checked = true;
        selectedYears.push(2025);
      }
      updateQuestionCountDisplay();
    });
  }
  
  if (checkbox2026) {
    checkbox2026.addEventListener('change', () => {
      selectedYears = [];
      if (checkbox2025.checked) selectedYears.push(2025);
      if (checkbox2026.checked) selectedYears.push(2026);
      
      // Ensure at least one year is selected
      if (selectedYears.length === 0) {
        checkbox2026.checked = true;
        selectedYears.push(2026);
      }
      updateQuestionCountDisplay();
    });
  }
  
  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      hideYearSelector();
      testStarted = true;
      startPractice();
    });
  }
  
  updateQuestionCountDisplay();
}

// Show year selector
function showYearSelector() {
  const modal = document.getElementById('year-selector-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

// Hide year selector
function hideYearSelector() {
  const modal = document.getElementById('year-selector-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

// Fisher-Yates shuffle to randomly shuffle array in place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Initialize practice session
function startPractice() {
  // Get filtered questions based on selected years
  const filteredQuestions = getFilteredQuestions(selectedYears);
  
  // Make a copy of filtered questions
  const allQuestionsCopy = filteredQuestions.slice();

  // Shuffle entire question pool
  shuffleArray(allQuestionsCopy);

  // Select first 100 questions (or all if less than 100)
  const practiceSet = allQuestionsCopy.slice(0, Math.min(100, allQuestionsCopy.length));

  // For each question, shuffle its options and update answer index accordingly
  shuffledQuestions = practiceSet.map(q => {
    const optIdx = q.options.map((_, idx) => idx);
    shuffleArray(optIdx);
    const newOpts = optIdx.map(idx => q.options[idx]);
    return {
      text: q.text,
      options: newOpts,
      answer: optIdx.indexOf(q.answer),
      explanation: q.explanation,
      year: q.year
    };
  });

  userResponses = Array(shuffledQuestions.length).fill(null);
  userStatus = Array(shuffledQuestions.length).fill("not-visited");
  currentIdx = 0;
  secondsLeft = 3600;
  renderPractice();
  startTimer();
}

function startTimer() {
  updateTimer();
  if (practiceTimer) clearInterval(practiceTimer);
  practiceTimer = setInterval(() => {
    secondsLeft--;
    updateTimer();
    if (secondsLeft <= 0) {
      clearInterval(practiceTimer);
      submitPractice();
    }
  }, 1000);
}

function updateTimer() {
  const h = Math.floor(secondsLeft / 3600);
  const m = Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft % 60;
  document.getElementById('timer').textContent =
    `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}
// --- RENDER PRACTICE INTERFACE ---
function renderPractice() {
  renderQuestion(currentIdx);
  renderNav();
  renderGrid();
}
function renderQuestion(qi) {
  const q = shuffledQuestions[qi];
  let html = `<div style="font-weight:700;">Question ${qi + 1}:</div><div style="margin:12px 0 18px 0;">${q.text}</div><div class="options">`;
  q.options.forEach((opt, oi) => {
    html += `
    <label>
      <input type="radio" name="practice_option" value="${oi}" ${userResponses[qi] === oi ? "checked" : ""}>
      ${String.fromCharCode(97 + oi)}) ${opt}
    </label>`;
  });
  html += "</div>";
  document.getElementById('question-block').innerHTML = html;

  // prevent scrolling for mobile on submit
  document.querySelectorAll("input[name='practice_option']").forEach(input => {
    input.onchange = () => {
      userResponses[qi] = parseInt(input.value);
      userStatus[qi] = "answered";
      renderNav(); renderGrid();
    };
  });
}
function renderNav() {
  let navHTML = '';

  // Show BACK button only if not on first question
  if (currentIdx > 0) {
    navHTML += `<button onclick="backQuestion()">&#60; BACK</button>`;
  }

  navHTML += `
    <button onclick="nextQuestion()">NEXT &#62;</button>
    <button onclick="saveAndNext()">SAVE & NEXT</button>
    <button onclick="markForReview()">MARK FOR REVIEW</button>
    <button onclick="clearResponse()">CLEAR RESPONSE</button>
  `;
  document.getElementById('practice-nav').innerHTML = navHTML;
}

function renderGrid() {
  let gridHTML = "";
  for (let i = 0; i < shuffledQuestions.length; i++) {
    let status = userStatus[i];
    let btnClass = "grid-btn";
    if (currentIdx === i) btnClass += " active";
    if (status === "not-visited") btnClass += " not-visited";
    else if (status === "not-answered") btnClass += " not-answered";
    else if (status === "answered") btnClass += " answered";
    else if (status === "review") btnClass += " review";
    gridHTML += `<button class="${btnClass}" onclick="jumpToQuestion(${i})">${i + 1}</button>`;
  }
  document.getElementById('question-grid').innerHTML = gridHTML;
}

window.backQuestion = function () {
  if (currentIdx > 0) {
    currentIdx--;
    userStatus[currentIdx] = userResponses[currentIdx] === null ? "not-answered" : "answered";
    renderPractice();
  }
};
window.nextQuestion = function () {
  if (currentIdx < shuffledQuestions.length - 1) {
    currentIdx++;
  } else {
    currentIdx = 0;
  }
  userStatus[currentIdx] = userResponses[currentIdx] === null ? "not-answered" : "answered";
  renderPractice();
};

window.saveAndNext = function () {
  userStatus[currentIdx] = userResponses[currentIdx] !== null ? "answered" : "not-answered";
  nextQuestion();
};
window.markForReview = function () {
  userStatus[currentIdx] = "review";
  nextQuestion();
};
window.clearResponse = function () {
  userResponses[currentIdx] = null;
  userStatus[currentIdx] = "not-answered";
  renderPractice();
};
window.jumpToQuestion = function (qi) {
  currentIdx = qi;
  userStatus[currentIdx] = userResponses[currentIdx] === null ? "not-answered" : "answered";
  renderPractice();
};

// --- SUBMIT/PRACTICE SCORING ---
document.getElementById("submit-practice").onclick = function () {
  if (confirm("Submit practice test? You can't change answers after this!")) {
    clearInterval(practiceTimer);
    submitPractice();
  }
};

function submitPractice() {
  let score = 0;
  let html = `<div class="score">Practice Results for <strong>albert</strong>:</div>`;
  let incorrectCount = 0;

  // Filter for questions user answered incorrectly
  shuffledQuestions.forEach((q, qi) => {
    const isCorrect = userResponses[qi] === q.answer;
    if (isCorrect) score++;
  });

  html += `<div class="score">Your Score: <strong>${score} / ${shuffledQuestions.length}</strong></div>`;

  // Show only incorrectly answered questions with full details
  shuffledQuestions.forEach((q, qi) => {
    const isCorrect = userResponses[qi] === q.answer;
    if (!isCorrect) {
      incorrectCount++;
      let optionsHtml = '<ul style="list-style:none; padding-left:0;">';
      q.options.forEach((opt, idx) => {
        let optionLetter = String.fromCharCode(97 + idx);
        let style = '';
        if (idx === q.answer) {
          style = 'color: green; font-weight: 600;';   // correct answer green bold
        }
        if (idx === userResponses[qi] && idx !== q.answer) {
          style = 'color: red; font-weight: 600;';     // user's wrong choice red bold
        }
        optionsHtml += `<li style="${style}">${optionLetter}) ${opt}</li>`;
      });
      optionsHtml += '</ul>';

      html += `
        <div>
          <b>Q${qi + 1}:</b> ${q.text}<br>
          <span class="incorrect">Incorrect</span><br>
          ${optionsHtml}
          <b>Your answer:</b> ${userResponses[qi] !== null ? String.fromCharCode(97 + userResponses[qi]) + ') ' + q.options[userResponses[qi]] : 'No answer'}<br>
          <b>Correct answer:</b> ${String.fromCharCode(97 + q.answer)}) ${q.options[q.answer]}<br>
          <div class="explanation">${q.explanation}</div>
        </div>
        <hr>
      `;
    }
  });

  if (incorrectCount === 0) {
    html += "<div>All answers were correct! Well done!</div>";
  }

  document.getElementById('practice-result').innerHTML = html;
  document.getElementById('question-block').innerHTML = '';
  document.getElementById('practice-nav').innerHTML = '';
  document.getElementById('question-grid').innerHTML = '';
  document.getElementById('submit-practice').disabled = true;

  showScorePopup(score);
}

const toggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('practiceTheme');

if (savedTheme) {
  document.body.classList.add(savedTheme);
}

toggleBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('practiceTheme', '');
  } else {
    document.body.classList.add('dark-mode');
    localStorage.setItem('practiceTheme', 'dark-mode');
  }
});


// --- Score popup function ---
function showScorePopup(score) {
  const popup = document.createElement('div');
  popup.classList.add('score-popup');

  if (score === 100) {
    popup.textContent = "🎉 Excellent! Perfect Score: 100/100";
    popup.style.background = "#28a745";  // green
  } else if (score >= 95) {
    popup.textContent = `👏 Great Job! Score: ${score}/100`;
    popup.style.background = "#007bff";  // blue
  } else {
    popup.textContent = `💪 Keep Practicing! Score: ${score}/100`;
    popup.style.background = "#f39c12";  // orange
  }

  popup.style.cssText += `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 12px 20px;
    border-radius: 8px;
    z-index: 9999;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    opacity: 0;
    transition: opacity 0.4s ease;
  `;

  document.body.appendChild(popup);

  // Fade in
  setTimeout(() => popup.style.opacity = 1, 100);

  // Fade out and remove after 4 seconds
  setTimeout(() => {
    popup.style.opacity = 0;
    setTimeout(() => popup.remove(), 400);
  }, 4000);
}

// --- Initialize year selector on page load ---
window.addEventListener('DOMContentLoaded', () => {
  assignYearsToQuestions();
  initYearSelector();
  showYearSelector();
});