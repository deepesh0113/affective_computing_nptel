const years = [
    {
        name: "2025",
        assignments: [
            {
                name: "Assignment 1",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 2",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 3",
                
            },
            {
                name: "Assignment 4",
                
            },
            {
                name: "Assignment 5",
                
            },
            {
                name: "Assignment 6",
                
            },
            {
                name: "Assignment 7",
                
            },
            {
                name: "Assignment 8",
                
            },
            {
                name: "Assignment 9",
                
            },
            {
                name: "Assignment 10",
                
            },
            {
                name: "Assignment 11",
                
            },
            {
                name: "Assignment 12",
                
            },
        ]
    },
    {
        name: "2026",
        assignments: [
            {
                name: "Assignment 1",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 2",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 3",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 4",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 5",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 6",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 7",
                questions: [
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
                        text: "GSR can reveal whether the emotional state is positive or negative.",
                        options: [
                            "True",
                            "False"
                        ],
                        answer: 1,
                        explanation: "GSR shows arousal level only, not whether emotion is positive or negative."
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
                    }
                ]
            },
            {
                name: "Assignment 8",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 9",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 10",
                questions: [
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
                ]
            },
            {
                name: "Assignment 11",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 12",
                questions: [
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
                    }
                ]
            },
            // Add assignments for "Second Year" (if any)
        ]
    }
    // More years can be added, following this structure
];

const assignmentMaterials = {
    0: ["https://drive.google.com/file/d/1AH00NXETvNKsaycAOHNCIJKaszK6mbZ1/view"],
    1: [
        "https://drive.google.com/file/d/1y30crMrs0RQ9ZHr0F2GcKO3SDRwCqdYX/view",
        "https://drive.google.com/file/d/1o0R5_petj0Yxm2yjR3A17VG17YoKWH_7/view"
    ],
    2: ["https://drive.google.com/file/d/121407_4Ugi04JbR_buqUZmSmFmJG4SPv/view"],
    3: ["https://drive.google.com/file/d/1xPiQb6F5mPysJKd1mD_UGz_1axuat3mg/view"],
    4: ["https://drive.google.com/file/d/1fYXJIvnVdpUpTUJ9g1P8zZQ1GIh7Ccwn/view"],
    5: ["https://drive.google.com/file/d/1-S1D0OdNFs6RWUEaTHTIqHYkTBAjY9zh/view"],
    6: ["https://drive.google.com/file/d/1AD7roRnoh8rLljM8-RbowSFb6KuzzQrM/view"],
    7: ["https://drive.google.com/file/d/1UECFyicuzFW2gNAJM2lIqI6_VcPMOdWm/view"],
    8: ["https://drive.google.com/file/d/1p2zqYTajkYzeaXDT78CHnvdT_z0xw1wr/view"],
    9: ["https://drive.google.com/file/d/1r7-MqJlcj9kUDUjI9ERrSrKp343fNF9z/view"],
    10: ["https://drive.google.com/drive/folders/1v_AfX73pTKF70Zx4r4MCPceaDFvzjsWp"]
};

const transcriptLink = "https://drive.google.com/file/d/1OmO2qEV0oC8E0sTIgDF34Lqaxsi2jVz7/view";

// --- Helper Shuffle Function ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- Populate year dropdown ---
const yearSelect = document.getElementById('year');
years.forEach((yearObj, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = yearObj.name;
    yearSelect.appendChild(opt);
});

yearSelect.onchange = () => {
    if (yearSelect.value === "") {
        document.getElementById('assignment-select').style.display = 'none';
        return;
    }
    const yearIdx = parseInt(yearSelect.value);
    const assignmentSelectDiv = document.getElementById('assignment-select');
    const assignmentSelect = document.getElementById('assignment');
    assignmentSelectDiv.style.display = 'block';
    assignmentSelect.innerHTML = '<option value="">-- Select Assignment --</option>';
    years[yearIdx].assignments.forEach((a, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = a.name;
        assignmentSelect.appendChild(opt);
    });
    const transcriptOpt = document.createElement('option');
    transcriptOpt.value = 'transcript';
    transcriptOpt.textContent = 'Download transcript';
    assignmentSelect.appendChild(transcriptOpt);
    document.getElementById('quiz').innerHTML = '';
    document.getElementById('result').innerHTML = '';
};

