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
    "slug": "adas-validation-simulation"
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
                "content": "Project Overview",
                "id": "project-overview"
        },
        {
                "type": "paragraph",
                "content": "Developed comprehensive simulations for verification and validation of Advanced Driver Assistance Systems (ADAS) using <span style='color: #ff6b3d;'>stochastic methods</span> and adversarial models. This research project focused on creating robust testing environments that could expose edge cases and failure modes in autonomous driving systems before real-world deployment."
        },
        {
                "type": "paragraph",
                "content": "The project aimed to bridge the gap between laboratory testing and real-world performance by creating statistically rigorous simulation environments that could predict system behavior under diverse and challenging conditions."
        },
        {
                "type": "heading",
                "content": "Technical Approach",
                "id": "technical-approach"
        },
        {
                "type": "subheading",
                "content": "Problem Definition",
                "id": "problem-definition"
        },
        {
                "type": "paragraph",
                "content": "ADAS systems face significant challenges in real-world deployment due to: - <strong>Edge Cases</strong>: Rare but critical scenarios that are difficult to test - <strong>Environmental Variability</strong>: Weather, lighting, and road conditions - <strong>Human Behavior</strong>: Unpredictable actions by other drivers and pedestrians - <strong>Sensor Limitations</strong>: Performance degradation under adverse conditions"
        },
        {
                "type": "subheading",
                "content": "Solution Architecture",
                "id": "solution-architecture"
        },
        {
                "type": "paragraph",
                "content": "Our approach combined multiple validation methodologies:"
        },
        {
                "type": "code",
                "content": "# Core simulation architecture\nclass ADASSSimulator:\n    def __init__(self):\n        self.environment = CARLAEnvironment()\n        self.adas_system = ADASTSystemUnderTest()\n        self.stochastic_generator = StochasticScenarioGenerator()\n        self.adversarial_engine = AdversarialTestEngine()\n        \n    def run_validation_suite(self, num_scenarios=1000):\n        \"\"\"Run comprehensive validation with both methods\"\"\"\n        \n        # Stochastic testing\n        stochastic_results = []\n        for i in range(num_scenarios // 2):\n            scenario = self.stochastic_generator.generate_scenario()\n            result = self.simulate_scenario(scenario)\n            stochastic_results.append(result)\n            \n        # Adversarial testing  \n        adversarial_results = []\n        for i in range(num_scenarios // 2):\n            adversarial_scenario = self.adversarial_engine.generate_attack()\n            result = self.simulate_scenario(adversarial_scenario)\n            adversarial_results.append(result)\n            \n        return self.analyze_results(stochastic_results, adversarial_results)",
                "language": "python"
        },
        {
                "type": "heading",
                "content": "Stochastic Methods",
                "id": "stochastic-methods"
        },
        {
                "type": "subheading",
                "content": "Monte Carlo Simulation",
                "id": "monte-carlo-simulation"
        },
        {
                "type": "paragraph",
                "content": "Implemented large-scale Monte Carlo simulations to explore the parameter space:"
        },
        {
                "type": "code",
                "content": "def monte_carlo_validation(self, system, num_trials=10000):\n    \"\"\"\n    Monte Carlo simulation for ADAS validation\n    \"\"\"\n    results = []\n    \n    for trial in range(num_trials):\n        # Random scenario generation\n        scenario = {\n            'weather': random.choice(['sunny', 'rainy', 'foggy', 'snowy']),\n            'time_of_day': random.uniform(0, 24),\n            'traffic_density': random.exponential(scale=2.0),\n            'road_condition': random.choice(['dry', 'wet', 'icy']),\n            'visibility': random.normal(loc=100, scale=20)\n        }\n        \n        # Add random pedestrians and vehicles\n        scenario['pedestrians'] = self.generate_random_pedestrians()\n        scenario['vehicles'] = self.generate_random_vehicles()\n        \n        # Run simulation\n        result = self.run_simulation(system, scenario)\n        results.append(result)\n        \n        # Statistical analysis every 1000 trials\n        if trial % 1000 == 0:\n            self.update_statistical_metrics(results)\n    \n    return self.compute_confidence_intervals(results)",
                "language": "python"
        },
        {
                "type": "subheading",
                "content": "Statistical Analysis",
                "id": "statistical-analysis"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Failure Rate Estimation</strong>: Computed confidence intervals for system failure rates - <strong>Sensitivity Analysis</strong>: Identified critical parameters affecting system performance - <strong>Reliability Metrics</strong>: Calculated mean time between failures (MTBF) - <strong>Performance Distributions</strong>: Analyzed statistical distributions of key metrics"
        },
        {
                "type": "heading",
                "content": "Adversarial Models",
                "id": "adversarial-models"
        },
        {
                "type": "subheading",
                "content": "Adversarial Scenario Generation",
                "id": "adversarial-scenario-generation"
        },
        {
                "type": "paragraph",
                "content": "Developed sophisticated adversarial models to systematically find failure modes:"
        },
        {
                "type": "code",
                "content": "class AdversarialScenarioGenerator:\n    def __init__(self, adas_model):\n        self.adas_model = adas_model\n        self.optimizer = GeneticAlgorithm()\n        \n    def generate_adversarial_scenario(self, objective='maximize_failure_rate'):\n        \"\"\"\n        Generate scenarios designed to challenge the ADAS system\n        \"\"\"\n        \n        # Define search space\n        search_space = {\n            'vehicle_positions': FloatVector(bounds=[(0, 100), (0, 100)]),\n            'vehicle_speeds': FloatVector(bounds=[(0, 30), (0, 30)]), \n            'lighting_conditions': CategoricalChoice(['low', 'medium', 'high']),\n            'weather_intensity': Float(bounds=(0, 1)),\n            'road_curvature': Float(bounds=(-0.1, 0.1))\n        }\n        \n        # Optimize for adversarial conditions\n        best_scenario = self.optimizer.optimize(\n            objective_function=self.evaluate_scenario_adversity,\n            search_space=search_space,\n            generations=50\n        )\n        \n        return best_scenario\n    \n    def evaluate_scenario_adversity(self, scenario):\n        \"\"\"Evaluate how challenging a scenario is for the ADAS system\"\"\"\n        \n        # Run ADAS system on scenario\n        performance = self.adas_model.evaluate(scenario)\n        \n        # Return inverse of performance (higher is more adversarial)\n        return 1.0 - performance['safety_score']",
                "language": "python"
        },
        {
                "type": "subheading",
                "content": "Gradient-Based Attacks",
                "id": "gradient-based-attacks"
        },
        {
                "type": "paragraph",
                "content": "Implemented gradient-based methods to find minimal perturbations that cause failures:"
        },
        {
                "type": "code",
                "content": "def gradient_based_attack(self, scenario, target_failure_mode):\n    \"\"\"\n    Find minimal changes to scenario that cause specific failure\n    \"\"\"\n    \n    # Convert scenario to tensor\n    scenario_tensor = torch.tensor(scenario, requires_grad=True)\n    \n    # Define loss function for target failure\n    def attack_loss(scenario):\n        prediction = self.adas_model(scenario)\n        return -torch.log(prediction[target_failure_mode])\n    \n    # Gradient descent to find adversarial scenario\n    optimizer = torch.optim.Adam([scenario_tensor], lr=0.01)\n    \n    for iteration in range(100):\n        loss = attack_loss(scenario_tensor)\n        loss.backward()\n        optimizer.step()\n        \n        # Ensure physical constraints\n        scenario_tensor = self.enforce_constraints(scenario_tensor)\n        \n    return scenario_tensor.detach().numpy()",
                "language": "python"
        },
        {
                "type": "heading",
                "content": "Simulation Framework",
                "id": "simulation-framework"
        },
        {
                "type": "subheading",
                "content": "CARLA Integration",
                "id": "carla-integration"
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
                "type": "subheading",
                "content": "Performance Metrics",
                "id": "performance-metrics"
        },
        {
                "type": "paragraph",
                "content": "Implemented comprehensive evaluation metrics:"
        },
        {
                "type": "code",
                "content": "class PerformanceEvaluator:\n    def __init__(self):\n        self.metrics = {\n            'safety': SafetyMetrics(),\n            'comfort': ComfortMetrics(), \n            'efficiency': EfficiencyMetrics(),\n            'robustness': RobustnessMetrics()\n        }\n    \n    def evaluate_adas_performance(self, simulation_results):\n        \"\"\"Comprehensive performance evaluation\"\"\"\n        \n        results = {}\n        \n        # Safety metrics\n        results['collision_rate'] = self.metrics['safety'].collision_rate(simulation_results)\n        results['near_miss_rate'] = self.metrics['safety'].near_miss_rate(simulation_results)\n        results['emergency_brake_rate'] = self.metrics['safety'].emergency_brake_rate(simulation_results)\n        \n        # Comfort metrics  \n        results['jerk_magnitude'] = self.metrics['comfort'].jerk_magnitude(simulation_results)\n        results['acceleration_smoothness'] = self.metrics['comfort'].acceleration_smoothness(simulation_results)\n        \n        # Efficiency metrics\n        results['fuel_consumption'] = self.metrics['efficiency'].fuel_consumption(simulation_results)\n        results['travel_time'] = self.metrics['efficiency'].travel_time(simulation_results)\n        \n        # Robustness metrics\n        results['sensor_degradation_handling'] = self.metrics['robustness'].sensor_degradation_handling(simulation_results)\n        results['weather_adaptation'] = self.metrics['robustness'].weather_adaptation(simulation_results)\n        \n        return results",
                "language": "python"
        },
        {
                "type": "heading",
                "content": "Validation Results",
                "id": "validation-results"
        },
        {
                "type": "subheading",
                "content": "Statistical Findings",
                "id": "statistical-findings"
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
                "type": "subheading",
                "content": "Performance Improvements",
                "id": "performance-improvements"
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
                "type": "subheading",
                "content": "Validation Confidence",
                "id": "validation-confidence"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Statistical Significance</strong>: 95% confidence intervals for all metrics - <strong>Reproducibility</strong>: Results consistent across multiple simulation runs - <strong>Real-World Correlation</strong>: 89% correlation with limited real-world testing"
        },
        {
                "type": "heading",
                "content": "Impact & Future Work",
                "id": "impact--future-work"
        },
        {
                "type": "subheading",
                "content": "Technical Contributions",
                "id": "technical-contributions"
        },
        {
                "type": "paragraph",
                "content": "- <strong>Novel Methodology</strong>: First comprehensive framework combining stochastic and adversarial validation - <strong>Open Source Tools</strong>: Released simulation framework for research community - <strong>Industry Adoption</strong>: Framework adopted by 3 major automotive manufacturers - <strong>Academic Impact</strong>: 2 peer-reviewed publications and 1 conference presentation"
        },
        {
                "type": "subheading",
                "content": "Future Directions",
                "id": "future-directions"
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
                "type": "subheading",
                "content": "Key Insights",
                "id": "key-insights"
        },
        {
                "type": "paragraph",
                "content": "- <span style='color: #ff6b3d;'>Stochastic methods</span> are essential for comprehensive coverage of the scenario space - Adversarial testing reveals critical failure modes not found through traditional testing - Simulation-based validation can significantly reduce real-world testing requirements - Statistical rigor is crucial for building confidence in autonomous system safety"
        },
        {
                "type": "paragraph",
                "content": "This project demonstrated the critical importance of advanced simulation methods in validating complex autonomous systems and provided a foundation for future research in this rapidly evolving field."
        }
];

  return (
    <div className="size-full relative">
      <Header />

      {/* Hero Section */}
      <section>
        <div className="max-w-7xl mx-auto px-8 py-20">
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

      {/* Mobile Table of Contents */}
      <section className="lg:hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <details className="bg-background border-2 border-border rounded-lg">
            <summary className="p-4 cursor-pointer font-mono text-sm hover:bg-muted transition-colors">
              // TABLE OF CONTENTS
            </summary>
            <div className="p-4 pt-0">
              <TableOfContents items={tocItems} />
            </div>
          </details>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Table of Contents - Desktop */}
            <aside className="hidden lg:block lg:col-span-3 pr-8">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Project Content */}
            <article className="lg:col-span-9">
              {/* Main Content Box */}
              <div className="bg-background p-8 md:p-12">
                <BlogContent blocks={contentBlocks} />
              </div>

              {/* Action Buttons */}
              {(projectData.github || projectData.demo) && (
                <div className="mt-8 bg-background p-8 md:p-12">
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    // PROJECT LINKS
                  </p>
                  <div className="flex gap-3">
                    {projectData.github && (
                      <a
                        href={projectData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono inline-flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {projectData.demo && (
                      <a
                        href={projectData.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="mt-8 bg-background p-8 md:p-12">
                <p className="font-mono text-sm text-muted-foreground mb-4">
                  // SHARE THIS PROJECT
                </p>
                <div className="flex gap-3">
                  <button className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono">
                    Twitter
                  </button>
                  <button className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono">
                    LinkedIn
                  </button>
                  <button className="px-4 py-2 border-2 border-border bg-background hover:bg-foreground hover:text-background transition-colors font-mono">
                    Copy Link
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}