'use client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Download, ExternalLink, Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Typewriter } from 'react-simple-typewriter';


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <ModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              <Typewriter
              words={['Joseph Okumu', 'Data Scientist', 'Data Analyst', 'ML Engineer']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transforming data into actionable insights through machine learning, statistical analysis, and data visualization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="min-w-40">
                <Mail className="mr-2 h-4 w-4" />
                <a href="#contact" className="hover:text-primary transition-colors">Get in Touch</a>
              </Button>
              {/* <Button variant="outline" size="lg" className="min-w-40">
                <Download className="mr-2 h-4 w-4" />
                <a href="/resume.pdf" download>Download resume</a>
              </Button> */}
              <a
              href="/resume.pdf"
              download="Joseph_Okumu_Resume.pdf"
              className="inline-block"
              >
                <Button
                variant="outline"
                size="lg"
                className="min-w-40 flex items-center justify-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                  </Button>
                  </a>
            </div>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://github.com/OkumuJ" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/okumuj/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:jokumu883@gmail" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Passionate Data Scientist</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a dedicated data scientist with a passion for extracting meaningful insights from complex datasets.
                With expertise in machine learning, statistical analysis, and data visualization, I help organizations
                make data-driven decisions that drive growth and innovation.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My journey in data science began with a curiosity about patterns hidden in data. Over the years,
                I've developed proficiency in Python, R, SQL, and various machine learning frameworks, allowing me
                to tackle diverse challenges from predictive modeling to natural language processing.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Machine Learning</Badge>
                <Badge variant="secondary">Data Visualization</Badge>
                <Badge variant="secondary">Statistical Analysis</Badge>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://ugc.same-assets.com/gluvO9I0W3W2DhehIUDpAy8eteGwwfou.jpeg"
                  alt="Data visualization and analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Programming Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Python</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>SQL</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Excel</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>R</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Machine Learning */}
            <Card>
              <CardHeader>
                <CardTitle>Machine Learning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Scikit-learn</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>TensorFlow</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>PyTorch</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>XGBoost</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Data Visualization */}
            <Card>
              <CardHeader>
                <CardTitle>Data Visualization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Matplotlib</span>
                    <span>90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Seaborn</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Plotly</span>
                    <span>80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Tableau</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Project 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Customer Churn Prediction
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Machine learning model to predict customer churn using ensemble methods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Developed a predictive model achieving 92% accuracy using Random Forest and XGBoost.
                  Implemented feature engineering and hyperparameter tuning to optimize performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Scikit-learn</Badge>
                  <Badge variant="outline">XGBoost</Badge>
                  <Badge variant="outline">Pandas</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Sales Forecasting Dashboard
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Interactive dashboard for time series analysis and sales forecasting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Built an interactive Streamlit dashboard with ARIMA and Prophet models for sales forecasting.
                  Includes real-time data updates and customizable prediction intervals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Streamlit</Badge>
                  <Badge variant="outline">Prophet</Badge>
                  <Badge variant="outline">Plotly</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Sentiment Analysis API
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  NLP model for real-time sentiment analysis with REST API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Deployed a BERT-based sentiment analysis model as a REST API using FastAPI.
                  Processes 1000+ requests per minute with 89% accuracy on benchmark datasets.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">BERT</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience & Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Experience */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Experience
                </h3>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">Operation Associates</h4>
                        <Badge variant="secondary">Current</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Uber ltd.</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="mr-1 h-3 w-3" />
                        2022 - Present
                        <MapPin className="ml-3 mr-1 h-3 w-3" />
                        Nairobi, Kenya
                      </div>
                      <p className="text-sm">
                        I Played a key role in enhancing Uber’s platform security by verifying driver 
                        identities through accurate selfie-to-profile photo matching, 
                        streamlining data workflows to boost efficiency by 20%, and contributing to a 
                        safer ride-sharing experience through collaborative remote data analysis and quality assurance.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">Data Analyst</h4>
                      <p className="text-sm text-muted-foreground mb-2">Celestial crafters</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="mr-1 h-3 w-3" />
                        06/2024 - 11/2024
                        <MapPin className="ml-3 mr-1 h-3 w-3" />
                        reomte Nairobi, Kenya
                      </div>
                      <p className="text-sm">
                        Collaborated in a paired team to perform end-to-end exploratory data analysis on 
                        retail sales data, applying data cleaning and statistical methods to uncover customer 
                        behavior insights and visualize trends through Python and Power BI dashboards.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Education
                </h3>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold mb-2">Data Science</h4>
                        <Badge variant="secondary">Current</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">ALX</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="mr-1 h-3 w-3" />
                        2025 - Present
                        <MapPin className="ml-3 mr-1 h-3 w-3" />
                        Nairobi, Kenya
                      </div>
                      <p className="text-sm">
                        Specializing in Data visualization, python, and machine learning.
                        Expanding my knowledge in data science and analysis.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">B.S. Computer Technology</h4>
                      <p className="text-sm text-muted-foreground mb-2">Multimedia University of Kenya</p>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Calendar className="mr-1 h-3 w-3" />
                        2020 - 2024
                        <MapPin className="ml-3 mr-1 h-3 w-3" />
                        Nairobi, Kenya
                      </div>
                      <p className="text-sm">
                        Focus on algorithms, data structures, and software engineering.
                        
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Let's Connect</CardTitle>
                <CardDescription>
                  I'm always interested in discussing new opportunities and collaborations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input placeholder="Project Collaboration" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell me about your project or opportunity..."
                      className="min-h-32"
                    />
                  </div>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-center text-sm text-muted-foreground py-4">
            © {new Date().getFullYear()} Joseph Otieno
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/OkumuJ" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/okumuj/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:jokumu883@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
