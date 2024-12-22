const quizData = {
    "Acoustics,Ultrasonic and Dielectrics": [
        {
            question: "Which type of wave is sound?",
            options: ["Transverse", "Longitudinal", "Electromagnetic", "Stationary"],
            answer: "Longitudinal"
        },
        {
            question: "What is the unit of frequency in acoustics?",
            options: ["Decibel (dB)", "Hertz (Hz)", "Pascal (Pa)", "Meter (m)"],
            answer: "Hertz (Hz)"
        },
        {
            question: "The speed of sound is fastest in:",
            options: ["Air", "Water", "Steel", "Vacuum"],
            answer: "Steel"
        },
        {
            question: "Which of the following defines resonance?",
            options: ["Reflection of sound waves", "Natural frequency matching an external frequency", "Absorption of sound energy", "Decrease in amplitude of sound waves"],
            answer: "Natural frequency matching an external frequency"
        },
        {
            question: "What is the speed of sound in air at room temperature (approx. 20°C)?",
            options: ["331 m/s", "343 m/s", "300 m/s", "372 m/s"],
            answer: "343 m/s"
        },
        {
            question: "Which of the following is a property of sound waves?",
            options: ["Polarization", "Diffraction", "Ionization", "Reflection only"],
            answer: "Diffraction"
        },
        {
            question: "The phenomenon responsible for the change in pitch of a moving vehicle’s siren is:",
            options: ["Resonance", "Doppler effect", "Echo", "Refraction"],
            answer: "Doppler Effect"
        },
        {
            question: "What is reverberation?",
            options: ["The absorption of sound", "The amplification of sound waves", "Persistence of sound due to multiple reflections", "The Doppler effect of sound"],
            answer: "Persistence of sound due to multiple reflections"
        },
        {
            question: "Sound intensity is measured in:",
            options: ["Hertz", "Decibels", "Joules", "Newtons"],
            answer: "Decibels"
        },
        {
            question: "The product of frequency and wavelength of a sound wave is equal to:",
            options: ["Amplitude", "Speed of sound", "Intensity", "Time period"],
            answer: "Speed of sound"
        },
        {
          question: "What is the frequency range of ultrasonic waves?",
          options: ["Below 20 Hz", "20 Hz - 20 kHz", "Above 20 kHz", "10 GHz - 100 GHz"],
          answer:  "Above 20 kHz"
      },
      {
          question: "Which of the following is not an application of ultrasonics?",
          options: ["Sonography", "Radar", "Cleaning", "Drilling"],
          answer:  "Radar"
      },
      {
          question: "Which material is commonly used in the production of ultrasonic waves?",
          options: ["Quartz", "Iron", "Copper", "Plastic"],
          answer: "Quartz"
      },
      {
          question: "What is the principle behind ultrasonic cleaning?",
          options: ["Magnetic field", "Cavitation", "Resonance", "Thermal expansion"],
          answer:"Magnetic field"
      },
      {
          question: "Which device is used to generate ultrasonic waves?",
          options: ["Loudspeaker", "Microphone", "Piezoelectric transducer", "Amplifier"],
          answer: "Piezoelectric transducer"
      },
      {
          question: "Ultrasonic waves are used to detect cracks in materials. What is this process called?",
          options: ["Echolocation", "Ultrasonic welding", "Non-destructive testing", "Cavitation"],
          answer: "Non-destructive testing"
      },
      {
          question: "What is the use of ultrasonics in medical imaging?",
          options: ["Detecting tumors", "Measuring blood pressure", "Sonography", "Monitoring heartbeat"],
          answer: "Sonography"
      },
      {
          question: "Which property of ultrasonics allows it to be used in drilling?",
          options: ["High energy", "High frequency", "High amplitude", "Short wavelength"],
          answer: "High energy"
      },
      {
          question: "Who discovered the piezoelectric effect, which is essential for generating ultrasonics?",
          options: ["Newton", "Curie brothers", "Einstein", "Faraday"],
          answer: "Curie brothers"
      },
      {
          question: "Ultrasonic waves can travel through which of the following?",
          options: ["Vacuum", "Solids only", "Solids, liquids, and gases", "Liquids only"],
          answer: "Solids, liquids, and gases"
      },
      {
        question: "What is a dielectric?",
        options: ["A type of conductor", "A material that can store electrical energy", "A source of electric current", "A semiconductor material"],
        answer: "A material that can store electrical energy"
    },
    {
        question: "Which property defines a good dielectric?",
        options: ["High conductivity", "Low permittivity", "High resistivity", "High permittivity"],
        answer: "High permittivity"
    },
    {
        question: "The unit of permittivity in the SI system is:",
        options: ["Farad per meter (F/m)", "Ohm (Ω)", "Henry (H)", "Coulomb (C)"],
        answer: "Farad per meter (F/m)"
    },
    {
        question: "The dielectric constant is also known as:",
        options: ["Relative permittivity", "Electric potential", "Capacitance", "Impedance"],
        answer: "Relative permittivity"
    },
    {
        question: "Which material is commonly used as a dielectric in capacitors?",
        options: ["Copper", "Air", "Silicon", "Graphite"],
        answer: "Air"
    },
    {
        question: "What happens to capacitance when a dielectric is inserted between the plates of a capacitor?",
        options: ["Increases", "Decreases", "Remains the same", "Depends on the material"],
        answer: "Increases"
    },
    {
        question: "The polarization of a dielectric occurs due to:",
        options: ["Free electrons moving", "Alignment of dipoles", "Formation of ions", "Loss of energy"],
        answer: "Alignment of dipoles"
    },
    {
        question: "What is the primary role of dielectrics in capacitors?",
        options: ["Store charge", "Enhance current flow", "Generate heat", "Resist current flow"],
        answer: "Store charge"
    },
    {
        question: "What type of dielectric material is used in a high-frequency application?",
        options: ["Polar dielectrics", "Non-polar dielectrics", "Metallic dielectrics", "Semiconductors"],
        answer: "Non-polar dielectrics"
    },
    {
        question: "Dielectric breakdown occurs when:",
        options: ["Electric field exceeds a threshold", "Dielectric constant is too high", "Material heats up", "Permittivity decreases"],
        answer: "Electric field exceeds a threshold"
    }
    
    ],
    "Engineering Optics": [
        { question: "What is the unit of refractive index?", options: ["No unit", "Meter", "Hertz", "Second"], answer: "No unit" },
    { question: "Snell's law relates to:", options: ["Reflection", "Refraction", "Diffraction", "Interference"], answer: "Refraction" },
    { question: "What is the critical angle?", options: ["Angle of incidence for total internal reflection", "Angle of reflection", "90 degrees", "Angle of polarization"], answer: "Angle of incidence for total internal reflection" },
    { question: "What is the speed of light in a vacuum?", options: ["3 × 10^8 m/s", "1 × 10^6 m/s", "1 × 10^8 m/s", "2 × 10^8 m/s"], answer: "3 × 10^8 m/s" },
    { question: "Which lens converges light rays?", options: ["Convex lens", "Concave lens", "Cylindrical lens", "Planar lens"], answer: "Convex lens" },
    { question: "What is a prism used for?", options: ["Dispersion of light", "Focus light", "Absorb light", "Reflect light"], answer: "Dispersion of light" },
    { question: "The phenomenon of splitting white light into colors is called:", options: ["Reflection", "Refraction", "Dispersion", "Polarization"], answer: "Dispersion" },
    { question: "Which is the largest wavelength in visible light?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Red" },
    { question: "Which optical instrument uses total internal reflection?", options: ["Periscope", "Microscope", "Telescope", "Fiber optic cable"], answer: "Fiber optic cable" },
    { question: "What is a monochromatic light source?", options: ["Light of a single wavelength", "Light of all wavelengths", "Light of high intensity", "Light of low intensity"], answer: "Light of a single wavelength" },

    { question: "What is the principle of a laser?", options: ["Population inversion and stimulated emission", "Diffraction", "Refraction", "Polarization"], answer: "Population inversion and stimulated emission" },
    { question: "What is interference?", options: ["Overlap of waves", "Splitting of waves", "Reflection of waves", "Divergence of waves"], answer: "Overlap of waves" },
    { question: "Which color of light has the highest frequency?", options: ["Violet", "Red", "Blue", "Green"], answer: "Violet" },
    { question: "What is Brewster's angle?", options: ["Angle of polarization", "Critical angle", "Reflection angle", "Refracted angle"], answer: "Angle of polarization" },
    { question: "The refractive index of glass is:", options: ["More than 1", "Less than 1", "Equal to 1", "Infinity"], answer: "More than 1" },
    { question: "What is a hologram?", options: ["3D image", "Flat image", "Light source", "Mirror"], answer: "3D image" },
    { question: "What is diffraction?", options: ["Bending of light around corners", "Splitting of light", "Absorption of light", "Scattering of light"], answer: "Bending of light around corners" },
    { question: "Which property of light proves its wave nature?", options: ["Interference", "Reflection", "Refraction", "Absorption"], answer: "Interference" },
    { question: "What is the purpose of a polarizer?", options: ["Block certain orientations of light", "Focus light", "Reflect light", "Split light"], answer: "Block certain orientations of light" },
    { question: "What does a concave lens do to light rays?", options: ["Diverges them", "Converges them", "Reflects them", "Absorbs them"], answer: "Diverges them" },
    { question: "What is a telescope used for?", options: ["Observing distant objects", "Focusing nearby objects", "Measuring light intensity", "Creating holograms"], answer: "Observing distant objects" },
    { question: "Which phenomenon explains the sky's blue color?", options: ["Scattering", "Dispersion", "Reflection", "Absorption"], answer: "Scattering" },
    { question: "What is the wavelength range of visible light?", options: ["400-700 nm", "700-1000 nm", "300-400 nm", "1000-1500 nm"], answer: "400-700 nm" },
    { question: "What is the main component of optical fiber?", options: ["Glass or plastic", "Metal", "Ceramic", "Carbon"], answer: "Glass or plastic" },
    { question: "What causes chromatic aberration?", options: ["Dispersion of light", "Reflection", "Refraction", "Absorption"], answer: "Dispersion of light" },
    { question: "Which optical instrument is used in surveying?", options: ["Theodolite", "Microscope", "Periscope", "Telescope"], answer: "Theodolite" },
    { question: "What is the focal length of a lens?", options: ["Distance from the lens to the focal point", "Thickness of the lens", "Radius of curvature", "Diameter of the lens"], answer: "Distance from the lens to the focal point" },
    { question: "What is an application of convex mirrors?", options: ["Rearview mirrors", "Focusing sunlight", "Magnifying glass", "Corrective lenses"], answer: "Rearview mirrors" },
    { question: "The main use of a grating is for:", options: ["Diffraction", "Reflection", "Absorption", "Polarization"], answer: "Diffraction" }

    ],
    "Quantum Mechanics": [
        { question: "What is the smallest unit of energy called?", options: ["Photon", "Proton", "Neutron", "Electron"], answer: "Photon" },
        { question: "Who proposed the uncertainty principle?", options: ["Albert Einstein", "Werner Heisenberg", "Niels Bohr", "Max Planck"], answer: "Werner Heisenberg" },
        { question: "What is the speed of light in a vacuum?", options: ["3 × 10^8 m/s", "5 × 10^6 m/s", "2 × 10^5 m/s", "1 × 10^3 m/s"], answer: "3 × 10^8 m/s" },
        { question: "What does the wave function describe?", options: ["Position of a particle", "Probability of finding a particle", "Mass of a particle", "Charge of a particle"], answer: "Probability of finding a particle" },
        { question: "Which of these particles has no charge?", options: ["Neutron", "Proton", "Electron", "Photon"], answer: "Neutron" },
        { question: "What is Planck's constant approximately equal to?", options: ["6.63 × 10^-34 Js", "9.11 × 10^-31 kg", "3 × 10^8 m/s", "1 × 10^-10 m"], answer: "6.63 × 10^-34 Js" },
        { question: "The dual nature of light includes:", options: ["Wave and particle nature", "Mass and charge", "Energy and momentum", "Frequency and amplitude"], answer: "Wave and particle nature" },
        { question: "What is the photoelectric effect?", options: ["Emission of electrons due to light", "Reflection of light", "Splitting of light into colors", "Absorption of light"], answer: "Emission of electrons due to light" },
        { question: "Which scientist developed the quantum theory?", options: ["Max Planck", "Isaac Newton", "Marie Curie", "Albert Einstein"], answer: "Max Planck" },
        { question: "What is a quantum?", options: ["A small, discrete packet of energy", "A type of particle", "A wave function", "An atomic orbit"], answer: "A small, discrete packet of energy" },
        { question: "What does the Bohr model describe?", options: ["Electron orbits in an atom", "Waves in quantum mechanics", "Speed of light", "Energy conservation"], answer: "Electron orbits in an atom" },
        { question: "What is the Heisenberg Uncertainty Principle?", options: ["Position and momentum cannot both be precisely known", "Energy is constant", "Mass and energy are equivalent", "Light has wave nature"], answer: "Position and momentum cannot both be precisely known" },
        { question: "What are quanta of light called?", options: ["Photons", "Electrons", "Protons", "Neutrons"], answer: "Photons" },
        { question: "The principle quantum number specifies:", options: ["Electron's energy level", "Electron's mass", "Electron's speed", "Electron's charge"], answer: "Electron's energy level" },
        { question: "The speed of light is fastest in:", options: ["Vacuum", "Water", "Glass", "Air"], answer: "Vacuum" },
        { question: "Who introduced the concept of wave-particle duality?", options: ["Louis de Broglie", "Max Planck", "Niels Bohr", "Erwin Schrödinger"], answer: "Louis de Broglie" },
        { question: "The photon is a particle of:", options: ["Light", "Sound", "Heat", "Matter"], answer: "Light" },
        { question: "Quantum mechanics primarily studies:", options: ["Microscopic particles", "Planetary motion", "Fluids", "Sound waves"], answer: "Microscopic particles" },
        { question: "What is a blackbody?", options: ["An ideal absorber of radiation", "A heavy particle", "A neutron-rich atom", "A type of star"], answer: "An ideal absorber of radiation" },
        { question: "Which particle is neutral?", options: ["Neutron", "Proton", "Electron", "Photon"], answer: "Neutron" },
        { question: "What causes energy quantization in atoms?", options: ["Discrete electron energy levels", "Mass of protons", "Photon emission", "Speed of light"], answer: "Discrete electron energy levels" },
        { question: "What is the wavelength range of visible light?", options: ["400-700 nm", "100-200 nm", "700-1000 nm", "50-100 nm"], answer: "400-700 nm" },
        { question: "What does the Schrödinger equation describe?", options: ["Wave behavior of particles", "Mass of particles", "Speed of light", "Energy conservation"], answer: "Wave behavior of particles" },
        { question: "Quantum tunneling involves:", options: ["Particles crossing a barrier they normally can't", "Electrons jumping to higher orbits", "Waves spreading out", "Photon emission"], answer: "Particles crossing a barrier they normally can't" },
        { question: "What is the energy of a photon proportional to?", options: ["Frequency", "Mass", "Wavelength", "Amplitude"], answer: "Frequency" },
        { question: "What is the spin of an electron?", options: ["1/2", "0", "1", "-1"], answer: "1/2" },
        { question: "What is the significance of the Planck constant?", options: ["Defines energy quantization", "Defines mass conservation", "Describes particle speed", "Measures light intensity"], answer: "Defines energy quantization" },
        { question: "What does 'quantum' mean in Latin?", options: ["How much", "How far", "How fast", "How big"], answer: "How much" },
        { question: "What is an orbital?", options: ["Region where an electron is likely found", "Electron's speed", "Electron's mass", "Electron's charge"], answer: "Region where an electron is likely found" },
        { question: "Which experiment confirmed the particle nature of light?", options: ["Photoelectric effect", "Double-slit experiment", "Blackbody radiation", "Michelson-Morley experiment"], answer: "Photoelectric effect" }
    ],
    "Crystal Structure and Nuclear Physics": [
        { question: "What is the basic repeating unit in a crystal structure called?", options: ["Unit cell", "Lattice point", "Grain boundary", "Crystal plane"], answer: "Unit cell" },
        { question: "What type of structure do most metals have?", options: ["Face-centered cubic", "Hexagonal close-packed", "Simple cubic", "Amorphous"], answer: "Face-centered cubic" },
        { question: "What is the coordination number in a body-centered cubic (BCC) structure?", options: ["8", "6", "12", "4"], answer: "8" },
        { question: "What is the coordination number in a face-centered cubic (FCC) structure?", options: ["12", "6", "8", "4"], answer: "12" },
        { question: "Which of the following is an example of an amorphous material?", options: ["Glass", "Iron", "Diamond", "Copper"], answer: "Glass" },
        { question: "What does the term 'crystal lattice' refer to?", options: ["Regular arrangement of atoms", "Irregular arrangement of atoms", "Vacant sites in a material", "Movement of electrons"], answer: "Regular arrangement of atoms" },
        { question: "Which of these materials typically has a hexagonal close-packed (HCP) structure?", options: ["Magnesium", "Gold", "Aluminum", "Iron"], answer: "Magnesium" },
        { question: "What is a grain boundary?", options: ["A region between two crystals", "The smallest repeating unit in a crystal", "A defect within a crystal", "A property of amorphous materials"], answer: "A region between two crystals" },
        { question: "What is the term for the 3D arrangement of atoms in a crystal?", options: ["Crystal structure", "Grain boundary", "Atomic density", "Amorphous pattern"], answer: "Crystal structure" },
        { question: "What is the atomic packing factor (APF) for FCC structures?", options: ["0.74", "0.68", "0.52", "0.90"], answer: "0.74" },
        { question: "What kind of lattice structure does diamond have?", options: ["Cubic", "Hexagonal", "Tetragonal", "Orthorhombic"], answer: "Cubic" },
        { question: "Which is the simplest crystal structure?", options: ["Simple cubic", "Face-centered cubic", "Body-centered cubic", "Hexagonal close-packed"], answer: "Simple cubic" },
        { question: "What is a point defect in a crystal?", options: ["A missing atom", "A grain boundary", "An entire missing layer", "The entire lattice"], answer: "A missing atom" },
        { question: "What is the purpose of X-ray diffraction in crystal studies?", options: ["Determine atomic arrangement", "Measure temperature", "Identify density", "Inspect defects"], answer: "Determine atomic arrangement" },
        { question: "Which of these materials has a crystalline structure?", options: ["Salt", "Plastic", "Glass", "Rubber"], answer: "Salt" },
        { 
          question: "What is the atomic number of hydrogen?", 
          options: ["1", "2", "3", "4"], 
          answer: "1" 
      },
      { 
          question: "What is the main fuel used in nuclear power plants?", 
          options: ["Coal", "Uranium", "Oil", "Natural Gas"], 
          answer: "Uranium" 
      },
      { 
          question: "What is the unit of radioactivity?", 
          options: ["Joule", "Gray", "Becquerel", "Volt"], 
          answer: "Becquerel" 
      },
      { 
          question: "Who discovered the neutron?", 
          options: ["Marie Curie", "J.J. Thomson", "Ernest Rutherford", "James Chadwick"], 
          answer: "James Chadwick" 
      },
      { 
          question: "Which element is commonly used as a moderator in nuclear reactors?", 
          options: ["Carbon", "Water", "Graphite", "Helium"], 
          answer: "Graphite" 
      },
      { 
          question: "What is the process in which a heavy atomic nucleus splits into two smaller nuclei?", 
          options: ["Fission", "Fusion", "Radiation", "Decay"], 
          answer: "Fission" 
      },
      { 
          question: "Which of these particles has no charge?", 
          options: ["Electron", "Proton", "Neutron", "Alpha particle"], 
          answer: "Neutron" 
      },
      { 
          question: "What is the energy released in a nuclear reaction called?", 
          options: ["Fusion Energy", "Fission Energy", "Thermal Energy", "Kinetic Energy"], 
          answer: "Fission Energy" 
      },
      { 
          question: "In a nuclear power plant, what type of reaction occurs?", 
          options: ["Nuclear Fusion", "Nuclear Fission", "Radioactive Decay", "Chemical Reaction"], 
          answer: "Nuclear Fission" 
      },
      { 
          question: "What type of radiation is blocked by a sheet of paper?", 
          options: ["Alpha", "Beta", "Gamma", "X-ray"], 
          answer: "Alpha" 
      },
      { 
          question: "What is the most common isotope of uranium used in nuclear reactors?", 
          options: ["Uranium-235", "Uranium-238", "Uranium-239", "Uranium-234"], 
          answer: "Uranium-235" 
      },
      { 
          question: "What is the speed of light?", 
          options: ["3 x 10^8 m/s", "2 x 10^8 m/s", "1 x 10^8 m/s", "4 x 10^8 m/s"], 
          answer: "3 x 10^8 m/s" 
      },
      { 
          question: "Which of the following is a type of nuclear radiation?", 
          options: ["Alpha", "Beta", "Gamma", "All of the above"], 
          answer: "All of the above" 
      },
      { 
          question: "In which year was the first atomic bomb tested?", 
          options: ["1942", "1945", "1950", "1960"], 
          answer: "1945" 
      }
        ],
    "Physics of Advanced Materials": [
        { 
            question: "What is the primary property of a material that determines its electrical conductivity?",
            options: ["Density", "Temperature", "Band Gap", "Mass"],
            answer: "Band Gap"
        },
        { 
            question: "Which of the following is an example of a ferromagnetic material?",
            options: ["Copper", "Iron", "Aluminum", "Wood"],
            answer: "Iron"
        },
        { 
            question: "What is the phenomenon in which the atomic structure of a material changes due to temperature?",
            options: ["Conduction", "Dilatation", "Thermal expansion", "Phase change"],
            answer: "Thermal expansion"
        },
        { 
            question: "Which material is typically used in semiconductor devices?",
            options: ["Silicon", "Wood", "Gold", "Rubber"],
            answer: "Silicon"
        },
        { 
            question: "What is the term for the ability of a material to return to its original shape after deformation?",
            options: ["Plasticity", "Elasticity", "Hardness", "Brittleness"],
            answer: "Elasticity"
        },
        { 
            question: "In materials science, which term describes the measure of a material's ability to conduct electricity?",
            options: ["Resistivity", "Conductivity", "Impedance", "Flux"],
            answer: "Conductivity"
        },
        { 
            question: "What does the term 'alloy' refer to?",
            options: ["A pure metal", "A combination of metals", "A synthetic material", "A plastic material"],
            answer: "A combination of metals"
        },
        { 
            question: "Which of the following materials is known for its high thermal conductivity?",
            options: ["Wood", "Copper", "Rubber", "Plastic"],
            answer: "Copper"
        },
        { 
            question: "What does the term 'hardness' refer to in material science?",
            options: ["A material's ability to conduct electricity", "A material's resistance to deformation", "A material's ability to stretch", "A material's ductility"],
            answer: "A material's resistance to deformation"
        },
        { 
            question: "Which material is commonly used in the fabrication of photovoltaic cells?",
            options: ["Copper", "Silicon", "Glass", "Aluminum"],
            answer: "Silicon"
        },
        { 
            question: "What is the key property that distinguishes a superconductor from other materials?",
            options: ["Zero electrical resistance", "High thermal conductivity", "Low density", "High melting point"],
            answer: "Zero electrical resistance"
        },
        { 
            question: "What type of material is used in the creation of piezoelectric devices?",
            options: ["Ceramic", "Wood", "Plastic", "Metal"],
            answer: "Ceramic"
        },
        { 
            question: "Which material is known for its high tensile strength and is commonly used in aerospace applications?",
            options: ["Aluminum", "Steel", "Gold", "Copper"],
            answer: "Steel"
        },
        { 
            question: "Which of the following is not a property of a polymer material?",
            options: ["Elasticity", "Ductility", "Malleability", "Insolubility"],
            answer: "Insolubility"
        },
        { 
            question: "Which material is known for its ability to absorb light and convert it into electrical energy?",
            options: ["Plastic", "Silicon", "Gold", "Copper"],
            answer: "Silicon"
        },
        { 
          question: "What is the primary property of a material that determines its electrical conductivity?",
          options: ["Density", "Temperature", "Band Gap", "Mass"],
          answer: "Band Gap"
      },
      { 
          question: "Which of the following is an example of a ferromagnetic material?",
          options: ["Copper", "Iron", "Aluminum", "Wood"],
          answer: "Iron"
      },
      { 
          question: "What is the phenomenon in which the atomic structure of a material changes due to temperature?",
          options: ["Conduction", "Dilatation", "Thermal expansion", "Phase change"],
          answer: "Thermal expansion"
      },
      { 
          question: "Which material is typically used in semiconductor devices?",
          options: ["Silicon", "Wood", "Gold", "Rubber"],
          answer: "Silicon"
      },
      { 
          question: "What is the term for the ability of a material to return to its original shape after deformation?",
          options: ["Plasticity", "Elasticity", "Hardness", "Brittleness"],
          answer: "Elasticity"
      },
      { 
          question: "In materials science, which term describes the measure of a material's ability to conduct electricity?",
          options: ["Resistivity", "Conductivity", "Impedance", "Flux"],
          answer: "Conductivity"
      },
      { 
          question: "What does the term 'alloy' refer to?",
          options: ["A pure metal", "A combination of metals", "A synthetic material", "A plastic material"],
          answer: "A combination of metals"
      },
      { 
          question: "Which of the following materials is known for its high thermal conductivity?",
          options: ["Wood", "Copper", "Rubber", "Plastic"],
          answer: "Copper"
      },
      { 
          question: "What does the term 'hardness' refer to in material science?",
          options: ["A material's ability to conduct electricity", "A material's resistance to deformation", "A material's ability to stretch", "A material's ductility"],
          answer: "A material's resistance to deformation"
      },
      { 
          question: "Which material is commonly used in the fabrication of photovoltaic cells?",
          options: ["Copper", "Silicon", "Glass", "Aluminum"],
          answer: "Silicon"
      },
      { 
          question: "What is the key property that distinguishes a superconductor from other materials?",
          options: ["Zero electrical resistance", "High thermal conductivity", "Low density", "High melting point"],
          answer: "Zero electrical resistance"
      },
      { 
          question: "What type of material is used in the creation of piezoelectric devices?",
          options: ["Ceramic", "Wood", "Plastic", "Metal"],
          answer: "Ceramic"
      },
      { 
          question: "Which material is known for its ability to absorb light and convert it into electrical energy?",
          options: ["Plastic", "Silicon", "Gold", "Copper"],
          answer: "Silicon"
      },
      { 
          question: "Which material is commonly used for making high-strength cables?",
          options: ["Copper", "Steel", "Iron", "Plastic"],
          answer: "Steel"
      },
      { 
          question: "Which of the following is an example of a ceramic material?",
          options: ["Silicon", "Glass", "Plastic", "Copper"],
          answer: "Glass"
      },
      { 
          question: "Which of the following properties does a material with high ductility exhibit?",
          options: ["It can be easily bent", "It can conduct electricity well", "It is hard", "It is brittle"],
          answer: "It can be easily bent"
      },
      { 
          question: "Which of the following is used in the manufacture of solar cells?",
          options: ["Aluminum", "Copper", "Silicon", "Plastic"],
          answer: "Silicon"
      },
      { 
          question: "What is the term for the ability of a material to resist wear or scratching?",
          options: ["Tensile strength", "Hardness", "Malleability", "Elasticity"],
          answer: "Hardness"
      },
      { 
          question: "What type of bonding is present in materials like diamond and graphite?",
          options: ["Ionic", "Covalent", "Metallic", "Van der Waals"],
          answer: "Covalent"
      },
      { 
          question: "What is the primary factor that determines a material's melting point?",
          options: ["Molecular structure", "Density", "Color", "Mass"],
          answer: "Molecular structure"
      },
      { 
          question: "Which material exhibits the highest electrical conductivity?",
          options: ["Copper", "Iron", "Aluminum", "Graphene"],
          answer: "Graphene"
      },
      { 
          question: "Which type of material is characterized by a high resistance to electrical flow?",
          options: ["Conductors", "Insulators", "Semiconductors", "Alloys"],
          answer: "Insulators"
      },
      { 
          question: "Which material is used to make superconducting magnets?",
          options: ["Copper", "Iron", "Yttrium Barium Copper Oxide", "Lead"],
          answer: "Yttrium Barium Copper Oxide"
      },
      { 
          question: "Which of the following materials is typically used in the manufacturing of LCD screens?",
          options: ["Graphene", "Silicon", "Indium tin oxide", "Copper"],
          answer: "Indium tin oxide"
      },
      { 
          question: "Which of the following materials has the highest melting point?",
          options: ["Gold", "Tungsten", "Iron", "Copper"],
          answer: "Tungsten"
      },
      { 
          question: "Which of the following is a key characteristic of a magnetic material?",
          options: ["It can conduct electricity", "It can be magnetized", "It is highly ductile", "It has high melting point"],
          answer: "It can be magnetized"
      },
      { 
          question: "What is the main application of carbon nanotubes?",
          options: ["Solar cells", "Electrical wiring", "Strengthening materials", "Electronics packaging"],
          answer: "Strengthening materials"
      },
      { 
          question: "Which material is commonly used to make electric cables?",
          options: ["Copper", "Rubber", "Silicon", "Aluminum"],
          answer: "Copper"
      }
        ]
};

