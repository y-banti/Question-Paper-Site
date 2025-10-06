document.addEventListener('DOMContentLoaded', () => {
    // --- DATA & STATE ---
    const products = [
        // This is an example of how to add a manual note.
        // To add more, just copy this entire block (from { to },) and paste it below.
        { 
            id: 'BEE University Paper', 
            name: 'BEE University Paper', 
            description: 'NEP 2024 BEE University Question Paper', 
            pdfUrl: 'https://drive.google.com/file/d/1x8mXVCGFRZDX44Y5ytMEULlobZvhfHWu/preview' // Replace with your PDF link
        },
        // Example of a product with only 
        {
            id: 'Maths-Notes-01',
            name: 'Maths Notes',
            description: 'Comprehensive notes covering algebra, geometry, and calculus topics for high school students.',
            pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
        },

        {
            id: 'Communication Skills University Question Paper',
            name: 'Communication Skill University Question Paper',
            description: 'NEP 2024 Communication Skill University Question Paper',
            pdfUrl: 'https://drive.google.com/file/d/1jJf2AW4cHbmbilLmQ0bbQW6vlJ10j3LP/preview'
        }    
    ];
    let currentProduct = null;

    // --- DOM ELEMENTS ---
    const productContainer = document.getElementById('products');
    const viewerModal = document.getElementById('viewerModal');
    const searchBar = document.getElementById('searchBar');
    const noResultsDiv = document.getElementById('no-results');

    // --- FUNCTIONS ---

    function renderProducts(filter = '') {
        productContainer.innerHTML = '';
        const filteredProducts = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
        noResultsDiv.style.display = filteredProducts.length === 0 ? 'block' : 'none';
        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            // UPDATED: Added card-top-border class for new styling
            card.className = 'bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col card-top-border';
            card.innerHTML = `
                <div class="p-6 flex-grow">
                    <h3 class="text-xl font-bold mb-2">${product.name}</h3>
                    <!-- UPDATED: Removed fixed height, added line-clamp to handle long text -->
                    <p class="text-gray-600 mb-4 text-sm line-clamp-3">${product.description}</p>
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
            document.getElementById('viewerTitle').textContent = currentProduct.name;
            const pdfViewer = document.getElementById('pdfViewer');
            pdfViewer.src = currentProduct.pdfUrl;
            viewerModal.style.display = 'flex';
        }
    }

    // --- EVENT LISTENERS ---
    const debounce = (fn, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn(...args), delay);
        };
    };
    
    searchBar.addEventListener('input', debounce((e) => renderProducts(e.target.value), 300));

    productContainer.addEventListener('click', (e) => {
        const button = e.target.closest('.view-pdf-btn');
        if (button) {
            const productId = button.dataset.productId;
            openViewer(productId);
        }
    });

    document.getElementById('closeViewerButton').addEventListener('click', () => {
        viewerModal.style.display = 'none';
        document.getElementById('pdfViewer').src = 'about:blank'; // Clear the viewer
    });

    // --- INITIALIZATION ---
    renderProducts();
});

