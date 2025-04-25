/**
 * IT Creative Code Academy - Course Modal
 * Handles course modal functionality
 */

const courseData = {
  'html-css': {
    title: 'HTML & CSS Mastery',
    description: 'Master the fundamentals of web development with our comprehensive HTML & CSS course.',
    duration: '8 weeks',
    level: 'Beginner',
    topics: [
      'HTML5 Semantic Elements',
      'CSS3 Modern Layout',
      'Flexbox & Grid Systems',
      'Responsive Design',
      'CSS Animations',
      'SASS/SCSS'
    ],
    projects: [
      'Personal Portfolio',
      'Restaurant Website',
      'E-commerce Layout',
      'Social Media Dashboard'
    ],
    prerequisites: 'No prior experience required',
    certification: 'Industry-recognized certification upon completion'
  },
  'javascript': {
    title: 'JavaScript Programming',
    description: 'Learn modern JavaScript and build interactive web applications.',
    duration: '10 weeks',
    level: 'Intermediate',
    topics: [
      'ES6+ Features',
      'DOM Manipulation',
      'Async Programming',
      'APIs & Fetch',
      'Modern JS Frameworks',
      'Testing & Debugging'
    ],
    projects: [
      'Task Manager App',
      'Weather Dashboard',
      'Real-time Chat App',
      'Game Development'
    ],
    prerequisites: 'Basic HTML & CSS knowledge',
    certification: 'JavaScript Developer Certification'
  },
  // Add data for other courses...
};

export function initCourseModals() {
  const courseButtons = document.querySelectorAll('.course-btn');
  
  courseButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const courseId = button.closest('.course-card').dataset.tech;
      showCourseModal(courseId);
    });
  });
}

function showCourseModal(courseId) {
  const course = courseData[courseId];
  if (!course) return;
  
  const modal = document.createElement('div');
  modal.className = 'course-modal';
  
  const content = `
    <div class="course-modal-content">
      <div class="course-modal-header">
        <h2>${course.title}</h2>
        <button class="course-modal-close">×</button>
      </div>
      <div class="course-modal-body">
        <div class="course-info">
          <h3>Course Overview</h3>
          <p>${course.description}</p>
          <div class="course-meta">
            <p><i class="fas fa-clock"></i> Duration: ${course.duration}</p>
            <p><i class="fas fa-signal"></i> Level: ${course.level}</p>
          </div>
        </div>
        <div class="course-curriculum">
          <h3>What You'll Learn</h3>
          <ul class="course-details-list">
            ${course.topics.map(topic => `
              <li><i class="fas fa-check-circle"></i>${topic}</li>
            `).join('')}
          </ul>
          <h3>Projects</h3>
          <ul class="course-details-list">
            ${course.projects.map(project => `
              <li><i class="fas fa-project-diagram"></i>${project}</li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
  
  modal.innerHTML = content;
  document.body.appendChild(modal);
  
  // Animate modal in
  requestAnimationFrame(() => {
    modal.classList.add('active');
  });
  
  // Close button functionality
  const closeBtn = modal.querySelector('.course-modal-close');
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.remove();
    }, 300);
  });
  
  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      setTimeout(() => {
        modal.remove();
      }, 300);
    }
  });
}