document.getElementById('load-assignment').onclick = () => {
    const yearIdx = parseInt(yearSelect.value);
    const assignVal = document.getElementById('assignment').value;
    if (assignVal === "") return;
    if (assignVal === 'transcript') {
        loadTranscript();
        return;
    }
    const assignIdx = parseInt(assignVal);
    loadAssignmentJumbled(yearIdx, assignIdx);
};

function loadTranscript() {
    const quizDiv = document.getElementById('quiz');
    const resultDiv = document.getElementById('result');
    quizDiv.innerHTML = `<div class="download-link" style="margin: 1rem 0;"><a href="${transcriptLink}" target="_blank" rel="noopener">Download transcript</a></div>`;
    resultDiv.innerHTML = '';
}

const toggle = document.getElementById('theme-toggle');

// Load saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.add('light-mode');
}

toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);

    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


function loadAssignmentJumbled(yearIdx, assignIdx) {
    const quizDiv = document.getElementById('quiz');
    const resultDiv = document.getElementById('result');
    quizDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    // Deep copy assignment object to avoid modifying original
    const assignment = JSON.parse(JSON.stringify(years[yearIdx].assignments[assignIdx]));

    // Shuffle questions
    shuffleArray(assignment.questions);

    // Shuffle options in each question, track new correct answer index
    assignment.questions.forEach(q => {
        const optionIndices = q.options.map((_, idx) => idx);
        shuffleArray(optionIndices);
        const shuffledOptions = optionIndices.map(idx => q.options[idx]);
        const shuffledAnswer = optionIndices.indexOf(q.answer);
        q.options = shuffledOptions;
        q.answer = shuffledAnswer;
    });

    assignment.questions.forEach((q, qi) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question';
        qDiv.innerHTML = `<div><b>Q${qi + 1}:</b> ${q.text}</div>`;
        const optsDiv = document.createElement('div');
        optsDiv.className = 'options';
        q.options.forEach((opt, oi) => {
            const id = `q${qi}_opt${oi}`;
            optsDiv.innerHTML += `
         <label>
           <input type="radio" name="q${qi}" value="${oi}" id="${id}">
           ${String.fromCharCode(97 + oi)}) ${opt}
         </label>
      `;
        });
        qDiv.appendChild(optsDiv);
        quizDiv.appendChild(qDiv);
    });

    const materialLinks = assignmentMaterials[assignIdx] || [];
    const weekLabel = `Week ${assignIdx + 1} material`;
    if (materialLinks.length) {
        const linksHtml = materialLinks.map((link, index) => {
            const partLabel = materialLinks.length > 1 ? ` part ${index + 1}` : '';
            return `<div><a href="${link}" target="_blank" rel="noopener">Download ${weekLabel}${partLabel}</a></div>`;
        }).join('');
        quizDiv.innerHTML += `<div class="download-link" style="margin: 1rem 0;">${linksHtml}</div>`;
    }
    quizDiv.innerHTML += `<button id="submit-quiz">Submit</button>`;
    document.getElementById('submit-quiz').onclick = () => submitQuizJumbled(assignment, assignIdx);
}

function submitQuizJumbled(assignment, assignIdx) {
    let score = 0;
    let resultHTML = `<div class="score">Your Score: `;
    let explanations = '';
    assignment.questions.forEach((q, qi) => {
        const radios = document.getElementsByName(`q${qi}`);
        let selected = -1;
        for (let r of radios) {
            if (r.checked) selected = parseInt(r.value);
        }
        const correct = selected === q.answer;
        if (correct) score++;
        let optionsHtml = '<ul style="list-style-type:none; padding-left:0;">';
        q.options.forEach((opt, idx) => {
            let optionLetter = String.fromCharCode(97 + idx);
            let style = '';
            if (idx === q.answer) {
                style = 'color: green; font-weight: 600;';
            }
            if (idx === selected && selected !== q.answer) {
                style = 'color: red; font-weight: 600;';
            }
            optionsHtml += `<li style="${style}">${optionLetter}) ${opt}</li>`;
        });
        optionsHtml += '</ul>';

        explanations += `
      <div>
        <b>Q${qi + 1}:</b> ${q.text}<br>
        <span class="${correct ? 'correct' : 'incorrect'}">
          ${correct ? 'Correct' : 'Incorrect'}
        </span><br>
        ${optionsHtml}
        <div class="explanation">${q.explanation}</div>
      </div>
      <hr>
    `;
    });
    resultHTML += `${score} / ${assignment.questions.length}</div>`;
    resultHTML += explanations;
    document.getElementById('result').innerHTML = resultHTML;
    document.getElementById('submit-quiz').disabled = true;
}
