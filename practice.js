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
        answer: 3,
        explanation: "These systems can influence users’ emotions, raising concerns about manipulation. Other options are secondary."
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
    }
];


let shuffledQuestions = [];  // Holds 100 questions for current attempt
let userResponses = [];      // null = not answered, else option index chosen
let userStatus = [];         // "not-visited", "not-answered", "answered", "review"
let currentIdx = 0;
let practiceTimer = null, secondsLeft = 3600;

// Fisher-Yates shuffle to randomly shuffle array in place
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize practice session
function startPractice() {
    // Make a copy of all questions
    const allQuestionsCopy = PRACTICE_QUESTIONS.slice();

    // Shuffle entire question pool
    shuffleArray(allQuestionsCopy);

    // Select first 50 unique questions (no repeats guaranteed by slicing after shuffle)
    const practiceSet = allQuestionsCopy.slice(0, 100);

    // For each question, shuffle its options and update answer index accordingly
    shuffledQuestions = practiceSet.map(q => {
        const optIdx = q.options.map((_, idx) => idx);
        shuffleArray(optIdx);
        const newOpts = optIdx.map(idx => q.options[idx]);
        return {
            text: q.text,
            options: newOpts,
            answer: optIdx.indexOf(q.answer),
            explanation: q.explanation
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
  if(document.body.classList.contains('dark-mode')) {
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

// --- Start practice on page load ---
window.onload = startPractice;