let currentQuiz = [];
let currentIndex = 0;
let correctAttempts = 0;
let incorrectAttempts = 0;
let incorrectQuestions = [];

function startQuiz(category) {
    currentQuiz = quizData[category];
    currentIndex = 0;
    correctAttempts = 0;
    incorrectAttempts = 0;
    incorrectQuestions = [];

    document.getElementById("total-questions").textContent = `${currentQuiz.length}`;
    document.getElementById("questions-left").textContent = `${currentQuiz.length}/${currentQuiz.length}`;
    document.getElementById("correct-attempts").textContent = `0/${currentQuiz.length}`;
    document.getElementById("incorrect-attempts").textContent = `0/${currentQuiz.length}`;

    document.querySelector(".home-screen").style.display = "none";
    document.querySelector(".quiz-screen").style.display = "block";
    document.getElementById("quiz-title").textContent = category;

    loadQuestion();
}

function loadQuestion() {
    if (currentIndex < currentQuiz.length) {
        const questionData = currentQuiz[currentIndex];
        document.getElementById("question").textContent = questionData.question;

        const optionsContainer = document.querySelector(".options");
        optionsContainer.innerHTML = "";
        questionData.options.forEach((option) => {
            const button = document.createElement("button");
            button.className = "option";
            button.textContent = option;
            button.onclick = () => checkAnswer(button, questionData);
            optionsContainer.appendChild(button);
        });
    } else {
        showSummary();
    }
}

