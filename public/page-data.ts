export interface Hero {
    id: string;
    name: string;
    media: {
      video?: string;
      photo?: string;
    };
    excerpt: string;
}
  
export interface Attorney {
  name: string;
  id: string;
  bio: string;
  experience: number;
  photo: string;
  video: string;
  specialty: string;
}
  
 export interface Practice {
    name: string;
    id: string;
    excerpt: string;
    photo?:string;
    photo2?:string;
    video?: Video;
    videoMobile?: Video;
}
  
 export interface Case {
    name: string;
    id: string;
    verdict: string;
    type: string;
    date: string;
    highlights: string[];
    excerpt: string;
}
  
 export interface Media {
    id: string;
    name: string;
    url: string;
    thumbnail: string;
    excerpt: string;
}
  
 export interface Post {
    title: string;
    id: string;
    date: string;
    author: string;
    body: string;
    category: string;
    tags: string[];
}

// types.ts

export interface Precedent {
  criminalCode: string;
  name: string;
  short: string;
  establishes: string;
}
export interface Result {
  criminalCode: string;
  name: string;
  short: string;
  video: string[];
  photo: string[];
}

export interface UnorderedItem {
  name: string;
  short: string;
}

export interface ValueDetail {
  name: string;
  ourValue: string[];
  commonSituations: string;
}

export interface PracticePage {
  name: string;
  overview: string;
  keySections: {
    brief: string;
    commonOffenses: UnorderedItem[];
  };
  takeAways: UnorderedItem[];
  value: ValueDetail[];
  precedents: Precedent[];
  examples: UnorderedItem[];
  consequences: {
    short: string[];
    photo: string;
  };
  faqs: UnorderedItem[];
};

export type FieldType = 'text' | 'email' | 'number' | 'textarea' | 'checkbox' | 'select' | 'radio' | 'date';

export interface ValidationRule {
  type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
  value?: number | string | RegExp | ((value: any) => boolean);
  message: string;
}

export interface FormField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[]; // Used for select and radio types
  validations?: ValidationRule[];
}

export interface CallToActionFormType {
  title: string;
  description?: string;
  fields: FormField[];
  submitButtonText: string;
  onSubmit: (formData: { [key: string]: any }) => void;
}

export interface Video {
  alt: string;
  url: string;
}

export interface PracticeAreaDetail {
  name: string;
  short: string;
  quote: string;
  video: Video;
  videoMobile: Video;
}

export interface CaseResult {
  caseName: string;
  caseId: string;
  description: string;
  outcome: string;
  attorney: string;
  date: string;
  details: string;
  clientName: string;
  practiceArea: string;
  verdictAmount?: number; // Optional field for monetary verdicts or settlements
  photo?: string; // Optional field for a photo related to the case
  video?: string;
}

export interface FirmPage {
  missionStatement: string;
  coreValues: CoreValue[];
  community: CommunityInvolvement[];
  ourApproach: Approach[];
  lawyers: Attorney[];
  historyLegacy: HistoryLegacy[];
  moduleButtons?: ModuleButton[];
}

export interface CoreValue {
  value: string;
  excerpt: string;
  videoMobileUrl?: string;
  videoUrl: string;
}

