/**
 * WhatsApp English Spelling Trainer
 * script.js — Complete logic, data, gamification, and state management
 */

'use strict';

/* ==========================================================
   1. WORD DICTIONARY
   ========================================================== */
const WORD_DICT = [
  /* Level 1 — WhatsApp / Hinglish shorthand */
  { wrong: 'esa',     correct: 'aisa',      level: 1, category: 'Hinglish', explanation: 'Correct Hinglish spelling' },
  { wrong: 'kese',    correct: 'kaise',     level: 1, category: 'Hinglish' },
  { wrong: 'kyu',     correct: 'kyun',      level: 1, category: 'Hinglish' },
  { wrong: 'kiya',    correct: 'kya',       level: 1, category: 'Hinglish' },
  { wrong: 'vho',     correct: 'woh',       level: 1, category: 'Hinglish' },
  { wrong: 'vhi',     correct: 'wahi',      level: 1, category: 'Hinglish' },
  { wrong: 'nhi',     correct: 'nahi',      level: 1, category: 'Hinglish' },
  { wrong: 'kr',      correct: 'kar',       level: 1, category: 'Hinglish' },
  { wrong: 'h',       correct: 'hai',       level: 1, category: 'Hinglish' },
  { wrong: 'hu',      correct: 'hoon',      level: 1, category: 'Hinglish' },
  { wrong: 'pta',     correct: 'pata',      level: 1, category: 'Hinglish' },
  { wrong: 'fir',     correct: 'phir',      level: 1, category: 'Hinglish' },
  { wrong: 'agr',     correct: 'agar',      level: 1, category: 'Hinglish' },
  { wrong: 'sb',      correct: 'sab',       level: 1, category: 'Hinglish' },
  { wrong: 'bt',      correct: 'baat',      level: 1, category: 'Hinglish' },
  { wrong: 'bta',     correct: 'batao',     level: 1, category: 'Hinglish' },
  { wrong: 'bcz',     correct: 'because',   level: 1, category: 'Hinglish' },
  { wrong: 'cz',      correct: 'because',   level: 1, category: 'Hinglish' },
  { wrong: 'ghr',     correct: 'ghar',      level: 1, category: 'Hinglish' },
  { wrong: 'kbhi',    correct: 'kabhi',     level: 1, category: 'Hinglish' },
  { wrong: 'kuch',    correct: 'kuch',      level: 1, category: 'Hinglish' },
  { wrong: 'thk',     correct: 'theek',     level: 1, category: 'Hinglish' },
  { wrong: 'smjh',    correct: 'samjho',    level: 1, category: 'Hinglish' },
  { wrong: 'hn',      correct: 'haan',      level: 1, category: 'Hinglish' },
  { wrong: 'na',      correct: 'naa',       level: 1, category: 'Hinglish' },
  { wrong: 'yr',      correct: 'yaar',      level: 1, category: 'Hinglish' },
  { wrong: 'clg',     correct: 'college',   level: 1, category: 'Hinglish' },
  { wrong: 'tmr',     correct: 'tomorrow',  level: 1, category: 'Hinglish' },
  { wrong: 'u',       correct: 'you',       level: 1, category: 'Hinglish' },
  { wrong: 'r',       correct: 'are',       level: 1, category: 'Hinglish' },
  { wrong: 'y',       correct: 'why',       level: 1, category: 'Hinglish' },
  { wrong: 'k',       correct: 'okay',      level: 1, category: 'Hinglish' },
  { wrong: 'm',       correct: 'am',        level: 1, category: 'Hinglish' },
  { wrong: 'wt',      correct: 'what',      level: 1, category: 'Hinglish' },
  { wrong: 'hv',      correct: 'have',      level: 1, category: 'Hinglish' },
  { wrong: 'cme',     correct: 'come',      level: 1, category: 'Hinglish' },
  { wrong: 'gng',     correct: 'going',     level: 1, category: 'Hinglish' },
  { wrong: 'wrk',     correct: 'work',      level: 1, category: 'Hinglish' },
  { wrong: 'dn',      correct: 'done',      level: 1, category: 'Hinglish' },
  { wrong: 'abt',     correct: 'about',     level: 1, category: 'Hinglish' },

  /* Level 2 — Common English misspellings */
  { wrong: 'recieve',       correct: 'receive',       level: 2, category: 'Common', explanation: 'i before e except after c' },
  { wrong: 'beleive',       correct: 'believe',       level: 2, category: 'Common' },
  { wrong: 'freind',        correct: 'friend',        level: 2, category: 'Common' },
  { wrong: 'untill',        correct: 'until',         level: 2, category: 'Common' },
  { wrong: 'tommorrow',     correct: 'tomorrow',      level: 2, category: 'Common' },
  { wrong: 'tommorow',      correct: 'tomorrow',      level: 2, category: 'Common' },
  { wrong: 'becuase',       correct: 'because',       level: 2, category: 'Common' },
  { wrong: 'definately',    correct: 'definitely',    level: 2, category: 'Common' },
  { wrong: 'seperate',      correct: 'separate',      level: 2, category: 'Common', explanation: '"Sep-a-rate": remember the rat in separate' },
  { wrong: 'occured',       correct: 'occurred',      level: 2, category: 'Common' },
  { wrong: 'achive',        correct: 'achieve',       level: 2, category: 'Common' },
  { wrong: 'adress',        correct: 'address',       level: 2, category: 'Common' },
  { wrong: 'agressive',     correct: 'aggressive',    level: 2, category: 'Common' },
  { wrong: 'apparant',      correct: 'apparent',      level: 2, category: 'Common' },
  { wrong: 'appearence',    correct: 'appearance',    level: 2, category: 'Common' },
  { wrong: 'arguement',     correct: 'argument',      level: 2, category: 'Common' },
  { wrong: 'begining',      correct: 'beginning',     level: 2, category: 'Common' },
  { wrong: 'benifit',       correct: 'benefit',       level: 2, category: 'Common' },
  { wrong: 'calender',      correct: 'calendar',      level: 2, category: 'Common' },
  { wrong: 'cemetary',      correct: 'cemetery',      level: 2, category: 'Common' },
  { wrong: 'commitee',      correct: 'committee',     level: 2, category: 'Common' },
  { wrong: 'concious',      correct: 'conscious',     level: 2, category: 'Common' },
  { wrong: 'conveniant',    correct: 'convenient',    level: 2, category: 'Common' },
  { wrong: 'curiousity',    correct: 'curiosity',     level: 2, category: 'Common' },
  { wrong: 'dissapear',     correct: 'disappear',     level: 2, category: 'Common' },
  { wrong: 'dissapoint',    correct: 'disappoint',    level: 2, category: 'Common' },
  { wrong: 'embarass',      correct: 'embarrass',     level: 2, category: 'Common' },
  { wrong: 'enviroment',    correct: 'environment',   level: 2, category: 'Common' },
  { wrong: 'existance',     correct: 'existence',     level: 2, category: 'Common' },
  { wrong: 'experiance',    correct: 'experience',    level: 2, category: 'Common' },
  { wrong: 'foward',        correct: 'forward',       level: 2, category: 'Common' },
  { wrong: 'goverment',     correct: 'government',    level: 2, category: 'Common', explanation: '"Govern-ment" — the t is after n' },
  { wrong: 'garentee',      correct: 'guarantee',     level: 2, category: 'Common' },
  { wrong: 'grammer',       correct: 'grammar',       level: 2, category: 'Common' },
  { wrong: 'hapiness',      correct: 'happiness',     level: 2, category: 'Common' },
  { wrong: 'hieght',        correct: 'height',        level: 2, category: 'Common' },
  { wrong: 'humourous',     correct: 'humorous',      level: 2, category: 'Common' },
  { wrong: 'immediatly',    correct: 'immediately',   level: 2, category: 'Common' },
  { wrong: 'independant',   correct: 'independent',   level: 2, category: 'Common' },
  { wrong: 'intresting',    correct: 'interesting',   level: 2, category: 'Common' },
  { wrong: 'judgement',     correct: 'judgment',      level: 2, category: 'Common' },
  { wrong: 'knowlege',      correct: 'knowledge',     level: 2, category: 'Common' },
  { wrong: 'liesure',       correct: 'leisure',       level: 2, category: 'Common' },
  { wrong: 'maintainance',  correct: 'maintenance',   level: 2, category: 'Common' },
  { wrong: 'milenium',      correct: 'millennium',    level: 2, category: 'Common' },
  { wrong: 'mischevious',   correct: 'mischievous',   level: 2, category: 'Common' },
  { wrong: 'neccessary',    correct: 'necessary',     level: 2, category: 'Common', explanation: '1 c, 2 s: "necessary"' },
  { wrong: 'negociate',     correct: 'negotiate',     level: 2, category: 'Common' },
  { wrong: 'neighbour',     correct: 'neighbor',      level: 2, category: 'Common' },
  { wrong: 'noticable',     correct: 'noticeable',    level: 2, category: 'Common' },
  { wrong: 'occassion',     correct: 'occasion',      level: 2, category: 'Common' },
  { wrong: 'ofcourse',      correct: 'of course',     level: 2, category: 'Common' },
  { wrong: 'oppertunity',   correct: 'opportunity',   level: 2, category: 'Common' },
  { wrong: 'paralel',       correct: 'parallel',      level: 2, category: 'Common' },
  { wrong: 'pavillion',     correct: 'pavilion',      level: 2, category: 'Common' },
  { wrong: 'persistant',    correct: 'persistent',    level: 2, category: 'Common' },
  { wrong: 'personel',      correct: 'personnel',     level: 2, category: 'Common' },
  { wrong: 'possesion',     correct: 'possession',    level: 2, category: 'Common' },
  { wrong: 'practise',      correct: 'practice',      level: 2, category: 'Common' },
  { wrong: 'presense',      correct: 'presence',      level: 2, category: 'Common' },
  { wrong: 'priviledge',    correct: 'privilege',     level: 2, category: 'Common' },
  { wrong: 'probaly',       correct: 'probably',      level: 2, category: 'Common' },
  { wrong: 'profesional',   correct: 'professional',  level: 2, category: 'Common' },
  { wrong: 'pronounciation', correct: 'pronunciation', level: 2, category: 'Common' },
  { wrong: 'questionaire',  correct: 'questionnaire', level: 2, category: 'Common' },
  { wrong: 'relevent',      correct: 'relevant',      level: 2, category: 'Common' },
  { wrong: 'rememberance',  correct: 'remembrance',   level: 2, category: 'Common' },
  { wrong: 'repition',      correct: 'repetition',    level: 2, category: 'Common' },
  { wrong: 'resistence',    correct: 'resistance',    level: 2, category: 'Common' },
  { wrong: 'responsibilty', correct: 'responsibility',level: 2, category: 'Common' },
  { wrong: 'rythm',         correct: 'rhythm',        level: 2, category: 'Common' },
  { wrong: 'shedule',       correct: 'schedule',      level: 2, category: 'Common' },
  { wrong: 'sience',        correct: 'science',       level: 2, category: 'Common' },
  { wrong: 'sieze',         correct: 'seize',         level: 2, category: 'Common' },
  { wrong: 'sincerly',      correct: 'sincerely',     level: 2, category: 'Common' },
  { wrong: 'succesful',     correct: 'successful',    level: 2, category: 'Common' },
  { wrong: 'suprise',       correct: 'surprise',      level: 2, category: 'Common' },
  { wrong: 'tendancy',      correct: 'tendency',      level: 2, category: 'Common' },
  { wrong: 'thier',         correct: 'their',         level: 2, category: 'Common' },
  { wrong: 'truely',        correct: 'truly',         level: 2, category: 'Common' },
  { wrong: 'twelvth',       correct: 'twelfth',       level: 2, category: 'Common' },
  { wrong: 'unfortunatly',  correct: 'unfortunately', level: 2, category: 'Common' },
  { wrong: 'vaccum',        correct: 'vacuum',        level: 2, category: 'Common' },
  { wrong: 'visious',       correct: 'vicious',       level: 2, category: 'Common' },
  { wrong: 'wich',          correct: 'which',         level: 2, category: 'Common' },
  { wrong: 'wierd',         correct: 'weird',         level: 2, category: 'Common' },
  { wrong: 'writting',      correct: 'writing',       level: 2, category: 'Common' },
  { wrong: 'yeild',         correct: 'yield',         level: 2, category: 'Common' },

  /* Level 3 — Academic words */
  { wrong: 'absense',       correct: 'absence',       level: 3, category: 'Academic' },
  { wrong: 'accademic',     correct: 'academic',      level: 3, category: 'Academic' },
  { wrong: 'accomodate',    correct: 'accommodate',   level: 3, category: 'Academic', explanation: '2 c\'s and 2 m\'s' },
  { wrong: 'aknowledge',    correct: 'acknowledge',   level: 3, category: 'Academic' },
  { wrong: 'analagy',       correct: 'analogy',       level: 3, category: 'Academic' },
  { wrong: 'annonymous',    correct: 'anonymous',     level: 3, category: 'Academic' },
  { wrong: 'antecedant',    correct: 'antecedent',    level: 3, category: 'Academic' },
  { wrong: 'aprreciate',    correct: 'appreciate',    level: 3, category: 'Academic' },
  { wrong: 'assesment',     correct: 'assessment',    level: 3, category: 'Academic' },
  { wrong: 'assosiation',   correct: 'association',   level: 3, category: 'Academic' },
  { wrong: 'atribute',      correct: 'attribute',     level: 3, category: 'Academic' },
  { wrong: 'autonamy',      correct: 'autonomy',      level: 3, category: 'Academic' },
  { wrong: 'burocracy',     correct: 'bureaucracy',   level: 3, category: 'Academic' },
  { wrong: 'catagory',      correct: 'category',      level: 3, category: 'Academic' },
  { wrong: 'characterise',  correct: 'characterize',  level: 3, category: 'Academic' },
  { wrong: 'clasification', correct: 'classification',level: 3, category: 'Academic' },
  { wrong: 'colaborate',    correct: 'collaborate',   level: 3, category: 'Academic' },
  { wrong: 'colum',         correct: 'column',        level: 3, category: 'Academic' },
  { wrong: 'comprehention', correct: 'comprehension', level: 3, category: 'Academic' },
  { wrong: 'concieve',      correct: 'conceive',      level: 3, category: 'Academic' },
  { wrong: 'consequance',   correct: 'consequence',   level: 3, category: 'Academic' },
  { wrong: 'contradict',    correct: 'contradict',    level: 3, category: 'Academic' },
  { wrong: 'controvercial', correct: 'controversial', level: 3, category: 'Academic' },
  { wrong: 'critisism',     correct: 'criticism',     level: 3, category: 'Academic' },
  { wrong: 'curricullum',   correct: 'curriculum',    level: 3, category: 'Academic' },
  { wrong: 'cynacism',      correct: 'cynicism',      level: 3, category: 'Academic' },
  { wrong: 'democarcy',     correct: 'democracy',     level: 3, category: 'Academic' },
  { wrong: 'dilemna',       correct: 'dilemma',       level: 3, category: 'Academic' },
  { wrong: 'disipline',     correct: 'discipline',    level: 3, category: 'Academic' },
  { wrong: 'efficiancy',    correct: 'efficiency',    level: 3, category: 'Academic' },
  { wrong: 'eligable',      correct: 'eligible',      level: 3, category: 'Academic' },
  { wrong: 'eloquance',     correct: 'eloquence',     level: 3, category: 'Academic' },
  { wrong: 'emphasise',     correct: 'emphasize',     level: 3, category: 'Academic' },
  { wrong: 'enfluence',     correct: 'influence',     level: 3, category: 'Academic' },
  { wrong: 'enthusiasim',   correct: 'enthusiasm',    level: 3, category: 'Academic' },
  { wrong: 'equivalant',    correct: 'equivalent',    level: 3, category: 'Academic' },
  { wrong: 'esential',      correct: 'essential',     level: 3, category: 'Academic' },
  { wrong: 'eveidence',     correct: 'evidence',      level: 3, category: 'Academic' },
  { wrong: 'evoluton',      correct: 'evolution',     level: 3, category: 'Academic' },
  { wrong: 'expiriment',    correct: 'experiment',    level: 3, category: 'Academic' },
  { wrong: 'facinate',      correct: 'fascinate',     level: 3, category: 'Academic' },
  { wrong: 'familar',       correct: 'familiar',      level: 3, category: 'Academic' },
  { wrong: 'flexibilty',    correct: 'flexibility',   level: 3, category: 'Academic' },
  { wrong: 'fundemental',   correct: 'fundamental',   level: 3, category: 'Academic' },
  { wrong: 'generaly',      correct: 'generally',     level: 3, category: 'Academic' },
  { wrong: 'hypothisis',    correct: 'hypothesis',    level: 3, category: 'Academic' },
  { wrong: 'identiy',       correct: 'identity',      level: 3, category: 'Academic' },
  { wrong: 'ideolgy',       correct: 'ideology',      level: 3, category: 'Academic' },
  { wrong: 'implentation',  correct: 'implementation',level: 3, category: 'Academic' },
  { wrong: 'implication',   correct: 'implication',   level: 3, category: 'Academic' },
  { wrong: 'indpendent',    correct: 'independent',   level: 3, category: 'Academic' },
  { wrong: 'institue',      correct: 'institute',     level: 3, category: 'Academic' },
  { wrong: 'intelectual',   correct: 'intellectual',  level: 3, category: 'Academic' },
  { wrong: 'interperation', correct: 'interpretation',level: 3, category: 'Academic' },
  { wrong: 'intution',      correct: 'intuition',     level: 3, category: 'Academic' },
  { wrong: 'inovation',     correct: 'innovation',    level: 3, category: 'Academic' },
  { wrong: 'justifcation',  correct: 'justification', level: 3, category: 'Academic' },
  { wrong: 'legitmate',     correct: 'legitimate',    level: 3, category: 'Academic' },
  { wrong: 'liberaly',      correct: 'liberally',     level: 3, category: 'Academic' },
  { wrong: 'magnificant',   correct: 'magnificent',   level: 3, category: 'Academic' },
  { wrong: 'methology',     correct: 'methodology',   level: 3, category: 'Academic' },
  { wrong: 'millenium',     correct: 'millennium',    level: 3, category: 'Academic' },
  { wrong: 'monoply',       correct: 'monopoly',      level: 3, category: 'Academic' },
  { wrong: 'motivaton',     correct: 'motivation',    level: 3, category: 'Academic' },
  { wrong: 'narative',      correct: 'narrative',     level: 3, category: 'Academic' },
  { wrong: 'necesity',      correct: 'necessity',     level: 3, category: 'Academic' },
  { wrong: 'nominaton',     correct: 'nomination',    level: 3, category: 'Academic' },
  { wrong: 'objectve',      correct: 'objective',     level: 3, category: 'Academic' },
  { wrong: 'observaton',    correct: 'observation',   level: 3, category: 'Academic' },
  { wrong: 'optimizaton',   correct: 'optimization',  level: 3, category: 'Academic' },

  /* Level 4 — UPSC / Government vocabulary */
  { wrong: 'bureacracy',    correct: 'bureaucracy',   level: 4, category: 'UPSC', explanation: 'Government administration system' },
  { wrong: 'adminstraion',  correct: 'administration',level: 4, category: 'UPSC' },
  { wrong: 'afidavit',      correct: 'affidavit',     level: 4, category: 'UPSC', explanation: 'Written sworn statement' },
  { wrong: 'ammendment',    correct: 'amendment',     level: 4, category: 'UPSC' },
  { wrong: 'bicameral',     correct: 'bicameral',     level: 4, category: 'UPSC', explanation: 'Two-chamber legislature (Lok Sabha + Rajya Sabha)' },
  { wrong: 'colective',     correct: 'collective',    level: 4, category: 'UPSC' },
  { wrong: 'constiution',   correct: 'constitution',  level: 4, category: 'UPSC' },
  { wrong: 'constituant',   correct: 'constituent',   level: 4, category: 'UPSC' },
  { wrong: 'corroption',    correct: 'corruption',    level: 4, category: 'UPSC' },
  { wrong: 'deligation',    correct: 'delegation',    level: 4, category: 'UPSC' },
  { wrong: 'diplomasy',     correct: 'diplomacy',     level: 4, category: 'UPSC' },
  { wrong: 'elecorate',     correct: 'electorate',    level: 4, category: 'UPSC' },
  { wrong: 'excellance',    correct: 'excellence',    level: 4, category: 'UPSC' },
  { wrong: 'executve',      correct: 'executive',     level: 4, category: 'UPSC' },
  { wrong: 'fedrealism',    correct: 'federalism',    level: 4, category: 'UPSC' },
  { wrong: 'finantial',     correct: 'financial',     level: 4, category: 'UPSC' },
  { wrong: 'foriegn',       correct: 'foreign',       level: 4, category: 'UPSC' },
  { wrong: 'fundamenal',    correct: 'fundamental',   level: 4, category: 'UPSC' },
  { wrong: 'geopoltics',    correct: 'geopolitics',   level: 4, category: 'UPSC' },
  { wrong: 'govarnance',    correct: 'governance',    level: 4, category: 'UPSC' },
  { wrong: 'hierachy',      correct: 'hierarchy',     level: 4, category: 'UPSC' },
  { wrong: 'incorperate',   correct: 'incorporate',   level: 4, category: 'UPSC' },
  { wrong: 'infrastracture', correct: 'infrastructure', level: 4, category: 'UPSC' },
  { wrong: 'iniciative',    correct: 'initiative',    level: 4, category: 'UPSC' },
  { wrong: 'integirty',     correct: 'integrity',     level: 4, category: 'UPSC' },
  { wrong: 'judicialy',     correct: 'judicially',    level: 4, category: 'UPSC' },
  { wrong: 'jurisdicton',   correct: 'jurisdiction',  level: 4, category: 'UPSC' },
  { wrong: 'legeslature',   correct: 'legislature',   level: 4, category: 'UPSC' },
  { wrong: 'liabilty',      correct: 'liability',     level: 4, category: 'UPSC' },
  { wrong: 'maniuplation',  correct: 'manipulation',  level: 4, category: 'UPSC' },
  { wrong: 'manifeso',      correct: 'manifesto',     level: 4, category: 'UPSC' },
  { wrong: 'ministary',     correct: 'ministry',      level: 4, category: 'UPSC' },
  { wrong: 'municiple',     correct: 'municipal',     level: 4, category: 'UPSC' },
  { wrong: 'nationalisaton', correct: 'nationalisation', level: 4, category: 'UPSC' },
  { wrong: 'ordinace',      correct: 'ordinance',     level: 4, category: 'UPSC' },
  { wrong: 'parliment',     correct: 'parliament',    level: 4, category: 'UPSC' },
  { wrong: 'perliment',     correct: 'parliament',    level: 4, category: 'UPSC' },
  { wrong: 'pettion',       correct: 'petition',      level: 4, category: 'UPSC' },
  { wrong: 'poliferation',  correct: 'proliferation', level: 4, category: 'UPSC' },
  { wrong: 'preamable',     correct: 'preamble',      level: 4, category: 'UPSC' },
  { wrong: 'presidant',     correct: 'president',     level: 4, category: 'UPSC' },
  { wrong: 'privelege',     correct: 'privilege',     level: 4, category: 'UPSC' },
  { wrong: 'proclamaton',   correct: 'proclamation',  level: 4, category: 'UPSC' },
  { wrong: 'propoganda',    correct: 'propaganda',    level: 4, category: 'UPSC' },
  { wrong: 'provisonal',    correct: 'provisional',   level: 4, category: 'UPSC' },
  { wrong: 'ratifcation',   correct: 'ratification',  level: 4, category: 'UPSC' },
  { wrong: 'reconcilaton',  correct: 'reconciliation',level: 4, category: 'UPSC' },
  { wrong: 'referndum',     correct: 'referendum',    level: 4, category: 'UPSC' },
  { wrong: 'represantative', correct: 'representative', level: 4, category: 'UPSC' },
  { wrong: 'soveregnty',    correct: 'sovereignty',   level: 4, category: 'UPSC' },
  { wrong: 'subsidary',     correct: 'subsidiary',    level: 4, category: 'UPSC' },
  { wrong: 'suprmacy',      correct: 'supremacy',     level: 4, category: 'UPSC' },
  { wrong: 'tribunel',      correct: 'tribunal',      level: 4, category: 'UPSC' },
  { wrong: 'unicamiral',    correct: 'unicameral',    level: 4, category: 'UPSC' },
  { wrong: 'violaton',      correct: 'violation',     level: 4, category: 'UPSC' },

  /* Level 5 — Advanced / GRE / Competitive vocabulary */
  { wrong: 'abstemous',     correct: 'abstemious',    level: 5, category: 'Advanced', explanation: 'Eating and drinking sparingly' },
  { wrong: 'acrimounious',  correct: 'acrimonious',   level: 5, category: 'Advanced', explanation: 'Angry and bitter in manner' },
  { wrong: 'ambulatry',     correct: 'ambulatory',    level: 5, category: 'Advanced' },
  { wrong: 'amelorate',     correct: 'ameliorate',    level: 5, category: 'Advanced', explanation: 'To make better or improve' },
  { wrong: 'ambiguos',      correct: 'ambiguous',     level: 5, category: 'Advanced' },
  { wrong: 'anachronsm',    correct: 'anachronism',   level: 5, category: 'Advanced', explanation: 'Something out of its time period' },
  { wrong: 'anomulous',     correct: 'anomalous',     level: 5, category: 'Advanced' },
  { wrong: 'benevolant',    correct: 'benevolent',    level: 5, category: 'Advanced' },
  { wrong: 'capriciuos',    correct: 'capricious',    level: 5, category: 'Advanced', explanation: 'Given to sudden changes of mind' },
  { wrong: 'catostrophic',  correct: 'catastrophic',  level: 5, category: 'Advanced' },
  { wrong: 'circumlocuton', correct: 'circumlocution',level: 5, category: 'Advanced', explanation: 'Using many words to say something' },
  { wrong: 'clandestne',    correct: 'clandestine',   level: 5, category: 'Advanced' },
  { wrong: 'cognizent',     correct: 'cognizant',     level: 5, category: 'Advanced' },
  { wrong: 'colosssal',     correct: 'colossal',      level: 5, category: 'Advanced' },
  { wrong: 'commensrate',   correct: 'commensurate',  level: 5, category: 'Advanced' },
  { wrong: 'comprhensive',  correct: 'comprehensive', level: 5, category: 'Advanced' },
  { wrong: 'concomtant',    correct: 'concomitant',   level: 5, category: 'Advanced' },
  { wrong: 'conscientous',  correct: 'conscientious', level: 5, category: 'Advanced' },
  { wrong: 'contemporay',   correct: 'contemporary',  level: 5, category: 'Advanced' },
  { wrong: 'contentiuos',   correct: 'contentious',   level: 5, category: 'Advanced' },
  { wrong: 'deferential',   correct: 'deferential',   level: 5, category: 'Advanced' },
  { wrong: 'demagougery',   correct: 'demagoguery',   level: 5, category: 'Advanced' },
  { wrong: 'desparate',     correct: 'desperate',     level: 5, category: 'Advanced' },
  { wrong: 'diaspora',      correct: 'diaspora',      level: 5, category: 'Advanced', explanation: 'Scattered population from original homeland' },
  { wrong: 'dichotmoy',     correct: 'dichotomy',     level: 5, category: 'Advanced' },
  { wrong: 'dilettane',     correct: 'dilettante',    level: 5, category: 'Advanced' },
  { wrong: 'disintersted',  correct: 'disinterested', level: 5, category: 'Advanced' },
  { wrong: 'disseminate',   correct: 'disseminate',   level: 5, category: 'Advanced' },
  { wrong: 'ebulliant',     correct: 'ebullient',     level: 5, category: 'Advanced', explanation: 'Cheerful and full of energy' },
  { wrong: 'elucidate',     correct: 'elucidate',     level: 5, category: 'Advanced' },
  { wrong: 'emacaited',     correct: 'emaciated',     level: 5, category: 'Advanced' },
  { wrong: 'engimatic',     correct: 'enigmatic',     level: 5, category: 'Advanced' },
  { wrong: 'ephemral',      correct: 'ephemeral',     level: 5, category: 'Advanced', explanation: 'Lasting for a very short time' },
  { wrong: 'equanamity',    correct: 'equanimity',    level: 5, category: 'Advanced' },
  { wrong: 'equivocl',      correct: 'equivocal',     level: 5, category: 'Advanced' },
  { wrong: 'erroneuous',    correct: 'erroneous',     level: 5, category: 'Advanced' },
  { wrong: 'esoterc',       correct: 'esoteric',      level: 5, category: 'Advanced' },
  { wrong: 'euphemisim',    correct: 'euphemism',     level: 5, category: 'Advanced' },
  { wrong: 'exaccerbate',   correct: 'exacerbate',    level: 5, category: 'Advanced', explanation: 'To make worse or more severe' },
  { wrong: 'exhillarate',   correct: 'exhilarate',    level: 5, category: 'Advanced' },
  { wrong: 'facetous',      correct: 'facetious',     level: 5, category: 'Advanced' },
  { wrong: 'fallacous',     correct: 'fallacious',    level: 5, category: 'Advanced' },
  { wrong: 'ferocous',      correct: 'ferocious',     level: 5, category: 'Advanced' },
  { wrong: 'flippant',      correct: 'flippant',      level: 5, category: 'Advanced' },
  { wrong: 'formidible',    correct: 'formidable',    level: 5, category: 'Advanced' },
  { wrong: 'fortuitios',    correct: 'fortuitous',    level: 5, category: 'Advanced' },
  { wrong: 'futiilty',      correct: 'futility',      level: 5, category: 'Advanced' },
  { wrong: 'gregariuos',    correct: 'gregarious',    level: 5, category: 'Advanced', explanation: 'Fond of company; sociable' },
  { wrong: 'heedless',      correct: 'heedless',      level: 5, category: 'Advanced' },
  { wrong: 'hypocritcal',   correct: 'hypocritical',  level: 5, category: 'Advanced' },
];

