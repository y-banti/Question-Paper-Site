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

        {},

        // 👉 Add more papers here:
        // {
        //     id: 'CSE-2nd-Year-DBMS-Paper',
        //     name: 'DBMS University Question Paper',
        //     description: 'CSE 2nd Year DBMS previous year question paper.',
        //     branch: 'CSE',
        //     year: '2nd Year',
        //     pdfUrl: 'YOUR_DRIVE_OR_PDF_LINK'
        // },
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

    // --- FUNCTIONS ---

    function renderProducts() {
        productContainer.innerHTML = '';

        const textQuery = (searchBar.value || '').toLowerCase();
        const selectedBranch = branchFilter.value;
        const selectedYear = yearFilter.value;

        const filteredProducts = products.filter(p => {
            const matchesBranch = !selectedBranch || p.branch === selectedBranch;
            const matchesYear = !selectedYear || p.year === selectedYear;
            const matchesText =
                !textQuery ||
                p.name.toLowerCase().includes(textQuery) ||
                p.description.toLowerCase().includes(textQuery);

            return matchesBranch && matchesYear && matchesText;
        });

        if (filteredProducts.length === 0) {
            noResultsDiv.classList.remove('hidden');
        } else {
            noResultsDiv.classList.add('hidden');
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            // Use your Tailwind + custom card-top-border style
            card.className = 'bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col card-top-border';

            card.innerHTML = `
                <div class="p-6 flex-grow">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-xl font-bold">${product.name}</h3>
                        <span class="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">
                            ${product.branch} · ${product.year}
                        </span>
                    </div>
                    <p class="text-gray-600 mb-4 text-sm line-clamp-3">
                        ${product.description}
                    </p>
                </div>
                <div class="p-6 bg-gray-50 flex justify-end items-center">
                    <button data-product-id="${product.id}" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded-lg transition duration-300 view-pdf-btn">
                        View PDF
                    </button>
                </div>
            `;
            productContainer.appendChild(card);
        });
    }

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
