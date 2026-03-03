document.addEventListener('DOMContentLoaded', () => {
    // --- DATA & STATE ---
    const products = [
        {
            id: 'BEE-University-Paper',
            name: 'Basic of Electronics Engg PYQ',
            description: 'NEP 2024 BEE University Question Paper',
            branch: 'IT & CSE',        // Common for all branches (change if needed)
            year: '1st SEM',        // Set your actual year
            pdfUrl: 'https://drive.google.com/file/d/1x8mXVCGFRZDX44Y5ytMEULlobZvhfHWu/preview'
        },

        {
            id: 'Communication-Skills-University-Question-Paper',
            name: 'Communication Skill PYQ',
            description: 'NEP 2024 Communication Skill University Question Paper',
            branch: 'IT & CSE',        // Common subject
            year: '1st SEM',        // Set your actual year
            pdfUrl: 'https://drive.google.com/file/d/1jJf2AW4cHbmbilLmQ0bbQW6vlJ10j3LP/preview'
        },
        {
            id: 'Problem-Solving-using-C-University-Question-Paper',
            name: 'Problem Solving using C PYQ',
            description: 'NEP 2024 Problem Solving using C University Question Paper',
            branch: 'IT & CSE',        // Common subject
            year: '1st SEM',
            pdfUrl: 'https://drive.google.com/file/d/1CFJAJ2PR1cuqcOBuJaq9EQgYyYf4XjuD/preview'
        },
        {
            id: 'Maths-Applied-Algebra-University-Question-Paper',
            name: 'Maths Applied Algebra PYQ',
            description: 'NEP 2024 Maths Applied Algebra University Question Paper',
            branch: 'IT & CSE',        // Common subject
            year: '1st SEM',
            pdfUrl: 'https://drive.google.com/file/d/1swatBfp9BE89g0SIEsFqmiqhab48WFY-/preview'
        },
        {
            id: 'Essentials-of-Chemistry-University-Question-Paper',
            name: 'Essentials of Chemistry PYQ',
            description: 'NEP 2024 Essentials of Chemistry University Question Paper',
            branch: 'IT & CSE',        // Common subject
            year: '1st SEM',
            pdfUrl: 'https://drive.google.com/file/d/1TFnQG7e7YPYSDKLLoSBSurhLdBL6Zils/preview'
        },

        // 2nd SEM PAPERS


        {
            id: 'Mathematical-Foundations-of-Computer-Science-University-Question-Paper',
            name: 'Mathematical Foundations of Computer Science PYQ',
            description: 'NEP 2024 Mathematical Foundations of Computer Science University Question Paper',
            branch: 'IT & CSE',
            year: '2nd SEM',
            pdfUrl: 'https://drive.google.com/file/d/171tDtuvE4Sat2ziZEa65Q7fzvlYgrTtU/preview'
        },
        {
            id: 'Essentials-of-Physics-University-Question-Paper',
            name: 'Essentials of Physics PYQ',
            description: 'NEP 2024 Essentials of Physics University Question Paper',
            branch: 'IT & CSE',
            year: '2nd SEM',
            pdfUrl: 'https://drive.google.com/file/d/1Ab4QuevleI-MXkx9YOuQtKOFWJq618Pm/preview'
        },
        {
            id: 'Consciousness-Studies-University-Question-Paper',
            name: 'Consciousness Studies PYQ',
            description: 'NEP 2024 Consciousness Studies University Question Paper',
            branch: 'IT & CSE',
            year: '2nd SEM',
            pdfUrl: 'https://drive.google.com/file/d/11kTTNKxVkLA0wnyQqzTjX5E8sZW1yaPL/preview'
        },
        {
            id: 'Python-Programming-University-Question-Paper',
            name: 'Python Programming PYQ',
            description: 'NEP 2024 Python Programming University Question Paper',
            branch: 'IT & CSE',
            year: '2nd SEM',
            pdfUrl: 'https://drive.google.com/file/d/17rQH7Q1XJLuCV2eAOst_F1ZxDdmwPf1E/preview'
        },
        {
            id: 'Computer-Architecture-and-Organization-University-Question-Paper',
            name: 'Computer Architecture and Organization PYQ',
            description: 'NEP 2024 Computer Architecture and Organization University Question Paper',
            branch: 'IT & CSE',
            year: '2nd SEM',
            pdfUrl: 'https://drive.google.com/file/d/1hSpEfEq_-CwsQcoo6Ra2kx8-L6eZoqVR/preview'
        },

        // 3rd SEM PAPERS

        {
            id: 'Data-Structures-&-Algorithms-University-Question-Paper',
            name: 'Data Structures & Algorithms PYQ',
            description: 'NEP 2025 Data Structures & Algorithms University Question Paper',
            branch: 'IT',
            year: '3rd SEM',
            pdfUrl: 'https://drive.google.com/file/d/1fgINnneEa0nCludoibNRdfUcUJWGN53r/preview'
        },
        {
            id: 'Probability-and-Statistics-University-Question-Paper',
            name: 'Probability and Statistics PYQ',
            description: 'NEP 2025 Probability and Statistics University Question Paper',
            branch: 'IT',
            year: '3rd SEM',
            pdfUrl: 'https://drive.google.com/file/d/1b-gy7L_1_XM8OBBLLNowbQx5Pa1NRSNh/preview'
        },
        {
            id: 'Object-Oriented-Programming-University-Question-Paper',
            name: 'Object-Oriented Programming PYQ',
            description: 'NEP 2025 Object-Oriented Programming University Question Paper',
            branch: 'IT',
            year: '3rd SEM',
            pdfUrl: 'https://drive.google.com/file/d/1LB8iCX6WnmHjlyPHhUuXecK_E6u2vWtS/preview'
        },
        {
            id: 'Entrepreneurship-and-Startup-University-Question-Paper',
            name: 'Entrepreneurship and Startup PYQ',
            description: 'NEP 2025 Entrepreneurship and Startup University Question Paper',
            branch: 'IT',
            year: '3rd SEM',
            pdfUrl: 'https://drive.google.com/file/d/1bOc9kWoRlzkJgpsgmfTshZeLUZZAx9L_/preview'
        },
        {
            id: 'Constitution-Of-India-University-Question-Paper',
            name: 'Constitution of India PYQ',
            description: 'NEP 2025 Constitution of India University Question Paper',
            branch: 'IT',
            year: '3rd SEM',
            pdfUrl: 'https://drive.google.com/file/d/1D_NjY2BHEP-raC21K5Abb_IgttyIgQ3m/preview'
        },
        {
            id: 'Open-Elective-1-(Automobile-Engineering)-University-Question-Paper',
            name: 'Open Elective 1 (Automobile Engineering) PYQ',
            description: 'NEP 2025 Open Elective 1 (Automobile Engineering) University Question Paper',
            branch: 'IT',
            year: '3rd SEM',
            pdfUrl: 'https://drive.google.com/file/d/1JYtrAJ05zAiWcQDCRyVbsXyobv3ZXGKM/preview'
        },

    ];

    let currentProduct = null;

    // --- DOM ELEMENTS ---
    const productContainer = document.getElementById('products');
    const viewerModal = document.getElementById('viewerModal');
    const searchBar = document.getElementById('searchBar');
    const noResultsDiv = document.getElementById('no-results');

    // NEW: branch & year filters
    const branchFilter = document.getElementById('branchFilter');
    const yearFilter = document.getElementById('yearFilter');

    const pdfViewer = document.getElementById('pdfViewer');
    const viewerTitle = document.getElementById('viewerTitle');
    const closeViewerButton = document.getElementById('closeViewerButton');

    const resultsCount = document.getElementById('resultsCount');

    // --- FUNCTIONS ---

    function renderProducts() {
        productContainer.innerHTML = '';

        const textQuery = (searchBar.value || '').toLowerCase();
        const selectedBranch = branchFilter.value;
        const selectedYear = yearFilter.value;

        const filteredProducts = products.filter(p => {
            // Improved Filter logic: check if selected branch is part of the product's branch list
            const matchesBranch = !selectedBranch || p.branch.toLowerCase().includes(selectedBranch.toLowerCase());
            const matchesYear = !selectedYear || p.year === selectedYear;
            const matchesText =
                !textQuery ||
                p.name.toLowerCase().includes(textQuery) ||
                p.description.toLowerCase().includes(textQuery);

            return matchesBranch && matchesYear && matchesText;
        });

        // Results counter update
        if (resultsCount) {
            resultsCount.textContent = `Found ${filteredProducts.length} ${filteredProducts.length === 1 ? 'Paper' : 'Papers'}`;
        }

        if (filteredProducts.length === 0) {
            noResultsDiv.classList.remove('hidden');
        } else {
            noResultsDiv.classList.add('hidden');
        }

        // Define color mapping for semesters (Border, Text, and Hover Background)
        const semColorMap = {
            '1st SEM': { border: 'border-indigo-600', text: 'text-indigo-600', hoverBg: 'hover:bg-indigo-600', light: 'bg-indigo-50' },
            '2nd SEM': { border: 'border-emerald-600', text: 'text-emerald-600', hoverBg: 'hover:bg-emerald-600', light: 'bg-emerald-50' },
            '3rd SEM': { border: 'border-amber-600', text: 'text-amber-600', hoverBg: 'hover:bg-amber-600', light: 'bg-amber-50' },
            '4th SEM': { border: 'border-rose-600', text: 'text-rose-600', hoverBg: 'hover:bg-rose-600', light: 'bg-rose-50' },
            '5th SEM': { border: 'border-fuchsia-600', text: 'text-fuchsia-600', hoverBg: 'hover:bg-fuchsia-600', light: 'bg-fuchsia-50' },
            '6th SEM': { border: 'border-cyan-600', text: 'text-cyan-600', hoverBg: 'hover:bg-cyan-600', light: 'bg-cyan-50' },
            '7th SEM': { border: 'border-orange-600', text: 'text-orange-600', hoverBg: 'hover:bg-orange-600', light: 'bg-orange-50' },
            '8th SEM': { border: 'border-teal-600', text: 'text-teal-600', hoverBg: 'hover:bg-teal-600', light: 'bg-teal-50' }
        };

        filteredProducts.forEach((product, index) => {
            const card = document.createElement('div');

            const semColors = semColorMap[product.year] || { border: 'border-gray-300', text: 'text-gray-600', hoverBg: 'hover:bg-gray-600', light: 'bg-gray-50' };

            // Staggered animation delay
            const delay = index * 0.08;
            card.style.animationDelay = `${delay}s`;
            card.className = `bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 overflow-hidden transform hover:-translate-y-3 transition-all duration-500 flex flex-col card-top-border animate-card ${semColors.border} border border-gray-100`;

            const isNew = index < 3; // Just making the first few marked as new for visuals

            card.innerHTML = `
                <div class="p-8 flex-grow relative">
                    ${isNew ? '<span class="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-widest animate-pulse">New</span>' : ''}
                    <div class="mb-6">
                        <span class="inline-block px-3 py-1 rounded-xl ${semColors.light} ${semColors.text} text-[10px] font-black uppercase tracking-wider mb-4 border ${semColors.border} opacity-70">
                            ${product.year}
                        </span>
                        <h3 class="text-2xl font-black text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors">${product.name}</h3>
                    </div>
                    
                    <div class="flex items-center gap-3 mb-6">
                        <div class="flex -space-x-2">
                           <div class="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-400">?</div>
                        </div>
                        <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">${product.branch}</span>
                    </div>

                    <p class="text-slate-500 font-medium text-sm leading-relaxed line-clamp-2">
                        ${product.description}
                    </p>
                </div>
                <div class="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center gap-4">
                    <!-- Download Icon Button -->
                    <button data-download-url="${product.pdfUrl}" class="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-slate-200 text-slate-400 hover:border-indigo-500 hover:text-indigo-500 hover:bg-white transition-all duration-300 download-btn group shadow-sm" title="Download Source">
                        <svg class="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </button>
                    <!-- View Full Paper -->
                    <button data-product-id="${product.id}" class="flex-grow bg-white border-2 border-slate-200 hover:border-indigo-600 text-slate-700 hover:text-indigo-600 font-black py-3 px-6 rounded-2xl transition-all duration-300 view-pdf-btn shadow-sm text-sm uppercase tracking-widest">
                        View Paper
                    </button>
                </div>
            `;
            productContainer.appendChild(card);
        });
    }

    function downloadPDF(url) {
        // Convert Google Drive preview link to direct download link
        // Preview: .../file/d/[ID]/preview
        // Download: .../uc?export=download&id=[ID]
        const fileIdMatch = url.match(/\/d\/(.+)\//);
        if (fileIdMatch && fileIdMatch[1]) {
            const downloadUrl = `https://docs.google.com/uc?export=download&id=${fileIdMatch[1]}`;
            window.open(downloadUrl, '_blank');
        } else {
            // Fallback if URL pattern is different
            window.open(url, '_blank');
        }
    }

    // --- EVENT LISTENERS ---

    function openViewer(productId) {
        currentProduct = products.find(p => p.id === productId);
        if (currentProduct) {
            viewerTitle.textContent = currentProduct.name;
            pdfViewer.src = currentProduct.pdfUrl;

            // Show modal: remove hidden and ensure flex
            viewerModal.classList.remove('hidden');
            viewerModal.classList.add('flex');
        }
    }

    function closeViewer() {
        viewerModal.classList.add('hidden');
        viewerModal.classList.remove('flex');
        pdfViewer.src = 'about:blank';
    }

    // --- HELPERS ---
    const debounce = (fn, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn(...args), delay);
        };
    };

    // --- EVENT LISTENERS ---

    // Download button click (event delegation)
    productContainer.addEventListener('click', (e) => {
        const downloadBtn = e.target.closest('.download-btn');
        if (downloadBtn) {
            const url = downloadBtn.dataset.downloadUrl;
            downloadPDF(url);
        }
    });

    // Search typing
    searchBar.addEventListener('input', debounce(() => renderProducts(), 200));

    // NEW: Branch + Year change
    branchFilter.addEventListener('change', () => renderProducts());
    yearFilter.addEventListener('change', () => renderProducts());

    // View PDF button click (event delegation)
    productContainer.addEventListener('click', (e) => {
        const button = e.target.closest('.view-pdf-btn');
        if (button) {
            const productId = button.dataset.productId;
            openViewer(productId);
        }
    });

    // Close modal button
    closeViewerButton.addEventListener('click', closeViewer);

    // Close on backdrop click (clicking dark area)
    viewerModal.addEventListener('click', (e) => {
        if (e.target === viewerModal) {
            closeViewer();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeViewer();
        }
    });

    // --- INITIALIZATION ---
    renderProducts();
});
