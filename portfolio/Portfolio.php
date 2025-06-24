<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prince Singh | Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            background: #000 !important;
            color: #fff;
        }
        /* Add your CSS styles here */
        /* (Same CSS as before) */
        .form-input {
            background-color: #18181b;
            color: #fff;
            border: 1px solid #3b82f6;
            border-radius: 0.375rem;
            padding: 0.75rem 1rem;
            width: 100%;
            outline: none;
            transition: border-color 0.2s;
        }
        .form-input:focus {
            border-color: #2563eb;
        }
        .submit-btn {
            background-color: #2563eb;
            color: #fff;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            font-weight: 500;
            transition: background 0.2s;
            border: none;
        }
        .submit-btn:hover {
            background-color: #1d4ed8;
        }
        .card {
            background: #18181b;
            border-radius: 1rem;
            box-shadow: 0 4px 24px 0 rgba(59,130,246,0.08);
        }
        .skill-bar {
            background: #222;
            border-radius: 9999px;
            height: 0.5rem;
            width: 100%;
            margin-top: 0.5rem;
            overflow: hidden;
        }
        .skill-progress {
            background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
            height: 100%;
            border-radius: 9999px;
            transition: width 0.5s;
        }
        .section-title {
            color: #fff;
        }
        .blue-glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            opacity: 0.3;
            z-index: 0;
        }
        .blue-glow-1 {
            width: 400px;
            height: 400px;
            background: #2563eb;
            top: -100px;
            left: -100px;
        }
        .blue-glow-2 {
            width: 300px;
            height: 300px;
            background: #3b82f6;
            top: 60%;
            left: 80%;
        }
        .blue-glow-3 {
            width: 200px;
            height: 200px;
            background: #1e40af;
            top: 80%;
            left: 10%;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body class="bg-black text-white">
    <div class="blue-glow blue-glow-1"></div>
    <div class="blue-glow blue-glow-2"></div>
    <div class="blue-glow blue-glow-3"></div>
    
    <!-- Navbar -->
    <nav class="w-full py-6 px-4 md:px-10 lg:px-20 fixed z-50 backdrop-blur-sm bg-black bg-opacity-30">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
            <a href="#" class="text-2xl font-bold text-white">PRINCE SINGH</a>
            <div class="hidden md:flex space-x-8">
                <a href="#home" class="nav-link text-white hover:text-blue-400 transition">Home</a>
                <a href="#about" class="nav-link text-white hover:text-blue-400 transition">About</a>
                <a href="#skills" class="nav-link text-white hover:text-blue-400 transition">Skills</a>
                <a href="#projects" class="nav-link text-white hover:text-blue-400 transition">Projects</a>
                <a href="#contact" class="nav-link text-white hover:text-blue-400 transition">Contact</a>
            </div>
            <button class="md:hidden text-white">
                <i class="fas fa-bars text-xl"></i>
            </button>
        </div>
    </nav>
    
    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center px-4 md:px-10 lg:px-20 pt-20">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div class="hero-text">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Hi, I'm <span class="text-blue-400">Prince Singh</span></h1>
                <p class="text-lg md:text-xl mb-8 text-gray-300">Creating digital experiences that captivate and inspire. With a passion for clean code and beautiful design.</p>
                <div class="flex flex-wrap gap-4 mb-8">
                    <span class="animated-tag bg-blue-900 bg-opacity-30 px-4 py-2 rounded-full text-sm text-blue-200">HTML5</span>
                    <span class="animated-tag delay-1 bg-blue-900 bg-opacity-30 px-4 py-2 rounded-full text-sm text-blue-200">CSS3</span>
                    <span class="animated-tag delay-2 bg-blue-900 bg-opacity-30 px-4 py-2 rounded-full text-sm text-blue-200">JavaScript</span>
                </div>
                <div class="flex space-x-4">
                    <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">Contact Me</a>
                    <a href="#projects" class="border border-blue-400 hover:bg-blue-900 hover:bg-opacity-30 text-white px-6 py-3 rounded-full font-medium transition">View Work</a>
                </div>
            </div>
            <div class="relative hidden md:block">
                <div class="w-full h-full bg-blue-900 bg-opacity-20 rounded-full blur-xl absolute -z-10"></div>
                <div class="w-full h-full bg-blue-900 bg-opacity-10 rounded-full blur-2xl absolute -z-20"></div>
                <img src="https://via.placeholder.com/500x500.png?text=Prince+Singh" alt="Prince Singh" class="rounded-full w-full max-w-sm mx-auto border-4 border-blue-500 border-opacity-30 hover:border-opacity-70 transition">
            </div>
        </div>
    </section>
    
    <!-- About Section -->
    <section id="about" class="py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-black via-blue-900/10 to-black">
        <div class="max-w-6xl mx-auto">
            <h2 class="section-title text-3xl md:text-4xl font-bold mb-12">About Me</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-2xl font-semibold mb-4">Career Objective</h3>
                    <p class="text-gray-300 mb-6">Looking for a challenging and task-oriented position in an organization which demands the best of my professional ability in terms of managerial and analytical skills and helps me in broadening and enhancing my current skill and knowledge and to be involved as a part of a team that dynamically works towards the growth of the organization and reach the top with determination, dedication, and hard work.</p>
                    <h3 class="text-2xl font-semibold mb-4">Professional Qualification</h3>
                    <p class="text-gray-300 mb-6">B Tech from BIET, Lucknow with 74% (2026).</p>
                    <h3 class="text-2xl font-semibold mb-4">Educational Qualification</h3>
                    <ul class="list-disc list-inside text-gray-300 mb-6">
                        <li>B Tech (IT) from AKTU University, Lucknow, in 2026.</li>
                        <li>12th from P.N National School, Gorakhpur, U.P in 2022.</li>
                        <li>10th from P.N Nation School, Gorakhpur, U.P in 2020.</li>
                    </ul>
                    <h3 class="text-2xl font-semibold mb-4">Significant Accomplishments</h3>
                    <ul class="list-disc list-inside text-gray-300 mb-6">
                        <li>Recognized as Best Performer in “chess” in 2022.</li>
                        <li>Awarded for the best performer award in volleyball in Srijan sports in 2023.</li>
                        <li>Active participation in “web development” workshops at all levels.</li>
                        <li>Active participation in Seminar & workshop at BIET Lucknow.</li>
                        <li>Built a dynamic E-Commerce website using Java, JSP, and MySQL.</li>
                        <li>Developed an AI-based Proctoring System.</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-2xl font-semibold mb-4">Software Skills</h3>
                    <ul class="list-disc list-inside text-gray-300 mb-6">
                        <li>Java</li>
                        <li>PHP</li>
                        <li>Web development (HTML, CSS, JS)</li>
                        <li>Bootstrap 5</li>
                        <li>MySQL</li>
                        <li>Basic Python, C++ & C</li>
                        <li>MS Office, Excel, PowerPoint</li>
                    </ul>
                    <h3 class="text-2xl font-semibold mb-4">Strengths</h3>
                    <ul class="list-disc list-inside text-gray-300 mb-6">
                        <li>Strong analytical skills for writing clean, bug-free code and debugging applications.</li>
                        <li>Able to identify issues quickly and develop efficient, scalable solutions.</li>
                        <li>Quick to learn and implement new technologies, frameworks, and tools.</li>
                        <li>Determined to learn with a practical approach.</li>
                        <li>Good communication and management skills.</li>
                    </ul>
                    <h3 class="text-2xl font-semibold mb-4">Fields of Interest</h3>
                    <ul class="list-disc list-inside text-gray-300 mb-6">
                        <li>Web Development</li>
                        <li>App Development</li>
                        <li>Cyber Security</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Skills Section -->
    <section id="skills" class="py-20 px-4 md:px-10 lg:px-20">
        <div class="max-w-6xl mx-auto">
            <h2 class="section-title text-3xl md:text-4xl font-bold mb-12">My Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card p-8">
                    <h3 class="text-2xl font-semibold mb-6">Technical Skills</h3>
                    <div class="space-y-6">
                        <div>
                            <div class="flex justify-between">
                                <span>HTML5 & CSS3</span>
                                <span>95%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 95%;"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <span>JavaScript</span>
                                <span>90%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 90%;"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <span>React.js</span>
                                <span>85%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 85%;"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <span>Node.js</span>
                                <span>80%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 80%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card p-8">
                    <h3 class="text-2xl font-semibold mb-6">Professional Skills</h3>
                    <div class="space-y-6">
                        <div>
                            <div class="flex justify-between">
                                <span>Communication</span>
                                <span>90%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 90%;"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <span>Team Work</span>
                                <span>95%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 95%;"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <span>Project Management</span>
                                <span>85%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 85%;"></div>
                            </div>
                        </div>
                        <div>
                            <div class="flex justify-between">
                                <span>Creativity</span>
                                <span>90%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" style="width: 90%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Projects Section -->
    <section id="projects" class="py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-black via-blue-900/10 to-black">
        <div class="max-w-6xl mx-auto">
            <h2 class="section-title text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="card p-6">
                    <div class="h-48 bg-blue-900 bg-opacity-20 rounded-lg mb-6 overflow-hidden">
                        <img src="https://via.placeholder.com/500x300.png?text=E-Commerce+Website" alt="E-Commerce Website" class="w-full h-full object-cover">
                    </div>
                    <h3 class="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                    <p class="text-gray-300 mb-4">A full-featured online store with product catalog, cart, and checkout system.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="text-xs px-3 py-1 bg-blue-900 bg-opacity-30 rounded-full text-blue-200">Java</span>
                        <span class="text-xs px-3 py-1 bg-blue-900 bg-opacity-30 rounded-full text-blue-200">JSP</span>
                        <span class="text-xs px-3 py-1 bg-blue-900 bg-opacity-30 rounded-full text-blue-200">MySQL</span>
                    </div>
                    <a href="#" class="text-blue-400 hover:text-blue-300 flex items-center">
                        View Project <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
                <div class="card p-6">
                    <div class="h-48 bg-blue-900 bg-opacity-20 rounded-lg mb-6 overflow-hidden">
                        <img src="https://via.placeholder.com/500x300.png?text=Proctor+AI" alt="Proctor AI" class="w-full h-full object-cover">
                    </div>
                    <h3 class="text-xl font-semibold mb-2">Proctor AI</h3>
                    <p class="text-gray-300 mb-4">An AI-based proctoring system for online examinations.</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="text-xs px-3 py-1 bg-blue-900 bg-opacity-30 rounded-full text-blue-200">AI</span>
                        <span class="text-xs px-3 py-1 bg-blue-900 bg-opacity-30 rounded-full text-blue-200">Machine Learning</span>
                    </div>
                    <a href="#" class="text-blue-400 hover:text-blue-300 flex items-center">
                        View Project <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4 md:px-10 lg:px-20">
        <div class="max-w-6xl mx-auto">
            <h2 class="section-title text-3xl md:text-4xl font-bold mb-12">Contact Me</h2>
            <form action="contact.php" method="POST" class="space-y-6">
                <div>
                    <label for="name" class="block text-gray-300">Name</label>
                    <input type="text" id="name" name="name" required class="form-input">
                </div>
                <div>
                    <label for="email" class="block text-gray-300">Email</label>
                    <input type="email" id="email" name="email" required class="form-input">
                </div>
                <div>
                    <label for="message" class="block text-gray-300">Message</label>
                    <textarea id="message" name="message" rows="5" required class="form-input"></textarea>
                </div>
                <button type="submit" class="submit-btn">Send Message</button>
            </form>
        </div>
    </section>
    
    <footer class="py-6 text-center text-gray-400">
        <p>&copy; 2025 Prince Singh. All rights reserved.</p>
    </footer>
</body>
</html>