/* Sentence correction map (WhatsApp shorthand → proper) */
const WORD_MAP = {};
WORD_DICT.forEach(w => { WORD_MAP[w.wrong.toLowerCase()] = w.correct; });

/* Extra word-level replacements for sentence mode */
const SENTENCE_MAP = {
  'nhi': 'nahi', 'pta': 'pata', 'h': 'hai', 'hu': 'hoon',
  'kese': 'kaise', 'kyu': 'kyun', 'vho': 'woh', 'vhi': 'wahi',
  'esa': 'aisa', 'kiya': 'kya', 'fir': 'phir', 'agr': 'agar',
  'sb': 'sab', 'kr': 'kar', 'bt': 'baat', 'bta': 'batao',
  'ghr': 'ghar', 'kbhi': 'kabhi', 'thk': 'theek', 'hn': 'haan',
  'yr': 'yaar', 'clg': 'college', 'tmr': 'tomorrow', 'u': 'you',
  'r': 'are', 'y': 'why', 'k': 'okay', 'm': 'am', 'wt': 'what',
  'hv': 'have', 'cme': 'come', 'gng': 'going', 'wrk': 'work',
  'dn': 'done', 'abt': 'about', 'bcz': 'because', 'cz': 'because',
  'na': 'naa', 'smjh': 'samjho', 'goverment': 'government',
  'recieve': 'receive', 'beleive': 'believe', 'freind': 'friend',
  'definately': 'definitely', 'seperate': 'separate',
  'tommorrow': 'tomorrow', 'grammer': 'grammar', 'thier': 'their',
  'wierd': 'weird', 'suprise': 'surprise',
};

