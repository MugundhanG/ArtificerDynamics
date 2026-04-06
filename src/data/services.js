import { FiPenTool, FiRefreshCw, FiLayout, FiLayers, FiActivity } from 'react-icons/fi';

const services = [
  {
    id: 'conceptual-design',
    title: 'Conceptual Design',
    icon: FiPenTool,
    shortDesc: 'Transforming ideas into engineered concepts with precision and creativity.',
    description: 'Our conceptual design services bridge the gap between initial ideas and engineered reality. We work closely with clients to develop innovative design concepts that are technically feasible, cost-effective, and aligned with project objectives.',
    benefits: [
      'Rapid concept visualization and iteration',
      'Risk reduction through early-stage analysis',
      'Cost optimization from the design phase',
      'Cross-disciplinary engineering expertise',
      'Seamless transition to detailed design'
    ],
    tools: ['SolidWorks', 'CATIA', 'AutoCAD', 'Fusion 360', 'KeyShot', 'Adobe Creative Suite'],
    useCases: [
      'New product development for consumer electronics',
      'Industrial machinery concept exploration',
      'Automotive component innovation',
      'Medical device preliminary design'
    ],
    image: 'conceptual'
  },
  {
    id: 'reverse-engineering',
    title: 'Reverse Engineering',
    icon: FiRefreshCw,
    shortDesc: 'Deconstructing existing products to create accurate digital models and documentation.',
    description: 'We specialize in reverse engineering physical components and assemblies into precise digital models. Using advanced 3D scanning and measurement technologies, we capture every detail to recreate or improve upon existing designs.',
    benefits: [
      'Accurate digital replication of physical parts',
      'Legacy part documentation and preservation',
      'Design improvement identification',
      'Quality control and inspection',
      'Rapid prototyping from existing components'
    ],
    tools: ['FARO Arm', 'GOM Scanner', 'Geomagic', 'SolidWorks', 'PolyWorks', 'CATIA'],
    useCases: [
      'Legacy part replacement for discontinued components',
      'Competitor product analysis and benchmarking',
      'Quality assurance and dimensional verification',
      'Spare parts manufacturing documentation'
    ],
    image: 'reverse'
  },
  {
    id: 'layout-design',
    title: 'Layout Design',
    icon: FiLayout,
    shortDesc: 'Optimizing spatial arrangements for maximum efficiency and workflow.',
    description: 'Our layout design services optimize the arrangement of equipment, workstations, and processes within industrial and commercial spaces. We create efficient layouts that maximize productivity, safety, and workflow continuity.',
    benefits: [
      'Maximized space utilization',
      'Improved workflow efficiency',
      'Enhanced safety compliance',
      'Reduced material handling costs',
      'Scalable layout solutions'
    ],
    tools: ['AutoCAD', 'Factory Design Suite', 'Revit', 'NavisWorks', 'SketchUp Pro', 'BIM 360'],
    useCases: [
      'Manufacturing plant floor optimization',
      'Warehouse and logistics facility design',
      'Clean room and laboratory layouts',
      'Assembly line configuration'
    ],
    image: 'layout'
  },
  {
    id: '2d-to-3d-conversion',
    title: '2D to 3D Conversion',
    icon: FiLayers,
    shortDesc: 'Converting legacy 2D drawings into detailed, parametric 3D models.',
    description: 'We convert legacy 2D engineering drawings into fully parametric 3D CAD models. Our team ensures dimensional accuracy, proper material assignments, and complete assembly relationships in every conversion project.',
    benefits: [
      'Preserved engineering intent and tolerances',
      'Enhanced design visualization',
      'Simplified design modifications',
      'Improved collaboration across teams',
      'Ready for simulation and manufacturing'
    ],
    tools: ['SolidWorks', 'CATIA', 'Inventor', 'Creo', 'NX', 'AutoCAD'],
    useCases: [
      'Legacy drawing digitization for aging infrastructure',
      'Manufacturing preparation and CNC programming',
      'Design validation and interference checking',
      'Technical documentation modernization'
    ],
    image: 'conversion'
  },
  {
    id: 'fea-analysis',
    title: 'FEA Analysis',
    icon: FiActivity,
    shortDesc: 'Finite Element Analysis for structural integrity and performance optimization.',
    description: 'Our FEA analysis services provide deep insights into structural behavior, thermal performance, and dynamic response. We help optimize designs for strength, weight, and durability before physical prototyping.',
    benefits: [
      'Reduced prototyping costs and time',
      'Optimized material usage and weight',
      'Validated design performance under real conditions',
      'Identification of stress concentrations and failure modes',
      'Regulatory compliance verification'
    ],
    tools: ['ANSYS', 'Abaqus', 'SolidWorks Simulation', 'HyperMesh', 'COMSOL', 'LS-DYNA'],
    useCases: [
      'Structural integrity analysis for load-bearing components',
      'Thermal analysis for heat exchangers and electronics',
      'Fatigue life prediction for rotating machinery',
      'Crash and impact simulation for safety-critical parts'
    ],
    image: 'fea'
  }
];

export default services;
