document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resumeForm');
    const modal = new bootstrap.Modal(document.getElementById('resumePreviewModal'));

    // Enhanced validation patterns
    const patterns = {
        // Name: Allows international names with accents, spaces, hyphens, and apostrophes
        name: /^(?:[A-Za-zÀ-ÿ][-'A-Za-zÀ-ÿ\s]{0,48}[A-Za-zÀ-ÿ]|[A-Za-zÀ-ÿ])$/,
        
        // Job Title: Allows common job title characters and formats
        jobTitle: /^[A-Za-zÀ-ÿ](?:[A-Za-zÀ-ÿ0-9\s\-&@.,()/']{1,48}[A-Za-zÀ-ÿ0-9)])?$/,
        
        // Email: Comprehensive email validation
        email: /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/,
        
        // Phone: International format with various separators
        phone: /^(?:\+?\d{1,4}[-. ]?)?\(?(?:\d{1,4})\)?[-. ]?\d{1,4}[-. ]?\d{1,9}$/,
        
        // LinkedIn: Strict LinkedIn URL format
        linkedin: /^(?:https?:\/\/)?(?:www\.)?linkedin\.com\/(?:in|pub|company)\/[\w-]{3,100}\/?$/,
        
        // Summary: Allows paragraphs with proper punctuation
        summary: /^(?=[\s\S]{10,1000}$)[a-zA-Z0-9À-ÿ][\s\S]*[.!?]$/,
        
        // Skills: Allows technical skills with versions and special characters
        skills: /^[A-Za-zÀ-ÿ0-9](?:[A-Za-zÀ-ÿ0-9\s#+.\/(),&-]{0,48}[A-Za-zÀ-ÿ0-9)])?$/,
        
        // Degree: Allows academic qualifications with proper formatting
        degree: /^[A-Za-zÀ-ÿ](?:[A-Za-zÀ-ÿ0-9\s,.'()&-]{3,98}[A-Za-zÀ-ÿ0-9)])?$/,
        
        // Institution: Allows educational institution names
        institution: /^[A-Za-zÀ-ÿ](?:[A-Za-zÀ-ÿ0-9\s,.'()&-]{0,98}[A-Za-zÀ-ÿ0-9)])?$/,
        
        // Graduation Year: Allows years from 1900 to 2099
        graduationYear: /^(?:19|20)\d{2}$/,
        
        // Job Position: Allows job titles with special characters
        jobPosition: /^[A-Za-zÀ-ÿ](?:[A-Za-zÀ-ÿ0-9\s\-&@.,()/']{1,98}[A-Za-zÀ-ÿ0-9)])?$/,
        
        // Company: Allows company names with special characters
        company: /^[A-Za-zÀ-ÿ0-9](?:[A-Za-zÀ-ÿ0-9\s\-&@.,()/']{0,98}[A-Za-zÀ-ÿ0-9)])?$/,
        
        // Responsibilities: Allows detailed descriptions with proper punctuation
        responsibilities: /^(?=[\s\S]{10,2000}$)[A-Za-zÀ-ÿ0-9][\s\S]*[.!?]$/,
        
        // Date validation (YYYY-MM)
        date: /^\d{4}-(0[1-9]|1[0-2])$/
    };

    // Enhanced validation function with custom messages
    function validateField(input, pattern) {
        const value = input.value.trim();
        const isValid = pattern.test(value);
        
        input.classList.toggle('is-valid', isValid);
        input.classList.toggle('is-invalid', !isValid);
        
        // Add or update validation message
        let messageDiv = input.nextElementSibling;
        if (!messageDiv || !messageDiv.classList.contains('validation-feedback')) {
            messageDiv = document.createElement('div');
            messageDiv.classList.add('validation-feedback');
            input.parentNode.insertBefore(messageDiv, input.nextSibling);
        }
        
        if (!isValid) {
            let message = 'Please enter a valid value.';
            if (input.id === 'fullName') {
                message = 'Please enter a valid name (2-50 characters).';
            } else if (input.id === 'email') {
                message = 'Please enter a valid email address.';
            } else if (input.id === 'phone') {
                message = 'Please enter a valid phone number.';
            } else if (input.id === 'linkedin') {
                message = 'Please enter a valid LinkedIn URL.';
            } else if (input.classList.contains('job-title')) {
                message = 'Please enter a valid job title (3-100 characters).';
            } else if (input.classList.contains('responsibilities')) {
                message = 'Please enter valid responsibilities (10-2000 characters).';
            }
            messageDiv.textContent = message;
            messageDiv.classList.add('invalid-feedback');
            messageDiv.classList.remove('valid-feedback');
        } else {
            messageDiv.textContent = '✓';
            messageDiv.classList.add('valid-feedback');
            messageDiv.classList.remove('invalid-feedback');
        }
        
        return isValid;
    }

    // Add validation listeners to form fields
    function addValidationListener(element, pattern) {
        if (element) {
            element.addEventListener('input', () => validateField(element, pattern));
        }
    }

    // Add Experience Entry
    document.getElementById('addExperience').addEventListener('click', function() {
        const container = document.getElementById('experienceContainer');
        const template = container.querySelector('.experience-entry').cloneNode(true);
        
        template.querySelectorAll('input, textarea').forEach(input => {
            input.value = '';
            input.classList.remove('is-valid', 'is-invalid');
        });
        
        if (container.children.length > 0) {
            const removeBtn = document.createElement('button');
            removeBtn.className = 'btn btn-danger btn-sm position-absolute top-0 end-0 m-3';
            removeBtn.innerHTML = 'Remove';
            removeBtn.onclick = function() {
                template.remove();
            };
            template.style.position = 'relative';
            template.appendChild(removeBtn);
        }
        
        // Add validation to new fields
        template.querySelector('.job-title').addEventListener('input', e => 
            validateField(e.target, patterns.jobPosition));
        template.querySelector('.company').addEventListener('input', e => 
            validateField(e.target, patterns.company));
        template.querySelector('.responsibilities').addEventListener('input', e => 
            validateField(e.target, patterns.responsibilities));
        
        container.appendChild(template);
    });

    // Add Education Entry
    document.getElementById('addEducation').addEventListener('click', function() {
        const container = document.getElementById('educationContainer');
        const template = container.querySelector('.education-entry').cloneNode(true);
        
        template.querySelectorAll('input').forEach(input => {
            input.value = '';
            input.classList.remove('is-valid', 'is-invalid');
        });
        
        if (container.children.length > 0) {
            const removeBtn = document.createElement('button');
            removeBtn.className = 'btn btn-danger btn-sm position-absolute top-0 end-0 m-3';
            removeBtn.innerHTML = 'Remove';
            removeBtn.onclick = function() {
                template.remove();
            };
            template.style.position = 'relative';
            template.appendChild(removeBtn);
        }

        // Add validation to new fields
        template.querySelector('.degree').addEventListener('input', e => 
            validateField(e.target, patterns.degree));
        template.querySelector('.institution').addEventListener('input', e => 
            validateField(e.target, patterns.institution));
        template.querySelector('.graduation-year').addEventListener('input', e => 
            validateField(e.target, patterns.graduationYear));
        
        container.appendChild(template);
    });

    // Handle current job checkbox
    document.addEventListener('change', function(e) {
        if (e.target.classList.contains('current-job')) {
            const endDateInput = e.target.closest('.experience-entry').querySelector('.end-date');
            endDateInput.disabled = e.target.checked;
            if (e.target.checked) {
                endDateInput.value = '';
            }
        }
    });

    // Add validation to initial form fields
    addValidationListener(document.getElementById('fullName'), patterns.name);
    addValidationListener(document.getElementById('jobTitle'), patterns.jobTitle);
    addValidationListener(document.getElementById('email'), patterns.email);
    addValidationListener(document.getElementById('phone'), patterns.phone);
    addValidationListener(document.getElementById('linkedin'), patterns.linkedin);
    addValidationListener(document.getElementById('summary'), patterns.summary);
    addValidationListener(document.getElementById('skills'), patterns.skills);

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;

        // Validate all required fields
        const requiredFields = {
            'fullName': patterns.name,
            'jobTitle': patterns.jobTitle,
            'email': patterns.email,
            'phone': patterns.phone,
            'summary': patterns.summary,
            'skills': patterns.skills
        };

        for (const [fieldId, pattern] of Object.entries(requiredFields)) {
            const field = document.getElementById(fieldId);
            if (!validateField(field, pattern)) {
                isValid = false;
                field.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        // Validate experience entries
        document.querySelectorAll('.experience-entry').forEach(entry => {
            const jobTitle = entry.querySelector('.job-title');
            const company = entry.querySelector('.company');
            const responsibilities = entry.querySelector('.responsibilities');
            const startDate = entry.querySelector('.start-date');
            const endDate = entry.querySelector('.end-date');

            if (!validateField(jobTitle, patterns.jobPosition) ||
                !validateField(company, patterns.company) ||
                !validateField(responsibilities, patterns.responsibilities) ||
                !validateDateField(startDate) ||
                (!entry.querySelector('.current-job').checked && !validateDateField(endDate))) {
                isValid = false;
            }
        });

        // Validate education entries
        document.querySelectorAll('.education-entry').forEach(entry => {
            const degree = entry.querySelector('.degree');
            const institution = entry.querySelector('.institution');
            const graduationYear = entry.querySelector('.graduation-year');

            if (!validateField(degree, patterns.degree) ||
                !validateField(institution, patterns.institution) ||
                !validateField(graduationYear, patterns.graduationYear)) {
                isValid = false;
            }
        });

        if (!isValid) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        generateResume();
        modal.show();
    });

    function generateResume() {
        const data = {
            fullName: document.getElementById('fullName').value,
            jobTitle: document.getElementById('jobTitle').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            linkedin: document.getElementById('linkedin').value,
            summary: document.getElementById('summary').value,
            skills: document.getElementById('skills').value.split(',').map(skill => skill.trim()),
            experience: Array.from(document.querySelectorAll('.experience-entry')).map(entry => ({
                jobTitle: entry.querySelector('.job-title').value,
                company: entry.querySelector('.company').value,
                startDate: entry.querySelector('.start-date').value,
                endDate: entry.querySelector('.current-job').checked ? 'Present' : entry.querySelector('.end-date').value,
                responsibilities: entry.querySelector('.responsibilities').value
            })),
            education: Array.from(document.querySelectorAll('.education-entry')).map(entry => ({
                degree: entry.querySelector('.degree').value,
                institution: entry.querySelector('.institution').value,
                graduationYear: entry.querySelector('.graduation-year').value
            }))
        };

        // Update preview modal with resume data
        const preview = document.getElementById('resumePreview');
        preview.innerHTML = `
            <div class="resume-header">
                <h1>${data.fullName}</h1>
                <h2>${data.jobTitle}</h2>
                <div class="contact-info">
                    <p>${data.email} | ${data.phone}</p>
                    <p>${data.linkedin}</p>
                </div>
            </div>
            <div class="resume-section">
                <h3>Professional Summary</h3>
                <p>${data.summary}</p>
            </div>
            <div class="resume-section">
                <h3>Skills</h3>
                <ul>
                    ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </div>
            <div class="resume-section">
                <h3>Professional Experience</h3>
                ${data.experience.map(exp => `
                    <div class="experience-item">
                        <h4>${exp.jobTitle} at ${exp.company}</h4>
                        <p class="date">${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}</p>
                        <p>${exp.responsibilities}</p>
                    </div>
                `).join('')}
            </div>
            <div class="resume-section">
                <h3>Education</h3>
                ${data.education.map(edu => `
                    <div class="education-item">
                        <h4>${edu.degree}</h4>
                        <p>${edu.institution}, ${edu.graduationYear}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function formatDate(dateString) {
        if (dateString === 'Present') return dateString;
        const date = new Date(dateString + '-01');
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    }

    // Additional date validation for experience entries
    function validateDateField(input) {
        const value = input.value;
        const isValid = patterns.date.test(value);
        
        if (isValid) {
            const date = new Date(value + '-01');
            const now = new Date();
            if (date > now) {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
                return false;
            }
        }
        
        input.classList.toggle('is-valid', isValid);
        input.classList.toggle('is-invalid', !isValid);
        return isValid;
    }

    // Add date validation to existing and new experience entries
    document.querySelectorAll('.start-date, .end-date').forEach(dateInput => {
        dateInput.addEventListener('input', () => validateDateField(dateInput));
    });

    // Modified experience entry addition to include date validation
    const originalAddExperience = document.getElementById('addExperience').onclick;
    document.getElementById('addExperience').onclick = function() {
        originalAddExperience.call(this);
        const newEntry = document.querySelector('.experience-entry:last-child');
        newEntry.querySelectorAll('.start-date, .end-date').forEach(dateInput => {
            dateInput.addEventListener('input', () => validateDateField(dateInput));
        });
    };

    // Download functionality
    document.getElementById('downloadResume').addEventListener('click', function() {
        const element = document.getElementById('resumePreview');
        html2pdf()
            .set({
                margin: [10, 10],
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            })
            .from(element)
            .save();
    });
});