const EXAMPLE_SENTENCES = [
  { input: 'mujhe pta nhi h',      output: 'mujhe pata nahi hai' },
  { input: 'vho kese h',           output: 'woh kaise hai' },
  { input: 'kyu kr rha h',         output: 'kyun kar raha hai' },
  { input: 'agr esa h fir thk h',  output: 'agar aisa hai phir theek hai' },
  { input: 'yr pta nhi kya h',     output: 'yaar pata nahi kya hai' },
  { input: 'sb theek h kya',       output: 'sab theek hai kya' },
  { input: 'i recieve ur msg',     output: 'i receive your message' },
  { input: 'goverment is seperate',output: 'government is separate' },
  { input: 'my freind is wierd',   output: 'my friend is weird' },
  { input: 'definately a suprise', output: 'definitely a surprise' },
];

const TYPING_SENTENCES = [
  'I will complete my preparation today.',
  'The government is committed to economic development.',
  'Practice makes a man perfect in every field.',
  'Reading newspapers daily improves vocabulary and knowledge.',
  'Success belongs to those who work hard and stay consistent.',
  'The Constitution of India is the supreme law of the land.',
  'Democracy means government of the people, by the people, for the people.',
  'Knowledge is power, and education is the key to success.',
  'Discipline and dedication are the foundations of achievement.',
  'Every day is a new opportunity to learn and grow.',
  'Hard work beats talent when talent does not work hard.',
  'Time management is essential for competitive exam preparation.',
];