function checkAnswer(selectedOption, questionData) {
    if (selectedOption.textContent === questionData.answer) {
        correctAttempts++;
        selectedOption.classList.add("correct");
    } else {
        incorrectAttempts++;
        selectedOption.classList.add("incorrect");

        // Add incorrect question and correct answer to the list
        incorrectQuestions.push({
            question: questionData.question,
            correctAnswer: questionData.answer,
        });
    }

    document.getElementById("questions-left").textContent = `${currentQuiz.length - currentIndex - 1}/${currentQuiz.length}`;
    document.getElementById("correct-attempts").textContent = `${correctAttempts}/${currentQuiz.length}`;
    document.getElementById("incorrect-attempts").textContent = `${incorrectAttempts}/${currentQuiz.length}`;

    currentIndex++;
    setTimeout(loadQuestion, 1000);
}

function showSummary() {
    document.querySelector(".quiz-screen").style.display = "none";
    document.querySelector(".result-screen").style.display = "block";

    let summaryHTML = `
        <p>Total Questions: ${currentQuiz.length}</p>
        <p>Correct Attempts: ${correctAttempts}</p>
        <p>Incorrect Attempts: ${incorrectAttempts}</p>
        <p>Unattempted Questions: ${currentQuiz.length - (correctAttempts + incorrectAttempts)}</p>
        <h3>Incorrect Questions and Correct Answers:</h3>
    `;

    if (incorrectQuestions.length > 0) {
        incorrectQuestions.forEach((item, index) => {
            summaryHTML += `<p>${index + 1}. ${item.question} <br> Correct Answer: <strong>${item.correctAnswer}</strong></p>`;
        });
    } else {
        summaryHTML += "<p>None! Great job!</p>";
    }

    document.getElementById("summary").innerHTML = summaryHTML;
}

function returnToHome() {
    document.querySelector(".result-screen").style.display = "none";
    document.querySelector(".home-screen").style.display = "block";
}
