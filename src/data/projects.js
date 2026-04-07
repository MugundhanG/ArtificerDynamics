const projects = [
  {
    id: 1,
    title: 'Tyre Recycle Unit',
    category: 'Reverse Engineering',
    tag: 'reverse-engineering',
    description: 'Full reverse engineering of a tyre recycling unit — shredder assembly with conveyor and motor drive system — modelled in SolidWorks with complete assembly and rendering.',
    client: 'Tyre Recycling Industry',
    results: ['Full assembly modelled', 'Photo-realistic rendering', 'Production-ready CAD'],
    type: 'before-after'
  },
  {
    id: 2,
    title: 'Tyre Recycle Plant Layout',
    category: 'Layout Design',
    tag: 'layout-design',
    description: 'Complete plant layout design for a tyre recycling facility including shredder, conveyor system, dust extraction and material handling equipment arranged for optimal workflow.',
    client: 'Recycling Plant Client',
    results: ['Full plant layout', 'Equipment arrangement', 'Material flow optimized'],
    type: 'layout'
  },
  {
    id: 3,
    title: 'De-Beading Machine',
    category: 'Reverse Engineering',
    tag: 'reverse-engineering',
    description: 'Reverse engineering of a tyre de-beading machine, reconstructing all structural and mechanical components into a precise SolidWorks 3D assembly model.',
    client: 'Tyre Processing Client',
    results: ['Accurate 3D reconstruction', 'Full mechanical assembly', 'SolidWorks deliverable'],
    type: 'before-after'
  },
  {
    id: 4,
    title: 'Assembly Line Concept Design',
    category: 'Conceptual Design',
    tag: 'conceptual-design',
    description: 'Conceptual design of an automated assembly line structure with multi-station fixture arrangement, overhead gantry and conveyor integration for industrial manufacturing.',
    client: 'Manufacturing Client',
    results: ['Multi-station design', 'Gantry integration', 'Fully modelled concept'],
    type: 'concept'
  },
  {
    id: 5,
    title: 'Pitch Changing Technology Assembly',
    category: 'Conceptual Design',
    tag: 'conceptual-design',
    description: 'Concept design of a pitch changing technology assembly — a large rotating drum mechanism with drive motor and base frame, fully modelled and rendered in SolidWorks.',
    client: 'Industrial Equipment Client',
    results: ['Full concept assembly', 'Drive system designed', 'Parametric model'],
    type: 'concept'
  },
  {
    id: 6,
    title: 'Manual Welding Fixture',
    category: 'Conceptual Design',
    tag: 'conceptual-design',
    description: 'Concept design of a manual welding fixture with adjustable clamps, locating pins, and a rigid steel frame structure — designed for repeatability and ease of use.',
    client: 'Fabrication Client',
    results: ['Adjustable clamp design', 'Rigid frame structure', 'Ready for manufacturing'],
    type: 'concept'
  },
  {
    id: 7,
    title: 'Water Tank 2D to 3D Conversion',
    category: '2D to 3D Conversion',
    tag: '2d-to-3d-conversion',
    description: 'Converted 2D engineering drawings of large industrial water storage tanks into detailed 3D SolidWorks models with design modifications and complete structural detailing.',
    client: 'Industrial Storage Client',
    results: ['2D to 3D converted', 'Design modifications applied', 'Structural detailing complete'],
    type: 'before-after'
  },
  {
    id: 8,
    title: '990L Diesel Tank 3D Design',
    category: '2D to 3D Conversion',
    tag: '2d-to-3d-conversion',
    description: 'Converted 2D drawings of a 990-litre diesel storage tank into a fully detailed transparent SolidWorks 3D model with internal baffles, fittings, and base frame.',
    client: 'Fuel Storage Client',
    results: ['Full 3D model', 'Internal structure detailed', 'Transparent view rendered'],
    type: 'before-after'
  },
  {
    id: 9,
    title: 'Hanging Conveyor Reverse Engineering',
    category: 'Reverse Engineering',
    tag: 'reverse-engineering',
    description: 'Reverse engineered a hanging conveyor system including the overhead rail, trolley mechanisms and drive components from physical measurements into SolidWorks assembly.',
    client: 'Material Handling Client',
    results: ['Complete system modelled', 'Drive mechanism captured', 'Assembly documentation'],
    type: 'before-after'
  },
  {
    id: 10,
    title: 'Rotary Dryer Layout Design',
    category: 'Layout Design',
    tag: 'layout-design',
    description: 'Layout design of a rotary dryer system including drum, support frame, burner assembly, dust collector and discharge conveyor arranged within a defined plant footprint.',
    client: 'Process Industry Client',
    results: ['Full system layout', 'Footprint optimized', 'Equipment coordinated'],
    type: 'layout'
  },
  {
    id: 11,
    title: 'Paint Booth Assembly',
    category: 'Conceptual Design',
    tag: 'conceptual-design',
    description: 'Detailed 3D model of a large industrial paint booth with modular panel construction, access doors, ventilation slots and internal lighting arrangement.',
    client: 'Automotive Finishing Client',
    results: ['Modular panel design', 'Ventilation integrated', 'Full assembly model'],
    type: 'concept'
  },
  {
    id: 12,
    title: 'Tyre Recycle Tramel Machine',
    category: 'Conceptual Design',
    tag: 'conceptual-design',
    description: 'Complete 3D design of a tyre recycling tramel (trommel) screening machine with rotating drum, discharge chute, and support structure modelled in SolidWorks.',
    client: 'Recycling Equipment Client',
    results: ['Rotating drum designed', 'Discharge system included', 'Full assembly model'],
    type: 'concept'
  },
  {
    id: 13,
    title: 'Sodium Hydroxide Dosing Skid',
    category: 'Layout Design',
    tag: 'layout-design',
    description: 'SolidWorks Routing-based 3D model of a sodium hydroxide storage and dosing skid (CS) with piping, pumps, valves and instrumentation within a structural steel frame.',
    client: 'Water Treatment Client',
    results: ['Routing piping modelled', 'P&ID translated to 3D', 'Skid frame designed'],
    type: 'layout'
  },
  {
    id: 14,
    title: 'Biocide Dosing Tank (CPVC)',
    category: 'Layout Design',
    tag: 'layout-design',
    description: 'Full 3D routing model of a biocide storage and dosing system using CPVC piping — including storage vessel, metering pumps, valves, and instrumentation layout.',
    client: 'Chemical Process Client',
    results: ['CPVC routing modelled', 'Vessel and pump layout', 'Isometric drawings ready'],
    type: 'layout'
  },
  {
    id: 15,
    title: 'Street Food Shop & Cart Design',
    category: 'Conceptual Design',
    tag: 'conceptual-design',
    description: 'Conceptual 3D designs of a street food shop counter unit and a mobile food cart with canopy, storage shelves and display area — rendered in real-world environments.',
    client: 'F&B Entrepreneur',
    results: ['Shop & cart designed', 'Photorealistic renders', 'Real-world environment viz'],
    type: 'concept'
  },
];

export default projects;