export interface CommunityInvolvement {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface Approach {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface HistoryLegacy {
  title: string;
  description: string;
  year?: number;
  imageUrl?: string;
  videoUrl?: string;
}

export interface ModuleButton {
  label: string;  // The text displayed on the button
  link: string;   // The URL the button will navigate to when clicked
  iconUrl?: string;  // Optional URL to an icon image displayed on the button
}


export const caseResults: CaseResult[] = [
  {
    caseName: "State vs. John Doe",
    caseId: "case001",
    description: "Defended John Doe in a high-profile criminal defense case involving allegations of fraud.",
    outcome: "Not Guilty",
    attorney: "John Smith",
    date: "2022-01-15",
    details: "John Doe was accused of committing financial fraud. The defense was able to provide evidence that proved his innocence beyond a reasonable doubt.",
    clientName: "John Doe",
    practiceArea: "Criminal Defense",
    photo: "https://images.pexels.com/photos/6077325/pexels-photo-6077325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    video: "https://videos.pexels.com/video-files/6101343/6101343-uhd_2732_1440_30fps.mp4",
  },
  {
    caseName: "Jane Smith vs. XYZ Corporation",
    caseId: "case002",
    description: "Represented Jane Smith in a personal injury case against XYZ Corporation for a workplace accident.",
    outcome: "Settled",
    attorney: "Thurgood Marshall",
    date: "2021-06-30",
    details: "Jane Smith suffered severe injuries due to XYZ Corporation's negligence in maintaining a safe working environment. The case was settled out of court for a significant sum.",
    clientName: "Jane Smith",
    practiceArea: "Personal Injury",
    verdictAmount: 500000,
    photo: "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    video: "https://videos.pexels.com/video-files/8731514/8731514-hd_1920_1080_25fps.mp4",
  },
  {
    caseName: "ACME Inc. Merger",
    caseId: "case003",
    description: "Provided legal counsel for the merger between ACME Inc. and Beta Corp.",
    outcome: "Successful Merger",
    attorney: "Barack Obama",
    date: "2023-03-10",
    details: "The merger process involved extensive negotiations and regulatory compliance checks. The merger was completed successfully, benefiting both companies.",
    clientName: "ACME Inc.",
    practiceArea: "Corporate Law",
    photo: "https://images.pexels.com/photos/261621/pexels-photo-261621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    video: "https://videos.pexels.com/video-files/7841873/7841873-hd_1920_1080_30fps.mp4",
  },
  {
    caseName: "Environmental Protection Agency vs. Green Solutions",
    caseId: "case004",
    description: "Defended Green Solutions in an environmental law case brought by the EPA.",
    outcome: "Reduced Penalties",
    attorney: "Johnnie Cochran",
    date: "2022-11-05",
    details: "Green Solutions was accused of violating environmental regulations. Through effective defense strategies, the penalties were significantly reduced.",
    clientName: "Green Solutions",
    practiceArea: "Environmental Law",
    photo: "https://images.pexels.com/photos/4946727/pexels-photo-4946727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    video: "https://videos.pexels.com/video-files/2933375/2933375-uhd_2560_1440_30fps.mp4",
  }
];


export const immediateHelpForm: CallToActionFormType = {
  title: "Get Immediate Help",
  description: "Contact us for immediate assistance with your legal issue.",
  fields: [
    {
      id: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      validations: [
        { type: "required", message: "Full name is required" },
        { type: "minLength", value: 2, message: "Full name must be at least 2 characters long" }
      ]
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      type: "text",
      placeholder: "Enter your phone number",
      validations: [
        { type: "required", message: "Phone number is required" },
        { type: "pattern", value: /^[0-9]{10,15}$/, message: "Enter a valid phone number" }
      ]
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      validations: [
        { type: "required", message: "Email is required" },
        { type: "pattern", value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Enter a valid email address" }
      ]
    },
    {
      id: "issue",
      label: "Describe Your Issue",
      type: "textarea",
      placeholder: "Provide a brief description of your legal issue",
      validations: [
        { type: "required", message: "Description is required" },
        { type: "minLength", value: 10, message: "Description must be at least 10 characters long" }
      ]
    }
  ],
  submitButtonText: "Get Help Now",
  onSubmit: (formData) => {
    console.log("Immediate Help Form submitted:", formData);
  }
};

export const blogNewsletterForm: CallToActionFormType = {
  title: "Subscribe to Our Blog and Newsletter",
  description: "Stay updated with the latest articles and news.",
  fields: [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
      validations: [
        { type: "required", message: "First name is required" },
        { type: "minLength", value: 2, message: "First name must be at least 2 characters long" }
      ]
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
      validations: [
        { type: "required", message: "Last name is required" },
        { type: "minLength", value: 2, message: "Last name must be at least 2 characters long" }
      ]
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
      validations: [
        { type: "required", message: "Email is required" },
        { type: "pattern", value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Enter a valid email address" }
      ]
    },
    {
      id: "subscribe",
      label: "Subscribe to:",
      type: "checkbox",
      options: ["Blog Updates", "Monthly Newsletter"],
      validations: []
    }
  ],
  submitButtonText: "Subscribe",
  onSubmit: (formData) => {
    console.log("Blog and Newsletter Subscription Form submitted:", formData);
  }
};

export const results: Result[] = [
  {
    criminalCode: "example-code1",
    name: "this is an example of a name1",
    short: "This is the example of a short, and some bio information1",
    video: ["https://www.example.com/1"],
    photo: ["https://www.example.com/1"],
  },
  {
    criminalCode: "example-code2",
    name: "this is an example of a name2",
    short: "This is the example of a short, and some bio information2",
    video: ["https://www.example.com/2"],
    photo: ["https://www.example.com/2"],
  },
  {
    criminalCode: "example-code3",
    name: "this is an example of a name3",
    short: "This is the example of a short, and some bio information3",
    video: ["https://www.example.com/3"],
    photo: ["https://www.example.com/3"],
  },
]

export const practicePages: PracticePage[] = [
  {
    name: "Criminal Law",
    overview: "An overview of criminal defense law, including the rights of the accused, stages of a criminal case, and defense strategies.",
    keySections: {
      brief: "Criminal defense law deals with defending individuals accused of committing crimes.",
      commonOffenses: [
        { name: "Assault", short: "Physical attack on another person." },
        { name: "Theft", short: "Unlawful taking of someone's property." }
      ]
    },
    takeAways: [
      { name: "Right to Attorney", short: "Every accused has the right to legal representation." },
      { name: "Burden of Proof", short: "The prosecution must prove guilt beyond a reasonable doubt." }
    ],
    value: [
      {
        name: "Protecting individual rights",
        ourValue: [
          "Ensuring due process is followed.",
          "Advising clients on their legal rights.",
          "Representing clients in court.",
          "Filing motions to suppress evidence.",
          "Negotiating plea deals."
        ],
        commonSituations: "Individuals may have their rights violated during arrests, interrogations, or searches and seizures."
      },
      {
        name: "Ensuring fair trial",
        ourValue: [
          "Selecting an impartial jury.",
          "Presenting evidence and witness testimony.",
          "Cross-examining prosecution witnesses.",
          "Objecting to improper evidence and statements.",
          "Providing effective closing arguments."
        ],
        commonSituations: "Accused individuals may face bias or procedural errors that compromise the fairness of their trial."
      }
    ],
    precedents: [
      {
        criminalCode: "123ABC",
        name: "Smith vs. State",
        short: "A landmark case defining the limits of self-defense.",
        establishes: "Established the legal boundaries of self-defense claims in criminal cases."
      }
    ],
    examples: [
      { name: "Self-defense Case", short: "A case where the defendant was acquitted on grounds of self-defense." },
      { name: "Mistaken Identity", short: "A case where the accused was wrongly identified and later exonerated." }
    ],
    consequences: {
      short: ["Jail time", "Fines", "Community service"],
      photo: "https://example.com/images/criminal-consequences.jpg"
    },
    faqs: [
      { name: "What is the first step after being arrested?", short: "Contact a criminal defense attorney immediately." },
      { name: "Can charges be dropped?", short: "Yes, under certain circumstances, charges can be dropped." }
    ]
  },
  {
    name: "Family Law",
    overview: "An overview of family law, covering divorce, child custody, and adoption processes.",
    keySections: {
      brief: "Family law encompasses legal issues related to family relationships.",
      commonOffenses: [
        { name: "Domestic Violence", short: "Abuse within a household." },
        { name: "Child Neglect", short: "Failure to provide for a child's basic needs." }
      ]
    },
    takeAways: [
      { name: "Best Interest of the Child", short: "Decisions should prioritize the child's well-being." },
      { name: "Equitable Distribution", short: "Assets are divided fairly, but not necessarily equally, in a divorce." }
    ],
    value: [
      {
        name: "Protecting family members",
        ourValue: [
          "Providing legal representation in cases of domestic violence.",
          "Assisting with child custody arrangements.",
          "Advising on legal rights in divorce proceedings.",
          "Facilitating adoption processes.",
          "Mediating family disputes to avoid court."
        ],
        commonSituations: "Families may face legal challenges related to divorce, custody, or domestic violence."
      },
      {
        name: "Resolving disputes amicably",
        ourValue: [
          "Mediating between parties to reach a settlement.",
          "Drafting prenuptial and postnuptial agreements.",
          "Advising on co-parenting arrangements.",
          "Helping to divide marital assets fairly.",
          "Counseling clients on their legal options."
        ],
        commonSituations: "Disputes over custody, property division, and spousal support often require legal intervention."
      }
    ],
    precedents: [
      {
        criminalCode: "456DEF",
        name: "Doe vs. Roe",
        short: "A case setting a precedent for joint custody arrangements.",
        establishes: "Established the standard for determining joint custody in family law cases."
      }
    ],
    examples: [
      { name: "Custody Battle", short: "A case where parents fought for custody of their child." },
      { name: "Adoption Success", short: "A case where a family successfully adopted a child." }
    ],
    consequences: {
      short: ["Loss of custody", "Restraining orders"],
      photo: "https://example.com/images/family-consequences.jpg"
    },
    faqs: [
      { name: "How is child support calculated?", short: "Based on the income of both parents and the needs of the child." },
      { name: "What are grounds for divorce?", short: "Common grounds include irreconcilable differences and infidelity." }
    ]
  },
  {
    name: "Corporate Law",
    overview: "An overview of corporate law, focusing on governance, mergers and acquisitions, and regulatory compliance.",
    keySections: {
      brief: "Corporate law deals with the formation, operation, and dissolution of corporations.",
      commonOffenses: [
        { name: "Fraud", short: "Deceptive practices to secure unfair or unlawful gain." },
        { name: "Insider Trading", short: "Illegal trading based on non-public information." }
      ]
    },
    takeAways: [
      { name: "Corporate Governance", short: "Proper management and oversight of corporate entities." },
      { name: "Regulatory Compliance", short: "Adherence to laws and regulations governing business operations." }
    ],
    value: [
      {
        name: "Ensuring lawful business practices",
        ourValue: [
          "Advising on regulatory compliance.",
          "Drafting and reviewing contracts.",
          "Representing corporations in legal disputes.",
          "Conducting internal audits to prevent fraud.",
          "Providing counsel on mergers and acquisitions."
        ],
        commonSituations: "Businesses may face legal challenges related to compliance, contracts, and mergers."
      },
      {
        name: "Protecting shareholder interests",
        ourValue: [
          "Advising on shareholder rights.",
          "Ensuring transparency in corporate governance.",
          "Representing shareholders in disputes.",
          "Facilitating fair distribution of profits.",
          "Providing legal counsel during shareholder meetings."
        ],
        commonSituations: "Shareholders may need legal assistance in cases of mismanagement or unfair practices."
      }
    ],
    precedents: [
      {
        criminalCode: "789GHI",
        name: "Acme Corp vs. Federal Trade Commission",
        short: "A case that defined fair competition practices.",
        establishes: "Established guidelines for fair competition and antitrust regulations."
      }
    ],
    examples: [
      { name: "Mergers and Acquisitions", short: "A case study on successful corporate mergers." },
      { name: "Compliance Breach", short: "A case where a corporation was fined for regulatory non-compliance." }
    ],
    consequences: {
      short: ["Fines", "Dissolution of the corporation"],
      photo: "https://example.com/images/corporate-consequences.jpg"
    },
    faqs: [
      { name: "What is corporate governance?", short: "The system of rules and practices by which a company is directed and controlled." },
      { name: "How are mergers regulated?", short: "Through antitrust laws and regulatory bodies to ensure fair competition." }
    ]
  },
  {
    name: "Environmental Law",
    overview: "An overview of environmental law, addressing regulations on pollution control, land use, and conservation.",
    keySections: {
      brief: "Environmental law focuses on protecting the environment through regulations and legal standards.",
      commonOffenses: [
        { name: "Pollution", short: "Contamination of air, water, or soil." },
        { name: "Illegal Dumping", short: "Unauthorized disposal of waste." }
      ]
    },
    takeAways: [
      { name: "Sustainability", short: "Laws promoting long-term ecological balance." },
      { name: "Regulatory Compliance", short: "Adherence to environmental regulations to avoid penalties." }
    ],
    value: [
      {
        name: "Protecting natural resources",
        ourValue: [
          "Advocating for stricter environmental regulations.",
          "Representing clients in environmental litigation.",
          "Advising businesses on sustainable practices.",
          "Negotiating settlements for environmental damages.",
          "Conducting environmental impact assessments."
        ],
        commonSituations: "Individuals and companies may face legal issues related to pollution, land use, and conservation."
      },
      {
        name: "Ensuring public health",
        ourValue: [
          "Monitoring and enforcing environmental standards.",
          "Representing communities affected by pollution.",
          "Advising on public health regulations.",
          "Litigating against companies violating environmental laws.",
          "Promoting policies for clean air and water."
        ],
        commonSituations: "Public health can be compromised by environmental hazards like pollution and illegal dumping."
      }
    ],
    precedents: [
      {
        criminalCode: "101JLK",
        name: "Greenpeace vs. City Council",
        short: "A case that enforced stricter pollution controls.",
        establishes: "Set a precedent for local governments to enforce environmental regulations."
      }
    ],
    examples: [
      { name: "Pollution Control Case", short: "A case where a company was penalized for excessive emissions." },
      { name: "Conservation Success", short: "A case where a region was protected for its ecological significance." }
    ],
    consequences: {
      short: ["Fines", "Operational shutdowns", "Legal actions"],
      photo: "https://example.com/images/environmental-consequences.jpg"
    },
    faqs: [
      { name: "What are the major environmental laws?", short: "Clean Air Act, Clean Water Act, and Endangered Species Act." },
      { name: "How can companies reduce their environmental impact?", short: "By implementing sustainable practices and complying with regulations." }
    ]
  },
  {
    name: "Personal Injury",
    overview: "An overview of personal injury law, focusing on compensation for injuries caused by accidents or negligence.",
    keySections: {
      brief: "Personal injury law provides legal remedies for individuals who have been harmed due to the negligence or wrongful actions of others.",
      commonOffenses: [
        { name: "Car Accidents", short: "Injuries resulting from vehicle collisions." },
        { name: "Medical Malpractice", short: "Harm caused by negligent healthcare professionals." }
      ]
    },
    takeAways: [
      { name: "Compensation", short: "Victims can receive financial compensation for their injuries." },
      { name: "Legal Representation", short: "It's important to have legal help to navigate personal injury claims." }
    ],
    value: [
      {
        name: "Ensuring justice for victims",
        ourValue: [
          "Representing clients in personal injury claims.",
          "Negotiating settlements with insurance companies.",
          "Advising on the legal process for compensation.",
          "Gathering evidence to support claims.",
          "Advocating for fair compensation in court."
        ],
        commonSituations: "Individuals may be injured in accidents, medical malpractice, or by defective products."
      },
      {
        name: "Holding responsible parties accountable",
        ourValue: [
          "Filing lawsuits against negligent parties.",
          "Investigating incidents to determine fault.",
          "Ensuring compliance with safety standards.",
          "Representing clients in product liability cases.",
          "Advocating for policy changes to prevent future harm."
        ],
        commonSituations: "Victims of negligence or wrongful actions may need legal assistance to hold the responsible parties accountable."
      }
    ],
    precedents: [
      {
        criminalCode: "202MNK",
        name: "Smith vs. Hospital",
        short: "A case that defined standards for medical malpractice claims.",
        establishes: "Established the criteria for proving negligence in medical malpractice cases."
      }
    ],
    examples: [
      { name: "Slip and Fall", short: "A case where a person was compensated for injuries from a fall on unsafe property." },
      { name: "Product Liability", short: "A case where a defective product caused injury and led to compensation." }
    ],
    consequences: {
      short: ["Medical bills", "Lost wages", "Pain and suffering"],
      photo: "https://example.com/images/personal-injury-consequences.jpg"
    },
    faqs: [
      { name: "What should I do after a car accident?", short: "Seek medical attention and consult a personal injury attorney." },
      { name: "How long do I have to file a personal injury claim?", short: "The statute of limitations varies by state, typically 1-3 years." }
    ]
  }
];
  
export const heros: Hero[] = [
    {
        "id": "hero1",
        "name": "Justice for All",
        "media": {
          "video": "https://example.com/videos/justice-for-all.mp4",
          "photo": "https://example.com/images/justice-for-all.jpg"
        },
        "excerpt": "Our law firm is committed to delivering justice and ensuring that your rights are protected. Watch our video to learn more about how we can help you."
      },
      {
        "id": "hero2",
        "name": "Expert Legal Advice",
        "media": {
          "photo": "https://example.com/images/expert-legal-advice.jpg"
        },
        "excerpt": "With over 30 years of experience, our team of attorneys provides expert legal advice to help you navigate complex legal issues. Contact us today for a consultation."
      },
      {
        "id": "hero3",
        "name": "Client Success Stories",
        "media": {
          "video": "https://example.com/videos/client-success-stories.mp4"
        },
        "excerpt": "Hear from our clients about their success stories and how our legal expertise has made a difference in their lives. Watch now and see why we are the trusted choice."
      },
];

export const attorneys: Attorney[] = [
  {
    name: "Mohamed Nasser",
    id: "A12345678",
    bio: "Mohamed Nasser is a senior partner at our law firm with over 25 years of experience in criminal defense and personal injury law. He has a proven track record of winning high-profile cases and is dedicated to providing exceptional legal representation for his clients.",
    photo: "https://aiotl.org/wp-content/uploads/2019/08/PLG2-260x173.jpg",
    video: "https://example.com/videos/john-smith-intro.mp4",
    experience: 25.3,
    specialty: "Criminal Defense"
  },
  {
    name: "Thurgood Marshall",
    id: "B87654321",
    bio: "Thurgood Marshall was the first African American Supreme Court Justice. He played a pivotal role in the fight for civil rights and was known for his victory in the landmark case Brown v. Board of Education, which helped end racial segregation in public schools.",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNSveyLD6w2qSeevsFhXgTe2jad8HO0y3SCTTcopQkfPlZ5kF",
    video: "https://example.com/videos/thurgood-marshall-intro.mp4",
    experience: 35.0,
    specialty: "Civil Rights"
  },
  {
    name: "Barack Obama",
    id: "C13579246",
    bio: "Barack Obama served as the 44th President of the United States and is a former U.S. Senator from Illinois. Before his presidency, he was a civil rights attorney and law professor, known for his work in community organizing and advocacy for social justice.",
    photo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlJ4ZwNR5h_VyPNDygNN7JhWkqdoiL3I-QJ6c6k-xo7PiAKo5u",
    video: "https://example.com/videos/barack-obama-intro.mp4",
    experience: 20.0,
    specialty: "Civil Rights"
  },
  {
    name: "Johnnie Cochran",
    id: "D24681357",
    bio: "Johnnie Cochran was a high-profile attorney best known for his role in the defense and acquittal of O.J. Simpson. He was celebrated for his courtroom skills and his passionate advocacy for civil rights and social justice.",
    photo: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcS7oq48B8KrKUdKUQ39W2JdCn6OfE4by6__JHUaM2VImDTuBmeATFi9vU9w3mcwibF7BzSpStLpLfmKIIs",
    video: "https://example.com/videos/johnnie-cochran-intro.mp4",
    experience: 30.2,
    specialty: "Criminal Defense"
  },
  {
    name: "John Smith",
    id: "E13572468",
    bio: "John Smith is a senior partner at our law firm with over 25 years of experience in criminal defense and personal injury law. He has a proven track record of winning high-profile cases and is dedicated to providing exceptional legal representation for his clients.",
    photo: "https://sandbox.lassiwithlavina.com/wp-content/uploads/2015/10/Raja-Rajeshwari.jpg",
    video: "https://example.com/videos/john-smith-intro.mp4",
    experience: 25.3,
    specialty: "Criminal Defense"
  },
  {
    name: "Thurgood Marshall",
    id: "F24681357",
    bio: "Thurgood Marshall was the first African American Supreme Court Justice. He played a pivotal role in the fight for civil rights and was known for his victory in the landmark case Brown v. Board of Education, which helped end racial segregation in public schools.",
    photo: "https://i0.wp.com/www.washingtoninformer.com/wp-content/uploads/2017/05/thurgoodmarshall1_tmc_web120.jpg?fit=840%2C480&ssl=1",
    video: "https://example.com/videos/thurgood-marshall-intro.mp4",
    experience: 35.0,
    specialty: "Civil Rights"
  },
  {
    name: "Barack Obama",
    id: "G13579246",
    bio: "Barack Obama served as the 44th President of the United States and is a former U.S. Senator from Illinois. Before his presidency, he was a civil rights attorney and law professor, known for his work in community organizing and advocacy for social justice.",
    photo: "https://cdn.britannica.com/19/101219-050-A07A26EF/Barack-Obama.jpg",
    video: "https://example.com/videos/barack-obama-intro.mp4",
    experience: 20.0,
    specialty: "Civil Rights"
  },
  {
    name: "Johnnie Cochran",
    id: "H24681357",
    bio: "Johnnie Cochran was a high-profile attorney best known for his role in the defense and acquittal of O.J. Simpson. He was celebrated for his courtroom skills and his passionate advocacy for civil rights and social justice.",
    photo: "https://lovelace-media.imgix.net/getty/51991202.jpg",
    video: "https://example.com/videos/johnnie-cochran-intro.mp4",
    experience: 30.2,
    specialty: "Criminal Defense"
  },
  {
    name: "Mahatma Gandhi",
    id: "I13572468",
    bio: "Mahatma Gandhi was a senior advocate and leader renowned for his unwavering commitment to civil rights and social justice. With over 30 years of experience in non-violent resistance and legal advocacy, he played a pivotal role in India's struggle for independence. Gandhi's approach to law and justice was characterized by his dedication to truth and non-violence, earning him global recognition and respect. His exceptional ability to mobilize and inspire millions has left an indelible mark on history, making him a revered figure in the fight for human rights and dignity.",
    photo: "https://res.cloudinary.com/dkplc2mbj/image/upload/v1612161358/mahatma_gandhi_9a7bf75be9.jpg",
    video: "https://example.com/videos/john-smith-intro.mp4",
    experience: 30,
    specialty: "Criminal Defense"
  },
  {
    name: "Thurgood Marshall",
    id: "J24681357",
    bio: "Thurgood Marshall was the first African American Supreme Court Justice. He played a pivotal role in the fight for civil rights and was known for his victory in the landmark case Brown v. Board of Education, which helped end racial segregation in public schools.",
    photo: "https://i0.wp.com/heysistah.com/wp-content/uploads/2018/07/Thurgood-Marshall.png?fit=600%2C338&ssl=1",
    video: "https://example.com/videos/thurgood-marshall-intro.mp4",
    experience: 35.0,
    specialty: "Civil Rights"
  },
  {
    name: "Barack Obama",
    id: "K13579246",
    bio: "Barack Obama served as the 44th President of the United States and is a former U.S. Senator from Illinois. Before his presidency, he was a civil rights attorney and law professor, known for his work in community organizing and advocacy for social justice.",
    photo: "https://ichef.bbci.co.uk/news/480/cpsprodpb/12E3F/production/_132957377_obama_getty.jpg",
    video: "https://example.com/videos/barack-obama-intro.mp4",
    experience: 20.0,
    specialty: "Civil Rights"
  },
  {
    name: "Johnnie Cochran",
    id: "L24681357",
    bio: "Johnnie Cochran was a high-profile attorney best known for his role in the defense and acquittal of O.J. Simpson. He was celebrated for his courtroom skills and his passionate advocacy for civil rights and social justice.",
    photo: "https://www.hashemilaw.com/wp-content/uploads/2014/08/johnnie.jpg",
    video: "https://example.com/videos/johnnie-cochran-intro.mp4",
    experience: 30.2,
    specialty: "Criminal Defense"
  },
];

export const practiceAreaDetails: PracticeAreaDetail[] = [
  {
    name: "Criminal Law",
    short: "Defense against criminal charges",
    quote: "Protecting the rights of individuals accused of crimes is crucial to ensuring justice and fairness.",
    video: {
      alt: "Overview of Criminal Law",
      url: "practice-area-videos/cl-land-high.mp4"
    },
    videoMobile: {
      alt: "Criminal Law on Mobile",
      url: "practice-area-videos/cl-port-high.mp4"
    }
  },
  {
    name: "Family Law",
    short: "Legal matters involving family relationships",
    quote: "Protecting families and ensuring their legal matters are handled with care and compassion.",
    video: {
      alt: "Overview of Family Law",
      url: "practice-area-videos/fl-land-high.mp4"
    },
    videoMobile: {
      alt: "Family Law on Mobile",
      url: "practice-area-videos/fl-port-high.mp4"
    }
  },
  {
    name: "Corporate Law",
    short: "Corporate governance and business regulations",
    quote: "Protecting businesses and ensuring compliance with regulations to foster fair competition and growth.",
    video: {
      alt: "Overview of Corporate Law",
      url: "practice-area-videos/corp-land-high.mp4"
    },
    videoMobile: {
      alt: "Corporate Law on Mobile",
      url: "practice-area-videos/corp-port-high.mp4"
    }
  },
  {
    name: "Environmental Law",
    short: "Regulations for protecting the environment",
    quote: "Protecting the environment is essential for sustaining our planet for future generations.",
    video: {
      alt: "Overview of Environmental Law",
      url: "practice-area-videos/envi-land-high.mp4"
    },
    videoMobile: {
      alt: "Environmental Law on Mobile",
      url: "practice-area-videos/envi-port-high.mp4"
    }
  },
  {
    name: "Personal Injury",
    short: "Compensation for injuries caused by accidents or negligence",
    quote: "Protecting the rights of those injured due to negligence and ensuring they receive fair compensation.",
    video: {
      alt: "Overview of Personal Injury Law",
      url: "practice-area-videos/pi-land-high.mp4"
    },
    videoMobile: {
      alt: "Personal Injury Law on Mobile",
      url: "practice-area-videos/pi-port-high.mp4"
    }
  }
];

export const practiceAreas: Practice[] = [
  {
      name: "Criminal Law",
      id: "practice1",
      excerpt: "Our criminal defense practice provides robust representation for individuals facing criminal charges, ensuring their rights are protected throughout the legal process.",
      photo: "https://images.pexels.com/photos/8111865/pexels-photo-8111865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      photo2: "https://images.pexels.com/photos/8111815/pexels-photo-8111815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      video: {
        alt: "Overview of Criminal Law",
        url: "practice-area-videos/cl-land-high.mp4"
      },
      videoMobile: {
        alt: "Criminal Law on Mobile",
        url: "practice-area-videos/cl-port-high.mp4"
      }
  },
  {
      name: "Family Law",
      id: "practice2",
      excerpt: "Our family law practice offers compassionate and comprehensive services for divorce, child custody, and other family-related legal matters, helping clients navigate these sensitive issues with care.",
      photo: "https://images.pexels.com/photos/20624579/pexels-photo-20624579/free-photo-of-mother-and-father-carrying-son-on-footpath-at-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      photo2: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      video: {
        alt: "Overview of Family Law",
        url: "practice-area-videos/fl-land-high.mp4"
      },
      videoMobile: {
        alt: "Family Law on Mobile",
        url: "practice-area-videos/fl-port-high.mp4"
      }
  },
  {
      name: "Personal Injury",
      id: "practice3",
      excerpt: "Our personal injury practice is dedicated to helping clients receive the compensation they deserve for injuries sustained due to accidents, negligence, or malpractice.",
      photo: "https://images.pexels.com/photos/6519912/pexels-photo-6519912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      photo2: "https://images.pexels.com/photos/10395785/pexels-photo-10395785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      video: {
        alt: "Overview of Personal Injury Law",
        url: "practice-area-videos/pi-land-high.mp4"
      },
      videoMobile: {
        alt: "Personal Injury Law on Mobile",
        url: "practice-area-videos/pi-port-high.mp4"
      }
  },
  {
      name: "Corporate Law",
      id: "practice4",
      excerpt: "Our corporate law practice provides expert legal advice to businesses of all sizes, covering corporate governance, mergers and acquisitions, compliance, and more.",
      photo: "https://images.pexels.com/photos/5313132/pexels-photo-5313132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      photo2: "https://images.pexels.com/photos/4270292/pexels-photo-4270292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      video: {
        alt: "Overview of Corporate Law",
        url: "practice-area-videos/corp-land-high.mp4"
      },
      videoMobile: {
        alt: "Corporate Law on Mobile",
        url: "practice-area-videos/corp-port-high.mp4"
      }
  },
  {
      name: "Environmental Law",
      id: "practice5",
      excerpt: "Our environmental law practice focuses on regulatory compliance, pollution control, and sustainability, representing clients in matters involving environmental regulations and land use.",
      photo: "https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      photo2: "https://images.pexels.com/photos/14569237/pexels-photo-14569237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      video: {
        alt: "Overview of Environmental Law",
        url: "practice-area-videos/envi-land-high.mp4"
      },
      videoMobile: {
        alt: "Environmental Law on Mobile",
        url: "practice-area-videos/envi-port-high.mp4"
      }
  }
];

