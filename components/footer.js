class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: var(--gray-900);
                    color: var(--gray-300);
                    padding: 4rem 2rem;
                }
                
                .footer-container {
                    max-width: 1440px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    margin-bottom: 1.5rem;
                    display: inline-block;
                }
                
                .footer-description {
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: var(--gray-700);
                    color: white;
                    transition: all 0.2s;
                }
                
                .social-link:hover {
                    background-color: var(--primary-500);
                    transform: translateY(-2px);
                }
                
                .footer-heading {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: white;
                    margin-bottom: 1.5rem;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                
                .footer-link {
                    color: var(--gray-400);
                    text-decoration: none;
                    transition: color 0.2s;
                }
                
                .footer-link:hover {
                    color: var(--primary-400);
                }
                
                .copyright {
                    text-align: center;
                    margin-top: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid var(--gray-700);
                    color: var(--gray-500);
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <div class="footer-container">
                <div>
                    <a href="/" class="footer-logo">NeoAz</a>
                    <p class="footer-description">
                        Creating digital experiences that inspire and engage.
                    </p>
                    <div class="social-links">
                        <a href="#" class="social-link">
                            <i data-feather="github"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="twitter"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="linkedin"></i>
                        </a>
                        <a href="#" class="social-link">
                            <i data-feather="dribbble"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Quick Links</h3>
                    <div class="footer-links">
                        <a href="#about" class="footer-link">About</a>
                        <a href="#projects" class="footer-link">Projects</a>
                        <a href="#contact" class="footer-link">Contact</a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Resources</h3>
                    <div class="footer-links">
                        <a href="#" class="footer-link">Blog</a>
                        <a href="#" class="footer-link">Tutorials</a>
                        <a href="#" class="footer-link">Design System</a>
                    </div>
                </div>
                
                <div>
                    <h3 class="footer-heading">Contact</h3>
                    <div class="footer-links">
                        <a href="mailto:hello@neoaz.dev" class="footer-link">hello@neoaz.dev</a>
                        <a href="#" class="footer-link">GitHub</a>
                        <a href="#" class="footer-link">Twitter</a>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                &copy; ${new Date().getFullYear()} NeoAz. All rights reserved.
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