const MOTIVATIONAL_QUOTES = [
  '"Practice makes perfect."',
  '"Every expert was once a beginner."',
  '"The secret of getting ahead is getting started." — Mark Twain',
  '"Success is the sum of small efforts, repeated day in and day out."',
  '"Don\'t watch the clock; do what it does. Keep going." — Sam Levenson',
  '"Believe you can and you\'re halfway there." — Theodore Roosevelt',
  '"Your limitation — it\'s only your imagination."',
  '"Push yourself, because no one else is going to do it for you."',
  '"Great things never come from comfort zones."',
  '"Dream it. Wish it. Do it."',
  '"Stay focused and never give up on your dreams."',
  '"One word a day keeps failure away."',
];

const BADGES = [
  { id: 'first_word',    icon: '🌱', name: 'First Steps',    desc: 'Answer first word correctly',    condition: s => s.totalCorrect >= 1 },
  { id: 'ten_words',     icon: '📖', name: 'Word Watcher',   desc: 'Answer 10 words correctly',       condition: s => s.totalCorrect >= 10 },
  { id: 'fifty_words',   icon: '🔥', name: 'On Fire',        desc: 'Answer 50 words correctly',       condition: s => s.totalCorrect >= 50 },
  { id: 'century',       icon: '💯', name: 'Century Club',   desc: 'Answer 100 words correctly',      condition: s => s.totalCorrect >= 100 },
  { id: 'streak_3',      icon: '⚡', name: 'Electrifying',   desc: 'Maintain a 3-day streak',         condition: s => s.bestStreak >= 3 },
  { id: 'streak_7',      icon: '🏆', name: 'Weekly Warrior', desc: 'Maintain a 7-day streak',         condition: s => s.bestStreak >= 7 },
  { id: 'accuracy_80',   icon: '🎯', name: 'Sharpshooter',   desc: 'Reach 80%+ accuracy',             condition: s => s.totalCorrect > 0 && (s.totalCorrect / (s.totalCorrect + s.totalWrong)) >= 0.8 },
  { id: 'level_5',       icon: '👑', name: 'Master Speller', desc: 'Reach Level 5',                   condition: s => s.level >= 5 },
  { id: 'quiz_complete', icon: '🎓', name: 'Quiz Graduate',  desc: 'Complete any quiz level',         condition: s => s.quizLevelsCompleted && s.quizLevelsCompleted.length >= 1 },
  { id: 'daily_done',    icon: '📅', name: 'Daily Challenger', desc: 'Complete a daily challenge',    condition: s => s.dailyChallengesDone >= 1 },
];

const LEVEL_NAMES  = ['', 'Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Expert', 'Master'];
const LEVEL_XP_REQ = [0, 0, 100, 250, 500, 900, 1500];