export const cases: Case[] = [
    {
        "name": "State vs. John Doe",
        "id": "case1",
        "verdict": "Not Guilty",
        "type": "Criminal Defense",
        "date": "2023-05-14",
        "highlights": [
          "Successfully argued for the exclusion of key evidence",
          "Demonstrated alibi through witness testimony",
          "Proved police misconduct during investigation"
        ],
        "excerpt": "In this high-profile criminal defense case, our client John Doe was found not guilty after a thorough defense strategy revealed critical flaws in the prosecution's case."
    },
    {
        "name": "Jane Smith vs. XYZ Corporation",
        "id": "case2",
        "verdict": "Settled",
        "type": "Personal Injury",
        "date": "2022-11-30",
        "highlights": [
          "Secured a substantial settlement for the client",
          "Provided expert medical testimony",
          "Negotiated favorable terms without going to trial"
        ],
        "excerpt": "This personal injury case was settled out of court, with our client Jane Smith receiving a substantial settlement for injuries sustained due to XYZ Corporation's negligence."
    },
    {
        "name": "In re Johnson Family Trust",
        "id": "case3",
        "verdict": "Granted",
        "type": "Family Law",
        "date": "2021-08-22",
        "highlights": [
          "Successfully restructured the family trust",
          "Ensured fair distribution of assets",
          "Resolved disputes among family members"
        ],
        "excerpt": "In this family law case, we successfully restructured the Johnson Family Trust to ensure a fair distribution of assets, resolving long-standing disputes among family members."
    },
    {
        "name": "Acme Corp. Merger",
        "id": "case4",
        "verdict": "Approved",
        "type": "Corporate Law",
        "date": "2023-03-19",
        "highlights": [
          "Navigated complex regulatory requirements",
          "Facilitated smooth transition for both companies",
          "Ensured compliance with all legal standards"
        ],
        "excerpt": "Our corporate law team successfully facilitated the merger of Acme Corp. with another major company, ensuring compliance with regulatory requirements and a smooth transition."
    },
    {
        "name": "In re Johnson Family Trust",
        "id": "case3",
        "verdict": "Granted",
        "type": "Family Law",
        "date": "2021-08-22",
        "highlights": [
          "Successfully restructured the family trust",
          "Ensured fair distribution of assets",
          "Resolved disputes among family members"
        ],
        "excerpt": "In this family law case, we successfully restructured the Johnson Family Trust to ensure a fair distribution of assets, resolving long-standing disputes among family members."
    },
    {
        "name": "Green Earth vs. Polluter Inc.",
        "id": "case5",
        "verdict": "Favorable Judgment",
        "type": "Environmental Law",
        "date": "2022-06-10",
        "highlights": [
          "Proved violations of environmental regulations",
          "Secured substantial damages for cleanup",
          "Set a precedent for future environmental cases"
        ],
        "excerpt": "In this landmark environmental law case, our firm secured a favorable judgment against Polluter Inc. for multiple violations of environmental regulations, resulting in significant damages awarded for cleanup efforts."
    },
]

