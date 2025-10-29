import { ArrowLeft, Calendar, Clock, Github, ExternalLink, MapPin, Users, Code } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { TableOfContents } from "../components/blog/TableOfContents";
import { BlogContent, BlogContentBlock } from "../components/blog/BlogContent";

export function AdasValidationSimulationPage() {
  // Project data generated from markdown
  const projectData = {
    "title": "ADAS Validation and Verification Simulation",
    "category": "AUTONOMOUS SYSTEMS",
    "date": "Summer 2024",
    "company": "Automotive Research Lab",
    "location": "Atlanta, GA",
    "type": "Research Project",
    "heroImage": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    "tags": [
        "ADAS",
        "Simulation",
        "Stochastic Methods",
        "Adversarial Models",
        "Autonomous Driving"
    ],
    "github": "https://github.com/example/adas-simulation",
    "demo": "https://adas-sim-demo.example.com",
    "technologies": [
        "Python",
        "CARLA",
        "ROS2",
        "Machine Learning",
        "Computer Vision"
    ],
    "team": [
        "Research Team",
        "Industry Partners"
    ],
    "duration": "4 months",
    "slug": "adas-validation-simulation",
    "description": "Developed simulations for verification and validation of ADAS features using stochastic methods and adversarial models.",
    "featuredOnHome": true,
    "featuredOnProjects": true,
    "displayOrder": 2
};

  const tocItems = [
        {
                "title": "Project Overview",
                "id": "project-overview",
                "level": 2
        },
        {
                "title": "Technical Approach",
                "id": "technical-approach",
                "level": 2
        },
        {
                "title": "Stochastic Methods",
                "id": "stochastic-methods",
                "level": 2
        },
        {
                "title": "Adversarial Models",
                "id": "adversarial-models",
                "level": 2
        },
        {
                "title": "Simulation Framework",
                "id": "simulation-framework",
                "level": 2
        },
        {
                "title": "Validation Results",
                "id": "validation-results",
                "level": 2
        },
        {
                "title": "Impact & Future Work",
                "id": "impact-future-work",
                "level": 2
        }
];

  const contentBlocks: BlogContentBlock[] = [
        {
                "type": "heading",
                "id": "project-overview",
                "content": "Project Overview"
        },
        {
                "type": "paragraph",
                "content": "Developed comprehensive simulations for verification and validation of Advanced Driver Assistance Systems (ADAS) using <a href='stochastic methods' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>orange</a> and adversarial models. This research project focused on creating robust testing environments that could expose edge cases and failure modes in autonomous driving systems before real-world deployment."
        },
        {
                "type": "paragraph",
                "content": "The project aimed to bridge the gap between laboratory testing and real-world performance by creating statistically rigorous simulation environments that could predict system behavior under diverse and challenging conditions."
        },
        {
                "type": "heading",
                "id": "technical-approach",
                "content": "Technical Approach"
        },
        {
                "type": "heading3",
                "id": "problem-definition",
                "content": "Problem Definition"
        },
        {
                "type": "paragraph",
                "content": "ADAS systems face significant challenges in real-world deployment due to: - <strong>Edge Cases</strong>: Rare but critical scenarios that are difficult to test - <strong>Environmental Variability</strong>: Weather, lighting, and road conditions - <strong>Human Behavior</strong>: Unpredictable actions by other drivers and pedestrians - <strong>Sensor Limitations</strong>: Performance degradation under adverse conditions"
        },
        {
                "type": "heading3",
                "id": "solution-architecture",
                "content": "Solution Architecture"
        },
        {
                "type": "paragraph",
                "content": "Our approach combined multiple validation methodologies:"
        },
        {
                "type": "code",
                "language": "python",
                "content": "# Core simulation architecture\nclass ADASSSimulator:\n    def __init__(self):\n        self.environment = CARLAEnvironment()\n        self.adas_system = ADASTSystemUnderTest()\n        self.stochastic_generator = StochasticScenarioGenerator()\n        self.adversarial_engine = AdversarialTestEngine()\n        \n    def run_validation_suite(self, num_scenarios=1000):\n        \"\"\"Run comprehensive validation with both methods\"\"\"\n        \n        # Stochastic testing\n        stochastic_results = []\n        for i in range(num_scenarios // 2):\n            scenario = self.stochastic_generator.generate_scenario()\n            result = self.simulate_scenario(scenario)\n            stochastic_results.append(result)\n            \n        # Adversarial testing  \n        adversarial_results = []\n        for i in range(num_scenarios // 2):\n            adversarial_scenario = self.adversarial_engine.generate_attack()\n            result = self.simulate_scenario(adversarial_scenario)\n            adversarial_results.append(result)\n            \n        return self.analyze_results(stochastic_results, adversarial_results)"
        },
        {
                "type": "heading",
                "id": "stochastic-methods",
                "content": "Stochastic Methods"
        },
        {
                "type": "heading3",
                "id": "monte-carlo-simulation",
                "content": "Monte Carlo Simulation"
        },
        {
                "type": "paragraph",
                "content": "Implemented large-scale Monte Carlo simulations to explore the parameter space:"
        },
        {
                "type": "code",
                "language": "python",
                "content": "def monte_carlo_validation(self, system, num_trials=10000):\n    \"\"\"\n    Monte Carlo simulation for ADAS validation\n    \"\"\"\n    results = []\n    \n    for trial in range(num_trials):\n        # Random scenario generation\n        scenario = {\n            'weather': random.choice(['sunny', 'rainy', 'foggy', 'snowy']),\n            'time_of_day': random.uniform(0, 24),\n            'traffic_density': random.exponential(scale=2.0),\n            'road_condition': random.choice(['dry', 'wet', 'icy']),\n            'visibility': random.normal(loc=100, scale=20)\n        }\n        \n        # Add random pedestrians and vehicles\n        scenario['pedestrians'] = self.generate_random_pedestrians()\n        scenario['vehicles'] = self.generate_random_vehicles()\n        \n        # Run simulation\n        result = self.run_simulation(system, scenario)\n        results.append(result)\n        \n        # Statistical analysis every 1000 trials\n        if trial % 1000 == 0:\n            self.update_statistical_metrics(results)\n    \n    return self.compute_confidence_intervals(results)"
        },
        {
                "type": "heading3",
                "id": "statistical-analysis",
                "content": "Statistical Analysis"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Failure Rate Estimation</strong>: Computed confidence intervals for system failure rates - <strong>Sensitivity Analysis</strong>: Identified critical parameters affecting system performance - <strong>Reliability Metrics</strong>: Calculated mean time between failures (MTBF) - <strong>Performance Distributions</strong>: Analyzed statistical distributions of key metrics"
        },
        {
                "type": "heading",
                "id": "adversarial-models",
                "content": "Adversarial Models"
        },
        {
                "type": "heading3",
                "id": "adversarial-scenario-generation",
                "content": "Adversarial Scenario Generation"
        },
        {
                "type": "paragraph",
                "content": "Developed sophisticated adversarial models to systematically find failure modes:"
        },
        {
                "type": "code",
                "language": "python",
                "content": "class AdversarialScenarioGenerator:\n    def __init__(self, adas_model):\n        self.adas_model = adas_model\n        self.optimizer = GeneticAlgorithm()\n        \n    def generate_adversarial_scenario(self, objective='maximize_failure_rate'):\n        \"\"\"\n        Generate scenarios designed to challenge the ADAS system\n        \"\"\"\n        \n        # Define search space\n        search_space = {\n            'vehicle_positions': FloatVector(bounds=[(0, 100), (0, 100)]),\n            'vehicle_speeds': FloatVector(bounds=[(0, 30), (0, 30)]), \n            'lighting_conditions': CategoricalChoice(['low', 'medium', 'high']),\n            'weather_intensity': Float(bounds=(0, 1)),\n            'road_curvature': Float(bounds=(-0.1, 0.1))\n        }\n        \n        # Optimize for adversarial conditions\n        best_scenario = self.optimizer.optimize(\n            objective_function=self.evaluate_scenario_adversity,\n            search_space=search_space,\n            generations=50\n        )\n        \n        return best_scenario\n    \n    def evaluate_scenario_adversity(self, scenario):\n        \"\"\"Evaluate how challenging a scenario is for the ADAS system\"\"\"\n        \n        # Run ADAS system on scenario\n        performance = self.adas_model.evaluate(scenario)\n        \n        # Return inverse of performance (higher is more adversarial)\n        return 1.0 - performance['safety_score']"
        },
        {
                "type": "heading3",
                "id": "gradient-based-attacks",
                "content": "Gradient-Based Attacks"
        },
        {
                "type": "paragraph",
                "content": "Implemented gradient-based methods to find minimal perturbations that cause failures:"
        },
        {
                "type": "code",
                "language": "python",
                "content": "def gradient_based_attack(self, scenario, target_failure_mode):\n    \"\"\"\n    Find minimal changes to scenario that cause specific failure\n    \"\"\"\n    \n    # Convert scenario to tensor\n    scenario_tensor = torch.tensor(scenario, requires_grad=True)\n    \n    # Define loss function for target failure\n    def attack_loss(scenario):\n        prediction = self.adas_model(scenario)\n        return -torch.log(prediction[target_failure_mode])\n    \n    # Gradient descent to find adversarial scenario\n    optimizer = torch.optim.Adam([scenario_tensor], lr=0.01)\n    \n    for iteration in range(100):\n        loss = attack_loss(scenario_tensor)\n        loss.backward()\n        optimizer.step()\n        \n        # Ensure physical constraints\n        scenario_tensor = self.enforce_constraints(scenario_tensor)\n        \n    return scenario_tensor.detach().numpy()"
        },
        {
                "type": "heading",
                "id": "simulation-framework",
                "content": "Simulation Framework"
        },
        {
                "type": "heading3",
                "id": "carla-integration",
                "content": "CARLA Integration"
        },
        {
                "type": "paragraph",
                "content": "Built comprehensive testing framework using CARLA simulator:"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Realistic Physics</strong>: High-fidelity vehicle dynamics and sensor modeling - <strong>Weather System</strong>: Dynamic weather conditions affecting sensor performance - <strong>Traffic Simulation</strong>: Realistic traffic patterns and pedestrian behavior - <strong>Sensor Modeling</strong>: Accurate models of cameras, LiDAR, and radar systems"
        },
        {
                "type": "heading3",
                "id": "performance-metrics",
                "content": "Performance Metrics"
        },
        {
                "type": "paragraph",
                "content": "Implemented comprehensive evaluation metrics:"
        },
        {
                "type": "code",
                "language": "python",
                "content": "class PerformanceEvaluator:\n    def __init__(self):\n        self.metrics = {\n            'safety': SafetyMetrics(),\n            'comfort': ComfortMetrics(), \n            'efficiency': EfficiencyMetrics(),\n            'robustness': RobustnessMetrics()\n        }\n    \n    def evaluate_adas_performance(self, simulation_results):\n        \"\"\"Comprehensive performance evaluation\"\"\"\n        \n        results = {}\n        \n        # Safety metrics\n        results['collision_rate'] = self.metrics['safety'].collision_rate(simulation_results)\n        results['near_miss_rate'] = self.metrics['safety'].near_miss_rate(simulation_results)\n        results['emergency_brake_rate'] = self.metrics['safety'].emergency_brake_rate(simulation_results)\n        \n        # Comfort metrics  \n        results['jerk_magnitude'] = self.metrics['comfort'].jerk_magnitude(simulation_results)\n        results['acceleration_smoothness'] = self.metrics['comfort'].acceleration_smoothness(simulation_results)\n        \n        # Efficiency metrics\n        results['fuel_consumption'] = self.metrics['efficiency'].fuel_consumption(simulation_results)\n        results['travel_time'] = self.metrics['efficiency'].travel_time(simulation_results)\n        \n        # Robustness metrics\n        results['sensor_degradation_handling'] = self.metrics['robustness'].sensor_degradation_handling(simulation_results)\n        results['weather_adaptation'] = self.metrics['robustness'].weather_adaptation(simulation_results)\n        \n        return results"
        },
        {
                "type": "heading",
                "id": "validation-results",
                "content": "Validation Results"
        },
        {
                "type": "heading3",
                "id": "statistical-findings",
                "content": "Statistical Findings"
        },
        {
                "type": "paragraph",
                "content": "Our comprehensive validation revealed important insights:"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Failure Rate</strong>: 0.02% collision rate under normal conditions, 0.3% under adversarial conditions - <strong>Critical Scenarios</strong>: Identified 15 specific scenario types with elevated risk - <strong>Sensor Dependency</strong>: 67% performance degradation under heavy rain conditions - <strong>Edge Case Coverage</strong>: Achieved 94% coverage of known edge cases"
        },
        {
                "type": "heading3",
                "id": "performance-improvements",
                "content": "Performance Improvements"
        },
        {
                "type": "paragraph",
                "content": "Based on simulation results, we identified key areas for improvement:"
        },
        {
                "type": "paragraph",
                "content": "1. <strong>Sensor Fusion</strong>: Enhanced algorithms reduced failure rate by 40% 2. <strong>Weather Adaptation</strong>: Improved performance in adverse conditions by 60% 3. <strong>Predictive Modeling</strong>: Better anticipation of pedestrian behavior 4. <strong>Robustness</strong>: Increased resilience to sensor failures"
        },
        {
                "type": "heading3",
                "id": "validation-confidence",
                "content": "Validation Confidence"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Statistical Significance</strong>: 95% confidence intervals for all metrics - <strong>Reproducibility</strong>: Results consistent across multiple simulation runs - <strong>Real-World Correlation</strong>: 89% correlation with limited real-world testing"
        },
        {
                "type": "heading",
                "id": "impact--future-work",
                "content": "Impact & Future Work"
        },
        {
                "type": "heading3",
                "id": "technical-contributions",
                "content": "Technical Contributions"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Novel Methodology</strong>: First comprehensive framework combining stochastic and adversarial validation - <strong>Open Source Tools</strong>: Released simulation framework for research community - <strong>Industry Adoption</strong>: Framework adopted by 3 major automotive manufacturers - <strong>Academic Impact</strong>: 2 peer-reviewed publications and 1 conference presentation"
        },
        {
                "type": "heading3",
                "id": "future-directions",
                "content": "Future Directions"
        },
        {
                "type": "paragraph",
                "content": "The project established several promising research directions:"
        },
        {
                "type": "paragraph",
                "content": "1. <strong>Deep Reinforcement Learning</strong>: Training adversarial agents using RL 2. <strong>Multi-Agent Systems</strong>: Simulating complex interactions between multiple autonomous vehicles 3. <strong>Real-Time Validation</strong>: Developing online validation methods for deployed systems 4. <strong>Federated Learning</strong>: Collaborative validation across multiple organizations"
        },
        {
                "type": "heading3",
                "id": "key-insights",
                "content": "Key Insights"
        },
        {
                "type": "paragraph",
                "content": "- <a href='Stochastic methods' target='_blank' rel='noopener noreferrer' style='color: #ff6b3d; text-decoration: underline;'>orange</a> are essential for comprehensive coverage of the scenario space - Adversarial testing reveals critical failure modes not found through traditional testing - Simulation-based validation can significantly reduce real-world testing requirements - Statistical rigor is crucial for building confidence in autonomous system safety"
        },
        {
                "type": "paragraph",
                "content": "This project demonstrated the critical importance of advanced simulation methods in validating complex autonomous systems and provided a foundation for future research in this rapidly evolving field."
        },
        {
                "type": "heading",
                "id": "resources",
                "content": "Resources"
        },
        {
                "type": "paragraph",
                "content": "Explore the code and try the simulation:"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Source Code</strong>: <a href='#/development?demo=https://github.com/example/adas-simulation' style='color: #ff6b3d; text-decoration: underline;'>View Resource</a> - <strong>Live Demo</strong>: <a href='#/development?demo=https://adas-sim-demo.example.com' style='color: #ff6b3d; text-decoration: underline;'>View Resource</a>"
        }
];

  return (
    <div className="size-full relative">
      <Header />

      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-8 py-20 pb-8">
          {/* Back Button */}
          <a
            href="#/projects"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </a>

          {/* Boxed Hero Content */}
          <div className="border-2 border-border">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column - Hero Image (Optional) */}
              {projectData.heroImage && (
                <div className="lg:col-span-5 bg-background border-r border-b border-border lg:border-b-0">
                  <div className="relative h-full min-h-[250px] lg:min-h-[400px]">
                    <ImageWithFallback
                      src={projectData.heroImage}
                      alt={projectData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Right Column - Project Info */}
              <div className={`${projectData.heroImage ? 'lg:col-span-7' : 'lg:col-span-12'} bg-background p-6 md:p-12`}>
                <div className="space-y-6 md:space-y-8">
                  {/* Category & Meta Info */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <span className="px-4 py-2 border-2 border-border bg-background font-mono text-sm inline-block w-fit">
                        {projectData.category}
                      </span>
                      <div className="flex items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{projectData.date}</span>
                        </span>
                        {projectData.duration && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-2">
                              <Clock className="w-4 h-4 flex-shrink-0" />
                              <span className="whitespace-nowrap">{projectData.duration}</span>
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl">{projectData.title}</h1>
                  </div>

                  {/* Author/Project Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-border bg-secondary flex items-center justify-center">
                      <Code className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">
                        {projectData.company || 'Project by'}
                      </p>
                      <p>{projectData.type || 'Development Team'}</p>
                    </div>
                  </div>

                  {/* Tags Section */}
                  <div className="-mx-12 px-12 border-t border-border pt-8">
                    <p className="font-mono text-muted-foreground mb-4">// TECHNOLOGIES</p>
                    <div className="flex flex-wrap gap-2">
                      {projectData.technologies && projectData.technologies.length > 0 ? (
                        projectData.technologies.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 border-2 border-border font-mono text-sm bg-background hover:bg-secondary transition-colors"
                          >
                            #{tech}
                          </span>
                        ))
                      ) : (
                        projectData.tags && projectData.tags.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 border-2 border-border font-mono text-sm bg-background hover:bg-secondary transition-colors"
                          >
                            #{tag}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Table of Contents - Desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Project Content */}
            <article className="lg:col-span-9">
              <div className="bg-background p-4 rounded-lg">
                <BlogContent blocks={contentBlocks} />

                {/* Action Buttons */}
                {(projectData.github || projectData.demo) && (
                <div className="mt-16 pt-8 border-t-2 border-border">
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    // PROJECT LINKS
                  </p>
                  <div className="flex gap-3">
                    {projectData.github && (
                      <a
                        href={`#/development?name=${encodeURIComponent(projectData.title)}&github=${encodeURIComponent(projectData.github)}&demo=${encodeURIComponent(projectData.demo || '')}`}
                        className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono inline-flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {projectData.demo && (
                      <a
                        href={`#/development?name=${encodeURIComponent(projectData.title)}&github=${encodeURIComponent(projectData.github || '')}&demo=${encodeURIComponent(projectData.demo)}`}
                        className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}