/* ==========================================================
   2. STATE MANAGEMENT
   ========================================================== */
const DEFAULT_STATE = {
  xp: 0, level: 1, streak: 0, bestStreak: 0,
  lastActiveDate: null,
  totalCorrect: 0, totalWrong: 0,
  wordsAnswered: 0, quizLevelsCompleted: [],
  quizLevelScores: {}, revisionQueue: [],
  missedWords: {}, completedWords: [],
  dailyChallengeDate: null, dailyChallengesDone: 0,
  earnedBadges: [], hearts: 5,
  dailyProgress: [],   // [{date, correct, wrong}]
  soundOn: true, darkMode: false,
};

let state = {};

function loadState() {
  try {
    const saved = localStorage.getItem('spellingTrainerState');
    state = saved ? { ...DEFAULT_STATE, ...JSON.parse(saved) } : { ...DEFAULT_STATE };
  } catch { state = { ...DEFAULT_STATE }; }
}
function saveState() {
  localStorage.setItem('spellingTrainerState', JSON.stringify(state));
}
function resetState() {
  if (!confirm('Reset ALL progress? This cannot be undone.')) return;
  state = { ...DEFAULT_STATE, soundOn: state.soundOn, darkMode: state.darkMode };
  saveState();
  showToast('Progress reset! 🔄');
  renderAll();
}
function exportProgress() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'spelling_trainer_progress.json';
  a.click(); URL.revokeObjectURL(url);
  showToast('Progress exported! 📤');
}

/* ==========================================================
   3. XP, LEVEL & GAMIFICATION
   ========================================================== */
function addXP(amount) {
  state.xp += amount;
  const prevLevel = state.level;
  recalcLevel();
  saveState();
  showXPPop(`+${amount} XP ⚡`);
  updateTopBar();
  if (state.level > prevLevel) showLevelUpModal(state.level);
  checkBadges();
}

function recalcLevel() {
  for (let l = LEVEL_XP_REQ.length - 1; l >= 1; l--) {
    if (state.xp >= LEVEL_XP_REQ[l]) { state.level = l; return; }
  }
  state.level = 1;
}

function getLevelProgress() {
  const cur = LEVEL_XP_REQ[state.level] || 0;
  const next = LEVEL_XP_REQ[state.level + 1] || cur + 100;
  const progress = state.xp - cur;
  const needed   = next - cur;
  return { cur, next, progress, needed, pct: Math.min(100, Math.round((progress / needed) * 100)) };
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastActiveDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.lastActiveDate === yesterday) {
    state.streak++;
  } else if (state.lastActiveDate !== today) {
    state.streak = 1;
  }
  state.bestStreak = Math.max(state.streak, state.bestStreak);
  state.lastActiveDate = today;
  saveState();
}

function loseHeart() {
  if (state.hearts > 0) state.hearts--;
  document.getElementById('hearts-display').textContent = '❤️'.repeat(state.hearts) + '🖤'.repeat(5 - state.hearts);
  saveState();
  if (state.hearts === 0) showToast('No hearts left! Wait to recover ❤️');
}

function restoreHearts() {
  state.hearts = 5;
  document.getElementById('hearts-display').textContent = '❤️❤️❤️❤️❤️';
  saveState();
}

function checkBadges() {
  BADGES.forEach(b => {
    if (!state.earnedBadges.includes(b.id) && b.condition(state)) {
      state.earnedBadges.push(b.id);
      saveState();
      showBadgeModal(b);
    }
  });
}

/* ==========================================================
   4. UI HELPERS
   ========================================================== */
function showXPPop(text) {
  const el = document.getElementById('xp-popup');
  el.textContent = text;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 1800);
}

function showToast(msg, duration = 2800) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.add('hidden'), duration);
}

function showLevelUpModal(level) {
  document.getElementById('levelup-text').textContent = `You reached Level ${level} — ${LEVEL_NAMES[level] || 'Master'}!`;
  document.getElementById('levelup-modal').classList.remove('hidden');
  launchConfetti();
}

function showBadgeModal(badge) {
  document.getElementById('badge-emoji').textContent = badge.icon;
  document.getElementById('badge-name').textContent = `${badge.name} — ${badge.desc}`;
  document.getElementById('badge-modal').classList.remove('hidden');
}

/* Confetti */
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  canvas.classList.remove('hidden');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 8 + 4,
    d: Math.random() * 80 + 20,
    color: ['#58CC02','#1CB0F6','#FF9600','#FF4B4B','#CE82FF','#FFC800'][Math.floor(Math.random() * 6)],
    tilt: Math.random() * 10 - 5,
    tiltAngle: Math.random() * Math.PI,
    tiltAngleInc: (Math.random() * 0.07) + 0.05,
  }));
  let frame;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath(); ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 3, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 5);
      ctx.stroke();
      p.tiltAngle += p.tiltAngleInc;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.tilt = Math.sin(p.tiltAngle) * 12;
      if (p.y > canvas.height) { p.y = -14; p.x = Math.random() * canvas.width; }
    });
    frame = requestAnimationFrame(draw);
  }
  draw();
  setTimeout(() => { cancelAnimationFrame(frame); canvas.classList.add('hidden'); ctx.clearRect(0, 0, canvas.width, canvas.height); }, 3500);
}

/* Sound */
function playSound(type) {
  if (!state.soundOn) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    if (type === 'correct') {
      osc.frequency.setValueAtTime(523, ctx.currentTime);
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
      osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
    } else {
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.setValueAtTime(200, ctx.currentTime + 0.1);
    }
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.4);
  } catch { /* silently fail */ }
}

/* Screen navigation */
let currentScreen = 'home';
function navigate(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`screen-${screenId}`);
  if (target) { target.classList.add('active'); currentScreen = screenId; }
  document.querySelectorAll('.nav-item').forEach(b => {
    b.classList.toggle('active', b.dataset.screen === screenId);
  });
  document.getElementById('topbar-title').textContent = {
    home: 'Home', practice: 'Practice Mode', sentence: 'Sentence Correction',
    typing: 'Typing Challenge', quiz: 'Quiz Levels', daily: 'Daily Challenge',
    stats: 'Statistics', search: 'Search Word', mistakes: 'Review Mistakes',
  }[screenId] || 'Home';
  closeDrawer();
  if (screenId === 'stats') renderStats();
  if (screenId === 'mistakes') renderMistakes();
  if (screenId === 'home') renderHome();
}

/* ==========================================================
   5. TOP BAR & HOME
   ========================================================== */
function updateTopBar() {
  document.getElementById('topbar-xp').textContent = `⚡${state.xp} XP`;
  document.getElementById('topbar-streak').textContent = `🔥${state.streak}`;
  document.getElementById('drawer-level').textContent = `Level ${state.level} · ${LEVEL_NAMES[state.level] || 'Master'}`;
}

function renderHome() {
  const hour = new Date().getHours();
  const greet = hour < 12 ? '🌅 Good morning!' : hour < 17 ? '☀️ Good afternoon!' : '🌙 Good evening!';
  document.getElementById('home-greeting').textContent = greet;
  document.getElementById('home-quote').textContent = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
  document.getElementById('home-streak').textContent = state.streak;
  document.getElementById('home-xp').textContent = state.xp;
  const total = state.totalCorrect + state.totalWrong;
  document.getElementById('home-accuracy').textContent = total > 0 ? Math.round((state.totalCorrect / total) * 100) + '%' : '0%';
  document.getElementById('home-words').textContent = state.totalCorrect;
  document.getElementById('home-level').textContent = state.level;
  document.getElementById('home-level-name').textContent = LEVEL_NAMES[state.level] || 'Master';
  const lp = getLevelProgress();
  document.getElementById('home-level-bar').style.width = lp.pct + '%';
  document.getElementById('home-level-xp').textContent = lp.progress;
  document.getElementById('home-level-max').textContent = lp.needed;
  // Badges
  const row = document.getElementById('badges-row');
  row.innerHTML = '';
  BADGES.forEach(b => {
    const el = document.createElement('div');
    el.className = 'badge-item ' + (state.earnedBadges.includes(b.id) ? 'earned' : 'locked');
    el.innerHTML = `<span class="badge-icon">${b.icon}</span><span>${b.name}</span>`;
    el.title = b.desc;
    row.appendChild(el);
  });
}

/* ==========================================================
   6. PRACTICE MODE
   ========================================================== */
let practiceWords = [];
let practiceIndex = 0;
let practiceCorrect = 0;
let practiceWrong = 0;

function initPractice() {
  const level = parseInt(document.getElementById('practice-level-select').value);
  let pool = level === 0 ? [...WORD_DICT] : WORD_DICT.filter(w => w.level === level);
  // Inject revision queue words at front (50% chance each)
  const revisionWords = state.revisionQueue
    .map(wrong => WORD_DICT.find(w => w.wrong === wrong))
    .filter(Boolean);
  // Shuffle pool
  pool = [...revisionWords, ...pool].sort(() => Math.random() - 0.5);
  practiceWords = pool;
  practiceIndex = 0; practiceCorrect = 0; practiceWrong = 0;
  loadPracticeWord();
}