export const media: Media[] = [
    {
        "id": "media1",
        "name": "Justice for All",
        "url": "https://example.com/videos/justice-for-all.mp4",
        "thumbnail": "https://example.com/images/thumbnails/justice-for-all.jpg",
        "excerpt": "Watch our video to learn how our law firm is committed to delivering justice and protecting your rights."
    },
    {
        "id": "media2",
        "name": "Expert Legal Advice",
        "url": "https://example.com/videos/expert-legal-advice.mp4",
        "thumbnail": "https://example.com/images/thumbnails/expert-legal-advice.jpg",
        "excerpt": "Discover how our team of attorneys provides expert legal advice to help you navigate complex legal issues."
    },
    {
        "id": "media3",
        "name": "Client Success Stories",
        "url": "https://example.com/videos/client-success-stories.mp4",
        "thumbnail": "https://example.com/images/thumbnails/client-success-stories.jpg",
        "excerpt": "Hear from our clients about their success stories and how our legal expertise has made a difference in their lives."
    },
    {
        "id": "media4",
        "name": "Understanding Family Law",
        "url": "https://example.com/videos/understanding-family-law.mp4",
        "thumbnail": "https://example.com/images/thumbnails/understanding-family-law.jpg",
        "excerpt": "This video explains the various aspects of family law and how we can help you with divorce, child custody, and more."
   },
   {
    "id": "media5",
    "name": "Corporate Law Insights",
    "url": "https://example.com/videos/corporate-law-insights.mp4",
    "thumbnail": "https://example.com/images/thumbnails/corporate-law-insights.jpg",
    "excerpt": "Gain insights into corporate law and how our firm assists businesses with governance, mergers, and compliance."
    },
];

export const posts: Post[] = [ 
    {
        "title": "Understanding Your Rights: A Guide to Criminal Defense",
        "id": "post1",
        "date": "2023-06-01",
        "author": "John Smith",
        "body": "In this post, we explore the basics of criminal defense law, including your rights during an arrest, the importance of legal representation, and what to expect during a trial. Knowing your rights can make a significant difference in the outcome of your case.",
        "category": "Criminal Defense",
        "tags": ["criminal defense", "legal rights", "trial process"]
    },
    {
        "title": "Navigating the Divorce Process: Tips and Advice",
        "id": "post2",
        "date": "2023-05-15",
        "author": "Jane Doe",
        "body": "Divorce can be a challenging and emotional process. In this post, we provide tips and advice on how to navigate the divorce process, from filing for divorce to reaching a settlement. We also discuss common issues such as child custody and property division.",
        "category": "Family Law",
        "tags": ["divorce", "family law", "child custody", "settlement"]
    },
    {
        "title": "Personal Injury Claims: What You Need to Know",
        "id": "post3",
        "date": "2023-04-20",
        "author": "Robert Brown",
        "body": "If you've been injured due to someone else's negligence, you may be entitled to compensation. This post covers the essentials of personal injury claims, including how to file a claim, what types of damages you can recover, and the role of a personal injury attorney.",
        "category": "Personal Injury",
        "tags": ["personal injury", "compensation", "negligence"]
    },
    {
        "title": "Corporate Compliance: Ensuring Your Business Meets Legal Standards",
        "id": "post4",
        "date": "2023-03-10",
        "author": "Emily Johnson",
        "body": "Compliance with legal standards is crucial for businesses of all sizes. In this post, we discuss the importance of corporate compliance, common compliance issues, and how to develop a compliance program that protects your business and meets regulatory requirements.",
        "category": "Corporate Law",
        "tags": ["corporate law", "compliance", "regulations"]
    },
    {
        "title": "Environmental Law: Protecting Our Planet",
        "id": "post5",
        "date": "2023-02-28",
        "author": "Emily Johnson",
        "body": "Environmental law plays a vital role in protecting our planet. This post provides an overview of environmental law, including key regulations, recent legal developments, and how individuals and businesses can ensure compliance with environmental standards.",
        "category": "Environmental Law",
        "tags": ["environmental law", "regulations", "sustainability"]
    },
]