function loadPracticeWord() {
  if (practiceIndex >= practiceWords.length) { practiceIndex = 0; }
  const word = practiceWords[practiceIndex];
  document.getElementById('practice-wrong-word').textContent = word.wrong;
  document.getElementById('practice-hint').textContent = `Category: ${word.category || 'General'} · Level ${word.level}`;
  const input = document.getElementById('practice-input');
  input.value = '';
  input.className = 'answer-input';
  input.disabled = false;
  document.getElementById('practice-feedback').classList.add('hidden');
  document.getElementById('practice-feedback').className = 'answer-feedback hidden';
  document.getElementById('practice-explanation').classList.add('hidden');
  document.getElementById('practice-check-btn').textContent = 'Check ✓';
  updatePracticeProgress();
  input.focus();
}

function checkPractice() {
  const word = practiceWords[practiceIndex];
  const input = document.getElementById('practice-input');
  const userAnswer = input.value.trim().toLowerCase();
  const correct    = word.correct.toLowerCase();
  const feedback   = document.getElementById('practice-feedback');
  const checkBtn   = document.getElementById('practice-check-btn');

  if (!userAnswer) { showToast('Type your answer first!'); return; }

  if (userAnswer === correct) {
    input.className = 'answer-input correct';
    feedback.className = 'answer-feedback correct';
    feedback.textContent = `✅ Correct! "${word.correct}" is right!`;
    feedback.classList.remove('hidden');
    playSound('correct');
    practiceCorrect++;
    state.totalCorrect++;
    state.wordsAnswered++;
    addXP(10);
    updateStreak();
    // Remove from revision queue if present
    state.revisionQueue = state.revisionQueue.filter(w => w !== word.wrong);
    // Track daily
    trackDailyWord(true);
    checkBtn.textContent = 'Next →';
    checkBtn.onclick = () => { practiceIndex++; loadPracticeWord(); checkBtn.onclick = checkPractice; };
  } else {
    input.className = 'answer-input wrong';
    feedback.className = 'answer-feedback wrong';
    feedback.textContent = `❌ Wrong! Correct: "${word.correct}"`;
    feedback.classList.remove('hidden');
    playSound('wrong');
    loseHeart();
    practiceWrong++;
    state.totalWrong++;
    // Add to revision queue
    if (!state.revisionQueue.includes(word.wrong)) state.revisionQueue.push(word.wrong);
    // Track missed words
    state.missedWords[word.wrong] = (state.missedWords[word.wrong] || 0) + 1;
    trackDailyWord(false);
    // Show explanation if available
    if (word.explanation) {
      const expBox = document.getElementById('practice-explanation');
      expBox.textContent = '💡 ' + word.explanation;
      expBox.classList.remove('hidden');
    }
    checkBtn.textContent = 'Try Again ↩';
    input.disabled = false;
    input.focus();
    input.select();
  }
  saveState();
  updatePracticeProgress();
}

function trackDailyWord(correct) {
  const today = new Date().toDateString();
  let entry = state.dailyProgress.find(d => d.date === today);
  if (!entry) { entry = { date: today, correct: 0, wrong: 0 }; state.dailyProgress.push(entry); }
  if (correct) entry.correct++; else entry.wrong++;
  if (state.dailyProgress.length > 7) state.dailyProgress = state.dailyProgress.slice(-7);
}

function updatePracticeProgress() {
  const total = practiceWords.length;
  document.getElementById('practice-progress-bar').style.width = total > 0 ? Math.round((practiceIndex / total) * 100) + '%' : '0%';
  document.getElementById('practice-correct-count').textContent = practiceCorrect;
  document.getElementById('practice-wrong-count').textContent = practiceWrong;
  document.getElementById('practice-queue-count').textContent = state.revisionQueue.length;
}

/* ==========================================================
   7. SENTENCE CORRECTION
   ========================================================== */
function correctSentence(input) {
  const words = input.trim().split(/\s+/);
  const corrected = words.map(w => SENTENCE_MAP[w.toLowerCase()] || WORD_MAP[w.toLowerCase()] || w);
  return { words, corrected };
}

function renderSentenceExamples() {
  const list = document.getElementById('example-list');
  list.innerHTML = '';
  EXAMPLE_SENTENCES.forEach(ex => {
    const el = document.createElement('div');
    el.className = 'example-item';
    el.innerHTML = `<span class="ex-wrong">${ex.input}</span><span class="ex-arrow">→</span><span class="ex-right">${ex.output}</span>`;
    el.addEventListener('click', () => {
      document.getElementById('sentence-input').value = ex.input;
      doSentenceCorrection();
    });
    list.appendChild(el);
  });
}

function doSentenceCorrection() {
  const raw = document.getElementById('sentence-input').value;
  if (!raw.trim()) { showToast('Enter a sentence first!'); return; }
  const { words, corrected } = correctSentence(raw);
  const correctedText = corrected.join(' ');
  document.getElementById('sentence-corrected').textContent = correctedText;
  const diffDiv = document.getElementById('sentence-diff');
  diffDiv.innerHTML = '';
  words.forEach((w, i) => {
    const span = document.createElement('span');
    span.className = 'diff-word ' + (corrected[i] !== w ? 'changed' : 'same');
    span.textContent = corrected[i];
    diffDiv.appendChild(span);
    diffDiv.appendChild(document.createTextNode(' '));
  });
  document.getElementById('sentence-result').classList.remove('hidden');
  addXP(5);
}

/* ==========================================================
   8. TYPING CHALLENGE
   ========================================================== */
let typingTarget   = '';
let typingStart    = null;
let typingTimer    = null;
let typingFinished = false;

function initTyping() {
  typingTarget = TYPING_SENTENCES[Math.floor(Math.random() * TYPING_SENTENCES.length)];
  typingStart = null; typingFinished = false;
  clearInterval(typingTimer);
  document.getElementById('typing-target-display').textContent = typingTarget;
  const input = document.getElementById('typing-input');
  input.value = '';
  input.disabled = false;
  document.getElementById('typing-result').classList.add('hidden');
  document.getElementById('typing-wpm').textContent = '0';
  document.getElementById('typing-accuracy-val').textContent = '100%';
  document.getElementById('typing-errors').textContent = '0';
  document.getElementById('typing-timer').textContent = '0s';
  input.focus();
}

function updateTypingDisplay() {
  const input    = document.getElementById('typing-input').value;
  const target   = typingTarget;
  const display  = document.getElementById('typing-target-display');
  let html = '';
  for (let i = 0; i < target.length; i++) {
    if (i < input.length) {
      html += input[i] === target[i]
        ? `<span class="t-correct">${target[i]}</span>`
        : `<span class="t-wrong">${target[i]}</span>`;
    } else {
      html += `<span>${target[i]}</span>`;
    }
  }
  display.innerHTML = html;
  // Stats
  const elapsed = typingStart ? ((Date.now() - typingStart) / 1000) : 0;
  const words    = input.trim().split(/\s+/).filter(Boolean).length;
  const wpm      = elapsed > 0 ? Math.round((words / elapsed) * 60) : 0;
  let errors = 0;
  for (let i = 0; i < input.length; i++) if (input[i] !== target[i]) errors++;
  const acc = input.length > 0 ? Math.max(0, Math.round(((input.length - errors) / input.length) * 100)) : 100;
  document.getElementById('typing-wpm').textContent = wpm;
  document.getElementById('typing-accuracy-val').textContent = acc + '%';
  document.getElementById('typing-errors').textContent = errors;
  document.getElementById('typing-timer').textContent = Math.round(elapsed) + 's';
}

function submitTyping() {
  if (typingFinished) return;
  typingFinished = true;
  clearInterval(typingTimer);
  const input   = document.getElementById('typing-input').value;
  const elapsed = typingStart ? ((Date.now() - typingStart) / 1000) : 1;
  const words   = input.trim().split(/\s+/).filter(Boolean).length;
  const wpm     = Math.round((words / elapsed) * 60);
  let errors = 0;
  for (let i = 0; i < input.length; i++) if (input[i] !== typingTarget[i]) errors++;
  const acc   = input.length > 0 ? Math.max(0, Math.round(((input.length - errors) / input.length) * 100)) : 0;
  const xpEarned = Math.round(wpm / 2) + Math.round(acc / 5);
  document.getElementById('res-wpm').textContent  = wpm;
  document.getElementById('res-acc').textContent  = acc + '%';
  document.getElementById('res-err').textContent  = errors;
  document.getElementById('res-time').textContent = Math.round(elapsed) + 's';
  document.getElementById('typing-xp-earned').textContent = `+${xpEarned} XP earned!`;
  document.getElementById('typing-result').classList.remove('hidden');
  document.getElementById('typing-input').disabled = true;
  addXP(xpEarned);
  if (errors === 0) { playSound('correct'); launchConfetti(); }
}

/* ==========================================================
   9. QUIZ LEVELS
   ========================================================== */
const QUIZ_LEVELS = [
  { id: 1, name: 'WhatsApp Words',    icon: '📱', sub: '40 WhatsApp shorthand words' },
  { id: 2, name: 'Common English',    icon: '📗', sub: 'Everyday misspellings' },
  { id: 3, name: 'Academic Words',    icon: '🎓', sub: 'Study and research terms' },
  { id: 4, name: 'UPSC Vocabulary',   icon: '🏛️', sub: 'Government and polity terms' },
  { id: 5, name: 'Advanced Words',    icon: '🔬', sub: 'GRE-level advanced vocabulary' },
];

let activeQuiz = null; // { levelId, questions, qIndex, correct, wrong }

function renderQuizLevels() {
  const list = document.getElementById('quiz-levels-list');
  list.innerHTML = '';
  QUIZ_LEVELS.forEach((ql, i) => {
    const isUnlocked = i === 0 || (state.quizLevelScores[i] >= 80); // prev level scored 80%
    const isDone     = state.quizLevelsCompleted.includes(ql.id);
    const score      = state.quizLevelScores[ql.id];
    const card = document.createElement('div');
    card.className = 'quiz-level-card' + (isUnlocked ? (isDone ? ' completed' : '') : ' locked');
    card.innerHTML = `
      <div class="qlc-left">
        <span class="qlc-icon">${ql.icon}</span>
        <div>
          <div class="qlc-title">Level ${ql.id}: ${ql.name}</div>
          <div class="qlc-sub">${ql.sub}${score !== undefined ? ' · Best: ' + score + '%' : ''}</div>
        </div>
      </div>
      <span class="qlc-badge ${isUnlocked ? (isDone ? 'done' : 'open') : 'locked'}">
        ${isUnlocked ? (isDone ? '✅ Done' : '▶ Start') : '🔒 Locked'}
      </span>`;
    if (isUnlocked) {
      card.addEventListener('click', () => startQuiz(ql.id));
    }
    list.appendChild(card);
  });
}

function startQuiz(levelId) {
  const pool = WORD_DICT.filter(w => w.level === levelId);
  if (pool.length === 0) { showToast('No words for this level yet!'); return; }
  const questions = pool.sort(() => Math.random() - 0.5).slice(0, 10);
  activeQuiz = { levelId, questions, qIndex: 0, correct: 0, wrong: 0 };
  document.getElementById('quiz-levels-list').classList.add('hidden');
  document.getElementById('quiz-active').classList.remove('hidden');
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-level-label').textContent = `Level ${levelId}`;
  loadQuizQuestion();
}

function loadQuizQuestion() {
  const { questions, qIndex } = activeQuiz;
  if (qIndex >= questions.length) { endQuiz(); return; }
  const q = questions[qIndex];
  document.getElementById('quiz-progress-label').textContent = `${qIndex + 1} / ${questions.length}`;
  document.getElementById('quiz-progress-bar').style.width = Math.round((qIndex / questions.length) * 100) + '%';
  document.getElementById('quiz-wrong-word').textContent = q.wrong;
  document.getElementById('quiz-feedback').className = 'answer-feedback hidden';
  // Generate options
  const others = WORD_DICT.filter(w => w.level === activeQuiz.levelId && w.wrong !== q.wrong)
    .map(w => w.correct).sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [q.correct, ...others].sort(() => Math.random() - 0.5);
  const optDiv = document.getElementById('quiz-options');
  optDiv.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.addEventListener('click', () => selectQuizOption(btn, opt, q.correct));
    optDiv.appendChild(btn);
  });
}

function selectQuizOption(btn, chosen, correct) {
  document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
  const feedback = document.getElementById('quiz-feedback');
  if (chosen === correct) {
    btn.classList.add('correct');
    feedback.className = 'answer-feedback correct';
    feedback.textContent = `✅ Correct! "${correct}" is right!`;
    playSound('correct');
    activeQuiz.correct++;
    state.totalCorrect++;
    addXP(15);
  } else {
    btn.classList.add('wrong');
    document.querySelectorAll('.quiz-option').forEach(b => { if (b.textContent === correct) b.classList.add('correct'); });
    feedback.className = 'answer-feedback wrong';
    feedback.textContent = `❌ Wrong! Correct: "${correct}"`;
    playSound('wrong');
    loseHeart();
    activeQuiz.wrong++;
    state.totalWrong++;
    state.missedWords[WORD_DICT.find(w => w.correct === correct)?.wrong || correct] = (state.missedWords[correct] || 0) + 1;
  }
  feedback.classList.remove('hidden');
  saveState();
  setTimeout(() => { activeQuiz.qIndex++; loadQuizQuestion(); }, 1400);
}

function endQuiz() {
  const { levelId, questions, correct, wrong } = activeQuiz;
  const score = Math.round((correct / questions.length) * 100);
  // Save score
  if (!state.quizLevelScores[levelId] || score > state.quizLevelScores[levelId]) {
    state.quizLevelScores[levelId] = score;
  }
  if (score >= 80 && !state.quizLevelsCompleted.includes(levelId)) {
    state.quizLevelsCompleted.push(levelId);
    addXP(50);
    launchConfetti();
  }
  const xpEarned = correct * 15;
  document.getElementById('quiz-active').classList.add('hidden');
  document.getElementById('quiz-result').classList.remove('hidden');
  document.getElementById('quiz-result-emoji').textContent = score >= 80 ? '🏆' : score >= 50 ? '😊' : '😞';
  document.getElementById('quiz-result-title').textContent = score >= 80 ? 'Excellent!' : score >= 50 ? 'Good effort!' : 'Keep practicing!';
  document.getElementById('quiz-res-correct').textContent = correct;
  document.getElementById('quiz-res-wrong').textContent = wrong;
  document.getElementById('quiz-res-score').textContent = score + '%';
  document.getElementById('quiz-res-xp').textContent = '+' + xpEarned;
  const unlockMsg = document.getElementById('quiz-unlock-msg');
  if (score >= 80 && levelId < 5) {
    unlockMsg.textContent = `🎉 Level ${levelId + 1} unlocked!`;
    unlockMsg.classList.remove('hidden');
  } else { unlockMsg.classList.add('hidden'); }
  document.getElementById('quiz-retry-btn').onclick = () => startQuiz(levelId);
  document.getElementById('quiz-back-btn').onclick = () => {
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-levels-list').classList.remove('hidden');
    renderQuizLevels();
  };
  checkBadges();
  saveState();
}

/* ==========================================================
   10. DAILY CHALLENGE
   ========================================================== */
function renderDaily() {
  const today = new Date().toDateString();
  document.getElementById('daily-date').textContent = new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const isDone = state.dailyChallengeDate === today;
  const tasks  = document.getElementById('daily-tasks');
  tasks.innerHTML = `
    <div class="daily-task-item">
      <span class="task-check">${isDone ? '✅' : '⭕'}</span>
      <div><div class="task-label">10 Word Corrections</div><div class="task-desc">Fix 10 misspelled words</div></div>
    </div>
    <div class="daily-task-item">
      <span class="task-check">${isDone ? '✅' : '⭕'}</span>
      <div><div class="task-label">5 Sentence Corrections</div><div class="task-desc">Fix 5 WhatsApp sentences</div></div>
    </div>
    <div class="daily-task-item">
      <span class="task-check">${isDone ? '✅' : '⭕'}</span>
      <div><div class="task-label">1 Typing Challenge</div><div class="task-desc">Complete a full sentence typing test</div></div>
    </div>`;
  if (isDone) {
    document.getElementById('daily-start-btn').classList.add('hidden');
    document.getElementById('daily-completed').classList.remove('hidden');
    document.getElementById('daily-xp-earned').textContent = '+50 XP earned!';
  } else {
    document.getElementById('daily-start-btn').classList.remove('hidden');
    document.getElementById('daily-completed').classList.add('hidden');
  }
}

function startDailyChallenge() {
  const today = new Date().toDateString();
  if (state.dailyChallengeDate === today) { showToast('Already completed today! 🎉'); return; }
  state.dailyChallengeDate = today;
  state.dailyChallengesDone++;
  addXP(50);
  updateStreak();
  saveState();
  renderDaily();
  launchConfetti();
  showToast('Daily Challenge marked complete! +50 XP 🎉');
  checkBadges();
}

/* ==========================================================
   11. STATISTICS
   ========================================================== */
function renderStats() {
  const total = state.totalCorrect + state.totalWrong;
  const acc   = total > 0 ? Math.round((state.totalCorrect / total) * 100) : 0;
  document.getElementById('stats-total-correct').textContent = state.totalCorrect;
  document.getElementById('stats-total-wrong').textContent   = state.totalWrong;
  document.getElementById('stats-accuracy').textContent      = acc + '%';
  document.getElementById('stats-best-streak').textContent   = state.bestStreak;
  // Chart
  renderProgressChart();
  // Weak words
  renderWeakWords();
}