export const pages = [
    "Practice Areas",
    "The Firm",
    "Results",
    "Media & News",
    "Contact",
];

export const freeConsultationForm: CallToActionFormType = {
  title: "Free Consultation",
  description: "Please fill out the form below to schedule your free consultation with our experienced attorneys.",
  fields: [
    {
      id: "fullName",
      label: "Full Name",
      type: "text" as FieldType,
      placeholder: "Enter your full name",
      validations: [
        { type: 'required', message: "Full Name is required" } as ValidationRule,
        { type: 'minLength', value: 3, message: "Full Name must be at least 3 characters" } as ValidationRule
      ]
    },
    {
      id: "email",
      label: "Email",
      type: "email" as FieldType,
      placeholder: "Enter your email address",
      validations: [
        { type: 'required', message: "Email is required" } as ValidationRule,
        { type: 'pattern', value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" } as ValidationRule
      ]
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      type: "number" as FieldType,
      placeholder: "Enter your phone number",
      validations: [
        { type: 'required', message: "Phone Number is required" } as ValidationRule,
        { type: 'pattern', value: /^\d{10}$/, message: "Enter a valid 10-digit phone number" } as ValidationRule
      ]
    },
    {
      id: "caseType",
      label: "Case Type",
      type: "select" as FieldType,
      options: ["Criminal Defense", "Family Law", "Corporate Law", "Environmental Law", "Personal Injury"],
      validations: [
        { type: 'required', message: "Please select a case type" } as ValidationRule
      ]
    },
    {
      id: "preferredDate",
      label: "Preferred Consultation Date",
      type: "date" as FieldType,
      placeholder: "Select a date",
      validations: [
        { type: 'required', message: "Please select a preferred consultation date" } as ValidationRule
      ]
    },
    {
      id: "description",
      label: "Brief Description of Your Case",
      type: "textarea" as FieldType,
      placeholder: "Provide a brief description of your case",
      validations: [
        { type: 'required', message: "Case description is required" } as ValidationRule,
        { type: 'minLength', value: 20, message: "Description must be at least 20 characters" } as ValidationRule
      ]
    },
    {
      id: "consent",
      label: "I agree to the terms and conditions",
      type: "checkbox" as FieldType,
      validations: [
        { type: 'required', message: "You must agree to the terms and conditions" } as ValidationRule
      ]
    }
  ],
  submitButtonText: "Schedule Consultation",
  onSubmit: (formData: { [key: string]: any }) => {
    // Handle form submission
    console.log("Form Data Submitted:", formData);
  }
};


export const firmPage: FirmPage = {
  missionStatement: "Our mission is to protect and defend the rights and lives of our clients, ensuring justice and fairness in every case we handle.",
  
  coreValues: [
    {
      value: "Integrity",
      excerpt: "We uphold the highest standards of integrity in all our actions, ensuring trust and transparency.",
      videoMobileUrl: "the-firm-videos/integrity.mp4",
      videoUrl: "the-firm-videos/integrity.mp4"
    },
    {
      value: "Compassion",
      excerpt: "Our compassionate approach ensures that we understand and address the unique needs of each client.",
      videoMobileUrl: "the-firm-videos/compassion.mp4",
      videoUrl: "the-firm-videos/compassion.mp4"
    },
    {
      value: "Excellence",
      excerpt: "We strive for excellence in every aspect of our practice, providing top-notch legal services.",
      videoMobileUrl: "the-firm-videos/excellenceMobile.mp4",
      videoUrl: "the-firm-videos/excellence.mp4"
    },
    {
      value: "Commitment",
      excerpt: "Our commitment to our clients and their cases drives us to achieve the best possible outcomes.",
      videoMobileUrl: "the-firm-videos/commitmentMobile.mp4",
      videoUrl: "the-firm-videos/commitment.mp4"
    },
    {
      value: "Innovation",
      excerpt: "We leverage innovative solutions and strategies to navigate complex legal challenges.",
      videoMobileUrl: "the-firm-videos/innovation.mp4",
      videoUrl: "the-firm-videos/innovation.mp4"
    }
  ],
  
  community: [
    {
      title: "Legal Aid Clinic",
      description: "Our firm organizes monthly legal aid clinics to provide free legal advice and assistance to the underserved members of our community.",
      imageUrl: "https://example.com/images/legal-aid-clinic.jpg",
      videoUrl: "https://example.com/videos/legal-aid-clinic.mp4"
    },
    {
      title: "Scholarship Program",
      description: "We sponsor an annual scholarship program to support students pursuing careers in law, fostering the next generation of legal professionals.",
      imageUrl: "https://example.com/images/scholarship-program.jpg",
      videoUrl: "https://example.com/videos/scholarship-program.mp4"
    },
    {
      title: "Community Legal Workshops",
      description: "Our attorneys conduct free legal workshops to educate the public on various legal issues and their rights.",
      imageUrl: "https://example.com/images/legal-workshops.jpg",
      videoUrl: "https://example.com/videos/legal-workshops.mp4"
    },
    {
      title: "Charity Fundraisers",
      description: "Our firm actively participates in and sponsors charity fundraisers to support local nonprofits and community initiatives.",
      imageUrl: "https://example.com/images/charity-fundraisers.jpg",
      videoUrl: "https://example.com/videos/charity-fundraisers.mp4"
    },
    {
      title: "Pro Bono Services",
      description: "We offer pro bono legal services to those who cannot afford representation, ensuring access to justice for all.",
      imageUrl: "https://example.com/images/pro-bono-services.jpg",
      videoUrl: "https://example.com/videos/pro-bono-services.mp4"
    },
    {
      title: "Youth Mentorship Program",
      description: "Our firm runs a mentorship program for young people interested in the legal profession, providing guidance and support to aspiring lawyers.",
      imageUrl: "https://example.com/images/youth-mentorship.jpg",
      videoUrl: "https://example.com/videos/youth-mentorship.mp4"
    },
    {
      title: "Environmental Initiatives",
      description: "We are committed to environmental sustainability and participate in local green initiatives to promote a healthier community.",
      imageUrl: "https://example.com/images/environmental-initiatives.jpg",
      videoUrl: "https://example.com/videos/environmental-initiatives.mp4"
    },
    {
      title: "Domestic Violence Awareness",
      description: "Our firm collaborates with local organizations to raise awareness about domestic violence and provide legal assistance to survivors.",
      imageUrl: "https://example.com/images/domestic-violence-awareness.jpg",
      videoUrl: "https://example.com/videos/domestic-violence-awareness.mp4"
    }
  ],
  
  ourApproach: [
    {
      title: "Client-Centered Representation",
      description: "We put our clients at the center of everything we do, tailoring our approach to meet their unique needs.",
      imageUrl: "https://example.com/images/client-centered.jpg",
      videoUrl: "https://example.com/videos/client-centered.mp4"
    },
    {
      title: "Strategic Legal Planning",
      description: "Our team develops strategic legal plans to ensure the best possible outcomes for our clients.",
      imageUrl: "https://example.com/images/strategic-planning.jpg",
      videoUrl: "https://example.com/videos/strategic-planning.mp4"
    },
    {
      title: "Aggressive Advocacy",
      description: "We are dedicated to aggressive advocacy, fighting tirelessly for our clients' rights.",
      imageUrl: "https://example.com/images/aggressive-advocacy.jpg",
      videoUrl: "https://example.com/videos/aggressive-advocacy.mp4"
    },
    {
      title: "Collaborative Problem-Solving",
      description: "We collaborate with our clients and other stakeholders to solve complex legal issues.",
      imageUrl: "https://example.com/images/collaborative-solving.jpg",
      videoUrl: "https://example.com/videos/collaborative-solving.mp4"
    },
    {
      title: "Continuous Learning and Improvement",
      description: "Our team continuously learns and improves to stay at the forefront of legal practice.",
      imageUrl: "https://example.com/images/continuous-learning.jpg",
      videoUrl: "https://example.com/videos/continuous-learning.mp4"
    }
  ],
  
  lawyers: attorneys,
  
   
  historyLegacy: [
    {
      title: "Founding of the Firm",
      description: "Our law firm was founded in 1985 with a commitment to providing exceptional legal services and protecting the rights of individuals.",
      year: 1985,
      imageUrl: "https://example.com/images/founding.jpg",
      videoUrl: "https://example.com/videos/founding.mp4"
    },
    {
      title: "Landmark Case Victory",
      description: "In 1995, our firm won a landmark case that set a precedent for personal injury law, solidifying our reputation as top legal advocates.",
      year: 1995,
      imageUrl: "https://example.com/images/landmark-case.jpg",
      videoUrl: "https://example.com/videos/landmark-case.mp4"
    },
    {
      title: "Expansion to New Offices",
      description: "In 2000, we expanded our operations by opening new offices in key locations to better serve our clients.",
      year: 2000,
      imageUrl: "https://example.com/images/expansion.jpg",
      videoUrl: "https://example.com/videos/expansion.mp4"
    },
    {
      title: "Pro Bono Initiative Launch",
      description: "In 2005, we launched a pro bono initiative to provide free legal services to those in need, reinforcing our commitment to justice for all.",
      year: 2005,
      imageUrl: "https://example.com/images/pro-bono-initiative.jpg",
      videoUrl: "https://example.com/videos/pro-bono-initiative.mp4"
    },
    {
      title: "Technology Integration",
      description: "In 2010, we integrated cutting-edge technology into our practice, enhancing our efficiency and client service.",
      year: 2010,
      imageUrl: "https://example.com/images/technology-integration.jpg",
      videoUrl: "https://example.com/videos/technology-integration.mp4"
    },
    {
      title: "1000th Case Milestone",
      description: "In 2015, we celebrated winning our 1000th case, a testament to our dedication and expertise.",
      year: 2015,
      imageUrl: "https://example.com/images/1000th-case.jpg",
      videoUrl: "https://example.com/videos/1000th-case.mp4"
    },
    {
      title: "Award for Excellence in Legal Services",
      description: "In 2020, our firm received an award for excellence in legal services, recognizing our outstanding contributions to the legal field.",
      year: 2020,
      imageUrl: "https://example.com/images/award-excellence.jpg",
      videoUrl: "https://example.com/videos/award-excellence.mp4"
    },
    {
      title: "Community Service Recognition",
      description: "In 2023, we were recognized for our community service efforts, highlighting our dedication to giving back.",
      year: 2023,
      imageUrl: "https://example.com/images/community-service.jpg",
      videoUrl: "https://example.com/videos/community-service.mp4"
    }
  ],

  moduleButtons: [
    {
      label: "Mission & Values",
      link: "/mission-values",
      iconUrl: "https://example.com/icons/mission-values-icon.png"
    },
    {
      label: "History & Legacy",
      link: "/history-legacy",
      iconUrl: "https://example.com/icons/history-legacy-icon.png"
    },
    {
      label: "Meet the Lawyers",
      link: "/meet-the-lawyers",
      iconUrl: "https://example.com/icons/meet-the-lawyers-icon.png"
    },
    {
      label: "Our Approach",
      link: "/our-approach",
      iconUrl: "https://example.com/icons/our-approach-icon.png"
    },
    {
      label: "Community Involvement",
      link: "/community-involvement",
      iconUrl: "https://example.com/icons/community-involvement-icon.png"
    },
  ]
};