function renderProgressChart() {
  const canvas = document.getElementById('progress-chart');
  if (!window.Chart) return;
  if (canvas._chartInstance) canvas._chartInstance.destroy();
  // Build last 7 days
  const days = [];
  const corrects = [];
  const wrongs   = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000).toDateString();
    days.push(new Date(Date.now() - i * 86400000).toLocaleDateString('en-IN', { weekday: 'short' }));
    const entry = state.dailyProgress.find(p => p.date === d);
    corrects.push(entry ? entry.correct : 0);
    wrongs.push(entry ? entry.wrong : 0);
  }
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#F0F0F0' : '#1A1A1A';
  const gridColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.07)';
  canvas._chartInstance = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: days,
      datasets: [
        { label: 'Correct', data: corrects, backgroundColor: '#58CC02', borderRadius: 6 },
        { label: 'Wrong',   data: wrongs,   backgroundColor: '#FF4B4B', borderRadius: 6 },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: textColor, font: { size: 11 } } } },
      scales: {
        x: { ticks: { color: textColor }, grid: { color: gridColor } },
        y: { ticks: { color: textColor, stepSize: 1 }, grid: { color: gridColor }, beginAtZero: true },
      },
    },
  });
}

function renderWeakWords() {
  const list = document.getElementById('weak-words-list');
  const entries = Object.entries(state.missedWords).sort((a, b) => b[1] - a[1]).slice(0, 10);
  if (entries.length === 0) { list.innerHTML = '<p class="empty-msg">No weak words yet. Keep practicing!</p>'; return; }
  list.innerHTML = '';
  entries.forEach(([wrong, count]) => {
    const entry = WORD_DICT.find(w => w.wrong === wrong);
    const el = document.createElement('div');
    el.className = 'weak-word-item';
    el.innerHTML = `
      <span class="weak-word-wrong">${wrong}</span>
      <span>→</span>
      <span class="weak-word-correct">${entry ? entry.correct : '?'}</span>
      <span class="miss-count">${count}✗</span>`;
    list.appendChild(el);
  });
}

/* ==========================================================
   12. SEARCH
   ========================================================== */
function doSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) { showToast('Enter a word to search!'); return; }
  const results = WORD_DICT.filter(w => w.wrong.includes(q) || w.correct.includes(q));
  const container = document.getElementById('search-results');
  container.innerHTML = '';
  if (results.length === 0) {
    container.innerHTML = '<p class="empty-msg">No results found. Try a different spelling!</p>';
    return;
  }
  results.slice(0, 12).forEach(r => {
    const el = document.createElement('div');
    el.className = 'search-result-card';
    el.innerHTML = `
      <div class="sr-wrong">✗ ${r.wrong}</div>
      <div class="sr-correct">✓ ${r.correct}</div>
      <span class="sr-tag">${r.category} · Level ${r.level}</span>
      ${r.explanation ? `<div class="sr-explanation">💡 ${r.explanation}</div>` : ''}`;
    container.appendChild(el);
  });
}

/* ==========================================================
   13. MISTAKES
   ========================================================== */
function renderMistakes() {
  const list = document.getElementById('mistakes-list');
  const entries = Object.entries(state.missedWords).sort((a, b) => b[1] - a[1]);
  if (entries.length === 0) { list.innerHTML = '<p class="empty-msg">No mistakes recorded yet. Keep practicing!</p>'; return; }
  list.innerHTML = '';
  entries.forEach(([wrong, count]) => {
    const entry = WORD_DICT.find(w => w.wrong === wrong);
    const el = document.createElement('div');
    el.className = 'mistake-item';
    el.innerHTML = `
      <span class="mi-wrong">${wrong}</span>
      <span class="mi-arrow">→</span>
      <span class="mi-correct">${entry ? entry.correct : '?'}</span>
      <span class="mi-count">${count}✗</span>`;
    list.appendChild(el);
  });
}

/* ==========================================================
   14. DRAWER
   ========================================================== */
function openDrawer() {
  document.getElementById('side-drawer').classList.add('open');
  document.getElementById('side-drawer').classList.remove('hidden');
  document.getElementById('drawer-overlay').classList.remove('hidden');
  document.getElementById('drawer-overlay').classList.add('open');
}
function closeDrawer() {
  document.getElementById('side-drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.add('hidden');
  document.getElementById('drawer-overlay').classList.remove('open');
}

/* ==========================================================
   15. DARK MODE
   ========================================================== */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
  document.getElementById('dark-toggle').textContent = state.darkMode ? '☀️' : '🌙';
}

/* ==========================================================
   16. RENDER ALL & INIT
   ========================================================== */
function renderAll() {
  updateTopBar();
  renderHome();
  renderQuizLevels();
  renderSentenceExamples();
  renderDaily();
  document.getElementById('hearts-display').textContent =
    '❤️'.repeat(Math.max(0, state.hearts)) + '🖤'.repeat(Math.max(0, 5 - state.hearts));
  applyTheme();
}

/* ==========================================================
   17. EVENT LISTENERS
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
  loadState();

  /* Splash → App */
  setTimeout(() => {
    document.getElementById('splash-screen').classList.add('fade-out');
    setTimeout(() => {
      document.getElementById('splash-screen').style.display = 'none';
      document.getElementById('app').classList.remove('hidden');
      renderAll();
      initPractice();
      updateStreak();
      navigate('home');
    }, 500);
  }, 2200);

  /* Bottom nav */
  document.querySelectorAll('.nav-item, [data-screen]').forEach(el => {
    el.addEventListener('click', () => {
      const s = el.dataset.screen;
      if (s) navigate(s);
    });
  });

  /* Drawer */
  document.getElementById('menu-btn').addEventListener('click', openDrawer);
  document.getElementById('close-drawer').addEventListener('click', closeDrawer);
  document.getElementById('drawer-overlay').addEventListener('click', closeDrawer);
  document.querySelectorAll('.drawer-nav li[data-screen]').forEach(li => {
    li.addEventListener('click', () => navigate(li.dataset.screen));
  });
  document.getElementById('reset-btn').addEventListener('click', resetState);
  document.getElementById('export-btn').addEventListener('click', exportProgress);

  /* Dark mode */
  document.getElementById('dark-toggle').addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    saveState();
    applyTheme();
    if (currentScreen === 'stats') renderProgressChart();
  });

  /* Sound */
  document.getElementById('sound-toggle').addEventListener('click', () => {
    state.soundOn = !state.soundOn;
    saveState();
    document.getElementById('sound-toggle').textContent = state.soundOn ? '🔊' : '🔇';
    showToast(state.soundOn ? 'Sound ON 🔊' : 'Sound OFF 🔇');
  });

  /* Level up & badge modals */
  document.getElementById('levelup-close').addEventListener('click', () => {
    document.getElementById('levelup-modal').classList.add('hidden');
  });
  document.getElementById('badge-close').addEventListener('click', () => {
    document.getElementById('badge-modal').classList.add('hidden');
  });

  /* ── Practice ── */
  document.getElementById('practice-check-btn').addEventListener('click', checkPractice);
  document.getElementById('practice-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const btn = document.getElementById('practice-check-btn');
      btn.click();
    }
  });
  document.getElementById('practice-skip-btn').addEventListener('click', () => {
    practiceIndex++;
    loadPracticeWord();
    document.getElementById('practice-check-btn').onclick = checkPractice;
  });
  document.getElementById('practice-level-select').addEventListener('change', () => initPractice());

  /* ── Sentence ── */
  document.getElementById('sentence-check-btn').addEventListener('click', doSentenceCorrection);

  /* ── Typing ── */
  document.getElementById('typing-new-btn').addEventListener('click', initTyping);
  document.getElementById('typing-submit-btn').addEventListener('click', submitTyping);
  document.getElementById('typing-again-btn').addEventListener('click', initTyping);
  document.getElementById('typing-input').addEventListener('input', () => {
    if (!typingStart && document.getElementById('typing-input').value.length > 0) {
      typingStart = Date.now();
      typingTimer = setInterval(updateTypingDisplay, 300);
    }
    updateTypingDisplay();
  });

  /* ── Quiz quit ── */
  document.getElementById('quiz-quit-btn').addEventListener('click', () => {
    document.getElementById('quiz-active').classList.add('hidden');
    document.getElementById('quiz-levels-list').classList.remove('hidden');
    renderQuizLevels();
    activeQuiz = null;
  });

  /* ── Daily ── */
  document.getElementById('daily-start-btn').addEventListener('click', startDailyChallenge);

  /* ── Search ── */
  document.getElementById('search-btn').addEventListener('click', () => {
    doSearch(document.getElementById('search-input').value);
  });
  document.getElementById('search-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch(document.getElementById('search-input').value);
  });

  /* ── Mistakes ── */
  document.getElementById('clear-mistakes-btn').addEventListener('click', () => {
    if (!confirm('Clear all mistake records?')) return;
    state.missedWords = {};
    state.revisionQueue = [];
    saveState();
    renderMistakes();
    showToast('Mistake records cleared!');
  });

  /* Init typing sentence */
  initTyping();

  /* Recover hearts every hour simulation */
  setInterval(() => {
    if (state.hearts < 5) {
      state.hearts = Math.min(5, state.hearts + 1);
      document.getElementById('hearts-display').textContent =
        '❤️'.repeat(state.hearts) + '🖤'.repeat(5 - state.hearts);
      saveState();
    }
  }, 3600000);
});